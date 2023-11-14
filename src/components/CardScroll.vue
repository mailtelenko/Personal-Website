<template>
  <div id="container">
    <CardContainer 
      id = "card_container"

      :title    = "card_title"
      :subtitle = "card_subtitle"
      :topics   = "card_topics"
    ></CardContainer>
    
    <!-- 
      Section selection
     -->
    <ul
      v-if = "this.points && this.points.length > 1"
    >
      <li
       v-for        = "(point, index) in this.points" 
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
    title:  String,
    points: Array,
  },

  components: {
    CardContainer
  },

  data: function() {
    if (this.points) {
      return {
        card_title:    this.points[0].title, 
        card_subtitle: this.points[0].subtitle,
        card_topics:   this.points[0].content
      };
    } else {
      return {
        card_title:    null, 
        card_subtitle: null,
        card_topics:   []
      };
    }
  },

  methods: {
    update_card(index) {
      this.card_title    = this.points[index].title;
      this.card_subtitle = this.points[index].subtitle;
      this.card_topics   = this.points[index].content;
    }
  }
};
</script>