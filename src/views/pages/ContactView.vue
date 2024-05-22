<template>
  <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row">
    <div class="map-container w-full md:w-1/2 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7675326119415!2d107.5765414750902!3d-6.918371767713968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e606d1d99309%3A0x258f2b35fa2ac2ac!2sBBPMB%20tekMIRA!5e0!3m2!1sen!2sid!4v1711814411862!5m2!1sen!2sid"
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6 mb-4 md:mb-0 md:mr-4 flex-grow">
      <h1 class="text-2xl font-semibold mb-4">Kontak Kami</h1>
      <div class="mb-4">
        <h2 class="text-xl font-medium">Alamat Email</h2>
        <p>info.tekmira@esdm.go.id</p>
      </div>
      <div class="mb-4">
        <h2 class="text-xl font-medium">Nomor Telepon</h2>
        <p>(022) 6030483</p>
      </div>
      <div>
        <h2 class="text-xl font-medium">Alamat Kantor</h2>
        <p>Jalan Jend. Sudirman No.623, Wr. Muncang, Kec. Bandung Kulon, Kota Bandung, Jawa Barat 40211</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  metaInfo() {
    return {
      title: "Contact",
      titleTemplate: "tekMIRA - %s",
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 768px;
}
</style>
