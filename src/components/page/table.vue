<template>
    <Table border :content="self" :columns="columns7" :data="data6"></Table>
</template>
<script>
    import {tableData} from './api'

    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                          return h('div', [
                            h('Icon', {
                              props: {
                                type: 'person'
                              }
                            }),
                            h('strong', params.row.name)
                          ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                      render: (h, params) => {
                        return h('div', [
                          h('Button', {
                            props: {
                              type: 'primary',
                              size: 'small'
                            },
                            style: {
                              marginRight: '5px'
                            },
                            on: {
                              click: () => {
                                this.show(params.index)
                              }
                            }
                          }, 'View'),
                          h('Button', {
                            props: {
                              type: 'error',
                              size: 'small'
                            },
                            on: {
                              click: () => {
                                this.remove(params.index)
                              }
                            }
                          }, 'Delete')
                        ]);
                      }
                    }
                ],
                data6: []
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            setTableData () {
                let params = {}
                tableData(params).then(res => {
                    this.data6 = res.result
                })
            }
        },
         mounted() {
             this.setTableData()
         }
    }
</script>
