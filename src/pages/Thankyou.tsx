import { checkAuth } from '../utils';

async function loader() {
	return await checkAuth();
}

function Thankyou() {
	return <h1>Danke!</h1>;
}

export { Thankyou, loader };
