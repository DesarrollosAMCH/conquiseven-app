<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateCode">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>Complete el formulario para ingresar</md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="email">E-Mail</label>
                                <md-input name="email" id="email" autocomplete="given-name" />
                            </md-field>
                        </div>
                    </div>

                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="pswd">Password</label>
                                <md-input name="password" id="pswd" type="password" />
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
    name: 'AdminLogin',
    data: () => ({

    })
  }
</script>