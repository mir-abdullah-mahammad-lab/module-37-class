import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({u}) => {
    const {id,name, email, phone} = u
    // console.log(id, 'id of the user')
    const [showInfo, setShowInfo]=useState(false)
    const[visitHome, setVisitHome] =useState(false)
    const location = useLocation()
    console.log(location)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())


    const userStyle={
        border: '2px solid lightblue',
        borderRadius :'20px',
        padding:'10px',
        margin:'10px'
    }

    if (visitHome){
        return <Navigate to="/"></Navigate>
    }
    return (
        <div style={userStyle}>
                    <h2>This is User Page</h2>
                <div>                 
                    <h3>{name}</h3>
                    <p>Email:{ email}</p>
                    <p><small>{phone}</small></p>
                    <Link to={`/users/${id}`}>Details</Link>
                    <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? "Hide" : "Detail"} info</button>
                  {
                    showInfo && <Suspense fallback={<span>Loading</span>}>

                        <UserDetails2 userPromise={userPromise}></UserDetails2>
                    </Suspense>
                  }

                  <button onClick={()=>{setVisitHome(true)}}>Visit Home</button>
                </div>
  
        </div> );
};

export default User;