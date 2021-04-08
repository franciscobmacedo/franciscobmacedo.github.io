<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          @click="goToExternalWebsite(url)"
          :class="[hover ? 'background-effect' : '', fade ? 'btn' : '']"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-hover>
    </template>
    <span>{{ name }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    icon: {
      type: String,
    },
    name: {
      type: String,
    },
    fade: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goToExternalWebsite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.background-effect {
  background-color: var(--v-primary-lighten2);
}

.btn {
  // display: inline-block;
  // color: var(--v-primary-base);
  // text-decoration: none;
  // padding: 1rem 2rem;
  // border: var(--v-primary-base) 1px solid;
  // margin-top: 40px;
  opacity: 0;
  animation-name: btn;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;

  transition-property: transform;
  transition-duration: 1s;
}

@keyframes btn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
