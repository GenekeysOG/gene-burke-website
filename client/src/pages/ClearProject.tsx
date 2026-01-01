import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ClearProject() {
  const songs = [
    {
      title: "Creator G-d (Masterpiece)",
      year: "2025",
      credits: "Written & Produced by Gene Burke. Vocals: Jaelyn Neal Holland"
    },
    {
      title: "No Hiding Place",
      year: "2025",
      credits: "Written by Fatima Burke & Gene Burke. Vocals: Malachi Holland, Jaelyn Neal Holland. Keys & Programming: Gene Burke · Drums: Joe Cephas · Bass: Manuel Arocho"
    },
    {
      title: "In the Beginning",
      year: "2025",
      credits: "Written by Fatima Burke. Produced by Gene Burke. Vocals: Jaelyn Neal Holland"
    },
    {
      title: "So Good (Creator of Everything)",
      year: "2025",
      credits: "Written by Fatima Burke & Gene Burke. Produced by Gene Burke. Vocals: Lyric Williams, Jamila Cole, Salt & Light Ensemble. Keys: Gene Burke · Drums: Kendall Lewis · Bass: Manuel Arocho · Organ: Troy Chambers · Trumpets: Elisha Holland, Judah Burke · Alto Sax: Micaiah Burke, Gabriel Holland"
    },
    {
      title: "I Need You",
      year: "2025",
      credits: "Written, Performed, and Programmed by Gene Burke"
    },
    {
      title: "Day After Day",
      year: "2025",
      credits: "Written & Produced by Gene Burke. Vocals: Amir Johnson, Jaelyn Neal Holland, Jamila Cole, Charise Johnson. Keys: Gene Burke · Drums: Kendall Lewis · Bass: Manuel Arocho · Organ: Troy Chambers · Trumpets: Elisha Holland, Judah Burke · Alto Sax: Micaiah Burke, Gabriel Holland"
    }
  ];

  const acknowledgments = [
    { name: "Fatima Burke", role: "Co-writer and creative anchor" },
    { name: "Christy Lang-Hearlson & Timothy Brunk", role: "CLEAR Project Grant Directors" },
    { name: "Monica Horvath", role: "Program Coordinator, Villanova University" },
    { name: "David & Laura Ash, Phil McMillian", role: "Composer Cohort" },
    { name: "Marcus Hong, Catherine Williams", role: "Facilitators" },
    { name: "The Salt & Light Music Ministry", role: "For breathing life into the songs" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Back Link */}
      <div className="container pt-24 pb-4">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <header className="container pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6">
          The <span className="italic text-accent">CLEAR</span> Project
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl font-light">
          Children's Liturgy, Ecology, and Renewal — A Lilly Endowment–Funded Collaboration with Villanova University
        </p>
      </header>

      {/* Featured Image */}
      <section className="container pb-16">
        <div className="relative aspect-[16/9] max-w-4xl overflow-hidden rounded-lg">
          <img 
            src="/assets/clear-team-stage.jpeg" 
            alt="CLEAR Project team on stage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="container pb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-8">Overview</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The CLEAR Project (Children's Liturgy, Ecology, and Renewal) was a two-year, Lilly Endowment–funded initiative hosted by Villanova University that brought together composers, theologians, educators, and church musicians to re-imagine congregational song centered on creation, ecology, and intergenerational worship.
            </p>
            <p>
              Through workshops, writing intensives, rehearsals, recordings, and public worship, CLEAR invited composers to create music that children, adults, and elders could sing together—songs rooted in theological depth, ecological awareness, and lived faith.
            </p>
            <p className="text-foreground font-medium">
              For Gene and Fatima Burke, CLEAR became more than a commission. It became a turning point.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="/assets/clear-listening-session.jpeg" 
              alt="CLEAR listening session"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="/assets/clear-piano-talk.jpeg" 
              alt="Gene at piano during CLEAR session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Songs Section */}
      <section className="container pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-light">Songs Written for CLEAR</h2>
            <Link 
              href="/releases"
              className="text-sm font-mono text-accent hover:underline inline-flex items-center gap-1"
            >
              View All Releases <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <p className="text-muted-foreground mb-8">
            All songs below were written during the CLEAR Project composer cohort and released as part of the official project catalog.
          </p>
          <div className="space-y-8">
            {songs.map((song, index) => (
              <div key={index} className="border-l-2 border-accent/30 pl-6 py-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm font-mono text-accent">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-serif">{song.title}</h3>
                  <span className="text-sm text-muted-foreground">({song.year})</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {song.credits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photo */}
      <section className="container pb-16">
        <div className="relative aspect-[16/9] max-w-4xl overflow-hidden rounded-lg">
          <img 
            src="/assets/clear-group-photo.jpeg" 
            alt="CLEAR Project group photo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Reflections */}
      <section className="container pb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-8">Reflections from the Process</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-mono text-accent mb-4">Embracing What I Have to Offer</h3>
              <p className="text-sm text-muted-foreground mb-4 italic">October 2024</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I've been writing music for as long as I can remember… My journey has taken me to Paris, London, New York City, Nashville, Louisville, and more. But it was always because I was playing someone else's music—never my own.
                </p>
                <p>
                  CLEAR forced a reckoning. For the first time in decades, the work wasn't optional. It wasn't hidden. It had deadlines, listeners, collaborators, and expectations. And that changed everything.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-mono text-accent mb-4">What CLEAR Gave Me</h3>
              <p className="text-sm text-muted-foreground mb-4 italic">November 2025</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CLEAR gave structure and accountability. It gave peers who listened deeply and responded honestly. It gave space where vulnerability wasn't a liability—it was the point.
                </p>
                <p>
                  The first listening session broke me open. Instead of polite applause, there were tears. Real ones. In that moment, a long-held lie collapsed: that my music was too flawed, too personal, too different to be useful.
                </p>
                <p>
                  The anxiety never disappeared—but it stopped being in charge. What emerged was confidence. Not arrogance. Confidence rooted in evidence. In community. In shared witness.
                </p>
                <p className="text-foreground font-medium">
                  The project ended, but the shift did not. This work marked the beginning of a new relationship with my own voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="container pb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-8">The People Who Made It Possible</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acknowledgments.map((person, index) => (
              <div key={index} className="border-l border-border/30 pl-4">
                <p className="font-medium text-foreground">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Link */}
      <section className="container pb-24">
        <div className="max-w-3xl">
          <a 
            href="https://www1.villanova.edu/university/liberal-arts-sciences/programs/theology/clear.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors font-mono text-sm"
          >
            Explore the Full CLEAR Project at Villanova University
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10 py-8">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Gene Burke. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
