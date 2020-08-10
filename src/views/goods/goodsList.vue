<template>
    <div>
        {{msg}}
        <ul>
            <li v-for="(good, index) in goods" :key="index">
                <p1>{{good.description}}</p1>
                <br>
                <p2>{{good.price}}</p2>
                <br>
                <p2>{{good.summaryClassifyname}}</p2>
                <br>
                <p2>{{good.detailClassifyname}}</p2>
                <br>
                <p2>{{good.owner}}</p2>
                <br>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodsList",
        data(){
            return{
                msg:"这是一个用来测试get方法的页面",
                goods:[]
            }},
        mounted() {
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                this.$axios.get("goods/list")
                .then(response=> {
                    this.goods = response.data,
                        console.log(response.data)
                })
                .catch(Error=>{
                    console.log(Error);
                })
            }
        }
    }
</script>

<style scoped>

</style>