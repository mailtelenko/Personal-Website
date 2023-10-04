<template>
  <div>
    <div id="profile_pic_container">
      <img id ="profile_picture"
          alt="Profile picture"
          src="@/assets/Liam_Telenko.jpg"
      />
    </div>

    <div id="info">
      <h1 class="title">
        Liam Telenko
      </h1>

      <p id="bio">{{ bio }}</p>
    </div>

    <button 
      v-on:click="$emit('contact_button', 'show_contact')"
    >
      Contact Me
    </button>
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
  height: 35vh;

  font-size: 1.1rem;

  /* Configure the padding without affecting the width/height */
  -moz-box-sizing:    border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing:         border-box;

  padding-left:  10%;
  padding-right: 10%;

  margin: 0;

  /* Vertically & horizontally center */
  display:         flex;
  justify-content: center;
  align-items:     center;

}

/*
  Contact button
*/
button {
  position: absolute;

  bottom: calc((18vh - var(--button_height))/2);
  left:   calc((100% - 155px) / 2);

  width: auto;
}

@media only screen and (max-width: 1100px) {
  #profile {
    width: 100vw;
  }
}
</style>
