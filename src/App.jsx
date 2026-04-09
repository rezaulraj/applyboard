import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/common/NotFound";
import Students from "./pages/student/Students";
import StudyAustralia from "./pages/studydestination/studyaustralia/StudyAustralia";
import StudyCanada from "./pages/studydestination/studycanada/StudyCanada";
import StudyIreland from "./pages/studydestination/studyireland/StudyIreland";
import StudyGermany from "./pages/studydestination/studygermany/StudyGermany";
import StudyUk from "./pages/studydestination/studyuk/StudyUk";
import StudyUsa from "./pages/studydestination/studyusa/StudyUsa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/australia" element={<StudyAustralia />} />
          <Route path="/canada" element={<StudyCanada />} />
          <Route path="/ireland" element={<StudyIreland />} />
          <Route path="/germany" element={<StudyGermany />} />
          <Route path="/uk" element={<StudyUk />} />
          <Route path="/usa" element={<StudyUsa />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
