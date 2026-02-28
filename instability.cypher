MATCH (c:Component)
OPTIONAL MATCH (c)<-[:DEPENDS_ON]-() 
WITH c, COUNT(*) AS FanIn
OPTIONAL MATCH (c)-[:DEPENDS_ON]->()
WITH c, FanIn, COUNT(*) AS FanOut
RETURN c.name AS Component,
       FanIn,
       FanOut,
       CASE 
         WHEN (FanIn + FanOut) = 0 THEN 0
         ELSE toFloat(FanOut) / (FanIn + FanOut)
       END AS Instability;
