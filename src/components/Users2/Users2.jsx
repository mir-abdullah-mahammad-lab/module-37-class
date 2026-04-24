import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise)
    console.log('uuuuuuuuuuuuuuu',users)
    return (
        <div>
            <h1> users2</h1>
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Users2;