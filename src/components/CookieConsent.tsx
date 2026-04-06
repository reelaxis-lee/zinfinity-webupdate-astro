import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md text-primary-foreground p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/90 text-center sm:text-left">
          We use cookies to improve your experience. By continuing to use this site, you consent to our use of cookies.{" "}
          <a href="/privacy-policy" className="underline hover:text-secondary transition-colors">
            Privacy Policy
          </a>
        </p>
        <Button
          onClick={handleAccept}
          variant="secondary"
          size="sm"
          className="shrink-0"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
