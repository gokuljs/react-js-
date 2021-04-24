import React from 'react'; 

import {Card} from '../card/card.component';
import './card-list.styles.css';

// props is the parameter passsed inside cardlist from app.js file 
// one of the most important property in props they have something called children
//
export const CardList=(props)=>(
    // console.log(props)

    // console.log(props.childreen)
    <div className="card-list">
        
        {
            props.monster.map(monster=>(

                <Card key={monster.id} monster={monster}/>
                // <h1 key={monster.id}>{monster.name}</h1>
            ))
        
                
        
        }
    </div>
);