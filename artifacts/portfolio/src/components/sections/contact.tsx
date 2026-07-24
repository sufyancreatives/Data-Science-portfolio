import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSendContactMessage } from "@workspace/api-client-react";
import { toast } from "sonner";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Terminal } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const sendMessage = useSendContactMessage();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    sendMessage.mutate(
      { data },
      {
        onSuccess: () => {
          toast.success("Transmission successful", {
            description: "Your message has been received. I'll respond shortly.",
          });
          form.reset();
        },
        onError: () => {
          toast.error("Transmission failed", {
            description: "Something went wrong. Please try again or reach out via email.",
          });
        },
      }
    );
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Initialize Connection</h2>
              <p className="text-muted-foreground">
                Looking to discuss a project, analyze some data, or just talk ML? My inbox is always open.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-card border border-border shadow-xl rounded-2xl p-6 md:p-8 relative">
              {/* Terminal Header Decoration */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 border-b border-border flex items-center px-4 rounded-t-2xl space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <div className="ml-4 font-mono text-xs text-muted-foreground flex items-center">
                  <Terminal className="w-3 h-3 mr-2" /> contact_script.py
                </div>
              </div>
              
              <div className="mt-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Name_</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background/50 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email_</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" className="bg-background/50 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Subject_</FormLabel>
                          <FormControl>
                            <Input placeholder="Freelance Project / Job Opportunity" className="bg-background/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Payload_</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Hello, I'd like to talk about..." 
                              className="min-h-[150px] resize-y bg-background/50 focus-visible:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full font-mono group" 
                      disabled={sendMessage.isPending}
                    >
                      {sendMessage.isPending ? (
                        "Executing..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                          Execute Send
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
