import request from "@/utils/request.js";
/**
 * 获取已买宝贝
 * @param params
 * @returns {AxiosPromise}
 */
export function soldOrder(user) {
    return request({
      // closeLoading: true,
      // closeInterceptors: true,
      url: "/order/sold", //如果是绝对路径就不会在使用配置里的url
      method: "post",
      data: user //注意：如果是post请求请使用 data: params
    });
  }