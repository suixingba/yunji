<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!-- item 1 -->
    <div id="item" class="container">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-12 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/home_1.png" alt="">
        </div>
      </div>
    </div>
    <!-- item 2 -->
    <div id="item" class="container">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-12 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/home_2.png" alt="">
        </div>
      </div>
    </div>
    <!-- item 3 -->
    <div id="item" class="container">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-12 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/home_3.png" alt="">
        </div>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们的服务</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 server-wrapper"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <div
              class="wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="img-responsive" :src="item.logo" alt="logo">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/img/swiper_1.png"),
          path: "",
          // title: '您身边的IT专家1',
          // content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        },
        {
          img: require("@/assets/img/swiper_2.png"),
          path: "",
          // title: '您身边的IT专家2',
          // content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        },
        {
          img: require("@/assets/img/swiper_3.png"),
          path: "",
          // title: '您身边的IT专家3',
          // content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        }
      ],
      serverList: [
        {
          logo: require("@/assets/img/whyChoose_1.png"),
          // title: "核心优势1",
          // content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          logo: require("@/assets/img/whyChoose_2.png"),
          // title: "核心优势2",
          // content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          logo: require("@/assets/img/whyChoose_3.png"),
          // title: "核心优势3",
          // content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        }
      ]
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  margin-top: 20px;
  height: 600px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide{
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1{
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p{
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
#item{
  margin-top:20px
}
/* 为什么选择我们 */
#whyChooseUs {
  /* padding: 50px 100px; */
  /* padding-bottom: 0px; */
  padding-top: 30px;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 30px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-wrapper img{
  margin-bottom: 20px;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #whyChooseUs {
    /* padding: 30px 0; */
    /* padding-bottom: 0px; */
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #whyChooseUs {
    /* padding: 30px 0; */
    /* padding-bottom: 0px; */
  }
}
</style>

