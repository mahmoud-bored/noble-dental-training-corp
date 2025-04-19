<script lang="ts">
    import { langPreference } from "./stores.svelte"
    const { isCurrentLangAr }: { isCurrentLangAr: boolean } = $props()

    function changeLangPref(lang: "ar" | "en"): void {
        langPreference.lang = lang
        document.cookie = `lang=${lang}; max-age=31536000; path=/`
    }
</script>
<div>
    <div class="relative h-10 min-w-24 md:w-28 hidden md:flex justify-center items-center rounded-full shadow-md text-lg font-bold" >
        <button 
            class={[
                "peer/en", 
                "z-10", 
                "w-1/2",
                "h-full",
                "transition-all", 
                "duration-200", 
                "cursor-pointer",
                "flex justify-center items-center",
                isCurrentLangAr ? 'text-black' : "text-white", 
                isCurrentLangAr ? "hover:text-white" : "hover:text-white", 
                "peer-hover/ar:text-black",
            ]}
            aria-label="Change language to English"
            onclick={() => { changeLangPref('en') }}
        >
            <span class="translate-x-[3px] -translate-y-[1px]">
                en
            </span>
        </button>
        <button 
            class={[
                "peer/ar", 
                "z-10", 
                "w-1/2",
                "h-full",
                "transition-all", 
                "duration-200", 
                "cursor-pointer",
                "flex justify-center items-center",
                isCurrentLangAr ? 'text-white' : "text-black", 
                isCurrentLangAr ? "hover:text-white" : "hover:text-white", 
                "peer-hover/en:text-black",
            ]}
            aria-label="Change language to Arabic"
            onclick={() => { changeLangPref('ar') }}
        >
            <span class="-translate-x-[3px] -translate-y-[1px]">
                ar
            </span>
        </button>
        <span class={[
            "absolute", 
            isCurrentLangAr ? "left-1/2" : "left-0", 
            "w-1/2", 
            "h-8/10", 
            "bg-navy-600", 
            "rounded-full", 
            "transition-all", 
            "duration-200", 
            isCurrentLangAr ? "-mx-1" : "mx-1",
            "peer-hover/ar:left-1/2", 
            "peer-hover/ar:-mx-1", 
            "peer-hover/en:left-0", 
            "peer-hover/en:mx-1"
        ]}></span>
    </div>
</div>