import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiHide } from "react-icons/bi";

function SignInForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="border-label">
          <span>Enter your password</span>
          <Button className="hide rounded-pill">
            <BiHide /> Hide
          </Button>
        </Form.Label>

        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <a
          href="#"
          target="_blank"
          className="forget-password text-muted "
          rel="noopener noreferrer"
        >
          Forget your password
        </a>
      </Form.Group>
      <Button
        className="sign-in-btn w-50 rounded-pill bg-gradient "
        type="submit"
        size="lg"
      >
        Sign in
      </Button>
      <p className="mt-2 ">
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
    </Form>
  );
}

export default SignInForm;
