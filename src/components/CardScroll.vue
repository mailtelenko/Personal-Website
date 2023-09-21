<template>
  <div>
    <CardContainer 
      v-for         = "point in element_data.points"
      v-bind:key    = "point.title"
      :element_data = "point"
    ></CardContainer>
    
    <!-- Next/previous card buttons -->
    <div v-if="element_data.points.length > 1">
      <button v-on:click="scroll_list(false)" id="previous_card">
        <font-awesome-icon class="button_icon" icon="chevron-left" />
      </button>
      <button v-on:click="scroll_list(true)" id="next_card">
        <font-awesome-icon class="button_icon" icon="chevron-right" />
      </button>
    </div>
  </div>
</template>

<style scoped>

button {
  position: absolute;

  top: calc(50% - 25px);

  padding-left: 22px;

  width: 50px;
  height: 50px;
}

#previous_card {
  left: -20px;
  padding-left: 20px;
}

#next_card {
  right: -20px;
}
</style>

<script>
import CardContainer from "./CardContainer.vue"

var current_card = 0;

export default {
  props: {
    title: String,
    element_data: Object,
    display_props: Object
  },

  components: {
    CardContainer
  },

  data: function() {
    return {
      expand_element: true
    };
  },

  methods: {
    scroll_list(increment) {
      if (increment && current_card < this.$children.length - 1) current_card++;
      else if (!increment && current_card > 0) current_card--;
      else return;

      var el = this.$children[current_card].$el.firstChild;
      el.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
    }
  }
};
</script>