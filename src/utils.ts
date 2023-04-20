import { redirect } from 'react-router-dom';

async function checkAuth() {
	const isLoggedIn: boolean = true;

	if (!isLoggedIn) {
		return redirect('/');
	}

	return null;
}

export { checkAuth };
