<template>
  <div>
    <!-- <v-app-bar class="palid" flat dense v-if="$vuetify.breakpoint.mdAndDown">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          class="closer"
          :to="item.link"
          active-class="active-link"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-navigation-drawer
      :v-model="drawer"
      v-if="$vuetify.breakpoint.smAndUp"
      app
      class="pl-10 pt-10 background"
      style=" 
  height: 100%;"
      :width="325"
      floating
    >
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>
            mdi-test-tube-off
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-overline">
            Francisco Macedo
          </v-list-item-title>
          <v-list-item-subtitle>
            Cientista
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list
        dense
        nav
        style="
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0;  bottom: 0;
"
      >
        <v-list-item
          v-for="(section, index) in sections"
          :key="index"
          link
          class="closer"
          :to="section.link"
          active-class="active-link"
        >
          <v-list-item-icon>
            <v-icon>
              {{ section.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ section.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      right: null,
    };
  },
  computed: {
    ...mapState(["sections"]),
  },
};
</script>

<style>
/* .closer {
  min-height: 20px !important;
  height: 20px !important;
} */
.v-list-item:before {
  border-radius: 0px !important;
}

.theme--light.v-list-item--active::before {
  opacity: 0 !important;
}
.active-link {
  color: #e8281e !important;
}

/* .v-list-item:hover::before{
  color: transparent !important;
  opacity: 0 !important;
} */
/* 
.v-list-item:focus::before{
  color: transparent !important;
   opacity: 0 !important; 
} */
/* .v-list-item:focus{
  color: blue;
  opacity: 1 ;
}

.v-list-item:focus .v-list-item__content{
  color: inherit;
}

.v-list-item--active::before{
  color: transparent !important;
  opacity: 0 !important;
}
.v-list-item--active{
  color: transparent !important;
  opacity: 1 !important;
}
.active-link .v-list-item__content{
  color: red
} */
</style>
