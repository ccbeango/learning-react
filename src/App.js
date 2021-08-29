import { StoreContext } from './lib/react-redux';
import store from './store';
import Counter from './pages/counter';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Counter/>
    </StoreContext.Provider>
  );
}

export default App;
