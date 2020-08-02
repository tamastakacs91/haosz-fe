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
              :rules="[rules.required, rules.minFive]"
              v-model="doc.name"
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
              v-model="doc.seal"
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
              :rules="[rules.required, rules.minFive]"
              v-model="doc.work"
              validate-on-blur
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
                hint="Formátum: +3620/30/70xxxxxxx"
                :rules="[rules.required, rules.mobile]"
                v-model="doc.mobile"
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
                v-model="doc.email"
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
              :rules="[rules.required, rules.minFive]"
              v-model="doc.billingName"
              validate-on-blur
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
              :rules="[rules.required, rules.minTen]"
              v-model="doc.billingAddress"
              validate-on-blur
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
              :rules="[rules.required, rules.minEigth]"
              v-model="doc.billingTax"
              validate-on-blur
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
              :rules="[rules.required, rules.minFive]"
              v-model="doc.billingContact"
              validate-on-blur
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
                hint="Formátum: +3620/30/70xxxxxxx"
                :rules="[rules.required, rules.mobile]"
                v-model="doc.billingMobile"
                validate-on-blur
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
                v-model="doc.billingEmail"
                validate-on-blur
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
              v-model="doc.password"
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
              v-model="doc.passwordAgain"
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
