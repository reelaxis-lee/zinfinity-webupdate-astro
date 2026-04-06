import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/send-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact" }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to send message");
      }
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err: unknown) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email Us",
    content: "info@zinfinity.tech",
    description: "We'll respond within 24 hours"
  }, {
    icon: Phone,
    title: "Call Us",
    content: "832-263-1185",
    description: "Mon-Fri, 9am-6pm PST"
  }, {
    icon: MapPin,
    title: "Global Locations",
    content: "",
    description: "",
    locations: ["Southlake, Texas (HQ)", "London", "Amsterdam", "Melbourne", "Singapore", "Hong Kong"]
  }];
  return <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6">
              Get in Touch  
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Send us a Message</CardTitle>
                <CardDescription className="text-base">
                  Whether you have a challenge, a project, or just need an honest perspective, our team is here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input id="name" type="text" required value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="Your full name" className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input id="email" type="email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="you@company.com" className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input id="company" type="text" value={formData.company} onChange={e => setFormData({
                    ...formData,
                    company: e.target.value
                  })} placeholder="Your company name" className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea id="message" required value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder="Tell us about your project or questions..." className="w-full min-h-[150px]" />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-heading mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Peace of mind. Powered by Technology.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => <Card key={index} className="hover-lift shadow-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        {info.content && <p className="text-foreground font-medium mb-1">{info.content}</p>}
                        {info.locations && (
                          <ul className="text-muted-foreground text-sm space-y-1">
                            {info.locations.map((location, idx) => (
                              <li key={idx}>{location}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>;
};
export default Contact;