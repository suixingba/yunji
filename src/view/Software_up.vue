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
          path: require("@/assets/img/up_1.png"),
        },
        {
          path: require("@/assets/img/up_2.png"),
        },
        {
          path: require("@/assets/img/up_3.png"),
        },
        {
          path: require("@/assets/img/up_4.png"),
        },
        {
          path: require("@/assets/img/up_5.png"),
        },
        {
          path: require("@/assets/img/up_6.png"),
        },
        {
          path: require("@/assets/img/up_7.png"),
        },
        {
          path: require("@/assets/img/up_8.png"),
        },
        {
          path: require("@/assets/img/up_9.png"),
        },
        {
          path: require("@/assets/img/up_10.png"),
        },
        {
          path: require("@/assets/img/up_11.png"),
        },
        {
          path: require("@/assets/img/up_12.png"),
        },
        {
          path: require("@/assets/img/up_13.png"),
        },
        {
          path: require("@/assets/img/up_14.png"),
        },
        {
          path: require("@/assets/img/up_15.png"),
        },
        {
          path: require("@/assets/img/up_16.png"),
        },
        {
          path: require("@/assets/img/up_17.png"),
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

