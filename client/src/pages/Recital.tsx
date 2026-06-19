import { motion } from "framer-motion";

export default function Recital() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Master Key Studio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-white">
              Recital <span className="text-accent italic">Registration</span>
            </h1>
            <p className="font-sans text-xl font-light text-muted-foreground max-w-2xl">
              Complete the form below to register for the upcoming recital.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* JotForm Embed */}
          <div className="w-full">
            <iframe
              id="JotFormIFrame-261696215328058"
              title="Recital Registration Form"
              src="https://form.jotform.com/261696215328058"
              allow="geolocation; microphone; camera; fullscreen"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "539px",
                border: "none",
              }}
              scrolling="no"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.handleIFrameMessage = function(e) {
                    if (typeof e.data === 'object') return;
                    var args = e.data.split(':');
                    var iframe = document.getElementById('JotFormIFrame-261696215328058');
                    if (!iframe) return;
                    switch (args[0]) {
                      case 'scrollIntoView':
                        iframe.scrollIntoView();
                        break;
                      case 'setHeight':
                        iframe.style.height = args[1] + 'px';
                        break;
                      case 'collapseErrorPage':
                        if (iframe.clientHeight > Number(args[1])) iframe.style.height = args[1] + 'px';
                        break;
                      case 'reloadPage':
                        window.location.reload();
                        break;
                      case 'loadScript':
                        if (!args[1]) break;
                        var src = args[1];
                        if (args.length > 3) { src = args[1] + ':' + args[2]; }
                        var script = document.createElement('script');
                        script.src = src;
                        document.body.appendChild(script);
                        break;
                      case 'exitFullscreen':
                        if (window.document.exitFullscreen) window.document.exitFullscreen();
                        else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
                        else if (window.document.mozCancelFullscreen) window.document.mozCancelFullscreen();
                        else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
                        else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
                        break;
                    }
                    var isJotForm = (e.origin.indexOf('jotform') > -1);
                    if (isJotForm && 'contentWindow' in iframe && 'postMessage' in iframe.contentWindow) {
                      var urls = { 'docurl': encodeURIComponent(document.URL), 'referrer': encodeURIComponent(document.referrer) };
                      iframe.contentWindow.postMessage(JSON.stringify({ type: 'urls', value: urls }), '*');
                    }
                  };
                  if (window.addEventListener) {
                    window.addEventListener('message', window.handleIFrameMessage, false);
                  } else if (window.attachEvent) {
                    window.attachEvent('onmessage', window.handleIFrameMessage);
                  }
                `,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
