import axios from '../plugins/axios';

export default {
  getTasks ({commit}) {
    axios.get('/tasks')
      .then((response) => {
        commit('setTasks', response.data["tasks"]);
      })
      .catch((err) => {
        this.error = err.message;
      })
  }
}
