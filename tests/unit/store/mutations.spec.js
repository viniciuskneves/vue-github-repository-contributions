import mutations from '@/store/mutations';
import baseState from '@/store/state';
import githubReposResponse from '../fixtures/githubReposResponse';

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
})