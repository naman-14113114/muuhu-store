"use client";

import Script from "next/script";

const tawkToConfigScript = `
window.Tawk_API = window.Tawk_API || {};
window.Tawk_LoadStart = new Date();
window.Tawk_API.customStyle = {
  zIndex: 50
};
`;

const tawkToPositionScript = `
(function(){
  if (document.documentElement.getAttribute('data-muuhu-tawk-positioner') === 'active') {
    return;
  }

  var desktop = { right: '28px', bottom: '128px' };
  var mobile = { right: '18px', bottom: '112px' };

  function isTawkFrame(frame) {
    var src = frame.getAttribute('src') || '';
    var title = frame.getAttribute('title') || '';
    var name = frame.getAttribute('name') || '';

    return src.indexOf('tawk.to') !== -1 ||
      src.indexOf('tawk.link') !== -1 ||
      title.toLowerCase().indexOf('tawk') !== -1 ||
      name.toLowerCase().indexOf('tawk') !== -1;
  }

  function positionTawkFrames() {
    var offset = window.matchMedia('(max-width: 767px)').matches ? mobile : desktop;
    var frames = document.getElementsByTagName('iframe');

    for (var i = 0; i < frames.length; i += 1) {
      if (!isTawkFrame(frames[i])) {
        continue;
      }

      if (frames[i].style.getPropertyValue('right') !== offset.right) {
        frames[i].style.setProperty('right', offset.right, 'important');
      }

      if (frames[i].style.getPropertyValue('bottom') !== offset.bottom) {
        frames[i].style.setProperty('bottom', offset.bottom, 'important');
      }
    }
  }

  document.documentElement.setAttribute('data-muuhu-tawk-positioner', 'active');
  window.__muuhuPositionTawkTo = positionTawkFrames;

  var observer = new MutationObserver(positionTawkFrames);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['src', 'style', 'title'],
    childList: true,
    subtree: true
  });

  window.addEventListener('load', positionTawkFrames);
  window.addEventListener('resize', positionTawkFrames);
  window.setInterval(positionTawkFrames, 2000);
  positionTawkFrames();
})();
`;

export function TawkToWidget() {
  return (
    <>
      <Script id="muuhu-tawk-position" strategy="afterInteractive">
        {tawkToPositionScript}
      </Script>
      <Script id="muuhu-tawk-config" strategy="afterInteractive">
        {tawkToConfigScript}
      </Script>
      <Script
        id="muuhu-tawk-widget"
        src="https://embed.tawk.to/6a5f29aaac21c71d47d7230c/1ju1rlhkd"
        strategy="afterInteractive"
      />
    </>
  );
}
