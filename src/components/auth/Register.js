import Header from "../common/Header";
import Footer from "../common/Footer";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const backEndServer = "https://notememo-backend-production.up.railway.app";
  const [failureResponse, setFailureResponse] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: event.target.elements.username.value,
      name: event.target.elements.name.value,
      password: event.target.elements.password.value,
      email: event.target.elements.username.value,
    };

    Axios.post(backEndServer + "/auth/register", JSON.stringify(newUser), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/notes");
        }
      })
      .catch((err) => {
        setFailureResponse(err.response.data.message);
        console.error(err);
      });
  }
  return (
    <div className="content">
      <Header />

      <div id="fb-root"></div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-8">
            <h5 className="pl-2">Create an account</h5>
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="username">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input type="string" className="form-control" name="name" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark mt-3">
                    Register
                  </button>
                </form>
              </div>
            </div>
            {failureResponse && (
              <div class="alert alert-danger mt-3" role="alert">
                {failureResponse}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
