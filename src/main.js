import { createSSRApp } from "vue";
import App from "./App.vue";

const methodToPatch = ['navigateTo', 'redirectTo', 'switchTab', 'navigateBack']

methodToPatch.forEach(item => {
	const original = uni[item]
	uni[item] = function(opt, needAuth) {
			 if (needAuth) { // 需要登录
					const reUrl = opt.url

					uni.navigateTo({
							url: `/pages/login/login?redirect=${reUrl}`
					}) 
			 } else {
					return original.call(this, opt)      
			 }
	}
})
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
