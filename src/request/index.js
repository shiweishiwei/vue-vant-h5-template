import axios from 'axios'
import { Toast } from 'vant'
import { baseApi } from '@/config'

//创建axios实例
const instance = axios.create({
    baseURL: baseApi,
    withCredentials: true,   //是否携带cookie
    timeout: 1000 * 3          //设定超时时间
})

//拦截request
instance.interceptors.request.use(
    config => {
        // 默认开启loading
        if (!config.hideloading) {
            Toast.loading({
                forbidClick: true
            })
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//拦截response

instance.interceptors.response.use(
    response => {
        Toast.clear()
        return response.data
    },
    error => {
        Toast.clear()
        const msg = error.Message !== undefined ? error.Message : ''
        Toast.fail({
            message: '网络错误' + msg,
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)