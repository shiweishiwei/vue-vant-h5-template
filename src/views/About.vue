<template>
  <div class="test-viewport">
    <div class="test-viewport-child">测试</div>
    <div class="correct">正确</div>
    <div class="wrong">错误</div>
  </div>
</template>

<style lang="scss" scoped>
.test-viewport {
  width: 750px;
  height: 400px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
  .test-viewport-child {
    width: 100px;
    height: 100px;
    border: 2px solid blue;
  }
  .correct {
    width: 100px;
    height: 100px;
    background-color: $correct-color;
  }
  .wrong {
    width: 100px;
    height: 100px;
    background-color: $wrong-color;
  }
}
</style>