<template>
    <div>
        <main-banner />
        <div class="container">
            <list-product />
            <banner-item />
            <blog />
        </div>
    </div>
</template>

<script>
import MainBanner from '../components/pageHome/mainBanner'
import ListProduct from '../components/pageHome/listProducts'
import BannerItem from '../components/pageHome/BannerItem'
import Blog from '../components/pageHome/blog'
export default {
    components: {
        MainBanner,
        ListProduct,
        BannerItem,
        Blog
    }
}
</script>

<style lang="scss" scoped>

</style>