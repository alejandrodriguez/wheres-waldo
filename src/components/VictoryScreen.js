import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function VictoryScreen(props) {
    const [initials, setInitials] = useState("");

    function handleInitials(e) {
        // Prevent entering of non-alphabetic characters
        if (
            e.type === "keydown" &&
            (e.keyCode > 92 || (e.keyCode >= 48 && e.keyCode <= 57))
        ) {
            return e.preventDefault();
        }
        setInitials(e.target.value);
    }

    function submitScore(e) {
        e.preventDefault();
        // Reject if initials are invalid
        if (
            typeof initials !== "string" ||
            initials.length > 3 ||
            initials.length < 1
        ) {
            console.log("rejected");
            return;
        }
        addDoc(collection(db, `${props.game}-high-scores`), {
            initials: initials.toLowerCase(),
            score: props.time
        });
    }

    return (
        <div className="victory-screen">
            <div className="victory-screen-content">
                <span className="close-modal" onClick={props.closeScreen}>
                    &times;
                </span>
                <h3>You win!</h3>
                <p>
                    You found everyone in <span>{props.time}</span> seconds.
                </p>
                <p>
                    Submit your score to see how to you did compared to others!
                </p>
                <form>
                    <label htmlFor="initials">Initials</label>
                    <input
                        type="text"
                        name="initials"
                        id="initials"
                        required
                        maxLength={3}
                        pattern="[a-zA-z]+"
                        value={initials}
                        onKeyDown={handleInitials}
                        onChange={handleInitials}
                        autoFocus
                    />
                    <button onClick={submitScore}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default VictoryScreen;
