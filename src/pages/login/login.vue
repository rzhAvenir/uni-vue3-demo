<template>
<div>
  <h1>登录页</h1>
  <button @click="login">登录</button>
</div>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
let redirect
onLoad(() => {
  const url = window.location.href
  let reg = new RegExp(/redirect=(.+)/)
  redirect = url.match(reg)[1]
})

const login = () => {
  uni.redirectTo({
    url: redirect
  })
}
</script>