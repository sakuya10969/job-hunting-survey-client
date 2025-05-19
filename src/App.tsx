import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SurveyList from './pages/SurveyList';
import SurveyForm from './pages/SurveyForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyList />} />
        <Route path="/create" element={<SurveyForm />} />
        <Route path="/survey/:id" element={<SurveyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
