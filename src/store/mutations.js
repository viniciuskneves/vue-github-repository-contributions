import Vue from 'vue';

export default {
  SET_REPOSITORIES(state, repositories) {
    const repositoriesName = repositories.map(_ => _.name);

    Vue.set(state, 'repositories', repositoriesName);
  },
};
