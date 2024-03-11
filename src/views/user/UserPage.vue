<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">商品</RouterLink>
        <RouterLink to="/cart">購物車</RouterLink>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>
