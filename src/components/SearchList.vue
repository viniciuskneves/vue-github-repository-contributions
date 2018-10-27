<template>
  <ul class="list-group">
    <search-list-item
      v-for="repository in repositories"
      :key="repository"
      :name="repository"
      @click="handleItemClick"
    />
  </ul>
</template>

<script>
import SearchListItem from '@/components/SearchListItem.vue';

export default {
  name: 'SearchList',
  components: {
    SearchListItem,
  },
  props: {
    repositories: {
      type: Array,
      requierd: false,
      default: () => [],
    },
  },
  methods: {
    handleItemClick(repository) {
      this.$store.dispatch('SEARCH_CONTRIBUTORS', repository);
    },
  },
};
</script>
