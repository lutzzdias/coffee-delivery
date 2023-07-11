import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { FeatureListContainer, Icon, ListItem } from './styles'

export function FeatureList() {
  return (
    <FeatureListContainer>
      <ListItem>
        <Icon color="yellowDark">
          <ShoppingCartSimple size={16} weight="fill" />
        </Icon>
        Compra simples e segura
      </ListItem>
      <ListItem>
        <Icon color="baseText">
          <Package size={16} weight="fill" />
        </Icon>
        Embalagem mantém o café intacto
      </ListItem>
      <ListItem>
        <Icon color="yellow">
          <Timer size={16} weight="fill" />
        </Icon>
        Entrega rápida e rastreada
      </ListItem>
      <ListItem>
        <Icon color="purple">
          <Coffee size={16} weight="fill" />
        </Icon>
        O café chega fresquinho até você
      </ListItem>
    </FeatureListContainer>
  )
}
