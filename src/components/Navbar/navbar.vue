<template>
  <div>
    <v-app-bar color="white" app dense height="90">
      <v-container>
        <navbar-desktop
          :isLoggedIn="isLoggedIn"
          :userRole="userRole"
          @click="signOut"
        ></navbar-desktop>
        <navbar-mobile
          :isLoggedIn="isLoggedIn"
          :userRole="userRole"
          @click="signOut"
          @openLivestorm="openLivestorm"
        ></navbar-mobile>
      </v-container>
    </v-app-bar>

    <v-app-bar color="white" app dense height="110" class="hidden-sm-and-down">
      <v-container>
        <navbar-desktop
          :isLoggedIn="isLoggedIn"
          :userRole="userRole"
          @click="signOut"
        ></navbar-desktop>
      </v-container>
      <template v-slot:extension v-if="isLoggedIn">
        <navbar-extension-desktop
          @openLivestorm="openLivestorm"
        ></navbar-extension-desktop>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import users from '../../../public/livestormLink.json';

export default {
  data() {
    return {
      users,
    };
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn', 'userRole']),
  },
  methods: {
    ...mapActions('signIn', ['signOut']),
    liveStormLink() {
      if (!window.sessionStorage.getItem('email')) return;
      let link;
      this.users.links.forEach((user) => {
        if (user.email == window.sessionStorage.getItem('email')) {
          link = user.link;
        }
      });
      return link;
    },
    openLivestorm() {
      window.open(this.liveStormLink(), '_blank');
    },
  },
};
</script>
