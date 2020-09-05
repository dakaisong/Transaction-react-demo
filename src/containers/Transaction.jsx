import React, { Component } from 'react';
import Card from './commons/card';
import TransactionForm from './Transaction.form';
import TransactionList from './TransactionList';

class Transaction extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-lg-3">
                    <Card title='Make a Transaction' icon="cog">
                        <TransactionForm />
                    </Card>
                </div>
                <div className="col-lg-8">
                    <Card title="Transactions" icon="list">
                    <TransactionList />
                    </Card>
                </div>
            </div>
        );
    }
}
 
export default Transaction;