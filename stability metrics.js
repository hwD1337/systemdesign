from tabulate import tabulate

# Cypher query to retrieve stability metrics
retrieve_metrics_query = """MATCH (c:Component)
RETURN c.name AS Component, c.fanIn AS FanIn, c.fanOut AS FanOut, c.instability AS Instability
ORDER BY c.name"""

print("--- Cypher Query to Retrieve Stability Metrics ---")
print(retrieve_metrics_query)
print("\n")

# Simulate data retrieval from Neo4j
# In a real scenario, this would involve using a Neo4j driver (e.g., py2neo, neo4j-driver)
# to connect to the database and execute the query.

simulated_data = [
    {"Component": "AcademicRecords", "FanIn": 2, "FanOut": 1, "Instability": 0.3333},
    {"Component": "CourseCatalog", "FanIn": 1, "FanOut": 1, "Instability": 0.5},
    {"Component": "Dashboard", "FanIn": 0, "FanOut": 4, "Instability": 1.0},
    {"Component": "EnrollmentService", "FanIn": 2, "FanOut": 2, "Instability": 0.5},
    {"Component": "FeedbackSystem", "FanIn": 0, "FanOut": 1, "Instability": 1.0},
    {"Component": "HelpDesk", "FanIn": 0, "FanOut": 1, "Instability": 1.0},
    {"Component": "NotificationService", "FanIn": 1, "FanOut": 1, "Instability": 0.5},
    {"Component": "PaymentGateway", "FanIn": 0, "FanOut": 1, "Instability": 1.0},
    {"Component": "StudentProfile", "FanIn": 1, "FanOut": 2, "Instability": 0.6667},
    {"Component": "UserAuthentication", "FanIn": 6, "FanOut": 0, "Instability": 0.0}
]

# Prepare data for markdown table
headers = ["Component", "Fan-in", "Fan-out", "Instability"]
# Ensure data order matches headers and format Instability
table_data = []
for row in simulated_data:
    table_data.append([
        row["Component"],
        row["FanIn"],
        row["FanOut"],
        f"{row["Instability"]: .4f}"
    ])

# Generate markdown table
markdown_table = tabulate(table_data, headers=headers, tablefmt="pipe")

print("--- Stability Metrics Table ---")
print(markdown_table)
