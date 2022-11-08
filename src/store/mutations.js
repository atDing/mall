export default {
	//增加相同商品数量
	ADD_COUNTER(state, product) { 
		product.count++
	},
	
	//增加购物车中，不同商品
	ADD_TO_CART(state, product) { 
		product.select=false
		state.cartList.push(product)
		// localStorage.setItem('cartList', JSON.stringify(state.cartList))
	},
	//删除该商品
	DEL_ITEM(state, product) { 
		// console.log('要删除的商品的下标：',state.cartList.indexOf(product))
		state.cartList.splice(state.cartList.indexOf(product),1)
		console.log('删除商品---', product.iid)
		localStorage.setItem('cartList', JSON.stringify(state.cartList))
	},
	//是否选择该商品
	CHANGE_SELECT(state,product) { 
		product.select=!product.select
	},
	// UPDATESTATE(state, product) {
	// 	state.cartList = JSON.parse(localStorage.getItem('cartList'))
	// }
	//是否全选
	selectAll(state, selectedAll) { 
			state.cartList.forEach((item) => {
				if (selectedAll) {
					item.select = true
				} else { 
					item.select = false
				}
			});
	}
}