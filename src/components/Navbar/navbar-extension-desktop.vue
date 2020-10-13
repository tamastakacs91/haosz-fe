<template>
  <v-container class="hidden-sm-and-down mb-2">
    <v-row class="justify-center">
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold pa-4"
          text
          @click="$router.push('/site/eloadoterem')"
        >
          <v-icon class="mr-2">mdi-teach</v-icon>
          <span class="mr-2">Előadóterem</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/site/bemutatoterem')"
        >
          <v-icon class="mr-2">mdi-presentation-play</v-icon>
          <span class="mr-2">Bemutatóterem</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/site/elo-kiallitoterem')"
        >
          <v-icon class="mr-2">mdi-account-group</v-icon>
          <span class="mr-2">Élő Kiállítóterem</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          class="font-weight-bold"
          text
          @click="$router.push('/site/jazzpresszo')"
        >
          <v-icon class="mr-2">mdi-music-circle</v-icon>
          <span class="mr-2">Jazzpresszó</span>
        </v-btn>
      </v-toolbar-items>
    </v-row>
  </v-container>
</template>
