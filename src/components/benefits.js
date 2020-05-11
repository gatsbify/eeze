import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaCode } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

let StyledImg = styled(props => <Img {...props} />)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  picture,
  img {
    transform: rotateY(-35deg) rotateX(15deg);
    box-shadow: 25px 60px 125px -25px rgba(80, 102, 144, 0.1),
      16px 40px 75px -40px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-30deg) rotateX(15deg);
    }
  }
`

let Benefit = ({ title, content }) => (
  <div className="d-flex mb-4">
    <FaCode size={30} className="text-primary" />
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

let Benefits = ({ data }) => (
  <Container className="py-5">
    <Row className="d-flex align-items-center">
      <Col md="6">
        <div className="mb-4">
          <h2 className="text-primary">Get the Sheet</h2>
          <p className="text-muted">
            STEP 1 - Download the Sample Sheet to your machine.
          </p>
        </div>
        <Benefit
          title="Update Template "
          content="Step 2 - Update the newly downloaded sheet with the details from your system and SaveAS <companyname>.xls"
        />
        <Benefit
          title="Email Template"
          content="Step 3 - On completion of ALL the needed fields reply - email the Updated template back to us as an Attachment. Done!"
        />
        <Benefit
          title="Do Payment"
          content="Step 4 - Check Your Inbox for payment instructions"
        />
        <Benefit
          title="Done!"
          content="Next - On payment confirmation, we will do the necassary magic to submit your records monthly and keep you informed of any status related notifications!"
        />
      </Col>
      <Col md="6">
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </Col>
    </Row>
  </Container>
)

export default () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: { eq: "sample.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Benefits data={data} />}
  />
)
