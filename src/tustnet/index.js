import axios from 'axios'

// const PageLOGIN = 'a30.htm'
// const PageINFO = 'a31.htm'
// const PageLOGOUT = 'F.htm'

export default new (class TUSTNET {
  get (url = '') {
    return axios.get('http://59.67.0.220/' + url)
  }

  checkConnect () {
    return this.get().then(r => {
      if (r.status !== 200) throw new Error('Error Status Code(' + r.status + ')')
      return r.data.indexOf('function DispTFM') !== -1
    }).catch(err => {
      console.error(err)
      throw new Error('当前网络不是科大校园网或网关异常！')
    })
  }
})()
