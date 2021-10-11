<template>
    <div class="flex flex-col items-center">
        <div class="mt-4">
            <h1 class="text-4xl font-bold text-gray-700">Digital Cum Laude</h1>
        </div>

        <hr class="w-full border-t my-4">

        <div class="space-x-4">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'orders' }">My Orders</router-link>
            <a href="#">Login</a>
            <router-link :to="{ name: 'cart' }">Cart</router-link>
        </div>

        <hr class="w-full border-t my-4">

        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>
