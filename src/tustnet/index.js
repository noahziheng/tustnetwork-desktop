import axios from 'axios'

const GATEWAY = [
  '59.67.0.220',
  '59.67.0.245'
]

// const PageLOGIN = 'a30.htm'
// const PageINFO = 'a31.htm'
// const PageLOGOUT = 'F.htm'

export default new (class TUSTNET {
  constructor () {
    this.gateway_current = 0
  }

  get (url = '') {
    return axios.get('http://' + GATEWAY[this.gateway_current] + '/' + url).catch(err => {
      if (this.gateway_current < GATEWAY.length - 1) {
        console.log('Bad Gateway:' + GATEWAY[this.gateway_current])
        this.gateway_current++
        return this.get(url)
      } else {
        this.gateway_current = 0
        return Promise.reject(err)
      }
    })
  }

  checkConnect () {
    this.gateway_current = 0
    return this.get().then(r => {
      if (r.status !== 200) throw new Error('Error Status Code(' + r.status + ')')
      return r.data.indexOf('function DispTFM') !== -1
    }).catch(err => {
      console.error(err)
      throw new Error('当前网络不是科大校园网或网关异常！')
    })
  }

  getCurrentGateway () {
    return GATEWAY[this.gateway_current]
  }

  connect () {
    return axios.post('http://' + GATEWAY[this.gateway_current] + '/a70.htm', 'DDDDD=15021202&upass=adzd1005&R1=0&R2=&R6=0&para=00&0MKKey=123456&v6ip=&R7=0').catch(err => {
      if (this.gateway_current < GATEWAY.length - 1) {
        console.log('Bad Gateway:' + GATEWAY[this.gateway_current])
        this.gateway_current++
        return this.connect()
      } else {
        this.gateway_current = 0
        return Promise.reject(err)
      }
    })
  }

  logout () {
    this.gateway_current = 0
    return this.get('F.htm').then(r => {
      if (r.status !== 200) throw new Error('Error Status Code(' + r.status + ')')
      return true
    }).catch(err => {
      console.error(err)
      throw new Error('当前网络不是科大校园网或网关异常！')
    })
  }
})()
