import api from '@/utils/api';

export default {
  async SEARCH_REPOSITORIES({ commit }, username) {
    let data = [];

    if (username) {
      data = await api.searchRepositories(username);
    }

    commit('SET_REPOSITORIES', data);

    return data;
  },
  async SEARCH_CONTRIBUTORS({ state, commit }, repository) {
    const { activeRepository } = state;
    let { contributors: data } = state;

    if (activeRepository !== repository) {
      data = await api.searchContributors(repository.fullName);

      commit('SET_ACTIVE_REPOSITORY', repository);
      commit('SET_CONTRIBUTORS', data);
    }

    return data;
  },
};
