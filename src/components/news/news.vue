<template>
    <div class="new-list">
        <i-table :columns="newColumn"
                 :data="newData"
                 :content="self"
                 width="100%"></i-table>
        <div class="add-wrapper">
            <i-button type="success"
                      @click="addNews()">
                新增
            </i-button>
        </div>
    </div>
</template>

<script>
import { routerGo, getCurrentNewPage, getNewsCount, getCurrentNewDetail, setCurrentActiveKey, removeNewAction } from '../../vuex/actions.js'
export default {

}
// export default {
//     data() {
//         return {
//             self: this,
//             newColumn: [{
//                 title: '学生姓名',
//                 key: "name",
//                 render: function (row, column, index) {
//                     return `<a @click="routerGo('/new/${row.name}')"{>${row.name}</a>`
//                 }
//             }, {
//                 title: '学院',
//                 key: "collage"
//             }, {
//                 title: '专业',
//                 key: "speciality"
//             }, {
//                 title: '性别',
//                 key: "gender"
//             }, {
//                 title: '操作',
//                 render: function (row, column, index) {
//                     return ` <i-button type="error" size="small" @click="removeNew('${row.email}')">删除</i-button>`
//                 }
//             }]
//         }
//     },
//     computed: {
//         newData: function () {
//             return this.currentNews.map(item => {
//                 return {
//                     name: item.name,
//                     collage: item.collage,
//                     speciality: item.speciality,
//                     gender: item.gender == "male" ? '男' : '女',
//                     email: item.email
//                 }
//             }) || []
//         }
//     },
//     methods: {
//         newDetail(name) {
//             this.getCurrentNewDetail(name).then(res => {
//                 this.routerGo(`/home/${name}`);
//             }).catch(err => {
//                 return;
//             })
//         },
//         pageChange(currentPage) {
//             this.getCurrentNewPage(currentPage);
//         },
//         removeNew(email) {
//             console.log(email);
//             this.removeNewAction(email).then(() => {
//                 this.$Message.success('删除成功');
//             }).catch(err => {
//                 this.$Message.error('删除失败');
//             })
//         }
//     },

//     created() {
//         this.setCurrentActiveKey(1);
//         this.getNewsCount().then(res => {
//             if (res.count > 0) {
//                 this.getCurrentNewPage(1).catch(err => {
//                     console.log(err);
//                     return;
//                 })
//             }
//         }).catch(err => {
//             console.log(err);
//             return;
//         })


//     },
//     vuex: {
//         getters: {
//             totalCount: state => state.totalNewCount,
//             currentPage: state => state.currentNewPage,
//             currentNews: state => state.currentNews
//         },
//         actions: {
//             routerGo,
//             getCurrentNewPage,
//             getNewsCount,
//             getCurrentNewDetail,
//             setCurrentActiveKey,
//             removeNewAction
//         }
//     }

// }

</script>

<style lang="less">
.new-list {
    padding: 30px 20px;
    .pager {
        margin-top: 30px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    }
}
</style>