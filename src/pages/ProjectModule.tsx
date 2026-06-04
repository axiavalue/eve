import { useLearning } from '../context/LearningContext';

export default function ProjectModule() {
  const { currentSubject } = useLearning();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-10">
        <h1 className="text-3xl font-bold mb-4">Project Module</h1>
        <p className="text-slate-600 mb-6">
          This project page expands on the selected subject and shows a mini project outline.
        </p>
        {currentSubject ? (
          <div>
            <h2 className="text-2xl font-semibold">{currentSubject.name}</h2>
            <p className="text-slate-700 mt-3">Use this space to describe a hands-on project for the chosen topic.</p>
          </div>
        ) : (
          <p className="text-slate-700">Select a subject first from the home page.</p>
        )}
      </div>
    </div>
  );
}
