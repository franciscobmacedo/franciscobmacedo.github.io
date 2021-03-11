<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      outlined
      :href="'https://github.com/' + repository.full_name"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          tile
          size="50"
          color="grey"
          :href="repository.login"
        >
          <img :src="repository.owner.avatar_url" />
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="overline mb-4">{{ repository.language }}</div>
          <v-list-item-title class="headline mb-1 name">
            {{ repository.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{
            repository.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions>
    </v-card>

    <div class="repo-github">
      <div class="repo-container">
        <div class="repo-card">
          <div class="header">
            <a class="avatar" :href="repository.login">
              <img :src="repository.owner.avatar_url" />
            </a>
            <strong class="name">
              <a :href="'https://github.com/' + repository.full_name">{{
                repository.name
              }}</a>
              <sup class="language">{{ repository.language }}</sup>
            </strong>
            <span
              >Created by
              <a :href="'https://github.com/' + repository.owner.login">{{
                repository.owner.login
              }}</a>
            </span>
            <a
              class="button-star"
              :href="'https://github.com/' + repository.full_name"
              >Star</a
            >
          </div>
          <div class="content">
            <p>{{ repository.description }}</p>
          </div>
          <div class="footer">
            <span class="status">
              <strong>{{ repository.forks_count }}</strong> Forks
            </span>
            <span class="status">
              <strong>{{ repository.stargazers_count }}</strong> Stars
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "repo", "token"],
  data: () => ({
    repository: {
      owner: {},
    },
  }),
  created() {
    const headers = !this.token
      ? {
          headers: {},
        }
      : {
          headers: {
            Authorization: "token " + this.token,
          },
        };
    fetch(
      "https://api.github.com/repos/" + this.name + "/" + this.repo,
      headers
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.repository = data;
      });
  },
};
</script>

<style scoped>
.repo-github {
  margin: 10px;
}
.repo-container {
  background: white;
  width: 400px;
  border: 1px solid #eee;
  padding: 7px;
  border-top-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);

  border-radius: 5px;

  border-color: #eee #ddd #bbb;

  box-shadow: rgba(0, 0, 0, 0.14) 0 1px 3px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 8px 8px 0;
  background: #fff;
  color: #555;
  position: relative;
}

.repo-container a {
  text-decoration: none;
  color: #4183c4;
  outline: 0;
}
.repo-container a:hover {
  text-decoration: underline;
}

.repo-container .header {
  position: relative;
}
.repo-container .button-star {
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 8px 4px 7px;
  color: #555;
  text-shadow: 0 1px 0 #fff;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  line-height: 14px;
  background-color: #e6e6e6;
  background-image: -webkit-linear-gradient(#fafafa, #eaeaea);
  background-image: -moz-linear-gradient(#fafafa, #eaeaea);
  background-image: -ms-linear-gradient(#fafafa, #eaeaea);
  background-image: linear-gradient(#fafafa, #eaeaea);
}
.repo-container .button:hover {
  color: #fff;
  text-decoration: none;
  background-color: #3072b3;
  background-image: -webkit-linear-gradient(#599bdc, #3072b3);
  background-image: -moz-linear-gradient(#599bdc, #3072b3);
  background-image: -ms-linear-gradient(#599bdc, #3072b3);
  background-image: linear-gradient(#599bdc, #3072b3);
  border-color: #518cc6 #518cc6 #2a65a0;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}

.repo-card .header {
  padding: 3px 0 4px 57px;
}
.repo-card .avatar,
.repo-card .avatar img {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 4px;
}
.repo-card .header a {
  color: #707070;
}
.repo-card .header strong {
  display: block;
  font-size: 18px;
  line-height: 1.4;
}
.repo-card .header strong a {
  color: #292f33;
}
.repo-card .header sup {
  font-size: 10px;
  margin-left: 3px;
  color: #797979;
}
.repo-card .content {
  padding: 6px 0 10px;
}
.repo-card .content p {
  margin: 0 5px 0 0;
  overflow: hidden;
  clear: both;
  word-wrap: break-word;
}
.repo-card .footer {
  border-top: 1px solid #eee;
  padding: 8px 0 6px;
}
.repo-card .status {
  font-size: 10px;
  padding-right: 10px;
  text-transform: uppercase;
}
.repo-card .status strong {
  font-size: 12px;
  padding-right: 5px;
}
</style>
