import Candidates from "candidates/Candidates";
import About from "about/About";
import Quiz from "quiz/Quiz";
import { Routes, Route, Navigate } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="quiz" />} />
    <Route path="candidatos" element={<Candidates />} />
    <Route path="quiz" element={<Quiz />} />
    <Route path="sobre" element={<About />} />
  </Routes>
);

export default Router;
