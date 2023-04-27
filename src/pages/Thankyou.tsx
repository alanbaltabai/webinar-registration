import { useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { checkAuth } from '../utils';

async function loader() {
	return await checkAuth();
}

function Thankyou() {
	const location = useLocation();

	return (
		<>
			<main className='ty-main'>
				<h1>Спасибо за регистрацию!👍</h1>
				<p>
					Я отправил ссылку на вебинар на твою почту. Если письма нет, проверь
					папку "Спам", возможно письмо оказалось там.
				</p>
			</main>
			<Footer pathname={location.pathname} />
		</>
	);
}

export { Thankyou, loader };
