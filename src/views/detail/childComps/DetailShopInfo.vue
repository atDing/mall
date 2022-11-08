<template>
	<div class="shop-info">
		<div class="shop-top">
			<img :src="shop.logo">
			<span>{{shop.name}}</span>
		</div>
		<div class="shop-middle">
			<div class="shop-middle-item shop-middle-left">
				<div class="info-sells">
					<div class="sells-count">
						{{shop.sells | sellCountFilter}}
					</div>
					<div class="sells-text">总销量</div>
				</div>
				<div class="info-goods">
					<div class="goods-count">
						{{shop.goodsCount}}
					</div>
					<div class="goods-text">全部宝贝</div>
				</div>
			</div>
			<div class="shop-middle-item shop-middle-right">
        <table>
          <tr :key="index" v-for="(item, index) in shop.score">
            <td>{{ item.name }}</td>
            <td :class="{ 'score-better': item.isBetter }" class="score">
              {{ item.score }}
            </td>
            <td :class="{ 'better-more': item.isBetter }" class="better">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
		</div>
		<div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
	</div>
</template>

<script>
export default {
	name:'DetailShopInfo',
	props:{
		shop:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	filters:{
		sellCountFilter(num){
			if(num<10000){
				return num
			}
			return (num/10000).toFixed(1)+"万"
		}
	}
}
</script>

<style scoped>
.shop-info{
	padding-bottom:5px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top{
	margin:20px 0px 20px 10px;
}
.shop-top img{
	width:13%;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 10px;
	border:2px solid #d9dde1;
}
.shop-top span{
	font-size:14px;
}
.shop-middle{
	display: flex;
	flex:1;
	justify-content: space-around; 
}
.shop-middle-item{
	display: flex;
	flex:1;
  justify-content: space-evenly;
	
}
.shop-middle-left{
	align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.info-sells,.info-goods{
	line-height: 23px;
}
.sells-count,.goods-count{
	font-size:15px;
}
.sells-text,.goods-text{
	font-size:12px;
}
.shop-middle-right{
	font-size:13px;
	align-items: center;
}
.shop-middle-right table{
	width: 120px;
}
.shop-middle-right table td{
  padding: 2px 0;
}
.shop-middle-right .score{
  color: #5ea732;
}
.shop-middle-right .score-better{
	color: #f13e3a;
}
.shop-middle-right .better{
	color:#fff;
	background-color: #5ea732;
	padding-left:2px;
}
.shop-middle-right .better-more{
	background-color: #f13e3a;
}
.shop-bottom{
	text-align: center;
	margin:20px 0;
}
.enter-shop{
	width: 40%;
	font-size:13px;
	line-height: 25px;
	text-align: center;
	display: inline-block;
	border-radius: 10px;;
	background-color: #f2f5f8;
}
</style>