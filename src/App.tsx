import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import Summary from "./pages/SummaryPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
