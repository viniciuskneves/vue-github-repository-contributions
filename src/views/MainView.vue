<template>
  <div class="col-12 col-md-6">
    <search-input
      placeholder="Type a GitHub username"
      @text="handleSearchUser"
    />
    <search-list :repositories="[1, 2]" />
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
      console.log(username);
    },
  },
};
</script>
