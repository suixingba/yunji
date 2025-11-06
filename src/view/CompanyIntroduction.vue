<template>
  <div id="CompanyIntroduction">
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-12 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/about_img.png"
          />
        </div>
        <div class="row aboutGroup">
          <div
            class="col-xs-12 col-sm-12 col-md-12 server-wrapper"
            v-for="(item, index) in itemList"
            :key="index"
          >
            <div class="wow slideInUp">
              <img class="img-responsive" :src="item.logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "CompanyIntroduction",
  data() {
    return {
        itemList: [
        {
          logo: require("@/assets/img/about_1.png"),
        },
        {
          logo: require("@/assets/img/about_2.png"),
        },
        {
          logo: require("@/assets/img/about_3.png"),
        },
        {
          logo: require("@/assets/img/about_4.png"),
        }
      ]
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
.row {
  margin-right: 0;
  margin-left: 0;
}
.aboutGroup img{
    margin-top: 20px;
}
.CompanyIntroduction-container {
  padding: 20px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    /* padding: 20px 0; */
    color: #808080;
  }
}
</style>
