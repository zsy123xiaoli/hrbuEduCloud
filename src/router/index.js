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
import CurriculumDesign from '../views/CurriculumDesign';
import NewCurriculum from '../views/NewCurriculum';
import SetCourse from '../views/SetCourse';
import AddCourse from '../views/AddCourse';
import NewCurriculumHint1 from '../views/NewCurriculumHint1';
import NewCurriculumHint2 from '../views/NewCurriculumHint2';
import CourseInfo from '../views/CourseInfo';
import AddClass from '../views/AddClass';
import SelectAddclass from '../views/SelectAddclass';
import Paginaion from '../views/Paginaion';
import Course from '../views/Course';
import PreviewCourse from '../views/PreviewCourse';
import CourseRelease from '../views/CourseRelease';



export default new VueRouter({
    routes: [{
            path: "/",
            name: "MyLogin",
            component: MyLogin
        },
        {
            path: "/student",
            name: "Studentindex",
            component: StudentIndex,
        },
        {
            path: "/StuMenus",
            name: "StuMenus",
            component: StuMenus,
            children: [{
                    path: "AllCourses",
                    name: "AllCourses",
                    component: AllCourses,
                },
                {
                    path: "PublicClass",
                    name: "PublicClass",
                    component: PublicClass,
                },
            ]
        },

        {
            path: "/admin",
            name: "Admindex",
            component: Admindex,
        },
        {
            path: "/AdmMenus",
            name: "AdmMenus",
            component: AdmMenus,
            children: [{
                    path: "Stumanage",
                    name: "Stumanage",
                    component: Stumanage,
                },
                {
                    path: "StudentAdd",
                    name: "StudentAdd",
                    component: StudentAdd,
                },
                {

                    path: "StudentInfo",
                    name: "StudentInfo",
                    component: StudentInfo,


                },
                {
                    path: "StudentEdit",
                    name: "StudentEdit",
                    component: StudentEdit,
                },
                {
                    path: "Teamanage",
                    name: "Teamanage",
                    component: Teamanage,
                }, {
                    path: "curriculumdesign",
                    name: "CurriculumDesign",
                    component: CurriculumDesign,
                },
                {
                    path: "newcurriculum",
                    name: "NewCurriculum",
                    component: NewCurriculum,
                    children: [{
                            path: "setcourse",
                            name: "SetCourse",
                            component: SetCourse,
                        },
                        {
                            path: "addcourse",
                            name: "AddCourse",
                            component: AddCourse,
                            children: [{
                                path: "courseinfo",
                                name: "CourseInfo",
                                component: CourseInfo,
                                children: [{
                                    path: "addclass",
                                    name: "AddClass",
                                    component: AddClass,
                                }]
                            }]

                        },
                        {
                            path: "newcurriculumhint1",
                            name: "NewCurriculumHint1",
                            component: NewCurriculumHint1,

                        },
                        {
                            path: "newcurriculumhint2",
                            name: "NewCurriculumHint2",
                            component: NewCurriculumHint2,

                        }
                    ]
                }
                , {

                    path: "courserelease",
                    name: "CourseRelease",
                    component: CourseRelease,
                }
                , {

                    path: "/paginaion",
                    name: "Paginaion",
                    component: Paginaion,
                }
                , {
                    path: "/course",
                    name: "Course",
                    component: Course,

                },
            ]
        }, {
            path: "/selectaddclass",
            name: "SelectAddclass",
            component: SelectAddclass,
        }, {
            path: "/previewcourse",
            name: "PreviewCourse",
            component: PreviewCourse,
        }
    ]
})