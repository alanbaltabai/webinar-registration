import { checkAuth } from '../utils';

async function loader() {
	await checkAuth();

	return null;
}

function Thankyou() {
	return <h1>Danke!</h1>;
}

export { Thankyou, loader };
