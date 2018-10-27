import mutations from '@/store/mutations';
import baseState from '@/store/state';
import githubReposResponse from '../fixtures/githubReposResponse';
import githubContributorsResponse from '../fixtures/githubContributorsResponse';

describe('mutations', () => {
  let state;

  beforeEach(() => {
    state = { ...baseState };
  });

  describe('SET_REPOSITORIES', () => {
    it('updates "state.repositories"', () => {
      const names = githubReposResponse.map(_ => _.name);

      mutations.SET_REPOSITORIES(state, githubReposResponse);

      expect(state.repositories).toEqual(names);
    });
  });

  describe('SET_CONTRIBUTORS', () => {
    it('updates "state.contributors"', () => {
      const names = githubContributorsResponse.map(_ => ({
        name: _.login,
        count: _.contributions,
      }));

      mutations.SET_CONTRIBUTORS(state, githubContributorsResponse);

      expect(state.contributors).toEqual(names);
    });
  });

  describe('SET_ACTIVE_REPOSITORY', () => {
    it('updates "state.activeRepository"', () => {
      const repository = 'github-repository';

      mutations.SET_ACTIVE_REPOSITORY(state, repository);

      expect(state.activeRepository).toEqual(repository);
    });
  });
});
