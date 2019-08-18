<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
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

      <div class="checkbox">

      </div>
      <button type="button" class="btn btn-success" @click='addHero'>添加英雄</button>
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
    },
    methods: {
      addHero() {
        this.$http.post('/heroes', this.formData).then(result => {
          this.$router.push('/hero')
        })
      }
    }
  };
</script>

<style>
</style>