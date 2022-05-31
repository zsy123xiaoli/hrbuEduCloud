<template>
  <div class="s1">
    <TestResults />
    <div class="newtest">
      <h1>ddd</h1>
    </div>
  </div>
</template>

<script>
import TestResults from "../components/TestResults";

export default {
  name: "NewTest",
  components: { TestResults },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.s1 {
  display: flex;
  justify-content: center;
  background-color: #f3f5f7;
  .newtest {
    width: 980px;
    margin-left: 20px;
  }
}
</style>