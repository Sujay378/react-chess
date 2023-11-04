import "./App.css";
import BoardContextProvider from "./store/BoardContext";
import Player from "./components/Player";
import Board from "./components/Board";

function App() {
  return (
    <BoardContextProvider>
      <div className="container">
        <Player name={"Player2"} team={"black"} />
        <Board />
        <Player name={"Player1"} team={"white"} />
      </div>
    </BoardContextProvider>
  );
}

export default App;
