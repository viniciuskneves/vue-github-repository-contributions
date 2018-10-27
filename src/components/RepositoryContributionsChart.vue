<template>
  <h1>RepositoryContributionsChart</h1>
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
  },
};
</script>
