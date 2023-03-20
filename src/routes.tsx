// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './features/HomePage/presentation';
import { InitialPage } from './features/HomePage/presentation/inicial';
import { ErrorBoundary } from './features/ErrorPage/presentation';

const createRoutes = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Home />,

      children: [
        { index: true, element: <InitialPage /> },
        {
          path: '*',
          element: <ErrorBoundary />,
        },
      ],
    },
  ]);
};

export function Routes() {
  const router = createRoutes();

  return <RouterProvider router={router} />;
}
