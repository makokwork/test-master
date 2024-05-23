import { YMaps } from '@pbe/react-yandex-maps';
import Cookies from './pages/PolicyPage/components/Cookies';
import AppRouter from './router/AppRouter';
import './styles/styles.scss';

function App() {
  return (
    <>
      <YMaps>
        <AppRouter />
        <Cookies />
      </YMaps>
    </>
  );
}

export default App;
