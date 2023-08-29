<template>
  <a-carousel dot-position="right">
    <div class="task-intro">
      <div class="task-intro-box">
        <div class="task-intro-content">
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
        <div class="input-box">
          <a-input-search
            v-model:value="searchValue"
            placeholder="input search text"
            enter-button="Search"
            size="large"
            @search="onSearch"
          />
        </div>
      </div>
    </div>
    <div class="deepbio-intro">
      <div class="deepbio-intro-box">
        <div class="deepbio-intro-icon two"></div>
        <div class="deepbio-intro-text">
          <div class="title">What is DeepBIO?</div>
          <div>DeepBIO is a user-friendly interpretable deep-learning platform for biological sequence functional analysis, such as sequence-level functional prediction and base-wise functional annotation. As for the sequence-level functional prediction, DeepBIO integrates a total of 42 state-of-the-art deep-learning approaches, and enables a one-stop-shop web service for researchers to develop a new deep learning architecture to answer any biological question. To be specific, given any biological sequence data, DeepBIO allows to train and evaluate deep-learning models, conduct model comparison and optimization, and provide a series of visualization analyses. As for the base-wise functional site annotation, DeepBIO offers well-pretrained deep-learning architectures for over 20 functional site annotation tasks, supports comprehensive interpretations and graphical visualizations of identified sites, and validates the reliability of the identified sites by conservation motif analysis.</div>
        </div>
      </div>
    </div>
    <div class="deepbio-intro">
      <div class="deepbio-intro-box">
        <div class="deepbio-intro-text">
          <div class="title">Sequence-level functional prediction</div>
          <div>DeepBIO sequence-level functional prediction module integrates a total of 42 state-of-the-art deep-learning approaches, and enables a one-stop-shop web service for researchers to develop a new deep learning architecture to answer any biological question. To be specific, given any biological sequence data, DeepBIO allows to train and evaluate deep-learning models, conduct model comparison and optimization, and provide a series of visualization analyses, including input data statistics, model interpretability, and feature analysis, etc.</div>
          <a-button class="jump-button" type="primary" size="large">Get Started</a-button>
        </div>
        <div class="deepbio-intro-icon three"></div>
      </div>
    </div>
    <div class="deepbio-intro">
      <div class="deepbio-intro-box">
        <div class="deepbio-intro-icon four"></div>
        <div class="deepbio-intro-text">
          <div class="title">Base-level functional annotation</div>
          <div>We experimentally and creatively added a base-level functional annotation module to our server. This part of the work runs after the prediction module offers well-pretrained deep-learning architectures for over 20 functional site annotation tasks, supports comprehensive interpretations and graphical visualizations of identified sites, and validates the reliability of the identified sites by conservation motif analysis.</div>
          <a-button class="jump-button" type="primary" size="large">Get Started</a-button>
        </div>
      </div>
    </div>
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
import { ref } from 'vue'
import { post } from '@/proxy/api'

const searchValue = ref(undefined)

const onSearch = async () => {
  await post('/search/task', {
    searchValue: searchValue.value
  }).then(()=>{
    // TODO
  }).catch(()=>{
    // TODO
  })
}
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

::v-deep.ant-carousel .slick-dots li.slick-active button{
  background: #000000;
}
::v-deep.ant-carousel .slick-dots li button{
  background: #000000;
}

.task-intro{
  height: calc(100vh - 270px);
  .task-intro-box{
    height: 100%;
    line-height: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .task-intro-content{
      margin-top: 100px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input-box{
      margin-top: -100px;
    }
    .intro-box{
      display: flex;
      align-items: center;
      margin: 10px 0;
      .text{
        margin: 20px 0;
        width: 260px;
        color: #ffffff;
        font-size: 16px;
        .title{
          font-size: 24px;
          margin-bottom: 18px;
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
      height: 360px;
      width: 360px;
      margin: 0 30px;
      background: no-repeat url("@/assets/img/home_img_one.png");
      background-size: 100%;
    }
  }
}

.deepbio-intro{
  height: calc(100vh - 270px);
  background: #ffffff;
  .deepbio-intro-box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deepbio-intro-icon{
    &.two{
      height: 500px;
      width: 500px;
      margin-right: 80px;
      background: no-repeat url("@/assets/img/home_img_two.png");
      background-size: 100%;
    }
    &.three{
      height: 300px;
      width: 500px;
      margin-left: 80px;
      background: no-repeat url("@/assets/img/home_img_three.png");
      background-size: 100%;
    }
    &.four{
      height: 300px;
      width: 500px;
      margin-right: 80px;
      background: no-repeat url("@/assets/img/home_img_four.png");
      background-size: 100%;
    }
  }
  .deepbio-intro-text{
    width: 40%;
    color: #344455;
    line-height: 30px;
    font-size: 20px;
    text-align: justify;
    .title{
      text-align: left;
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
  .jump-button{
    float: right;
    margin-top: 20px;
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
    background-size: 100%;
    margin-right: 50px;
    .two{
      background: no-repeat url("@/assets/img/home_bottom.png");
    }
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