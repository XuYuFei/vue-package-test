<template>
  <div>
    <div class="section">
      <div>
        <!-- 热门推荐 -->
        <slider :slides="slides" v-if="slides.length > 0"></slider>
        <!-- 快讯 -->
        <announcement :announcement="announcement"></announcement>
      </div>
    </div>
    <div class="section">
      <!-- 新书上架 -->
      <book-list :books="latestUpdated" :heading="'最新更新'" @onBookSelect="preview($event)"></book-list>
    </div>
    <div class="section">
      <!-- 编辑推荐 -->
      <book-list :books="recommended" :heading="'最新更新'" @onBookSelect="preview($event)"></book-list>
    </div>
    <modal-dialog ref="dialog" @dialogClose="selected=undefined" v-if="selected">
      <div slot="header">
        <div class="dismiss" @click.prevent="$refs.dialog.close()"></div>
      </div>
      <div><img :src="selected.img_url" alt=""></div>
      <div>{{ selected.title }}</div>
    </modal-dialog>
  </div>
</template>

<script>
import BookList from '@/components/home/BookList.vue'
import Slider from '@/components/home/Slider.vue'
import Announcement from '@/components/home/Announcement.vue'
import ModalDialog from '@/components/home/Dialog.vue'

export default {
  data () {
    return {
      announcement: '',
      slides: [],
      latestUpdated: [],
      recommended: [],
      selected: undefined
    }
  },
  components: {
    BookList,
    Slider,
    Announcement,
    ModalDialog
  },
  created () {
    this.$http.post('home').then((res) => {
      this.announcement = res.data.announcement
      this.slides = res.data.slides
      this.latestUpdated = res.data.latestUpdated
      this.recommended = res.data.recommended
    })
    this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => (
      console.log('http', res)
    ))
    this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => (
      console.log('axios', res)
    ))
  },
  methods: {
    preview (book) {
      this.selected = book
      setTimeout(() => {
        this.$refs.dialog.open()
      }, 10)
    }
  }
}
</script>
