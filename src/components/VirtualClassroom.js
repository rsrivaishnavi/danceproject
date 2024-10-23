import React, { useRef } from 'react';

const VirtualClassroom = () => {
  const videoRef = useRef(null);

  const startStream = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => console.error("Stream error:", error));
  };

  return (
    <div>
      <button onClick={startStream}>Start Class</button>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
};

export default VirtualClassroom;
