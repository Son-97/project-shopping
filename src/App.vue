<template>
  <div id="app">
    <div class="container">
      <Header />
    </div>
    <router-view/>
    <div class="container">
      <Footer />
    </div>
    <FooterBottom />
  </div>
</template>

<script>
import Header from "./views/Header"
import Footer from "./views/Footer"
import FooterBottom from './components/FooterBottom'
export default {
  name : 'app',
  components: {
    Header,
    Footer,
    FooterBottom
  }
}
</script>
<style>

</style>
