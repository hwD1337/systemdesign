import json

# 1. Load the global_student_portal_dependencies JSON string into a Python dictionary.
portal_data = json.loads(global_student_portal_dependencies)

# 2. Initialize an empty list to store Cypher queries.
cypher_queries = []

# 3. Add a Cypher query to the list to create a uniqueness constraint on the name property for Component nodes.
cypher_queries.append("CREATE CONSTRAINT ON (c:Component) ASSERT c.name IS UNIQUE;")

# 4. Iterate through the components in the loaded data:
for component_info in portal_data['components']:
    component_name = component_info['name']
    dependencies = component_info['depends_on']

    # a. For each component, add a Cypher query to create a Component node with its name property.
    cypher_queries.append(f"CREATE (c:Component {{name: '{component_name}'}});")

    # b. For each dependency of the current component, add a Cypher query to create a DEPENDS_ON relationship.
    for dependency_name in dependencies:
        cypher_queries.append(
            f"MATCH (a:Component {{name: '{component_name}'}}), (b:Component {{name: '{dependency_name}'}})"
            f"CREATE (a)-[:DEPENDS_ON]->(b);"
        )

# 5. Combine all Cypher queries into a single string.
final_cypher_script = "\n".join(cypher_queries)

# 6. Save this Cypher script to a file named neo4j_migration.cypher.
with open('neo4j_migration.cypher', 'w') as f:
    f.write(final_cypher_script)

print("Neo4j migration script (neo4j_migration.cypher) created successfully. You can download it from the files pane.")
print("\n--- Generated Cypher Script ---\n")
print(final_cypher_script)
