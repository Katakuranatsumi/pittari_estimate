import axios from '@/plugins/axios';

export default {
  getTasks (state) {
    axios.get('/tasks')
      .then((response) => {
        state.tasks = response.data["tasks"];
      })
      .catch((err) => {
        this.error = err.message;
      })
  }
}
