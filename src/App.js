import { Provider } from 'react-redux';
import Home from './pages/home';
import About from './pages/about';

import Home2 from './pages/home2';
import About2 from './pages/about2';
import store from './store';
import { StoreContext } from './utils/context';

import Home3 from './pages/home3';
import Home4 from './pages/home4-redux-thunk的使用';
import Home5 from './pages/home5-redux-saga的使用';

function App() {
  return (
    <>
      {/* <Home/>    
      <About/>  
      <StoreContext.Provider value={store}>
        <Home2/>    
        <About2/>    
      </StoreContext.Provider>  */}
      <Provider store={store}>
        {/* <Home3/>    
        <Home4/>     */}
        <Home5/>    
      </Provider>  
    </>
  );
}

export default App;
