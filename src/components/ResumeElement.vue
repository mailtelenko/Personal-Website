<template>
  <div>
    <div class="template_pin"> </div>
    <div
      v-on:click      = "toggle_element"
      v-click-outside = "hide"
      :class          = "{'expand' : isActive}"
      v-bind:style = "{'background-image': 'linear-gradient(140deg, var(--panel_colour), 78%, ' + bg_accent + '), url(' + resolved_bg + ')'}"
      id              = "resume_element_container"   
    >
      <div class = "resume_header">
        <h3 id = "name">{{ name }}</h3>
        <p  id = "year">{{ dates }}</p>

        <div id = "intro">
          <p v-html="description"></p>
        </div>
      </div>

      <div 
        :class = "{'expand': isActive}" 
        id     = "content"
      >
        <p 
          v-show = "location != null" 
          id     = "location"
        >
          <font-awesome-icon 
            id   = "icon"
            icon = "map-marker-alt" 
          />
          {{ location }}
        </p>

        <div
          id           = "content_container"
          v-on:click   = "click_point"
          v-bind:class = "{'expand' : isActive}"
        >
          <CardScroll :points="points"></CardScroll>
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
  top:  calc(140px/2 - 8px - 5px);


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
#resume_element_container {  

  /* 
    We have to specify the max height here instead of just height
    in order for the opening animation to occur smoothly
  */
  height:     auto;
  max-height: 140px;

  position: relative;
  display:  block;

  /* Configure the background */
  background-size:     cover;
  background-position: center;
  box-shadow:          -1px 6px 15px var(--box_shadow_colour);

  /* Hide below the fold content */
  overflow: hidden;

  border-radius:       8px;

  transition-duration: 0.8s;
}

#resume_element_container.expand {
  max-height: 1000px;

  overflow-x: visible; /* TODO: Needed? */

  transition-duration: 1s;
}

/*
  Hover animation for the entire element
*/
#resume_element_container:hover {
  box-shadow: -3px 8px 20px var(--box_shadow_colour_intense);
}

/*
  When the element is not active, increase
  the height slightly when hovered
*/
#resume_element_container:hover:not(.expand) {
  max-height: 150px;
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

  transition-duration: .7s;
}

/*
  Remove the default padding from the text elements
*/
.resume_header #name, #year, #intro {
  margin: 0px;
}

/*
  Adjust the header when the element is expanded
*/
.expand .resume_header {
  height: 160px;

  padding-top:  25px;
  padding-left: 35px;

  border-bottom-left-radius:  10px;
  border-bottom-right-radius: 10px;

  background-color: var(--panel_header);
}


/* 
  Header text styling
  Only visible after expansion
*/
#name {
  font-size: 1.5rem;
}

#year {
  font-size: 1.1rem;

  margin-top: 11px;
}

#intro {
  font-size: 1.15rem;
}


/*
  Header location pin
*/
#location {
  position: absolute;

  right: 45px;
  top:   20px;

  text-shadow: 0px 0px 3px var(--box_shadow_colour_intense);
}

#icon {
  padding-right: 10px;
}


/*
  Below the fold contentelement
*/
#content {
  max-height: 0px;

  opacity: 0;

  transition-duration: 0.8s;
}

#content.expand {
  max-height: 1000px;

  opacity: 1;
}
</style>

<script>
import CardScroll from "./CardScroll.vue";

export default {
  props: {
    name:          String,
    dates:         String,
    description:   String,
    location:      String,
    bg_accent:     String,
    bg_image:      String,

    points:        Array,

    display_props: Object
  },

  components: {
    CardScroll
  },

  data: function() {
    return {
      isActive:    true,
      resolved_bg: require('../assets/images/' + this.bg_image)
    };
  },

  methods: {
    hide() {
      this.isActive = false;
    },

    toggle_element() {
      if (this.display_props.expand) {
        this.isActive = !this.isActive;
      }
    },

    click_point(event) {
      if (this.isActive) 
        event.stopPropagation();
    }
  }
};
</script>