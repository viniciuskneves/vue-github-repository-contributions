import actions from '@/store/actions';
import api from '@/utils/api';
import githubReposResponse from '../fixtures/githubReposResponse';
import githubContributorsResponse from '../fixtures/githubContributorsResponse';

describe('actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
    api.searchRepositories = jest.fn().mockResolvedValue(githubReposResponse);
    api.searchContributors = jest.fn().mockResolvedValue(githubContributorsResponse);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('SEARCH_REPOSITORIES', () => {
    it('searches user repositories', async () => {
      const username = 'github-username';
      const actionResponse = await actions.SEARCH_REPOSITORIES({ commit }, username);

      expect(commit).toHaveBeenCalledWith('SET_ACTIVE_REPOSITORY', {});

      expect(api.searchRepositories).toHaveBeenCalledWith(username);
      expect(commit).toHaveBeenCalledWith('SET_REPOSITORIES', githubReposResponse);
      expect(actionResponse).toBe(githubReposResponse);
    });
  });

  describe('SEARCH_CONTRIBUTORS', () => {
    it('searches repository contributors', async () => {
      const repository = {
        displayName: 'displayName',
        fullName: 'fullName',
      };
      const actionResponse = await actions.SEARCH_CONTRIBUTORS({ commit }, repository);

      expect(commit).toHaveBeenCalledWith('SET_ACTIVE_REPOSITORY', repository);

      expect(api.searchContributors).toHaveBeenCalledWith(repository.fullName);
      expect(commit).toHaveBeenCalledWith('SET_CONTRIBUTORS', githubContributorsResponse);
      expect(actionResponse).toBe(githubContributorsResponse);
    });
  });
});
