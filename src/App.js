import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Blog from './components/blog/Blog';
import Teacher from './components/Teacher/Teacher';
import Donations from './components/donat/Donations';
import FormForTeacher from './components/formFromTeacher/Formteacher';
import Teacherinformation from './components/Teacher/teacherinformation';
import OneBlog from './components/blog/OneBlog';
import PostBlog from './components/blog/PostBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogAll" element={<Blog/>} />
          <Route path="/blogOne" element={<OneBlog/>} />
          <Route path="/postblog" element={<PostBlog/>} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/donat" element={<Donations />} />
          <Route path="/formForTeacher" element={<FormForTeacher />} />
          <Route path='/teacherinfo' element={<Teacherinformation/>}/>
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
