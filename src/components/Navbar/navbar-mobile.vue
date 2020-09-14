<template>
  <v-row class="justify-end hidden-md-and-up">
    <div class="d-flex align-center">
      <v-img
        alt="HAOSZ logo"
        class="shrink mr-2"
        contain
        src="/haosz-logo.png"
        transition="scale-transition"
        width="40"
        @click="$router.push('/')"
      />
      <a href="http://www.erodium.hu">
        <v-img
          alt="Erodium logo"
          class="shrink pointer"
          contain
          src="/erodium-logo.jpg"
          transition="scale-transition"
          width="100"
        />
      </a>
    </div>

    <v-spacer></v-spacer>
    <v-menu left bottom v-model="mainMenu">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>{{ mdiDotsVertical }}</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          @click="$router.push('/admin')"
          v-if="userRole === 'ADMIN'"
        >
          <v-list-item-title>
            <v-icon class="mr-1" size="20px">{{
              mdiAccountMultipleCheckOutline
            }}</v-icon
            >Admin
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/program')">
          <v-list-item-title>
            <v-icon class="mr-1" size="20px">{{
              mdiCalendarRangeOutline
            }}</v-icon
            >Programok
          </v-list-item-title>
        </v-list-item>
        <!-- <v-list-item>
          <v-list-item-title>
            <v-icon class="mr-1" size="20px"
              >mdi-account-arrow-right-outline</v-icon
            >Belépés
          </v-list-item-title>
        </v-list-item>-->
        <v-menu left bottom v-if="!isLoggedIn">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item>
              <v-list-item-title v-bind="attrs" v-on="on">
                <v-icon class="mr-1" size="20px">{{
                  mdiAccountCheckOutline
                }}</v-icon
                >Regisztráció
              </v-list-item-title>
            </v-list-item>
          </template>
          <v-list>
            <v-list-item @click="goToRegistration('doktor')">
              <v-list-item-title>Orvosoknak/Érdeklődőknek</v-list-item-title>
            </v-list-item>
            <v-list-item @click="goToRegistration('kiallito')">
              <v-list-item-title>Kiállítóknak</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item @click="$emit('click')" v-if="isLoggedIn">
          <v-list-item-title>
            <v-icon class="mr-1" size="20px">{{ mdiLogout }}</v-icon
            >Kijelentkezés
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
import {
  mdiDotsVertical,
  mdiCalendarRangeOutline,
  mdiAccountMultipleCheckOutline,
  mdiAccountCheckOutline,
  mdiLogout,
} from '@mdi/js';

export default {
  props: ['isLoggedIn', 'userRole'],
  data() {
    return {
      mainMenu: false,
      mdiCalendarRangeOutline,
      mdiAccountMultipleCheckOutline,
      mdiAccountCheckOutline,
      mdiLogout,
      mdiDotsVertical,
    };
  },
  methods: {
    goToRegistration(type) {
      this.$router.push(`/regisztracio/${type}`);
      this.mainMenu = false;
    },
  },
};
</script>
