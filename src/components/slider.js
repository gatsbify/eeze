import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const SliderContainer = styled.div`
  background: linear-gradient(210deg, #c1272d 0%, #0071bc 40.13%, #ffffff 90%);
  color: white;
  padding: 10rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
`

export default () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const sideMetadata = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  let { title } = sideMetadata.site.siteMetadata
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>For UIF</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>For PAYE</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>For CCMA</p>
          </div>
        </div>
      </Slider>
    </SliderContainer>
  )
}
