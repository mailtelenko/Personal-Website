<template>
  <div id="app">
    <Profile 
      id                  = "profile"
      v-on:contact_button = "toggle_contact"
      :bio                = "bio"
    />

    <div 
      :class = "{'blur': show_contact}" 
      id     = "interactive_resume"
    >
      <div id="dropdown_container">
        <h2>Get to know my</h2>
        <div id="page_dropdown">
          <span
            v-on:click      = "show_dropdown = !show_dropdown"
            v-click-outside = "hide_dropdown"
            :class          = "{
                                'fill_resume_section_title' : resume_section == '',
                                'dropdown_active'           : show_dropdown
                              }"
            id              = "current_resume_section_title"
          >
            {{ resume_section }}
            <font-awesome-icon
              id     = "dropdown_chevron"
              icon   = "chevron-down"
              :class = "{'transform_icon_180': show_dropdown}"
            />
          </span>

          <ul 
            class  = "panel dropdown"
            v-show = "show_dropdown"
          >
            <li
              v-for  = "page in resume_elements"
              :key   = "page.name"
              v-show = "resume_section != page.name"
              :value = "page.name"
              @click = "update_page(page.name)"
            >
              <font-awesome-icon 
                class="dropdown_icon" 
                :icon="page.icon" 
              />
              {{page.name}}
            </li>
          </ul>
        </div>
      </div>

      <ResumeSection
        v-if             = "resume_section != ''"
        :resume_elements = "resume_elements[resume_section].elements"
        :display_props   = "resume_elements[resume_section].display_props"
  
        title = "Test"
      />

      <div
        id="starting_page"
        v-show="resume_section == ''"
      >
        <font-awesome-icon id="point_icon" icon="hand-point-up" />
        <h3>Select an item from the list above to get started or download a copy of my resume below.</h3>
      </div>

      <PDFResumeDownload
        :class = "{'sticky_bottom' : resume_section != ''}"
      >
      </PDFResumeDownload>
      
      <font-awesome-icon
        id         = "theme_toggle"
        v-on:click = "toggle_theme"
        class      = "panel panel_hover"
        :icon      = "['fas', 'moon']"
      />
    </div>

    <transition name="slide-up-fade">
      <div v-show="show_contact">
        <div id="mobile_blur"></div>
        <Contact 
          v-click-outside = "hide_contact"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Profile           from "./components/Profile.vue";
import ResumeSection     from "./components/ResumeSection.vue";
import Contact           from "./components/Contact.vue";
import PDFResumeDownload from "./components/PDFResumeDownload.vue";

import * as info from "./assets/data.js";

export default {
  name: "App",
  components: {
    Profile,
    ResumeSection,
    Contact,
    PDFResumeDownload
  },

  created() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.dark_mode = true;
      this.set_theme();
    }
  },

  methods: {
    set_theme() {
      if (this.dark_mode) document.documentElement.setAttribute("data-theme", "dark");
      else                document.documentElement.setAttribute("data-theme", "light");
    },

    toggle_theme() {
      this.dark_mode = !this.dark_mode;
      this.set_theme();
    },

    hide_dropdown() {
      this.show_dropdown = false;
    },

    force_hide_cont() {
      this.show_contact = false;
    },

    hide_contact(e) {
      if (!e.explicitOriginalTarget.innerHTML.includes("Contact Me"))
        this.show_contact = false;
    },

    update_page(value) {
      this.resume_section = value;
    },

    toggle_contact() {
      this.show_contact = !this.show_contact;
    }
  },

  data() {
    return info.data;
  }
};
</script>


<style>
/* 
  Configure the font globally
*/
* {
  font-family: "BebasNeue" !important;
}

body {
  height:   100vh;
  overflow: hidden;

  background-color: var(--background-colour);

  margin:  0px;
  padding: 0px;
}

#app {
  display:        flex;
  flex-direction: row;
}

/*
  Components
*/
.panel {
  background-color: var(--panel_colour);
  color:            var(--default_text);

  box-shadow: 0px 0px 10px var(--box_shadow_colour);

  transition-duration: 0.2s;
}

.panel_hover:hover {
  box-shadow: 0px 3px 10px var(--box_shadow_colour_intense);

  cursor: pointer;

  transition-duration: 0.2s;
}

.blur {
  filter: blur(5px);

  transition-duration: 0.3s;
}

#profile {
  width: 30vw;
}

#interactive_resume {
  margin: 0px;

  height: 100vh;
  width:  100%;

  overflow-y: scroll;

  position: relative;

  color: var(--default_text);

  transition-duration: 0.2s;
}

#interactive_resume h2 {
  padding: 30px 0.8rem 8px 90px;

  position: relative;
  display: inline-block;

  font-size: 2rem;
}


/* 
  Dropdown list of sections
*/
#page_dropdown {
  display:  inline-block;
  position: relative;
}

#current_resume_section_title {
  border:        none;
  border-bottom: 2px solid var(--default_text);

  background-color: transparent;

  padding: 2px;

  font-size: 1.9rem;

  height: 2.2rem;

  display: inline-block;

  cursor: pointer;
}

#current_resume_section_title:hover > #dropdown_chevron {
  transform: scale(1.1) translateY(-2px);

  transition-duration: 0.2s;
}

/* 
  At startup, the padding needs to be adjusted to create an empty
  dropdown selector.
*/
.fill_resume_section_title {
  padding: 0px 5px 2px 160px !important;
}

/* 
  v/^ Icon next to the dropdown selector
*/
#dropdown_chevron {
  height: 20px;
  margin: 0px 5px 3px 15px;

  transition-duration: 0.2s;
}

.transform_icon_180 {
  transform: rotate(180deg) scale(1.1) !important;
}

/* 
  Expanded dropdown menu
*/
.dropdown {
  width:  220px;
  height: auto;

  padding: 0px;

  position: absolute;
  top:      40px;
  z-index:  100;

  border-radius: 5px;
}

.dropdown li {
  padding: 12px 15px;
  margin:  5px 0px;

  list-style-type: none;

  text-transform: capitalize;
}

.dropdown_icon {
  margin-left:  5px;
  margin-right: 10px;

  display:  inline-block;
  position: relative;

  width: 30px !important;

  text-align: center;
}

.dropdown li:hover {
  background-color: var(--panel_hover);

  cursor: pointer;
}

/* 
  Dark/light toggle button
*/
#theme_toggle {
  position: absolute;

  width:  20px;
  height: 20px;

  padding: 10px;

  border-radius: 100px;

  top:   20px;
  right: 30px;
}

#theme_toggle:hover {
  transform: rotate(-18deg);
}

#theme_toggle:active {
  transform: scale(0.9) rotate(-30deg);
}

/* 
  Download resume (PDF) button
*/
.sticky_bottom {
  position: sticky;
  bottom:   30px;
}


/*
  Starting page
*/
#starting_page {
  text-align: center;

  margin-top: 35vh;
  margin-left: 10%;

  width: 80%;
}

#point_icon {
  color: var(--panel_dark_embed);

  width: 90px;
  height: 90px;

  position: absolute;

  top: 125px;
  left: calc(30px + (14 * 1rem) + 120px);
}




/* 
  Animations
*/

.slide-up-fade-enter-active,
.slide-up-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-up-fade-enter,
.slide-up-fade-leave-to {
  transform: translateX(60px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/*
  Mobile
*/
@media only screen and (max-width: 1100px) {
  
  #interactive_resume {
    display: none;
  }

  #mobile_blur {
    position: absolute;

    left: 0px;
    top:  0px;

    width:  100vw;
    height: 100vh;

    background-color: var(--box_shadow_colour);
  }
}
</style>
