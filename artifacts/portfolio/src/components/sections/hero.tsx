import { useEffect, useState, useRef } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@assets/234661028_1784815542245.jpg";

const TYPEWRITER_TEXTS = ["Data Science Enthusiast", "ML Engineer", "Python Developer"];

interface NNode {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
}
interface Pulse { a: NNode; b: NNode; t: number; }

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  // ── Typewriter ───────────────────────────────────────────────────────
  useEffect(() => {
    const current = TYPEWRITER_TEXTS[textIndex];
    const speed = isDeleting ? 50 : 100;
    const delay =
      isDeleting && displayText === "" ? 500
      : !isDeleting && displayText === current ? 2000
      : speed;

    const t = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((p) => (p + 1) % TYPEWRITER_TEXTS.length);
      } else {
        setDisplayText((p) =>
          isDeleting ? p.slice(0, -1) : current.slice(0, p.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [displayText, isDeleting, textIndex]);

  // ── Neural-network canvas (matches reference implementation exactly) ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODE_COUNT = 55;
    const LINK_DIST = 150;
    let nodes: NNode[] = [];
    let pulses: Pulse[] = [];
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 1,
        });
      }
    };
    initNodes();

    const maybeSpawnPulse = (links: { a: NNode; b: NNode }[]) => {
      if (Math.random() < 0.02 && links.length > 0) {
        const link = links[Math.floor(Math.random() * links.length)];
        pulses.push({ a: link.a, b: link.b, t: 0 });
      }
    };

    const draw = () => {
      // Fill background (keeps design-system colour consistent)
      ctx.fillStyle = "#0B0E14";
      ctx.fillRect(0, 0, w, h);

      const links: { a: NNode; b: NNode }[] = [];

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            links.push({ a, b });
          }
        }
      }

      maybeSpawnPulse(links);

      // Pulses
      pulses = pulses.filter((p) => p.t < 1);
      for (const p of pulses) {
        p.t += 0.02;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 211, 252, 0.9)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#7DD3FC";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.75)";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#38BDF8";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #10141C 0%, #0B0E14 70%)" }}
    >
      {/* Neural-network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* ── Text Content ─────────────────────────────────────── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Eyebrow label — matches reference exactly */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans font-medium mb-5"
              style={{
                fontSize: "13px",
                letterSpacing: "3px",
                color: "#38BDF8",
                textTransform: "uppercase",
              }}
            >
              Data Science Enthusiast &middot; ML Engineer
            </motion.p>

            {/* Name headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-bold tracking-tight mb-5"
              style={{
                fontSize: "clamp(40px, 7vw, 76px)",
                lineHeight: 1.05,
                letterSpacing: "-1px",
                color: "#E7EAF0",
              }}
            >
              Muhammad{" "}
              <span
                style={{
                  color: "#38BDF8",
                  textShadow: "0 0 24px rgba(56, 189, 248, 0.45)",
                }}
              >
                Sufyan
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono h-10 flex items-center justify-center lg:justify-start mb-4"
              style={{ fontSize: "18px", color: "#AEB4C2" }}
            >
              <span className="mr-2 font-bold" style={{ color: "#38BDF8" }}>&gt;</span>
              <span>{displayText}</span>
              <span
                className="inline-block w-[3px] h-[22px] ml-1 animate-pulse"
                style={{ backgroundColor: "#38BDF8" }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-10 leading-relaxed max-w-[560px]"
              style={{ fontSize: "17px", color: "#8891A5" }}
            >
              Turning data into actionable insights — currently building intelligent systems at FlyRank AI.
            </motion.p>

            {/* CTA buttons — border-radius 8px per reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-11"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto font-sans cursor-pointer transition-all duration-250"
                style={{
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#38BDF8",
                  color: "#0B0E14",
                  border: "1px solid #38BDF8",
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 30px rgba(56, 189, 248, 0.6)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 20px rgba(56, 189, 248, 0.35)";
                  el.style.transform = "translateY(0)";
                }}
              >
                View Projects
              </button>

              <a
                href="/Muhammad_Sufyan_Resume.docx"
                download
                className="w-full sm:w-auto font-sans flex items-center justify-center gap-2 no-underline transition-all duration-250"
                style={{
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  color: "#E7EAF0",
                  border: "1px solid #2A3142",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#38BDF8";
                  el.style.color = "#38BDF8";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#2A3142";
                  el.style.color = "#E7EAF0";
                }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social links — text links per reference */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              {[
                { label: "GitHub", href: "https://github.com/sufyancreatives" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-sufyan-04b48b38a/" },
                { label: "Email", href: "mailto:sufyancreatvies@gmail.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-sans transition-all duration-200 no-underline"
                  style={{
                    fontSize: "13px",
                    color: "#8891A5",
                    borderBottom: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "#38BDF8";
                    el.style.borderBottomColor = "#38BDF8";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "#8891A5";
                    el.style.borderBottomColor = "transparent";
                  }}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Profile Photo ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Ambient glow */}
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: "radial-gradient(circle, rgba(56,189,248,0.20) 0%, transparent 70%)",
                  filter: "blur(24px)",
                  transform: "scale(1.15)",
                }}
              />
              {/* Border ring */}
              <div
                className="absolute inset-0 rounded-full p-[3px]"
                style={{ background: "linear-gradient(135deg, #38BDF8, #7DD3FC)" }}
              >
                <div className="w-full h-full rounded-full bg-[#0B0E14]" />
              </div>
              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Muhammad Sufyan"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div
          className="w-[1px] h-16"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
