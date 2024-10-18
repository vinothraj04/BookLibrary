import React from 'react'
const Like = () => {
return (
<div>
<div className="container">
        <h1>Like</h1>
        <div className="counter">
            <button id="increment-btn">❤️</button>
            <div id="counter-value">0</div>

    </div>

   


    <div className="container">
        <h1>comment</h1>
        <div className="counter">
            <button id="increment-btn">💬</button>
            <div id="counter-value">0</div>

    </div>
   
        <div className="container">
            <h1>share</h1>
            <div className="counter">
                <button id="increment-btn">💁</button>
                <div id="counter-value">0</div>
    
        </div>
</div>
)
}
export default Like