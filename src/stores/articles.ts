import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Article {
    id: number
    url: string
    text: string
}

export const useArticleStore = defineStore('articles', () => {
    //state
    const articles = ref<Article[]>([])

    //getters
    const numberArticles = computed(() => {
        return articles.value.length
    })

    //actions
    function addArticle(x: Article) {
        articles.value.push(x)
    }
    function removeArticle(id: number) {
        articles.value.filter((x: Article) => x.id !== id)
    }
    function clear() {
        articles.value = []
    }

    return { articles, numberArticles, addArticle, removeArticle, clear }
})
