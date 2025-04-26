import React, { useState } from 'react';
import Users from './UserMap';
import GameMap from './Game';

const FullGame = () => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [initialTurn, setInitialTurn] = useState(0);
    const [showGame, setShowGame] = useState(false);

    if (!showGame) {
        return (
            <Users player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                setInitialTurn={setInitialTurn}
                onStart={() => setShowGame(true)} />
        )} else {
        return (
            <GameMap player1={player1}
            player2={player2}
            turn={initialTurn}
            setShowGame={setShowGame}/>
        )
    }
}

export default FullGame