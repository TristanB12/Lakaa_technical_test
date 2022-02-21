<template>
    <div class="food-item">
        <div class="header">
            <h3>{{ food.name }}</h3>
            <span>{{ dateToString }}</span>
        </div>
        <p>{{ food.charityName }}</p>
        <div class="indicators">
            <div
                v-for="indicator in food.indicators"
                :key="indicator.title"
            >
                <span class="title">{{ indicator.title }}</span>
                <span class="value">{{ indicator.value }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            food: {
                type: Object,
                default: undefined
            },
        },
        computed: {
            dateToString() {
                let creationDate = new Date(this.food.created_at);
                let mm = creationDate.getMonth() + 1;
                let dd = creationDate.getDate();

                return [creationDate.getFullYear(),
                        (mm>9 ? '' : '0') + mm,
                        (dd>9 ? '' : '0') + dd
                ].join('/');
            }
        },
    }
</script>

<style lang="scss" scoped>
.food-item {
    padding: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h3 {
    font-size: 16px;
    color: #127475;
    font-weight: 600;
}
p {
    font-size: 16px;
    color: #127475;
    font-weight: 300;
}
.indicators {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    div {
        margin-right: 15px;

        .value {
            margin-left: 5px;
            font-weight: 600;
        }
    }
}
</style>