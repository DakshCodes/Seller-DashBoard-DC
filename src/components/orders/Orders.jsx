import React from 'react'
import './Orders.css';

const Orders = () => {
    return (
        <div className='content'>
            <div className='body'>
                <div className="Cart-Container">
                    <div class="Header">
                        <h3 class="Heading">My Orders</h3>
                    </div >
                    <div className='orders'>
                        <div class="Cart-Items">
                            <div class="image-box">
                                <img src="https://www.psdmockups.com/wp-content/uploads/2019/02/Softcover-Paperback-Book-Front-PSD-Mockup.jpg" style={{ height: "120px" }} />
                            </div>
                            <div class="about">
                                <h1 class="title">Apple Juice</h1>
                                <h3 class="subtitle">250ml</h3>
                               
                            </div >
                            <div class="counter">
                                <div class="btn">+</div>
                                <div class="count">2</div>
                                <div class="btn">-</div>
                            </div>
                            <div class="prices">
                                <div class="amount">$2.99</div>
                                <div class="save"><u>Status</u></div>
                                <div class="remove"><u>Remove</u></div>
                            </div >
                        </div >

                        <div class="Cart-Items">
                            <div class="image-box">
                                <img src="https://www.psdmockups.com/wp-content/uploads/2019/02/Softcover-Paperback-Book-Front-PSD-Mockup.jpg" style={{ height: "120px" }} />
                            </div>
                            <div class="about">
                                <h1 class="title">Apple Juice</h1>
                                <h3 class="subtitle">250ml</h3>
                                
                            </div >
                            <div class="counter">
                                <div class="btn">+</div>
                                <div class="count">2</div>
                                <div class="btn">-</div>
                            </div>
                            <div class="prices">
                                <div class="amount">$2.99</div>
                                <div class="save"><u>Status</u></div>
                                <div class="remove"><u>Remove</u></div>
                            </div >
                        </div >
                        <div class="Cart-Items">
                            <div class="image-box">
                                <img src="https://www.psdmockups.com/wp-content/uploads/2019/02/Softcover-Paperback-Book-Front-PSD-Mockup.jpg" style={{ height: "120px" }} />
                            </div>
                            <div class="about">
                                <h1 class="title">Apple Juice</h1>
                                <h3 class="subtitle">250ml</h3>
                               
                            </div >
                            <div class="counter">
                                <div class="btn">+</div>
                                <div class="count">2</div>
                                <div class="btn">-</div>
                            </div>
                            <div class="prices">
                                <div class="amount">$2.99</div>
                                <div class="save"><u>Status</u></div>
                                <div class="remove"><u>Remove</u></div>
                            </div >
                        </div >
                    </div>
                </div >
            </div>
        </div >
    )
}

export default Orders
