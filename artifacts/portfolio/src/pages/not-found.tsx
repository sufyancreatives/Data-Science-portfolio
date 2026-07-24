import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto" />
        <h1 className="text-4xl font-bold tracking-tight">404 - Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-mono">
            Return to Base
          </Link>
        </div>
      </div>
    </div>
  );
}
