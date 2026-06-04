// pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';

const SUBJECTS = [
  { id: 'react-tsx', name: 'React & TypeScript', icon: '⚛️' },
  { id: 'python-ds', name: 'Python Data Science', icon: '🐍' },
  { id: 'node-backend', name: 'Node.js Backend', icon: '🚀' },
];

export default function Home() {
  const { setSubject } = useLearning();
  const navigate = useNavigate();

  const handleSelect = (sub: typeof SUBJECTS[0]) => {
    setSubject(sub);
    navigate(`/course/${sub.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">AI Learning Notebook</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => handleSelect(sub)}
            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-all text-center"
          >
            <span className="text-4xl mb-4 block">{sub.icon}</span>
            <span className="font-semibold text-xl">{sub.name}</span>
          </button>
        ))}
      </div>
      <button 
        onClick={() => navigate('/projects')}
        className="mt-12 text-slate-500 underline"
      >
        View All Mini Projects
      </button>
    </div>
  );
}