<template>
  <v-tab-item>
    <v-container>
      <v-card flat>
        <v-list-item-content>
          <v-list-item-title class="mb-5 mt-3 text-center text-h6 text-md-h5">
            {{ greeting }}
          </v-list-item-title>
          <div class="text-left">{{ invitation }}</div>
          <div class="mt-5 text-center">{{ listing }}</div>
          <v-row align="center" justify="center">
            <v-col
              cols="12"
              md="4"
              v-for="(program, index) in programs"
              :key="index"
            >
              <v-row align="center" justify="center" class="text-center ma-1">
                <v-card width="300" height="190" outlined shaped>
                  <v-container fill-height>
                    <v-row
                      v-if="program.title != 'Jazzpresszó'"
                      justify="center"
                      align="center"
                    >
                      <div>
                        <v-icon size="50" color="primary">{{
                          program.icon
                        }}</v-icon>
                      </div>
                      <div class="headline black-text normal-break">
                        {{ program.title }}
                      </div>
                      <p v-if="program.description" class="pt-4">
                        {{ program.description }}
                      </p>
                    </v-row>
                    <v-row v-else justify="center" align="center">
                      <div class="d-flex flex-column mt-2">
                        <div>
                          <v-icon size="50" color="primary">{{
                            program.icon
                          }}</v-icon>
                        </div>
                        <div class="headline black-text normal-break">
                          {{ program.title }}
                        </div>
                      </div>
                      <p v-if="program.description" class="pt-2">
                        {{ program.description }}
                      </p>
                    </v-row>
                  </v-container>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-card>
    </v-container>
    <slot></slot>
  </v-tab-item>
</template>

<script>
export default {
  name: 'tab-items',
  props: ['greeting', 'invitation', 'listing', 'programs', 'type'],
};
</script>
