import React from 'react';
import Joi from 'joi-browser';
import Form from './commons/form';
import './Transaction.form.scss';
import { addTransaction } from '../redux/transaction';
import { connect } from "react-redux";


class TransactionForm extends Form {
    
    state = {
        data: {
            fromAccount: '',
            merchant: '',
            amount: ''
        },
        errors: {}
    };

    schema = {
        fromAccount: Joi.string().required().label('From Account'),
        merchant: Joi.string().required().label('To Account'),
        // amount: Joi.number().required().pattern(new RegExp(' 0+\.[0-9]*[1-9][0-9]*'))
        amount: Joi.number().required().label('Amount')
    };



    doSubmit = async () => {
        try{
            await this.props.addTransaction(this.state.data)
            this.setState({data:{
                fromAccount: '',
                merchant: '',
                amount: ''
            }})
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return(
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('fromAccount', 'From Account', 'text', 'Free Checking(XXXX)')}
                    {this.renderInput('merchant', 'To Account', 'text', 'Gergia Power Company')}
                    {this.renderInput('amount', 'Amount', 'number', '$0.00')}
                    {this.renderButton('save','btn btn-warning btn-block')}
                </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTransaction: data => dispatch(addTransaction(data))
})

export default connect(null, mapDispatchToProps)(TransactionForm);

