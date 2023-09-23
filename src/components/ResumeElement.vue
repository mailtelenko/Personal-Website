<template>
  <div v-bind:class = "{'expand' : expand_element}">
    <div class="template_pin"> </div>
    <div
      v-on:click      = "toggle_element"
      v-click-outside = "hide"
      :class          = "{'expanded' : expand_element}"
      v-bind:style    = "{'background-image': 'linear-gradient(140deg, var(--panel_colour), 78%, ' + element_data.accent + '), url(/images/' + element_data.image + ')'}"
      class           = "resume_element_container"   
    >
      <div class="resume_header">
        <h3>{{ element_data.name }}</h3>
        <p class="year">{{ element_data.dates }}</p>

        <div class="intro">
          <p v-html="element_data.description"></p>
        </div>
      </div>

      <div 
        :class = "{'expand_below_fold': expand_element}" 
        class  = "below_fold"
      >
        <p 
          v-show = "element_data.location != null" 
          class  = "location"
        >
          <font-awesome-icon class="icon" icon="map-marker-alt" />
          {{ element_data.location }}
        </p>

        <div
          id           = "content_container"
          v-on:click   = "click_point"
          v-bind:class = "{'expand' : expand_element}"
        >
          <CardScroll :element_data="element_data"></CardScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*
  Pin adjacent to the element that is placed on the timeline
*/
.template_pin {
  width:  16px;
  height: 16px;

  background-color: var(--background-colour);

  position: absolute;

  /* Timeline is 90px in width, 
     circle width is 16px
     border width is 5px (each side) */
  left: calc(-1 * (45px + 8px + 5px));

  /*
    Height of the element is 130px
    Circle width is 16px
    border width is 5px

    TODO: Fix hover
  */
  top:  calc(130px/2 - 8px - 5px);


  border:        solid 5px var(--panel_dark_embed);
  border-radius: 100%;
}

/*
  Parent div for the entire element
*/
.resume_element {
  margin-left:   90px; /* Margin for the timeline */
  margin-bottom: 30px; /* Margin between elements */

  /* Position relative for the timeline pin placement */
  position: relative;
}

/*
  Parent div for the resume element box
*/
.resume_element_container {  

  /* 
    We have to specify the max height here instead of just height
    in order for the opening animation to occur smoothly
  */
  height:     auto;
  max-height: 140px;

  position: relative;
  display:  block;

  /* Configure the interior as a grid */
  /* grid-template-columns: 45% 55%; */
  /* grid-template-rows:    auto; */

  /* Configure the background */
  background-size:     cover;
  background-position: center;
  box-shadow:          -1px 6px 15px var(--box_shadow_colour);

  /* Hide below the fold content */
  overflow: hidden;

  border-radius:       8px;

  transition-duration: 0.8s;
}

.expand > div {
  max-height: 1000px;

  overflow-x: visible; /* TODO: Needed? */

  transition-duration: 1s;
}

/*
  Header of the element. Visible before and after the element is
  expanded.
*/
.resume_header {
  height: 150px; /* TODO: Change to var? */
  width:  100%;

  display:  inline-block;
  position: relative;


  /* Configure the padding without affecting the width/height */
  -moz-box-sizing:    border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing:         border-box;
  
  padding-top:  15px;
  padding-left: 20px;

  background-color: var(--box_shadow_colour);

  transition-duration: .7s;
}

.expand .resume_header {
  height: 160px;

  padding-top: 25px;
  padding-left: 35px;

}


/* 
  Title styling
*/
.resume_element h3 {
  height: auto;
  margin: 0px;

  white-space: nowrap;

  font-size: 1.5rem;
}

.resume_element.half h3, .resume_element.slim h3 {
  white-space: normal;
}

.resume_element .year {
  margin:     0px;
  margin-top: 11px;

  height: auto;

  font-size: 1.1rem;
}

.resume_element .intro {
  margin-top: 0px;

  width: 100%;

  font-size: 1.15rem;
  word-wrap: none;
}

.resume_element .location {
  position: absolute;

  right: 45px;
  top: 20px;

  text-shadow: 0px 0px 3px var(--box_shadow_colour_intense);
}

.icon {
  padding-right: 10px;
}

.resume_element .intro p {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.resume_element > div:hover {
  max-height: 150px;

  box-shadow: -3px 8px 20px var(--box_shadow_colour_intense);
}

.expanded:hover {
  max-height: 800px !important;

  box-shadow: -3px 8px 20px var(--box_shadow_colour_intense);
}

.below_fold {
  width: 100%;

  display: inline-block;

  max-height: 0px;

  overflow: visible;

  opacity: 0;

  transition-duration: 0.8s;
}

.expand_below_fold {
  max-height: 1000px;

  overflow: visible;

  opacity: 1;

  transition-duration: 0.8s;
}
</style>

<script>
import CardScroll from "./CardScroll.vue";

export default {
  props: {
    title:         String,
    element_data:  Object,
    display_props: Object
  },

  components: {
    CardScroll
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
    },

    click_point(event) {
      if (this.expand_element) 
        event.stopPropagation();
    }
  }
};
</script>