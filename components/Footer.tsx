import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterContainer = styled.footer`
  display: flex;
  margin: 100px 0 30px 0;
  justify-content: center;
`

const FooterBox = styled.div`
  display: flex;
`

const FooterText = styled.div`
  color: #61c3bc;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 360px) {
    font-size: 16px;
  }
`

const FooterLinks = styled.a`
  color: #61c3bc;
  position: relative;
  text-decoration: none;
  margin-left: 10px;
  &:before {
    content: '';
    width: 0;
    height: 0.1em;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #61c3bc;
    transition: all 0.3s;
  }
  &:hover:before {
    width: 100%;
    left: 0;
    background: #61c3bc;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterText>
          <FontAwesomeIcon icon="code" style={{ marginRight: 10 }} />
          with
          <FontAwesomeIcon icon="heart" style={{ margin: '0 10' }} />
          and
          <FontAwesomeIcon icon={['fab', 'react']} style={{ margin: '0 10' }} />
          by
          <FooterLinks href="https://harshhhdev.github.io/">
            Harsh Singh
          </FooterLinks>
        </FooterText>
      </FooterBox>
    </FooterContainer>
  )
}

export default Footer
