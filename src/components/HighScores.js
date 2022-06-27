import React, { useState, useEffect } from "react";
import { db } from "../firebase-config.js";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";

function HighScores(props) {
    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        async function queryHighScores() {
            const highScoresQuery = query(
                collection(db, `${props.game}-high-scores`),
                orderBy("score"),
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
            {highScores.map((entry, index) => {
                return (
                    <div key={index}>
                        <div>{entry.initials.toUpperCase()}</div>
                        <div>{entry.score.toFixed(2)}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default HighScores;
