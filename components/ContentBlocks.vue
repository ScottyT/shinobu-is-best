<template>
    <div class="content-col content-col--default">
        <slot name="image" class="content-col__image"></slot>
        <slot name="heading"></slot>
    </div>
</template>
<script>
export default defineComponent({
    props: {
        columns: Number,
        hasImage: Boolean
    },
    setup(props) {
        const image1 = "/shinobu-11.jpg"
        const image2 = "/shinobu-10.jpg"
        const image3 = "/shinobu-9.jpg"

        return {
            image1,
            image2,
            image3
        }
    },
})
</script>
<style lang="scss">
.content-blocks {
    @include flex(40px, column);
    justify-content: space-between;
    
    &__header {
        text-align:center;
    }
    &__content {
        @include flex(40px, row);
    }
}
.content-col {
    &__image {
        width:100%;
        height:200px;
    }
    &--default {
        width:400px;
    }
}
</style>