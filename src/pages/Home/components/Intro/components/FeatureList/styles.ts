import styled from 'styled-components'

import { lightTheme } from '../../../../../../styles/themes/light'

interface IntroFeatureIconProps {
  color: keyof typeof lightTheme.colors
}

export const FeatureListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;

  gap: 1.6rem 2.5rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  width: calc(50% - 1.3rem);
  gap: 0.75rem;

  font-size: ${(props) => props.theme.fontSizes.text.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  color: ${(props) => props.theme.colors.baseText};
`

export const Icon = styled.span<IntroFeatureIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  padding: 0.5rem;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors[props.color]};
`
