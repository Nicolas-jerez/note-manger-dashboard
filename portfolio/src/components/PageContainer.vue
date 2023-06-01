<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        
      >
        <v-list>
          <v-list-item
            title="Notes"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-clipboard-list" title="All notes" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Personal 1" value="perso1"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Personal 2" value="perso2"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Personal 3" value="perso3"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Favorites notes" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <NavigationBar/>
        <div class="">

        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>
  
  <script>
  import NavigationBar from './NavigationBar.vue';
  
  export default {
    name: 'PageContainer',

    components: {
      NavigationBar
    }
    
  }
  
  
  
  </script>
  
  <style>

  .add-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }


  
  </style>