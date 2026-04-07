import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/common/NotFound";
import Students from "./pages/student/Students";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<Students />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
