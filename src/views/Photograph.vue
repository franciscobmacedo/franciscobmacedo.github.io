<template>
  <div>
photography stuff
<audio controls>
  <source :src="require(`@/assets/audio/${file}`)" type="audio/wav">
Your browser does not support the audio element.
</audio>
  </div>
  
</template>

<script>
export default {
data(){
  return{
    file: "razoes/RAZÕES PARA ACORDAR CEDO E IR AO SHOPPING.wav"
  }
}
}
</script>

<style>

</style>