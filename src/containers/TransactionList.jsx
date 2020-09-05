import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransaction } from '../redux/transaction';
import './TransactionList.scss';
import CurrencyFormat from 'react-currency-format';

const TransactionList = () => {
    const dispatch = useDispatch();

    const transactions = useSelector(state => state.entities.transactions.list);

    useEffect(() => {
        dispatch(loadTransaction());
    }, []);

    return ( 
        <ul className="list-group">
            {transactions.map((el) => (
                <li key={el.transactionDate} className="list-group-item"> 
                    <div className="row">
                        <div className="col-3">{el.merchant}</div> 
                        <div className="col-4"><img src={el.merchantLogo} width="30" /></div> 
                        <div className="col-2"><CurrencyFormat value={el.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></div> 
                    </div>
                </li>
            ))}
        </ul>
     );


};
 
export default TransactionList;

