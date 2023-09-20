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

  background-color: var(--box_shadow_colour);
  width:            4px;

  /* TODO: If expanded, need to reduce the amount of height again */
  height:           calc(100% - 140px - 30px);

  overflow:         visible;

  /* Height of minimized element is 130px */
  top:  calc(130px / 2);

  /* Total width of the timeline block is 90px
     Width of the timeline itself is 4px. */
  left: calc(45px - 2px); 

  border-radius: 40px;
}
</style>

<script>
</script>