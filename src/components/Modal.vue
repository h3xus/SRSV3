<template>
    <div class="fixed z-10 top-1/3 left-1/3 flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-50 text-gray-800">
        <h2 class="text-xl font-semibold leadi tracki">Quis vel eros donec ac odio tempor.</h2>
        <p class="flex-1 text-gray-600">
            <slot></slot>
            <a href="#" rel="noopener noreferrer" class="font-semibold text-emerald-600">Learn more</a>
        </p>
        <div class="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
            <button class="px-6 py-2 rounded-sm">Cancel</button>
            <button class="px-6 py-2 rounded-sm shadow-sm bg-emerald-600 text-gray-50">Agree</button>
        </div>
    </div>
</template>