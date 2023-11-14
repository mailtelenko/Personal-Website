<!-- 
  Container for a card component.
  Contains the title and iterates over each card to create
 -->
<template>
  <div>
    <div class = "card_container">
      <transition
        name = "slide-fade" 
        mode = "out-in"
      >
        <div :key="title">
          <h4>{{ title }}</h4>
          <h3 
            v-if = "subtitle"
            >
            {{ subtitle }}
          </h3>
        </div>
      </transition>

      <transition-group 
        name = "list"
      >
        <Card 
          v-bind:key    = "`${topic.title}_${title}`" 
          v-for         = "topic in topics"

          :title   = "topic.title"
          :emoji   = "topic.emoji"
          :bullets = "topic.bullets"
        ></Card>
      </transition-group>
    </div>
  </div>
</template>

<!-- Transition CSS -->
<style scoped>
/* 
  Card movement
*/
.list-move,
.list-enter-active {
  transition: all .7s ease;
}
.list-leave-active {
  transition: all .8s ease;
}

.list-enter,
.list-leave-to {
  transform: translateY(50px);
  opacity:   0;
}

.list-leave-active {
  position: absolute;
}

/* 
  Title animation
*/
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity:   0;
}
</style>

<style scoped>
.card_container {
  position: relative;

  height: 450px;
  width:  100%;

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
  font-size:   1.5rem;
  line-height: 1.5rem;

  margin-top:    40px;
  margin-bottom: 20px;
}

.card_container h3 {
  font-size:   1.2rem;
  
  margin-bottom: 30px;
}
</style>

<script>
import Card from "./Card.vue";

export default {
  props: {
    title:         String,
    subtitle:      String,
    topics:        Array
  },

  components: {
    Card
  },

  data: function() {
    return {};
  },

  methods: {}
};
</script>