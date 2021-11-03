<template>
    <div class="slideshow">
        <div class="slideshow__message">
            <h1 class="slideshow__message slideshow__message--h1">Shinobu is <strong>{{message}}</strong></h1>
            <h2 class="slideshow__message slideshow__message--h2">{{headline}}</h2>
        </div>
        {{curHeight}}
        <div class="slideshow__slides" ref="image" >
            <transition name="image-slideshow" mode="out-in" tag="div" v-on:after-enter="check">
                <img :src="cur" :key="$oshino.state.currentImage" />
                <!-- <img ref="image" src="/shinobu-5.jpg"  /> -->
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
        //const c = ref(`/shinobu-1.jpg`)
        const incre = ref(1)
        const isPortrait = ref(false)
        const curHeight = ref(0)
        //const c = computed(() => `/shinobu-${incre.value}.jpg`)
        
        const getImageSize = () => {
            
            if (refs.image.firstChild.naturalHeight > refs.image.firstChild.naturalWidth) {
                
                isPortrait.value = true
            } else {
                isPortrait.value = false
            }
            //naturalSize.value = refs[`image${v}`].naturalHeight
        }
        function check() {
            //incre.value = oshino.inc.count
            curHeight.value = refs.image.firstChild.naturalHeight
            console.log(refs.image.firstChild.complete)
            if (refs.image.firstChild.complete) {
                getImageSize()
            } else {
                refs.image.firstChild.addEventListener('load', getImageSize)
            }
            
            /* if (refs.image.complete) {
                console.log("loaded")
                getImageSize()
            } else {
                console.log("not loaded")
                refs.image.addEventListener('load', getImageSize)
            } */
        }
        const incrementImage = () =>  {
            //setCurrentImage(inc)
            
            //c.value = images[incre.value - 1]
            
            setTimeout(() => {
                if (incre.value === images.length) {
                    incre.value = 1
                } else {
                    incre.value++
                    check()
                }
                incrementImage()
                
            }, 5000)
            
        }
        onMounted(oshino.useImages)
        onMounted(oshino.incrementImage)
        onMounted(incrementImage)
        onMounted(check)
        /* watch(() => c.value, (val) => {
            console.log(val)
            check(val)
        }) */
        return {
            images,
            isPortrait,
            incre,
            cur: computed(() => `/shinobu-${incre.value}.jpg`),
            curHeight,
            check
        } 
    },
    /* methods: {
        checkImageSize() {
            if (this.$refs.image.naturalHeight > this.$refs.image.naturalWidth) {
                this.isPortrait = true
                console.log("true")
            } else {
                console.log("false")
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this.$refs)
            if (this.$refs.image.complete) {
                console.log("loaded")
                //this.checkImageSize()
            } else {
                this.$refs.image.addEventListener('load', this.checkImageSize)
            }
        })
    } */
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
        max-width:70%;
        aspect-ratio:14/12;
        img {
            
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