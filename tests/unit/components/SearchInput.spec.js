import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchInput);
  });

  test('renders component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders required children', () => {
    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
  });

  test('renders placeholder props', () => {
    const placeholder = 'It should be a placeholder text';
    const input = wrapper.find('input');

    wrapper.setProps({
      placeholder,
    });

    expect(input.attributes('placeholder')).toBe(placeholder);
  });

  test('emits input text', () => {
    const input = wrapper.find('input');
    const inputValue = 'someuser';

    input.element.value = inputValue;
    input.trigger('keyup');

    expect(wrapper.emitted('text')[0][0]).toBe(inputValue);
  });
});
