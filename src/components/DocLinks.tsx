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
import { useState } from "react";

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
    <section id="docs" className="py-20 relative overflow-hidden bg-white">
      {/* Purple blob in the background */}
      <div
        className="gradient-blur h-[300px] w-[300px] top-[50px] left-[-150px]"
        aria-hidden="true"
      />

      <div className="neo4py-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neo4py-super-light border border-neo4py/20 text-neo4py-dark text-sm font-medium mb-4">
            <span>Documentation</span>
          </div>

          <p className="text-lg text-muted-foreground">
            Everything you need to know about Neo4py from basic concepts to
            advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Documentation navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {documentationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`bg-white rounded-lg p-4 border hover:border-neo4py/20 transition-all duration-300 flex items-center gap-3 group ${
                    activeSection === link.href.replace("#", "")
                      ? "border-neo4py shadow-sm"
                      : "border-gray-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(link.href.replace("#", ""));
                  }}
                >
                  <div
                    className={`${
                      activeSection === link.href.replace("#", "")
                        ? "text-neo4py"
                        : "text-gray-500"
                    }`}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-base font-medium ${
                        activeSection === link.href.replace("#", "")
                          ? "text-neo4py"
                          : "text-gray-700"
                      }`}
                    >
                      {link.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocLinks;
