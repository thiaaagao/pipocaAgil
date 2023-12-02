<template v-if="password" v-slot:append>
  <q-page class="overflow-hidden" padding>
    <div class="q-pb-sm">
      <p class="col-12 text-h6 text-white text-bold text-center">
        Cadastre-se no Clube de Assinantes
      </p>
    </div>

    <div class="row flex flex-center justify-evenly q-pa-xl">
      <!-- IMAGE -->
      <div class="col-xs-12 col-sm-6 col-md-4 q-gutter-y-xl mobile-hide">
        <q-img
          spinner-color="white"
          spinner-size="80px"
          class="mobile-hide"
          src="../assets/logo.png"
        />
      </div>

      <!-- FORM -->
      <div class="col-xs-12 col-sm-6 col-md-5 q-gutter-y-xl">
        <q-form @submit="HandleRegister" class="q-pa-md q-ma-sm q-gutter-y-md">
          <p class="col-4 text-h5 text-600 text-white">Boas vindas</p>
          <q-input
            label="Nome Completo *"
            v-model="nameFull"
            standout="text-white"
            type="text"
            outlined
            clearable
            lazy-rules
            :rules="[validateNameFull]"
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
              (val) => (val && val.length > 0) || 'Digite um email válido !',
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
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{7,}$/.test(
                  val
                ) ||
                'Pelo menos uma letra maiúscula, letra minúscula, um número e um caractere especial',
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
import { defineComponent, onMounted, ref } from "vue";
import api from "../services/api";
import useNotify from "../composable/UseNotify";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const { notifyError, notifySuccess } = useNotify();

    const registerUser = async () => {
      try {
        const response = await api.post("/users", {
          name: nameFull.value,
          email: email.value,
          password: password.value,
        });
        notifySuccess();
        response.data;
      } catch (error) {
        notifyError("Email já registrado");
      }
    };
    const HandleRegister = () => {
      registerUser();
    };

    const passConfirm = ref("");
    const isPwd = ref(true);
    const isPwdConfirm = ref(true);
    const nameFull = ref("");
    const email = ref("");
    const password = ref("");
    const users = ref([]);

    /*  const HandleRegister = () => {
      console.log("Nome:", name.value);
      console.log("Email:", email.value);
      console.log("Senha:", password.value);
      console.log("Confirmação de Senha:", passConfirm.value);
    };
 */

    const validateNameFull = (val) => {
      const lettersOnlyRegex = /^[A-Za-z\s]+$/;
      const isValid = val.trim(" ").split(" ").length > 1;
      return isValid || "Digite o nome e sobrenome !";
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
      nameFull,
      email,
      password,
      passConfirm,
      validatePasswordConfirmation,
      passwordMatch,
      HandleRegister,
      users,
      registerUser,
      validateNameFull,
      useNotify,
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