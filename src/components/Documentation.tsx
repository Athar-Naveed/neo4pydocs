import CodeBlock from "@/components/CodeBlock";
import { stateStore } from "@/store/zuStore";
import { FileText } from "lucide-react";

// Example documentation sections
const documentationSections = {
  introduction: {
    title: "Introduction to Neo4py",
    content: `Neo4py is a modern, intuitive Python library designed to make working with Neo4j graph databases easy and efficient. 
    It provides a simple, Pythonic interface to interact with Neo4j, while offering powerful features like query building, 
    caching, and connection pooling.`,
    code: `# Install Neo4py
pip install neo4py

# Import and use
import neo4py

# Create a connection
conn = neo4py.connect("bolt://localhost:7687", auth=("neo4j", "password"))
`,
  },
  apiReference: {
    title: "API Reference",
    content:
      "The Neo4py API is designed to be intuitive and consistent. Here are the main components:",
    code: `from neo4py import Graph, Node, Relationship

# Create a graph instance
graph = Graph("bolt://localhost:7687", auth=("neo4j", "password"))

# Create nodes
alice = Node("Person", name="Alice", age=30)
bob = Node("Person", name="Bob", age=40)

# Create relationship
friendship = Relationship(alice, "KNOWS", bob, since=2010)

# Save to database
graph.create(alice | bob | friendship)
`,
  },
  guides: {
    title: "Guides and Tutorials",
    content:
      "Learn Neo4py through step-by-step guides covering common use cases and patterns.",
    code: `# Example: Finding connections between people

def find_connections(graph, person1_name, person2_name, max_depth=3):
    query = """
    MATCH path = shortestPath((p1:Person {name: $person1})-[*1..{max_depth}]-(p2:Person {name: $person2}))
    RETURN path
    """
    result = graph.run(query, person1=person1_name, person2=person2_name, max_depth=max_depth)
    return result.to_subgraph()
`,
  },
};

