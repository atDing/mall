export default {
	cartLength(state) { 
		return state.cartList.length
	},
	// cartListFromStorage(state) {
	// 	return JSON.parse(localStorage.getItem('cartList'))
	// }
	getIsSelectedList(state) { 
		let isSelectedList = state.cartList.filter((item, index) => { 
			return item.select
		})
		return isSelectedList
	},
}