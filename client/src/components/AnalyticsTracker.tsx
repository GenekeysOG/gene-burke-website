import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackPageview } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const [location] = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // Initial page_view is already sent by the gtag config snippet in index.html
      isFirstRender.current = false;
      return;
    }

    trackPageview(location);
  }, [location]);

  return null;
}
