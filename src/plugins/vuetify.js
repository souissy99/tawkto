import Vue from "vue";
import Vuetify from "vuetify/lib";
import Play from "../components/icons/Play.vue";
import Link from "../components/icons/Link.vue";
import Gem from "../components/icons/Gem.vue";
import Desktop from "../components/icons/Desktop.vue";
import Comment from "../components/icons/Comment.vue";
import Cart from "../components/icons/Cart.vue";
import Note from "../components/icons/Note.vue";
import Info from "../components/icons/Info.vue";
import Next from "../components/icons/Next.vue";
import apiClient from "../utils/axios";

Vue.use(Vuetify);

const opts = {
  icons: {
    values: {
      play: {
        component: Play,
      },
      link: {
        component: Link,
      },
      gem: {
        component: Gem,
      },
      desktop: {
        component: Desktop,
      },
      comment: {
        component: Comment,
      },
      cart: {
        component: Cart,
      },
      note: {
        component: Note,
      },
      info: {
        component: Info,
      },
      next: {
        component: Next,
      },
    },
  },
};

Vue.prototype.$http = apiClient;

const vuetify = new Vuetify(opts);

export default vuetify;
