import React from 'react'
import styled from 'styled-components'

import * as Icons from 'react-feather'

import LanguageColours from '@lib/LanguageColours'

const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ReposGrid = styled.div`
  display: grid;
  gap: 50px 50px;
  width: 90vw;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  @media (max-width: 770px) {
    dispaly: flex;
    grid-template-columns: inherit;
    gap: 50px 50px;
    flex-direction: column;
  }
`

const RepoBox = styled.a`
  display: flex;
  grid-row: span 1 / auto;
  flex-direction: column;
  overflow: hidden;
  min-height: 200px;
  background: #111119;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 0px 50px 5px #00000050;
  transition: 0.1s linear all;
  &:hover {
    transform: translateY(-5px);
  }
`

const RepoName = styled.h1`
  color: #61c3bc;
  font-size: 22px;
`

const RepoDesc = styled.h1`
  color: white;
  font-size: 16px;
  width: 70%;
`

const RepoInfoContainer = styled.div`
  display: flex;
  margin-top: auto;
`

const RepoInfo = styled.p`
  color: white;
  font-size: 16px;
  margin-right: 20px;
  display: flex;
  align-items: center;
`

const LanguageColour = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  background: white;
  margin-right: 10px;
`

interface repo {
  name: string
  stargazers_count: string
  forks_count: string
  language: string
  html_url: string
  description: string
}

interface props {
  topRepos: repo[]
}

const Repos: React.FC<props> = (props: props) => {
  return (
    <ReposContainer>
      <ReposGrid>
        {props.topRepos.map((repo: repo, index: number) => (
          <RepoBox key={index} href={repo.html_url} target='_blank'>
            <RepoName>
              {repo.name.length > 20
                ? `${repo.name.substring(0, 20)}...`
                : repo.name}
            </RepoName>
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
              <RepoInfo style={{ marginLeft: 'auto' }}>
                <LanguageColour
                  style={{
                    backgroundColor: LanguageColours[repo.language],
                  }}
                />
                {repo.language}
              </RepoInfo>
            </RepoInfoContainer>
          </RepoBox>
        ))}
      </ReposGrid>
    </ReposContainer>
  )
}

export default Repos
