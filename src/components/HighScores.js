import React, { useState, useEffect } from "react";
import { db } from "../firebase-config.js";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";

function HighScores(props) {
    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        async function queryHighScores() {
            const highScoresQuery = query(
                collection(db, `${props.game}-high-scores`),
                orderBy("time"),
                limit(50)
            );
            const querySnapshot = await getDocs(highScoresQuery);
            const highScoresData = [];
            querySnapshot.forEach(doc => highScoresData.push(doc.data()));
            setHighScores(highScoresData);
        }
        queryHighScores();
    });

    return (
        <div className="HighScores">
            <h1>
                Where's {props.game[0].toUpperCase() + props.game.slice(1)} High
                Scores
            </h1>
            <table>
                <tbody>
                    {highScores.map((entry, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.initials.toUpperCase()}</td>
                                <td>{entry.time.toFixed(2)}s</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HighScores;

/* <div key={index}>
<div>{entry.initials.toUpperCase()}</div>
<div>{entry.score.toFixed(2)}</div>
</div> */
