<template>
<v-app-bar style="opacity: 1;" class="navbar bg-background text-title">
    <v-btn variant="text" id="homepagebtn">Nicolas.</v-btn>
    <v-spacer/>
    <v-card  variant="text" class="navlinks">
      <v-btn variant="text">A propos</v-btn>
      <v-btn variant="text">Formations</v-btn>
      <v-btn variant="text">Compétences</v-btn>
      <v-btn variant="text">Projet</v-btn>
      <v-btn variant="text">Contact</v-btn>
    </v-card> 
</v-app-bar>

  </template>
  
  <script>
  
  export default {
    name: 'NavBar',
    
  }
  
  
  
  </script>
  
  <style>
 
.navbar{
  width: 100%;
  height: 10vh;
  border-bottom: 1.5px solid rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 5%;
  position: fixed;
  background: #1A1A1A;
  z-index: 10;
  color: rgba(255, 255, 255, 1) !important;
}

#homepagebtn{
  font-size: xx-large;
  text-transform: none;
  line-height: 0;
}

.navlinks{
  width: 55%;
  display: flex;
  justify-content: space-between;

}

.navlinks button{
    text-transform: none;
}



  
  </style>