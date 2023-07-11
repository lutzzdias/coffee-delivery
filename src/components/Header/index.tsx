import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
  LocationIcon,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <ActionsContainer>
        <LocationContainer>
          <LocationIcon>
            <MapPin size={24} weight="fill" />
          </LocationIcon>
          Porto Alegre, RS
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <CartContainer>
            <ShoppingCartSimple size={24} weight="fill" />
          </CartContainer>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
