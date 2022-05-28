import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import MyLogin from "../views/MyLogin.vue"
import Admindex from "../views/Admindex.vue"
import AdmMenus from "../components/AdmMenus.vue"
import Stumanage from "../views/Stumanage.vue"
import StudentAdd from "../views/StudentAdd.vue"
import StudentInfo from "../views/StudentInfo.vue"
import StudentEdit from "../views/StudentEdit.vue"
import Teamanage from "../views/Teamanage.vue"
import StudentIndex from "../views/StudentIndex.vue"
import StuMenus from "../components/StuMenus.vue"
import AllCourses from "../views/AllCourses.vue"
import PublicClass from "../views/PublicClass.vue"








export default new VueRouter({
    routes:[
        {
            path:"/",
            name:"MyLogin",
            component:MyLogin
        },
        {
            path:"/student",
            name:"Studentindex",
            component:StudentIndex,
        },
        {
            path:"/StuMenus",
            name:"StuMenus",
            component:StuMenus,
            children:[
                {
                    path:"AllCourses",
                    name:"AllCourses",
                    component:AllCourses,
                },
                {
                    path:"PublicClass",
                    name:"PublicClass",
                    component:PublicClass,
                },
            ]
        },
       
        {
            path:"/admin",
            name:"Admindex",
            component:Admindex,
        },
        {
            path:"/AdmMenus",
            name:"AdmMenus",
            component:AdmMenus,
            children:[
                {
                    path:"Stumanage",
                    name:"Stumanage",
                    component:Stumanage,
                },
                {
                    path:"StudentAdd",
                    name:"StudentAdd",
                    component:StudentAdd,
                },
                {   
           
                    path:"StudentInfo",
                    name:"StudentInfo",
                    component:StudentInfo,
             
                    
                },
                {
                    path:"StudentEdit",
                    name:"StudentEdit",
                    component:StudentEdit,
                },
                {
                    path:"Teamanage",
                    name:"Teamanage",
                    component:Teamanage,
                }
                
            ]
        }
    ]
})