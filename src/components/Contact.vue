<template>
  <div class="container panel">
    <h2>Let's get in touch</h2>
    <p>Fill in the form below and I'll get back to you as soon as possible</p>

    <div class="form_container">
      <form 
        id   = "contact_form"
        v-if = "!form_submitted" @submit.prevent="send_form"
      >
        <input 
          class       = "input"
          v-model     = "name"
          placeholder 
          type        = "text"
          name        = "name" />
        <label>Name:</label>
        
        <input
          class       = "input"
          v-model     = "email"
          ref         = "email"
          placeholder 
          type        = "email"
          name        = "email"
        />
        <label>Email:</label>

        <textarea
          id          = "message"
          v-model     = "message"
          class       = "input"
          placeholder
          type        = "text"
          name        = "message"
        ></textarea>
        <label>Message:</label>
      </form>

      <!-- Success screen -->
      <div 
        v-if = "form_submitted" 
        id   = "form_success"
      >
        <font-awesome-icon 
          class = "success_icon" 
          icon  = "thumbs-up" 
        />
        <h3>Thanks!</h3>
        <p>Your message sent successfully, we'll be in touch.</p>
      </div>
    </div>

    <!-- Error Messages -->
    <p
      v-show = "form_error"
      class  = "contact-form-status"
    >
      Oops! Looks like something went wrong. Please send me an email at telenkol@mcmaster.ca.
    </p>
    <p
      v-show = "not_filled"
      class  = "contact-form-status"
    >
      Oops! Please make sure the entire form is filled out.
    </p>

    <button 
      id   = "contact-form-button"
      v-if = "!form_submitted"
      @click = "send_form"
    >
      <font-awesome-icon 
        class = "button_icon" 
        icon  = "paper-plane" 
      />
        Submit
    </button>

    <button 
      id     = "close"
      v-show = "form_submitted" 
      @click = "$emit('close_contact')"
    >
      Close
    </button>
  </div>
</template>

<script>
export default {
  name: "contact",

  data() {
    return {
      form_submitted: false,
      form_error:     false,
      not_filled:     false,

      email:   "",
      message: "",
      name:    "",

      form_endpoint: "https://formspree.io/xaypeppj"
    };
  },

  methods: {
    error() {
      this.form_error = true;
    },

    success() {
      this.form_submitted = true;
    },

    send_form() {
      let form_data = new FormData();

      let error   = this.error;
      let success = this.success;

      this.not_filled = false;

      // Make sure form is filled out
      if (this.email == "" || this.name == "" || this.message == "") {
        return (this.not_filled = true);
      }

      // Get data from the form
      form_data.append("email", this.email);
      form_data.append("name", this.name);
      form_data.append("message", this.message);

      // Send a request to formspree
      var xhr = new XMLHttpRequest();
      xhr.open("POST", this.form_endpoint);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success();
        } else {
          error();
        }
      };
      xhr.send(form_data);
    },
  },

  props: {}
};
</script>

<style scoped>
.container {
  height:     auto;
  max-height: calc(94vh - 60px);

  width:     100%;
  max-width: 350px;

  position: absolute;
  right:    0px;

  margin: 3vh 2vw;

  border-radius: 5px;

  padding: 30px 50px;

  overflow: auto;
}

/* Title */
h2 {
  font-size: 1.7rem;
}

/* 
  Form
*/
.form_container {
  width: calc(100% - 80px);

  padding: 40px 40px 15px 40px;

  border:        solid var(--panel_hover) 3px;
  border-radius: 4px;

  margin:     auto;
  margin-top: 35px;
}

form {
  position: relative;
  display:  block;

  width: 100%;

  margin:     auto;
  margin-top: 10px;
}

/* 
  Form text inputs
*/
.input {
  border:        none;
  border-bottom: 2px solid var(--panel_hover);

  color: var(--default_text);

  position: relative;

  padding: 0px 0px 7px 0px;

  width: 100%;

  margin-bottom: 55px;

  background: transparent;
}

/* 
  Textarea input
*/
#message {
  margin-bottom: 30px;

  height: 1rem;
}

/* 
  Input status styling
*/
.input:invalid {
  outline:    none;
  box-shadow: none;

  border-color: rgb(214, 43, 1);
}

.input:valid:not(:placeholder-shown) {
  border-color: green;
}

/* 
  Input labels
*/
label {
  z-index: 1;

  position: absolute;

  left: 0px;

  transform:        translateY(0rem);
  transform-origin: 0%;

  transition: transform 400ms;
}

.input:focus-within + label,
.input:not(:placeholder-shown) + label {
  transform: scale(0.9) translateY(-2rem);
}


/* 
  Error messages
*/
.contact-form-status {
  color: rgb(214, 43, 1);

  width:      calc(100% - 40px);
  text-align: center;

  padding-left:  20px;
  padding-right: 20px;

  margin-top:    20px;
  margin-bottom: 10px;

  position:relative;

}

/* 
  Send button
*/
#contact-form-button {
  float: right;

  position: relative;

  margin: 25px 0px 10px 0px;
}

/*
  Success screen
*/
#form_success {
  text-align: center;
}

.success_icon {
  width:  30%;
  height: 30%;

  color: var(--panel_embed);

  display: block;
  margin:  auto;

  padding: 40px;

  border:        solid 6px;
  border-radius: 100%;

  margin-bottom: 40px;
}

/* 
  Close button
*/
#close {
  display: block;
  margin:  auto;

  margin-top: 20px;
}

/* 
  Mobile styling
*/
@media only screen and (max-width: 800px) {
  .container {
    box-shadow: 0px 3px 15px var(--box_shadow_colour);
  }
}
</style>