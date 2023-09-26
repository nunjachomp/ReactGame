import "./PauseMenu.css"
import { Link } from "react-router-dom";

export default function PauseMenu({ onResume, onQuit }){
  return (
    <div className="pause-menu">
      <h2>Game Paused</h2>
      <button onClick={onResume}>Resume</button>
      <Link to="/scores">
        <button>Scores</button>
      </Link>
      <button onClick={onQuit}>Quit</button>
    </div>
  );
};
