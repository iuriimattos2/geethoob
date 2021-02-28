import React from 'react'

import Searchbar from './../components/Searchbar'
import Main from './../components/User/elements/MainInfo'
import Repos from './../components/User/elements/Repos'
import RepoData from './../components/User/elements/RepositoryStats'

import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons'

import {
  fas,
  faBuilding,
  faPaperclip,
  faMapMarker,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import { far, faStar } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import polyglot from 'gh-polyglot'

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

  const [languageData, setLanguageData] = React.useState(null)

  const [userInput, setUserInput] = React.useState(' ')
  const [error, setError] = React.useState(null)

  const [firstTime, setFirstTime] = React.useState(null)

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
  }) => {
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

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://api.github.com/users/${userInput}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message)
        else {
          const sorted = data
            .filter((repo) => !repo.fork)
            .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
            .slice(0, 10)

          setTopRepos(sorted)
          setError(null)
          setFirstTime(false)
        }
      })

    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message)
        else {
          setData(data)
          setError(null)
          setFirstTime(false)
        }
      })

    const user = new polyglot(`${userInput}`)
    user.userStats((err, data) => {
      if (err) setError(err)
      setLabels(data.map((lang) => lang.label))
      setValues(data.map((lang) => lang.value))
      setColours(data.map((lang) => lang.color))
    })
  }

  React.useEffect(() => {
    setFirstTime(true)
  }, [])

  return (
    <div>
      <div className="search">
        <Searchbar
          handleSubmitFunction={handleSubmit}
          handleSearchFunction={handleSearch}
          placeholder="Search By GitHub Username..."
        />
      </div>
      {error || firstTime ? (
        <h1>Error</h1>
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
          <Repos topRepos={topRepos} />
          <RepoData
            labels={labels}
            data={values}
            backgroundColour={colours}
            label="Most Used Languages"
          />
        </>
      )}
    </div>
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
  faCodeBranch
)
export default Home
