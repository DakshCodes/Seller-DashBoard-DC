import React from 'react'
import "../mywallet/Mywallet.css"
import {BsWalletFill} from "react-icons/bs"

const Mywallet = () => {
    return (
        <div className='content items-center'>
            <div className="wallet-main">
                <div className="wallet-title">
                    <h2>My Wallet</h2>
                    <BsWalletFill />
                </div>
                <h1>Rs. 500</h1>
                <button className='wallet-btn'>Withdraw</button>
            </div>
        </div>
    )
}

export default Mywallet
