import React from 'react';
// going to be functional component because dont need any life cycle methods 
const HomePage=()=>(
    <div className="homepage">
    <div className="directory-menu">
        <div className="menu=item">
            <div className="content">
                <h1 className='title'>Hats</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className="menu=item">
            <div className="content">
                <h1 className='title'>Jackets</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div><div className="menu=item">
            <div className="content">
                <h1 className='title'>Sneakers</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className="menu=item">
            <div className="content">
                <h1 className='title'>Womens</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className="menu=item">
            <div className="content">
                <h1 className='title'>Mens</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        
        

    </div>

    </div>
);
export default HomePage;