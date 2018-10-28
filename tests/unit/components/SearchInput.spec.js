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
    jest.useFakeTimers();

    const input = wrapper.find('input');
    const inputValue = 'someuser';

    wrapper.vm.value = inputValue;

    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);

    expect(input.element.value).toBe(inputValue);
    expect(wrapper.emitted('text')[0][0]).toBe(inputValue);
  });
});
