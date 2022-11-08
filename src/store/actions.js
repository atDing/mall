export default {
	//添加到购物车
	addCart(context, product) {
		return new Promise((resolve,reject) => { 
			let flag=0
			for (let item of context.state.cartList) { 
				if (product.iid == item.iid) { 
					flag=1
					context.commit('ADD_COUNTER', item)
					resolve('商品数量加1')
				}
			}
			if (!flag) {
				context.commit('ADD_TO_CART', product)
				resolve('添加商品')
			} 
		})
		
	 },
}