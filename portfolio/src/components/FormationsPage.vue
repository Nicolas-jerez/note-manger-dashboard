<template>
    <v-container theme="bg-bacground" style="height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">

      <div class="title-formations-exp">
        <v-btn variant="text">Formations</v-btn>
        <p>|</p>
        <v-btn variant="text">Expérience</v-btn>
      </div>
      <div class="content-formation-exp" style="text-align: center; display: flex; align-items: center; justify-content: center;">
        <div class="left-icone">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <div class="right-content-formations">
          <div class="item-formations-exp">
            <h3>BUT informatique Valence | 2022-23</h3>
            <p>2e année - Parcours A réalisation d'applications : conception, développement, validation</p>
          </div>
          <div class="item-formations-exp">
            <h3>BUT informatique Valence | 2021-22</h3>
            <p>1er année - Parcours A réalisation d'applications : conception, développement, validation</p>
          </div>
          <div class="item-formations-exp">
            <h3>Lycée général (lycée de l’Arc, Orange) | 2020-21</h3>
            <p>Baccalauréat général mention bien - Option sciences de l’ingénieur, mathématiques et mathématiques expertes</p>
          </div>
        </div>
      </div>
    </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'FormationsPage',
    
  }
  
  
  
  </script>
  
  <style>
  
.right-content-formations{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 45vh;
}
.left-icone{
  height: 45vh;
  width: 10vh;
  display: flex;
  border-left: 3px solid white;
  justify-content: space-around;
  flex-direction: column;

}
.left-icone .circle {
  margin-left: -1.1vh;
}

.item-formations-exp{
  text-align: left;
}

.circle{
  width: 2vh;
  height: 2vh;
  border-radius: 1vh;
  background: white;
}

.title-formations-exp{
  width: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
}

.title-formations-exp button,  
.title-formations-exp p {
  font-size: x-large;
  text-transform: none;
}

  </style>