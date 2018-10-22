<template>
  <input
    class="form-control"
    type="search"
    :placeholder="placeholder"
    @keyup="$emit('text', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
