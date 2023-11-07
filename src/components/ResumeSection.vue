<template>
  <div
    class = "resume_page"
    :class = "{'grid' : display_grid}"
  >
    
    <Timeline
      v-if = "timeline"
    ></Timeline>

    <ResumeElement
      class = "resume_element"
      :class = "{'grid' : display_grid}"

      v-for          = "element in section_elements"
      v-bind:key     = "`${element.name}_${element.description}`"

      :name        = "element.name"
      :dates       = "element.dates"
      :description = "element.description"
      :location    = "element.location"
      :bg_accent   = "element.accent"
      :bg_image    = "element.image"
      :timeline    = "timeline"
      :points      = "element.points"
    ></ResumeElement>
  </div>  
</template>

<style>

.resume_page_container {
  background-color: green;

  min-height: 80%;
  height: auto;
  overflow: scroll;
  position: relative;
}

.resume_page {
  padding-bottom: 20px;
  padding-right:  30px;

  position: relative;
}


/* 
  When grid is enabled
*/
.resume_page.grid {
  display: inline-grid;

  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  row-gap: 0px;

  padding-left: 30px;

  width: calc(100% - 60px);
}

.resume_element.grid {
  margin-left: 15px;
}
</style>

<script>
import ResumeElement     from "./ResumeElement.vue";
import Timeline          from "./Timeline.vue";

export default {
  name: "ResumeSection",

  props: {
    title:            String,
    section_elements: Array,
    timeline:         Boolean,
    display_grid:     Boolean
  },

  components: {
    ResumeElement: ResumeElement,
    Timeline
  },

  data() {
    return {};
  }
};
</script>