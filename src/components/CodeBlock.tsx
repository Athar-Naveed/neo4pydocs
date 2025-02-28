
import { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
// Import Prism styles
import 'prismjs/themes/prism-tomorrow.css';
// Import languages
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = 'python', title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-[#1A1F2C] shadow-xl my-4 transition-all duration-300 group hover:shadow-neo4py/20">
      {title && (
        <div className="bg-[#252B3B] px-4 py-2 flex justify-between items-center">
          <div className="text-gray-400 text-sm font-mono">{title}</div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-white text-xs bg-[#1A1F2C] py-1 px-2 rounded transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
      <pre className={`p-4 text-sm overflow-x-auto ${!title ? 'pt-8' : ''}`}>
        <code ref={codeRef} className={`language-${language} font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
