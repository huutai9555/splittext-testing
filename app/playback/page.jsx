"use client";
import React, { useEffect, useState } from "react";

const token = "BQDLt1U9PviAxVvAF4ft-7KZHnViMk7uV7TsQLJWD5dhW5dsBCI3kpE80UFr2sSbsboHZi2ZYVwPNogJASfUN_87WN-M59mRJQmjAGtgRpTvqPZML4Ad4Oc4khiWDXioJNzXS9yJioqve25MSH0VathA2lUiEfQWaTHXSlMLiwWJqcdOIgGYxmfuIfEAU53DfJ_FNS6UP28zBiVJ4nbzNpSEHbRbk9TcDaxWBp4lbr-zYn5ngTInBrKHxAjWHPUKHFl76Y4O";

export default function Page() {
  const [player, setPlayer] = useState(undefined);
  const [deviceId, setDeviceId] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) return;
        
        setCurrentTrack(state.track_window.current_track);
        setIsPlaying(!state.paused);
      });

      player.connect().then((success) => {
        if (success) {
          console.log("The Web Playback SDK successfully connected to Spotify!");
        }
      });
    };
  }, []);

  // Phát nhạc từ Spotify URI
  const playMusic = async (spotifyUri) => {
    if (!deviceId) {
      alert("Device chưa sẵn sàng!");
      return;
    }

    try {
      const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        body: JSON.stringify({
          uris: [spotifyUri]
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok) {
        console.log("Đang phát nhạc!");
      } else {
        console.error("Lỗi khi phát nhạc:", response.status);
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  // Phát playlist
  const playPlaylist = async (playlistUri) => {
    if (!deviceId) {
      alert("Device chưa sẵn sàng!");
      return;
    }

    try {
      const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        body: JSON.stringify({
          context_uri: playlistUri
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok) {
        console.log("Đang phát playlist!");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  // Tạm dừng/tiếp tục
  const togglePlayback = () => {
    if (player) {
      player.togglePlay();
    }
  };

  // Bài tiếp theo
  const nextTrack = () => {
    if (player) {
      player.nextTrack();
    }
  };

  // Bài trước
  const previousTrack = () => {
    if (player) {
      player.previousTrack();
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Spotify Player</h2>
      
      {/* Trạng thái kết nối */}
      <div className="mb-4 p-3 bg-gray-100 rounded">
        <p className="text-sm">
          Device ID: {deviceId ? deviceId.substring(0, 20) + "..." : "Chưa kết nối"}
        </p>
      </div>

      {/* Thông tin bài hát hiện tại */}
      {currentTrack && (
        <div className="mb-4 p-3 bg-blue-50 rounded">
          <p className="font-semibold">{currentTrack.name}</p>
          <p className="text-sm text-gray-600">{currentTrack.artists[0].name}</p>
          <p className="text-xs text-gray-500">{currentTrack.album.name}</p>
        </div>
      )}

      {/* Controls cơ bản */}
      <div className="flex justify-center space-x-2 mb-4">
        <button 
          onClick={previousTrack}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ⏮️
        </button>
        <button 
          onClick={togglePlayback}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button 
          onClick={nextTrack}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ⏭️
        </button>
      </div>

      {/* Buttons để test phát nhạc */}
      <div className="space-y-2">
        <button 
          onClick={() => playMusic("spotify:track:4iV5W9uYEdYUVa79Axb7Rh")}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Phát bài mẫu (Honey - Harry Styles)
        </button>
        
        <button 
          onClick={() => playPlaylist("spotify:playlist:37i9dQZF1DXcBWIGoYBM5M")}
          className="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Phát Today's Top Hits
        </button>

        {/* Input để nhập URI tùy chỉnh */}
        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Nhập Spotify URI (spotify:track:...)"
            className="w-full p-2 border rounded mb-2"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                playMusic(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <p className="text-xs text-gray-500">
            Nhấn Enter để phát. Ví dụ: spotify:track:4iV5W9uYEdYUVa79Axb7Rh
          </p>
        </div>
      </div>
    </div>
  );
}