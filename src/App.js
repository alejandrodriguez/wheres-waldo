import { Link } from "react-router-dom";
import disneyland from "./images/wheres-mickey.jpg";

function App() {
    return (
        <div className="App">
            <h1>Select A Game</h1>
            <div className="game-container">
                <h2>Where's Mickey</h2>
                <Link to="/mickey">
                    <img
                        src={disneyland}
                        alt="A where's waldo game involving Mickey and friends in Disneyland."
                    />
                </Link>
            </div>
        </div>
    );
}

export default App;
