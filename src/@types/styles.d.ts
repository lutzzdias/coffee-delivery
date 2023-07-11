import 'styled-components'

import { lightTheme } from '../styles/themes/light'

// saves the properties from lightTheme to ThemeType
type ThemeType = typeof lightTheme

// declares that a type is being created for the styled-components module
// the types from styled components will be taken from here
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
