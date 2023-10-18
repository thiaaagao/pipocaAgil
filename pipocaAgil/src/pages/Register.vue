<template v-if="password" v-slot:append>
  <q-page class="q-overflow-hidden" padding>
    <div class="q-pb-lg">
      <p class="col-12 text-h6 text-white text-bold text-center">
        Cadastre-se no Clube de Assinantes
      </p>
    </div>

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
        <q-form @submit="HandleRegister" class="q-pa-md">
          <p class="col-4 text-h5 text-600 text-white">Boas vindas</p>
          <q-input
            label="Nome Completo *"
            v-model="name"
            type="name"
            standout="text-white"
            borderless
            outlined
            clearable
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Digite o seu Nome e Sobrenome !',
              (val) =>
                /^[A-Za-z]+$/.test(val) || 'Digite apenas letras neste campo !',
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
            :rules="[
              (val) => (val && val.length > 0) || 'Digite o seu email !',
            ]"
          />

          <!-- INPUT PASS WITH CLOSE AND TOGGLE -->
          <q-input
            label="Senha *"
            standout="text-white"
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            clearable
            outlined
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length >= 7) ||
                'A senha deve ter no mínimo 7 caracteres',
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
                color="white"
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
                (val && val.length >= 7) ||
                'A senha deve ter no mínimo 7 caracteres',
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
                color="white"
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
// import { useRouter } from "vue-router";
// import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const passConfirm = ref("");
    // const { register } = useAuthUser();
    // const router = useRouter();
    const isPwd = ref(true);
    const isPwdConfirm = ref(true);
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const HandleRegister = async () => {
      console.log("Nome:", name.value);
      console.log("Email:", email.value);
      console.log("Senha:", password.value);
      console.log("Confirmação de Senha:", passConfirm.value);
    };

    const passwordMatch = () => {
      return this.password === this.passConfirm;
    };

    const validatePasswordConfirmation = (val) => {
      return val === password.value || "As senhas não coincidem";
    };

    return {
      isPwd,
      isPwdConfirm,
      name,
      email,
      password,
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
.q-form {
  color: white;
}
</style>