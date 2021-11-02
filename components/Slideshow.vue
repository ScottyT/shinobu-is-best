<template>
    <div class="slideshow">
        <div class="slideshow__message">
            <h1 class="slideshow__message slideshow__message--h1">Shinobu is <strong>{{message}}</strong></h1>
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
    setup(props, context) {
        /* const inc = ref(0)
        const currentImage = ref("") */
        /* const currentImage = computed(() => {
            return images[Math.abs(inc.value)]
        }) */
        const oshino = context.root.$oshino
       // const current = setCurrentImage()
        const images = oshino.state.images
        //const increment = nuxtApp.$oshino.state.incrementer
        /* const setCurrentImage = (i) => {
            currentImage.value = images[Math.abs(i)]
        }
         */
        /* const incrementImage = () =>  {
            setCurrentImage(inc.value)
            setTimeout(() => {
                //var currentNum = state.value.incrementer + 1
                
                inc.value++
                if (inc.value == 8) {
                    inc.value = 0
                }
                incrementImage()
                
            }, 4000)
        } */
        console.log(oshino.inc)
        onMounted(oshino.useImages)
        onMounted(oshino.incrementImage)
         /* onMounted(oshino.useImages)
         onMounted(incrementImage) */
        return {
            images
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
        width:60%;
    }
}
/* .image-slideshow-item {
    display: inline-block;
    margin-right: 10px;
} */

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