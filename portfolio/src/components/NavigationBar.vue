<template>

<div class="Navigation-bar" >
    <v-card style="width: 4vw; height: 4vw; display: flex; justify-content: center; align-items: center;">
        <v-btn style="width: 100%; height: 100%;"><v-icon size="x-large" icon="mdi-plus-circle"></v-icon></v-btn>
    </v-card>

    <v-spacer></v-spacer>

    <v-card style="width: 90%; height: 4vw; display: flex;  justify-content: space-between; align-items: center; ">
        <div>
            <v-icon icon="mdi-magnify"></v-icon>
            <input type="search" placeholder="Search">
        </div>
        <div>
            <v-btn icon="mdi-view-grid"></v-btn>
            <v-btn icon="mdi-format-list-bulleted"></v-btn>
        </div>
    </v-card>
</div>

</template>

<script>


export default {
    name: 'NavigationBar',
    
}



</script>

<style>

.Navigation-bar{
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin: 3% 10%;
}



</style>