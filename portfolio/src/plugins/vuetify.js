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
    'background': '#fffbf5',
  },
}



export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
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




