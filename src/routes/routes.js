import test from '../components/test.vue'
import routerTest from '../components/routerTest.vue'
import NotFound from '../components/NotFound.vue'

const routes =[
    {
        path:'/',
        component: test
    },
    {
        path:'/test',
        component: routerTest
    },
    { 
        path: '*', 
        component: NotFound 
    }
]

export default routes