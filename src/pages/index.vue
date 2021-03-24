<template>
  <div class="common-layout">
    <MainComponents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import MainComponents from '@/components/pages/main/index.vue';

export default defineComponent({
  name: 'main-landing',
  components: {
    MainComponents,
  },
});
</script>
