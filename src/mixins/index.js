export default {
  methods: {
    jump (to) {
      console.log(to);
      if (this.$router) {
      	console.log('router: ', to);
        this.$router.push(to)
      }
    }
  }
}
