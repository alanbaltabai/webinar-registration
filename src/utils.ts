import { redirect } from 'react-router-dom';

async function checkAuth() {
	const isLoggedIn: boolean = false;

	if (!isLoggedIn) {
		throw redirect('/');
	}
}

export { checkAuth };
