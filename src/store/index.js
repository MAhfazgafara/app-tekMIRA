import Vue from 'vue';
import Vuex from 'vuex';
import Tempat from '@/mock/Tempat'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dataTempat: Tempat,
		kategoriTempat: [],
		detailTempat: null,
		tempatLain: [],
	},
	getters: {
		dataTempat: state => state.dataTempat,
		kategoriTempat: state => state.kategoriTempat,
		getDetailTempatBySlug: (state) => (slug) => {
			return state.dataTempat.find(tempat => tempat.slug === slug);
		},
		tempatLain: state => state.tempatLain,
	},
	mutations: {
		setKategoriTempat(state, kategori) {
			state.kategoriTempat = kategori;
		},
		setDetailTempat(state, detail) {
			state.detailTempat = detail;
		},
		setTempatLain(state, tempatLain) {
			state.tempatLain = tempatLain;
		},
	},
	actions: {
		fetchKategoriTempat({ commit, state }, params) {
			const tempatByCategory = state.dataTempat.filter(tempat => tempat.kategori === params);
			commit('setKategoriTempat', tempatByCategory);
		},
		fetchDetailTempat({ commit, getters }, slug) {
			const detail = getters.getDetailTempatBySlug(slug);
			commit('setDetailTempat', detail);
		},
		fetchTempatLain({ commit, state }, params) {
			const tempatLainFiltered = state.kategoriTempat.filter(tempat => tempat.slug !== params.slug && tempat.kategori === params.kategori);
			const tempatLainTop3 = tempatLainFiltered.slice(0, 3); // Ambil 3 data teratas
			commit('setTempatLain', tempatLainTop3);
		},
	},
	modules: {},
});
