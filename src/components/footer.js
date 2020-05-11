import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import Link from "./link"
import styled from "styled-components"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #fff;
  a,
  a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a,
      a:hover {
        color: inherit;
      }
    }
  }
`

let SocialLink = ({ Icon }) => (
  <Link to="/" className="mr-2">
    <Icon size={30} />
  </Link>
)

let FooterLink = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

export default () => (
  <Footer>
    <Container>
      <Row>
        <Col>
          <h5>Company</h5>
          <ul>
            <FooterLink to="/">About</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Technology</h5>
          <ul>
            <FooterLink to="/">0Auth Security</FooterLink>
            <FooterLink to="/">Ui.Vision</FooterLink>
            <FooterLink to="/">Python/Selenium</FooterLink>
            <FooterLink to="/">Gatsby.js</FooterLink>
            <FooterLink to="/">Strapi.js</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Partners</h5>
          <ul>
            <FooterLink to="/">BotMaster</FooterLink>
            <FooterLink to="/">Gatsbify.io</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Contact Us</h5>
          <SocialLink Icon={FaFacebookSquare} />
          <SocialLink Icon={FaInstagram} />
        </Col>
      </Row>
    </Container>
  </Footer>
)
