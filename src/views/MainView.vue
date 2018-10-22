<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <search-input
        class="col-12 col-md-3"
        placeholder="Type a GitHub username"
        @text="handleSearchUser"
      />
    </nav>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'MainView',
  components: {
    SearchInput,
  },
  methods: {
    handleSearchUser(username) {
      console.log(username);
    },
  },
};
</script>
