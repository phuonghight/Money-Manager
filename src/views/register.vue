<template>
  <div class="mt-8">
    <div class="container px-8 mx-auto">
      <form action="">
        <div class="flex flex-col">
          <label for="fullname" class="font-semibold text-gray-400 mb-2">Fullname</label>
          <input
            id="fullname"
            class="pl-4 py-3 rounded-lg outline-none focus:border focus:border-gray-600"
            name="fullname"
            type="fullname"
            placeholder="Enter your fullname"
            required
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="email" class="font-semibold text-gray-400 mb-2">Email Address</label>
          <input
            id="email"
            class="pl-4 py-3 rounded-lg outline-none focus:border focus:border-gray-600"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="password" class="font-semibold text-gray-400 mb-2">Password</label>
          <input
            id="password"
            class="pl-4 py-3 rounded-lg outline-none focus:border focus:border-gray-600"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" class="bg-primary w-full rounded-lg py-3 text-white font-bold mt-8">
          Sign Up
        </button>
        <!-- <button
          type="button"
          class="bg-gray-300 w-full rounded-lg py-3 text-white font-bold mt-8 cursor-not-allowed"
        >
          Loadding...
        </button> -->
      </form>
      <!-- <div class="text-red mt-5">Error</div> -->
      <div class="text-center mt-5">
        <span class="">I'm already a member.</span>
        <router-link :to="{ name: 'Login', params: {} }" class="ml-2 text-primary font-bold"
          >Sign In</router-link
        >
      </div>
    </div>
  </div>
</template>