const Documentation = () => {
  const { activeSection } = stateStore();
  
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
      {activeSection === "introduction" && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {documentationSections.introduction.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {documentationSections.introduction.content}
          </p>
          <CodeBlock
            code={documentationSections.introduction.code}
            language="python"
            title="Getting started with Neo4py"
          />
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Simple and intuitive Pythonic API</li>
              <li>Smart connection pooling for efficient database usage</li>
              <li>Powerful query builder with type hints</li>
              <li>Automatic object mapping (OGM)</li>
              <li>Comprehensive transaction support</li>
              <li>Robust error handling</li>
            </ul>
          </div>
        </div>
      )}

      {activeSection === "api-reference" && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {documentationSections.apiReference.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {documentationSections.apiReference.content}
          </p>
          <CodeBlock
            code={documentationSections.apiReference.code}
            language="python"
            title="Neo4py Core Components"
          />
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Graph Class
              </h3>
              <p className="text-gray-700 mb-2">
                The main entry point for Neo4py. Manages connections and
                provides methods for interacting with the database.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <code className="text-sm text-gray-800 font-mono">
                  Graph(uri, auth=None, **config)
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Node Class
              </h3>
              <p className="text-gray-700 mb-2">
                Represents a node in the graph with labels and properties.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <code className="text-sm text-gray-800 font-mono">
                  Node(*labels, **properties)
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Relationship Class
              </h3>
              <p className="text-gray-700 mb-2">
                Represents a relationship between nodes with a type and
                properties.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <code className="text-sm text-gray-800 font-mono">
                  Relationship(start_node, type, end_node, **properties)
                </code>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "guides" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {documentationSections.guides.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {documentationSections.guides.content}
          </p>
          <CodeBlock
            code={documentationSections.guides.code}
            language="python"
            title="Finding connections between people"
          />
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Popular Guides
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 bg-neo4py-super-light rounded-lg hover:bg-neo4py-light/20 transition-colors"
                >
                  <FileText className="h-5 w-5 text-neo4py mr-3" />
                  <span className="font-medium text-gray-800">
                    Getting Started with Neo4py
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 bg-neo4py-super-light rounded-lg hover:bg-neo4py-light/20 transition-colors"
                >
                  <FileText className="h-5 w-5 text-neo4py mr-3" />
                  <span className="font-medium text-gray-800">
                    Building a Recommendation Engine
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 bg-neo4py-super-light rounded-lg hover:bg-neo4py-light/20 transition-colors"
                >
                  <FileText className="h-5 w-5 text-neo4py mr-3" />
                  <span className="font-medium text-gray-800">
                    Working with Large Datasets
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeSection === "query-building" && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Query Building</h2>
          <p className="text-gray-700 leading-relaxed">
            Neo4py provides a powerful query builder that makes it easy to
            construct complex Cypher queries.
          </p>
          <CodeBlock
            code={`from neo4py import Graph, QueryBuilder

# Create a graph instance
graph = Graph("bolt://localhost:7687", auth=("neo4j", "password"))

# Use the query builder
query = (QueryBuilder()
    .match("(p:Person)")
    .where("p.age > $min_age")
    .return_("p.name AS name, p.age AS age")
    .order_by("p.age DESC")
    .limit(10))

# Execute the query
result = graph.run(query, min_age=30)

# Process the results
for record in result:
    print(f"{record['name']}: {record['age']}")
`}
            language="python"
            title="Using the Query Builder"
          />
        </div>
      )}

      {activeSection === "data-modeling" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Data Modeling with Neo4py
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Learn best practices for modeling your domain as a graph using
            Neo4py's object-graph mapping capabilities.
          </p>
          <CodeBlock
            code={`from neo4py import GraphObject, Property, RelatedTo, RelatedFrom

class Person(GraphObject):
    __primarylabel__ = "Person"
    
    name = Property()
    age = Property()
    email = Property(unique=True)
    
    # Relationships
    friends = RelatedTo("Person", "FRIENDS_WITH")
    posts = RelatedTo("Post", "CREATED")
    comments = RelatedTo("Comment", "WROTE")

class Post(GraphObject):
    __primarylabel__ = "Post"
    
    content = Property()
    created_at = Property()
    
    # Relationships
    author = RelatedFrom("Person", "CREATED")
    comments = RelatedTo("Comment", "HAS_COMMENT")
    
# Usage
alice = Person(name="Alice", age=30, email="alice@example.com").save()
bob = Person(name="Bob", age=28, email="bob@example.com").save()

# Create relationship
alice.friends.add(bob)
alice.save()
`}
            language="python"
            title="Object-Graph Mapping Example"
          />
        </div>
      )}

      {activeSection === "troubleshooting" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Troubleshooting
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Solutions to common issues you might encounter when working with
            Neo4py.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <h3 className="text-lg font-medium text-amber-800 mb-2">
              Connection Issues
            </h3>
            <p className="text-amber-700">
              If you're having trouble connecting to your Neo4j database,
              check your credentials and make sure the database is running.
            </p>
            <CodeBlock
              code={`# Debug connection issues
from neo4py import Graph

try:
    graph = Graph(
        "bolt://localhost:7687", 
        auth=("neo4j", "password"),
        timeout=5,  # Increase timeout
        max_connection_lifetime=3600  # Increase connection lifetime
    )
    # Test the connection
    result = graph.run("RETURN 1 AS test")
    print(f"Connection successful: {result.evaluate()}")
except Exception as e:
    print(f"Connection error: {e}")
    # Check Neo4j logs for more details
`}
              language="python"
              title="Debugging Connection Issues"
            />
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-6">
            <h3 className="text-lg font-medium text-blue-800 mb-2">
              Performance Optimization
            </h3>
            <p className="text-blue-700">
              If your queries are running slowly, consider using these
              optimization techniques.
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-700 mt-2">
              <li>Use parameterized queries to enable query caching</li>
              <li>Create indexes on frequently queried properties</li>
              <li>Limit the depth of relationship traversals</li>
              <li>Use PROFILE and EXPLAIN to analyze query performance</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
