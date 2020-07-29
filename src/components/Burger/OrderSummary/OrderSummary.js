import React,{Component} from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
   /*  componentWillUpdate()
    {
        console.log('Will update');
    } */
    render(){
        const ingredientsSummary=Object.keys(this.props.ingredients)
        .map(igKey =>{
        return (
        <li key={igKey}>
            <span style={{textTransform :'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
        </li>
        );
        });

        return(
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following instructions:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Order amount:{this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
    
    
};

export default OrderSummary;