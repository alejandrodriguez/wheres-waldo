import React from "react";

function VictoryScreen(props) {
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
                        value={props.initials}
                        onKeyDown={e => props.handleInitials(e)}
                        onChange={e => props.handleInitials(e)}
                        autoFocus
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default VictoryScreen;
