<template>
    <div class="slideshow">
        <div class="slideshow__message">
            <h1 class="slideshow__message slideshow__message--h1">Shinobu is <strong>{{message}}</strong></h1>
            <h2 class="slideshow__message slideshow__message--h2">{{headline}}</h2>
        </div>
        <div class="slideshow__slides" ref="image">
            <transition name="image-slideshow" mode="out-in" tag="div" v-on:after-enter="check">
                <img :class="{'slideshow__image--portrait':isPortrait}" class="slideshow__image" :src="$oshino.state.currentImage === '' ? $oshino.state.images[0] : 
                    $oshino.state.currentImage" :key="$oshino.state.currentImage" />
                <!-- <img class="slideshow__image--portrait" ref="image" src="/shinobu-5.jpg"  /> -->
            </transition>
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
    setup(props, { root, refs}) {
        const oshino = root.$oshino
        const images = oshino.state.images
        const isPortrait = ref(false)
        const curHeight = ref(0)
        
        const getImageSize = () => {
            
            if (refs.image.firstChild.naturalHeight > refs.image.firstChild.naturalWidth) {
                isPortrait.value = true
            } else {
                isPortrait.value = false
            }
            //naturalSize.value = refs[`image${v}`].naturalHeight
        }
        function check() {
            curHeight.value = refs.image.firstChild.naturalHeight
            if (refs.image.firstChild.complete) {
                getImageSize()
            } else {
                refs.image.firstChild.addEventListener('load', getImageSize)
            }
        }
        onMounted(oshino.useImages)
        onMounted(oshino.incrementImage)
        onMounted(check)
        return {
            images,
            isPortrait,
            curHeight,
            check
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
    @include respond(mobileLargeMax) {
        flex-direction:column;
    }
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
        max-width:100%;
        @include respond(tabletMid) {
            max-width:70%;
        }
    }
    &__image {
        aspect-ratio:16/9;
        @include respond(mobileLargeMax) {
            aspect-ratio: 5/7;
        }
        &--portrait {
            aspect-ratio: 14/16;
        }
    }
}
.image-slideshow-item {
    display: inline-block;
    margin-right: 10px;
    width:100%;
}

.image-slideshow-enter-active,
.image-slideshow-leave-active {
    transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    
}

.image-slideshow-enter,
.image-slideshow-leave-to {
    //visibility: hidden;
    opacity: 0;
    transform: translateY(30px);
}
</style>