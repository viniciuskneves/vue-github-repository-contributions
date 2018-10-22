import { shallowMount } from '@vue/test-utils';
import MainView from '@/views/MainView.vue';
import SearchInput from '@/components/SearchInput.vue';

describe('MainView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MainView);
  });

  test('renders view', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders children components', () => {
    const searchInput = wrapper.find(SearchInput);

    expect(searchInput.exists()).toBe(true);
  });

  test('handle searchInput emit text', () => {
    const mock = jest.fn();
    const searchInput = wrapper.find(SearchInput);

    wrapper.setMethods({
      handleSearchUser: mock,
    });

    searchInput.vm.$emit('text', 'githubusername');

    expect(mock).toHaveBeenCalledWith('githubusername');
  });
});
