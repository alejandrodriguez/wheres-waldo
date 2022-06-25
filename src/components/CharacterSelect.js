import React from "react";

function CharacterSelect(props) {
    return (
        <div
            className="select-wrapper"
            style={{
                // Subtract half of --selected-area-length as defined in CSS
                top: props.y - 25,
                left: props.x - 25
            }}
        >
            {/* Box highlighting selected area when image is clicked */}
            <div className="selected-area"></div>
            {/* Display characters not yet found to choose from for answer */}
            <div className="select-character">
                {props.foundStatus
                    .filter(character => !character.found)
                    .map((character, index) => {
                        return (
                            <div
                                onClick={e => props.checkAnswer(e)}
                                key={index}
                            >
                                {character.name}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default CharacterSelect;
