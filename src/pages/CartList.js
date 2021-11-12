import React from 'react';
import Navbar from '../components/Landingpage/Navbar';
import Footer from '../components/Landingpage/Footer';
import pizza from '../images/pizza.png'

const Cart = () => {
    return (
        <div>
        <Navbar />
            <div className="border">
                <p>Cart (3 items)</p>
                <div>
                    <div className="flex cart-container">
                        <div>
                            <img src={pizza} alt="pizza" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <p>Chicken Pizza</p>
                                <p>Quantity: 3</p>
                                <p>NGN 7000</p> 
                            </div>
                            <p>Creamy king sized chicken pizza with our special secret ingredient</p>
                            <div>
                                <p>Outlet: Southern House</p>
                                <p>Location: Oppostie Calgari driveby, Ikeja Lagos.</p>
                            </div>
                        </div>
                    </div>
                        
                    <div>
                    <div className="flex cart-container">
                        <div>
                            <img src={pizza} alt="pizza" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <p>Chicken Pizza</p>
                                <p>Quantity: 3</p>
                                <p>NGN 7000</p> 
                            </div>
                            <p>Creamy king sized chicken pizza with our special secret ingredient</p>
                            <div>
                                <p>Outlet: Southern House</p>
                                <p>Location: Oppostie Calgari driveby, Ikeja Lagos.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="flex cart-container">
                        <div>
                            <img src={pizza} alt="pizza" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <p>Chicken Pizza</p>
                                <p>Quantity: 3</p>
                                <p>NGN 7000</p> 
                            </div>
                            <p>Creamy king sized chicken pizza with our special secret ingredient</p>
                            <div>
                                <p>Outlet: Southern House</p>
                                <p>Location: Oppostie Calgari driveby, Ikeja Lagos.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className=" ">
                        <p className="below-cart">Total: NGN 8000</p>
                        <p>(Note: Items are self pick-up from the respective store)</p>
                    </div>
                    <div></div>
                    <div className="btn-cart flex ">
                        <button className="mbtn2 qwe">Continue Shopping</button>
                        <button className="btn">Proceed to pay NGN 8000</button>
                    </div>
            </div>    
        <Footer />
        </div>
    )
};

export default Cart;