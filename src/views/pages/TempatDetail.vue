<template>
  <div v-if="detailTempat" class="px-[16px] md:px-[42px]">
    <div v-if="showModalImage" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
      @click="closeModal">
      <div class="bg-white p-4 rounded-lg mt-[16px] h-fit w-full md:w-[600px] lg:w-[800px]" @click.stop>
        <button @click="showModalImage = false" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="white">
            </path>
          </svg>
        </button>
        <div class="w-fit overflow-hidden relative">
          <button @click="prevImage()"
            class="absolute top-1/2 left-0 transform-translate-y-1/2 p-2 ml-2 rounded-full opacity-[0.6] hover:opacity-[1] bg-gray-800 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg></button>
          <button @click="nextImage()"
            class="absolute top-1/2 right-0 transform-translate-y-1/2 p-2 mr-2 rounded-full opacity-[0.6] hover:opacity-[1] bg-gray-800 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg></button>
          <img :src="require('@/assets/images/' + detailTempat.img[indexImage])" class="w-full object-fill" />
        </div>
      </div>
    </div>
    <div v-if="showModalRoom !== -1" class="fixed items-center inset-0 flex justify-center bg-black bg-opacity-50 z-40"
      @click="closeModal">
      <div class="bg-white p-4 rounded-lg h-fit" @click.stop>
        <button @click="showModalRoom = -1" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="white">
            </path>
          </svg>
        </button>
        <div class="w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] overflow-y-scroll">
          <div class="w-fit relative">
            <button @click="prevImageRoom()"
              class="absolute top-1/2 left-0 transform-translate-y-1/2 p-2 ml-2 rounded-full opacity-[0.6] hover:opacity-[1] bg-gray-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg></button>
            <button @click="nextImageRoom()"
              class="absolute top-1/2 right-0 transform-translate-y-1/2 p-2 mr-2 rounded-full opacity-[0.6] hover:opacity-[1] bg-gray-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg></button>
            <img :src="require('@/assets/images/' + detailTempat.kamar[showModalRoom].img[indexImageRoom])"
              class="w-full object-fill" />
          </div>
          <div class="">
            <h3 class="text-2xl font-bold mb-[8px]">{{ detailTempat.kamar[showModalRoom].nama }}</h3>
            <h4 class="text-sm font-normal mb-[16px]">{{ formatRupiah(detailTempat.kamar[showModalRoom].harga) }} / Hari
            </h4>
            <div v-for="(fasilitas, idx) in detailTempat.kamar[showModalRoom].fasilitas" :key="idx"
              class="flex gap-2 text-sm items-center mb-[8px]"><img
                :src="require('@/assets/icons/' + cekFasilitasImg(idx))" class="object-contain w-[20px]" /> {{ fasilitas
              }}</div>
            <div class="flex flex-wrap gap-8 pt-[16px]">
              <div class="">
                <h5 class="text-md font-medium">Aksesibilitas</h5>
                <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                  <li v-for="(v, i) in detailTempat.kamar[showModalRoom].aksesibilitas" :key="i">{{ v }}</li>
                </ul>
              </div>
              <div class="">
                <h5 class="text-md font-medium">Kamar Mandi</h5>
                <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                  <li v-for="(v, i) in detailTempat.kamar[showModalRoom].kamarMandi" :key="i">{{ v }}</li>
                </ul>
              </div>
              <div class="">
                <h5 class="text-md font-medium">Kamar Tidur</h5>
                <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                  <li v-for="(v, i) in detailTempat.kamar[showModalRoom].kamarTidur" :key="i">{{ v }}</li>
                </ul>
              </div>
              <div class="">
                <h5 class="text-md font-medium">Makan dan Minum</h5>
                <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                  <li v-for="(v, i) in detailTempat.kamar[showModalRoom].makananMinuman" :key="i">{{ v }}</li>
                </ul>
              </div>
              <div class="">
                <h5 class="text-md font-medium">Hiburan</h5>
                <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                  <li v-for="(v, i) in detailTempat.kamar[showModalRoom].hiburan" :key="i">{{ v }}</li>
                </ul>
              </div>
              <div class="">
                <h5 class="text-md font-medium">Lainnya</h5>
                <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                  <li v-for="(v, i) in detailTempat.kamar[showModalRoom].lainnya" :key="i">{{ v }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-[24px] items-center">
          <a :href="`http://wa.me/628112330483?text=Hallo%20admin%20TekMIRA,%20saya%20mau%20reservasi%20kamar%20${detailTempat.kamar[showModalRoom].nama}%20-%20${detailTempat.nama}.`"
            class="ml-auto text-sm font-semibold text-white bg-[#245785] px-[16px] py-[8px] rounded-md cursor-pointer hover:opacity-[0.8]">Reservasi</a>
        </div>
      </div>
    </div>
    <div v-if="showModalPlace"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 overflow-y-scroll"
      @click="closeModal">
      <div class="bg-white p-4 rounded-lg" @click.stop>
        <button @click="showModalPlace = false" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="white">
            </path>
          </svg>
        </button>
        <div class="w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] overflow-y-scroll">
          <h3 class="text-2xl font-bold mb-[8px]">Tempat Populer</h3>
          <div class="flex flex-wrap gap-8">
            <div v-if="detailTempat.detailFasilitas.bandara">
              <h4 class="text-md font-bold">Bandara</h4>
              <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                <li v-for="(v, i) in detailTempat.detailFasilitas.bandara" :key="i"><span class="font-medium">{{ v[0]
                    }}</span> <br /> <span class="text-gray-500">{{ v[1] }}</span></li>
              </ul>
            </div>
            <div v-if="detailTempat.detailFasilitas.belanja">
              <h4 class="text-md font-bold">Belanja</h4>
              <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                <li v-for="(v, i) in detailTempat.detailFasilitas.belanja" :key="i"><span class="font-medium">{{ v[0]
                    }}</span> <br /> <span class="text-gray-500">{{ v[1] }}</span></li>
              </ul>
            </div>
            <div v-if="detailTempat.detailFasilitas.rumahSakit">
              <h4 class="text-md font-bold">Rumah Sakit</h4>
              <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                <li v-for="(v, i) in detailTempat.detailFasilitas.rumahSakit" :key="i"><span class="font-medium">{{ v[0]
                    }}</span> <br /> <span class="text-gray-500">{{ v[1] }}</span></li>
              </ul>
            </div>
            <div v-if="detailTempat.detailFasilitas.areaLuar">
              <h4 class="text-md font-bold">Area Luar</h4>
              <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                <li v-for="(v, i) in detailTempat.detailFasilitas.areaLuar" :key="i"><span class="font-medium">{{ v[0]
                    }}</span> <br /> <span class="text-gray-500">{{ v[1] }}</span></li>
              </ul>
            </div>
            <div v-if="detailTempat.detailFasilitas.transportasiUmum">
              <h4 class="text-md font-bold">Transportasi Umum</h4>
              <ul class="mb-[16px] text-sm list-disc pl-[20px]">
                <li v-for="(v, i) in detailTempat.detailFasilitas.transportasiUmum" :key="i"><span
                    class="font-medium">{{ v[0] }}</span> <br /> <span class="text-gray-500">{{ v[1] }}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-[24px] mt-[24px]">
      <div class="flex items-center gap-2 md:gap-4">
        <div
          class="w-full h-[200px] md:h-[500px] rounded-[10px] md:rounded-r-[0] md:rounded-l-[50px] overflow-hidden relative">
          <img :src="require('@/assets/images/' + detailTempat.img[0])" class="object-cover w-full h-full" />
          <div class="flex justify-center absolute bottom-[5px] right-[5px] md:hidden">
            <button @click="showModalImage = true"
              class="bg-black text-white px-4 py-2 rounded-md shadow-md opacity-[0.6] hover:opacity-[1] text-sm">Lihat
              Semua Foto</button>
          </div>
        </div>
        <div class="w-1/2 hidden md:flex flex-col justify-end gap-2 md:gap-4">
          <div class="flex gap-2 md:gap-4 flex-col">
            <div class="w-full flex justify-end">
              <div class="w-full rounded-tr-[50px] overflow-hidden">
                <img :src="require('@/assets/images/' + detailTempat.img[1])"
                  class="object-cover w-full h-[240px] rounded-tr-[50px]" />
              </div>
            </div>
            <div class="w-full flex justify-end relative">
              <div class="w-full rounded-br-[50px] overflow-hidden">
                <img :src="require('@/assets/images/' + detailTempat.img[2])"
                  class="object-cover w-full h-[240px] rounded-br-[50px]" />
              </div>
              <div class="flex justify-center absolute bottom-[5px] right-[30px]">
                <button @click="showModalImage = true"
                  class="bg-black text-white px-4 py-2 rounded-md shadow-md opacity-[0.6] hover:opacity-[1] text-sm">Lihat
                  Semua Foto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-[54px]">
      <div class="flex gap-4 flex-wrap lg:flex-nowrap">
        <div class="w-full">
          <div class="gap-4 pb-[12px]">
            <h3 class="text-3xl font-bold mb-[8px]">{{ detailTempat.nama }}</h3>
            <h4 v-if="detailTempat.harga" class="text-2xl font-normal">{{ formatRupiah(detailTempat.harga) }} / Hari
            </h4>
          </div>
          <div class="flex flex-col w-full justify-start gap-8 border-solid border-t-[2px] border-gray-300 py-[24px]">
            <p>{{ detailTempat.deskripsi }}</p>
            <a v-if="detailTempat.kategori !== 'Wisma'"
              :href="`http://wa.me/628112330483?text=Hallo%20admin%20TekMIRA,%20saya%20mau%20booking%20tempat%20${detailTempat.kategori}.`"
              target="_blank"
              class="px-[34px] py-[16px] md:px-[52px] md:py-[16px] rounded-md bg-white hover:opacity-[0.8] w-fit flex items-center gap-2"><img
                :src="require('@/assets/icons/wa.png')" class="inline w-[24px] h-[24px]" />PESAN SEKARANG!</a>
            <button v-else @click="scrollDown"
              class="px-[34px] py-[16px] md:px-[52px] md:py-[16px] rounded-md bg-white hover:opacity-[0.8] w-fit flex items-center gap-2 cursor-pointer"><img
                :src="require('@/assets/icons/wa.png')" class="inline w-[24px] h-[24px]" />PESAN SEKARANG!</button>
            <div :class="`${detailTempat.kategori === 'Tenis' ? '' : 'hidden'} w-full flex flex-col gap-4`">
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-4">
          <div
            :class="`${detailTempat.kategori !== 'Tenis' ? 'flex' : 'hidden'} items-start w-full px-[24px] py-[24px] bg-white shadow-sm rounded-xl`">
            <div class="w-1/2 md:w-1/3">
              <h3 class="text-md font-semibold mb-[6px]">Ukuran</h3>
              <p>{{ detailTempat.spesifikasi.ukuran }}</p>
            </div>
            <div class="w-1/3 hidden md:block">
              <h3 class="text-md font-semibold mb-[6px]">Hubungi</h3>
              <p>{{ detailTempat.spesifikasi.hubungi }}</p>
            </div>
            <div class="w-1/2 md:w-1/3">
              <h3 class="text-md font-semibold mb-[6px]">Kapasitas</h3>
              <p>{{ detailTempat.spesifikasi.kapasitas }} </p>
            </div>
          </div>
          <div
            :class="`${detailTempat.kategori !== 'Tenis' ? '' : 'hidden'} w-full px-[24px] py-[24px] bg-white shadow-sm rounded-xl`">
            <h3 class="text-md md:text-lg font-semibold mb-6">
              {{ detailTempat.kategori === 'Wisma' ? 'Fasilitas Utama' : 'Tempat Populer' }}
            </h3>
            <div class="flex flex-wrap">
              <div v-for="(v, i) in detailTempat.fasilitas" :key="i"
                :class="`${detailTempat.kategori !== 'Wisma' ? 'w-1/2' : 'w-full'} flex mb-[8px] gap-4`">
                <img v-if="detailTempat.kategori !== 'Wisma'" :src="require('@/assets/icons/' + v + '.png')"
                  class="object-contain" />
                <p v-if="detailTempat.kategori !== 'Wisma'">{{ v }}</p>
                <div v-else class="flex justify-between w-full">
                  <p>{{ v[0] }}</p>
                  <p>{{ v[1] }}</p>
                </div>
              </div>
              <span v-if="detailTempat.kategori === 'Wisma'" @click="showModalPlace = true"
                class="text-[#2587FB] text-sm font-medium cursor-pointer hover:opacity-[0.8] ml-auto mt-[8px]">See
                More</span>
            </div>
          </div>
          <div
            :class="`${detailTempat.kategori === 'Tenis' ? '' : 'hidden'} w-full px-[14px] md:px-[24px] py-[24px] bg-white shadow-sm rounded-xl border-solid border-b-[2px] border-gray-300`">
            <h3 class="text-md md:text-lg font-semibold mb-[6px]">Daftar Harga</h3>
            <div class="flex justify-between">
              <div>
                <h4 class="text-sm font-semibold mb-[8px]">Daftar Tarif Weekend:</h4>
                <span class="bg-[#245785] px-[16px] py-[8px] rounded-md text-white text-sm">Rp. 40.000</span>
                <ul class="mt-[16px] mb-[16px] text-sm list-disc ml-[8px]">
                  <li>Sesi 05:00 - 06:00</li>
                  <li>Sesi 06:00 - 07:00</li>
                  <li>Sesi 07:00 - 08:00</li>
                  <li>Sesi 08:00 - 09:00</li>
                  <li>Sesi 09:00 - 10:00</li>
                  <li>Sesi 10:00 - 11:00</li>
                  <li>Sesi 11:00 - 12:00</li>
                  <li>Sesi 12:00 - 13:00</li>
                  <li>Sesi 13:00 - 14:00</li>
                  <li>Sesi 14:00 - 15:00</li>
                  <li>Sesi 15:00 - 16:00</li>
                  <li>Sesi 16:00 - 17:00</li>
                </ul>
                <span class="bg-[#245785] px-[16px] py-[8px] rounded-md text-white text-sm">Rp. 70.000</span>
                <ul class="mt-[16px] text-sm list-disc ml-[8px]">
                  <li>Sesi 17:00 - 18:00</li>
                  <li>Sesi 18:00 - 19:00</li>
                  <li>Sesi 19:00 - 20:00</li>
                  <li>Sesi 20:00 - 21:00</li>
                  <li>Sesi 21:00 - 22:00</li>
                </ul>
              </div>
              <div>
                <h4 class="text-sm font-semibold mb-[8px]">Daftar Tarif Weekday:</h4>
                <span class="bg-[#245785] px-[16px] py-[8px] rounded-md text-white text-sm">Rp. 40.000</span>
                <ul class="mt-[16px] mb-[16px] text-sm list-disc ml-[8px]">
                  <li>Sesi 05:00 - 06:00</li>
                  <li>Sesi 06:00 - 07:00</li>
                  <li>Sesi 07:00 - 08:00</li>
                  <li>Sesi 08:00 - 09:00</li>
                  <li>Sesi 09:00 - 10:00</li>
                  <li>Sesi 10:00 - 11:00</li>
                  <li>Sesi 11:00 - 12:00</li>
                  <li>Sesi 12:00 - 13:00</li>
                  <li>Sesi 13:00 - 14:00</li>
                  <li>Sesi 14:00 - 15:00</li>
                  <li>Sesi 15:00 - 16:00</li>
                  <li>Sesi 16:00 - 17:00</li>
                </ul>
                <span class="bg-[#245785] px-[16px] py-[8px] rounded-md text-white text-sm">Rp. 70.000</span>
                <ul class="mt-[16px] text-sm list-disc ml-[8px]">
                  <li>Sesi 17:00 - 18:00</li>
                  <li>Sesi 18:00 - 19:00</li>
                  <li>Sesi 19:00 - 20:00</li>
                  <li>Sesi 20:00 - 21:00</li>
                  <li>Sesi 21:00 - 22:00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div ref="scrollTarget" v-if="detailTempat.kamar" class="pb-[54px]">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-4">
          <h2 class="text-3xl font-semibold">Pilih Kamar Anda</h2>
          <img :src="require('@/assets/icons/right-arrow.png')" class="object-cover" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(v, i) in detailTempat.kamar" :key="i"
            class="rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer-card">
            <img :src="require('@/assets/images/' + v.img[0])" class="w-full h-60 object-cover" />
            <div class="p-4">
              <h4 class="text-md font-semibold">{{ v.nama }}</h4>
              <h5 class="text-sm font-normal mb-[16px]">{{ formatRupiah(v.harga) }} / Hari</h5>
              <div v-for="(fasilitas, idx) in v.fasilitas" :key="idx" class="flex gap-2 text-sm items-center mb-[8px]">
                <img :src="require('@/assets/icons/' + cekFasilitasImg(idx))" class="object-contain w-[20px]" /> {{
                  fasilitas }}
              </div>
              <div class="flex justify-end mt-[24px] items-center">
                <span @click="showModalRoom = i"
                  class="text-[#2587FB] text-sm font-semibold cursor-pointer hover:opacity-[0.8]">More Detail</span>
                <a :href="`http://wa.me/628112330483?text=Hallo%20admin%20TekMIRA,%20saya%20mau%20reservasi%20kamar%20${v.nama}%20-%20${detailTempat.nama}.`"
                  class="ml-auto text-sm font-semibold text-white bg-[#245785] px-[16px] py-[8px] rounded-md cursor-pointer hover:opacity-[0.8]">Reservasi</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="`${detailTempat.kategori === 'Wedding' ? 'block' : 'hidden'} items-start w-full px-[24px] py-[24px] bg-white shadow-sm rounded-xl mb-[16px]`">
      <div class="flex flex-wrap md:flex-nowrap w-full border-solid border-b-[2px] border-gray-300 py-[8px]">
        <div class="w-[100%] md:w-[30%]">
          <h1 class="text-[24px] font-semibold">
            Keterangan
          </h1>
        </div>
        <div class="w-[100%] md:w-[70%]">
          <div v-for="(v, i) in detailTempat.keterangan" :key="i" class="mb-[8px]">
            {{ i + 1 }}) {{ v.judul }}
            <div v-for="(detail, index) in v.detail" :key="index" class="ps-[16px]">
              {{ String.fromCharCode(97 + index) }}. {{ detail }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap md:flex-nowrap w-full pb-[8px] pt-[16px]">
        <div class="w-[100%] md:w-[30%]">
          <h1 class="text-[24px] font-semibold">
            Keterangan Lebih Rinci
          </h1>
        </div>
        <div>
          <div v-for="(v, i) in detailTempat.keteranganLebihRinci" :key="i" class="w-[100%] md:w-[70%] mb-[8px]">
            {{ i + 1 }}) {{ v.judul }}
            <div v-for="(detail, index) in v.detail" :key="index" class="ps-[16px]">
              {{ String.fromCharCode(97 + index) }}. {{ detail.judul }}
              <div v-for="(d, idx) in detail.detail" :key="idx" class="ps-[16px]">
                - {{ d }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="`${detailTempat.kategori === 'Wedding' ? 'block' : 'hidden'} items-start w-full px-[24px] py-[24px] bg-white shadow-sm rounded-xl`">
      <h1 class="text-[24px] font-bold uppercase">TATA CARA PENGENAAN TARIF PENGGUNAAN GEDUNG {{ detailTempat.nama }}
      </h1>
      <div class="flex flex-wrap md:flex-nowrap w-full border-solid border-b-[2px] border-gray-300 py-[8px]">
        <div class="w-[100%] md:w-[30%]">
          <h1 class="text-[24px] font-semibold">
            Pembayaran
          </h1>
        </div>
        <ul class="w-[100%] md:w-[70%]">
          <li class="mb-[8px]">1) Pengguna jasa wajib membayar uang muka minimal sebesar 35% dari tarif pada saat
            pemesanan sewa gedung.</li>
          <li class="mb-[8px]">2) Pelunasan harus dilakukan paling lambat 2 bulan sebelum tanggal penggunaan gedung.
          </li>
          <li class="mb-[8px]">3) Khusus untuk pemesanan sewa gedung kurang dari 2 bulan sebelum tanggal penggunaan,
            maka pembayaran dilakukan sebesar 100% dari tarif.</li>
          <li class="mb-[8px]">4) Bagi karyawan atau keluarga iinti dari karyawan Badan Layanan Umum Balai Besar
            Pengujian Mineral dan Batubara tekMIRA dikenakan diskon sebesar 25% dari tarif, dengan syarat harus
            menyertakan kartu keluarga. keluarga inti adalah anak yang tercantum dalam kartu keluarga karyawan Badan
            Layanan Umum Balai Besar Pengujian Mineral dan Batubara tekMIRA.</li>
        </ul>
      </div>
      <div class="flex flex-wrap md:flex-nowrap w-full border-solid border-b-[2px] border-gray-300 py-[8px]">
        <div class="w-[100%] md:w-[30%]">
          <h1 class="text-[24px] font-semibold">
            Penundaan
          </h1>
        </div>
        <ul class="w-[100%] md:w-[70%]">
          <li class="mb-[8px]">1) Jika terjadi pembatalan atau tikdak dilakukan pelunasan kurang dari 2 bulan sebelum
            tanggal penggunaan gedung, maka pemesanan dianggap batal dan uang muka sebesar 35% dari tarif tidak dapat
            dikembalikan kepada pengguna.</li>
          <li class="mb-[8px]">2) Jika terjadi pembatalan lebih dari 2 bulan sebelum tanggal penggunaan gedung, maka
            uang yang sudah masuk dipotong sebesar 50% dari uang muka.</li>
          <li class="mb-[8px]">3) Khusus untuk pemesanan sewa gedung kurang dari 2 bulan sebelum tanggal penggunaan,
            maka pembayaran dilakukan sebesar 100% dari tarif.</li>
          <li class="mb-[8px]">4) Pemesanan atau pemakaian gedung tidak dapat dialihkan kepada pihak lain.</li>
        </ul>
      </div>
      <div class="flex flex-wrap md:flex-nowrap w-full py-[8px]">
        <div class="w-[100%] md:w-[30%]">
          <h1 class="text-[24px] font-semibold">
            Pembatalan
          </h1>
        </div>
        <ul class="w-[100%] md:w-[70%]">
          <li class="mb-[8px]">1) Penundaan/perubahan tanggal hanya dapat dilakukan paling lambat 2 bulan sebelum
            tanggal penggunaan gedung.</li>
          <li class="mb-[8px]">2) Penundaan/perubahan tanggal acara yang dilakukan kurang dari 2 bulan sebelum tanggal
            penggunaan gedung, dianggap sebagai pembatalan.</li>
          <li class="mb-[8px]">3) Untuk perubahan tanggal sebagaimana dimaksud pada angka 1) hanya dapat dilakukan 1
            kali dan perubahan tanggal tersebut maksimal sampai 3 bulan berikutnya.</li>
        </ul>
      </div>
    </div>
    <div class="pb-[54px]">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-4">
          <h2 class="text-3xl font-semibold">Lihat Ruangan Lainnya</h2>
          <img :src="require('@/assets/icons/right-arrow.png')" class="object-cover" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a v-for="(v, i) in tempatLain" :key="i" :href="`${v.slug}`"
            class="rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer-card" style="height: auto;">
            <img :src="require('@/assets/images/' + v.img[0])" class="w-full h-60 object-cover" />
            <div class="p-4">
              <h4 class="text-md font-semibold">{{ v.nama }}</h4>
              <p class="text-sm">{{ truncateText(v.deskripsi, 100) }}</p>
              <div class="flex justify-end mt-[24px]">
                <a :href="`${v.slug}`"
                  class="ml-auto text-sm text-rose-500 hover:underline hover:decoration-from-font">SELENGKAPNYA!</a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="pb-[54px]">
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-semibold">Lokasi</h2>
        <div class="flex gap-2">
          <img :src="require('@/assets/icons/lokasi.png')" class="object-contain" />
          <h3>{{ detailTempat.lokasi }}</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7675326119415!2d107.5765414750902!3d-6.918371767713968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e606d1d99309%3A0x258f2b35fa2ac2ac!2sBBPMB%20tekMIRA!5e0!3m2!1sen!2sid!4v1711814411862!5m2!1sen!2sid"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  <div v-else>
    <ErrorPage />
  </div>
