<template>
  <div>
    <select
      name="days-ago"
      id="days-ago"
      @change="$emit('change', $event.target.value)">
      <option
        v-for="date in getDates()"
        :key="date.label"
        :value="date.value"
        :selected="date.value === daysAgo">
        {{ date.label }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'days-ago-selector',
  model: {
    event: 'change',
    prop: 'daysAgo',
  },
  props: {
    daysAgo: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    getDates() {
      return [...Array(31).keys()].map(v => ({
        label: this.getDaysLabel(v),
        value: v,
      }));
    },
    getDaysLabel(day) {
      let label;
      if (day === 0) label = 'Today';
      else if (day === 1) label = 'Yesterday';
      else label = `${day} days ago`;
      return label;
    },
  },
};
</script>
