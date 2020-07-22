<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center text-h5 text-md-h4 mt-5"
          >Regisztráció Orvosoknak</v-col
        >
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
              @input="$emit('input', $event, 'data', 'name')"
            ></v-text-field>
            <v-text-field
              label="ORVOSI PECSÉTSZÁM"
              ref="sealNumber"
              filled
              :rules="[rules.required]"
              validate-on-blur
              @input="$emit('input', $event, 'data', 'sealNumber')"
            ></v-text-field>
            <v-text-field
              label="MUNKAHELY"
              ref="workPlace"
              filled
              @input="$emit('input', $event, 'data', 'workPlace')"
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
                @input="$emit('input', $event, 'data', 'mobile')"
              ></v-text-field>
              <v-text-field
                label="E-MAIL"
                ref="email"
                filled
                type="email"
                :rules="[rules.required, rules.email]"
                validate-on-blur
                @input="$emit('input', $event, 'data', 'email')"
              ></v-text-field>
            </div>
            <div class="mt-4 mb-4">Számlázási Adatok:</div>
            <v-text-field
              label="CÉG NEVE"
              filled
              @input="$emit('input', $event, 'billing', 'name')"
            ></v-text-field>
            <v-text-field
              label="CÍM"
              filled
              @input="$emit('input', $event, 'billing', 'address')"
            ></v-text-field>
            <v-text-field
              label="ADÓSZÁM"
              filled
              @input="$emit('input', $event, 'billing', 'taxNumber')"
            ></v-text-field>
            <v-text-field
              label="KAPCSOLATTARTÓ NEVE"
              filled
              @input="$emit('input', $event, 'billing', 'contact')"
            ></v-text-field>
            <div class="d-flex flex-wrap">
              <v-text-field
                label="MOBIL"
                filled
                class="mr-md-5"
                hint="Formátum: +36 20/30/70 xxxxxxx"
                @input="$emit('input', $event, 'billing', 'mobile')"
              ></v-text-field>
              <v-text-field
                label="E-MAIL"
                filled
                type="email"
                @input="$emit('input', $event, 'billing', 'email')"
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
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              @input="$emit('input', $event, 'password', 'password')"
            ></v-text-field>
            <div class="mb-4">Jelszó ismét:</div>
            <v-text-field
              label="JELSZÓ ISMÉT"
              ref="passwordAgain"
              filled
              :rules="[rules.required, rules.passwordAgainDoctor]"
              validate-on-blur
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
              @input="$emit('input', $event, 'password', 'passwordAgain')"
            ></v-text-field>
          </v-col>
        </v-card>
      </v-col>
      <v-row>
        <v-col cols="12" md="8" offset="md-2" class="text-center">
          <v-btn
            color="primary"
            width="50%"
            @click="validate(doctor.data, doctor.password)"
            >Regisztráció</v-btn
          >
        </v-col>
      </v-row>
      <slot name="terms"></slot>
    </v-container>
    <slot name="more-info"></slot>
  </div>
</template>

<script>
import { validationCheck } from '@/mixins/validationCheck';

export default {
  props: ['doctor'],
  mixins: [validationCheck],
  data() {
    return {
      show1: false,
      show2: false,
      errors: false,
    };
  },
};
</script>
