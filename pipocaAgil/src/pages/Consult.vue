<template v-slot:append>
  <q-page class="overflow-hidden" padding>
    <section class="">
      <!-- NOME HOME -->
      <div>
        <p>Consultar Assinantes</p>
        <p>Verifique quem já faz parte do Pipoca Agil</p>
      </div>
      <!-- NOME END -->

      <!-- CAMPOS CONSULTA HOME -->
      <div>
        <div class="q-pa-md q-ma-xs">
          <q-btn-dropdown push no-caps>
            <template v-slot:label>
              <div class="row items-center no-wrap q-gutter-xs">
                <q-icon color="white" size="18px" left name="settings" />
                <div class="text-center">Menu Admin</div>
              </div>
            </template>

            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
                to="/error404"
              >
                <q-item-section>
                  <q-item-label>Consultar Assinantes</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <!-- SUBMIT.PREVENT="onSubmit" -->
        <q-form @submit-prevent="onSubmit">
          <q-input
            type="text"
            placeholder="Digite um nome ou e-mail"
            standout="text-white"
            v-model="buscaUsuario"
          >
            <template v-slot:append>
              <q-icon
                name="search"
                @onClick="onSubmit"
                class="cursor-pointer"
              />
              <!-- AÇÃO DE CLICK PARA BUSCAR VEM DO ICONE -->
            </template>
          </q-input>
        </q-form>
      </div>
      <!-- CAMPOS CONSULTA END -->

      <!-- RESULTADO HOME -->
      <div class="q-pt-lg">
        <p>Resultados</p>
        <div>
          <table>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
            <tr>
              <th>Joana D'arc</th>
              <th>Joana@gmail.com</th>
            </tr>
          </table>
        </div>
      </div>
      <!-- RESULTADO HOME -->
    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageConsult",
  setup() {
    const buscaUsuario = ref("");
    const router = useRouter();

    const onSubmit = () => {
      console.log("Dado buscado:", buscaUsuario.value);
    };
    return {
      router,
      buscaUsuario,
      onSubmit,
    };
  },
});
</script>
<style>
</style>