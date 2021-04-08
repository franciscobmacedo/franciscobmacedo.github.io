import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sections: [
      { icon: "mdi-music", title: "Música", link: "/music" },
      { icon: "mdi-video", title: "Vídeo", link: "/video" },
      { icon: "mdi-code-tags", title: "Programação", link: "/developer" },
      { icon: "mdi-typewriter", title: "Escrita", link: "/writing" },
      { icon: "mdi-camera", title: "Fotografia", link: "/photograph" },
    ],
    musicPlayingID: null,
    pauseMusic: true,
    albums: [
      {
        title: "Razões Para Acordar Cedo e Ir ao Shopping",
        artist: "Vidente Macedo",
        year: 2019,
        streamingUrls: [
          {
            icon: "mdi-spotify",
            name: "spotify",
            url:
              "https://open.spotify.com/album/3tXK6NHg84sg0ilRAw7TSv?si=1rEqHe-wQH-IyyVvXmDBSQ",
          },
          {
            icon: "mdi-apple",
            name: "apple music",
            url:
              "https://music.apple.com/us/album/raz%C3%B5es-para-acordar-cedo-e-ir-ao-shopping-ep/1559101276",
          },

          {
            icon: "mdi-bandcamp",
            name: "bandcamp",
            url:
              "https://videntemacedo.bandcamp.com/album/raz-es-para-acordar-cedo-e-ir-ao-shopping",
          },
        ],
        image: "razoes_cover.jpg",
        songs: [
          {
            id: 0,
            name: "Razões para Acordar Cedo e Ir ao Shopping",
            file: "razoes/RAZÕES PARA ACORDAR CEDO E IR AO SHOPPING.mp3",
          },
          {
            id: 1,
            name: "A Vida Continua",
            file: "razoes/A VIDA CONTINUA.mp3",
          },
          {
            id: 2,
            name: "O Queque tu Queres",
            file: "razoes/O QUE É QUE TU QUERES.mp3",
          },
          {
            id: 3,
            name: "Isto é Só P'ra Betos",
            file: "razoes/ISTO É SÓ PARA BETOS.mp3",
          },
          {
            id: 4,
            name: "Meias no Colombo",
            file: "razoes/MEIAS NO COLOMBO.mp3",
          },
        ],
        body: {
          header: "é um EP composto por 5 músicas, editado pelo alter-ego",
          details: [
            { name: "Músicas e Letras", text: "por Vidente Macedo" },
            {
              name: "Gravação",
              text:
                "nos Estúdios Primas de Leça (Vasco Abreu e Vidente Macedo)",
            },
            { name: "Mistura", text: "nos Estúdios Primas de Leça" },
            { name: "Masterização", text: "nos Estúdios Primas de Leça" },
            {
              name: "Todos os Instrumentos",
              text:
                "(Piano, Guitarra, Gaita de Beiços, Melódica, bateria, baixo, teclado do portátil) tocados por Vidente Macedo",
            },
          ],
        },
      },
      {
        title: "Calmante Acústico",
        artist: "Macedo",
        year: 2015,
        streamingUrls: [
          {
            icon: "mdi-spotify",
            name: "spotify",
            url:
              "https://open.spotify.com/album/36KU20tq8Sz6CdV1XkbyTB?si=pg_PIDxxSA6UoQhxjhHhZQ",
          },
          {
            icon: "mdi-apple",
            name: "apple music",
            url:
              "https://music.apple.com/us/album/calmante-ac%C3%BAstico-ep/1558849770",
          },
          {
            icon: "mdi-bandcamp",
            name: "bandcamp",
            url: "https://videntemacedo.bandcamp.com/album/calmante-ac-stico",
          },
        ],
        image: "calmante_cover.jpg",
        songs: [
          { id: 5, name: "Primeira", file: "calmante/Primeira.mp3" },
          { id: 6, name: "Segunda", file: "calmante/Segunda.mp3" },
          { id: 7, name: "Terceira", file: "calmante/Terceira.mp3" },
          { id: 8, name: "Quarta", file: "calmante/Quarta.mp3" },
          { id: 9, name: "Quinta", file: "calmante/Quinta.mp3" },
        ],
        body: {
          header:
            "é um disco de cinco músicas calmantes de guitarra acústica editado pelo alter-ego",
          details: [
            { name: "Músicas", text: "por Macedo" },
            { name: "Gravação", text: "nos Estúdios Primas de Leça" },
            { name: "Mistura", text: "nos Estúdios Primas de Leça" },
            { name: "Masterização", text: "nos Estúdios Primas de Leça" },
            { name: "Passarinhos", text: "da Internet" },
            {
              name: "Todos os Instrumentos",
              text: "(Guitarra de cordas de nylon) tocados por Macedo",
            },
          ],
        },
      },
    ],
  },
  getters: {
    allSongs(state) {
      let songs = state.albums.map((album) => album["songs"]);
      return [].concat.apply([], songs);
    },
    musicPlaying(state, getters) {
      if (state.musicPlayingID === null || state.musicPlayingID === undefined) {
        return {};
      }
      const id = state.musicPlayingID;
      const music = getters.allSongs.filter((song) => song.id == id)[0];
      let albumName = "";
      let albumCover = "";

      state.albums.map((album) => {
        album.songs.map((song) => {
          if (song.id == music.id) {
            albumName = album.title;
            albumCover = album.image;
          }
        });
      });
      music["albumCover"] = albumCover;
      music["albumName"] = albumName;

      return music;
    },
  },
  mutations: {
    setMusicID(state, id) {
      state.pauseMusic = false;
      state.musicPlayingID = id;
    },
    playPause(state) {
      state.pauseMusic = !state.pauseMusic;
    },
    pause(state) {
      state.pauseMusic = true;
    },

    stopMusic(state) {
      state.pauseMusic = true;
      state.musicPlayingID = null;
    },
  },
  actions: {},
  modules: {},
});
