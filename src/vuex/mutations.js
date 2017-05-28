import { router } from '../router.js'

export default {
    ROUTE_GO(state, href, anchorSelector = "body") {
        // router.go(href);
        router.go(href);
        setTimeout(() => {
            var anchor = document.querySelector(anchorSelector);
            if (anchor)
                document.body.scrollTop = anchor.offsetTop - 60;
        }, 0);
    },

    SIGN_IN(state, result) {
        if (result.ok) {
            state.session = result.session;
        } else {
            state.session = null;
        }
    },


    SET_CURRENT_PAGE(state, page, companies) {
        state.currentPage = page;
        state.currentCompanies = companies;
    },

    SET_TOTAL_COUNT(state, totalCount) {
        state.totalCount = totalCount.count;
    },

    SET_CURRENT_COMPANY_DETAIL(state, currentCompany) {
        state.currentCompany = currentCompany;
    },
    // 设置登录对话框是否显示
    SET_SIGNIN_MODAL(state, signInModal) {
        state.signInModal = signInModal;
    },

    SET_CURRENT_ACTIVE_KEY(state, activeKey) {
        state.currentActiveKey = activeKey;
    },

    REMOVE_COMPANY(state, name, email) {
        var index = state.currentCompanies.findIndex((item) => {
            return item.email === email && item.name == name
        })
        if (index >= 0) {
            state.currentCompanies.splice(index, 1);
        }
    },

    // 学生部分
    SET_CURRENT_STUDENT_PAGE(state, page, students) {
        state.currentStudentPage = page;
        state.currentStudents = students;
    },
    SET_STUDENT_TOTAL_COUNT(state, totalCount) {
        state.totalStudentCount = totalCount.count;
    },
    SET_CURRENT_STUDENT_DETAIL(state, student) {
        state.currentStudent = student;
    },
    REMOVE_STUDENT(state, email) {
        var index = state.currentStudents.findIndex((item) => {
            return item.email == email
        })
        if (index >= 0) {
            state.currentStudents.splice(index, 1);
        }
    },

    SET_ALL_NEWS(state, allNews) {
        state.allNews = allNews
    },

    REMOVE_STUDENT(state, id) {
        var index = state.allNews.findIndex((item) => {
            return item.id === id
        })
        if (index >= 0) {
            state.allNews.splice(index, 1);
        }
    },

    ADD_NEWS(state, news) {
        if (news) {
            state.allNews.push(news)
        }
    }
}