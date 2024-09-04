import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Error';
import Form from './pages/Form/Form';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/people" element={<List />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
