import React from 'react'
import { styled } from '@css/theme.config'

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 100,
})

const Title = styled('h1', {
  color: '$white8',
  fontSize: '$6',
})

const Description = styled('p', {
  color: '$white1',
  marginTop: 20,
})

type SearchbarProps = {
  handleSubmitFunction: (e: HTMLFormElement) => void
  handleSearchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Searchbar: React.FC<SearchbarProps> = (props: SearchbarProps) => {
  return (
    <ContentWrapper>
      <Title>Geethoob</Title>
      <Description>
        😍 Generate beautiful portfolios from your GitHub profile
      </Description>
    </ContentWrapper>
  )
}

export default Searchbar
