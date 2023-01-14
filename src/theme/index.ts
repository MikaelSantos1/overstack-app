import {extendTheme} from 'native-base'
export const THEME = extendTheme({
    colors: {
      green: {
        700: '#00875F',
        500: '#00B37E',
      },
      gray: {
        900:'#0F1116',
        700: '#121214',
        600: '#202024',
        500: '#29292E',
        400: "rgba(32,34,39,.6)",
        300: '#202227',
        200: '#C4C4CC',
        100: '#313338'
      },
      white: {
        900:'#FFFFFF',
        200:'hsla(0,0%,100%,.7)'
      },
      red: {
        500: '#F75A68'
      },
      black:{
        900:"#000",
        700:'#0b0c0f'
      },
      purple:{
        700:'rgb(130, 87, 230)'
    },
    },
    fonts: {
      heading: 'Roboto_700Bold',
      body: 'Roboto_400Regular',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    sizes: {
      14: 56,
      33: 148
    },
    
 
  })