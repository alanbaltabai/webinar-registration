import { MutableRefObject } from 'react';
import { redirect } from 'react-router-dom';

async function checkAuth() {
	const isLoggedIn: boolean = false;

	if (!isLoggedIn) {
		return redirect('/');
	}

	return null;
}

function enableDarkMode(element: MutableRefObject<HTMLElement>): void {
	localStorage.setItem('darkMode', 'enabled');

	element.current.classList.add('dark');
}

function disableDarkMode(element: MutableRefObject<HTMLElement>): void {
	localStorage.setItem('darkMode', 'disabled');

	element.current.classList.remove('dark');
}

export { checkAuth, enableDarkMode, disableDarkMode };
