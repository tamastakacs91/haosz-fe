<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center text-h5 text-md-h4 mt-5">Regisztráció Orvosoknak</v-col>
      </v-row>
      <v-col cols="12" md="8" offset="md-2">
        <v-card outlined ref="form">
          <v-col cols="12" md="10" offset="md-1">
            <v-text-field
              label="NÉV"
              ref="name"
              filled
              class="mt-4"
              :rules="[rules.required]"
              validate-on-blur
              @input="
                $emit('input', {
                  value: $event,
                  field: 'name',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="ORVOSI PECSÉTSZÁM"
              ref="sealNumber"
              filled
              :rules="[rules.required]"
              validate-on-blur
              @input="
                $emit('input', {
                  value: $event,
                  field: 'sealNumber',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="MUNKAHELY"
              ref="workPlace"
              filled
              :rules="[rules.required]"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'workPlace',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <div class="d-flex flex-wrap">
              <v-text-field
                label="MOBIL"
                ref="mobile"
                filled
                class="mr-md-5"
                hint="Formátum: +36 20/30/70 xxxxxxx"
                :rules="[rules.required, rules.mobile]"
                validate-on-blur
                @input="
                  $emit('input', {
                    value: $event,
                    field: 'mobile',
                    dataSet: 'doctor',
                  })
                "
              ></v-text-field>
              <v-text-field
                label="E-MAIL"
                ref="email"
                filled
                type="email"
                :rules="[rules.required, rules.email]"
                validate-on-blur
                @input="
                  $emit('input', {
                    value: $event,
                    field: 'email',
                    dataSet: 'doctor',
                  })
                "
              ></v-text-field>
            </div>
            <div class="mt-4 mb-4">Számlázási Adatok:</div>
            <v-text-field
              label="CÉG NEVE"
              ref="billingName"
              filled
              :rules="[rules.required]"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'billingName',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="CÍM"
              ref="billingAddress"
              filled
              :rules="[rules.required]"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'billingAddress',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="ADÓSZÁM"
              ref="billingTaxNumber"
              filled
              :rules="[rules.required]"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'billingTaxNumber',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <v-text-field
              label="KAPCSOLATTARTÓ NEVE"
              ref="billingContact"
              filled
              :rules="[rules.required]"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'billingContact',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <div class="d-flex flex-wrap">
              <v-text-field
                label="MOBIL"
                ref="billingMobile"
                filled
                hint="Formátum: +36 20/30/70 xxxxxxx"
                :rules="[rules.required, rules.mobile]"
                class="mr-md-5"
                @input="
                  $emit('input', {
                    value: $event,
                    field: 'billingMobile',
                    dataSet: 'doctor',
                  })
                "
              ></v-text-field>
              <v-text-field
                label="E-MAIL"
                ref="billingEmail"
                filled
                :rules="[rules.required, rules.email]"
                type="email"
                @input="
                  $emit('input', {
                    value: $event,
                    field: 'billingEmail',
                    dataSet: 'doctor',
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
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
            <div class="mb-4">Jelszó ismét:</div>
            <v-text-field
              label="JELSZÓ ISMÉT"
              ref="passwordAgain"
              filled
              :rules="[rules.required, rules.passwordAgainDoctor]"
              validate-on-blur
              :append-icon="showPasswordAgain ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPasswordAgain ? 'text' : 'password'"
              @click:append="$emit('togglePasswordAgain')"
              @input="
                $emit('input', {
                  value: $event,
                  field: 'passwordAgain',
                  dataSet: 'doctor',
                })
              "
            ></v-text-field>
          </v-col>
        </v-card>
        <!-- <v-card outlined ref="tickets" class="mt-4">
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
                      <v-radio value="1" @change="emitSelectedValue(3000)"></v-radio>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <div>Háziorvos - HaOSz tag (09.15-ig): 3.000 Ft + Áfa/fő</div>
                  </v-col>
                  <v-col cols="2">
                    <div class="d-flex flex-row-reverse">
                      <v-radio value="2" @change="emitSelectedValue(3000)"></v-radio>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <div>Egyéb érdeklődő (09.15-ig): 5.000 Ft + Áfa/fő</div>
                  </v-col>
                  <v-col cols="2">
                    <div class="d-flex flex-row-reverse">
                      <v-radio value="3" @change="emitSelectedValue(5000)"></v-radio>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div v-if="date > 20200915">
                <div class="mb-4 mt-4 font-weight-bold">Szeptember 15. után</div>
                <v-row>
                  <v-col cols="10">
                    <div>HaOSZ támogatói jegy: 10.000 Ft + Áfa/fő</div>
                  </v-col>
                  <v-col cols="2">
                    <div class="d-flex flex-row-reverse">
                      <v-radio value="4" @change="emitSelectedValue(10000)"></v-radio>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-radio-group>
            <hr v-if="doctor.registrationCost != 0" class="mt-5" />
            <v-row v-if="doctor.registrationCost != 0">
              <v-col class="font-weight-black">Összesen</v-col>
              <v-col>
                <div
                  class="d-flex flex-row-reverse font-weight-black"
                >{{ doctor.registrationCost }} Ft + Áfa</div>
              </v-col>
            </v-row>
          </v-col>
        </v-card>-->
        <doctor-payables
          :errorMessage="errorMessage"
          :date="date"
          :cost="doctor.registrationCost"
          @selected="emitSelectedValue"
        ></doctor-payables>
      </v-col>
      <v-row>
        <v-col cols="12" md="8" offset="md-2" class="text-center">
          <v-btn
            rounded
            color="primary"
            width="50%"
            @click="validate(doctor, 'doctor')"
          >Regisztráció</v-btn>
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
  props: ['doctor', 'showPassword', 'showPasswordAgain', 'date'],
  mixins: [validationCheck],
  methods: {
    emitSelectedValue(value) {
      this.errorMessage = '';
      this.$emit('selected', value);
    },
    resetError(value) {
      this.errors = value;
    },
  },
};
</script>
