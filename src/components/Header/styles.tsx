import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font: ${(props) => props.theme.textStyles.text.small};

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
`

export const LocationContainer = styled(ActionContainer)`
  color: ${(props) => props.theme.colors.purpleDark};
  background: ${(props) => props.theme.colors.purpleLight};
`

export const CartContainer = styled(ActionContainer)`
  color: ${(props) => props.theme.colors.yellowDark};
  background: ${(props) => props.theme.colors.yellowLight};
`

export const LocationIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.purple};
`
