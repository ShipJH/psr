import test from '../components/test.vue'
import routerTest from '../components/routerTest.vue'
import NotFound from '../components/NotFound.vue'
import board from '../components/view/board.vue'
import detailView from '../components/view/detailView.vue'
import tempPage from '../components/view/tempPage.vue'

const routes = [{
        path: '/',
        component: test
    },
    {
        path: '/test',
        component: routerTest
    },
    {
        path: '/board',
        component: board
    },
    {
        path: '/detailView',
        name: 'detailView',
        component: detailView
    },
    {
        path: '/tempPage',
        name: 'tempPage',
        component: tempPage
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes