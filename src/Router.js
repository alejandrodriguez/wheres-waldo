import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Game from "./components/Game";
import HighScores from "./components/HighScores";
import disneyland from "./images/wheres-mickey.jpg";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/mickey"
                    element={
                        <Game
                            src={disneyland}
                            alt="A where's waldo game involving Mickey and friends at Disneyland."
                            name="mickey"
                            characters={[
                                { name: "Mickey", x: 846, y: 288 },
                                { name: "Minnie", x: 73, y: 253 },
                                { name: "Donald", x: 418, y: 406 },
                                { name: "Daisy", x: 614, y: 492 },
                                { name: "Goofy", x: 670, y: 243 },
                                { name: "Pluto", x: 222, y: 494 }
                            ]}
                        />
                    }
                />
                <Route
                    path="/mickey/highscores"
                    element={<HighScores game="mickey" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
