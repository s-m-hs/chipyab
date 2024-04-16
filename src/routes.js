
import IndexH from './pages/IndexH/IndexH'
import CmsIndex from './pages/CmsPages/CmsIndex/CmsIndex'
import CmsNYouser from './pages/CmsPages/CmsNYouser/CmsNYouser'

let routes=[

{path:'/',element:<IndexH/>},


{path:'/p-admin' ,element:<CmsIndex/>,

children:[
{path:'users',element:<CmsNYouser/>},
]

},


]


export default routes
