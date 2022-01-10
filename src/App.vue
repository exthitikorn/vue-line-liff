<template>
  <div id="app">
    <h2 align="center">Workshop 1 - Limit Message</h2>
  </div>
</template>

<script>

export default {
  beforeCreate () {
    this.$liff.init(function (data) {})
  },
  openWindow (){
    this.$liff.openWindow({
      url: 'https://line.me'
      })
  },
  closeWindow (){
    liff.closeWindow();
  }
}
</script>