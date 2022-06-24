// TODO Change out mickey specific for props

import React, { useState } from "react";
import mickey from "../images/wheres-mickey.jpg";

function Game(props) {
    const [characterSelect, setCharacterSelect] = useState({
        x: 0,
        y: 0,
        display: false
    });

    function displayCharacterSelect(e) {
        if (characterSelect.display) {
            setCharacterSelect({ x: 0, y: 0, display: false });
        } else {
            setCharacterSelect({
                x: e.clientX,
                y: e.clientY,
                display: true
            });
        }
    }

    return (
        <div className="Game">
            <div className="image-container">
                <img
                    onClick={e => displayCharacterSelect(e)}
                    src={mickey}
                    alt="A where's waldo game involving Mickey and friends at Disneyland."
                />
            </div>
            <ul className="answer-key">
                <p>Can you find...?</p>
                <li>Mickey</li>
                <li>Minnie</li>
                <li>Donald</li>
                <li>Daisy</li>
                <li>Goofy</li>
                <li>Pluto</li>
            </ul>
            {characterSelect.display && (
                <div
                    className="select-wrapper"
                    style={{
                        // Subtract half of --selected-area-length as defined in CSS
                        top: characterSelect.y - 25,
                        left: characterSelect.x - 25
                    }}
                >
                    <div className="selected-area"></div>
                    <div className="select-character">
                        <div>Mickey</div>
                        <div>Minnie</div>
                        <div>Donald</div>
                        <div>Daisy</div>
                        <div>Goofy</div>
                        <div>Pluto</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;

// Minnie: 69, 257
// Donald: 418, 406
// Daisy: 612., 495
// Mickey: 843, 291
// Pluto: 218, 494
// Goofy: 670, 243
