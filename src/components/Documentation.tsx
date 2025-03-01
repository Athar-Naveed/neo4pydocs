import CodeBlock from "@/components/CodeBlock";
import { stateStore } from "@/store/zuStore";
import { FileText } from "lucide-react";

// Example documentation sections
const documentationSections = {
  introduction: {
    title: "Introduction to Neo4py",
    content: `Neo4py is a modern, intuitive Python library designed to make working with Neo4j graph databases easy and efficient. 
    It provides a simple, Pythonic interface to interact with Neo4j, while offering powerful features like Graph to query Neo4j, 
    and Sloth, so that you can write Neo4j queries directly in Python.`,
    code: `# Install Neo4py
pip install neo4py

# Import and use
from neo4py.neo4py import Graph 

# Create a connection
graph = Graph("connection_uri", ("user", "db_password"))

or

graph = Graph("bolt://localhost:7687",("neo4j", "12345678"))
`,
  },
  graph: {
    title: "Graph class",
    content: `Neo4py is a modern, intuitive Python library designed to make working with Neo4j graph databases easy and efficient. 
    It provides a simple, Pythonic interface to interact with Neo4j, while offering powerful features like Graph to query Neo4j, 
    and Sloth, so that you can write Neo4j queries directly in Python.`,
    code: `# Install Neo4py
pip install neo4py

# Import and use
from neo4py.neo4py import Graph 

# Create a connection
graph = Graph("connection_uri", ("user", "db_password"))

or

graph = Graph("bolt://localhost:7687",("neo4j", "12345678"))

# Querying the Neo4j
query = """MATCH (p:Person {name:$name}) WHERE p.name == $name RETURN p"""
data = { 'name':'Athar Naveed', 'age': 21 }
result = graph.run(query, **data)

## Processing results
for record in result:
    print(record)
`,
  },
  sloth: {
    title: "Sloth class",
    content: `Neo4py is a modern, intuitive Python library designed to make working with Neo4j graph databases easy and efficient.
  `,
    code: `# Install Neo4py
  pip install neo4py
  
  # Import and use
  from neo4py.neo4py import Sloth 
  
  # Create a connection
  sloth = Sloth("connection_uri", ("user", "db_password"))
  
  or
  
  sloth = Sloth("bolt://localhost:7687",("neo4j", "12345678"))
  
  # Creating nodes
  sloth.create_node([ 
     { 
         'name':'Athar',
         'age':20,
         'gender':'male', 
         'labels':'Single Label', 
 }, 
     { 
         'name':'Naveed',
         'age':50,
         'gender':'male', 
         'labels':['Single Label','List of Labels'] 
 }, 
 ])

 # Reading Nodes
 sloth.read_node('*')

 ## Processing Results
   for record in records:
     print(f'user id: {record['id']}')
     print(f'user name: {record['name']}') 
     print(f'user age: {record['age']}')
     print(f'user labels: {record['label']}')
     print('=====================================')
     
 ### output
 user id: 0
 user name: Athar
 user age: 22
 user labels: Human
 =====================================
 user id: 1
 user name: Naveed
 user age: 52
 user labels: ['Person', 'Human']
 =====================================
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

      {activeSection === "graph" && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {documentationSections.graph.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {documentationSections.graph.content}
          </p>
          <CodeBlock
            code={documentationSections.graph.code}
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
                  graph = Graph("bolt://localhost:7687",("neo4j", "12345678"))
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Querying Neo4j
              </h3>
              <p className="text-gray-700 mb-2">
                Represents a node in the graph with labels and properties.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <code className="text-sm text-gray-800 font-mono">
                  {
                    "query = MATCH (p:Person {name:$name}) WHERE p.name == $name RETURN p"
                  }
                </code>
                <br />
                <br />
                <code>{"data = { 'name':'Athar Naveed', 'age': 21 }"}</code>
                <br />
                <br />
                <code>{"result = graph.run(query, **data)"}</code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Output
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <code className="text-sm text-gray-800 font-mono">
                  {"for record in result:"}
                </code>
                <br />
                <code className="text-sm text-gray-800 font-mono">
                  &nbsp;&nbsp;{"print(record)"}
                </code>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "sloth" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {documentationSections.sloth.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {documentationSections.sloth.content}
          </p>
          <CodeBlock
            code={documentationSections.sloth.code}
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
    </div>
  );
};

export default Documentation;
