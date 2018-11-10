<template>
  <input
    class="form-control"
    type="search"
    v-model.trim="value"
    :placeholder="placeholder"
  />
</template>

<script>
let timeoutId;

export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  watch: {
    value(newValue) {
      // TODO: Use request time instead of debounce as it will improve experience
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        this.emitOnDebounce(newValue);
      }, 500);
    },
  },
  methods: {
    emitOnDebounce(value) {
      this.$emit('input', value);
    },
  },
};
</script>
