/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <AuthHeader
          title="Welcome!"
          lead="Sign in with one of these providers:"
        />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Container>
                      <Row>
                        <Col sm >
                          <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="/.auth/login/google"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fas fa-heart"></i>
                            </span>
                            <span className="btn-inner--text">Google</span>
                          </Button>

                        </Col>
                        <Col sm >
                          <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="/.auth/login/github"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fas fa-heart"></i>
                            </span>
                            <span className="btn-inner--text">Github</span>
                          </Button>

                        </Col>
                        <Col sm >
                          <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="/.auth/login/twitter"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fas fa-heart"></i>
                            </span>
                            <span className="btn-inner--text">Twitter</span>
                          </Button>
                        </Col>
                      </Row>
                    </Container>

                  </div>
                </CardHeader>

              </Card>

            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Login.layout = Auth;

export default Login;
