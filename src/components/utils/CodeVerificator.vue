<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateCode">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>{{ cvLabel }}</md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="first-name">{{ cvPlaceholder }}</label>
                                <md-input name="first-name" id="first-name" autocomplete="given-name" />
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-primary">Entrar</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>


<script>
  export default {
    name: 'CodeVerificator',
    props: ['cvLabel', 'cvPlaceholder', 'cvUrl'],
    data: () => ({

    })
  }
</script>