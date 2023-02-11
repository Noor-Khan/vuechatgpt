<script setup>
import { ref } from "vue";
const emits = defineEmits(["clear", "light"]);
const props = defineProps({
  questions: Array,
});

let isTrue = ref(false);
let counter = ref(0);
let isConfirm = ref({
  text: "Clear conversation",
  isTrue: false,
});
const clearStorage = () => {
  counter.value += 1;
  isConfirm.value = {
    text: "Confirm clear conversation",
    isTrue: true,
  };
  console.log(counter.value);
  if (counter.value === 2) {
    setTimeout(() => {
      localStorage.clear();
      emits("clear", true);
    }, 1000);
    isConfirm.value = {
      text: "Clear conversation",
      isTrue: false,
    };
    counter.value = 0;
  }
};
const changeToLight = () => {
  isTrue.value = !isTrue.value;
  emits("light", isTrue.value);
};
</script>
<template>
  <div
    class="
      dark
      hidden
      bg-gray-900
      md:fixed
      md:inset-y-0
      md:flex
      md:w-[260px]
      md:flex-col
    "
  >
    <div class="flex h-full min-h-0 flex-col">
      <div
        class="
          scrollbar-trigger
          flex
          h-full
          w-full
          flex-1
          items-start
          border-white/20
        "
      >
        <nav class="flex h-full flex-1 flex-col space-y-1 p-2">
          <a
            class="
              flex
              py-3
              px-3
              items-center
              gap-3
              rounded-md
              hover:bg-gray-500/10
              transition-colors
              duration-200
              text-white
              cursor-pointer
              text-sm
              mb-2
              flex-shrink-0
              border border-white/20
            "
            ><svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line></svg
            >New chat
          </a>
          <div class="flex-col flex-1 overflow-y-auto border-b border-white/20">
            <div class="flex flex-col gap-2 text-gray-100 text-sm">
              <a
                v-for="(thread, index) in questions"
                :key="index"
                class="
                  flex
                  py-3
                  px-3
                  items-center
                  gap-3
                  relative
                  rounded-md
                  hover:bg-[#2A2B32]
                  cursor-pointer
                  break-all
                  hover:pr-4
                  group
                "
                ><svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
                <div
                  class="
                    flex-1
                    text-ellipsis
                    max-h-5
                    overflow-hidden
                    break-all
                    relative
                  "
                >
                  {{ thread.value }}
                  <div
                    class="
                      absolute
                      inset-y-0
                      right-0
                      w-8
                      z-10
                      bg-gradient-to-l
                      from-gray-900
                      group-hover:from-[#2A2B32]
                    "
                  ></div>
                </div>
              </a>
            </div>
          </div>
          <a
            v-if="questions && questions.length"
            @click="clearStorage()"
            class="
              flex
              py-3
              px-3
              items-center
              gap-3
              rounded-md
              hover:bg-gray-500/10
              transition-colors
              duration-200
              text-white
              cursor-pointer
              text-sm
            "
          >
            <svg
              v-if="isConfirm.isTrue"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg
              v-else
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              ></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line></svg
            >{{ isConfirm.text }}</a
          ><a
            @click="changeToLight()"
            class="
              flex
              py-3
              px-3
              items-center
              gap-3
              rounded-md
              hover:bg-gray-500/10
              transition-colors
              duration-200
              text-white
              cursor-pointer
              text-sm
            "
          >
            <svg
              v-if="isTrue"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg
              v-else
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg
            >{{ isTrue ? "Dark" : "Light" }} mode</a
          ><a
            href="https://discord.gg/openai"
            target="_blank"
            class="
              flex
              py-3
              px-3
              items-center
              gap-3
              rounded-md
              hover:bg-gray-500/10
              transition-colors
              duration-200
              text-white
              cursor-pointer
              text-sm
            "
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="2"
              viewBox="0 0 640 512"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              ></path></svg
            >OpenAI Discord</a
          ><a
            href="https://help.openai.com/en/collections/3742473-chatgpt"
            target="_blank"
            class="
              flex
              py-3
              px-3
              items-center
              gap-3
              rounded-md
              hover:bg-gray-500/10
              transition-colors
              duration-200
              text-white
              cursor-pointer
              text-sm
            "
            ><svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              ></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line></svg
            >Updates &amp; FAQ</a
          ><a
            class="
              flex
              py-3
              px-3
              items-center
              gap-3
              rounded-md
              hover:bg-gray-500/10
              transition-colors
              duration-200
              text-white
              cursor-pointer
              text-sm
            "
            ><svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line></svg
            >Log out</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>
