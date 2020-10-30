import { instance } from '@/request/index.js'

export function getCardListByUserId(params) {
    return instance({
        url: '/cardlist',
        method: 'get',
        params
    })
}
