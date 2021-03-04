<template>
  <div>
    <div v-for="(album, index) of albums" :key="index">
      <Album :album="album" />
      <v-divider class="mt-10 mb-10"></v-divider>
    </div>
    <div style="height: 70px"></div>
    <div class="text-center">
      <v-bottom-sheet
        v-model="sheet"
        persistent
        hide-overlay
        v-if="musicPlayingID !== null"
        no-click-animation
      >
        <v-sheet class="text-center" max-height="150px">
          <!-- <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn> -->

          <div class="">
            <MusicPlayer flat />
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import Album from "@/components/Album";
import MusicPlayer from "@/components/MusicPlayer";

import { mapState } from "vuex";

export default {
  components: {
    Album,
    MusicPlayer
  },
  data: () => ({
    sheet: true

    // razoes: {
    //   title: "Razões Para Acordar Cedo e Ir ao Shopping",
    //   artist: "Vidente Macedo",
    //   year: 2019,
    //   url:
    //     "https://videntemacedo.bandcamp.com/album/raz-es-para-acordar-cedo-e-ir-ao-shopping",
    //   image: "razoes_cover.jpg",
    //   songs: [
    //     {
    //       id: 0,
    //       name: "Razões para Acordar Cedo e Ir ao Shopping",
    //       file: "razoes/RAZÕES PARA ACORDAR CEDO E IR AO SHOPPING.mp3"
    //     },
    //     { id: 1, name: "A Vida Continua", file: "razoes/A VIDA CONTINUA.mp3" },
    //     {
    //       id: 2,
    //       name: "O Queque tu Queres",
    //       file: "razoes/O QUE É QUE TU QUERES.mp3"
    //     },
    //     {
    //       id: 3,
    //       name: "Isto é Só P'ra Betos",
    //       file: "razoes/ISTO É SÓ PARA BETOS.mp3"
    //     },
    //     { id: 5, name: "Meias no Colombo", file: "razoes/MEIAS NO COLOMBO.mp3" }
    //   ],
    //   body: {
    //     header: "é um EP composto por 5 músicas, editado pelo alter-ego",
    //     details: [
    //       { name: "Músicas e Letras", text: "por Vidente Macedo" },
    //       {
    //         name: "Gravação",
    //         text: "nos Estúdios Primas de Leça (Vasco Abreu e Vidente Macedo)"
    //       },
    //       { name: "Mistura", text: "nos Estúdios Primas de Leça" },
    //       { name: "Masterização", text: "nos Estúdios Primas de Leça" },
    //       {
    //         name: "Todos os Instrumentos",
    //         text:
    //           "(Piano, Guitarra, Gaita de Beiços, Melódica, bateria, baixo, teclado do portátil) tocados por Vidente Macedo"
    //       }
    //     ]
    //   }
    // },
    // calmante: {
    //   title: "Calmante Acústico",
    //   artist: "Macedo",
    //   year: 2015,
    //   url: "https://videntemacedo.bandcamp.com/album/calmante-ac-stico",
    //   image: "calmante_cover.jpg",
    //   songs: [
    //     { id: 6, name: "Primeira", file: "calmante/Primeira.mp3" },
    //     { id: 7, name: "Segunda", file: "calmante/Segunda.mp3" },
    //     { id: 8, name: "Terceira", file: "calmante/Terceira.mp3" },
    //     { id: 9, name: "Quarta", file: "calmante/Quarta.mp3" },
    //     { id: 10, name: "Quinta", file: "calmante/Quinta.mp3" }
    //   ],
    //   body: {
    //     header:
    //       "é um disco de cinco músicas calmantes de guitarra acústica editado pelo alter-ego",
    //     details: [
    //       { name: "Músicas", text: "por Macedo" },
    //       { name: "Gravação", text: "nos Estúdios Primas de Leça" },
    //       { name: "Mistura", text: "nos Estúdios Primas de Leça" },
    //       { name: "Masterização", text: "nos Estúdios Primas de Leça" },
    //       { name: "Passarinhos", text: "da Internet" },
    //       {
    //         name: "Todos os Instrumentos",
    //         text: "(Guitarra de cordas de nylon) tocados por Macedo"
    //       }
    //     ]
    //   }
    // }
  }),
  created() {
    console.log("asd");
    // this.$store.commit("pause");
  },
  computed: {
    ...mapState(["albums", "musicPlayingID"])
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
