
import IndexH from './pages/IndexH/IndexH'
import CmsIndex from './pages/CmsPages/CmsIndex/CmsIndex'
import CmsNYouser from './pages/CmsPages/CmsNYouser/CmsNYouser'
import CmsMenu from './pages/CmsPages/CmsMenu/CmsMenu'
import ItemMenuB from './components/CmsComponents/ItemMenuB/ItemMenuB'

let routes=[

{path:'/',element:<IndexH/>},


{path:'/p-admin' ,element:<CmsIndex/>,

children:[
{path:'users',element:<CmsNYouser/>},
{path:'menu',element:<CmsMenu/>},
{path:'menu/:id',element:<ItemMenuB/>},
{path:'menu/:id/:id',element:<ItemMenuB/>},
{path:'menu/:id/:id/:id',element:<ItemMenuB/>},
{path:'menu/:id/:id/:id/:id',element:<ItemMenuB/>},
{path:'menu/:id/:id/:id/:id/:id',element:<ItemMenuB/>},
]

},


]


export default routes
