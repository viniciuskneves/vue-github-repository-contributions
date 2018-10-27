import { shallowMount, createLocalVue } from '@vue/test-utils';
import HighchartsVue from 'highcharts-vue';
import RepositoryContributionsChart from '@/components/RepositoryContributionsChart.vue';

const localVue = createLocalVue();
localVue.use(HighchartsVue);

describe('RepositoryContributionsChart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(RepositoryContributionsChart, {
      localVue,
    });
  });

  it('render component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('maps title prop to chart title', () => {
    const title = 'angular/angular';

    wrapper.setProps({
      title,
    });

    expect(wrapper.vm.chartOptions.title.text).toBe(title);
  });

  it('maps contributors prop to chart axis', () => {
    const contributors = [
      {
        name: 'name1',
        count: 10,
      },
      {
        name: 'name2',
        count: 15,
      },
    ];
    const names = contributors.map(_ => _.name);
    const counts = contributors.map(_ => _.count);

    wrapper.setProps({
      contributors,
    });

    expect(wrapper.vm.chartOptions.xAxis.categories).toEqual(names);
    expect(wrapper.vm.chartOptions.series[0].data).toEqual(counts);
  });
});
