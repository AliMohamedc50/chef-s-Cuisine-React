import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const BookTablee = () => {
  const [alert, setAlert] = useState({message: "" ,variant :""});



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tableType, setTableType] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [placement, setPlacement] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();
const data = {
  firstName,
       lastName,
       email,
       tableType,
       guestNumber,
       placement,
       date,
       time,
       note,
}
axios
  .post(
    "http://localhost:1337/api/book-tables",
    { data },
    {
      headers: {
        Authorization: `Bearer 8aa519233fc8a61963a71bebea22907e1e9fc020aa86609671af11f973c0a6332a45508968ce03e65445da4613d8759d6927afb1d976614207242931699bce614dc118e5648b2a60741dde1650b3661ea7677f49ee609da473f92559aa00871781c148928427a42e9f2e26ba9fa286d83ee4c93570dd00bd6646e56c8a72a6b4`,
      },
    }
  )
  .then((response) => {
    console.log(response.data);
    setAlert({ message: "done", variant: "success" });
  })
  .catch((error) => {
    setAlert({ message: error.message, variant: "danger" });
    console.error(error);
  });
};

  useEffect(() => {
    if (alert.message) {
      const timeoutId = setTimeout(() => {
        setAlert({ message: "", variant: "" });
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [alert.message]);

        return (
          <section id="form">
            <Container>
              {alert.message !== "" && (
                <Alert variant={alert.variant} >{alert.message}</Alert>
              )}
              <h3 className="form__title">Book Table</h3>
              <div className="form__wrapper">
                <form onSubmit={handleSubmit} name="booking">
                  <input type="hidden" name="form-name" value="booking" />
                  <Row>
                    <Col sm={6} md={6} lg={6} className="form__group col-12">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        className="p-col-2 p-md-3 "
                        type="text"
                        id="firstName"
                        name="First Name"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12 ">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        className="p-col-2 p-md-3 "
                        type="text"
                        id="lastName"
                        name="Last Name"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12">
                      <label htmlFor="email">Email</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-col-2 p-md-3 "
                        type="email"
                        id="email"
                        name="Email"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12">
                      <label htmlFor="tableType">Table Type</label>
                      <select
                        onChange={(e) => setTableType(e.target.value)}
                        className="p-col-2 p-md-3  "
                        name="Table Type"
                        id="tableType"
                      >
                        <option disabled="">Choose</option>
                        <option value="small">Small(2 persons)</option>
                        <option value="medium">Small(4 persons)</option>
                        <option value="large">large(6 persons)</option>
                      </select>
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12">
                      <label htmlFor="guestNumber">Guest Number</label>
                      <input
                        onChange={(e) => setGuestNumber(e.target.value)}
                        className="p-col-2 p-md-3 "
                        type="text"
                        id="guestNumber"
                        name="Guest Number"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12">
                      <label htmlFor="placement">Placement</label>
                      <select
                        onChange={(e) => setPlacement(e.target.value)}
                        className="p-col-2 p-md-3 "
                        name="Placement"
                        id="placement"
                        fdprocessedid="s2b1jj"
                      >
                        <option disabled="">Choose</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="indoor">Indoor</option>
                        <option value="rooftop">rooftop</option>
                      </select>
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12 ">
                      <label htmlFor="date">Date</label>
                      <input
                        onChange={(e) => setDate(e.target.value)}
                        className="p-col-2 p-md-3  "
                        type="date"
                        id="date"
                        name="Date"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6} className="form__group col-12">
                      <label htmlFor="time">time</label>
                      <input
                        onChange={(e) => setTime(e.target.value)}
                        className="p-col-2 p-md-3  "
                        type="time"
                        id="time"
                        name="Time"
                      />
                    </Col>
                    <div className="form__group form__group__full">
                      <label htmlFor="note">Note</label>
                      <textarea
                        onChange={(e) => setNote(e.target.value)}
                        className="p-3"
                        name="Note"
                        id="note"
                        rows="4"
                        style={{ height: "174px" }}
                      ></textarea>
                    </div>
                  </Row>

                  <button
                    type="submit"
                    className="Book-Table fw-bold fs-4 text-decoration-none mt-4"
                    fdprocessedid="ojrp9g"
                  >
                    Book Table
                  </button>
                </form>
              </div>
            </Container>

          </section>
        );
};

export default BookTablee;
