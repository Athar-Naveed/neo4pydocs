import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-grid">
      {/* Purple blob in the background */}
      <div
        className="gradient-blur h-[300px] w-[600px] -top-[150px] -left-[300px]"
        aria-hidden="true"
      />

      <div className="neo4py-container">
        <div className="text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neo4py-super-light border border-neo4py/20 text-neo4py-dark text-sm font-medium mb-6 opacity-1 animate-fade-in">
            <span>Neo4j + Python = Neo4py</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 opacity-0 animate-fade-in-delay-1">
            Easiest Way to
            <br />
            Interact with Neo4j
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance opacity-0 animate-fade-in-delay-2">
            Neo4py is a modern, intuitive Python library for interacting with
            Neo4j graph databases. Write cleaner code, query faster, and build
            powerful graph applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-3">
            <a
              href="#quickstart"
              className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-medium transition-all 
                bg-neo4py hover:bg-neo4py-dark text-white w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors 
                border border-neo4py/20 bg-neo4py/10 hover:bg-neo4py/20 text-neo4py-dark w-full sm:w-auto"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
