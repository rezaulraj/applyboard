import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/common/NotFound";
import Students from "./pages/student/Students";
import StudyAustralia from "./pages/studydestination/studyaustralia/StudyAustralia";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/australia" element={<StudyAustralia />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
