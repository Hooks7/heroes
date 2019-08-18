<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/hero/add">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in list' :key='item.id'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <a href="javascript:void(0)" @click='goEid(item.id)'>编辑</a> &nbsp;&nbsp;
            <a href="javascript:void(0)" @click='delItem(item.id)'>删除</a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      // 跳转
      goEid(id) {
        this.$router.push(`/hero/edit/${id}`)
      },
      // 请求列表
      begList() {
        this.$http.get(" http://localhost:3000/heroes").then(result => {
          this.list = result.data
        })
      },
      // 删除
      delItem(id) {
        this.$http.delete(`http://localhost:3000/heroes/${id}`).then(result => {
          this.begList()
        })
      }
    },
    created() {
      this.begList()
    }
  };
</script>

<style>
</style>