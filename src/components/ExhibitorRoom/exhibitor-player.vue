<template>
  <v-col cols="12" :lg="lg">
    <v-row align="center" justify="center">
      <div class="d-flex flex-column text-center">
        <v-img
          v-if="!shown"
          :alt="alt"
          class="shrink mt-5 mr-5 ml-5 pointer hidden-sm-and-down rounded-lg"
          contain
          :src="picSrc"
          transition="scale-transition"
          :max-height="height"
          :max-width="width"
          @click="$emit('click', exhibitor)"
        />
        <v-img
          v-if="!shown"
          :alt="alt"
          class="shrink mt-5 mr-5 ml-5 pointer hidden-md-and-up rounded-lg"
          contain
          :src="picSrc"
          transition="scale-transition"
          max-height="200"
          max-width="200"
          @click="$emit('click', exhibitor)"
        />
        <div v-if="!shown" class="mt-5 align-end">{{ title }}</div>
        <div :id="exhibitor">
          <iframe
            class="exhibitor-frame"
            v-if="shown"
            frameborder="0"
            allowfullscreen
            :src="vidSrc"
          ></iframe>
        </div>
      </div>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: [
    'lg',
    'exhibitor',
    'shown',
    'alt',
    'picSrc',
    'vidSrc',
    'height',
    'width',
    'title',
  ],
};
</script>
