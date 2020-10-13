<template>
  <div class="max-height">
    <mobile-header></mobile-header>
    <div class="height-70">
      <v-container>
        <v-row>
          <v-col class="text-center text-h5 text-md-h4 mt-10"
            >Új jelszó beállítása</v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12" md="8" offset="md-2">
            <v-card outlined ref="form">
              <v-col cols="12" md="10" offset="md-1">
                <v-text-field
                  ref="email"
                  v-model="data.email"
                  :rules="[rules.required, rules.email]"
                  autofocus
                  outlined
                  label="EMAIL CÍM"
                  class="mt-4"
                ></v-text-field>
                <v-text-field
                  ref="password"
                  v-model="data.password"
                  :rules="[rules.required, rules.password]"
                  outlined
                  label="JELSZÓ"
                  class="mt-4 mb-4"
                  :append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passwordShown ? 'text' : 'password'"
                  :hint="'Legalább 8 karakter, tartalmaznia kell kisbetűt, nagybetűt, számot és egy különleges karaktert.'"
                  @click:append="togglePasswordShown"
                ></v-text-field>
                <v-text-field
                  ref="passwordAgain"
                  v-model="data.passwordAgain"
                  :rules="[rules.required, rules.passwordAgain]"
                  outlined
                  label="JELSZÓ ISMÉT"
                  class="mt-4 mb-4"
                  :append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passwordShown ? 'text' : 'password'"
                  @click:append="togglePasswordShown"
                  @keyup.native.enter="validateAndResetPassword"
                ></v-text-field>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    rounded
                    color="primary"
                    @click="validateAndResetPassword"
                    :loading="pwLoading"
                    >Új jelszó beállítása</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-card>
          </v-col>
        </v-row>

        <v-snackbar
          id="error-snackbar"
          top
          color="error"
          rounded="pill"
          timeout="2000"
          min-width="5"
          max-width="20"
          v-model="error"
        >
          <div>
            <v-icon>mdi-exclamation</v-icon>
            {{ signInFailMessage }}
          </div>
        </v-snackbar>
      </v-container>
    </div>
    <div class="height-30">
      <more-info></more-info>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewPassword',
  data() {
    return {
      data: {
        email: '',
        password: '',
        passwordAgain: '',
      },
      errors: false,
      rules: {
        required: (value) => !!value || 'Kötelező adat',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Érvénytelen email formátum';
        },
        password: (value) => {
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
          return pattern.test(value) || 'Érvénytelen jelszó';
        },
        passwordAgain: (value) =>
          value === this.data.passwordAgain || 'A jelszó nem egyezik',
      },
    };
  },
  computed: {
    ...mapGetters('signIn', [
      'passwordShown',
      'signInFailMessage',
      'signInFailPresent',
      'pwLoading',
    ]),
    error: {
      get() {
        return this.signInFailPresent;
      },
      set(value) {
        this.toggleSignInFailPresent(value);
      },
    },
  },
  methods: {
    ...mapActions('signIn', [
      'togglePasswordShown',
      'setNewPassword',
      'toggleSignInFailPresent',
    ]),
    checkFieldValidity() {
      Object.keys(this.data).forEach((field) => {
        if (this.$refs[field].validate(true) === false) {
          this.errors = true;
        }
      });
    },
    resetData() {
      for (const prop in this.data) {
        this.data[prop] = '';
      }
    },
    validateAndResetPassword() {
      this.errors = false;
      this.checkFieldValidity();
      if (this.errors === true) return;
      this.setNewPassword({
        email: this.data.email,
        password: this.data.password,
      });
    },
  },
};
</script>
