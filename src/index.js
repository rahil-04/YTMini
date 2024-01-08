import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './Components/WatchPage';
import MainContent from './Components/MainContent';
import SearchResultContainer from './Components/SearchResultContainer';
import History from './Components/History';

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/",
      element:<MainContent/>

    },
    {
      path:"/history",
      element:<History/>
    },
    {
      path:"/result",
      element:<SearchResultContainer/>
    }
  ]
},])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
