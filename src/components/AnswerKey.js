import React from "react";

function AnswerKey({ foundStatus }) {
    return (
        <ul className="answer-key">
            <p>Can you find...?</p>
            {foundStatus.map((character, index) => {
                return (
                    <li
                        className={character.found ? "found" : undefined}
                        key={index}
                    >
                        {character.name}
                    </li>
                );
            })}
        </ul>
    );
}

export default AnswerKey;
