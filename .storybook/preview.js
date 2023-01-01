import '../src/styles/globals.css'

import { mantineTheme } from 'storybook-addon-mantine'
import { Theme } from './themes'

// These props are passed to the MantineProvider used by all stories.
const mantineProviderProps = {
  withCSSVariables: false,
  withGlobalStyles: true,
  withNormalizeCSS: false,
}

export const decorators = [
  mantineTheme(
    [
      { ...Theme, themeName: 'Light Mode' },
      {
        themeName: 'Dark Mode - Green',
        primaryColor: 'green',
        colorScheme: 'dark',
        radius: 0,
      },
    ],
    mantineProviderProps
  ),
]
