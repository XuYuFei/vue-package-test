<template>
  <div class="dialog-wrapper" :class="{ 'open': is_open }">
    <div class="overlay" @click="close"></div>
    <div class="dialog">
      <div>
        <!-- 头部及标题 -->
        <slot name="header"></slot>
      </div>
      <div>
        <!-- 内容区域 -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import './Dialog.less'
export default {
  data () {
    return {
      is_open: false
    }
  },
  methods: {
    open () {
      if (!this.is_open) {
        this.$emit('dialogOpen')
      }
      this.is_open = true
    },
    close () {
      if (this.is_open) {
        this.$emit('dialogClose')
      }
      this.is_open = true
    }
  }
}
</script>
