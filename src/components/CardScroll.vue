<template>
  <div id="container">
    <CardContainer 
      id = "card_container"

      :title  = "card_title"
      :topics = "card_topics"
    ></CardContainer>
    
    <!-- 
      Section selection
     -->
    <ul
      v-if = "this.element_data.points.length > 1"
    >
      <li
       v-for        = "(point, index) in this.element_data.points" 
       v-bind:key   = "point.title"
       @click       = "update_card(index)"
       >
        {{ point.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

#container {
  position: relative;

  display: flex;
}

#card_container {
  width: 60%;
}


/* 
  Card section selection options
*/
ul {
  position: absolute;
  
  width: 25%;
  right: 20px;
  
  padding: 0px;
  margin:  0px;

  /* 
    Matches the margin applied to the 
    card section title.
  */
  top: calc(70px + 1.5rem);
}

li {
  background-color: var(--panel_overlay);
  width: fit-content;

  /* Configure the padding without affecting the width/height */
  -moz-box-sizing:    border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing:         border-box;

  padding:       10px;
  margin-bottom: 10px;

  /* 
    Align to the R hand side of parent
   */
  margin-left: auto;
  margin-right: 0px;

  border-radius: 10px;

  list-style: none;

  box-shadow: 0px 5px 10px var(--box_shadow_colour);

  transition: all .5s ease;

}

li:hover {
  transform: translateX(-10px);
 
  box-shadow: 0px 5px 10px var(--box_shadow_colour_intense);
 
  cursor: pointer;
  
}

li:active {
  transform: scale(.98);
}

</style>

<script>
import CardContainer from "./CardContainer.vue"

export default {
  props: {
    title:         String,
    element_data:  Object,
  },

  components: {
    CardContainer
  },

  data: function() {
    return {
      card_title:  this.element_data.points[0].title, 
      card_topics: this.element_data.points[0].content
    };
  },

  methods: {
    update_card(index) {
      this.card_title  = this.element_data.points[index].title;
      this.card_topics = this.element_data.points[index].content;
    }
  }
};
</script>