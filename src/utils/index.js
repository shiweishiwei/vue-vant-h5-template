export function sexJudge(sex) {
    let res = ''
    switch (sex) {
        case 'male':
            res = '男性'
            break
        case 'male':
            res = '女性'
            break
        default:
            res = '未透露性别'
            break
    }
    return res
}