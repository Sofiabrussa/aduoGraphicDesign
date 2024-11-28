import { Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container text-center'>
        <Routes>
          {/*   <Route path='/' element={<Inicio></Inicio>} />
          <Route path='/albumes' element={<Albumes></Albumes>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
