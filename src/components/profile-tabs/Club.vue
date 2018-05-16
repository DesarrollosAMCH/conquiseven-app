<template>
    <div id="club">
        <h1>Club</h1>

        <code-verificator cvLabel="Ingrese el código de acceso" cvPlaceholder="Ej: CJFH34TTG"></code-verificator>
    </div>
</template>


<script>
import CodeVerificator from '../utils/CodeVerificator.vue'

export default {
  name: 'Club',
  data () {
    return {}
  },
  components: { CodeVerificator }
}
</script>