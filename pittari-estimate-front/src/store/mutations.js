import Vue from 'vue/dist/vue.esm';

export default {
  setTasks (state, { data }) {
    Vue.set(state.tasks, data)
  },

  getTasks (state, data) {
    state.tasks = data;
  }
}
