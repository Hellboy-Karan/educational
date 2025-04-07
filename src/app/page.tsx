import { Row, Col, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { FaBook, FaClock, FaQuestionCircle, FaChartLine, FaBookmark } from 'react-icons/fa';

const Home: React.FC = () => (
  <>
    <h4 className="my-3">Quick Access</h4>
    <Row className="g-3">
      <Col xs={12} md={6} lg={4}>
        <Card className="h-100">
          <CardBody>
            <FaBook size={24} className="mb-2" />
            <CardTitle>My Batches</CardTitle>
            <CardText>View list of batches in which you are enrolled</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card className="h-100">
          <CardBody>
            <FaClock size={24} className="mb-2" />
            <CardTitle>My History</CardTitle>
            <CardText>View your recent learning here</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card className="h-100">
          <CardBody>
            <FaQuestionCircle size={24} className="mb-2" />
            <CardTitle>My Doubts</CardTitle>
            <CardText>View the list of your asked doubts in the lectures</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card className="h-100">
          <CardBody>
            <FaChartLine size={24} className="mb-2" />
            <CardTitle>Dashboard</CardTitle>
            <CardText>Track your progress through detailed performance</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card className="h-100">
          <CardBody>
            <FaBookmark size={24} className="mb-2" />
            <CardTitle>
              Bookmarks <span className="badge bg-success ms-2">New</span>
            </CardTitle>
            <CardText>View the list of your saved questions</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>
);

export default Home;
