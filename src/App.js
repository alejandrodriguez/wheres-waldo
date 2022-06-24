import Game from "./components/Game";
import disneyland from "./images/wheres-mickey.jpg";

function App() {
    return (
        <div className="App">
            <Game
                src={disneyland}
                characters={[
                    { name: "Mickey", x: 846, y: 288 },
                    { name: "Minnie", x: 73, y: 253 },
                    { name: "Donald", x: 418, y: 406 },
                    { name: "Daisy", x: 614, y: 492 },
                    { name: "Goofy", x: 670, y: 243 },
                    { name: "Pluto", x: 222, y: 494 }
                ]}
            />
        </div>
    );
}

export default App;
