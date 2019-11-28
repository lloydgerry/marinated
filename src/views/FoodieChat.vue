<template>
<div>
  <NavBar />
</div>
</template>

<script >
import NavBar from "../components/layout/NavBar.vue"


export default {
  name: "FoodieChat",
  components: {
    NavBar
  },
  mounted () {
    let loadWatsonAssistantChat = document.createElement('script');
    var options = {
      integrationID: '0fa522cf-3cc3-4e2f-ad53-fcee27d2ce08',
      region: 'us-south'
      };
    loadWatsonAssistantChat.setAttribute('src', 'https://assistant-web.watsonplatform.net/loadWatsonAssistantChat.js');

    // document.window.appendChild(loadWatsonAssistantChat(options)
    //   .then(function(instance){
    //     instance.render();
    //   })
    // );

  window.loadWatsonAssistantChat(options).then(function(instance){
    instance.render();
  });
  }
}
</script>

<style>

</style>