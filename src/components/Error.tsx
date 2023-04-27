import { useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError() as Error;

	return (
		<section>
			<h1>{error.message}</h1>
			<a href='/'>Вернуться на главную страницу</a>
		</section>
	);
}

export { Error };
