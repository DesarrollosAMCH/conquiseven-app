<template>
    <div id="evaluador">
        <h1>Evaluador</h1>

        <code-verificator cvLabel="Ingrese el código de acceso" cvPlaceholder="Ej: CJFH34TTG"></code-verificator>
    </div>
</template>


<script>
import CodeVerificator from '../utils/CodeVerificator.vue'

export default {
  name: 'Evaluador',
  data: () => ({
    form: {
      firstName: null
    }
  }),
  components: { CodeVerificator }
}
</script>

<style>
    .md-card{
        margin: 0 auto !important;
    }
</style>