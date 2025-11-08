<template>
  <div id="Software" class="container">
    <div class="row">
      <div id="left" class="col-md-12 col-xs-12">
        <router-link v-for="(item, index) in softwareList" :key="index" class="left-item" :to="item.path">{{ item.name }}</router-link>
      </div>
      <div id="right" class="col-md-12 col-xs-12 wow bounceInRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Software",
  data() {
    return {
      softwareList: [
        // {
        //     path: '/software/smartTown',
        //     name: '单仓送物机器人—润'
        // },
        {
          path: "/software/gege",
          name: "双仓送物机器人—格格",
        },
        {
          path: "/software/up",
          name: "新一代酒店多功能服务机器人—UP",
        },
      ],
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
#left {
  margin: 20px 0;
}
.left-item{
    margin-right: 20px;
    
}
#right {
  /* padding: 50px 0; */
}
@media screen and (max-width: 768px) {
  #right {
    /* padding: 15px; */
  }
}
</style>

