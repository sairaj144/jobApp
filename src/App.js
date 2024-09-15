
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import JobPage from './Components/JobsPage';
import BookmarkPage from './Components/BookmarkPage';
import JobDetailPage from './Components/jobDetails'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<JobPage />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
        <Route path="/bookmarks" element={<BookmarkPage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
