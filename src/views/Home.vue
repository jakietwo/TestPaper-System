<template>
    <div class="home">
      <div class="wrapper">
        <p class="testRespo" @click="changeRouter(1)">题库</p>
        <p class="testPaper" @click="changeRouter(2)">试卷</p>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  methods: {
    changeRouter(index){
      if(index === 1){
        this.$router.push({
          name: 'TestRespo'
        })
      }else if (index === 2){
        this.$router.push({
          name: 'TestPaper'
        })
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  left: 50%;
  top: 30%;
  width: 700px;
  transform: translate3d(-50%, -60%, 0);
}
.testRespo,.testPaper{
  display: inline-block;
  text-align: center;
  line-height: 200px;
  width: 300px;
  height: 200px;
  border: 2px solid orange;
  border-radius: 20px;
  font-size: 48px;
  letter-spacing: 10px;
}
.testRespo:hover,.testPaper:hover{
  cursor: pointer;
}
.testPaper {
  margin-left: 40px;
}
</style>
