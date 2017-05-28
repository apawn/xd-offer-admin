<template>
    <div class="new-list">
        <i-table :columns="newsColumn"
                 :data="newsData"
                 :content="self"
                 width="100%"></i-table>
        <div class="add-wrapper">
            <i-button type="success"
                      shape="circle"
                      @click="addNews()"
                      long>
                新增
            </i-button>
        </div>
    </div>
</template>

<script>
import { routerGo, getAllNews, setCurrentActiveKey, removeNewsAction } from '../../vuex/actions.js'

export default {
    data() {
        return {
            self: this,
            newsColumn: [{
                title: '标题',
                key: 'header',
                render: function (row) {
                    return `<a @click="newDetail('${row.id}')">${row.header}</a>`
                },
            }, {
                title: '时间',
                key: 'time',
            }, {
                title: '操作',
                align: "center",
                render: function (row) {
                    return `    
    <Button-group shape="circle">
        <i-button type="error"
                  size="small"
                  @click="removeNews('${row.id}')">
            删除
        </i-button>
        <i-button type="success"
                  size="small"
                  @click="removeNews('${row.id}')">
            修改
        </i-button>
    </Button-group>`
                }
            }]
        }
    },


    computed: {
        newsData: function () {
            return this.allNews.map(item => {
                return {
                    id: item.id,
                    header: item.header,
                    time: item.time,
                    content: item.content
                }
            }) || []
        }
    },
    methods: {
        newDetail(id) {
            this.getCurrentNewDetail(id).then(res => {
                this.routerGo(`/home/${id}`);
            }).catch(err => {
                return;
            })
        },
        removeNews(email) {
            console.log(email);
            this.removeNewsAction(email).then(() => {
                this.$Message.success('删除成功');
            }).catch(err => {
                this.$Message.error('删除失败');
            })
        }
    },

    created() {
        this.setCurrentActiveKey(1);
        this.getAllNews();
    },
    vuex: {
        getters: {
            allNews: state => state.allNews
        },
        actions: {
            routerGo,
            getAllNews,
            // getCurrentNewDetail,
            setCurrentActiveKey,
            removeNewsAction
        }
    }

}

</script>

<style lang="less">
.new-list {
    padding: 30px 20px;
    .add-wrapper {
        margin-top: 30px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
        button {
            width: 400px;
        }
    }
}
</style>