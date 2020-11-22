import axios from '@/plugins/axios';
import { fetchItem } from './api';

export default {
  fetchItem ({commit}) {
    return fetchItem().then(item => {
      commit('setTasks', { item })
    })
  },

  getTasks ({commit}) {
    axios.get('/tasks')
       .then((response) => {
         commit('getTasks', response.data["tasks"]);
       })
       .catch((err) => {
         this.error = err.message;
       })
  }
}
