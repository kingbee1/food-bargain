import React, { useState } from 'react';
import Footer from '../components/Landingpage/Footer';
import TopHeader from '../components/Landingpage/TopHeader';

import gr2 from '../images/gr2.png'
import gr1 from '../images/gr1.png'
import gr3 from '../images/gr3.png'


function SampleCart() {
    const [cart, setCart] = useState([]);

    //relation btw the component 'prop drilling-passing prop from different components till it reaches'
    //redux or context api
    //if you can place data you want to share in home

    const [food] = useState([
        {
            branch: 'Bakery',
            name: 'Banana Bread',
            image: gr2,
        },

        {
            branch: 'Bakery',
            name: 'Hot Dog Sausage',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEgc-H3iNBWc4IpqxYCL5xSNwUfbaApPDbA&usqp=CAU',
        },

        {
            branch: 'Bakery',
            name: 'Ace Bread',
            image: gr1,
        },

        {
            branch: 'Bakery',
            name: 'Ace Bread',
            image: gr3,
        },
       
    ]);

    const addToCart = (food) => {       
        // console.log('working or nah?');
        setCart([...cart, food]);
    };


    return (
        <div>
        <TopHeader cartLength={cart.length} />

        <header>
            <button>Go to Cart ({cart.length})</button>
        </header>
        <h1>Bakery</h1>
        <div className="foods">
            {food.map((food, idx) =>(
                <div className="food" key={idx}>
                    <h3>{food.name}</h3>
                    <img src={food.image} alt={food.name} />
                    <button className="buttt" onClick={() =>addToCart(food)}>Add to Cart</button>
                </div>
            ))}
            
        </div>
            {/* <h1>Bakery</h1>
            <div>
                <h3>Agege Bread</h3>
                <img src={gr3} />
                <button>Add to Cart</button>
            </div>

            <h1>Bakery</h1>
            <div>
                <h3>Banana Bread</h3>
                <img src={gr1} />
                <button>Add to Cart</button>
            </div> */}
        <Footer />
        </div>
    )
} 

export default SampleCart;