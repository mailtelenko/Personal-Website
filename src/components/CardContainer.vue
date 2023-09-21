<template>
  <div>
    <div class="card_container">
      <h4>{{ element_data.title }}</h4>

      <Card 
        v-for         = "topic in element_data.content" 
        v-bind:key    = "topic.title" 
        :element_data = "topic"
      ></Card>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  position: relative;

  width: 50%;

  /* Configure the padding without affecting the width/height */
  -moz-box-sizing:    border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing:         border-box;

  padding-left: 40px;
}

/*
  Title
*/
.card_container h4 {
  font-size: 1.5rem;
}
</style>
<script>
import Card from "./Card.vue";

export default {
  props: {
    title:         String,
    element_data:  Object,
    display_props: Object
  },

  components: {
    Card
  },

  data: function() {
    return {
      expand_element: true
    };
  },

  methods: {
    hide() {
      this.expand_element = false;
    },

    toggle_element() {
      if (this.display_props.expand) {
        this.expand_element = !this.expand_element;
      }
    }
  }
};
</script>