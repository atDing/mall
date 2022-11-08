import { request } from "./request";

export function getDetail(iid) { 
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}

//对商品信息的封装
export class Goods { 
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.discountBgColor = itemInfo.discountBgColor
		this.realPrice=itemInfo.realPrice
		this.columns = columns
		this.services = services
	}
}

//对店铺信息的封装
export class Shop { 
	constructor(shopInfo) { 
		this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.fans = shopInfo.cFans
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodsCount=shopInfo.cGoods
	}
}

//对参数信息的封装
export class GoodsParam { 
	constructor(info, rule) { 
		this.image = info.images ? info.images[0] : ''
		this.infos = info.set
		this.sizes = rule.tables
	}
}

export function getRecommend() { 
	return request({
		url:'/recommend'
	})
}