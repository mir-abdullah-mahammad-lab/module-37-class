import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData()
    console.log('user passing as {}',users)
    return (
        <div>
            <h2>This is users cage</h2>
            {
                users.map( u => <User u={u} key={u.id}></User>)
            }
        </div>
    );
};

export default Users;