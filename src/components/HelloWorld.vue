<template>
  <div class="hello">
    <div class="titile">test</div>
    <div class="d1">hello world</div>
    <h3>{{ getCount }}</h3>
    <el-button type="primary">111</el-button>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return { value: true };
  },
  mounted() {},
  computed: {
    getCount() {
      return this.$store.state.countStore.count * 3;
    },
  },
};
</script>

<style lang="scss" scoped>
.hello {
  width: vw(800);
  text-align: center;
  border: 1px solid saddlebrown;
  .title {
    font-size: vh(60);
  }
}
</style>
