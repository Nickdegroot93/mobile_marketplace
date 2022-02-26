import { useContext } from 'react';
import AuthContext from './context';
import authStorage from './storage';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logOut = () => {
		setUser(null);
		authStorage.removeToken();
	};

	const login = (token) => {
		const user = jwtDecode(token);
		setUser(user);
		authStorage.storeToken(token);
	};

	return { user, login, logOut, setUser };
};

export default useAuth;
