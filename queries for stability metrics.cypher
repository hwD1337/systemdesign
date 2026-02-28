MATCH (c:Component)<-[:DEPENDS_ON]-()
RETURN c.name AS Component, COUNT(*) AS FanIn;
