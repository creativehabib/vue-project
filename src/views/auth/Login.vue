<script setup>
import useAuth from "@/composables/auth";
const { loginForm, validationErrors, processing, submitLogin } = useAuth();
</script>
<template>
    <div>
        <section class="bg-gray-50">
            <div
                class="flex flex-col items-center justify-center px-6 py-8 sm:py-8 min-w-screen min-h-screen mx-auto lg:py-0"
            >
                <router-link
                    to="/"
                    class="flex items-center mb-6 text-2xl text-gray-900 font-semibold"
                    >login</router-link
                >
                <div
                    class="w-full bg-white rounded-lg shadow dark:border mb-0 sm:max-w-md xl:p-0"
                >
                    <div class="py-6 space-y-4 md:space-y-6 px-6 sm:py-8">
                        <h1>Sign in to your account</h1>
                        <form
                            class="space-y-4 md:space-y-6"
                            @submit.prevent="submitLogin"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium mb-2 text-gray-900"
                                    >Your email</label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    v-model="loginForm.email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                                    placeholder="name@company.com"
                                />
                                <div class="text-red-700 text-sm mt-1">
                                  <span v-for="message in validationErrors?.email">
                                    {{ message }}
                                  </span>
                                </div>
                            </div>
                            <div>
                                <label
                                    for="password"
                                    class="block text-sm font-medium mb-2 text-gray-900"
                                    >Password</label
                                >
                                <input
                                    type="password"
                                    id="password"
                                    v-model="loginForm.password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                                    placeholder="********"
                                />
                                <div class="text-red-700 text-sm mt-1">
                                  <span v-for="message in validationErrors?.password">
                                    {{ message }}
                                  </span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex item-center h-5">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            v-model="loginForm.remember"
                                            aria-describedby="remember"
                                            class="w-4 h-4 border border-gray-300 bg-gray-50 rounded focus:ring-3"
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label
                                            for="remember"
                                            class="text-gray-500"
                                            >Remember me</label
                                        >
                                    </div>
                                </div>
                                <a
                                    href=""
                                    class="text-sm font-medium text-gray-500 hover:underline"
                                    >Forget Password</a
                                >
                            </div>
                            <button
                                type="submit" :disabled="processing"
                                class="w-full py-2.5 px-5 text-center focus:bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:outline-none text-sm font-medium rounded-lg text-white bg-indigo-800"
                            >
                              {{ processing ? "Please wait" : "Login" }}
                            </button>
                            <p class="text-sm text-center text-gray-500">
                                Don’t have an account yet?
                                <router-link
                                    to="/register"
                                    class="font-medium text-gray-500 hover:underline"
                                    >Sign up</router-link
                                >
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

