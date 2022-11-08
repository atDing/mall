<template>
	<div class="param-info" v-if="Object.keys(paramInfo).length!==0">
		<p>参数信息</p>
		<table class="info-size" :key="index" v-for="(table, index) in paramInfo.sizes">
			<tr v-for="(tr, indey) in table" :key="indey">
				<td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
			</tr>
		</table>
		<table class="info-param">
			<tr v-for="(item,index) in paramInfo.infos" :key="index">
				<td class="param-key">{{item.key}}</td>
				<td class="param-value">{{item.value}}</td>
			</tr>
		</table>
		<div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
	</div>
</template>

<script>
export default {
	name:'DetailParamInfo',
	props:{
		paramInfo:{
			type:Object,
			default(){
				return {}
			}
		}
	},
}
</script>

<style scoped>
.param-info{
  font-size: 13px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info p{
	margin-bottom:10px;
}
.param-info table{
	width: 100%;
  border-collapse: collapse;
  border-bottom: 3px solid #f2f5f8;
}
.param-info tr{
	 height: 42px;
}
.param-info tr td{
   border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param .param-key{
	width:25%;
}
.info-param .param-value{
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>