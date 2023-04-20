import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import { Layout } from './components/Layout';

import { First } from './pages/First';
import { Thankyou, loader as thLoader } from './pages/Thankyou';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<First />} />
			<Route path='thankyou' element={<Thankyou />} loader={thLoader} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export { App };
