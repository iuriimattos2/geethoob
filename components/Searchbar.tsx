import React from 'react'
import styled from 'styled-components'

const SearchForm = styled.form`
  display: flex;
  flex-direction: center;
  width: 100vw;
  justify-content: center;
  margin: 30px 0;
  align-items: center;
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
`

interface SearchbarProps {
  handleSubmitFunction: any
  handleSearchFunction: any
  placeholder: string
}

const Searchbar = (props: SearchbarProps) => {
  return (
    <SearchForm onSubmit={props.handleSubmitFunction}>
      <SearchInput
        placeholder={props.placeholder}
        onChange={props.handleSearchFunction}
        name="github user"
      />
    </SearchForm>
  )
}

export default Searchbar
