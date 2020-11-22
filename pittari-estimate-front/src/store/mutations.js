import Vue from 'vue/dist/vue.esm';

export default {
  setTasks (state, { item }) {
    Vue.set(state.items, item)
  },

  getTasks (state, data) {
    state.tasks = data;
  }
}
