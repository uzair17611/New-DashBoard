import React from 'react';
import "./Topbox.scss"
import { topDealUsers } from '../../data';

const Topbox = () => {
  return (
    <div className="Top">
      <h1>Top deal</h1>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
            <div key={user.id} className="listItem">
              <div className="user">
                <img src={user.img} alt={`User ${user.id}`} />
                <div className="userText">
            
                    <span  className="username">{user.username}</span>
    
                <span className="userEmail"> 
                    {user.email}
                </span>
               
                </div>
                <div>
                  <span className='amount'>{user.amount}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topbox;
