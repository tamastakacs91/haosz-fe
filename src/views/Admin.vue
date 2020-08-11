<template>
  <div>
    <v-row>
      <v-col class="text-center text-h5 text-md-h4 mb-7"
        >Regisztrált felhasználók</v-col
      >
    </v-row>
    <div class="text-center mt-10" v-if="isLoadingUserData">
      <v-progress-circular
        indeterminate
        color="primary"
        size="300"
      ></v-progress-circular>
    </div>
    <div v-if="!isLoadingUserData">
      <title-bar :title="'Szponzorok'"></title-bar>
      <v-container fluid class="pr-10 pl-10 mt-n15">
        <v-row class="mb-3">
          <v-col>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th v-for="field in sponsorFields" :key="field">
                      {{ field }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(sponsor, index) in sponsors" :key="sponsor.id">
                    <td class="text-subtitle-1">{{ index + 1 }}</td>
                    <td class="text-subtitle-1">{{ sponsor.companyName }}</td>
                    <td class="text-subtitle-1">
                      {{ sponsor.companyContact }}
                    </td>
                    <td class="text-subtitle-1">{{ sponsor.companyMobile }}</td>
                    <td class="text-subtitle-1">{{ sponsor.companyEmail }}</td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isMainSponsore"
                    >
                      <v-icon color="green">mdi-check</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">mdi-window-close</v-icon>
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isThirtyMin"
                    >
                      <v-icon color="green">mdi-check</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">mdi-window-close</v-icon>
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isFiveMin"
                    >
                      <v-icon color="green">mdi-check</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">mdi-window-close</v-icon>
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isExhibitionPlace"
                    >
                      <v-icon color="green">mdi-check</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">mdi-window-close</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center">
                      {{ sponsor.ticketCounts }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
      <title-bar :title="'Orvosok és érdeklődők'"></title-bar>
      <v-container>{{ doctors[0] }}</v-container>
      <v-container fluid class="pr-10 pl-10 mt-n15">
        <v-row class="mb-3">
          <v-col>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th v-for="field in userFields" :key="field">
                      {{ field }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in doctors" :key="user.id">
                    <td class="text-subtitle-1">{{ index + 1 }}</td>
                    <td class="text-subtitle-1">{{ user.name }}</td>
                    <td class="text-subtitle-1">{{ user.workPlace }}</td>
                    <td class="text-subtitle-1">{{ user.mobile }}</td>
                    <td class="text-subtitle-1">{{ user.user.email }}</td>
                    <td class="text-subtitle-1">{{ user.billingName }}</td>
                    <td class="text-subtitle-1">{{ user.billingAddress }}</td>
                    <td class="text-subtitle-1">{{ user.billingTaxNumber }}</td>
                    <td class="text-subtitle-1">{{ user.billingContact }}</td>
                    <td class="text-subtitle-1">{{ user.billingMobile }}</td>
                    <td class="text-subtitle-1">{{ user.billingEmail }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data() {
    return {
      sponsorFields: [
        '#',
        'Cég',
        'Kapcsolattartó',
        'Mobil',
        'Email',
        'Főszponzor',
        '30perc',
        '5 perc',
        'Kiállítói hely',
        'Plusz jegyek',
      ],
      userFields: [
        '#',
        'Név',
        'Munkahely',
        'Mobil',
        'Email',
        'Cég neve',
        'Cég címe',
        'Adószáma',
        'Kapcsolattartó',
        'Cég mobil',
        'Cég email',
      ],
    };
  },
  computed: {
    ...mapGetters('signIn', ['userRole']),
    ...mapGetters('admin', ['doctors', 'sponsors', 'isLoadingUserData']),
  },
  methods: {
    ...mapActions('admin', ['getUserData']),
  },
  created() {
    const token = window.sessionStorage.getItem('token');
    if (!token) return this.$router.push('/bejelentkezes');
    if (this.userRole != 'ADMIN') return this.$router.push('/');
    this.getUserData();
  },
};
</script>
