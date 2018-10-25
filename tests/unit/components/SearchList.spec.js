import { shallowMount } from '@vue/test-utils';
import SearchList from '@/components/SearchList.vue';
import SearchListItem from '@/components/SearchListItem.vue';

describe('SearchList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchList);
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
      repositories: ['repo1', 'repo2'],
    });

    const searchListItems = wrapper.findAll(SearchListItem);

    expect(searchListItems.length).toBe(2);
  });

  it('handle searchListItem emit click', () => {
    const mock = jest.fn();
    const repository = 'some-repo-name';

    wrapper.setProps({
      repositories: [repository, 'repo2'],
    });

    const searchListItem = wrapper.find(SearchListItem);

    wrapper.setMethods({
      handleItemClick: mock,
    });

    searchListItem.vm.$emit('click', repository);

    expect(mock).toHaveBeenCalledWith(repository);
  });
});
