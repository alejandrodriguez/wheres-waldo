import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AnswerKey from "./AnswerKey";
import CharacterSelect from "./CharacterSelect";
import VictoryScreen from "./VictoryScreen";

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

    const [stopwatch, setStopwatch] = useState(0);

    function displayCharacterSelect(e) {
        if (characterSelect.display) {
            setCharacterSelect({ x: 0, y: 0, display: false });
        } else {
            setCharacterSelect({
                x: e.nativeEvent.offsetX,
                y: e.nativeEvent.offsetY,
                display: true
            });
        }
    }

    function checkAnswer(e) {
        const name = e.target.textContent;
        const { x: correctX, y: correctY } = props.characters.find(
            character => character.name === name
        );
        // Check if answer is within 50 pixels of pixel marked as correct answer
        if (
            correctX - 25 <= characterSelect.x &&
            characterSelect.x <= correctX + 25 &&
            correctY - 25 <= characterSelect.y &&
            characterSelect.y <= correctY + 25
        ) {
            // Update the character's found status to be true
            const updatedFoundStatus = [...foundStatus];
            const index = updatedFoundStatus.indexOf(
                updatedFoundStatus.find(character => character.name === name)
            );
            updatedFoundStatus[index] = { ...updatedFoundStatus[index] };
            updatedFoundStatus[index].found = true;
            // Check if all characters have been found and game is over
            setFoundStatus(updatedFoundStatus);
            if (
                updatedFoundStatus.every(character => character.found === true)
            ) {
                endGame();
                console.log("All found!", "Time:", stopwatch);
            }
        }
        setCharacterSelect(({ ...characterSelect }.display = false));
    }

    function stopStopwatch() {
        clearInterval(stopwatchID.current);
    }

    const [displayVictoryScreen, setDisplayVictoryScreen] = useState(false);

    function endGame() {
        stopStopwatch();
        setDisplayVictoryScreen(true);
    }

    // Set up timer
    const stopwatchID = useRef(null);

    // Start timer
    useEffect(() => {
        stopwatchID.current = setInterval(() => {
            setStopwatch(time => time + 10);
        }, 10);
        return stopStopwatch;
    }, []);

    return (
        <div className="Game">
            <h1>
                Where's {props.name[0].toUpperCase() + props.name.slice(1)}?
            </h1>
            <div className="Game-main">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img
                            onClick={displayCharacterSelect}
                            src={props.src}
                            alt={props.alt}
                        />
                        {/* Display popup menu on click */}
                        {characterSelect.display && (
                            <CharacterSelect
                                foundStatus={foundStatus}
                                checkAnswer={checkAnswer}
                                x={characterSelect.x}
                                y={characterSelect.y}
                            />
                        )}
                        {/* Display marker for found characters */}
                        {foundStatus
                            .filter(character => character.found)
                            .map((foundCharacter, index) => {
                                const { x, y } = props.characters.find(
                                    character =>
                                        character.name === foundCharacter.name
                                );
                                return (
                                    <div
                                        className="correct-area"
                                        // Subtract half of --selected-area-length as defined in CSS
                                        style={{ top: y - 25, left: x - 25 }}
                                        key={index}
                                    ></div>
                                );
                            })}
                    </div>
                </div>
                {/* Key listing characters to be found */}
                <AnswerKey foundStatus={foundStatus} />
            </div>
            <div className="stopwatch">{(stopwatch / 1000).toFixed(2)}</div>
            <Link to={`/${props.name}/highscores`}>View High Scores</Link>
            {displayVictoryScreen && (
                <VictoryScreen
                    game={props.name}
                    time={stopwatch / 1000}
                    closeScreen={() => setDisplayVictoryScreen(false)}
                />
            )}
        </div>
    );
}

export default Game;
