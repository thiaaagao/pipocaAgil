<template>
  <q-layout view="hHh LpR fFf">
    <div
      class="bg-gradient-to-b from-azul-escuro to-cinza-escuro text-white font-sora min-h-screen pt-20"
    >
      <q-header elevated>
        <q-toolbar> </q-toolbar>
      </q-header>

      <q-page-container>
        <div
          class="bg-gradient-to-b from-azul-escuro to-cinza-escuro text-white font-sora min-h-screen pt-20"
        >
          <div class="flex items-center justify-center pt-10 pb-16">
            <h2 class="text-2xl font-bold text-center">
              Cadastre-se no Clube de Assinantes
            </h2>
          </div>
          <div class="flex items-center justify-center gap-20">
            <div class="w-80 hidden md:block"></div>

            <div class="bg-cinza rounded-md">
              <form class="flex flex-col p-5 text-xl">
                <div class="mb-4">
                  <h3 class="text-color-red">Boas vindas</h3>
                </div>
                <div class="mb-6">
                  <q-input label="Name" standout="bg-blue text-white" />
                </div>
                <div class="mb-6">
                  <q-input label="Email" standout="bg-blue text-white" />
                </div>
                <div class="mb-6">
                  <q-input label="Password" standout="bg-blue text-white" />
                </div>
                <q-btn
                  class="bg-amarelo-claro text-azul-escuro font-semibold mb-1 p-1 rounded-md"
                >
                  Cadastre-se
                </q-btn>
              </form>
            </div>
          </div>
        </div>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
