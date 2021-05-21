<template>
  <div id="app">
    <button class="closeBtn">X</button>
    <img alt="MCRP logo" src="./assets/mcrp_logo.png">
    <HelloWorld msg="Welcome to Mafia City Roleplay!"/>
    <div style="background-color: #fff;">
      <b-tabs content-class="mt-0" fill>
        <b-tab title="User interface" active><UI /></b-tab>
        <b-tab title="Communication"><Communication /></b-tab>
        <b-tab title="Commands"><Commands /></b-tab>
        <b-tab title="Jobs"><Jobs /></b-tab>
        <b-tab title="FAQ"><FAQ /></b-tab>
        <b-tab title="Rules"><iframe src="https://docs.google.com/document/pub?id=1ZVv8grgOdAWvpAPBNf6AIjDdr9Yecf3yXWuAM5c6zkI&amp;embedded=true" width="1350" height="676" style="padding: 10px;"></iframe></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UI from './components/UI.vue'
import Commands from './components/Commands.vue'
import Communication from './components/Communication.vue'
import Jobs from './components/Jobs.vue'
import FAQ from './components/FAQ.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UI,
    Commands,
    Communication,
    Jobs,
    FAQ
  }
}
</script>

<style>
body {
  background-image: url("./assets/gta5mcrp.jpg");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 1350px;
  height: 965px;
  background-image: url('./assets/city_jobs.png');
  background-size: cover;
  border: 2px #79183A solid;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #fff !important;
  background-color: #79183A !important;
  border-color: #79183A !important;
}

.mt-0 {
  background-color: #fff;
  padding-top: 10px;
  border-top: 2px #79183A solid;
  height: 695px;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  color: #fff !important;
  background-color: #C46285 !important;
}

.nav-pills .nav-link {
  color: #79183A;
}

.nav-tabs .nav-link {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.nav-fill .nav-item .nav-link, .nav-justified .nav-item .nav-link {
    background-color: #C46285;
    color: #fff !important;
}

.badge {
    background-color: #79183A;
    padding: 6px 0px 6px 0px !important;
    width: 25px;
    text-align: center;
}

.closeBtn {
  color: #fff;
  float: right;
  position: relative;
  background-color: #79183A;
  border: none;
}
</style>
