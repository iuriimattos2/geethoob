import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 10px #61c3bc solid;
  transition: 0.2s linear;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 50px 10px #00000030;
  }
`

const Name = styled.h1`
  color: white;
  font-size: 48px;
  @media (max-width: 360px) {
    font-size: 42px;
  }
`

const Username = styled.a`
  color: #61c3bc;
  font-size: 24px;
  position: relative;
  text-decoration: none;
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

const Bio = styled.p`
  color: white;
  font-size: 18px;
  width: 50%;
  text-align: center;
  @media (max-width: 600px) {
    width: 90%;
  }
`

const SmallElement = styled.div`
  color: white;
  font-size: 18px;
  margin: 10px 0;
`

const SmallElementLink = styled.a`
  color: white;
  font-size: 18px;
  position: relative;
  text-decoration: none;
  &:before {
    content: '';
    width: 0;
    height: 0.1em;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    transition: all 0.3s;
  }
  &:hover:before {
    width: 100%;
    left: 0;
    background: white;
  }
`

const SmallInfoContainer = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const InfoBox = styled.a`
  display: flex;
  margin: 20px 10px;
  width: 150px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #111119;
  border-radius: 5px;
  padding: 20px;
  text-decoration: none;
  transition: 0.2s linear;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px 5px #00000050;
  }
`

const InfoText = styled.a`
  font-size: 18px;
  color: white;
`

interface MainInfo {
  avatar: string
  name: string
  username: string
  url: string
  bio: string
  location: string
  blog: string
  twitter: string
  company: string
  followers: string
  following: string
  repos: string
}

const MainInfo = (props: MainInfo) => {
  return (
    <InfoContainer>
      <Avatar src={props.avatar} />
      <Name>{props.name}</Name>
      <Username href={props.url} target="__blank">
        @{props.username}
      </Username>
      <Bio>{props.bio}</Bio>
      {props.location === null ? (
        ''
      ) : (
        <SmallElement>
          <FontAwesomeIcon icon="map-marker" style={{ marginRight: 10 }} />
          {props.location}
        </SmallElement>
      )}
      {props.company === null ? (
        ''
      ) : (
        <SmallElement>
          <FontAwesomeIcon icon="building" style={{ marginRight: 10 }} />
          {props.company}
        </SmallElement>
      )}
      {props.blog === '' ? (
        ''
      ) : (
        <SmallElement>
          <FontAwesomeIcon icon="paperclip" style={{ marginRight: 10 }} />
          <SmallElementLink
            href={
              props.blog.startsWith('http')
                ? props.blog
                : `https://${props.blog}`
            }
            target="_blank"
          >
            {props.blog}
          </SmallElementLink>
        </SmallElement>
      )}
      {props.twitter === null ? (
        ''
      ) : (
        <SmallElement>
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            style={{ marginRight: 10 }}
          />
          <SmallElementLink
            href={`https://twitter.com/${props.twitter}`}
            target="_blank"
          >
            {props.twitter}
          </SmallElementLink>
        </SmallElement>
      )}
      <SmallInfoContainer>
        <InfoBox href={`${props.url}?tab=followers`} target="_blank">
          <InfoText>{props.followers}</InfoText>
          <InfoText>Followers</InfoText>
        </InfoBox>
        <InfoBox href={`${props.url}?tab=following`} target="_blank">
          <InfoText>{props.following}</InfoText>
          <InfoText>Following</InfoText>
        </InfoBox>
        <InfoBox href={`${props.url}?tab=repositories`} target="_blank">
          <InfoText>{props.repos}</InfoText>
          <InfoText>Repositories</InfoText>
        </InfoBox>
      </SmallInfoContainer>
    </InfoContainer>
  )
}

export default MainInfo
