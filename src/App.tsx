import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './components/Auth';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Settings } from './components/Settings';
import { ArticleEditor } from './components/ArticleEditor';
import { Article } from './components/Article';
import { Profile } from './components/Profile';


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<AuthPage />}></Route>
        <Route path='/register' element={<AuthPage />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/editor' element={<ArticleEditor />}></Route>
        <Route path='/article' element={<Article />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
