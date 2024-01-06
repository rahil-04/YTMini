import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './redux_store_slices/store';
import Head from './Components/Head';

function App() { 
  return (
   <div>
    <Provider store={appStore}>
      <Head/>
      <Body/>
    </Provider>
   </div>
  );
}

export default App;
