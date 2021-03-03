import React from 'react'
import styled from 'styled-components'

const SearchForm = styled.form`
  display: flex;
  width: 100vw;
  height: 80vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  align-items: center;
`

const GeethoobLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`

const Title = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 50px;
`

const Description = styled.h1`
  color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;
`

const Icon = styled.img`
  width: 100px;
  transition: 0.15s linear;
  &:hover {
    transform: translateY(-10px);
  }
`

const SearchInput = styled.input`
  background: #111119;
  outline: none;
  border: none;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  width: 500px;
  @media (max-width: 550px) {
    width: 70%;
    font-size: 14px;
  }
`

interface SearchbarProps {
  handleSubmitFunction: any
  handleSearchFunction: any
  placeholder: string
}

const Searchbar: React.FC<SearchbarProps> = (props: SearchbarProps) => {
  return (
    <SearchForm onSubmit={props.handleSubmitFunction}>
      <GeethoobLink href="#">
        <Icon src="https://media.discordapp.net/attachments/441702025185591307/816084023851876402/11ad01fac1fd5b2f223bc6b3a61f5f80_1612483763265_1024x1024x32.png" />
        <Title>geethoob</Title>
      </GeethoobLink>
      <SearchInput
        placeholder={props.placeholder}
        onChange={props.handleSearchFunction}
        name="github user"
      />
      <Description>A beautiful look at your GitHub profile</Description>
    </SearchForm>
  )
}

export default Searchbar
