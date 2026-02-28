Overview
This project models the Global Student Portal as a dependency graph in Neo4j. Each component (e.g., Authentication, Course Management, Payment, Notifications) is represented as a node, and dependencies between them are represented as directed edges.

We calculate stability metrics from Clean Architecture:

Fan-in → Number of incoming dependencies.

Fan-out → Number of outgoing dependencies.

Instability (I) → 𝐼 =Fan-out/(Fan-in + Fan-out)

