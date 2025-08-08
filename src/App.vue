<template>
  <div id="app-container" class="magazine">
    <Header />
    <main id="content">
      <MainContent />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainContent
  }
}
</script>

<style lang="scss" scoped>
#app-container {
  min-height: 100vh;
  background: var(--bg-new);
}
</style>
