<template>
    <div class="shinobu__slideshow">
        <img :src="$oshino.state.images[1]" />
        <p>Shinobu is {{shinobuMsg}}</p>
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
        onMounted(setMsg)
        onMounted(nuxtApp.$oshino.useImages)
        return {
            shinobuMsg
        }
    }
})
//const shinobu = useShinobu()
</script>