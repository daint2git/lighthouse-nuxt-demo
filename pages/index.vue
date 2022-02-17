<template>
  <div class="min-h-screen max-w-4xl mx-auto sm:px-6 lg:px-8">
    <Tutorial />
    <p class="text-lg">{{ helloMessage }}</p>
    <div>
      <h1 class="text-xl">nuxtjs posts</h1>
      <ul>
        <li
          v-for="post in posts"
          :key="post.title"
          class="p-2 mb-1 border-2 border-indigo-600 rounded-md"
        >
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  asyncData: async (context) => {
    const { $axios } = context

    const posts = await $axios.$get('https://api.nuxtjs.dev/posts')
    const hello = await $axios.$get('/api/hello')

    return {
      posts,
      helloMessage: hello.message,
    }
  },
  data() {
    return {
      posts: [] as {
        title: string
        description: string
      }[],
      helloMessage: '',
    }
  },
})
</script>
