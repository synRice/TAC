<template>
  <a-carousel dot-position="right">
    <div class="task-intro">
      <div class="task-intro-box">
        <div class="left-item">
          <div class="intro-box">
            <div class="text">
              <div class="title">Visualization</div>
              <div>Comprehensive result analysisand model interpretability</div>
            </div>
            <div class="icon"></div>
          </div>
          <div class="intro-box">
            <div class="text">
              <div class="title">One-stop-shop service</div>
              <div>End-to- end model training.optimization, and prediction.</div>
            </div>
            <div class="icon"></div>
          </div>
          <div class="intro-box">
            <div class="text">
              <div class="title">Functional annotation</div>
              <div>Methylation site annotationfor DNA and RNA sequences anligand- binding site recognition for protein sequence.</div>
            </div>
            <div class="icon"></div>
          </div>
        </div>
        <div class="center-img"></div>
        <div class="right-item">
          <div class="intro-box">
          <div class="icon"></div>
            <div class="text">
              <div class="title">Pure deep learning</div>
              <div>Convolutional neural networks, advancednatural language processing approaches,graph neural networks, etc.</div>
            </div>
          </div>
          <div class="intro-box">
            <div class="icon"></div>
            <div class="text">
              <div class="title">Hardware</div>
              <div>Models we provide are all GPU-based, which significantly reduces the time used for task training.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  <div class="bottom-content">
    <div class="icon"></div>
    <div class="text">
      <div>
        DeepBIO, a user-friendly platform that enables the generic use and development of deep learning models for genomic, transcriptomic, and proteomic sequence analysis, including sequence-level functional prediction and base-level functional annotation. You are welcome to communicate with us on the use of the problem, which will help us to further improve our work.
      </div>
      <a href="http://wei-group.net">© 2022 Wei Lab | Contact us: weileyi@sdu.edu.cn</a>
      <div>This website is free and open to all users and there is no login requirement.</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: calc(100vh - 270px) !important;
  line-height: 160px;
  background: #1d7d65;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}

.task-intro{
  height: calc(100vh - 270px);
  .task-intro-box{
    height: 100%;
    line-height: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .intro-box{
      display: flex;
      align-items: center;
      .text{
        margin: 20px 0;
        width: 200px;
        color: #ffffff;
        font-size: 12px;
        .title{
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
      .icon{
        height: 30px;
        width: 30px;
        background: no-repeat url("@/assets/img/home_intro_icon.png");
        background-size: 100%;
      }
    }
    .left-item{
      text-align: right;
      .icon{
        margin-left: 30px;
      }
    }
    .right-item{
      text-align: left;
      .icon{
        margin-right: 30px;
      }
    }
    .center-img{
      height: 300px;
      width: 300px;
      background: no-repeat url("@/assets/img/home_img_one.png");
      background-size: 100%;
    }
  }
}

.bottom-content{
  display: flex;
  justify-content: space-around;
  padding: 15px 30px;
  height: 200px;
  width: 100%;
  background: #000;
  .icon{
    height: 170px;
    width: 157px;
    background: no-repeat url("@/assets/img/home_bottom.png");
    background-size: 100%;
    margin-right: 50px;
  }
  .text{
    width: 70%;
    color: #ffffff;
    line-height: 22px;
    a{
      display: inline-block;
      color: #ffffff;
      margin-top: 20px;
    }
  }
}
</style>