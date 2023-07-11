import introImage from '../../../../assets/intro-image.png'
import { FeatureList } from './components/FeatureList'
import {
  IntroContainer,
  IntroContent,
  IntroDescription,
  IntroInfo,
  IntroTitle,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroInfo>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroDescription>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroDescription>
        </IntroInfo>
        <FeatureList />
      </IntroContent>
      <img src={introImage} alt="" />
    </IntroContainer>
  )
}
