import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.cyan.base,
        accent: colors.indigo.base,
        error: colors.red.base,
        warning: colors.deepOrange.base,
        info: colors.yellow.base,
        success: colors.green.base,
        common: '#88acf0',
        copper: '#f7ba9c',
        silver: '#deebf7',
        gold: '#ffdf73',
        purple: '#d67dff',
        red: '#f7515a',
      },
    },
  },
});
