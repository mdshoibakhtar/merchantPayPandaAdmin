import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/header/Header';

function App() {
  return (
    <>
   <Header/>
    <Routes>
      <Route path="" element={"Dashboard"} />
    </Routes>
    </>
  );
}

export default App;
