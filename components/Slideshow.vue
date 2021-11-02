<template>
    <div class="slideshow">
        <div class="slideshow__message">
            <h1 class="slideshow__message slideshow__message--h1">Shinobu is <strong>{{shinobuMsg}}</strong></h1>
            <h2 class="slideshow__message slideshow__message--h2">{{headline}}</h2>
        </div>
        <div class="slideshow__slides">
            <transition-group name="image-slideshow">
                <div class="slideshow__shinobu" v-for="i in $oshino.inc" :key="i">
                    <img :src="$oshino.state.currentImage" />
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
//import compSinobu from '@/composables/shinobu'
export default defineComponent({
    props: {
        message: String,
        columnStyle: String,
        headline:String
    },
    setup(props) {
        const nuxtApp = useNuxtApp()
        const s = compShinobu()
        console.log(s)
       // const current = setCurrentImage()
        const shinobuMsg = ref("")
        const setMsg = () => {
            shinobuMsg.value = props.message
        }
        //const increment = nuxtApp.$oshino.state.incrementer
        const images = nuxtApp.$oshino.state.images
        onMounted(setMsg)
        onMounted(nuxtApp.$oshino.useImages)
        onMounted(nuxtApp.$oshino.incrementImage)
        return {
            shinobuMsg,
            images,
            s
        }
    }
})
</script>
<style lang="scss">
.slideshow {
    height:100vh;
    width:100%;
    display:flex;
    justify-content:space-between;
    &__message {
        place-self:center;
        padding:10px;
        &--h1 {
            text-decoration: underline;
        }
        &--h2 {
            place-self:top;
        }
    }
    &__shinobu {
        height:100vh;
        width:100%;
    }
    &__slides {
        position:relative;
        width:50%;
    }
}
.image-slideshow-item {
    display: inline-block;
    margin-right: 10px;
}

.image-slideshow-enter-active,
.image-slideshow-leave-active {
    transition: all 1s ease;
    overflow:hidden;
    visibility:visible;
    position:absolute;
    width:100%;
    opacity:1;
}

.image-slideshow-enter-from,
.image-slideshow-leave-to {
    visibility: hidden;
    opacity: 0;
    transform: translateY(30px);
}
</style>