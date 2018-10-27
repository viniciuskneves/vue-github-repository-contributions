import actions from '@/store/actions';
import api from '@/utils/api';
import githubReposResponse from '../fixtures/githubReposResponse';

describe('actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
    api.searchRepositories = jest.fn().mockResolvedValue(githubReposResponse);
  });

  describe('SEARCH_REPOSITORIES', () => {
    it('searches user repositories', async () => {
      const username = 'github-username';
      const actionResponse = await actions.SEARCH_REPOSITORIES({ commit }, username);

      expect(api.searchRepositories).toHaveBeenCalledWith(username);
      expect(commit).toHaveBeenCalledWith('SET_REPOSITORIES', githubReposResponse);
      expect(actionResponse).toBe(githubReposResponse);
    });
  });
});
