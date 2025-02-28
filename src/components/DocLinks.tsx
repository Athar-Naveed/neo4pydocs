
import { stateStore } from "@/store/zuStore";
import {
  FileText,
  BookOpen,
  Code,
  PenTool,
  Layers,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

const documentationLinks = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Introduction",
    description: "New to Neo4py? Start here for an overview of key concepts.",
    href: "#introduction",
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "API Reference",
    description:
      "Complete API documentation with examples and type definitions.",
    href: "#api-reference",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Guides",
    description: "Step-by-step tutorials for common Neo4py use cases.",
    href: "#guides",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Query Building",
    description: "Learn to construct and optimize Neo4j queries in Python.",
    href: "#query-building",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Data Modeling",
    description: "Best practices for designing your graph database schema.",
    href: "#data-modeling",
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Troubleshooting",
    description: "Common issues and their solutions when working with Neo4py.",
    href: "#troubleshooting",
  },
];

const DocLinks = () => {
  const { activeSection, setActiveSection } = stateStore();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Documentation</h2>
      <p className="text-gray-600 mb-6">
        Everything you need to know about Neo4py from basic concepts to advanced techniques.
      </p>
      
      <div className="space-y-2">
        {documentationLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`rounded-lg p-3 flex items-center gap-3 transition-all duration-200 ${
              activeSection === link.href.replace("#", "")
                ? "bg-neo4py-super-light border-neo4py text-neo4py"
                : "hover:bg-gray-50 text-gray-700"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection(link.href.replace("#", ""));
            }}
          >
            <div
              className={activeSection === link.href.replace("#", "")
                ? "text-neo4py"
                : "text-gray-500"
              }
            >
              {link.icon}
            </div>
            <div>
              <h3 className="text-base font-medium">
                {link.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DocLinks;
