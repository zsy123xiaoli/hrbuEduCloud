<template>
  <editor v-model="myValue" :init="init"></editor>
</template>

<script>
import tinymce from "tinymce";
import "tinymce/themes/silver";
import Editor from "@tinymce/tinymce-vue";

import "tinymce/themes/silver";
// import "tinymce/plugins/paste";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";

import "tinymce/icons/default";


export default {
  name: "StuMenus",
  data() {
    return {
      init: {
        language_url: "/skins/zh_CN.js", //如果语言包不存在，指定一个语言包路径
        language: "zh_CN", //语言
        skin_url: "/skins/ui/oxide", //如果主题不存在，指定一个主题路径
        content_css: "/skins/content/default/content.css",
        height: "300px",
        
        width: this.calcWidth(),
        plugins: this.plugins, //插件
        toolbar: this.toolbar, //工具栏
        branding: false, //技术支持(Powered by Tiny || 由Tiny驱动)
        menubar: true, //菜单栏
        theme: "silver", //主题
        zIndex: 1101,
        images_upload_url: "http://127.0.0.1:3000/api/acceptFile/Picture",
        images_upload_credentials: true,
 
      },

      myValue: this.value,
    };
  },

  mounted() {
    tinymce.init({});
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    plugins: {
      type: [String, Array],
      default: "link lists image code table wordcounts",
    },
    toolbar: {
      type: [String, Array],
      default:
        "image bold italic underline strikethrough | fontsizeselect fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink code | removeformat",
    },
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    calcWidth() {
      return document.body.clientWidth / 2 + "px";
    },
  },
  components: {
    Editor,
  },
};
</script>
<style lang="less" scoped>
</style>