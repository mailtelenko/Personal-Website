<template>
  <div>
    <div id="profile_pic_container">
      <img id ="profile_picture"
          alt="Profile picture"
          v-bind:src="require('../assets/images/profile.jpg')"
      />
    </div>

    <div id="info">
      <h1 class="title">
        Liam Telenko
      </h1>

      <p id="bio">{{ bio }}</p>
    </div>

    <div id="button_container">
      <button 
        v-on:click="$emit('contact_button', 'show_contact')"
      >
        Contact Me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      show_contact: false
    };
  },

  props: {
    bio: String
  },

  methods: {}
};
</script>

<style scoped>
/*
  Container element
*/
#profile {
  height: 100vh;

  display:   flex;
  flex-flow: column;

  position: relative;

  margin: 0px;

  background-color: var(--panel_colour);
}

/*
  Profile photo section
*/
#profile_pic_container {
  height: 40vh;

  /*
    Center the child image
    (horizontal & vertical)
  */
  display:         flex;
  justify-content: center;
  align-items:     center;

}

#profile_picture {
  width:     55%;
  min-width: 40px;
  max-width: 30vh;

  border-radius: 100%;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
}

/*
  Info section 
*/
#info {
  color: var(--default_text);
}

/* 
  Name text (header)
*/
.title {
  height: 7vh;

  font-size:   2.5rem;
  line-height: 7vh;

  width: 100%;
  margin: 0px;

  text-align: center;
}

/*
  Bio text
*/
#bio {
  max-height: 30vh;
  width:  80%;
  
  overflow-y: scroll;

  margin: 5vh 10%;

  font-size:   1.1rem;
  line-height: 1.8rem;

  background-color: var(--panel_overlay);
  border-radius: 10px;

  /* Configure the padding without affecting the width/height */
  -moz-box-sizing:    border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing:         border-box;

  padding: 10%;  
}

/*
  Contact button
*/
#button_container {
  width: 100%;

  /* Fill the rest of the vertical space */
  flex:  1 1 auto;
  
  display:         flex;
  justify-content: center;
  align-items:     center;
}

@media only screen and (max-width: 1100px) {
  #profile {
    width: 100vw;
  }
}
</style>
