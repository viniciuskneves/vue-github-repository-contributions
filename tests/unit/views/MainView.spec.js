import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MainView from '@/views/MainView.vue';
import SearchInput from '@/components/SearchInput.vue';
import SearchList from '@/components/SearchList.vue';
import RepositoryContributionsChart from '@/components/RepositoryContributionsChart.vue';
import actions from '@/store/actions';
import baseState from '@/store/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MainView', () => {
  let wrapper;
  let state;

  beforeEach(() => {
    state = { ...baseState };
    actions.SEARCH_REPOSITORIES = jest.fn();
    wrapper = shallowMount(MainView, {
      localVue,
      store: new Vuex.Store({ state, actions }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders view', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders children components', () => {
    const searchInput = wrapper.find(SearchInput);
    const searchList = wrapper.find(SearchList);
    const repositoryContributionsChart = wrapper.find(RepositoryContributionsChart);
    const welcomeMessage = wrapper.find('h5');

    expect(searchInput.exists()).toBe(true);
    expect(searchList.exists()).toBe(true);
    expect(repositoryContributionsChart.exists()).toBe(false);
    expect(welcomeMessage.exists()).toBe(true);
  });

  it('renders charts only when contributors and activeRepository', () => {
    const contributors = [{
      name: 'name',
      count: 10,
    }];
    const repository = {
      displayName: 'name',
      fullName: 'fullName',
    };

    state.activeRepository = repository;
    state.contributors = contributors;

    const repositoryContributionsChart = wrapper.find(RepositoryContributionsChart);

    expect(repositoryContributionsChart.exists()).toBe(true);
  });

  it('shows message when there are no contributors', () => {
    const contributors = [];
    const repository = {
      displayName: 'name',
      fullName: 'fullName',
    };

    state.activeRepository = repository;
    state.contributors = contributors;

    const repositoryContributionsChart = wrapper.find(RepositoryContributionsChart);
    const noContributorsMessage = wrapper.find('h3');

    expect(repositoryContributionsChart.exists()).toBe(false);
    expect(noContributorsMessage.exists()).toBe(true);
  });

  it('handle searchInput emit text', () => {
    const mock = jest.fn();
    const username = 'some-github-username';
    const searchInput = wrapper.find(SearchInput);

    wrapper.setMethods({
      handleSearchUser: mock,
    });

    searchInput.vm.$emit('text', username);

    expect(mock).toHaveBeenCalledWith(username);
  });

  it('delegates "handleSearchUser" to action', () => {
    const username = 'some-github-username';
    const { vm } = wrapper;

    vm.handleSearchUser(username);

    expect(actions.SEARCH_REPOSITORIES).toHaveBeenCalled();
    expect(actions.SEARCH_REPOSITORIES.mock.calls[0][1]).toBe(username);
  });

  it('binds "state.repositories" to searchList', () => {
    const repositories = [{
      displayName: 'angular',
      fullName: 'angular/angular',
    }];

    state.repositories = repositories;

    const searchList = wrapper.find(SearchList);

    expect(searchList.vm.repositories).toBe(repositories);
  });

  it('binds "state.contributors" to chart', () => {
    const repository = {
      displayName: 'name',
      fullName: 'fullName',
    };
    const contributors = [{
      name: 'name',
      count: 10,
    }];

    state.contributors = contributors;
    state.activeRepository = repository;

    const repositoryContributionsChart = wrapper.find(RepositoryContributionsChart);

    expect(repositoryContributionsChart.vm.contributors).toBe(contributors);
  });

  it('binds "state.activeRepository.fullName" to chart title', () => {
    const repository = {
      displayName: 'name',
      fullName: 'fullName',
    };
    const contributors = [{
      name: 'name',
      count: 10,
    }];

    state.contributors = contributors;
    state.activeRepository = repository;

    const repositoryContributionsChart = wrapper.find(RepositoryContributionsChart);

    expect(repositoryContributionsChart.vm.title).toBe(repository.fullName);
  });
});
