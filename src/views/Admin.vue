<template>
  <div>
    <v-row class="d-flex justify-center mt-7">
      <div class="text-h4 text-md-h3 mb-7">Regisztrált felhasználók</div>
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
      <v-container fluid class="pr-10 pl-10 mt-n10">
        <v-row class="mb-3">
          <v-col>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      v-for="field in sponsorFields"
                      :key="field"
                      class="font-weight-bold text-subtitle-1"
                    >
                      {{ field }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(sponsor, index) in sponsors" :key="sponsor.id">
                    <td class="text-subtitle-1">{{ index + 1 }}</td>
                    <td class="text-subtitle-1">{{ sponsor.companyName }}</td>
                    <td class="text-subtitle-1">
                      {{ sponsor.companyAddress }}
                    </td>
                    <td class="text-subtitle-1">
                      {{ sponsor.companyTaxNumber }}
                    </td>
                    <td class="text-subtitle-1">
                      {{ sponsor.companyContact }}
                    </td>
                    <td class="text-subtitle-1">{{ sponsor.companyMobile }}</td>
                    <td class="text-subtitle-1">{{ sponsor.companyEmail }}</td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isMainSponsore"
                    >
                      <v-icon color="green">{{ mdiCheck }}</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">{{ mdiWindowClose }}</v-icon>
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isThirtyMin"
                    >
                      <v-icon color="green">{{ mdiCheck }}</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">{{ mdiWindowClose }}</v-icon>
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isFiveMin"
                    >
                      <v-icon color="green">{{ mdiCheck }}</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">{{ mdiWindowClose }}</v-icon>
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.isExhibitionPlace"
                    >
                      <v-icon color="green">{{ mdiCheck }}</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center" v-else>
                      <v-icon color="red">{{ mdiWindowClose }}</v-icon>
                    </td>
                    <td class="text-subtitle-1 text-center">
                      {{ sponsor.ticketCounts }}
                    </td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="sponsor.notes === '' || sponsor.notes === null"
                    >
                      X
                    </td>
                    <td class="text-subtitle-1" v-else>{{ sponsor.notes }}</td>
                    <td class="text-subtitle-1 text-center">
                      {{ sponsor.totalPrice }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
      <title-bar :title="'Orvosok és érdeklődők'"></title-bar>
      <v-container fluid class="pr-10 pl-10 mt-n10">
        <v-row class="mb-3">
          <v-col>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      v-for="field in userFields"
                      :key="field"
                      class="font-weight-bold text-subtitle-1"
                    >
                      {{ field }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in doctors" :key="user.id">
                    <td class="text-subtitle-1">{{ index + 1 }}</td>
                    <td class="text-subtitle-1">{{ user.name }}</td>
                    <td class="text-subtitle-1">{{ user.sealNumber }}</td>
                    <td class="text-subtitle-1">{{ user.workPlace }}</td>
                    <td class="text-subtitle-1">{{ user.mobile }}</td>
                    <td class="text-subtitle-1">{{ user.user.email }}</td>
                    <td class="text-subtitle-1">{{ user.billingName }}</td>
                    <td class="text-subtitle-1">{{ user.billingAddress }}</td>
                    <td class="text-subtitle-1">{{ user.billingTaxNumber }}</td>
                    <td class="text-subtitle-1">{{ user.billingContact }}</td>
                    <td class="text-subtitle-1">{{ user.billingMobile }}</td>
                    <td class="text-subtitle-1">{{ user.billingEmail }}</td>
                    <td
                      class="text-subtitle-1 text-center"
                      v-if="user.notes === '' || user.notes === null"
                    >
                      X
                    </td>
                    <td class="text-subtitle-1" v-else>{{ user.notes }}</td>
                    <td class="text-subtitle-1">{{ user.registrationCost }}</td>
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
import { mdiCheck, mdiWindowClose } from '@mdi/js';

export default {
  name: 'SignIn',
  data() {
    return {
      sponsorFields: [
        '#',
        'Cég',
        'Cég címe',
        'Cég adószáma',
        'Kapcsolattartó',
        'Mobil',
        'Email',
        'Főszponzor',
        '30 perc',
        '5 perc',
        'Kiállítói hely',
        'Plusz jegyek',
        'Megjegyzés',
        'Összeg',
      ],
      userFields: [
        '#',
        'Név',
        'Pecsétszám',
        'Munkahely',
        'Mobil',
        'Email',
        'Cég neve',
        'Cég címe',
        'Cég adószáma',
        'Kapcsolattartó',
        'Cég mobil',
        'Cég email',
        'Megjegyzés',
        'Regisztrációs díj',
      ],
    };
  },
  computed: {
    ...mapGetters('signIn', ['userRole', 'isLoggedIn']),
    ...mapGetters('admin', ['doctors', 'sponsors', 'isLoadingUserData']),
  },
  methods: {
    ...mapActions('admin', ['getUserData']),
  },
  created() {
    const token = window.sessionStorage.getItem('token');

    if (!token || !this.isLoggedIn || this.userRole != 'ADMIN') {
      this.$router.push('/bejelentkezes');
      return;
    } else {
      this.getUserData();
    }
  },
};
</script>
