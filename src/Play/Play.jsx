import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

import {
  Play as PlayIcon,
  Pause,
  Repeat,
  Volume2,
  Maximize,
  ListMusic,
  SkipBack,
  SkipForward,
} from "lucide-react";

const MediaPlayer = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => setPlaying(!playing);

  const handleSeek = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (playerRef.current) {
      playerRef.current.seekTo(newProgress);
    }
  };

  return (
    <div className="flex p-4 bg-gray-800 rounded-lg shadow-lg space-x-4 items-center justify-between">
      <ReactPlayer
        ref={playerRef}
        url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        playing={playing}
        volume={volume}
        onProgress={(e) => setProgress(e.playedSeconds)}
        onDuration={(d) => setDuration(d)}
        width="0"
        height="0"
      />

      {/* Controls */}
      <div className="flex items-center gap-7">
        <button className="text-gray-300 hover:text-white">
          <SkipBack size={24} />
        </button>
        <button className="text-gray-300 hover:text-white" onClick={togglePlayPause}>
          {playing ? <Pause size={30} /> : <PlayIcon size={30} />}
        </button>
        <button className="text-gray-300 hover:text-white">
          <SkipForward size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-2 mt-2 text-green-400">
        <span className="text-sm">{Math.floor(progress)}s</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="w-64 h-2 bg-gray-600 rounded-full appearance-none cursor-pointer"
        />
        <span className="text-sm">{Math.floor(duration)}s</span>
      </div>

      {/* Other Controls */}
      <div className="flex items-center space-x-4 mt-2">
        <button className="text-gray-300 hover:text-white">
          <ListMusic size={24} />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Maximize size={24} />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Repeat size={24} />
        </button>
        <div className="flex items-center">
          <Volume2 size={24} className="text-gray-300" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-2 bg-gray-600 rounded-full appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
