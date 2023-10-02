<template>
  <div class="card">
    <div 
      id   = "emoji"
      v-if = "check_defined(emoji)"
    >
      {{ emoji }}
    </div>
    <div>

      <div 
        v-if = "check_defined(title)"
        id   = "header"
      >
        <h4 :key="title">{{ title }}</h4>
      </div>
      <ul id="bullets">
        <li 
          v-for      = "bullet in bullets"
          v-bind:key = "bullet"
        >
          {{ bullet }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.card {
  background-color: var(--panel_overlay);

  border-radius: 10px;

  white-space: normal;

  width:     750px;
  max-width: 100%;

  position: relative;

  display:        flex;
  flex-direction: row;

  /* Configure the padding without affecting the width/height */
  -moz-box-sizing:    border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing:         border-box;

  padding-top:    10px;
  padding-bottom: 10px;
  padding-left:   15px;
  padding-right:  30px;

  margin-bottom: 20px;

  box-shadow: 0px 5px 10px var(--box_shadow_colour);

}

/*
  Title of the card
*/
.card h4 {
  font-size: 1.3rem;

  margin:       0px;
  padding-top:  10px;
  padding-left: 10px;

  line-height: 2.3rem;
}

.card #emoji {
  width:         2.3rem;
  height:        2.3rem;
  border-radius: 30%;

  font-size:   2.3rem;
  line-height: 2.4rem;

  padding: 10px;
  
  background-color: var(--panel_colour);
  box-shadow:       0px 2px 6px var(--box_shadow_colour);
}

/*
  Card body
*/
#bullets li{
  line-height: 1.4rem;

  padding-top:    5px;
  padding-bottom: 5px;
}

li:last-child {
  padding-bottom: 0px!important;
}

</style>

<script>
export default {
  props: {
    title:         String,
    emoji:         String,
    bullets:       Array,
  },

  data: function() {
    return {
      expand_element: true
    };
  },

  methods: {
    check_defined(param) {
      return typeof param !== 'undefined';
    },

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