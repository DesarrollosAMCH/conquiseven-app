<template>
  <div class="page-container">
    <md-app>
      <md-app-content>

        <md-icon class="md-size-5x">verified_user</md-icon>

        <md-tabs class="md-primary" md-alignment="fixed">
          <md-tab id="tab-home" mdIcon="check" to="/evaluador">
            <router-view></router-view>
          </md-tab>

          <md-tab id="tab-pages" mdIcon="flag" to="/club">
            <router-view></router-view>
          </md-tab>

          <md-tab id="tab-posts" mdIcon="verified_user" to="/admin">
            <router-view></router-view>
          </md-tab>
        </md-tabs>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ')
  }

}
</script>


<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

  // Demo purposes only
  .md-content {
    text-align: center;
  }
  .md-icon{
    margin: 30px 0;
  }
</style>