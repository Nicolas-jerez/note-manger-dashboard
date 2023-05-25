<template>
  <v-theme-provider>
  <v-container class="bg-background" style=" display: flex; align-items: center; justify-content: space-around;  flex-direction: column;  height: 100vh;">
    <div>
      <h1 class="text-title">Bonjour,<br>Je m'apelle Nicolas</h1>
      <h3 class="text-title font-weight-regular">Développeur web Frontend Vuejs</h3>
      <p class="text-plaintext title-home">Etudiant en BUT informatique et passionné par le développement frontend avec VueJs, je suis à la recherche d’une alternance.</p>
    </div>
    <v-card class="icone-btn">
      <v-btn icon="mdi-vuetify" variant="tonal"></v-btn>
      <v-btn icon="mdi-vuetify" variant="tonal"></v-btn>
      <v-btn icon="mdi-vuetify" variant="tonal"></v-btn>
      <v-btn icon="mdi-vuetify" variant="tonal"></v-btn>
    </v-card>
  </v-container>
</v-theme-provider>
</template>

<script>

export default {
  name: 'HomePage',
  
}



</script>

<style>

.title-home{
  width: 36%;
  
}

h1, h2, p{
  margin: 15px 0 15px 0;
}

h1{
  font-size: 3em;
}

h3{
  font-size: 1.7em;
}

.icone-btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 25vw !important;
  background: none;
}

</style>