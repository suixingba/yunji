<template>
  <div id="Software_gege">
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-12"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <div :class="['item', 'wow', index%2==1 ? 'bounceInRight' : 'bounceInLeft' ]">
          <img class="img-responsive" :src="item.path" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Software_gege",
  data() {
    return {
      itemList: [
        {
          path: require("@/assets/img/格格青春版产品介绍_page-0001.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0002.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0003.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0004.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0005.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0006.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0007.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0008.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0009.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0010.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0011.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0012.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0013.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0014.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0015.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0016.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0017.jpg"),
        },{
          path: require("@/assets/img/格格青春版产品介绍_page-0018.jpg"),
        }
      ],
    };
  },
};
</script>
<style scoped>
#Software_gege .item{
    margin-bottom: 20px;
}
</style>

