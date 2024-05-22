<template>
  <div class="flex flex-col min-h-screen">
    <HeaderView />
    <div class="flex-grow">
      <router-view />
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/header/HeaderView.vue";
import FooterView from "@/components/footer/FooterView.vue";

export default {
  components: {
    HeaderView,
    FooterView
  },
  computed: {

  },
  async beforeMount() {
    await this.getData();
    // this.$store.dispatch(GET_USER)
  },
  methods: {
    async getData() {

    },
  },
};
</script>
