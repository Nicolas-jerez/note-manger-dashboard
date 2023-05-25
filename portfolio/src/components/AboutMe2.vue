<template>
    <v-container theme="Vuetheme" style="display: flex; justify-content: space-between; height: 90vh;">
      
        <div class="info-about-left">
            <div class="photo-replace" style="width: 10vw; background: white; height: 10vw; border-radius: 5vw;"></div>
            <div class="title-info">
                <p>Nicolas JEREZ</p>
                <p>19 ans</p>
                <p>Permis B - Véhiculé</p>
                <p>Lyon - 69000</p>
                <p>BUT Informatique</p>
                <p>Développeur Frontend</p>
            </div>
        </div>
        <div class="info-about-right">
            <div class="top-title-about">
                <h1>A propos de moi</h1>
                <v-btn variant="tonal"  class="text-title" id="show-btn">Voir moins <v-icon icon="mdi-arrow-right"></v-icon></v-btn>
                         
            </div>
            <div class="content-about">
                <p>Bienvenue sur mon portfolio de développeur ! Je suis passionné par la programmation et j'ai acquis de solides compétences en développement de logiciels au fil des années. Au cours de mon parcours professionnel, j'ai travaillé sur une variété de projets allant de la création de sites web à des applications mobiles complexes.</p>
                <br>
                <p>Bienvenue sur mon portfolio de développeur ! Je suis passionné par la programmation et j'ai acquis de solides compétences en développement de logiciels au fil des années. Au cours de mon parcours professionnel, j'ai travaillé sur une variété de projets allant de la création de sites web à des applications mobiles complexes.</p>
                <br>
                <p>Bienvenue sur mon portfolio de développeur ! Je suis passionné par la programmation et j'ai acquis de solides compétences en développement de logiciels au fil des années. Au cours de mon parcours professionnel, j'ai travaillé sur une variété de projets allant de la création de sites web à des applications mobiles complexes.</p>
            </div>
        </div>
  
    </v-container>
  </template>
  <script>
  export default {
    name: 'AboutMe2',
    
  } 
  </script>
  <style>
  .info-about-left{
    width: 30%;
    height: auto;
    display: flex;
    margin-top: 5vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.title-info{
    font-size: x-large;
}

.title-info p{
    border-bottom: 1px solid white;
    margin-bottom: 3vh;
    padding-bottom: 0.5vh;
}

.top-title-about{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

  .info-about-right{
    width: 65%;
    height: auto;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content-about  p{
    font-size: large;
  }



  </style>