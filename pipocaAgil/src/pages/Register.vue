<template v-if="pass" v-slot:append>
  <q-page padding>
    <p class="col-12 text-h5 text-white text-bold text-center">
      Cadastre-se no Clube de Assinantes
    </p>

    <div class="row justify-center">
      <!-- IMAGE -->
      <div class="col-xs-10 col-sm-8 col-md-4">
        <img class="mobile-hide desktop-only" src="../assets/logo.png" />
      </div>

      <!-- FORM -->
      <div class="col-xs-10 col-sm-8 col-md-4">
        <q-form>
          <p class="col-4 text-h5 text-600 text-white">Boas vindas</p>
          <q-input
            placeholder="Digite seu Nome e Sobrenome"
            label="Nome e Sobrenome"
            v-model="name"
            type="name"
            clearable
          />

          <q-input
            placeholder="Seu melhor Email"
            label="Email"
            v-model="email"
            type="email"
            clearable
          />

          <!-- INPUT PASS WITH CLOSE AND TOGGLE -->
          <q-input
            placeholder="Digite sua senha"
            label="Senha"
            v-model="pass"
            :type="isPwd ? 'password' : 'text'"
            clearable
          >
            <q-icon @click.stop.prevent="pass = null" class="cursor-pointer" />
            <template v-slot:append>
              <q-icon
                @click="isPwd = !isPwd"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
              />
            </template>
          </q-input>

          <!-- INPUT PASS WITH CLOSE AND TOGGLE -->

          <!-- Btn register -->
          <q-btn
            label="Cadastre-se"
            color="warning"
            type="submit"
            text-color="secondary"
            class="full-width"
            outlined
          />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const router = useRouter();
    return {
      isPwd: ref(true),
      pass: ref(""),
      name: ref(""),
      email: ref(""),
    };
  },
});
</script>
<style>
.q-form {
  background: #384145;
  width: auto;
  height: 449px;
  border-radius: 4px;
}
</style>