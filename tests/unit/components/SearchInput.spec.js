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

  test('calls emitOnDebounce on @input', () => {
    const mock = jest.fn();
    const value = 'some-user';
    const input = wrapper.find('input');

    wrapper.setMethods({
      emitOnDebounce: mock,
    });
    input.setValue(value);

    expect(mock).toHaveBeenCalledWith(value);
  });

  test('emits with debounce on text change', () => {
    jest.useFakeTimers();

    const value = 'some-user';
    const input = wrapper.find('input');

    input.setValue(value);

    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);

    expect(wrapper.emitted('text')[0][0]).toBe(value);
  });
});
