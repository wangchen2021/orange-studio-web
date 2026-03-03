import { Outlet } from 'react-router-dom';
import 'normalize.css';
import '@/styles/global.scss';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
