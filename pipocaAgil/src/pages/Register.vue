<template v-if="pass" v-slot:append>
  <q-page padding>
    <p class="col-12 text-h5 text-white text-bold text-center q-pa-md">
      Cadastre-se no Clube de Assinantes
    </p>

    <div class="row flex flex-center justify-evenly q-pa-xl">
      <!-- IMAGE -->
      <div class="col-xs-12 col-sm-6 col-md-4 q-gutter-y-md">
        <q-img
          spinner-color="white"
          spinner-size="80px"
          class="mobile-hide"
          src="../assets/logo.png"
        />
      </div>

      <!-- FORM -->
      <div class="col-xs-12 col-sm-6 col-md-4 q-gutter-y-md">
        <q-form
          @submit="HandleRegister"
          class="q-pa-md q-gutter-y-sm col-md-10"
        >
          <p class="col-4 text-h5 text-600 text-white">Boas vindas</p>
          <q-input
            label="Nome Completo *"
            v-model="name"
            type="name"
            standout="text-white"
            outlined
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Digite o seu nome e sobrenome!',
            ]"
          />

          <q-input
            label="Email *"
            standout="text-white"
            v-model="email"
            type="email"
            outlined
            clearable
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Digite o seu email!']"
          />

          <!-- INPUT PASS WITH CLOSE AND TOGGLE -->
          <q-input
            label="Senha *"
            standout="text-white"
            v-model="pass"
            :type="isPwd ? 'password' : 'text'"
            clearable
            outlined
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length >= 8) ||
                'A senha deve ter no mínimo 8 caracteres',
              (val) =>
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(
                  val
                ) ||
                'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial',
              this.validatePasswordConfirmation,
            ]"
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
            standout="text-white"
            :type="isPwdConfirm ? 'password' : 'text'"
            clearable
            outlined
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length >= 8) ||
                'A senha deve ter no mínimo 8 caracteres',
              this.validatePasswordConfirmation,
            ]"
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
          <div class="q-pt-sm">
            <q-btn
              label="Cadastre-se"
              color="warning"
              type="submit"
              text-color="secondary"
              class="full-width"
              outlined
            />
          </div>
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
    const isPwd = ref(true);
    const isPwdConfirm = ref(true);
    const name = ref("");
    const email = ref("");
    const pass = ref("");
    const passConfirm = ref("");

    const passwordMatch = () => {
      return this.pass === this.passConfirm;
    };

    const validatePasswordConfirmation = (val) => {
      return val === pass.value || "As senhas não coincidem";
    };

    const HandleRegister = () => {
      console.log("Nome:", name);
      console.log("Email:", email);
      console.log("Senha:", pass);
      console.log("Confirmação de Senha:", passConfirm);
    };

    return {
      isPwd,
      isPwdConfirm,
      name,
      email,
      pass,
      passConfirm,
      HandleRegister,
      validatePasswordConfirmation,
      passwordMatch,
    };
  },
});
</script>
<style>
.q-form {
  background: #384145;
  border-radius: 4px;
  box-sizing: border-box;
}
.q-btn {
  font-weight: bold;
  font-style: normal;
}
</style>