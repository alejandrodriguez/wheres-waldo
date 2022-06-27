import { Link } from "react-router-dom";
import disneyland from "./images/wheres-mickey.jpg";

function App() {
    return (
        <div className="App">
            <Link to="/mickey">
                <img
                    src={disneyland}
                    alt="A where's waldo game involving Mickey and friends in Disneyland."
                />
            </Link>
        </div>
    );
}

export default App;
