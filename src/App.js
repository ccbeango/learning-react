import { Provider } from 'react-redux';
import store from './store';
import Home4 from './pages/home4-redux-thunk的使用';
import Home5 from './pages/home5-redux-saga的使用';

function App() {
  return (
    <>
      <Provider store={store}>
        <Home4/>    
        <Home5/>    
      </Provider>  
    </>
  );
}

export default App;
