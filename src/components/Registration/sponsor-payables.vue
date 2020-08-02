<template>
  <v-card outlined class="mt-4">
    <v-col cols="12" md="10" offset="md-1">
      <div class="text-h6 mb-4 mt-6 font-weight-bold">
        Hirdetési, cégmegjelenési lehetőségek:
      </div>
      <v-row>
        <v-col cols="10">
          <div>Főszponzori csomag: 500.000 Ft + Áfa</div>
        </v-col>
        <v-col cols="2">
          <div class="d-flex flex-row-reverse">
            <v-checkbox
              hide-details
              class="ma-0 pa-0"
              @change="
                $emit('selected', {
                  value: $event,
                  field: 'isMainSponsore',
                })
              "
            ></v-checkbox>
          </div>
        </v-col>
        <v-col cols="11">
          <div class="caption mt-n5">
            Fix Banner/Link elhelyezése a konferencia összes weboldalán, 30
            perces előadás az Előadóteremben, 5 perces cégbemutató a
            Bemutatóteremben kiemelt helyen, kiemelt hely az Élő
            kiállítóteremben, főszponzor logója, jelmondata a hírlevelekben
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <div>
            30 perces felvett előadás az Előadóteremben: 150.000 Ft + Áfa
          </div>
        </v-col>
        <v-col cols="2">
          <div class="d-flex flex-row-reverse">
            <v-checkbox
              hide-details
              class="ma-0 pa-0"
              @change="
                $emit('selected', { value: $event, field: 'isThirtyMin' })
              "
            ></v-checkbox>
          </div>
        </v-col>
        <v-col cols="11">
          <div class="caption mt-n5">
            Az előadás elkészítését a díj nem tartalmazza
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <div>
            5 perces videó elhelyezése a Bemutatóteremben: 50.000 Ft + Áfa
          </div>
        </v-col>
        <v-col cols="2">
          <div class="d-flex flex-row-reverse">
            <v-checkbox
              hide-details
              class="ma-0 pa-0"
              @change="$emit('selected', { value: $event, field: 'isFiveMin' })"
            ></v-checkbox>
          </div>
        </v-col>
        <v-col cols="11">
          <div class="caption mt-n5">
            A cég-/termékbemutató vieó elkészítését a díj nem tartalmazza
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <div>Kiállítói hely az Éló kiállítóteremben: 100.000 Ft + Áfa</div>
        </v-col>
        <v-col cols="2">
          <div class="d-flex flex-row-reverse">
            <v-checkbox
              hide-details
              class="ma-0 pa-0"
              @change="
                $emit('selected', {
                  value: $event,
                  field: 'isExhibitionPlace',
                })
              "
            ></v-checkbox>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="11">
          <div class="font-weight-black">
            Minden regisztrált kiállító 5 regisztrációs jegyet (belépési kódot)
            kap a kiállítói státuszhoz.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <div>További regisztrációs jegyek vásárlása: 5.000 Ft + Áfa/fő</div>
        </v-col>
        <v-col
          cols="2"
          md="1"
          offset-md="1"
          class="d-flex flex-row-reverse pa-0 pr-3 mt-n1"
        >
          <v-text-field
            type="number"
            min="0"
            value="0"
            hide-details
            class="pa-0 centered"
            @input="$emit('selected', { value: $event, field: 'ticketCounts' })"
          ></v-text-field>
        </v-col>
      </v-row>
      <hr v-if="fees != 0" class="mt-5" />
      <v-row v-if="fees != 0">
        <v-col class="font-weight-black">Összesen</v-col>
        <v-col>
          <div class="d-flex flex-row-reverse font-weight-black">
            {{ fees }} Ft + Áfa
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: ['fees'],
};
</script>
