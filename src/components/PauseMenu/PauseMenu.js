import "./PauseMenu.css"

export default function PauseMenu({ onResume, onQuit }){
  return (
    <div className="pause-menu">
      <h2>Game Paused</h2>
      <button onClick={onResume}>Resume</button>
      <button onClick={onQuit}>Quit</button>
    </div>
  );
};
