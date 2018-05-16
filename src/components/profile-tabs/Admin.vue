<template>
    <div id="admin">
        <h1>Admin</h1>

        <admin-login></admin-login>
    </div>
</template>


<script>
import AdminLogin from '../forms/AdminLogin.vue'

export default {
  name: 'Admin',
  data () {
    return {}
  },
  components: { AdminLogin }
}
</script>