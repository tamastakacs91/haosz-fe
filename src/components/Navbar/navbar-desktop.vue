<template>
  <v-row class="hidden-sm-and-down mt-5 mb-5">
    <div class="d-flex align-center">
      <v-img
        alt="HAOSZ logo"
        class="shrink mr-2"
        contain
        src="/haosz-logo.png"
        transition="scale-transition"
        width="50"
      />
      <h4 class="text-caption text-md-h5 font-weight-bold">
        Háziorvosok Online Szervezetének
        <br />III. országos konferenciája
      </h4>
    </div>

    <v-spacer></v-spacer>

    <v-toolbar-items class="mr-5">
      <v-btn text>
        <v-icon class="mr-2">mdi-account-arrow-right-outline</v-icon>
        <span class="mr-2">Belépés</span>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="dropdown-btn"
            color="light"
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
            <v-btn text width="100%" height="50px">Orvosoknak</v-btn>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-btn text width="100%" height="50px">Kiállítóknak</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-row>
</template>
