import CodeBlock from "./CodeBlock";

const installCode = `# Install using pip
pip install neo4py

# Or using uv
uv pip install neo4py`;

const usageCode = `from neo4py.neo4py import Graph

# Connect to Neo4j
graph = Graph("connection_uri", ("user", "db_password"))

# Execute a Cypher query
data = { 'name':'Athar Naveed', 'age': 21 }

result = db.query("""
    MATCH (p:Person {name: $name})
    RETURN p.name AS name
""", **data)

# Process results
for record in records:
    print(record["name"])

`;

const QuickStart = () => {
  return (
    <section id="quickstart" className="py-20 bg-gray-50">
      <div className="neo4py-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neo4py-super-light border border-neo4py/20 text-neo4py-dark text-sm font-medium mb-4">
              <span>Get started in minutes</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Quick Start Guide
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get up and running with Neo4py in just a few lines of code. No
              complex setup required.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <CodeBlock code={installCode} language="bash" title="Terminal" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
              <CodeBlock
                code={usageCode}
                language="python"
                title="example.py"
              />
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mt-10">
              <h3 className="text-xl font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-neo4py mr-2">•</span>
                  Python 3.7 or higher
                </li>
                <li className="flex items-start">
                  <span className="text-neo4py mr-2">•</span>
                  Neo4j Database (4.0 or higher)
                </li>
                <li className="flex items-start">
                  <span className="text-neo4py mr-2">•</span>
                  <span>
                    <code className="text-xs font-mono bg-gray-100 py-0.5 px-1 rounded">
                      pip
                    </code>{" "}
                    or{" "}
                    <code className="text-xs font-mono bg-gray-100 py-0.5 px-1 rounded">
                      uv
                    </code>{" "}
                    for package installation
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-10">
              <a
                href="/docs"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors 
                  border border-neo4py hover:bg-neo4py hover:text-white text-neo4py"
              >
                Read the full documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
