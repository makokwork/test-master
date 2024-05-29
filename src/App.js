import { YMaps } from '@pbe/react-yandex-maps';
import Cookies from './pages/PolicyPage/components/Cookies';
import AppRouter from './router/AppRouter';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
      <YMaps>
        <Provider store={store}>
          <AppRouter />
          <Cookies />
        </Provider>
      </YMaps>
    </>
  );
}

export default App;
