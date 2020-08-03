<template>
  <v-card outlined class="mt-4">
    <v-col cols="12" md="10" offset="md-1">
      <div class="text-h6 mb-4 mt-6 font-weight-bold">Regisztrációs díj:</div>
      <v-radio-group :messages="errorMessage">
        <div v-if="date < 20200915">
          <v-row>
            <v-col cols="10">
              <div>Rezidens, szakdolgozó (09.15-ig): 3.000 Ft + Áfa/fő</div>
            </v-col>
            <v-col cols="2">
              <div class="d-flex flex-row-reverse">
                <v-radio value="1" @change="$emit('selected', 3000)"></v-radio>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <div>Háziorvos - HaOSz tag (09.15-ig): 3.000 Ft + Áfa/fő</div>
            </v-col>
            <v-col cols="2">
              <div class="d-flex flex-row-reverse">
                <v-radio value="2" @change="$emit('selected', 3000)"></v-radio>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <div>Egyéb érdeklődő (09.15-ig): 5.000 Ft + Áfa/fő</div>
            </v-col>
            <v-col cols="2">
              <div class="d-flex flex-row-reverse">
                <v-radio value="3" @change="$emit('selected', 5000)"></v-radio>
              </div>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col cols="10">
              <div>Szeptember 15. után: 10.000 Ft</div>
            </v-col>
            <v-col cols="2">
              <div class="d-flex flex-row-reverse">
                <v-radio value="4" @change="$emit('selected', 10000)"></v-radio>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <div>HaOSZ támogatói jegy: 10.000 Ft + Áfa/fő</div>
            </v-col>
            <v-col cols="2">
              <div class="d-flex flex-row-reverse">
                <v-radio value="5" @change="$emit('selected', 10000)"></v-radio>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-radio-group>
      <hr v-if="cost != 0" class="mt-5" />
      <v-row v-if="cost != 0">
        <v-col class="font-weight-black">Összesen</v-col>
        <v-col>
          <div class="d-flex flex-row-reverse font-weight-black">
            {{ cost }} Ft + Áfa
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: ['errorMessage', 'date', 'cost'],
};
</script>
