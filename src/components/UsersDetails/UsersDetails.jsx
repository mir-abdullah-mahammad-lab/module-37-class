import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UsersDetails = () => {
    const userId= useParams()
    const user = useLoaderData()
    console.log(userId)
    console.log('shoe me babyyyyyyyyyyyyy',user)
    return (
        <div>
            <h1>User Details Here</h1>
            
            
        </div> );
};

export default UsersDetails;