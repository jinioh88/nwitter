import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = ({ userObj }) => {
    return (
        <nav>
            <ul style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                <li>
                    <Link to="/" style={{ marginRight: 10 }}><FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} /></Link>
                </li>
                <li>
                    <Link to="/profile">{userObj.displayName}의 Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;