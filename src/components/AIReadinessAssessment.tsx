import { useState, useEffect } from "react";
import { X, Brain, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const DISMISS_KEY = "ai-readiness-dismissed";

const AIReadinessAssessment = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "" },
  });

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setShowBanner(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/send-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "ai-readiness" }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      console.error("AI readiness form error:", err);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const openModal = () => {
    setModalOpen(true);
    setShowBanner(false);
  };

  const handleModalClose = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      setSubmitted(false);
      form.reset();
    }
  };

  return (
    <>
      {/* Floating CTA Banner */}
      <div
        className={`fixed bottom-6 left-6 z-40 max-w-sm rounded-xl border border-border bg-background p-5 shadow-xl transition-all duration-500 ${
          showBanner
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-widest text-foreground uppercase">
              Is Your Organization AI-Ready?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Evaluate your safety posture and real-world preparedness for AI adoption.
            </p>
          </div>
        </div>

        <Button
          onClick={openModal}
          size="sm"
          className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Schedule Your Assessment
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Lead Capture Modal */}
      <Dialog open={modalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-md">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-center">Thank You!</DialogTitle>
                <DialogDescription className="text-center">
                  We've received your information. Our team will reach out with your personalized AI Readiness Assessment.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={() => handleModalClose(false)} variant="outline" className="mt-2">
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>AI Readiness Assessment</DialogTitle>
                <DialogDescription>
                  Find out how prepared your organization is to safely adopt and scale AI in real-world operations.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : "Get Your Assessment"}
                  </Button>
                </form>
              </Form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIReadinessAssessment;
