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
        v-if="contributors.length && Object.keys(activeRepository).length"
        :contributors="contributors"
        :title="activeRepository.fullName"
      />
      <h3 v-else-if="!contributors.length && Object.keys(activeRepository).length">
        There are no contributions to this repository, please select another repository.
      </h3>
      <h5 v-else>
        Travist, is that you?
        Looks like you haven't selected a repository yet.
        Please type any GitHub username in the searchbox and then select a repository from the list.
      </h5>
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
