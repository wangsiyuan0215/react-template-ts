// + -------------------------------------
// | _.js constance lib
// + -------------------------------------
// | 这里存放着非常危险的不可更改的静态变量
// + -------------------------------------
// | author: Wangsiyuan @ 2016-09-27
// + -------------------------------------

const constants: object = {
    isDebug: process.env.NODE_ENV !== 'production',

    // api 请求头
    urlHeader: '',

    // token 字符串
    tokenString: 'token'
};

export default constants;
