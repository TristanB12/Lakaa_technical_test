<template>
    <div class="root">
        <DirectoryItem
            :item="directories"
        />
    </div>
</template>

<script>
import DirectoryItem from '@/components/DirectoryItem.vue';
    export default {
        components: {
            DirectoryItem,
        },
        data() {
            return {
                directories: {
                    name: 1,
                    isRoot: true,
                    children: []
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.root {
    width: 50%;
    margin: auto;
    margin-top: 10vh;
}
</style>