<script setup>
import SoftwareItem from "@/components/SoftwareItem.vue";
const softwareItems = [
  {
    name: "Remote Freelancer",
    link: "https://franciscobmacedo.github.io/remotefreelancept/",
    sourceCode: "https://github.com/franciscobmacedo/remotefreelancept",
    img: "remote_freelancer.jpg",
    descriptionPT:
      "é uma ferramenta para estimar o salário liquido e impostos a pagar de um freelancer que trabalha remotamente a partir de Portugal.",
    descriptionEN:
      "is a tool to help estimate the net income and taxes to pay when working remotely from Portugal.",
    tech: [
      { name: "Vue.js", type: "success" },
      { name: "javascript", type: "warning" },
    ],
  },
  {
    name: "Recursos Hídricos",
    link: "https://api.recursoshidricos.pt/api/v1/",
    sourceCode: "https://github.com/franciscobmacedo/recursoshidricos",
    img: "recursos_hidricos.jpg",
    descriptionPT:
      "é uma API para aceder a dados do SNIRH (sistema nacional de recursos hídricos) que permite ao utilizador obter informações sobre os recursos hídricos de todo o país de Portugal.",
    descriptionEN:
      "is an API to access SNIRH data (national water resources system) including the different networks, stations and parameters available in a standard format.",
    tech: [
      { name: "FastAPI", type: "success" },
      { name: "Python", type: "info" },
    ],
  },
  {
    name: "Fruta Feia, Cesta Feita",
    sourceCode: "https://github.com/franciscobmacedo/recursoshidricos",
    descriptionPT:
      "é uma ferramenta construida para apoiar a Fruta Feia (associação contra o desperdício alimentar) na optimização na criação de cestas de fruta e vegetais.",
    descriptionEN:
      "is a tool built to support Fruta Feia (organisation against food waste) in the optimization of the creation of fruit and vegetable baskets.",
    tech: [
      { name: "Django", type: "success" },
      { name: "Python", type: "info" },
      { name: "Google Sheets", type: "success" },
      { name: "Google Apps Script", type: "purple" },
    ],
  },
];
</script>
<template>
  <SoftwareItem
    v-for="item in softwareItems"
    :key="item.name"
    :name="item.name"
    :link="item.link"
    :img="item.img"
    :tech="item.tech"
    :sourceCode="item.sourceCode"
  >
    <template #descriptionPT>
      <a class="text-primary-500" :href="item.link" target="_blank">{{
        item.name
      }}</a>
      {{ item.descriptionPT }}
    </template>
    <template #descriptionEN>
      <a class="text-primary-500" :href="item.link" target="_blank">{{
        item.name
      }}</a>
      {{ item.descriptionEN }}
    </template>
  </SoftwareItem>
</template>
