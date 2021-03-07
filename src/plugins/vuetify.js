import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.cyan.base,
        accent: colors.indigo.base,
        error: colors.red.base,
        warning: colors.deepOrange.base,
        info: colors.yellow.base,
        success: colors.green.base,
      },
    },
  },
});
