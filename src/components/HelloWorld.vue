<template>
  <div class="hello">
    <h1 style="font-family:fantasy;">{{ msg }}</h1>
    <p>
      This is an introduction tutorial to quickly show you around Los Santos and Mafia City Roleplay.
      If you find anything you feel would benefit new players, or are confused on anything please ask on the #Support channel on discord. 
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #79183A;
}

p {
  margin: 0px 250px 0px 250px;
  color: white;
}
</style>
