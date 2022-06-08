
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import MyLogin from "../views/MyLogin.vue"
import Admindex from "../views/Admindex.vue"
import AdmMenus from "../components/AdmMenus.vue"
//学生管理
import Stumanage from "../views/Stumanage.vue"
import StudentAdd from "../views/StudentAdd.vue"
import StudentInfo from "../views/StudentInfo.vue"
import StudentEdit from "../views/StudentEdit.vue"
//教师管理
import Teamanage from "../views/Teamanage.vue"

import TeaAdd from "../views/TeaAdd.vue"
import TeaInfo from "../views/TeaInfo.vue"
import TeaEdit from "../views/TeaEdit.vue"
import Clamanage from "../views/Clamanage.vue"
import ClaAdd from "../views/ClaAdd.vue"
//资源库
import CoursewareLibrary from "../views/CoursewareLibrary.vue"
import SingleChoice from "../views/SingleChoice.vue"
import UploadResource from "../views/UploadResource.vue"
import UploadSetInfo from "../views/UploadSetInfo.vue"
import DoExercise from "../views/UploadDoExercise.vue"




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
import MeasurementManagement from '../views/MeasurementManagement';
import TestMain from '../views/TestMain';
import NewTest from '../views/NewTest';
import NewTestHint1 from '../views/NewTestHint1';
import NewTestHint2 from '../views/NewTestHint2';
import NewTestHint3 from '../views/NewTestHint3';
import NewTestInfo from '../views/NewTestInfo';
import NewTestSelectPapers from '../views/NewTestSelectPapers';
import NewTestReleaseTesting from '../views/NewTestReleaseTesting';
import ExaminationPaperManagement from '../views/ExaminationPaperManagement';
import ExaminationPaper from '../views/ExaminationPaper';
import NewExaminationPaper from '../views/NewExaminationPaper';
import ExaminationPaperHint1 from '../views/ExaminationPaperHint1';
import ExaminationPaperHint2 from '../views/ExaminationPaperHint2';
import ExaminationPaperInfo from '../views/ExaminationPaperInfo';
import TestPaperComposition from '../views/TestPaperComposition';

import CourseStudy from "../views/CourseStudy.vue"
import MyClass from "../views/MyClass.vue"
import DataSet from "../views/DataSet.vue"
import ChangePassword from "../views/ChangePassword.vue"


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
        {
            path: "MyClass",
            name: "MyClass",
            component: MyClass,
        },
        {
            path: "DataSet",
            name: "DataSet",
            component: DataSet,
        },
        {
            path: "ChangePassword",
            name: "ChangePassword",
            component: ChangePassword,
        },
        ]
    },
    {
        path: "/CourseStudy",
        name: "CourseStudy",
        component: CourseStudy,
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

        },
        {
            path: "TeaAdd",
            name: "TeaAdd",
            component: TeaAdd,
        },
        {
            path: "TeaInfo",
            name: "TeaInfo",
            component: TeaInfo,
        },
        {
            path: "TeaEdit",
            name: "TeaEdit",
            component: TeaEdit,
        },
        {
            path: "Clamanage",
            name: "Clamanage",
            component: Clamanage,
        },
        {
            path: "ClaAdd",
            name: "ClaAdd",
            component: ClaAdd,
        },
        {
            path: "CoursewareLibrary",
            name: "CoursewareLibrary",
            component: CoursewareLibrary,
        },
        {
            path: "SingleChoice",
            name: "SingleChoice",
            component: SingleChoice,
        },
        {
            path: "UploadResource",
            name: "UploadResource",
            component: UploadResource,
        },
        {
            path: "UploadSetInfo",
            name: "UploadSetInfo",
            component: UploadSetInfo,
        },
        {
            path: "DoExercise",
            name: "DoExercise",
            component: DoExercise,
        },

        {
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

            },


            ]
        }, {

            path: "courserelease",
            name: "CourseRelease",
            component: CourseRelease,
        }, {

            path: "measurementmanagement",
            name: "MeasurementManagement",
            component: MeasurementManagement,
            children: [{
                path: "testmain",
                name: "TestMain",
                component: TestMain,
            }]
        }, {

            path: "newtest",
            name: "NewTest",
            component: NewTest,
            children: [{

                path: "newtesthint1",
                name: "NewTestHint1",
                component: NewTestHint1,
            },
            {

                path: "newtesthint2",
                name: "NewTestHint2",
                component: NewTestHint2,
            },
            {

                path: "newtesthint3",
                name: "NewTestHint3",
                component: NewTestHint3,
            },
            {

                path: "newtestinfo",
                name: "NewTestInfo",
                component: NewTestInfo,
            },
            {

                path: "newtestselectpapers",
                name: "NewTestSelectPapers",
                component: NewTestSelectPapers,
            },
            {

                path: "newtestreleasetesting",
                name: "NewTestReleaseTesting",
                component: NewTestReleaseTesting,
            },
            ]
        }, 
        {

            path: "examinationpapermanagement",
            name: "ExaminationPaperManagement",
            component: ExaminationPaperManagement,
            children: [{
                path: "examinationpaper",
                name: "ExaminationPaper",
                component: ExaminationPaper,
            }]
        }, {

            path: "newexaminationpaper",
            name: "NewExaminationPaper",
            component: NewExaminationPaper,
            children: [
                {
                path: "examinationpaperhint1",
                name: "ExaminationPaperHint1",
                component: ExaminationPaperHint1,
            }
            ,
                {
                path: "examinationpaperhint2",
                name: "ExaminationPaperHint2",
                component: ExaminationPaperHint2,
            }
            ,
                {
                path: "examinationpaperinfo",
                name: "ExaminationPaperInfo",
                component: ExaminationPaperInfo,
            }
            ,
                {
                path: "testpapercomposition",
                name: "TestPaperComposition",
                component: TestPaperComposition,
            }
            ,
        ]
        }, 
        {

            path: "/paginaion",
            name: "Paginaion",
            component: Paginaion,
        }, {
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