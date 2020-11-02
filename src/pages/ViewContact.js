import React, { useContext } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { FaClock, FaMapMarkerAlt, } from "react-icons/fa";
import { contactContext } from "../context/Context";

const ViewContact = () => {
  const { state } = useContext(contactContext);
  // destructuring contact from the state
  // and rendering it in state
  const {contact} = state;
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md="5" className="offset-md-3">
          <Card className="pt-3 pb-5">
            <CardBody className="text-center ">
              <img
                height="150"
                width="150"
                className="cardImg profile border-danger"
                src={contact?.picture}
              />
              <CardTitle className="text-primary mt-3">
                <h1>{contact?.date}</h1>
              </CardTitle>
             
              <a
                className="btn btn-primary btn-block"
                target="_blank"
              >
                <FaClock className="icon mr-2" />
                {contact?.time}
              </a>

              <a
                className="btn btn-primary btn-block"
                target="_blank"
              >
                {contact?.description}
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewContact;
