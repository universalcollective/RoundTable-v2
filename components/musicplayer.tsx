import React, { useState, useRef, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);


  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const threshold = 700; // set your own threshold value here
    const handleResize = () => {
      setIsMinimized(window.innerWidth < threshold);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0);
      });
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      });
    }
  }, [audioRef.current]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const durationInSeconds = audioRef.current?.duration || 0;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds} / ${Math.floor(durationInSeconds / 60)}:${Math.floor(durationInSeconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className={`floating-animation fixed bottom-4 left-4 rounded-lg bg-white p-3 shadow-md ${isMinimized ? 'w-16' : 'w-90'}`}>
      <div className="flex items-center">
        <audio ref={audioRef} src="/eym.mp3" />
        <button
          className="rounded-md px-2 py-1 text-black"
          onClick={handlePlayPause}
          style={{ display: isMinimized ? 'block' : 'inline-block' }}
        >
          {isPlaying ? (
            <PauseIcon fontSize="medium" />
          ) : (
            <PlayArrowIcon fontSize="medium" />
          )}
        </button>
        {!isMinimized && (
          <div className="ml-4">
            <div className="text-sm font-semibold" style={{ color: '#b12f12' }}>
              Ease Your Mind
            </div>
            <div className="text-xs text-gray-500">GRiZ x Ganja White Night</div>
            <div className="text-xs text-gray-500">
              {formatTime(currentTime)}
            </div>
          </div>
        )}
        {!isMinimized && (
          <>
            <button className="ml-4 text-black">
              <VolumeUpIcon fontSize="small" />
            </button>
            <input
              className="ml-2 h-1 w-14 rounded-lg"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              style={{ '--thumb-color': '#b12f12' } as React.CSSProperties}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
