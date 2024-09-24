import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import LoginForm from './pages/user/LoginForm';

// css 전체 공통 적용
import './css/mysite.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/loginform' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;