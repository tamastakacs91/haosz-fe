<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center text-h5 text-md-h4 mt-5"
          >Regisztráció Kiállítóknak</v-col
        >
      </v-row>
      <v-col cols="12" md="8" offset="md-2">
        <v-card outlined ref="form">
          <v-col cols="12" md="10" offset="md-1">
            <v-text-field
              label="CÉG NEVE"
              ref="companyName"
              filled
              class="mt-4"
              :rules="[rules.required]"
              validate-on-blur
              @input="
                $emit('input', {
                  value: $event,
                  field: 'companyName',
                  dataSet: 'exhibitor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="CÍME"
              ref="companyAddress"
              filled
              :rules="[rules.required]"
              validate-on-blur
              @input="
                $emit('input', {
                  value: $event,
                  field: 'companyAddress',
                  dataSet: 'exhibitor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="ADÓSZÁMA"
              ref="companyTaxNumber"
              filled
              :rules="[rules.required]"
              validate-on-blur
              @input="
                $emit('input', {
                  value: $event,
                  field: 'companyTaxNumber',
                  dataSet: 'exhibitor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="KAPCSOLATTARTÓ NEVE"
              ref="companyContact"
              filled
              :rules="[rules.required]"
              validate-on-blur
              @input="
                $emit('input', {
                  value: $event,
                  field: 'companyContact',
                  dataSet: 'exhibitor',
                })
              "
            ></v-text-field>
            <div class="d-flex flex-wrap">
              <v-text-field
                label="MOBIL"
                ref="companyMobile"
                filled
                class="mr-md-5"
                hint="Formátum: +36 20/30/70 xxxxxxx"
                :rules="[rules.required, rules.mobile]"
                validate-on-blur
                @input="
                  $emit('input', {
                    value: $event,
                    field: 'companyMobile',
                    dataSet: 'exhibitor',
                  })
                "
              ></v-text-field>
              <v-text-field
                label="E-MAIL"
                ref="companyEmail"
                filled
                type="email"
                :rules="[rules.required, rules.email]"
                validate-on-blur
                @input="
                  $emit('input', {
                    value: $event,
                    field: 'companyEmail',
                    dataSet: 'exhibitor',
                  })
                "
              ></v-text-field>
            </div>
            <div class="mt-4 mb-4">Jelszó:</div>
            <v-text-field
              label="JELSZÓ"
              ref="password"
              filled
              :hint="'Legalább 8 karakter, tartalmaznia kell kisbetűt, nagybetűt, számot és egy különleges karaktert.'"
              :rules="[rules.required, rules.password]"
              validate-on-blur
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="$emit('togglePassword')"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'password',
                  dataSet: 'exhibitor',
                })
              "
            ></v-text-field>
            <div class="mb-4">Jelszó ismét:</div>
            <v-text-field
              label="JELSZÓ ISMÉT"
              ref="passwordAgain"
              filled
              :rules="[rules.required, rules.passwordAgainExhibitor]"
              validate-on-blur
              :append-icon="showPasswordAgain ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPasswordAgain ? 'text' : 'password'"
              @click:append="$emit('togglePasswordAgain')"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'passwordAgain',
                  dataSet: 'exhibitor',
                })
              "
            ></v-text-field>
          </v-col>
        </v-card>
        <v-card outlined ref="tickets" class="mt-4">
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
                  Fix Banner/Link elhelyezése a konferencia összes weboldalán,
                  30 perces előadás az Előadóteremben, 5 perces cégbemutató a
                  Bemutatóteremben kiemelt helyen, kiemelt hely az Élő
                  kiállítóteremben, főszponzor logója, jelmondata a
                  hírlevelekben
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
                    @change="
                      $emit('selected', { value: $event, field: 'isFiveMin' })
                    "
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
                <div>
                  Kiállítói hely az Éló kiállítóteremben: 100.000 Ft + Áfa
                </div>
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
                  Minden regisztrált kiállító 5 regisztrációs jegyet (belépési
                  kódot) kap a kiállítói státuszhoz.
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="10">
                <div>
                  További regisztrációs jegyek vásárlása: 5.000 Ft + Áfa/fő
                </div>
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
                  @input="
                    $emit('selected', { value: $event, field: 'ticketCounts' })
                  "
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
      </v-col>
      <v-row>
        <v-col cols="12" md="8" offset="md-2" class="text-center">
          <v-btn
            rounded
            color="primary"
            width="50%"
            @click="validate(exhibitor, 'exhibitor')"
            >Regisztráció</v-btn
          >
        </v-col>
      </v-row>

      <slot name="terms"></slot>
    </v-container>
    <slot name="more-info"></slot>
    <error-snackbar :errors="errors" @resetError="resetError"></error-snackbar>
  </div>
</template>

<script>
import { validationCheck } from '@/mixins/validationCheck';

export default {
  props: ['exhibitor', 'showPassword', 'showPasswordAgain', 'fees'],
  mixins: [validationCheck],
  methods: {
    resetError(value) {
      this.errors = value;
    },
  },
};
</script>
