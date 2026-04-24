import React from 'react';
import { Link } from 'react-router';

const User = ({u}) => {
    const {id,name, email, phone} = u
    console.log(id, 'id of the user')
    const userStyle={
        border: '2px solid lightblue',
        borderRadius :'20px',
        padding:'10px',
        margin:'10px'
    }
    return (
        <div style={userStyle}>
                    <h2>This is User Page</h2>
                <div>                 
                    <h3>{name}</h3>
                    <p>Email:{ email}</p>
                    <p><small>{phone}</small></p>
                    <Link to={`/users/${id}`}>Details</Link>
                  
                </div>
  
        </div> );
};

export default User;