import request from "@/utils/request.js";

/**
 * 删除收藏夹内容
 * @param params
 * @returns {AxiosPromise}
 */
export function deleteStar(star) {
    return request({
      // closeLoading: true,
      // closeInterceptors: true,
      url: "/user/deleteStar", //如果是绝对路径就不会在使用配置里的url
      method: "post",
      data: star //注意：如果是post请求请使用 data: params
    });
  }