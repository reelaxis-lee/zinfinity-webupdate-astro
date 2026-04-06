import { useLocation, Link } from "@/lib/router";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 max-w-2xl mx-auto animate-fade-up">
        <h1 className="text-9xl font-heading text-accent mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-heading mb-6">
          Looks Like You Wiped Out
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          This wave doesn't exist. Let's get you back to shore.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
