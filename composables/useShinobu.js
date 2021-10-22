import { useState } from '#app'
const state = ref({
    images: []
})
const useImages = () => {
    for (var i = 1; i < 8; i++) {
        state.value.images.push(`/shinobu-${i}.jpg`)
    }
}

export default {
    state: readonly(state.value),
    useImages
}