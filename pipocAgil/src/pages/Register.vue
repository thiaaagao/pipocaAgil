<template>
  <q-page class="flex flex-center" padding>
    <!-- <div class="bg-danger rounded-md">
     -->
    <q-form class="flex flex-col p-5 text-xl">
      <q-input id="name" label="name" standout="bg-blue text-white" />

      <q-input id="email" label="email" standout="bg-blue text-white" />
    </q-form>
    <!--  </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const router = useRouter();
    return {};
  },
});
</script>
