export default {
  data() {
    return {
      names: ['Max', 'Igor', 'Alena', 'Max',],
      search: '',
    }
  },
  computed: {
    filterNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      })
    },
  },
}
