<template v-if="pass" v-slot:append>
  <q-page class="no-scroll overflow-auto" padding>
    <p class="col-12 text-h5 text-white text-bold text-center q-pa-xl">
      Cadastre-se no Clube de Assinantes
    </p>

    <div class="row flex flex-center justify-center q-pa-xl">
      <!-- IMAGE -->
      <div class="col-xs-10 col-sm-6 col-md-4 q-gutter-a-md">
        <img class="mobile-hide" src="../assets/logo.png" />
      </div>

      <!-- FORM -->
      <div class="col-xs-10 col-sm-6 col-md-4 q-gutter-a-md">
        <q-form class="q-pa-md">
          <p class="col-4 text-h5 text-600 text-white">Boas vindas</p>
          <q-input
            label="Nome Completo *"
            v-model="name"
            type="name"
            clearable
          />

          <q-input label="Email *" v-model="email" type="email" clearable />

          <!-- INPUT PASS WITH CLOSE AND TOGGLE -->
          <q-input
            label="Senha *"
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

          <q-input
            label="Confirme sua Senha *"
            v-model="passConfirm"
            :type="isPwdConfirm ? 'password' : 'text'"
            clearable
          >
            <q-icon
              @click.stop.prevent="passConfirm = null"
              class="cursor-pointer"
            />
            <template v-slot:append>
              <q-icon
                @click="isPwdConfirm = !isPwdConfirm"
                :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
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
      isPwdConfirm: ref(true),
      name: ref(""),
      email: ref(""),
      pass: ref(""),
      passConfirm: ref(""),
    };
  },
});
</script>
<style>
.q-form {
  background: #384145;
  width: 413px;
  height: 449px;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>