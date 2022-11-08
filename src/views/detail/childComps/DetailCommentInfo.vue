<template>
	<div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
		<div class="info-header">
			<div class="header-title">用户评价</div>
			<div class="header-more">更多<i class="arrow-right">></i></div>
		</div>

		<div class="info-user">
			<img :src="commentInfo.user.avatar" alt="" />
			<span>{{ commentInfo.user.uname }}</span>
		</div>

		<div class="info-detail">
			<p>{{commentInfo.content}}</p>
			<div class="info-other">
				<span class="date">{{commentInfo.created | showDate}}</span>
				<span>{{commentInfo.style}}</span>
			</div>
			<div class="info-imgs">
				<img :key="index" :src="item" alt="" v-for="(item, index) in commentInfo.images" />
			</div>
		</div>
	</div>
</template>

<script>
import { formatDate } from "@/common/util";
export default {
	name:'DetailCommentInfo',
	props:{
		commentInfo:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	filters: {
		showDate: function (value){
			let date = new Date(value * 1000);
			return formatDate(date, "yyyy-MM-dd hh:mm");
		}
	},

}
</script>

<style scoped>
.comment-info{
  padding: 5px 12px;
  color: #333333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header{
	font-size: 13px;
	padding:10px 0;
	display: flex;
	justify-content: space-between;
  border-bottom: 3px solid #f2f5f8;
}
.info-user{
	padding:10px 0;
}
.info-user img{
	width:13%;
	border-radius: 50%;
	vertical-align: middle;
	margin-right:10px;
}
.info-user span{
	font-size: 13px;
}
.info-detail{
	/* margin-right:10px; */
}
.info-detail p{
	font-size: 13px;
	line-height: 1.5;
  color: #777777;
  margin-bottom: 10px;
}
.info-detail .info-other{
	font-size: 10px;
  color: #999999;
	margin-bottom:10px;
}
.info-detail .info-other .date{
	margin-right:10px;
}
.info-imgs img {
  width: 80px;
  height: 80px;
  margin-right: 5px;
}
</style>