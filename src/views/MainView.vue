<template>
  <div class="row">
    <div class="col-12 col-md-6 bg-light py-3 border">
      <search-input
        class="mb-2"
        v-model="username"
        placeholder="Type a GitHub username"
      />
      <div class="alert alert-info" v-if="isLoading">
        Loading...
      </div>
      <search-list
        :repositories="repositories"
      />
    </div>
    <div class="col-12 col-md-6 bg-light py-3 border">
      <repository-contributions-chart
        v-if="hasContributors"
        :contributors="contributors"
        :title="activeRepository.fullName"
      />
      <h3 v-else-if="!hasContributors">
        There are no contributions to this repository, please select another repository.
      </h3>
      <h5 v-else>
        Looks like you haven't selected a repository yet.
        Please type any GitHub username in the searchbox and then select a repository from the list.
      </h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
  data() {
    return {
      isLoading: false,
      username: '',
    };
  },
  computed: {
    ...mapState(['repositories', 'contributors', 'activeRepository']),
    hasContributors() {
      return this.contributors.length && Object.keys(this.activeRepository).length;
    },
  },
  watch: {
    username: 'handleSearchUser',
  },
  methods: {
    ...mapActions({
      searchRepositories: 'SEARCH_REPOSITORIES',
    }),
    handleSearchUser(username) {
      this.isLoading = true;
      const onDone = () => {
        this.isLoading = false;
      };

      this.searchRepositories(username)
        .then(onDone, onDone);
    },
  },
};
</script>
