<template>
    <section class="main-wrapper">
        <nav v-if="!loading">
            <div class="logo-holder">
                <div>
                    <svg
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 9C19.6667 10.0606 20 11.3939 20 13C20 16 16.5 17 15 22C14.3333 21.4254 14 20.5921 14 19.5C14 16.0181 19 14.2101 19 9ZM14.5 5C15.1667 6.23841 15.5 7.57175 15.5 9C15.5 14 9.5 15 11.5 22C9.83333 20.8392 9 19.1726 9 17C9 13.675 14.5 11 14.5 5ZM10 1C10.6667 2.33333 11 3.83333 11 5.5C11 11.5 2 13 8 22C5.5 21.5 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"
                            fill="rgba(245,152,53,1)"
                        ></path>
                    </svg>
                </div>
                <span class="title">ArtSumz</span>
            </div>
            <div class="github">
                <a
                    href="https://github.com/j-b-marques/Articles-Summarizer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
                            fill="rgba(255,255,255,1)"
                        ></path>
                    </svg>
                </a>
            </div>
        </nav>
        <div v-if="loading" class="loading">
            <Loader></Loader>
            <div>Handling the request , wait a few seconds &nbsp;...</div>
        </div>
        <div v-else class="item-wrapper">
            <div class="item-holder">
                <div class="input-holder">
                    <h1>Articles Summarizer</h1>
                    <form @submit.prevent="search()">
                        <div class="submit">
                            <input
                                type="text"
                                name="urlSearcher"
                                id="urlSearcher"
                                v-model="url"
                                :placeholder="
                                    !errorMsg
                                        ? 'Paste the article link'
                                        : errorMsg
                                "
                                :class="validation && 'error'"
                            />
                            <button type="submit">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="22"
                                    >
                                        <path
                                            d="M11 4C11.6487 4 12.2498 4.20569 12.7411 4.55646C11.4486 5.22914 10.2602 6.07623 8.99996 6.80385L9.99996 8.5359C11.575 7.62654 13.0517 6.48541 14.7608 5.83037C16.1134 5.31198 17.681 5.83976 18.4282 7.13398C18.7526 7.69582 18.8749 8.31917 18.8168 8.92006C17.588 8.13708 16.2602 7.53146 15 6.80385L14 8.5359C15.575 9.44525 17.3016 10.1536 18.7234 11.3061C19.8487 12.2183 20.1754 13.8398 19.4282 15.134C19.1037 15.696 18.6249 16.1137 18.0752 16.3638C18.1385 14.9081 18 13.4553 18 12H16C16 13.8184 16.2498 15.6685 15.9626 17.4758C15.7353 18.9063 14.4944 20 13 20C12.351 20 11.7498 19.7942 11.2584 19.4432C12.5508 18.7701 13.7396 17.9238 15 17.1962L14 15.4641C12.4252 16.3733 10.9478 17.5147 9.23912 18.1696C7.88657 18.688 6.31898 18.1602 5.57176 16.866C5.24729 16.304 5.12493 15.6805 5.18316 15.0794C6.41224 15.8621 7.73964 16.4685 8.99997 17.1962L9.99997 15.4641C8.42517 14.5549 6.69801 13.8462 5.27649 12.6939C4.15128 11.7817 3.82455 10.1602 4.57176 8.86602C4.89624 8.30402 5.37506 7.88628 5.9247 7.63618C5.86145 9.09192 5.99997 10.5447 5.99997 12H7.99997C7.99997 10.1816 7.75013 8.33148 8.03733 6.52422C8.26467 5.09369 9.50554 4 11 4ZM14.7925 3.74171C13.8765 2.67659 12.5176 2 11 2C8.7782 2 6.89621 3.44833 6.24435 5.45243C4.86393 5.71314 3.59851 6.55175 2.83971 7.86602C1.72883 9.79013 2.04213 12.1442 3.4518 13.7107C2.98737 15.0366 3.08092 16.5518 3.83971 17.866C4.95059 19.7901 7.14589 20.6958 9.20742 20.2583C10.1234 21.3234 11.4824 22 13 22C15.2217 22 17.1037 20.5517 17.7556 18.5476C19.136 18.2869 20.4014 17.4482 21.1602 16.134C22.2711 14.2099 21.9578 11.8559 20.5481 10.2893C21.0126 8.96345 20.919 7.44825 20.1602 6.13398C19.0493 4.20987 16.854 3.30419 14.7925 3.74171Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="url-holder" v-if="isData">
                    <div class="title">Websites</div>
                    <div class="card-url-holder" v-for="x in store.articles">
                        <div
                            @click="idChosen = x.id"
                            class="card card-url"
                            :class="idChosen === x.id && 'selected'"
                        >
                            {{ x.url }}
                        </div>
                    </div>
                </div>
                <div class="summary-holder">
                    <div class="clipboard" v-if="isData">
                        <div class="title">Article Summary</div>
                        <button
                            @pointerover="showToolTip = true"
                            @pointerleave="showToolTip = false"
                            @click="copyToClipboard()"
                        >
                            <div v-if="showToolTip" class="tooltip">Copy</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="15"
                            >
                                <path
                                    d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div class="card" :key="idChosen" v-if="isData">
                        <div>
                            {{ articleText }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, toRaw, watch } from 'vue'
