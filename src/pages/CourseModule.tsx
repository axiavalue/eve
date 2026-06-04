import { useEffect, useState } from 'react';
import { useLearning } from '../context/LearningContext';

export default function CourseModule() {
  const { currentSubject } = useLearning();
  const [courseContent, setCourseContent] = useState<any>(null);

  useEffect(() => {
    if (currentSubject) {
      // Mock AI Call: In reality, use OpenAI/Gemini API here
      // Prompt: "Generate a 3-lesson course for ${currentSubject.name}"
      generateAICourse(currentSubject.name).then(setCourseContent);
    }
  }, [currentSubject]);

  return (
    <div className="flex h-screen bg-white">
      <aside className="w-64 border-r p-4 bg-slate-50">
        <h2 className="font-bold text-slate-700 mb-4">{currentSubject?.name}</h2>
        <nav className="space-y-2">
          {courseContent?.lessons.map((l: any) => (
            <div key={l.id} className="p-2 hover:bg-white rounded cursor-pointer text-sm">
              {l.title}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-12 overflow-y-auto">
        {courseContent ? (
          <article className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{courseContent.activeLesson.title}</h1>
            <div className="prose lg:prose-xl text-slate-600">{courseContent.activeLesson.body}</div>
          </article>
        ) : (
          <div className="flex items-center justify-center h-full">Generating your course...</div>
        )}
      </main>
    </div>
  );
}
