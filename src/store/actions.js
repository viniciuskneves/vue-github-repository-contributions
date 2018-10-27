import api from '@/utils/api';

export default {
  async SEARCH_REPOSITORIES({ commit }, username) {
    const data = await api.searchRepositories(username);

    commit('SET_REPOSITORIES', data);

    return data;
  },
  async SEARCH_CONTRIBUTORS({ commit }, repository) {
    const data = await api.searchContributors(repository);

    commit('SET_ACTIVE_REPOSITORY', repository);
    commit('SET_CONTRIBUTORS', data);

    return data;
  },
};
