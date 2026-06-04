// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LearningProvider } from './context/LearningContext';
import Home from './pages/Home';
import CourseModule from './pages/CourseModule';
import ProjectModule from './pages/ProjectModule';

export default function App() {
  return (
    <LearningProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:subjectId" element={<CourseModule />} />
          <Route path="/project/:subjectId" element={<ProjectModule />} />
        </Routes>
      </BrowserRouter>
    </LearningProvider>
  );
}