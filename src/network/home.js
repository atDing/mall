
/* export function getHomeMultiData() {
  return axios({
    url: "/home/multidata"
  }).catch(err => err);
}

export function getHomeGoodsData(type, page) {
  return axios({
    url: "/home/data",
    params: { type, page }
  }).catch(err => err);
}
 */

import { request } from "./request";

export function getHomeMultiData() {
  return request({
    url: "/home/multidata"
  }).catch(err => err);
}

export function getHomeGoods(type, page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
 }