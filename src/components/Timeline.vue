<template>
  <div class="timeline"> </div>
</template>

<style scoped>

.no_timeline::before,
.no_timeline::after {
  display: none;
}

.timeline {
  position: absolute;

  background-color: var(--timeline_colour);
  width:            4px;

  /* TODO: If expanded, need to reduce the amount of height again */
  /*
    Size of element is 140px
    30px of margin between elements
    Timeline button height is 16px
  */
  height:           calc(100% - 140px - 30px - 16px);

  overflow:         visible;

  /* Height of minimized element is 130px */
  top:  calc(140px / 2);

  /* Total width of the timeline block is 90px
     Width of the timeline itself is 4px. */
  left: calc(45px - 2px); 

  border-radius: 40px;
}
</style>

<script>
</script>