import { shallowMount } from '@vue/test-utils';
import MainView from '@/views/MainView.vue';
import SearchInput from '@/components/SearchInput.vue';
import SearchList from '@/components/SearchList.vue';

describe('MainView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MainView);
  });

  it('renders view', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders children components', () => {
    const searchInput = wrapper.find(SearchInput);
    const searchList = wrapper.find(SearchList);

    expect(searchInput.exists()).toBe(true);
    expect(searchList.exists()).toBe(true);
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
});
