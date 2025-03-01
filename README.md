# **Neo4py**

**The easiest way to connect Neo4j with Python**

## **Overview**

Neo4py is a lightweight and intuitive Python library that simplifies interactions with the **Neo4j** graph database. It eliminates the complexities of Cypher queries by offering an easy-to-use methods for creating, reading, and managing graph data. Whether you're a beginner or an expert, **neo4py** makes working with graph databases effortless.

## **Problem Statement**

Working with Neo4j in Python often requires writing verbose Cypher queries and managing complex configurations. This slows down development and makes graph databases less accessible.

## **Solution**

Neo4py provides a **minimal-configuration** approach with easy methods for connecting, querying, and managing Neo4j data using Python dictionaries. With **Sloth Mode**, even complex operations become as simple as defining a dictionary.

---

## **Features**

### 🔗 **Seamless Connection with Minimal Configuration**

Easily connect to a Neo4j database in just one step:

```python
from neo4py.neo4py import Graph, Sloth

graph = Graph("connection_uri", ("user", "db_password"))
sloth = Sloth("connection_uri", ("user", "db_password"))
```

---

### ⚡ **Effortless Cypher Queries**

Run Cypher queries without hassle and retrieve data instantly:

```python
data = {"name": "Athar Naveed", "age": 20}
query = """MATCH (p:Person {name:$name}) RETURN p"""

graph.run(query, **data)
```

---

### 🦥 **Sloth Mode – Auto Cypher Generation**

Tired of writing Cypher queries? **Sloth Mode** automatically converts Python dictionaries into Cypher queries and creates nodes seamlessly:

```python
sloth.create_node([
    {'name': 'Athar', 'age': 20, 'gender': 'male', 'labels': 'Person'},
    {'name': 'Naveed', 'age': 50, 'gender': 'male', 'labels': ['Person', 'Admin']}
])
```

---

### 🔍 **Simplified Data Retrieval**

No need to write `MATCH (p) RETURN p`. Just use:

```python
sloth.read_node("*")
```

And get all nodes instantly!

---

## **Impact**

- Speeds up Neo4j development by reducing query complexity
- Makes graph databases more accessible to Python developers
- Saves time by automating common graph operations

🚀 **Neo4py** – Making Graph Databases **Faster, Easier, and Smarter**!
