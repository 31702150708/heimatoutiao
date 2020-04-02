<template>
  <div>
    <!-- 循环结构，少于三张图的布局 -->
    <div class="imgText">
      <div class="imgText-left">
        <h4>吸烟有害身体健康</h4>
        <p>奈何 30跟帖</p>
      </div>
      <img src="https://www.baidu.com/img/bd_logo1.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.imgText {
  padding: 20/360 * 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #eeeeee solid;
  .imgText-left {
    h4 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-weight: normal;
    }
    p {
      color: #999;
      margin-top: 5px;
    }
  }
  img {
    width: 110/360 * 100vw;
    height: 75/360 * 100vw;
    display: block;
    object-fit: cover;
    margin-left: 10/360 * 100vw;
    // 防止图片在flex布局下被挤压
    flex-shrink: 0;
  }
}
</style>