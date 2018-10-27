<template>
  <div class="row">
    <div class="col-12 col-md-6 bg-light py-3 border">
      <search-input
        class="mb-2"
        placeholder="Type a GitHub username"
        @text="handleSearchUser"
      />
      <search-list
        :repositories="repositories"
      />
    </div>
    <div class="col-12 col-md-6 bg-light py-3 border">
      <repository-contributions-chart
        :contributors="contributors"
        :title="activeRepository.fullName"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchInput from '@/components/SearchInput.vue';
import SearchList from '@/components/SearchList.vue';
import RepositoryContributionsChart from '@/components/RepositoryContributionsChart.vue';

export default {
  name: 'MainView',
  components: {
    SearchInput,
    SearchList,
    RepositoryContributionsChart,
  },
  computed: mapState(['repositories', 'contributors', 'activeRepository']),
  methods: {
    handleSearchUser(username) {
      this.$store.dispatch('SEARCH_REPOSITORIES', username);
    },
  },
};
</script>
