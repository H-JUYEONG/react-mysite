import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/include/Header';
import Footer from './pages/include/Footer';

import Main from './pages/main/Main';

// user
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';

// guestbook
import GuestbookList from './pages/guestbook/GuestbookList';
import ItemGuest from './pages/guestbook/ItemGuest';
import GuestDeleteForm from './pages/guestbook/GuestDeleteForm';

// board
import BoardList from './pages/board/BoardList';
import ItemBoard from './pages/board/ItemBoard';
import BoardModifyForm from './pages/board/BoardModifyForm';
import BoardRead from './pages/board/BoardRead';
import BoardWriteForm from './pages/board/BoardWriteForm';


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
          <Route path='/guestdeleteform/:no' element={<GuestDeleteForm />} />

          <Route path='/boardlist' element={<BoardList />} />
          <Route path='/itemboard' element={<ItemBoard />} />
          <Route path='/boardmodifyform' element={<BoardModifyForm />} />
          <Route path='/boardread' element={<BoardRead />} />
          <Route path='/boardwriteform' element={<BoardWriteForm />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;