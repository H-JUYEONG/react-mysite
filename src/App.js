import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/include/Header';
import Footer from './pages/include/Footer';

import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';

import GuestbookList from './pages/guestbook/GuestbookList';
import ItemGuest from './pages/guestbook/ItemGuest';
import DeleteForm from './pages/guestbook/DeleteForm';


// css 전체 공통 적용
import './css/mysite.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />

          <Route path='/' element={<Main />} />
          <Route path='/loginform' element={<LoginForm />} />
          <Route path='/joinform' element={<JoinForm />} />
          <Route path='/joinok' element={<JoinOk />} />
          <Route path='/modifyform' element={<ModifyForm />} />
          <Route path='/guestbooklist' element={<GuestbookList />} />
          <Route path='/itemguest' element={<ItemGuest />} />
          <Route path='/deleteform/:no' element={<DeleteForm />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;