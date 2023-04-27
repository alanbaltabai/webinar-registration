import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import { Layout } from './components/Layout';
import { Error } from './components/Error';

import { First, action as firstAction } from './pages/First';
import { Thankyou, loader as thankyouLoader } from './pages/Thankyou';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route
				index
				element={<First />}
				action={firstAction}
				errorElement={<Error />}
			/>
			<Route path='thankyou' element={<Thankyou />} loader={thankyouLoader} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export { App };
