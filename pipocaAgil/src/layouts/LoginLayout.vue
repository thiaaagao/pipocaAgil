<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-toolbar-title class="text-bold q-ma-md">
          PIPOCA ÁGIL
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginLayout",

  setup() {
    return {};
  },
});
</script>
<style>
.q-page-container {
  background: linear-gradient(#222b30, #161616);
}
#logo {
  width: 5%;
}
</style>
