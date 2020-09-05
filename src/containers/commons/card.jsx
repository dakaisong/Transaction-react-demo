import React from 'react';

const Card = ({title, icon, children }) => {
    return ( 
        <div className="card-content">
            <div className="card-header">
                <i className={`fa fa-${icon}`}></i>
                <span>{title}</span>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
     );
}
 
export default Card;