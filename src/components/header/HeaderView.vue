<template>
	<nav class="z-40 bg-white shadow-lg px-[16px] md:px-[32px] py-[24px]">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-8">
				<a href="/">
					<img style="width: 50px; height: 50px;" src="@/assets/icons/tekmira.png" alt="tekMIRA Logo"> </a>
				<h1 class="text-3xl font-medium" style="margin-left: -20px;">tekMIRA</h1>
				<div class="hidden md:flex gap-8"> <!-- hide the navigation links on mobile -->
					<a href="/meeting">
						<span :class="{
							'font-medium text-gray-600': $route.path.includes('/meeting'),
							'font-normal text-gray-600 hover:opacity-[0.8]': !$route.path.includes('/meeting')
						}">Meeting Room</span>
					</a>
					<a href="/wedding">
						<span :class="{
							'font-medium text-gray-600': $route.path.includes('/wedding'),
							'font-normal text-gray-600 hover:opacity-[0.8]': !$route.path.includes('/wedding')
						}">Wedding</span>
					</a>
					<a href="/tenis">
						<span :class="{
							'font-medium text-gray-600': $route.path.includes('/tenis'),
							'font-normal text-gray-600 hover:opacity-[0.8]': !$route.path.includes('/tenis')
						}">Tenis</span>
					</a>
					<a href="/wisma">
						<span :class="{
							'font-medium text-gray-600': $route.path.includes('/wisma'),
							'font-normal text-gray-600 hover:opacity-[0.8]': !$route.path.includes('/wisma')
						}">Wisma</span>
					</a>
				</div>
			</div>
			<!-- hamburger menu button -->
			<button class="md:hidden" @click="toggleMenu">
				<svg class="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M6 6h16M6 12h16M6 18h16"></path>
					<path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
			<!-- Sign In button -->
			<!-- <a href="#" class="hidden md:block bg-[#245785] hover:opacity-[0.8] text-white font-medium py-[8px] px-[16px] rounded text-[14px]">
			Sign In
		</a> -->
		</div>
		<div class="md:hidden" v-if="mobileMenuOpen">
			<a href="/meeting" :class="{
				'font-medium text-gray-600 py-2 block': $route.path.includes('/meeting'),
				'font-normal text-gray-600 hover:opacity-[0.8] py-2 block': !$route.path.includes('/meeting')
			}">Meeting Room</a>
			<a href="/wedding" :class="{
				'font-medium text-gray-600 py-2 block': $route.path.includes('/wedding'),
				'font-normal text-gray-600 hover:opacity-[0.8] py-2 block': !$route.path.includes('/wedding')
			}">Wedding</a>
			<a href="/tenis" :class="{
				'font-medium text-gray-600 py-2 block': $route.path.includes('/tenis'),
				'font-normal text-gray-600 hover:opacity-[0.8] py-2 block': !$route.path.includes('/tenis')
			}">Tenis</a>
			<a href="/wisma" :class="{
				'font-medium text-gray-600 py-2 block': $route.path.includes('/wisma'),
				'font-normal text-gray-600 hover:opacity-[0.8] py-2 block': !$route.path.includes('/wisma')
			}">Wisma</a>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			mobileMenuOpen: false,
		};
	},
	methods: {
		logout() {
			localStorage.clear();
			this.$router.push('/login');
		},
		toggleMenu() {
			this.mobileMenuOpen = !this.mobileMenuOpen;
		},
	},
};
</script>