import Loader from '@/assets/components/Loader.vue'
import { useArticleStore } from '../stores/articles'
import { options } from '../services/rapidApi'

//Data
const store = useArticleStore()
const baseUrl: string = options.url
const id = ref<number>(1)

const url = ref<string>('')
const idChosen = ref<number>(0)

const loading = ref<boolean>(false)
const validation = ref<boolean>(false)
const errorMsg = ref<string>('')
const articleText = ref<string | undefined>('')
const showToolTip = ref<boolean>(false)

interface Article {
    id: number
    url: string
    text: string
}
//Hooks
// onMounted(() => {})

//Computed
const isData = computed(() => {
    return (
        store.articles.length > 0 &&
        store?.articles?.find((x) => x?.id === idChosen?.value)?.text &&
        idChosen.value
    )
})

//Watchers
watch(isData, (val, oldVal) => {
    if (val) {
        articleText.value = store?.articles?.find(
            (x: Article) => x?.id === idChosen.value
        )?.text
    }
})

//Functions
function copyToClipboard() {
    const chosenArticle = store.articles.find((x) => x.id === idChosen.value)

    if (chosenArticle) {
        navigator.clipboard
            .writeText(chosenArticle.text)
            .then(() => {
                alert('Text copied to clipboard')
            })
            .catch((err) => {
                console.error('Could not copy text: ', err)
            })
    }
}

