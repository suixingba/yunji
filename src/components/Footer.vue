<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <!-- <img src="@/assets/img/logo.png" alt="logo图"> -->
    </div>
    <p class="address_tel_fax">
      <span>地址：安徽省合肥市高新区天乐社区服务中心红枫路8号红枫智谷创业园B2#129室</span>
    </p>
    <p class="address_tel_fax">
      <span>电话：13514981116</span>
    </p>
    <!-- <p class="email_wx">
      <span>邮箱：xxx@163.com</span>
      <span>微信号：xxx</span>
    </p> -->
    <p class="copy">Copyright &copy; {{ new Date().getFullYear() }} 合肥宙叶科技有限公司</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #F5F5F7;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 100%;
  height: 15px;
}
.logo img{
  height: 60px;
  margin: 0 auto;
}
.title {
  font-size: 25px;
  margin-bottom: 10px;
}
.address_tel_fax {
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 10px;
}
.email_wx {
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 10px;
}
.copy {
  color: #cccccc;
  font-size: 14px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
  margin-bottom: 10px;
}
.copy {
  font-size: 12px;
}
}
</style>

