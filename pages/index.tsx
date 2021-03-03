import React from 'react'

import Searchbar from './../components/Searchbar'
import Main from './../components/User/elements/MainInfo'
import Repos from './../components/User/elements/Repos'
import RepoData from './../components/User/elements/RepositoryStats'

import Footer from './../components/Footer'

import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

import {
  fas,
  faBuilding,
  faPaperclip,
  faMapMarker,
  faCodeBranch,
  faCode,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { far, faStar } from '@fortawesome/free-regular-svg-icons'
import { fab, faTwitter, faReact } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import polyglot from 'gh-polyglot'

interface repo {
  name: string
  stargazers_count: string
  forks_count: string
  language: string
  html_url: string
  description: string
  fork: boolean
}

interface language {
  value: number
  color: string
  label: string
}

interface Data {
  name: string
  login: string
  bio: string
  followers: string
  following: string
  public_repos: string
  avatar_url: string
  html_url: string
  blog: string
  twitter_username: string
  company: string
  location: string
}

const Home = () => {
  const [name, setName] = React.useState(' ')
  const [username, setUsername] = React.useState(' ')
  const [bio, setBio] = React.useState(' ')
  const [followers, setFollowers] = React.useState(' ')
  const [following, setFollowing] = React.useState(' ')
  const [repos, setRepos] = React.useState(' ')
  const [avatar, setAvatar] = React.useState(' ')
  const [url, setUrl] = React.useState(' ')

  const [blog, setBlog] = React.useState(' ')
  const [twitter, setTwitter] = React.useState(' ')
  const [company, setCompany] = React.useState(' ')
  const [location, setLocation] = React.useState(' ')

  const [topRepos, setTopRepos] = React.useState([])

  const [labels, setLabels] = React.useState([])
  const [values, setValues] = React.useState([])
  const [colours, setColours] = React.useState([])

  const [mostStarredLabels, setMostStarredLabels] = React.useState([])
  const [mostStarredValues, setMostStarredValues] = React.useState([])

  const [userInput, setUserInput] = React.useState(' ')
  const [error, setError] = React.useState(' ')

  const [firstTime, setFirstTime] = React.useState(true)

  const setData = ({
    name,
    login,
    bio,
    followers,
    following,
    public_repos,
    avatar_url,
    html_url,
    blog,
    twitter_username,
    company,
    location,
  }: Data) => {
    setName(name)
    setUsername(login)
    setBio(bio)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setUrl(html_url)
    setBlog(blog)
    setTwitter(twitter_username)
    setCompany(company)
    setLocation(location)
  }

  const handleSearch = (e: any) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault()

    fetch(`https://api.github.com/users/${userInput}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message)
        else {
          const sorted = data
            .filter((repo: repo) => !repo.fork)
            // @ts-ignore
            .sort((a: string, b: string) => b['stargazers_count'] - a['stargazers_count'])
            .slice(0, 10)

          const mostStarred = data
            .filter((repo: repo) => !repo.fork)
            // @ts-ignore
            .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
            .slice(0, 5)

          setMostStarredLabels(mostStarred.map((repo: repo) => repo.name))
          setMostStarredValues(mostStarred.map((repo: repo) => repo.stargazers_count))

          setTopRepos(sorted)
          setError('')
          setFirstTime(false)
        }
      })

    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message)
        else {
          setData(data)
          setError('')
          setFirstTime(false)
        }
      })

    const user = new polyglot(`${userInput}`)
    user.userStats((err: string, data: any) => {
      if (err) setError(err)
      else {
        setLabels(data.map((lang: language) => lang.label))
        setValues(data.map((lang: language) => lang.value))
        setColours(data.map((lang: language) => lang.color))
      }
    })
  }

  React.useEffect(() => {
    setFirstTime(true)
  }, [])

  return (
    <MainContainer>
      {firstTime ? (
        <Searchbar
          handleSubmitFunction={handleSubmit}
          handleSearchFunction={handleSearch}
          placeholder="Search By GitHub Username..."
        />
      ) : (
        ''
      )}
      {error || firstTime ? (
        ''
      ) : (
        <>
          <Main
            avatar={avatar}
            name={name}
            username={username}
            url={url}
            bio={bio}
            twitter={twitter}
            location={location}
            blog={blog}
            company={company}
            followers={followers}
            following={following}
            repos={repos}
          />
          <RepoData
            labels={labels}
            data={values}
            backgroundColour={colours}
            starredReposName={mostStarredLabels}
            starredData={mostStarredValues}
          />
          <Repos topRepos={topRepos} />
          <Footer />
        </>
      )}
    </MainContainer>
  )
}

library.add(
  fas,
  fab,
  far,
  faTwitter,
  faStar,
  faPaperclip,
  faMapMarker,
  faBuilding,
  faCodeBranch,
  faCode,
  faHeart
)
export default Home
