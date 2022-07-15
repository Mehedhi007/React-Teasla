import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
            <Section
              title="Model 3"
              description="Order Online for Touchless Delivery"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
              backgroundImg="model-3.jpg"
            />
            
            
            <Section
              title="Model Y"
              description="Order Online for Touchless Delivery"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
              backgroundImg="model-y.jpg"
            />
            <Section
              title="Model S"
              description="Order Online for Touchless Delivery"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
              backgroundImg="model-s.jpg"
            />
            <Section
              title="Model X"
              description="Order Online for Touchless Delivery"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
              backgroundImg="model-x.jpg"
              
            />
            <Section
              title="Lowest Cost Solar Panel in America"
              description="Money-back guarantee"
              backgroundImg="solar-panel.jpg"
              leftBtnText="Order now"
              rightBtnText="Learn More"
            />
            <Section
              title="Solar for New Roofs"
              description="Solar Roof Costs Less Than a New Roof"
              backgroundImg="solar-roof.jpg"
              leftBtnText="Order now"
              rightBtnText="Learn More"
            />
            <Section
              title="Accessories"
              description=""
              backgroundImg="accessories.jpg"
              leftBtnText="Shop now"
              
            />
            <Footer>
              <li>Tesla © 2022</li>
              <li>Privacy & Legal</li>
              <li>Vehicle Recalls</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>News</li>
              <li>Engage</li>
              <li>Locations</li>
            </Footer>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
const Footer = styled.div`
    height: 5vh;
    display: flex;
    font-size: 15px;
    text-align: center;
    justify-content: center;
    list-style: none;
    li{
      padding: 8px;
    }
`