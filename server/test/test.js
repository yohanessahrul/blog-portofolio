let chai = require('chai')
let expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp)

// describe('POST /api/article/create', () => {
//   it('Sukses membuat article', (done) => {
//     chai.request(app)
//       .post('/api/article/create')
//       .end((err, res) => {
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.body).to.ownProperty('message')
//         expect(res.body).to.ownProperty('data')
//       })
//       done()
//   })
// })

describe('GET /api/article/list', () => {
  it('Sukses mengambil data article', (done) => { // done for handle async
    chai.request(app)
      .get('/api/article/list')
      .end((err, res) => {
        expect(err).to.be.null
        // expect(err).to.have.status(500)
        expect(res).to.have.status(200)
        expect(res.body).to.ownProperty('message')
        expect(res.body).to.ownProperty('data')
        expect(res.body.data).to.be.an('Object')
      })
      done()
  })
})

describe('DELETE /api/article/delete/5ad4715d3c9ae861cf29826a', () => {
  it('Berhasil menghapus satu item', (done) => {
    chai.request(app)
      .delete('/api/article/delete/5ad4715d3c9ae861cf29826a')
      .end((err, res) => {
        expect(err).to.be.null
        expect(err).to.have.status(500)
        expect(res).to.have.status(404)
        expect(res.body).to.ownProperty('message')
        // expect(res.body).to.ownProperty('data')
      })
      done()
  })
})

describe('PUT /api/article/update/5ad4767d6dc2f66b3cb451ed', () => {
  it('Berhasil merubah satu item', (done) => {
    chai.request(app)
      .put('/api/article/update/5ad4767d6dc2f66b3cb451ed')
      .end((err, res) => {
        expect(err).to.be.null
      })
      done()
  })
})

describe('POST /api/user/login', () => {
  it('Berhasil login', (done) => {
    chai.request(app)
      .post('/api/user/login')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.body).to.ownProperty('message')
        expect(res.body).to.ownProperty('data')
        expect(res.body.data).to.be.an('Object')
      })
      done()
  })
})


