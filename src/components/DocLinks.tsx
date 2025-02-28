
import { FileText, BookOpen, Code, PenTool, Layers, HelpCircle, ArrowUpRight } from "lucide-react";

const documentationLinks = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Introduction",
    description: "New to Neo4py? Start here for an overview of key concepts.",
    href: "#"
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "API Reference",
    description: "Complete API documentation with examples and type definitions.",
    href: "#"
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Guides",
    description: "Step-by-step tutorials for common Neo4py use cases.",
    href: "#"
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Query Building",
    description: "Learn to construct and optimize Neo4j queries in Python.",
    href: "#"
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Data Modeling",
    description: "Best practices for designing your graph database schema.",
    href: "#"
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Troubleshooting",
    description: "Common issues and their solutions when working with Neo4py.",
    href: "#"
  }
];

const DocLinks = () => {
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
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Comprehensive Documentation
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Neo4py from basic concepts to advanced techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {documentationLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-neo4py/20 transition-all duration-300 flex flex-col group relative"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-neo4py">{link.icon}</div>
                <h3 className="text-lg font-semibold group-hover:text-neo4py transition-colors">{link.title}</h3>
                <ArrowUpRight className="h-4 w-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground text-sm">{link.description}</p>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-medium transition-all 
              border border-neo4py hover:bg-neo4py hover:text-white text-neo4py"
          >
            Browse All Documentation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DocLinks;
