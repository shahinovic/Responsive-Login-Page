import { Container, Row } from "react-bootstrap";

import SignUp from "./components/SignUp";
import WorkWithUs from "./components/WorkWithUs";

const App = () => {
  return (
    <div className="app d-flex ">
      <Container fluid>
        <Row>
          <WorkWithUs />
          <SignUp />
        </Row>
      </Container>
    </div>
  );
};

export default App;
