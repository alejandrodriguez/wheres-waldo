import Game from "./components/Game";
import disneyland from "./images/wheres-mickey.jpg";

function App() {
    return (
        <div className="App">
            <Game
                src={disneyland}
                characters={[
                    { name: "Mickey", x: 843, y: 291 },
                    { name: "Minnie", x: 69, y: 257 },
                    { name: "Donald", x: 418, y: 406 },
                    { name: "Daisy", x: 612, y: 495 },
                    { name: "Goofy", x: 670, y: 243 },
                    { name: "Pluto", x: 218, y: 494 }
                ]}
            />
        </div>
    );
}

export default App;
