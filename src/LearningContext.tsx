// context/LearningContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Subject = { id: string; name: string; icon: string };

interface LearningContextType {
  currentSubject: Subject | null;
  setSubject: (subject: Subject) => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);
  return (
    <LearningContext.Provider value={{ currentSubject, setSubject: setCurrentSubject }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) throw new Error("useLearning must be used within LearningProvider");
  return context;
};