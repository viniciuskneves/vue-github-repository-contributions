<template>
  <div class="col-12 col-md-6 bg-light py-3 border">
    <search-input
      class="mb-2"
      placeholder="Type a GitHub username"
      @text="handleSearchUser"
    />
    <search-list
     :repositories="['1', '2']"
    />
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';
import SearchList from '@/components/SearchList.vue';

export default {
  name: 'MainView',
  components: {
    SearchInput,
    SearchList,
  },
  methods: {
    handleSearchUser(username) {
      this.$store.dispatch('SEARCH_REPOSITORIES', username);
    },
  },
};
</script>
