<template>
  <section class="py-6 sm:py-12 bg-gray-100 text-gray-800">
    <div class="container p-6 mx-auto space-y-8">
      <div class="space-y-2 text-center">
        <h2 class="text-3xl font-bold">Partem reprimique an pro</h2>
        <p class="font-serif text-sm text-gray-600">
          Qualisque erroribus usu at, duo te agam soluta mucius.
        </p>
      </div>
      <div
        class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
      >
        <article class="flex flex-col bg-gray-50">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              alt=""
              class="object-cover w-full h-52 bg-gray-500"
              src="https://source.unsplash.com/200x200/?fashion?1"
            />
          </a>
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracki uppercase hover:underline text-emerald-600"
              >Convenire</a
            >
            <h3 class="flex-1 py-2 text-lg font-semibold leadi">
              Te nulla oportere reprimique his dolorum
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600"
            >
              <span>June 1, 2020</span>
              <span>2.1K views</span>
            </div>
          </div>
        </article>
        <article class="flex flex-col bg-gray-50">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              alt=""
              class="object-cover w-full h-52 bg-gray-500"
              src="https://source.unsplash.com/200x200/?fashion?2"
            />
          </a>
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracki uppercase hover:underline text-emerald-600"
              >Convenire</a
            >
            <h3 class="flex-1 py-2 text-lg font-semibold leadi">
              Te nulla oportere reprimique his dolorum
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600"
            >
              <span>June 2, 2020</span>
              <span>2.2K views</span>
            </div>
          </div>
        </article>
        <article class="flex flex-col bg-gray-50">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              alt=""
              class="object-cover w-full h-52 bg-gray-500"
              src="https://source.unsplash.com/200x200/?fashion?3"
            />
          </a>
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracki uppercase hover:underline text-emerald-600"
              >Convenire</a
            >
            <h3 class="flex-1 py-2 text-lg font-semibold leadi">
              Te nulla oportere reprimique his dolorum
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600"
            >
              <span>June 3, 2020</span>
              <span>2.3K views</span>
            </div>
          </div>
        </article>
        <article class="flex flex-col bg-gray-50">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              alt=""
              class="object-cover w-full h-52 bg-gray-500"
              src="https://source.unsplash.com/200x200/?fashion?4"
            />
          </a>
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracki uppercase hover:underline text-emerald-600"
              >Convenire</a
            >
            <h3 class="flex-1 py-2 text-lg font-semibold leadi">
              Te nulla oportere reprimique his dolorum
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600"
            >
              <span>June 4, 2020</span>
              <span>2.4K views</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
// Add this script:
import { useI18n } from 'vue-i18n'
export default {
    setup() {
        const { t } = useI18n()
        return { t }
    }
}
</script>