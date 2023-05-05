<template>
  <div id="app">
    <template>
      <v-bottom-navigation v-model="value">
        <v-btn value="Profile" @click="goToProfile()">
          <span>Profile</span>

          <v-icon>mdi mdi-account</v-icon>
        </v-btn>

        <v-btn value="Contact" @click="goToContact()">
          <span>Contact</span>

          <v-icon>mdi mdi-account-box</v-icon>
        </v-btn>

        <v-btn value="Project" @click="goToProject()">
          <span>Project</span>

          <v-icon>mdi mdi-file-check-outline</v-icon>
        </v-btn>

      </v-bottom-navigation>
    </template>
    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',
   data: () => ({
      //
   }),
   methods: {
      goToProfile(){
        this.$router.push('/Profile');
     },
      goToContact() {
        this.$router.push('/Contact');
     },
      goToProject() {
        this.$router.push('/Project');
     },
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.router-link-exact-active {
  color: blue;
}
</style>