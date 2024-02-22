import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/UserAuthContext";
import "../../index.css";

const Login = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [result, setResult] = useState(null);
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!number || number.trim().length !== 13) {
      setError("Please enter a valid phone number!");
      setLoading(false);
      return;
    }

    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setShowOTPForm(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (otp.length !== 6 || otp === null) {
      setError("Please enter a valid OTP!");
      setLoading(false);
      return;
    }

    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="box">
        <h2 className="mb-3">Login</h2> <br/>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={getOtp} style={{ display: !showOTPForm ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              aria-label="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>

          <div className="button-right">
            <Link to="/">
              <button className="second" variant="secondary">Cancel</button>
            </Link>
            &nbsp;
            <button className="send" type="submit" variant="primary" disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: showOTPForm ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="text" 
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              aria-label="Enter OTP"
            />
          </Form.Group>

          <div className="button-right">
            <Link to="/">
              <button className="cancel">Cancel</button>
            </Link>
            &nbsp;
            <Link to="/home">
              <button type="submit" className="mit" disabled={loading}>
                {loading ? "Verifying..." : "Verify"}
              </button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
