<template>
  <v-row class="secondary-bg">
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <v-icon color="white" size="110" class="mt-n12 ml-auto mr-auto"
          >mdi-menu-down</v-icon
        >
      </v-row>
    </v-container>
    <v-container class="pt-0">
      <v-row class="mr-3 ml-3">
        <p>
          A háziorvoslás és házi gyermekorvoslás jövőjét továbbra is kérdések
          sokasága övezi, így idén is szeretnénk górcső alá venni azokat a
          problémákat, melyeket mindennapi munkánk során saját bőrünkön
          tapasztalunk. Szeretnénk továbbra is abban a szellemben folytatni a
          rendezvényszervezést, hogy a HAOSZ aktuális konferenciája ne egy
          megszokott termékismertető ankét legyen, sokkal inkább szolgálja a
          kollégák részéről felmerülő kérdések feltárását, megválaszolását – ha
          kell, online körülmények között.
        </p>
        <p>
          A HAOSZ továbbra is elkötelezett támogatója az alapellátás
          megreformálásának, hiszünk a változás szükségességében, az egységes
          álláspont képviseletének jelentőségében, a jó minőségű alapellátás
          értékében.
        </p>

        <!-- <p>
          A fenti sorok szellemében szeretettel várunk Benneteket idén online
          konferenciánkon. Sorsunkat alapvetően meghatározó témából idén is
          bővelkedni fogunk. Mindazon túl, hogy konferenciánkon kiemelt figyelmet
          szeretnénk szentelni a deklarációban megfogalmazott kérdések
          megválaszolására, természetesen idén sem maradnak el az orvosszakmai,
          orvostechnológiai előadások, élő bemutatók sem. Kiemelt jelentőségűnek
          tartjuk, hogy a résztvevők az előttünk álló változásokról első kézből
          értesüljenek konferenciánkon.
        </p>
        <p>
          Részletes programtervvel hamarosan jelentkezünk, az előadóinkkal történő
          egyeztetések folyamatban vannak.
        </p>
        <p>
          Bízunk benne, hogy rendezvényünk felkeltette az érdeklődésed, és
          hamarosan a résztvevők között köszönthetünk!
        </p>-->
      </v-row>
    </v-container>
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <v-icon color="#E9E9E9" size="110" class="mb-n16 ml-auto mr-auto"
          >mdi-menu-down</v-icon
        >
      </v-row>
    </v-container>
    <!-- <v-container>
      <v-row>
        <v-col cols="12" md="6">
          A fenti sorok szellemében szeretettel várunk Benneteket idén online
          konferenciánkon. Sorsunkat alapvetően meghatározó témából idén is
          bővelkedni fogunk.
          Mindazon túl, hogy konferenciánkon kiemelt figyelmet
          szeretnénk szentelni a deklarációban megfogalmazott kérdések
          megválaszolására,
        </v-col>
        <v-col cols="12" md="6">
          természetesen idén sem maradnak el az orvosszakmai,
          orvostechnológiai előadások, élő bemutatók sem. Kiemelt jelentőségűnek
          tartjuk, hogy a résztvevők az előttünk álló változásokról első kézből
          értesüljenek konferenciánkon.
        </v-col>
      </v-row>
    </v-container>-->
  </v-row>
</template>

<script>
import welcome from '../../../public/welcome.json';
export default {
  data() {
    return {
      tab: null,
      welcome,
    };
  },
};
</script>
<style scoped>
.secondary-bg {
  background-color: #e9e9e9;
}
</style>
