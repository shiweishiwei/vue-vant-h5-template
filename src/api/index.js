import instance from '@/request'

export function testGetData(url, params) {
    return instance({
        url: url,
        method: 'get',
        params
    })
}