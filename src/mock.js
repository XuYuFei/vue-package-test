import Mock from 'mockjs'
import HomePageData from '@/api/home.json'
let Random = Mock.Random
let data = {}
data.announcement = Random.csentence()

let sliderImages = require.context('./assets/sliders', false, /\.(png|jpg|gif|svg)$/)
HomePageData.slides.forEach((slide) => {
  slide.img_url = sliderImages('./' + slide.img_url)
})

Mock.mock('/api/home', 'post', HomePageData)
Mock.mock('https://api.coindesk.com/v1/bpi/currentprice.json', 'get', HomePageData)
