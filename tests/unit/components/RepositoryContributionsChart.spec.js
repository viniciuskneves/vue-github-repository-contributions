import { shallowMount } from '@vue/test-utils';
import RepositoryContributionsChart from '@/components/RepositoryContributionsChart.vue';

describe('RepositoryContributionsChart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(RepositoryContributionsChart);
  });

  it('render component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
