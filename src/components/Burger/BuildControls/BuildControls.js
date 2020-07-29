import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},

];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cfunc =>(

            <BuildControl 
                key={cfunc.label} 
                label={cfunc.label}
                added={() => props.ingredientAdded(cfunc.type)}
                removed={()=> props.ingredientRemove(cfunc.type)}
                disabled={props.disabled[cfunc.type]}
            />
        )

)}
    <button 
    className={classes.OrderButton}
    disabled={!props.purchaseable}
    onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;