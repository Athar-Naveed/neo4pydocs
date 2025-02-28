
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="neo4py-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-neo4py rounded-md flex items-center justify-center text-white font-mono tracking-tighter">
                n4
              </div>
              <span className="text-xl font-bold">neo4py</span>
            </a>
            <p className="text-muted-foreground max-w-md">
              A modern, intuitive Python library for interacting with Neo4j graph databases. Build powerful graph applications with minimal effort.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com" 
                className="text-gray-500 hover:text-neo4py"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-gray-500 hover:text-neo4py"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#docs" className="text-muted-foreground hover:text-neo4py">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo4py">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo4py">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo4py">Examples</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="#community" className="text-muted-foreground hover:text-neo4py">Join Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo4py">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo4py">Community Chat</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo4py">Contributing</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Neo4py. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-neo4py text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-neo4py text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-neo4py text-sm">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
