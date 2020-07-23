import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const User = () => {
    const { isUserOnline, handleClick } = useContext(UserContext);

    return (
        <>
            <div>{isUserOnline ? 'User is online :)' : 'User is offline :('}</div>
            <button onClick={handleClick}>Change user status</button>
        </>
    )
}

export default User;