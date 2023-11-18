<template>
  <form 
    id     = "pdf_resume_download"
    method = "get" 
    action = "Liam Telenko Resume.pdf"
    target = "_blank"
  >
    <button 
      id   = "download_button" 
      type = 'submit'
    >
      <font-awesome-icon icon="file-alt" />Download Resume
    </button>
  </form>
</template>

<style>
/* 
  PDF download button
*/
#pdf_resume_download {
  width:  100%;

  padding-top: 30px;
  
  text-align:center;
}

#download_button .fa-file-alt {
  padding-right: 10px;
}
</style>

<script>
export default {
  name: "PDFResumeDownload",

  props: {
  },

  components: {
  },

  data() {
    return {};
  }
};
</script>