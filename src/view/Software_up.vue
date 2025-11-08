<template>
  <div id="Software_up">
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-12"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <div
          :class="[
            'item',
            'wow',
            index % 2 == 1 ? 'bounceInRight' : 'bounceInLeft',
          ]"
        >
          <img class="img-responsive" :src="item.path" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Software_up",
  data() {
    return {
      itemList: [
        {
          path: require("@/assets/img/up介绍_1.png"),
        },
        {
          path: require("@/assets/img/up介绍_2.png"),
        },
        {
          path: require("@/assets/img/up介绍_3.png"),
        },
        {
          path: require("@/assets/img/up介绍_4.png"),
        },
        {
          path: require("@/assets/img/up介绍_5.png"),
        },
        {
          path: require("@/assets/img/up介绍_6.png"),
        },
        {
          path: require("@/assets/img/up介绍_7.png"),
        },
        {
          path: require("@/assets/img/up介绍_8.png"),
        },
        {
          path: require("@/assets/img/up介绍_9.png"),
        },
        {
          path: require("@/assets/img/up介绍_10.png"),
        },
        {
          path: require("@/assets/img/up介绍_11.png"),
        },
        {
          path: require("@/assets/img/up介绍_12.png"),
        },
        {
          path: require("@/assets/img/up介绍_13.png"),
        },
        {
          path: require("@/assets/img/up介绍_14.png"),
        },
        {
          path: require("@/assets/img/up介绍_15.png"),
        },
        {
          path: require("@/assets/img/up介绍_16.png"),
        },
        {
          path: require("@/assets/img/up介绍_17.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
#Software_up .item{
    margin-bottom: 20px;
}
</style>

