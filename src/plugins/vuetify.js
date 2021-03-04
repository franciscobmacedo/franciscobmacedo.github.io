import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  options:{
    customProperties: true

  }
});

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#e8281e',
          secondary: '#646464',
          accent: '#8c9eff',
          error: '#b71c1c',
          background: '#f4f4f4',
          palid: '#dedede',

          

        },
        options: {
          customProperties: true
      },
      },
    },
  })

export default vuetify;
