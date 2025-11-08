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
          path: require("@/assets/img/up_1.PNG"),
        },
        {
          path: require("@/assets/img/up_2.PNG"),
        },
        {
          path: require("@/assets/img/up_3.PNG"),
        },
        {
          path: require("@/assets/img/up_4.PNG"),
        },
        {
          path: require("@/assets/img/up_5.PNG"),
        },
        {
          path: require("@/assets/img/up_6.PNG"),
        },
        {
          path: require("@/assets/img/up_7.PNG"),
        },
        {
          path: require("@/assets/img/up_8.PNG"),
        },
        {
          path: require("@/assets/img/up_9.PNG"),
        },
        {
          path: require("@/assets/img/up_10.PNG"),
        },
        {
          path: require("@/assets/img/up_11.PNG"),
        },
        {
          path: require("@/assets/img/up_12.PNG"),
        },
        {
          path: require("@/assets/img/up_13.PNG"),
        },
        {
          path: require("@/assets/img/up_14.PNG"),
        },
        {
          path: require("@/assets/img/up_15.PNG"),
        },
        {
          path: require("@/assets/img/up_16.PNG"),
        },
        {
          path: require("@/assets/img/up_17.PNG"),
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

