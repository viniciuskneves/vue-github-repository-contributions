import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SearchList from '@/components/SearchList.vue';
import SearchListItem from '@/components/SearchListItem.vue';
import actions from '@/store/actions';
import baseState from '@/store/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchList', () => {
  let wrapper;
  let state;

  beforeEach(() => {
    state = { ...baseState };
    actions.SEARCH_CONTRIBUTORS = jest.fn();
    wrapper = shallowMount(SearchList, {
      localVue,
      store: new Vuex.Store({ state, actions }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('does not render children when "repositories" is empty', () => {
    wrapper.setProps({
      repositories: [],
    });

    const searchListItems = wrapper.findAll(SearchListItem);

    expect(searchListItems.length).toBe(0);
  });

  it('render children when "repositories" is not empty', () => {
    wrapper.setProps({
      repositories: [
        {
          displayName: 'displayName',
          fullName: 'fullName',
        },
        {
          displayName: 'displayName2',
          fullName: 'fullName2',
        },
      ],
    });

    const searchListItems = wrapper.findAll(SearchListItem);

    expect(searchListItems.length).toBe(2);
  });

  it('handle searchListItem emit click', () => {
    const mock = jest.fn();
    const repository = {
      displayName: 'displayName',
      fullName: 'fullName',
    };

    wrapper.setProps({
      repositories: [
        repository,
        {
          displayName: 'displayName2',
          fullName: 'fullName2',
        },
      ],
    });

    const searchListItem = wrapper.find(SearchListItem);

    wrapper.setMethods({
      handleItemClick: mock,
    });

    searchListItem.vm.$emit('click', repository);

    expect(mock).toHaveBeenCalledWith(repository);
  });

  it('delegates "handleItemClick" to action', () => {
    const repository = 'some-github-repository';
    const { vm } = wrapper;

    vm.handleItemClick(repository);

    expect(actions.SEARCH_CONTRIBUTORS).toHaveBeenCalled();
    expect(actions.SEARCH_CONTRIBUTORS.mock.calls[0][1]).toBe(repository);
  });
});
