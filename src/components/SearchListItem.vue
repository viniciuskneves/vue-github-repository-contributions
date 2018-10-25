<template>
  <li
    :class="customClasses"
    @click="$emit('click', name)"
    class="list-group-item list-group-item-action"
  >
    {{ name }}
  </li>
</template>

<script>
export default {
  name: 'SearchListItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    customClasses() {
      return {
        active: this.active,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  &:hover {
    cursor: pointer;
  }
}
</style>
