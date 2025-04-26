import React, { useState } from "react";

const Users = ({player1, player2, setPlayer1, setPlayer2, setInitialTurn, onStart}) => {
    const [play, setPlay] = useState(false)
    return (
        <div className="min-vh-100 w-100 fondo  ">
            <div className='position-absolute top-50 start-50 translate-middle'>
                <div className='text-center py-5'>
                    <h1 className='text '>Proyect TicTacToe by NoMasTrabajos</h1>
                </div>
                <div className=' d-flex flex-column justify-content-center align-items-center'>
                    <form className='d-flex gap-5 pt-4'>
                        <input type="text" placeholder='Player 1 username' className='form-control' onChange={(e) => { setPlayer1(e.target.value) }}  required />
                        <input type="text" placeholder='Player 2 username' className='form-control' onChange={(e) => { setPlayer2(e.target.value) }}  required />
                    </form>
                    <h3 className='text pt-5 pb-4'>Choose your option for start</h3>
                    <div className='d-flex gap-5'>
                        <button className='m-4 btn btn-outline-secondary' onClick={() => { setInitialTurn(1); setPlay(true) }}> <i className="ri-circle-line display-1 text-primary" ></i></button>
                        <button className='m-4 btn btn-outline-secondary' onClick={() => { setInitialTurn(0); setPlay(true) }}><i className="ri-close-fill display-1 text-danger"></i></button>
                    </div>
                </div>
                <div className="text-center pt-4">
                    <button
                        className="btn btn-secondary"onClick={onStart} disabled={!player1 || !player2 || !play} > Start Game
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Users;