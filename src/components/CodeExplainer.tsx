import { useState } from 'react';

const codeSnippet = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;`;

export default function CodeExplainer() {
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const explainLine = async (line: string) => {
    setLoading(true);
    // AI Call: "Explain this specific line of code: ${line}"
    const res = await fetchAIExplanation(line);
    setExplanation(res);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-[500px]">
      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-white overflow-y-auto">
        {codeSnippet.split('\n').map((line, i) => (
          <div
            key={i}
            onClick={() => explainLine(line)}
            className="hover:bg-slate-800 cursor-pointer p-1 rounded group flex"
          >
            <span className="text-slate-500 w-8 inline-block">{i + 1}</span>
            <span>{line}</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 text-xs text-blue-400">Explain</span>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6 bg-blue-50 relative">
        <h3 className="font-bold mb-4 text-blue-800">AI Explanation</h3>
        {loading ? (
          <p>Thinking...</p>
        ) : (
          <p className="text-slate-700 leading-relaxed">{explanation || 'Click a line of code to see the AI explanation.'}</p>
        )}
      </div>
    </div>
  );
}
