<template>
	<div>
		<van-nav-bar
			title="商品"
			left-text="返回"
			right-text="按钮"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>
		<van-tabbar v-model="active" :fixed="false" :border="false">
			<van-tabbar-item>标签</van-tabbar-item>
			<van-tabbar-item>标签</van-tabbar-item>
			<van-tabbar-item>标签</van-tabbar-item>
			<van-tabbar-item>标签</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0
		};
	},
	methods: {
		onClickLeft() {
			console.log(0);
		},
		onClickRight() {
			console.log(2);
		}
	}
};
</script>

<style>
</style>