import { Button, Col } from "react-bootstrap";
import { FcGoogle as Google } from "react-icons/fc";
import { BsTwitter as Twitter } from "react-icons/bs";
import SignInForm from "./SignInForm";

const SignUp = () => {
  return (
    <Col md={6}>
      <div className="sign-up">
        <p className="sign-up-link">
          Don’t have an acount?
          <a
            href="#"
            target="_blank"
            className=" text-muted "
            rel="noopener noreferrer"
          >
            {" "}
            Sign up
          </a>
        </p>
        <div className="actions">
          <h2 className="fs-4">Welcome back!</h2>
          <div className="auto-sign-in d-flex flex-column gap-2">
            <Button className="rounded-pill" variant="outline-dark" size="lg">
              <Google /> Continue with Google
            </Button>
            <Button className="rounded-pill" variant="outline-dark" size="lg">
              <Twitter className="twitter" /> Continue with Twitter
            </Button>
          </div>
          <div className="or d-flex justify-content-center">OR</div>
          <div className="form">
            <SignInForm />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SignUp;
