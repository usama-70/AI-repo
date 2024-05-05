import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [summary, setSummary] = useState('');

  const fetchSummary = () => {
    fetch(`http://your-backend-url/summarize?url=${encodeURIComponent(videoUrl)}`)
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary);
      })
      .catch(error => {
        setSummary('Error summarizing transcript.');
      });
  };

  return (
    <div className="container">
      <h1>YouTube Transcript Summarizer</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
      />
      <button onClick={fetchSummary}>Summarize</button>
      <div className="summary">{summary}</div>
    </div>
  );
};

export default Popup;
