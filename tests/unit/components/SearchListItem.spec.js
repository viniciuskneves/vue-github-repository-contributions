import { shallowMount } from '@vue/test-utils';
import SearchListItem from '@/components/SearchListItem.vue';

describe('SearchListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchListItem, {
      propsData: {
        name: 'my-initial-name',
      },
    });
  });

  it('renders component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders required <li> child', () => {
    const li = wrapper.find('li');

    expect(li.exists()).toBe(true);
  });

  it('renders "name" props as text', () => {
    const name = 'some-github-repo';
    const li = wrapper.find('li');

    wrapper.setProps({
      name,
    });

    expect(li.text()).toBe(name);
  });

  it('attaches "active" class when "active" prop is true', () => {
    const active = true;
    const li = wrapper.find('li');

    wrapper.setProps({
      active,
    });

    expect(li.classes('active')).toBe(true);
  });

  it('emits item click', () => {
    const li = wrapper.find('li');
    const name = wrapper.props('name');

    li.trigger('click');

    expect(wrapper.emitted('click')[0][0]).toBe(name);
  });

});
