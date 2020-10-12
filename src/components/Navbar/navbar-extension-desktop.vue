<template>
  <v-container class="hidden-sm-and-down mb-2">
    <v-row class="justify-center">
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold pa-4"
          text
          @click="$router.push('/eloadoterem')"
        >
          <v-icon class="mr-2">mdi-teach</v-icon>
          <span class="mr-2">Előadóterem</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/bemutatoterem')"
        >
          <v-icon class="mr-2">mdi-presentation-play</v-icon>
          <span class="mr-2">Bemutatóterem</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/elo-kiallitoterem')"
        >
          <v-icon class="mr-2">mdi-account-group</v-icon>
          <span class="mr-2">Élő Kiállítóterem</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/jazzpresszo')"
        >
          <v-icon class="mr-2">mdi-music-circle</v-icon>
          <span class="mr-2">Jazzpresszó</span>
        </v-btn>
      </v-toolbar-items>
    </v-row>
  </v-container>
</template>
