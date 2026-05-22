import React, { useRef, useEffect } from 'react';

interface PlayerProps {
  activeSong: any;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  // eslint-disable-next-line prettier/prettier
  onEnded: () => void;
  onTimeUpdate: (event: any) => void;
  onLoadedData: (event: any) => void;
  repeat: boolean;
}

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}: PlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume, ref]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime, ref]);

  return (
    <audio src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}>
        
      <track 
        kind="captions" 
        src="path/to/lyrics.vtt" 
        srcLang="en" 
        label="English Lyrics" 
        default 
      />
    </audio>
     
    
  );
};

export default Player;
