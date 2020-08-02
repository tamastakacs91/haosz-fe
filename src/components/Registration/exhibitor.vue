<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center text-h5 text-md-h4 mt-5">Regisztráció Kiállítóknak</v-col>
      </v-row>
      <v-col cols="12" md="8" offset="md-2">
        <v-card outlined ref="form">
          <v-col cols="12" md="10" offset="md-1">
            <v-text-field
              label="CÉG NEVE"
              ref="companyName"
              filled
              class="mt-4"
              :rules="[rules.required, rules.minFive]"
              v-model="sponsor.name"
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
              :rules="[rules.required, rules.minFive]"
              v-model="sponsor.address"
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
              :rules="[rules.required, rules.minEigth]"
              v-model="sponsor.tax"
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
              :rules="[rules.required, rules.minFive]"
              v-model="sponsor.contact"
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
        <sponsor-payables :fees="fees" @selected="selected"></sponsor-payables>
      </v-col>
      <v-row>
        <v-col cols="12" md="8" offset="md-2" class="text-center">
          <v-btn
            rounded
            color="primary"
            width="50%"
            @click="validate(exhibitor, 'exhibitor')"
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
  props: ['exhibitor', 'showPassword', 'showPasswordAgain', 'fees'],
  mixins: [validationCheck],
  data() {
    return {
      sponsor: {
        name: '',
        address: '',
        tax: '',
        contact: ''
      },
    };
  },
  methods: {
    resetError(value) {
      this.errors = value;
    },
    selected({ value, field }) {
      this.$emit('selected', { value, field });
    },
  },
};
</script>
