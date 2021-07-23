import React from 'react'
import { styled } from '@css/theme.config'

import * as Icons from 'react-feather'

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '100px 0',
  width: '100vw',
})

const UserWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 100,
})

const InfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const Avatar = styled('img', {
  width: 120,
  height: 120,
  borderRadius: '100%',
  border: '5px $forestGreen5 solid',
  transition: '0.2s linear',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 0px 50px 10px #00000030',
  },
})

const Name = styled('h1', {
  color: 'white',
  fontSize: '$5',
  marginBottom: 20,
})

const Bio = styled('p', {
  color: '$white2',
  fontSize: '$2',
  width: '10vw',
  minWidth: 280,
  textAlign: 'center',
  '@iPad': {
    width: '90%',
  },
})

const SocialsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
})

const SocialLink = styled('a', {
  color: '$white1',
  margin: '0 10px',
  '&:hover': {
    color: '$white10',
  },
})

type MainInfo = {
  avatar: string
  name: string
  url: string
  bio: string
  blog: string
  twitter: string
}

const MainInfo: React.FC<MainInfo> = (props: MainInfo) => {
  return (
    <Wrapper>
      <UserWrapper>
        <Avatar src={props.avatar} />
        <SocialsWrapper>
          <SocialLink href={props.url} target='__blank'>
            <Icons.GitHub />
          </SocialLink>
          {props.blog === '' ? (
            ''
          ) : (
            <SocialLink
              href={
                props.blog.startsWith('http')
                  ? props.blog
                  : `https://${props.blog}`
              }
              target='_blank'
            >
              <Icons.Paperclip />
            </SocialLink>
          )}
          {props.twitter === null ? (
            ''
          ) : (
            <SocialLink
              href={`https://twitter.com/${props.twitter}`}
              target='_blank'
            >
              <Icons.Twitter />
            </SocialLink>
          )}
        </SocialsWrapper>
      </UserWrapper>
      <InfoWrapper>
        <Name>{props.name}</Name>
        <Bio>{props.bio}</Bio>
      </InfoWrapper>
    </Wrapper>
  )
}

export default MainInfo
