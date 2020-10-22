//mutuations同步修改状态，actions异步修改状态，
const state = {
    userName: 'shiwei'
}

const mutations = {
    SET_USER_NAME(state, name) {
        state.userName = name
    }
}

const actions = {
    // 设置name
    setUserName({ commit }, name) {
        commit('SET_USER_NAME', name)
    }
}

export default {
    state,
    mutations,
    actions
}