import React from 'react'
import s from 'styled-components'
import { styled } from '@css/theme.config'

import * as Icons from 'react-feather'

import LanguageColours from '@lib/LanguageColours'

const ReposContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const ReposGrid = styled('div', {
  display: 'grid',
  gap: 30,
  width: '90vw',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30%, 1fr))',
  '@iPad': {
    display: 'flex',
    gridTemplateColumns: 'inherit',
    flexDirection: 'column',
  },
})

const RepoBox = styled('a', {
  display: 'flex',
  gridRow: 'span 1 / auto',
  flexDirection: 'column',
  overflow: 'hidden',
  minHeight: 200,
  background: '#111119',
  padding: 20,
  borderRadius: 5,
  textDecoration: 'none',
  boxShadow: '0px 0px 50px 5px #00000050',
  transition: '0.1s linear all',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
})

const RepoName = styled('h1', {
  color: '$forestGreen9',
  fontSize: '$4',
})

const RepoDesc = styled('h1', {
  color: '$white10',
  fontSize: '$1',
  width: '70%',
  marginTop: 10,
})

const RepoInfoContainer = styled('div', {
  display: 'flex',
  marginTop: 'auto',
})

const RepoInfo = styled('p', {
  color: '$white10',
  fontSize: '$1',
  marginRight: 20,
  display: 'flex',
  alignItems: 'center',
  svg: {
    marginRight: 5,
  },
  variants: {
    right: {
      true: {
        marginLeft: 'auto',
      },
    },
  },
})

const LanguageColour = styled('div', {
  height: 10,
  width: 10,
  borderRadius: '100%',
  background: '$white10',
  marginRight: 5,
})

type repo = {
  name: string
  stargazers_count: string
  forks_count: string
  language: string
  html_url: string
  description: string
  size: number
}

const Repos: React.FC<{ topRepos: repo[] }> = ({ topRepos }) => {
  return (
    <ReposContainer>
      <ReposGrid>
        {topRepos.map((repo: repo, index: number) => (
          <RepoBox key={index} href={repo.html_url} target='_blank'>
            <RepoName>{repo.name}</RepoName>
            <RepoDesc>{repo.description}</RepoDesc>
            <RepoInfoContainer>
              <RepoInfo>
                <Icons.Star />
                {repo.stargazers_count}
              </RepoInfo>
              <RepoInfo>
                <Icons.GitPullRequest />
                {repo.forks_count}
              </RepoInfo>
              <RepoInfo>
                <Icons.GitPullRequest />
                {repo.size.toLocaleString('en-IN')} KB
              </RepoInfo>
              {repo.language === null ? (
                ''
              ) : (
                <RepoInfo right>
                  <LanguageColour
                    style={{
                      backgroundColor: LanguageColours[repo.language],
                    }}
                  />
                  {repo.language}
                </RepoInfo>
              )}
            </RepoInfoContainer>
          </RepoBox>
        ))}
      </ReposGrid>
    </ReposContainer>
  )
}

export default Repos
