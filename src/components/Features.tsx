
import { Database, Zap, Code, ArrowDownUp, ShieldCheck, Network } from "lucide-react";

const features = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Intuitive API",
    description: "Simple, fluent interface that makes working with Neo4j feel natural in Python."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "High Performance",
    description: "Optimized for speed and efficiency with minimal overhead and smart caching."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Type Safety",
    description: "Full TypeScript support with comprehensive type definitions for a safer development experience."
  },
  {
    icon: <ArrowDownUp className="h-6 w-6" />,
    title: "Data Mapping",
    description: "Seamlessly convert between Neo4j records and Python objects with customizable mappers."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure by Default",
    description: "Built-in protection against injection attacks and secure authentication handling."
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Advanced Graph Algorithms",
    description: "Built-in implementations of common graph algorithms for easier data analysis."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-white">
      {/* Purple blob in the background */}
      <div 
        className="gradient-blur h-[400px] w-[400px] bottom-[-200px] right-[-200px]"
        aria-hidden="true"
      />
      
      <div className="neo4py-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neo4py-super-light border border-neo4py/20 text-neo4py-dark text-sm font-medium mb-4">
            <span>Why Neo4py?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Designed for Python Developers
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Neo4py bridges the gap between Neo4j and Python, offering a library that feels natural to Python developers while leveraging the full power of graph databases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neo4py/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neo4py-super-light/0 to-neo4py-super-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-neo4py-super-light text-neo4py rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
