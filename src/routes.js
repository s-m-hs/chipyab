
import IndexH from './pages/IndexH/IndexH'
import CmsIndex from './pages/CmsPages/CmsIndex/CmsIndex'
import CmsNYouser from './pages/CmsPages/CmsNYouser/CmsNYouser'
import CmsMenu from './pages/CmsPages/CmsMenu/CmsMenu'
import MainShow from './components/CmsComponents/MainShow/MainShow'

let routes=[

{path:'/',element:<IndexH/>},


{path:'/p-admin' ,element:<CmsIndex/>,

children:[
{path:'users',element:<CmsNYouser/>},
{path:'menu',element:<CmsMenu/>},
{path:'mainshow',element:<MainShow/>},
]

},


]


export default routes
