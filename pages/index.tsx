import React from 'react'

import Head from '@components/Head'

import Searchbar from '@components/Searchbar'
import Main from '@components/User/MainInfo'
import Repos from '@components/User/Repos'
import RepoData from '@components/User/RepositoryStats'

import Footer from '@components/Footer'

import { styled } from '@css/theme.config'
import global from '@css/global.style'

const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

import polyglot from 'gh-polyglot'

interface repo {
  name: string
  stargazers_count: number
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
  const [bio, setBio] = React.useState(' ')
  const [repos, setRepos] = React.useState(' ')
  const [avatar, setAvatar] = React.useState(' ')
  const [url, setUrl] = React.useState(' ')

  const [blog, setBlog] = React.useState(' ')
  const [twitter, setTwitter] = React.useState(' ')

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
    bio,
    public_repos,
    avatar_url,
    html_url,
    blog,
    twitter_username,
  }: Data) => {
    setName(name)
    setBio(bio)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setUrl(html_url)
    setBlog(blog)
    setTwitter(twitter_username)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            .sort((a: repo, b: repo) => {
              b.stargazers_count - a.stargazers_count
            })
            .slice(0, 10)

          const mostStarred = data
            .filter((repo: repo) => !repo.fork)
            .sort((a: repo, b: repo) => b.stargazers_count - a.stargazers_count)
            .slice(0, 20)

          setMostStarredLabels(mostStarred)
          setMostStarredValues(
            mostStarred.map((repo: repo) => repo.stargazers_count)
          )

          setTopRepos(sorted)
          setError('')
          setFirstTime(false)

          console.log(mostStarred)
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

  global()

  return (
    <MainContainer>
      <Head />
      {firstTime ? (
        <Searchbar
          handleSubmitFunction={handleSubmit}
          handleSearchFunction={handleSearch}
          placeholder='Search By GitHub Username...'
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
            url={url}
            bio={bio}
            twitter={twitter}
            blog={blog}
          />
          <Repos topRepos={mostStarredLabels} />
        </>
      )}
      <Footer />
    </MainContainer>
  )
}

export default Home
