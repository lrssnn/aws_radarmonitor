import { useState, useEffect } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const [frame, setFrame] = useState(0);
  const [frameRate, setFrameRate] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setFrame(prev => prev + 1);
    }, GetIntervalMillis(frameRate));
  }, []);

  function onFramerateChange(event){
    setFrameRate(event.target.value);
  }

  return (
    <div>
      <Header title="Radar Monitor" />

      <div>
        <label>Frame Rate
          <input value={frameRate} onChange={onFramerateChange} type="number"/>
        </label>
      </div>
      <div><p>Current Frame Rate: {frameRate}</p></div>
      <div><p>{frame}</p></div>
    </div>
  );
}

function GetIntervalMillis(frameRate) {
  console.log((1/frameRate) * 1000);
  return (1/frameRate) * 1000;
}

