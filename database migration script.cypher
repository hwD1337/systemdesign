// Create components
CREATE (:Component {name:'AuthService'});
CREATE (:Component {name:'CourseService'});
CREATE (:Component {name:'PaymentService'});
CREATE (:Component {name:'NotificationService'});
CREATE (:Component {name:'AnalyticsService'});

// Create dependencies
MATCH (a:Component {name:'AuthService'}), (b:Component {name:'CourseService'})
CREATE (a)-[:DEPENDS_ON]->(b);

MATCH (a:Component {name:'CourseService'}), (b:Component {name:'PaymentService'})
CREATE (a)-[:DEPENDS_ON]->(b);

MATCH (a:Component {name:'PaymentService'}), (b:Component {name:'NotificationService'})
CREATE (a)-[:DEPENDS_ON]->(b);

MATCH (a:Component {name:'CourseService'}), (b:Component {name:'AnalyticsService'})
CREATE (a)-[:DEPENDS_ON]->(b);
