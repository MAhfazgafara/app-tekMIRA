<template>
	<footer class="z-10 bg-[#013068] shadow-lg px-[16px] md:px-[42px] py-[34px]">

		<div class="flex justify-between gap-8 flex-wrap">
			<div class="flex flex-col w-full md:w-1/2 lg:w-1/4 gap-8">
				<h4 class="text-white font-semibold text-xl">Informasi</h4>
				<div class="flex flex-col gap-4">
					<a href="https://tekmira.esdm.go.id/" target="_blank" class="text-white font-semibold text-md">Situs
						Utama</a>
					<a href="/contact" class="text-white font-semibold text-md">Hubungi Kami</a>
				</div>
			</div>
			<div class="flex flex-col w-full md:w-1/2 lg:w-1/4 gap-8">
				<h4 class="text-white font-semibold text-lg">Tautan Terkait</h4>
				<div class="flex flex-col gap-4">
					<a href="https://www.esdm.go.id/" target="_blank"
						class="text-white font-semibold text-sm">Kementerian ESDM</a>
					<a href="https://www.minerba.esdm.go.id/" target="_blank"
						class="text-white font-semibold text-sm">Direktorat Jenderal Mineral dan Batubara</a>
				</div>
			</div>
			<div class="flex flex-col w-full md:w-1/2 lg:w-1/4 gap-8">
				<h4 class="text-white font-semibold text-lg">Balai Besar Pengujian Mineral dan Batubara (BBPMB)</h4>
				<div class="flex flex-col gap-4">
					<p class="text-white font-semibold text-sm">Jalan Jend. Sudirman No.623, Wr. Muncang, Kec. Bandung
						Kulon, Kota Bandung, Jawa Barat 40211</p>
					<p class="text-white font-semibold text-sm">(022) 6030483</p>
					<a href="mailto:info.tekmira@esdm.go.id" target="_blank"
						class="text-white font-semibold text-sm">info.tekmira@esdm.go.id</a>
				</div>
			</div>
			<div class="flex flex-col md:w-1/2 lg:w-1/6 gap-8">
				<h4 class="text-white font-semibold text-xl">Media Sosial</h4>
				<div class="flex gap-4">
					<a href="https://www.facebook.com/BLUtekMIRA" target="_blank"
						class="text-white font-semibold text-md"><img :src="require('@/assets/icons/fb.png')"
							class="object-fill w-[30px] h-[30px]" /></a>
					<a href="https://twitter.com/BLUtekMIRA?s=20" target="_blank"
						class="text-white font-semibold text-md"><img :src="require('@/assets/icons/x.png')"
							class="object-fill w-[30px] h-[30px]" /></a>
					<a href="https://www.instagram.com/blu.tekmira/" target="_blank"
						class="text-white font-semibold text-md"><img :src="require('@/assets/icons/ig.png')"
							class="object-fill w-[30px] h-[30px]" /></a>
					<a href="https://www.youtube.com/@blutekMIRA" target="_blank"
						class="text-white font-semibold text-md"><img :src="require('@/assets/icons/yt.png')"
							class="object-fill w-[30px] h-[30px]" /></a>
					<a href="https://www.tiktok.com/@blutekmira" target="_blank"
						class="text-white font-semibold text-md"><img :src="require('@/assets/icons/tt.png')"
							class="object-fill w-[35px] h-[35px]" /></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	methods: {
		logout() {
			localStorage.clear();
			this.$router.push('/login');
		},
	},
};
</script>