// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify


import 'font-awesome/css/font-awesome.min.css' // Ensure your project is capable of handling css files

//import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
//import { ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa4'
import { mdi } from 'vuetify/iconsets/mdi'



const myCustomLightTheme = {
  dark: false,
  colors: {
    'background': '#1A1A1A',
    'buttonbg': '#2F2F2F',
    'bigtitle': '#42b883',
    'title': '#FFFFFF',
    'plaintext': '#D1D1D1' ,
  },
}

const myCustomLightTheme2 = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    'buttonbg': '#2F2F2F',
    'bigtitle': '#42b883',
    'title': '#FFFFFF',
    'plaintext': '#D1D1D1' ,
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
      myCustomLightTheme2
    },
  },

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
})




