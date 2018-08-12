import Vue from 'vue'
import Router from 'vue-router'
import Common from '../components/common'
import Page from '../components/page'

Vue.use(Router);

export default new Router({
  routes: [{
          path: '/',
          redirect: '/login',
          name: '未匹配的路由',
          component: Common.Login
      },
      {
          path: '/login',
          component: Common.Login
      },
      {
          path: '/about',
          component: Common.Index,
            children: [{
                  path: '',
                  component: Common.About
              },
              {
                  path: '/form',
                  component: Page.Form
              },
              {
                  path: '/table',
                  component: Page.Table
              },
              {
                path: '/select',
                component: Page.Select
              },
              {
                path: '/date-picker',
                component: Page.DatePicker
              },
              {
                path: '/alert',
                component: Page.Alert
              },
              {
                path: '/message',
                component: Page.Message
              },
              {
                path: '/tag',
                component: Page.Tag
              },
              {
                path: '/radio',
                component: Page.Radio
              },
              {
                  path: '/markdown-viewer',
                  component: Page.MarketViewer
              },
              {
                  path: '/markdown-editor-1',
                  component: Page.MarkDown1
              },
              {
                  path: '/markdown-editor-2',
                  component: Page.MarkDown2
              },
              {
                  path: '/rtf',
                  component: Page.Rtf
              },{
                  path: '/upload',
                  component: Page.Upload
              },{
                  path: '/echarts',
                  component: Page.ECharts
              }
          ]
      }
  ]
    // routes: [{
    //         path: '/',
    //         redirect: '/login'
    //     },
    //     {
    //         path: '/about',
    //         component: resolve => require(['../components/common/index.vue'], resolve),
    //         children: [{
    //                 path: '',
    //                 component: resolve => require(['../components/common/about.vue'], resolve)
    //             },
    //             {
    //                 path: '/form',
    //                 component: resolve => require(['../components/page/form.vue'], resolve)
    //             },
    //             {
    //                 path: '/table',
    //                 component: resolve => require(['../components/page/table.vue'], resolve)
    //             },
    //             {
    //                 path: '/markdown-viewer',
    //                 component: resolve => require(['../components/page/markdown-viewer.vue'], resolve)
    //             },
    //             {
    //                 path: '/markdown-editor-1',
    //                 component: resolve => require(['../components/page/markdown-editor-1.vue'], resolve)
    //             },
    //             {
    //                 path: '/markdown-editor-2',
    //                 component: resolve => require(['../components/page/markdown-editor-2.vue'], resolve)
    //             },
    //             {
    //                 path: '/rtf',
    //                 component: resolve => require(['../components/page/rtf.vue'], resolve)
    //             },{
    //                 path: '/upload',
    //                 component: resolve => require(['../components/page/upload.vue'], resolve)
    //             },{
    //                 path: '/echarts',
    //                 component: resolve => require(['../components/page/echarts.vue'], resolve)
    //             }
    //         ]
    //     },
    //     {
    //         path: '/login',
    //         component: resolve => require(['../components/common/login.vue'], resolve)
    //     },
    // ]
})
