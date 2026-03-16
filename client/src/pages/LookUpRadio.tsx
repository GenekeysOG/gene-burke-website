import { motion } from "framer-motion";
import { ArrowLeft, Instagram } from "lucide-react";
import { Link } from "wouter";
import { assetUrl } from "@/lib/utils";
import { pathFor } from "@/lib/basePath";

export default function LookUpRadio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Link */}
      <div className="container pt-24 pb-4">
        <Link 
          href={pathFor("/projects")}
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From Airwaves to Outreach:{" "}
            <span className="italic text-accent">The Legacy of Look Up Radio</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A digital sanctuary for Christian listeners across denominational, racial, and cultural lines.
          </p>
        </motion.div>
      </section>

      {/* Mission Image */}
      <section className="container pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg"
        >
          <img
            src={assetUrl("/images/look-up-radio-mission.jpg")}
            alt="Look Up Radio Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Article Content */}
      <article className="container pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Founded with a clear and disarmingly simple vision, Look Up Radio (LUR) emerged in Philadelphia, Pennsylvania during the early 2010s as a digital sanctuary for Christian listeners across denominational, racial, and cultural lines. At a time when internet radio was still carving out legitimacy, Look Up Radio recognized something early and acted on it decisively: community could be built online—and that community could be mobilized for real-world impact.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              LUR was more than a broadcaster. It was a companion, a connector, and, when necessary, a public witness—reminding listeners that faith was not only something to be consumed, but something to be lived.
            </p>
          </motion.div>

          {/* Foundation Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              A Foundation of <span className="italic text-accent">Faith and Values</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              At its core, Look Up Radio operated under the C.I.T.E. values system:
            </p>
            <ul className="space-y-3 mb-6 pl-6">
              <li className="text-lg text-foreground/90 flex items-start gap-3">
                <span className="text-accent font-bold">C</span>
                <span>Commitment to the cause</span>
              </li>
              <li className="text-lg text-foreground/90 flex items-start gap-3">
                <span className="text-accent font-bold">I</span>
                <span>Integrity in all actions</span>
              </li>
              <li className="text-lg text-foreground/90 flex items-start gap-3">
                <span className="text-accent font-bold">T</span>
                <span>Teamwork in partnerships</span>
              </li>
              <li className="text-lg text-foreground/90 flex items-start gap-3">
                <span className="text-accent font-bold">E</span>
                <span>Excellence in service</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              These values shaped both content and conduct. LUR's mission unfolded along two intentional tracks:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-accent">In-Reach</h3>
                <p className="text-foreground/80">
                  Strengthening the Church by amplifying diverse ministry voices, teaching, and worship expressions.
                </p>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-accent">Outreach</h3>
                <p className="text-foreground/80">
                  Extending Christian witness into the public square through advocacy, education, and community engagement.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Programming Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Programming, Voices, and <span className="italic text-accent">Cultural Reach</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Look Up Radio's programming reflected the breadth of Christian life. Musically, the station featured Traditional Gospel, Urban Contemporary Gospel, Christian Contemporary Music, Praise & Worship, and Christian Hip-Hop, while making a deliberate commitment to local and underground artists. LUR invested significant effort in procuring, vetting, and airing independent music—often serving as a first point of consistent exposure for emerging artists.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Talk programming was equally central to the station's identity. Signature shows included:
            </p>
            <div className="space-y-4 mb-6">
              <div className="border-l-2 border-accent pl-6">
                <h4 className="font-semibold text-lg">The Gene Keys Morning Show</h4>
                <p className="text-foreground/70">A weekday anchor blending music, faith, cultural commentary, humor, and lived experience.</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="font-semibold text-lg">#ThoseBaxters</h4>
                <p className="text-foreground/70">Featured music and interviews from Christian independent artists, as well as honest conversations centered on relationships, marriage, and family life.</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="font-semibold text-lg">Choir Storm w/ Zak Williams</h4>
                <p className="text-foreground/70">Featured choir music from various artists from around the country.</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="font-semibold text-lg">Word Weekends</h4>
                <p className="text-foreground/70">Sermon and teaching broadcasts featuring local pastors and ministries, extending the pulpit to a global audience.</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              Additional weekly shows addressed politics, comedy, church culture, and social issues—treating faith as intellectually engaged and socially responsible.
            </p>
          </motion.section>

          {/* 6-Year Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src={assetUrl("/images/6-Year.jpg")}
              alt="Look Up Radio 6 Year Anniversary"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Faith and Justice Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Faith, Justice, and <span className="italic text-accent">Public Witness</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              As national conversations around race, policing, and justice intensified, Look Up Radio made a conscious decision not to remain silent.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              In the wake of the killing of Michael Brown, an unarmed Black man shot by a police officer in Ferguson, Missouri, Look Up Radio organized a public protest at Philadelphia City Hall. The demonstration brought together faith leaders, listeners, and community members to publicly lament the loss of life and call for accountability, justice, and reform.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Beyond public protest, LUR created sustained space for dialogue through a series of Race and Faith Roundtable broadcasts. These special programs convened panels of on-air personalities, pastors, and community members to engage deeply with civil unrest and systemic injustice in America.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Rather than offering sound bites, these roundtables modeled difficult but necessary conversations—examining grief, anger, faith, law enforcement, and the Church's responsibility in moments of national crisis. In doing so, Look Up Radio treated Christian media not as an escape from reality, but as a forum for moral reckoning.
            </p>
          </motion.section>

          {/* Partnerships Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Partnerships and <span className="italic text-accent">Public Engagement</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Look Up Radio extended its reach through strategic partnerships across faith, sports, arts, and civic life. These collaborations included:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                "Harvest America",
                "Delaware 87ers (NBA D-League)",
                "Philadelphia Soul",
                "Kindred Awards",
                "FlipIt Concert Series",
                "Enon Music Group",
                "Root Magazine",
                "Mission Year"
              ].map((partner) => (
                <div key={partner} className="bg-card/30 border border-border/50 rounded px-4 py-3 text-center">
                  <span className="text-sm text-foreground/80">{partner}</span>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              Through these partnerships, LUR demonstrated that faith-based media could engage meaningfully with broader cultural institutions without diluting its mission.
            </p>
          </motion.section>

          {/* Concerts Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Concerts, Artists, and <span className="italic text-accent">Live Impact</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Look Up Radio also played a visible role in Philadelphia's live gospel and worship ecosystem. In partnership with local promoters, the station co-sponsored several concerts that brought nationally recognized artists to local venues, including:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "Tasha Cobbs Leonard",
                "Anita Wilson",
                "Tye Tribbett",
                "The Walls Group",
                "Vickie Yohe",
                "William McDowell",
                "For King and Country",
                "Travis Greene"
              ].map((artist) => (
                <span key={artist} className="bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 text-sm">
                  {artist}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              These events reinforced LUR's commitment to musical excellence while ensuring access to high-caliber worship experiences within the city.
            </p>
          </motion.section>

          {/* Leadership Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Leadership and <span className="italic text-accent">Recognition</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Look Up Radio was led by Gene "Keys" Burke, serving as CEO and Program Director. His leadership emphasized musical integrity, theological openness, and civic responsibility. Marketing, branding, product, and development were led by Fatima Burke, whose work expanded the station's reach and visibility.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The station's work was recognized through several industry honors, including:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-card/50 border border-border rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div>
                  <p className="font-semibold">Stellar Award Nomination</p>
                  <p className="text-sm text-muted-foreground">Internet Radio Station of the Year (2014)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card/50 border border-border rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div>
                  <p className="font-semibold">Blue Mic Award</p>
                  <p className="text-sm text-muted-foreground">Internet Radio Station of the Year (2012)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card/50 border border-border rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div>
                  <p className="font-semibold">Gospel Roundup Magazine</p>
                  <p className="text-sm text-muted-foreground">Top 5 Internet Radio Stations</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Digital Pioneer Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              A Digital Pioneer with an <span className="italic text-accent">Enduring Legacy</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Before streaming became dominant, Look Up Radio invested heavily in accessibility—broadcasting through a custom web player and mobile apps for Android, iPhone, and Blackberry. Notably, Look Up Radio was the <strong>first Internet Gospel radio station to integrate with smart-device platforms such as Google Home and Roku TV</strong>, extending faith-based programming into living rooms and hands-free home environments well ahead of industry norms.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Coupled with curated Life + Culture articles and intentionally designed programming, LUR built a global community rooted in faith, cultural awareness, and action.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Though its primary broadcasting years concluded around 2018, Look Up Radio's legacy remains clear: it demonstrated that Christian media could be musically excellent, culturally fluent, and morally courageous—without apology.
            </p>
          </motion.section>

          {/* Closing Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 border-t border-border"
          >
            <p className="font-script text-2xl md:text-3xl text-accent mb-8 leading-relaxed">
              "Look Up Radio didn't just play music.<br />
              It listened, spoke, gathered, and acted."
            </p>
            <a
              href="https://instagram.com/lookupradio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @lookupradio
            </a>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
