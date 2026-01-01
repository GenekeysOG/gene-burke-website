import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            About
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-foreground">
            The <span className="text-accent italic">Story</span>
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src="/images/IMG_1302.jpg"
                  alt="Gene Burke"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="font-sans text-lg text-foreground/90 leading-relaxed">
                Gene Burke comes from a people who sang their way through joy and trouble alike. Music was never decoration in his life, it was language, inheritance, and survival. Rooted in gospel and jazz, and deeply shaped by choral tradition, his work listens for harmony not only in sound, but in spirit.
              </p>

              <p className="font-sans text-lg text-foreground/90 leading-relaxed">
                He carries a musical legacy that echoes behind him and steadies his step forward. Gene is connected to the Burke lineage, including Solomon Burke, known to the world as the "King of Rock 'n Soul," and Vladimir "Laddie" Burke of The Showstoppers. From them comes not imitation, but understanding: that music must tell the truth, and that a voice is meant to carry something larger than itself.
              </p>

              <p className="font-sans text-lg text-foreground/90 leading-relaxed">
                Gene's musical journey began early, shaped by piano keys, choirs, congregational singing, and the discipline of listening closely. Over the years, he has grown as a pianist, vocalist, songwriter, arranger, and director; performing and creating in spaces where faith, community, and artistry meet. Choral music has left a lasting imprint on his sound, teaching him how individual voices can stand on their own while still serving something collective and whole.
              </p>

              <p className="font-sans text-lg text-foreground/90 leading-relaxed">
                There is an empathy in Gene's music that cannot be separated from who he is. He approaches every song as a conversation, every rehearsal as a shared table. His care for people shows up in the way he shapes a phrase, builds a harmony, or leaves room for silence. The music does not rush; it breathes. It listens. It makes space.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Extended Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 max-w-4xl"
        >
          <div className="space-y-8">
            <p className="font-sans text-lg text-foreground/90 leading-relaxed">
              His experience spans a wide range of collaborative and creative work. He serves as Minister of Music at Salt & Light Community Church and contributes regularly to regional and national congregational gatherings, offering musical leadership rooted in depth, clarity, and care. Alongside this work, Gene is a co-creator of the CLEAR Project, a multi-genre songwriting and recording initiative developed in partnership with Villanova University, where music becomes a meeting place for reflection, imagination, and renewal.
            </p>

            <p className="font-sans text-lg text-foreground/90 leading-relaxed">
              Gene is also co-founder of Look Up Radio, a Stellar Award–nominated internet radio station that he owned and operated with his wife, Fatima. The station served as a platform for thoughtful curation, emerging voices, and music that uplifted without spectacle—extending Gene's commitment to listening as a form of leadership.
            </p>

            <p className="font-sans text-lg text-foreground/90 leading-relaxed">
              As the owner of Master Key Music Group (MKMG), Gene supports the creative work of songwriters through production, recording, and administrative guidance. The goal is simple and steady: to help artists bring their music into the world with integrity, excellence, and care, without losing themselves in the process.
            </p>

            <p className="font-sans text-lg text-foreground/90 leading-relaxed">
              Teaching and mentorship sit close to Gene's heart. Through years of private instruction, he has walked alongside young musicians as they learn not only how to play, but how to listen, how to persist, and how to trust their own voice. His approach to mentorship is patient and relational, guided by the belief that music education is as much about formation as it is about technique.
            </p>

            <p className="font-sans text-lg text-foreground/90 leading-relaxed">
              Gene Burke's work lives at the intersection of legacy and care, discipline and compassion. Through performing, composing, directing, or teaching, he offers music that remembers where it comes from and honors where it is going. His songs do not ask for attention—they offer presence. And they stay with you, the way stories do, long after the sound has faded.
            </p>
          </div>
        </motion.div>

        {/* Legacy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 border-t border-border pt-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-12">
            Musical <span className="italic text-accent">Legacy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-border bg-card">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Family Connection</span>
              <h3 className="font-serif text-2xl font-medium text-foreground mt-3 mb-4">Solomon Burke</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Known to the world as the "King of Rock 'n Soul," Solomon Burke's influence on American music is immeasurable. His legacy of truth-telling through song continues through Gene's work.
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Family Connection</span>
              <h3 className="font-serif text-2xl font-medium text-foreground mt-3 mb-4">Vladimir "Laddie" Burke</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Of The Showstoppers, Laddie Burke brought soul and showmanship together. His spirit of performance and connection with audiences lives on in Gene's approach to music ministry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
