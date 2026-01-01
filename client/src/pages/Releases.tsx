import { motion } from "framer-motion";
import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Release {
  title: string;
  year: string;
  cover: string;
  link: string;
  credits: string;
  youtube?: string;
  embedType: "bandcamp" | "spotify";
  bandcampTrackId?: string;
  spotifyAlbumId?: string;
}

const releases: Release[] = [
  {
    title: "Creator G-d (Masterpiece)",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop",
    link: "https://clearproject.bandcamp.com/track/creator-g-d-masterpiece-gene-fatima-burke",
    credits: "Written & Produced by Gene Burke, Performed by Jaelyn Neal Holland",
    embedType: "bandcamp",
    bandcampTrackId: "112738370"
  },
  {
    title: "No Hiding Place",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    link: "https://clearproject.bandcamp.com/track/no-hiding-place-gene-fatima-burke",
    credits: "Written by Fatima Burke & Gene Burke. Vocals: Malachi Holland and Jaelyn Neal Holland",
    embedType: "bandcamp",
    bandcampTrackId: "2270207985"
  },
  {
    title: "In The Beginning",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=600&fit=crop",
    link: "https://clearproject.bandcamp.com/track/in-the-beginning-gene-fatima-burke",
    credits: "Written by Fatima Burke. Produced by Gene Burke. Vocals: Jaelyn Neal Holland",
    embedType: "bandcamp",
    bandcampTrackId: "750808097"
  },
  {
    title: "So Good (Creator of Everything)",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
    link: "https://clearproject.bandcamp.com/track/so-good-creator-of-everything-gene-fatima-burke",
    credits: "Written by Fatima Burke and Gene Burke. Vocals: Lyric Williams, Jamila Cole, Salt & Light Ensemble",
    embedType: "bandcamp",
    bandcampTrackId: "4172698508"
  },
  {
    title: "I Need You",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop",
    link: "https://clearproject.bandcamp.com/track/i-need-you-gene-fatima-burke",
    credits: "Written, Performed, and Programmed by Gene Burke",
    embedType: "bandcamp",
    bandcampTrackId: "3596828836"
  },
  {
    title: "Day After Day",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=600&fit=crop",
    link: "https://clearproject.bandcamp.com/track/day-after-day-gene-fatima-burke",
    credits: "Written and Produced by Gene Burke. Vocals: Amir Johnson, Jaelyn Neal Holland, Jamila Cole, Charise Johnson",
    embedType: "bandcamp",
    bandcampTrackId: "221970352"
  },
  {
    title: "Just In Case",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1571974599782-87624638275e?w=600&h=600&fit=crop",
    link: "https://open.spotify.com/album/2UUMRBmhdPHes2MbXQuiSI",
    youtube: "https://youtu.be/Q5jzdFzWQkE?si=5VWNq6HqCvgY516e",
    credits: "Written, produced, and performed by Gene Burke",
    embedType: "spotify",
    spotifyAlbumId: "2UUMRBmhdPHes2MbXQuiSI"
  },
  {
    title: "Be Ye Strong",
    year: "2020",
    cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=600&h=600&fit=crop",
    link: "https://open.spotify.com/album/32oflcy6N3dx266Sb9EtC5",
    youtube: "https://youtu.be/wGL-H5DMsZI?si=urayfW6JZDFMOtSb",
    credits: "Written and performed by Gene Burke",
    embedType: "spotify",
    spotifyAlbumId: "32oflcy6N3dx266Sb9EtC5"
  }
];

export default function Releases() {
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  const getBandcampEmbed = (trackId: string) => {
    return `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=large/bgcol=1a1a1a/linkcol=c06c58/tracklist=false/artwork=small/transparent=true/`;
  };

  const getSpotifyEmbed = (albumId: string) => {
    return `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`;
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-24 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Discography
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Selected <span className="text-accent italic">Works</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col gap-6"
            >
              {/* Cover Art Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-muted/10">
                <img 
                  src={release.cover} 
                  alt={`${release.title} Cover Art`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-14 w-14 rounded-full border-white text-white hover:bg-white hover:text-black transition-colors"
                    onClick={() => setSelectedRelease(release)}
                  >
                    <Play className="h-6 w-6 fill-current" />
                  </Button>
                  {release.youtube && (
                    <a href={release.youtube} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white text-white hover:bg-white hover:text-black transition-colors">
                        <ExternalLink className="h-6 w-6" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between border-b border-border pb-2">
                  <h3 
                    className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors cursor-pointer"
                    onClick={() => setSelectedRelease(release)}
                  >
                    {release.title}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">{release.year}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {release.credits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Player Modal */}
      <Dialog open={!!selectedRelease} onOpenChange={() => setSelectedRelease(null)}>
        <DialogContent className="sm:max-w-lg bg-card border-border p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selectedRelease?.title || "Music Player"}</DialogTitle>
          {selectedRelease && (
            <div className="flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-serif text-xl text-foreground">{selectedRelease.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground">{selectedRelease.year}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-foreground hover:bg-muted"
                  onClick={() => setSelectedRelease(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Embedded Player */}
              <div className="w-full">
                {selectedRelease.embedType === "bandcamp" && selectedRelease.bandcampTrackId && (
                  <iframe
                    style={{ border: 0, width: "100%", height: "120px" }}
                    src={getBandcampEmbed(selectedRelease.bandcampTrackId)}
                    seamless
                    title={`${selectedRelease.title} - Bandcamp Player`}
                  />
                )}
                {selectedRelease.embedType === "spotify" && selectedRelease.spotifyAlbumId && (
                  <iframe
                    style={{ borderRadius: "0", width: "100%", height: "352px" }}
                    src={getSpotifyEmbed(selectedRelease.spotifyAlbumId)}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`${selectedRelease.title} - Spotify Player`}
                  />
                )}
              </div>

              {/* Credits */}
              <div className="p-4 border-t border-border">
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {selectedRelease.credits}
                </p>
                <div className="flex gap-3 mt-4">
                  <a 
                    href={selectedRelease.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-accent hover:underline"
                  >
                    Open in {selectedRelease.embedType === "bandcamp" ? "Bandcamp" : "Spotify"} →
                  </a>
                  {selectedRelease.youtube && (
                    <a 
                      href={selectedRelease.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:underline"
                    >
                      Watch on YouTube →
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
