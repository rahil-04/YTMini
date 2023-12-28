import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './redux_store_slices/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './Components/WatchPage';
import MainContent from './Components/MainContent';

function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/",
        element:<MainContent/>

      }
    ]
  },])
  
  return (
   <div>
    <Provider store={appStore}>
      <Head/>
      <RouterProvider router={router}/>
    </Provider>
   </div>
  );
}

export default App;
