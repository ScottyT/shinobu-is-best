<template>
    <div class="shinobu__slideshow">
        <img :src="`/shinobu-${$oshino.state.incrementer + 1}.jpg`" />
    </div>
</template>
<script>
import { useNuxtApp } from '#app'
export default defineComponent({
    props: {
        message: String
    },
    setup(props) {
        const nuxtApp = useNuxtApp()
       // const shinobu = useShinobu()
        const shinobuMsg = ref("")
        const setMsg = () => {
            shinobuMsg.value = props.message
        }
        const increment = nuxtApp.$oshino.state.incrementer
        onMounted(setMsg)
        onMounted(nuxtApp.$oshino.useImages)
        onMounted(nuxtApp.$oshino.incrementImage)
        return {
            shinobuMsg,
            increment
        }
    }
})
</script>
<style lang="scss">
.shinobu {
    &__slideshow {
        height:100vh;
        width:100%;
    }
}
</style>