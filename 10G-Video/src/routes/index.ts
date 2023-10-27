import Home from "../pages"
import Room from "../pages/room"
export const AppPages=[
    {
     title:'Home',
     Page:Home,
     path:"/",
    },
    {
    title:'Room',
    Page:Room,
    path:"/room/:id",
     },
    
]