<template>
  <div class="book-list">
    <div class="header">
      <div class="heading">{{ heading }}</div>
      <div class="more">更多...</div>
    </div>
    <div class="book-item">
      <div class="book" v-for="(book, index) in books" :key="index" @click="$emit('onBookSelect', book)">
        <div class="cover"><img :src="book.img_url" alt="1"></div>
        <div class="title">{{ book.title }}</div>
        <div class="author">{{ book.authors | join }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import './BookList.less'
export default {
  props: ['books', 'heading'],
  filters: {
    join (args) {
      return args.join(',')
    }
  }
}
</script>
