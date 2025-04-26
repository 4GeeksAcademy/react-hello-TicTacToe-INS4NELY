import React, { useState } from "react";
import PropTypes from 'prop-types';

const GameMap = ({ player1, player2, turn: initialTurn, setShowGame }) => {
	const [turn, setTurn] = useState(initialTurn)
	const [board, setBoard] = useState(Array(9).fill(null))
	const [winner, setWinner] = useState(null)

	const backToMenu = () => {
		setShowGame(false)
	}

	const checkWinner = (board) => {
		const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
		for (let patterns of winningPatterns) {
			const [a, b, c] = patterns;
			if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
				return board[a] === 0 ? 'X' : 'O'
			}
		}
		return null;
	};

	const handleClick = (index) => {
		if (board[index] !== null || winner) {
			return
		}
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const currentWinner = checkWinner(newBoard)
		if (currentWinner) {
			setWinner(currentWinner)
		} else if (!newBoard.includes(null)) {
			setWinner('Draw');
		}
		else {
			setTurn(turn === 0 ? 1 : 0)
		}
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(Math.floor(Math.random() * 2))
		setWinner(null)
	}
	return (
		<div className="min-vh-100 w-100 fondo">
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h1 className='text py-5'>Proyect TicTacToe by NoMasTrabajos</h1>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<h3 className="text text-center"> {winner ? winner === 'Draw'? "It's a draw." : `The winner is ${winner === 'X' ? player1 : player2}, congratulations you are better than your opponent.` : `It's  ${turn === 0 ? player1 : player2 } turn.`}</h3>
					<div className="m-5">
						<div className="row">
							{[0, 1, 2].map((row) => (
								<div className="d-flex justify-content-center" key={row}>
									{[0, 1, 2].map((col) => {
										const index = row * 3 + col;
										return (
											<button key={index} className="mapStyle" onClick={() => handleClick(index)}>
												{board[index] === 0 ? (<i className="ri-close-fill text-danger display-1 "></i>) : board[index] === 1 ? (<i className="ri-circle-line display-1 text-primary"></i>) : null}
											</button>
										)
									})}
								</div>
							))}
						</div>
					</div>
					{winner ? (<div className="text-center">
						<button className="btn btn-outline-secondary text-center mt-2 me-5" onClick={resetGame}>Reset Game</button>
						<button className="btn btn-outline-secondary text-center mt-2" onClick={backToMenu} >Back to menu</button>
					</div>) : (<button className="btn btn-outline-secondary text-center mt-2" onClick={backToMenu}>Back to menu</button>)}
				</div>
			</div>
		</div>

	);
};

GameMap.propTypes = {
	player1: PropTypes.string.isRequired,
	player2: PropTypes.string.isRequired,
	turn: PropTypes.number.isRequired
};

export default GameMap;