async function search() {
    const urlRegex =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i

    if (!url.value || !urlRegex.test(url.value)) {
        validation.value = true
        url.value = ''
        errorMsg.value = 'Please enter a valid URL'
        return
    } else if (store.articles.find((x) => x.url === url.value)) {
        validation.value = true
        url.value = ''
        errorMsg.value = 'Already searched, see below...'
        return
    } else {
        validation.value = false
    }

    loading.value = true

    await fetch(
        `${baseUrl}?url=${url.value}/&length=${options.params.length}`,
        {
            headers: {
                'X-RapidAPI-Key': options.headers['X-RapidAPI-Key'],
                'X-RapidAPI-Host': options.headers['X-RapidAPI-Host']
            }
        }
    )
        .then((res) => {
            if (res.status == 429) {
                alert(
                    'Api limit was excedeed, Try again in some other time ! Sorry about the inconvenience'
                )
                return Promise.reject('API limit exceeded')
            }
            return res.json()
        })
        .then((data) => {
            if (data.error) {
                validation.value = true
                url.value = ''
                errorMsg.value =
                    'There was an error. Try again with a different Url'
                return
            }

            let article: Article = {
                id: id.value++,
                url: url.value,
                text: data.summary
            }

            store.addArticle(article)
            idChosen.value = store.articles[store.articles.length - 1].id
            // console.log(toRaw(store.articles))
        })
        .catch((error) => {
            console.error(error)
        })

    loading.value = false
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors/colors';

.main-wrapper {
    width: 100%;
    min-height: 100vh;
    background: $bkgGradient;
    nav {
        min-width: 100%;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 30px;

        .logo-holder {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .title {
            font-size: 26px;
        }
    }

    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        min-height: 100vh;
    }

    .item-wrapper {
        color: #ffff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        .card {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 15px;
        }
        .item-holder {
            min-width: 100%;
            padding: 0 25px;
            display: flex;
            flex-direction: column;
            align-items: center;

            & > div {
                min-width: 100%;
            }

            .input-holder {
                margin-bottom: 40px;
                h1 {
                    font-size: 44px;
                    line-height: 44px;
                    font-weight: 500;
                    text-transform: uppercase;
                    text-align: center;
                    margin-bottom: 100px;
                    background: #ffb76b;
                    background: $orangeGradient;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                form {
                    margin-bottom: 20px;
                    padding: 0 20px;
                    min-width: 100%;
                    .title {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    .submit {
                        gap: 10px;
                        position: relative;
                        display: flex;

                        input {
                            flex: 1;
                            padding: 7px;
                            font-size: 14px;
                            border-radius: 5px;
                            color: black;

                            &:focus {
                                outline: 1px solid orange;
                            }
                        }

                        .error {
                            border: 2px solid red;
                        }
                        button {
                            cursor: pointer;
                            pointer-events: all;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            right: 10px;
                            font-size: 15px;
                            width: 30px;
                            aspect-ratio: 1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 5px;
                            border: none;
                            background: #ffb76b;
                            background: $orangeGradient;
                            color: #ffff;

                            & > div {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                animation: rotation 2s infinite linear;
                            }
                        }
                    }
                }
            }

            .url-holder {
                .title {
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .card-url-holder {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 10px;

                    .card-url {
                        cursor: pointer;
                        flex: 1;
                        padding: 8px;
                        background: rgba(249, 134, 3, 0.2);
                        border-radius: 8px;
                        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        padding: 8px;
                        margin-bottom: 10px;

                        &.selected {
                            border: 3px solid #ffb76b;
                            border-radius: 10px;
                        }
                    }
                }
            }

            .summary-holder {
                margin-bottom: 30px;
                .clipboard {
                    display: flex;
                    align-items: center;
                    font-size: 18px;
                    margin-bottom: 10px;
                    gap: 10px;

                    button {
                        aspect-ratio: 1;
                        display: flex;
                        position: relative;
                        z-index: 0;

                        & > .tooltip {
                            position: absolute;
                            top: -40px;
                            left: 50%;
                            transform: translateX(-50%);
                            background-color: #ffb76b;
                            z-index: 10;
                            border-radius: 18px;
                            font-size: 12px;
                            padding: 4px 6px;

                            &::after {
                                content: '';
                                background-color: #ffb76b;
                                clip-path: polygon(50% 0, 100% 100%, 0 100%);
                                width: 9px;
                                height: 9px;
                                position: absolute;
                                left: 50%;
                                bottom: -9px;
                                transform: translateX(50%);
                                rotate: 180deg;
                            }
                        }
                    }
                }
            }
        }
    }
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

@media (min-width: 768px) {
    .main-wrapper .item-wrapper h1 {
        font-size: 34px;
    }
}

@media (min-width: 1024px) {
    .main-wrapper nav {
        padding: 35px 120px;
    }

    .main-wrapper .item-wrapper {
        padding-top: 50px;
    }

    form {
        display: flex;
        justify-content: center;
    }
    .submit {
        min-width: 100%;

        input {
            flex: auto;
        }
    }

    .input-holder,
    .url-holder,
    .summary-holder {
        min-width: 75% !important;
        max-width: 75% !important;
    }
}
</style>
