<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="email" v-model='formData.name' class="form-control" id="exampleInputEmail1" placeholder="请输入您的姓名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model='formData.gender'
          placeholder="请输入您的性别">
      </div>


      <button type="button" class="btn btn-success" @click='editHero'>编辑英雄</button>
    </form>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        formData: {
          name: '',
          gender: ''
        }
      }
    }, methods: {
      editHero() {
        const { id } = this.$route.params
        this.$http.put(`/heroes/${id}`, this.formData).then(result => {
          this.$router.push('/hero')
        })
      },
      queryItem() {
        const { id } = this.$route.params
        this.$http.get(`/heroes/${id}`).then(result => {
          this.formData = result.data
        })
      }
    },
    created() {
      this.queryItem()
    }
  };
</script>

<style>
</style>