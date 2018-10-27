import api from '@/utils/api';

export default {
  async SEARCH_REPOSITORIES({ commit }, username) {
    const data = await api.searchRepositories(username);

    commit('SET_REPOSITORIES', data);

    return data;
  },
};
