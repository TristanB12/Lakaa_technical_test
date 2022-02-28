<template>
    <div class="item">
        <div class="directory-infos">
            <h2>{{ directoryFullname }}</h2>
            <button @click="addDirectory">+</button>
            <button @click="sendRemoveDirectory">-</button>
        </div>
        <div class="children-container">
            <DirectoryItem
                v-for="child in item.children"
                :key="child.name"
                :item="child"
                @remove-directory="removeDirectory"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: undefined
            },
        },
        computed: {
            directoryFullname() {
                return '- ' + this.item.name; 
            }
        },
        methods: {
            addDirectory() {
                const name = this.item.children.at(-1)?.name || 0;
                const newDirectory = {
                    name: name + 1,
                    isRoot: false,
                    children: []
                }

                this.item.children.push(newDirectory);
            },
            sendRemoveDirectory() {
                if (this.item.isRoot) return;

                this.$emit('remove-directory', this.item.name);
            },
            removeDirectory(name) {
                for (let i = 0; i < this.item.children.length; i++) {
                    if (this.item.children[i].name === name) {
                        this.item.children.splice(i, 1);
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.item {
    margin-bottom: 10px;

    button {
        padding: 5px 10px;
        font-size: 18px;
    }
}
.directory-infos {
    display: flex;
}
.children-container {
    margin-top: 10px;
    padding-left: 25px;
}
</style>