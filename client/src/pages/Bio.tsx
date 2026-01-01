import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/images/Gene Headshot 2025.jpg" 
                alt="Gene Burke Portrait" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 order-2 lg:order-1 space-y-8"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-white mb-12">
              Harmony in <span className="text-accent italic">Spirit</span>
            </h1>

            <div className="space-y-6 font-sans text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              <p>
                Gene Burke comes from a people who sang their way through joy and trouble alike. Music was never decoration in his life, it was language, inheritance, and survival. Rooted in gospel and jazz, and deeply shaped by choral tradition, his work listens for harmony not only in sound, but in spirit.
              </p>
              <p>
                He carries a musical legacy that echoes behind him and steadies his step forward. Gene is connected to the Burke lineage, including Solomon Burke, known to the world as the "King of Rock 'n Soul," and Vladimir "Laddie" Burke of The Showstoppers. From them comes not imitation, but understanding: that music must tell the truth, and that a voice is meant to carry something larger than itself.
              </p>
              
              {/* Pull Quote - Moved after second paragraph */}
              <div className="py-8 my-4">
                <p 
                  className="text-2xl md:text-3xl italic text-accent leading-relaxed"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  "His songs do not ask for attention—they offer presence. And they stay with you, the way stories do, long after the sound has faded."
                </p>
              </div>
              
              <p>
                Gene's musical journey began early, shaped by piano keys, choirs, congregational singing, and the discipline of listening closely. Over the years, he has grown as a pianist, vocalist, songwriter, arranger, and director; performing and creating in spaces where faith, community, and artistry meet.
              </p>
              <p>
                There is an empathy in Gene's music that cannot be separated from who he is. He approaches every song as a conversation, every rehearsal as a shared table. His care for people shows up in the way he shapes a phrase, builds a harmony, or leaves room for silence. The music does not rush; it breathes. It listens. It makes space.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
