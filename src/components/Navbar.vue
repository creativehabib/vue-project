<template>
    <header class="sticky top-0 bg-secondary-color shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <RouterLink :to="{name:'home'}">
                <div class="flex items-center gap-3 flex-1">
                    <i class="fa-solid fa-home text-2xl"></i>
                    <p class="text-2xl">The Local Weather</p>
                </div>
                
            </RouterLink>
            
            <div class="flex gap-3 flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-secondary-color duration-150 cursor-pointer"></i>
                <i class="fa-solid fa-plus text-xl hover:text-secondary-color duration-150 cursor-pointer"></i>
                
                    <span><RouterLink :to="{ name: 'Login' }"><i class="fa-solid fa-sign-in text-xl hover:text-secondary-color duration-150 cursor-pointer"></i></RouterLink></span>
                    <span><a><i class="fa-solid fa-sign-out text-xl hover:text-secondary-color duration-150 cursor-pointer"></i></a></span>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
