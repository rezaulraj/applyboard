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
import Institution from "./pages/institution/Institution";
import RecruitmentPartner from "./pages/recruitment-partner/RecruitmentPartner";
import StudyAbroadBlog from "./pages/blog/StudyAbroadBlog";
import Contact from "./pages/contact/Contact";
import Career from "./pages/career/Career";
import Solutions from "./pages/360-solution/Solutions";
import OurStory from "./pages/story/OurStory";

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
          <Route path="/institutions" element={<Institution />} />
          <Route path="/recruitment-partner" element={<RecruitmentPartner />} />
          <Route path="/blogs" element={<StudyAbroadBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
