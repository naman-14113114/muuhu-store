"use client";

import { useEffect } from "react";

const clarityScript = `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xr8mhvigut");
`;

export function ClarityAnalytics() {
  useEffect(() => {
    if (document.querySelector("script[data-muuhu-clarity='true']")) {
      return;
    }

    const script = document.createElement("script");
    script.dataset.muuhuClarity = "true";
    script.textContent = clarityScript;
    document.head.appendChild(script);
  }, []);

  return null;
}
