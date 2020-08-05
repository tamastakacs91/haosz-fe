<template>
  <v-container class="mt-n8">
    <v-row class="mt-n2 mb-3">
      <v-col class="text-md-h6"
        >Szakmai-, orvostechnikai-, egészségpolitikai előadások felvételről és
        élő adásban, élő szakmapolitikai fórum</v-col
      >
    </v-row>
    <v-row class="hidden-sm-and-down mb-3">
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in data" :key="item.title">
                <td class="font-weight-bold text-subtitle-1">
                  {{ item.time }}
                </td>
                <td
                  v-if="
                    item.title === 'Megbeszélés/kérdések' ||
                    item.title.match('Szakmapolitikai fórum')
                  "
                  class="font-weight-bold text-subtitle-1"
                >
                  {{ item.title }}
                </td>
                <td v-else class="text-subtitle-1">{{ item.title }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row class="hidden-md-and-up mb-3">
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in data" :key="item.title" class="mobile-row">
                <td
                  v-if="
                    item.title === 'Megbeszélés/kérdések' ||
                    item.title.match('Szakmapolitikai fórum')
                  "
                  class="font-weight-bold text-subtitle-2"
                >
                  <div>{{ item.time }}</div>
                  <div>{{ item.title }}</div>
                </td>
                <td v-else class="text-subtitle-2">
                  <div class="font-weight-bold">{{ item.time }}</div>
                  <div>{{ item.title }}</div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['data'],
};
</script>
