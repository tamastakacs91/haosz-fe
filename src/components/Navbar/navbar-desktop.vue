<template>
  <div>
    <v-row class="hidden-sm-and-down mt-5 mb-5">
      <div class="d-flex align-center">
        <v-img
          alt="HAOSZ logo"
          class="shrink mr-4 pointer"
          contain
          src="/haosz-logo.png"
          transition="scale-transition"
          width="60"
          @click="$router.push('/')"
        />
        <div class="d-flex flex-column">
          <h5 class="text-caption text-md-h5 font-weight-bold">
            Háziorvosok Online Szervezetének
            <br />III. Országos Konferenciája
          </h5>
          <div>2020. október 15-18.</div>
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/site/program')"
        >
          <v-icon class="mr-2">mdi-calendar-range-outline</v-icon>
          <span class="mr-2">Programok</span>
        </v-btn>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/site/admin')"
          v-if="userRole === 'ADMIN'"
        >
          <v-icon class="mr-2">mdi-account-multiple-check-outline</v-icon>
          <span class="mr-2">Admin</span>
        </v-btn>
      </v-toolbar-items>

      <!-- <v-toolbar-items v-if="!isLoggedIn" class="mr-1">
        <div class="d-flex flex-column justify-space-between">
          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="dropdown-btn font-weight-bold"
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="mr-2">mdi-account-check-outline</v-icon>
                <span class="mr-2">Regisztráció</span>
              </v-btn>
            </template>
            <v-list class="pa-0">
              <v-list-item class="pa-0">
                <v-btn
                  text
                  width="100%"
                  height="50px"
                  @click="$router.push('/regisztracio/doktor')"
                  >Orvosoknak/Érdeklődőknek</v-btn
                >
              </v-list-item>
              <v-list-item class="pa-0">
                <v-btn
                  text
                  width="100%"
                  height="50px"
                  @click="$router.push('/regisztracio/kiallito')"
                  >Kiállítóknak</v-btn
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items> -->
      <v-toolbar-items v-if="!isLoggedIn">
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/site/bejelentkezes')"
        >
          <v-icon class="mr-2">mdi-logout</v-icon>
          <span class="mr-2">Bejelentkezés</span>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items v-if="isLoggedIn">
        <v-btn class="font-weight-bold" text @click="$emit('click')">
          <v-icon class="mr-2">mdi-logout</v-icon>
          <span class="mr-2">Kijelentkezés</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <a href="http://www.erodium.hu">
          <v-img
            alt="Erodium logo"
            class="shrink pointer mt-6 hidden-md-and-down"
            contain
            src="/erodium-logo.jpg"
            transition="scale-transition"
            width="150"
          />
        </a>
        <a href="http://www.erodium.hu">
          <v-img
            alt="Erodium logo"
            class="shrink pointer mt-8 d-none d-md-flex d-lg-none"
            contain
            src="/erodium-logo.jpg"
            transition="scale-transition"
            width="70"
          />
        </a>
      </v-toolbar-items>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['isLoggedIn', 'userRole'],
};
</script>
