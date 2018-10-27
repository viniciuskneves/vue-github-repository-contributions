import Vue from 'vue';

export default {
  SET_REPOSITORIES(state, repositories) {
    const repositoriesName = repositories.map(_ => _.name);

    Vue.set(state, 'repositories', repositoriesName);
  },
  SET_CONTRIBUTORS(state, contributors) {
    const contributorsName = contributors.map(_ => ({
      name: _.login,
      count: _.contributions,
    }));

    Vue.set(state, 'contributors', contributorsName);
  },
  SET_ACTIVE_REPOSITORY(state, repository) {
    Vue.set(state, 'activeRepository', repository);
  },
};
