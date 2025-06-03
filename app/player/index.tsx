"use client"
import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface VinylPlayerProps {
    audioSrc: string;
}

const VinylPlayer: React.FC<VinylPlayerProps> = ({ audioSrc }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 flex items-center space-x-3 bg-white/80 backdrop-blur-lg p-3 rounded-full shadow-lg">
            {/* 唱片图案 */}
            <div
                className={`w-14 h-14 rounded-full border-4 border-black bg-gray-300 bg-cover bg-center ${
                    isPlaying ? 'animate-spin-slow' : ''
                }`}
                style={{ backgroundImage: "url('/images/CD.png')" }}
            />
            {/* 控制按钮 */}
            <button
                onClick={togglePlay}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* 音频元素 */}
            <audio ref={audioRef} src={audioSrc}/>
        </div>
    );
};

export default VinylPlayer;
