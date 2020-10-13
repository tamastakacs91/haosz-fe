<template>
  <div class="max-height">
    <mobile-header></mobile-header>
    <div class="height-70">
      <v-container>
        <v-row>
          <v-col class="text-center text-h5 text-md-h4">Bejelentkezés</v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" offset="md-2">
            <v-card outlined ref="form">
              <v-col cols="12" md="10" offset="md-1">
                <v-text-field
                  autofocus
                  outlined
                  label="EMAIL CÍM"
                  hide-details
                  class="mt-4"
                  @input="updateEmail"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="JELSZÓ"
                  hide-details
                  class="mt-4 mb-4"
                  @input="updatePassword"
                  :append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passwordShown ? 'text' : 'password'"
                  @click:append="togglePasswordShown"
                  @keyup.native.enter="signIn"
                ></v-text-field>
                <div
                  class="primary--text pointer"
                  @click="$router.push('/site/uj-jelszo-beallitasa')"
                >
                  Elfelejtett jelszó
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    rounded
                    color="primary"
                    @click="signIn"
                    :loading="signInLoading"
                    >Bejelentkezés</v-btn
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
        <v-snackbar
          class="reg-snackbar"
          right
          color="success"
          rounded="pill"
          timeout="5000"
          min-width="5"
          max-width="100"
          v-model="pwReset"
        >
          <div class="snackbar-text-big">Sikeresen megváltoztatva</div>
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
  name: 'SignIn',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('signIn', [
      'email',
      'password',
      'passwordShown',
      'signInFailMessage',
      'signInFailPresent',
      'signInLoading',
      'pwSuccessPresent',
    ]),
    error: {
      get() {
        return this.signInFailPresent;
      },
      set(value) {
        this.toggleSignInFailPresent(value);
      },
    },
    pwReset: {
      get() {
        return this.pwSuccessPresent;
      },
      set(value) {
        this.togglePwSuccessPresent(value);
      },
    },
  },
  methods: {
    ...mapActions('signIn', [
      'updateEmail',
      'updatePassword',
      'togglePasswordShown',
      'toggleSignInFailPresent',
      'signIn',
      'togglePwSuccessPresent',
    ]),
  },
};
</script>
