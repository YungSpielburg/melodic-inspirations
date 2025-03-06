
import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const DEMO_TRACKS = [
  {
    id: 1,
    title: "Epic Choir",
    genre: "Cinematic",
    duration: "0:48",
  },
  {
    id: 2,
    title: "Gentle Voices",
    genre: "Ambient",
    duration: "1:12",
  },
  {
    id: 3,
    title: "Dramatic Ensemble",
    genre: "Orchestral",
    duration: "0:56",
  },
  {
    id: 4,
    title: "Ethereal Vocals",
    genre: "Electronic",
    duration: "1:05",
  }
];

const Demo = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (trackId: number) => {
    if (activeTrack === trackId) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(trackId);
      setIsPlaying(true);
      // In a real implementation, you would load the correct audio file here
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-got-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Listen to <span className="text-got-green">GOT CHOIRS</span> in Action
          </h2>
          <p className="text-got-light/70">
            Experience the powerful, emotional and versatile sounds of GOT CHOIRS through these demo tracks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-got-dark/40 backdrop-blur-md rounded-2xl p-6 border border-got-green/10">
            <div className="space-y-4">
              {DEMO_TRACKS.map((track) => (
                <div 
                  key={track.id}
                  className={`rounded-xl p-4 transition-all ${
                    activeTrack === track.id 
                      ? 'bg-got-green/10 border border-got-green/20' 
                      : 'bg-got-dark/60 border border-got-green/5 hover:border-got-green/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => togglePlay(track.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          activeTrack === track.id && isPlaying
                            ? 'bg-got-green text-got-dark'
                            : 'bg-got-green/20 text-got-green hover:bg-got-green/30'
                        }`}
                      >
                        {activeTrack === track.id && isPlaying ? (
                          <Pause size={18} />
                        ) : (
                          <Play size={18} className="ml-1" />
                        )}
                      </button>
                      <div>
                        <h3 className="font-medium">{track.title}</h3>
                        <p className="text-got-light/60 text-sm">{track.genre}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-got-light/60 text-sm">{track.duration}</span>
                      <Volume2 size={18} className="text-got-light/60" />
                    </div>
                  </div>
                  
                  {activeTrack === track.id && (
                    <div className="mt-4 animate-fade-in">
                      <div className="w-full bg-got-green/10 rounded-full h-1.5">
                        <div 
                          className="bg-got-green h-1.5 rounded-full animate-pulse-subtle"
                          style={{ width: isPlaying ? '60%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-got-light/60 italic">
                All demos created using GOT CHOIRS with minimal processing
              </p>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </section>
  );
};

export default Demo;
