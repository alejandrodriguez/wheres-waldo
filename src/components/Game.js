// TODO Change out mickey specific for props

import React, { useState } from "react";

function Game(props) {
    const [characterSelect, setCharacterSelect] = useState({
        x: 0,
        y: 0,
        display: false
    });

    const [foundStatus, setFoundStatus] = useState(
        props.characters.map(character => {
            return { name: character.name, found: false };
        })
    );

    function displayCharacterSelect(e) {
        if (characterSelect.display) {
            setCharacterSelect({ x: 0, y: 0, display: false });
        } else {
            setCharacterSelect({
                x: e.clientX,
                y: e.clientY,
                xAnswer: e.nativeEvent.offsetX,
                yAnswer: e.nativeEvent.offsetY,
                display: true
            });
        }
    }

    function checkAnswer(e) {
        const name = e.target.textContent;
        const { x: correctX, y: correctY } = props.characters.find(
            character => character.name === name
        );
        console.log({
            xAnswer: characterSelect.xAnswer,
            correctX,
            yAnswer: characterSelect.yAnswer,
            correctY
        });
        if (
            correctX - 25 <= characterSelect.xAnswer &&
            characterSelect.xAnswer <= correctX + 25 &&
            correctY - 25 <= characterSelect.yAnswer &&
            characterSelect.yAnswer <= correctY + 25
        ) {
            console.log("Correct!");
        } else {
            console.log("Wrong!");
        }
    }

    return (
        <div className="Game">
            <div className="image-container">
                <img
                    onClick={e => displayCharacterSelect(e)}
                    src={props.src}
                    alt="A where's waldo game involving Mickey and friends at Disneyland."
                />
            </div>
            {/* Key listing characters to be found */}
            <ul className="answer-key">
                <p>Can you find...?</p>
                {foundStatus.map((character, index) => {
                    return (
                        <div
                            className={character.found ? "found" : undefined}
                            key={index}
                        >
                            {character.name}
                        </div>
                    );
                })}
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
                    {/* Box highlighting selected area when image is clicked */}
                    <div className="selected-area"></div>
                    {/* Display characters not yet found to choose from for answer */}
                    <div className="select-character">
                        {foundStatus
                            .filter(character => !character.found)
                            .map((character, index) => {
                                return (
                                    <div
                                        onClick={e => checkAnswer(e)}
                                        key={index}
                                    >
                                        {character.name}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;

// Mickey: 843, 291
// Minnie: 69, 257
// Donald: 418, 406
// Daisy: 612, 495
// Goofy: 670, 243
// Pluto: 218, 494
