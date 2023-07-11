import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 70rem;
  margin: 0 10rem;
  background: ${(props) => props.theme.colors.background};
`
