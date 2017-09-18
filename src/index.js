import axios from 'axios'
import qs from 'qs'
import cheerio from 'cheerio'
import md5 from 'nano-md5'
import axiosCookieJarSupport from 'node-axios-cookiejar'
import tough from 'tough-cookie'

axiosCookieJarSupport(axios)
const cookieJar = new tough.CookieJar()

/* axios.get('http://59.67.0.220/a31.htm').then(res => {
  console.log(parseInt(res.data.split('time=\'')[1].split('\';')[0].trim()))
  console.log(parseInt(res.data.split('flow=\'')[1].split('\';')[0].trim()))
}) */

/* axios.get('http://59.67.0.220/F.htm').then(res => {
  console.log(parseInt(res.data.split('Msg=')[1].split(';')[0].trim()) === 14)
}) */

/* axios.post('http://59.67.0.220/', qs.stringify({
  DDDDD: '15021202',
  upass: 'adzd1005',
  R1: 0,
  'R2': '',
  R6: 0,
  para: '00',
  '0MKKey': '123456',
  'R7': 0
})).then(res => {
  console.log(res.data.split('<script type="text/javascript">')[1].split('olmac')[0])
  console.log(res.data.split('msga=\'')[1].split('\';')[0].trim())
  console.log(res.data.split('Msg=')[1].split(';')[0].trim())
}) */

axios.defaults.jar = cookieJar
axios.defaults.withCredentials = true

axios.post('http://uss.tust.edu.cn/LoginAction.action', qs.stringify({
  account: '15021202',
  password: '3dc011d26be0a9d2f2e974eb94ea4113',
  code: '',
  checkcode: '107',
  Submit: '登录'
}), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Host: 'uss.tust.edu.cn',
    Origin: 'http://uss.tust.edu.cn',
    Referer: 'http://uss.tust.edu.cn/nav_login',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36'
  }
}).then(res => {
  console.log(res.data)
  // let $ = cheerio.load(res.data)
  // console.log($('.account').text())
  // axios.get('http://uss.tust.edu.cn/refreshaccount').then(console.log)
})
