<template>
  <div class="container">
    <div class="article-admin">
      <button @click="logout">Logout</button>
      <br><br>
      <h1 style="text-align: left;">Data Article</h1>
      <button type="button" class="btn btn-primary" style="display:table; text-align:left;" data-toggle="modal" data-target=".bd-example-modal-lg">Tambah</button>
      <!-- modal - Create Article -->
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Article</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label style="display:table; text-align:left" for="recipient-name" class="col-form-label">Title:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="title" placeholder="Title">
                </div>
                <div class="form-group">
                  <label style="display:table; text-align:left" for="message-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="message-text" v-model="desc" placeholder="Description"></textarea>
                </div>
                <div class="form-group">
                  <label style="display:table; text-align:left" for="recipient-name" class="col-form-label">Url Image:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="url" placeholder="Url Image">
                </div>
                <!-- <div class="form-group">
                  <label style="display:table; text-align:left;" for="exampleInputFile">File input</label>
                  <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
                  <small style="display:table; text-align:left;" id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div> -->
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success" v-on:click="saveArticle()">Submit</button>
            </div>
            
          </div>
        </div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th style="width:270px">Title</th>
            <th>Desc</th>
            <th style="width: 170px;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article,index) in articles" v-bind:key="article._id">
            <td>{{ index+1 }}</td>
            <td><img style="width:100px;" :src="article.url"></td>
            <td style="text-align: left;">{{ article.title }}</td>
            <td style="text-align: left;">{{ limitParagraf(article.description) }}</td>
            <td>
              <button style="float:left; margin-right: 0px;" class="btn btn-warning">Edit</button> 
              <button class="btn btn-danger" v-on:click="deleteArticle(index, article._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'articleadmin',
  data: function() {
    return {
      title: '',
      desc: '',
      articles: []
    }
  },
  created() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
    axios.get('http://35.187.241.27/api/article/list')
    .then(response => {
      let dataResponse = response.data.data
      dataResponse.forEach(article => {
        this.articles.push(article)
      });
    })
    .catch()
  }, 
  methods: {
    limitParagraf: function(value) {
      return value.substring(0, 150) + '...'
    },
    saveArticle: function() {
      console.log('Simpan artikel dijalankan')
      console.log(this.title)
      console.log(this.desc)
      axios.post('http://35.187.241.27/api/article/create', {
        title: this.title,
        description: this.desc,
        url: this.url
      }, function(err, response){
        if(!err){
          let dataResponse = response.data.data
          console.log(dataResponse)
        } else {
          console.log(err)
        }
      })
    },
    deleteArticle: function(index,id) {
      if(confirm('Yakin mau hapus?')) {
        axios.delete(`http://35.187.241.27/api/article/delete/${id}`)
        .then( () => {
          console.log('Hapus data berhasil')
          this.articles.splice(index, 1)
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
