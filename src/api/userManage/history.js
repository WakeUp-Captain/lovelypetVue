import request from "@/utils/request.js";

/**
 * 获取浏览记录列表
 * @param params
 * @returns {AxiosPromise}
 */
export function historyList(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/user/browsehistory", //如果是绝对路径就不会在使用配置里的url
    method: "post",
    data: params //注意：如果是post请求请使用 data: params
  });
}

/**
 * 获取浏览记录
 * @param params
 * @returns {AxiosPromise}
 */
export function deletehistory(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/user/deletebrowsehistory", //如果是绝对路径就不会在使用配置里的url
    method: "post",
    data: params //注意：如果是post请求请使用 data: params
  });
}
