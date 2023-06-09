import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from "./pages/LogIn"
import NotFound from './pages/NotFound';
import MyClaims from './pages/MyClaims';
import Approvals from './pages/Approvals';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LogIn />,
		errorElement: <NotFound />
	},
	{
		path: "myclaims",
		element: <MyClaims />
	},
	{
		path: "approvals",
		element: <Approvals />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
