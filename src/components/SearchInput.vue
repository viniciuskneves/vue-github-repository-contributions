<template>
  <input
    class="form-control"
    type="search"
    @input="emitOnDebounce($event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script>
let timeoutId;

export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    emitOnDebounce(value) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        this.$emit('text', value);
      }, 500);
    },
  },
};
</script>
