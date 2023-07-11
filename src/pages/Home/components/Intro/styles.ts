import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.5rem;
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  gap: 4.125rem;
`

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const IntroTitle = styled.h1`
  color: ${(props) => props.theme.colors.baseTitle};

  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme.fontSizes.title.extraLarge};
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  line-height: 130%;
`

export const IntroDescription = styled.p`
  color: ${(props) => props.theme.colors.baseSubtitle};

  font-size: ${(props) => props.theme.fontSizes.text.large};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: 130%;
`
