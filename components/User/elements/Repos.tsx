import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LanguageColours from './LangugaeColours'

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
`

const RepoBox = styled.a`
  display: flex;
  flex-direction: column;
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
  font-size: 24px;
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

const Repos = (props) => {
  return (
    <ReposContainer>
      <ReposGrid>
        {props.topRepos.map((repo, index) => (
          <RepoBox key={index} href={repo.html_url} target="_blank">
            <RepoName>{repo.name}</RepoName>
            <RepoDesc>{repo.description}</RepoDesc>
            <RepoInfoContainer>
              <RepoInfo>
                <FontAwesomeIcon
                  icon={['far', 'star']}
                  style={{ marginRight: 5 }}
                />
                {repo.stargazers_count}
              </RepoInfo>
              <RepoInfo>
                <FontAwesomeIcon
                  icon="code-branch"
                  style={{ marginRight: 5 }}
                />
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
