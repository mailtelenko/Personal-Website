<template>
  <div v-bind:class="{ 'expand' : expand_element}">
    <div
      v-on:click="toggle_element"
      v-click-outside="hide"
      :class="{'expanded' : expand_element}"
      v-bind:style="{ 'background-image': 'linear-gradient(140deg, var(--panel_colour), 78%, ' + element_data.accent + '), url(/images/' + element_data.image + ')'}"
    >
      <div class="above_fold">
        <h3>{{ element_data.name }}</h3>
        <p class="year">{{ element_data.dates }}</p>

        <div class="intro">
          <p v-html="element_data.description"></p>
        </div>
      </div>

      <div :class="{'expand_below_fold': expand_element}" class="below_fold">
        <p v-show="element_data.location != null" class="location">
          <font-awesome-icon class="icon" icon="map-marker-alt" />
          {{ element_data.location }}
        </p>

        <div
          id="expand_points_cont"
          v-on:click="click_point"
          v-bind:class="{ 'expand' : expand_element}"
        >
          <CardScroll :element_data="element_data"></CardScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume_element::after {
  content: " ";

  width: 16px;
  height: 16px;

  background-color: var(--background-colour);

  position: absolute;

  left: 29px;
  top: 71px;

  border: solid 5px var(--panel_dark_embed);
  border-radius: 100%;
}

.resume_element > div {
  margin: 30px 0px 0px 90px;

  padding: 35px 30px;
  min-height: 120px;
  max-height: 130px;

  background-size: cover;
  background-position: center;

  position: relative;

  overflow: hidden;

  display: inline-grid;

  width: calc(100% - 90px - (35px * 2) - 30px);

  grid-template-columns: 45% 55%;
  grid-template-rows: auto;

  border-radius: 8px;
  transition-duration: 0.6s;

  box-shadow: -1px 6px 15px var(--box_shadow_colour);
}

.expand > div {
  max-height: 800px;

  grid-template-columns: 45% 55%;

  overflow-x: visible !important;

  transition-duration: 1s;
}

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
  margin: 0px;
  margin-top: 11px;

  position: relative;

  height: auto;

  font-size: 1.1rem;
}

.resume_element .intro {
  margin-top: 8px;
  position: relative;

  font-size: 1.15rem;
  height: calc(120px - 1.15rem - 40px);
  line-height: calc(120px - 1.15rem - 30px);
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

.resume_element .above_fold {
  height: 155px;
  width: 100%;

  display: inline-block;

  position: relative;
}

.resume_element > div:hover {
  max-height: 140px;

  box-shadow: -3px 8px 20px var(--box_shadow_colour_intense);
}

.expanded:hover {
  max-height: 800px !important;

  box-shadow: -3px 8px 20px var(--box_shadow_colour_intense);
}

#expand_points_cont {
  width: 100%;
  height: auto;

  padding-top: 60px;
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
    title: String,
    element_data: Object,
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