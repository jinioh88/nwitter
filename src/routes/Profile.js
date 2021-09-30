import { authService, dbService } from 'fbase';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({ userObj, refreshUser }) => {

    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        history.push('/');
    }

    const onChange = (event) => {
        const { target: { value }, } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName });
            refreshUser();
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type='text' value={newDisplayName} onChange={onChange} placeholder='Display name' />
                <input type='submit' value='Update Profile' />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;