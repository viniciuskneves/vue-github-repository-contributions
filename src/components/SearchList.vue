<template>
  <ul class="list-group">
    <search-list-item
      v-for="repository in repositories"
      :key="repository.fullName"
      :name="repository.displayName"
      @click="handleItemClick(repository)"
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
      required: false,
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