</template>

<script>
import ErrorPage from "@/views/pages/Error/404.vue";

export default {
  components: {
    ErrorPage,
  },
  metaInfo() {
    return {
      title: this.detailTempat.nama,
      titleTemplate: "tekMIRA - %s",
    };
  },
  data() {
    return {
      showModalImage: false,
      showModalRoom: -1,
      showModalPlace: false,
      indexImage: 0,
      indexImageRoom: 0,
    };
  },
  computed: {
    detailTempat() {
      return this.$store.state.detailTempat;
    },
    tempatLain() {
      return this.$store.state.tempatLain;
    },
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      await this.$store.dispatch('fetchDetailTempat', this.$route.params.slug);
      await this.$store.dispatch('fetchKategoriTempat', this.detailTempat.kategori); // Ambil kategori dari detailTempat
      await this.$store.dispatch('fetchTempatLain', {
        slug: this.$route.params.slug,
        kategori: this.detailTempat.kategori // Gunakan kategori dari detailTempat
      });

    },
    truncateText(text, maxLength) {
      if (text && text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
    cekKategoriSlug(v) {
      return v.includes('Ruang Rapat') ? 'meeting' : v.includes('Wedding') ? 'wedding' : v.includes('tenis') ? 'tenis' : 'wisma';
    },
    cekFasilitasImg(i) {
      return i === 0 ? 'Wifi.png' : i === 1 ? 'People.png' : i === 2 ? 'Luas.png' : 'Bed.png';
    },
    formatRupiah(angka) {
      // Ubah angka menjadi format mata uang Rupiah
      let rupiah = '';
      const angkaStr = String(angka);
      const angkaArr = angkaStr.split('').reverse();

      for (let i = 0; i < angkaArr.length; i++) {
        if (i % 3 === 0 && i !== 0) {
          rupiah = '.' + rupiah;
        }
        rupiah = angkaArr[i] + rupiah;
      }

      return 'Rp. ' + rupiah;
    },
    closeModal(event) {
      // Tutup modal hanya jika klik di luar container modal
      if (event.target.classList.contains('fixed')) {
        this.showModalImage = false;
        this.showModalRoom = -1;
        this.indexImageRoom = 0;
        this.showModalPlace = false;
      }
    },
    nextImage() {
      if (this.indexImage !== this.detailTempat.img.length - 1) {
        this.indexImage += 1;
      } else {
        this.indexImage = 0;
      }
    },
    prevImage() {
      if (this.indexImage !== 0) {
        this.indexImage -= 1;
      } else {
        this.indexImage = this.detailTempat.img.length - 1;
      }
    },
    nextImageRoom() {
      if (this.indexImageRoom !== this.detailTempat.kamar[this.showModalRoom].img.length - 1) {
        this.indexImageRoom += 1;
      } else {
        this.indexImageRoom = 0;
      }
    },
    prevImageRoom() {
      if (this.indexImageRoom !== 0) {
        this.indexImageRoom -= 1;
      } else {
        this.indexImageRoom = this.detailTempat.kamar[this.showModalRoom].img.length - 1;
      }
    },
    scrollDown() {
      // Mengakses elemen yang ingin digulir
      const target = this.$refs.scrollTarget;
      // Menggulir ke elemen target
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }
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