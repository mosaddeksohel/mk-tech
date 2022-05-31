import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../components/image/2022-zodiac-calendar-vector-illustration-600w-1902385408.png";
import img2 from "../../components/image/2020-gold-numbers-on-background-600w-1510632848.png";

const Home = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Col>
          <text
            style={{
              fontFamily: "Prototype",
              textAlign: "justify",
              fontSize: "18px",
              width: "50%",
            }}
          >
            A bit further down they share FAQs such as “Where can I find
            MoonPies in my area.” and “Are MoonPies kosher?” Only after sharing
            that information do they give you a contact form. The contact form
            isn’t hidden at all – but they sure do everything they can to answer
            your questions before giving you the contact form.
          </text>
        </Col>
        <Col>
          <img className="fluid" style={{ width: "100%" }} src={img} alt="" />
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Col>
          <img className="fluid" style={{ width: "100%" }} src={img2} alt="" />
        </Col>
        <Col>
          <text
            style={{
              fontFamily: "Prototype",
              textAlign: "justify",
              fontSize: "18px",
              width: "50%",
              height: "50%",
              lineHeight: "35px",
            }}
          >
            New Year’s is a time to reflect on the previous year and celebrate
            the arrival of a new one. It’s also a time to share hopeful New Year
            wishes with everyone in your life, including friends, family,
            coworkers, and neighbors. After all, these are the people you made
            incredible memories with in 2021 and will likely continue to make
            memories with in 2022. Show them just how much you care by sharing
            these encouraging words, New Year’s quotes, and moving messages. You
            could write them inside a nice card or even say them face-to-face at
            a fun New Year’s Eve party. And if one of these messages really
            captures how you’re feeling in the new year, feel free to use it as
            a nice New Year’s caption on Instagram.
          </text>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
