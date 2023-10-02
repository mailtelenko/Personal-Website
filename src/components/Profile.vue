<template>
  <div class="container">
    <div id="profile_container">
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
.container {
  width:  100%;
  height: 100vh;
  margin: 0px;
  
  position: relative;

  color: var(--default_text);

  background-color: var(--panel_colour);
}

/*
  Profile photo section
*/
#profile_container {
  height:     40vh;
  
  margin-top:    40px;

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
  max-width: 40vh;

  border-radius: 100%;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
}

/* 
  Name text (header)
*/
.title {
  font-size:   2.5rem;

  width: 100%;

  text-align: center;

  margin-top:    20px;
  margin-bottom: 20px;
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

  bottom: 60px;
  left:   calc((100% - 155px) / 2);

  width: 150px;
}

@media (max-width: 800px) and (min-width: 600px) {
  .profile_picture {
    width: 40%;
    left: calc((100% - 40%) / 2);
  }

  .bio div,
  h1 {
    padding: 0px 25%;
  }

  button {
    bottom: 50px;
  }
}
</style>
