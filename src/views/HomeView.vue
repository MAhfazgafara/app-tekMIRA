<template>
  <div class="px-[16px] md:px-[42px]">
    <div class="mb-[50px]">
      <img :src="require('@/assets/images/home.png')" class="object-cover w-full h-[180px] md:h-[500px]" />
    </div>
    <div class="pb-[84px]">
      <h2 class="text-3xl font-semibold mb-[24px]">Kategori</h2>
      <div class="flex gap-4 flex-wrap lg:flex-nowrap">
        <a v-for="(v, i) in kategori" :key="i" :href="`/${cekKategoriSlug(v.nama)}`"
          class="relative w-full rounded-2xl bg-no-repeat bg-cover bg-center h-[140px] cursor-pointer cursor-pointer-card"
          :style="{ backgroundImage: `url(${require('@/assets/images/' + cekKategoriImg(v.nama))})`, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }">
          <div class="absolute inset-0 flex flex-col justify-end z-20 px-[24px] pb-[24px]">
            <h3 class="text-white text-lg font-semibold">{{ v.nama }}</h3>
            <hr>
            <h3 class="text-white text-lg font-semibold">{{ v.jumlah }} Venue</h3>
          </div>
          <div class="absolute bg-black top-0 left-0 w-full h-full opacity-[0.3] rounded-2xl"></div>
          <div
            class="hover:transform hover:-translate-y-1 transition duration-300 ease-in-out absolute top-0 left-0 w-full h-full">
          </div>
        </a>
      </div>
    </div>
    <div class="pb-[24px] md:px-[50px]">
      <div class="flex items-center gap-4 flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-[50%]">
          <h3 class="text-3xl font-bold mb-[24px]">Sewa tempat <br /> dengan mudah dan <br /> cepat</h3>
          <p>
            Jangan buang waktu lagi mencari sewa tempat yang ideal. Segera temukan berbagai macam tempat sesuai dengan
            kebutuhan anda!
          </p>
        </div>
        <div class="w-full lg:w-[50%]">
          <img :src="require('@/assets/images/gambarkanan.png')" class="w-fit mx-auto" />
        </div>
      </div>
    </div>
    <div class="pb-[24px]">
      <div class="text-center py-[24px]">
        <h2 class="text-3xl font-bold mb-[14px]">Tempat Terbaik di tekMIRA</h2>
        <h3 class="text-md">Nikmati fasilitas layanan terbaik dari kami</h3>
      </div>
      <div class="flex items-center flex-wrap justify-center gap-8">
        <a v-for="(v, i) in dataTempat" :key="i" :href="`${cekKategoriSlug(v.kategori)}/${v.slug}`"
          class="w-full md:w-[30%] rounded-2xl overflow-hidden bg-white shadow-md cursor cursor-pointer-card"
          style="height: auto;">
          <img :src="require('@/assets/images/' + v.img[0])" class="w-full h-60 object-cover" />
          <div class="p-4">
            <h4 class="text-md font-semibold">{{ v.nama }}</h4>
            <p class="text-sm">{{ truncateText(v.deskripsi, 100) }}</p>
            <div class="flex justify-end mt-[24px]">
              <a :href="`${cekKategoriSlug(v.kategori)}/${v.slug}`"
                class="ml-auto text-sm text-rose-500 hover:underline hover:decoration-from-font">SELENGKAPNYA!</a>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kategori: [
      ],
    };
  },
  async mounted() {
    await this.hitungJumlahTempat();
  },
  computed: {
    dataTempat() {
      return this.$store.getters.dataTempat;
    },
  },
  methods: {
    truncateText(text, maxLength) {
      if (text && text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
    cekKategoriSlug(v) {
      return v.includes('Ruang Rapat') ? 'meeting' : v.includes('Wedding') ? 'wedding' : v.includes('tenis') ? 'tenis' : v.includes('wisma') ? 'wisma' : 'wisma';
    },
    cekKategoriImg(v) {
      return v.includes('Ruang Rapat') ? 'ra1.png' : v.includes('Wedding') ? 'kategori4.png' : v.includes('Tenis') ? 'tns1-1.png' : 'w2-6.png';
    },
    hitungJumlahTempat() {
      const tempatPerKategori = this.dataTempat.reduce((acc, curr) => {
        const existingCategory = acc.find(item => item.nama === curr.kategori);
        if (existingCategory) {
          existingCategory.jumlah++;
        } else {
          acc.push({ nama: curr.kategori, jumlah: 1 });
        }
        return acc;
      }, []);
      this.kategori = tempatPerKategori;
    },
  },
};
</script>

<style scoped>
.cursor-pointer-card {
  transition: transform 0.3s ease;
}

.cursor-pointer-card:hover {
  transform: translateY(-4px);
}
</style>
