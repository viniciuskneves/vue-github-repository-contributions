<template>
  <highcharts :options="chartOptions" />
</template>

<script>
export default {
  name: 'RepositoryContributionsChart',
  props: {
    contributors: {
      type: Array,
      required: false,
      default: () => ([]),
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    chartOptions() {
      const names = this.contributors.map(_ => _.name);
      const counts = this.contributors.map(_ => _.count);

      return {
        title: {
          text: this.title,
        },
        yAxis: {
          title: {
            text: 'Contributions',
          },
        },
        xAxis: {
          categories: names,
          title: {
            text: 'Contributors',
          },
        },
        series: [{
          type: 'column',
          data: counts,
          showInLegend: false,
          tooltip: {
            pointFormat: '',
            headerFormat: '<span>{point.key} - <b>{point.y}</b></span><br/>',
          },
        }],
      };
    },
  },
};
</script>
