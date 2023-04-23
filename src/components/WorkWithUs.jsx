import flower from "../images/bert-b-rhNff6hB41s-unsplash 1.png";
import { Col } from "react-bootstrap";

const WorkWithUs = () => {
  return (
    <Col md={6}>
      <div className="work-with-us  h-100">
        <img className="h-100 w-100" src={flower} alt="flower" />
        <div className="text">
          <h1>Work With Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
            orci, eu porttitor lacus.
          </p>
        </div>
      </div>
    </Col>
  );
};

export default WorkWithUs;
