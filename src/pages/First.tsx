import { useEffect, useRef, useState } from 'react';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { Footer } from '../components/Footer';
import Header from '../components/Header';
import { Main } from '../components/Main';
import Toggler from '../components/Toggler';

import { enableDarkMode, disableDarkMode, sendEmail } from '../utils';

async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const username = formData.get('username');
	const email = formData.get('email');

	console.log(username, email);
	// await sendEmail();

	return redirect('/thankyou');

	return null;
}

function First() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('darkMode') || 'disabled'
	);

	const body = useRef(document.body);

	function toggle(): void {
		setDarkMode((prev) => (prev === 'enabled' ? 'disabled' : 'enabled'));
	}

	useEffect(
		() =>
			darkMode === 'enabled' ? enableDarkMode(body) : disableDarkMode(body),
		[darkMode]
	);

	return (
		<>
			<Toggler toggle={toggle} />
			<Header />
			<Main />
			<Footer pathname={''} />
		</>
	);
}

export { First, action };
