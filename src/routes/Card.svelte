<script lang="ts">
  import { goto } from "$app/navigation";
    import type { Snippet } from "svelte";
    import { fly } from "svelte/transition";

    interface Data {
        flip?: boolean,
        img: {
            src: string,
            alt?: string
        },
        title: {
            en: string,
            ar: string
        },
        button?: {
            text: {
                en: string,
                ar: string
            },
            link?: string,
            arrowVisible?: boolean
            type?: "action" | "link"
        }
    }
    let { data, description, isCurrentLangAr }: { data: Data, description: Snippet, isCurrentLangAr: boolean } = $props()
    let isFormatRTL = $state(isCurrentLangAr)
    $effect(() => {
        if(data.flip) isFormatRTL = !isCurrentLangAr
        else isFormatRTL = isCurrentLangAr
    })
</script>
<section class="w-full min-h-96 flex justify-center">
    <div 
        class={[
            "w-8/10",
            "max-w-[1000px]",
            "bg-navy-50",
            "drop-shadow-lg",
            "h-full",
            "hidden",
            "justify-center",
            "items-center",
            "rounded-xl",
            "p-4",
            "md:flex",
            isFormatRTL ? "flex-row" : "flex-row-reverse"
        ]}
    >
        {#key isCurrentLangAr}
            <div 
                class="w-4/10 h-full flex justify-center items-center"
                in:fly={{ x: isCurrentLangAr ? -50 : 50, y: -10, duration: 250 }}
            >
                <img 
                    src={ data.img.src } 
                    alt={ data.img.alt ?? "" }
                    class="w-full max-w-[260px] ml-8 mt-6"
                >
            </div>
        {/key}
        {#key isCurrentLangAr}
            <div 
                class={[
                    "w-6/10",
                    "h-full",
                    "flex",
                    "flex-col",
                    "justify-center",
                    "gap-4",
                    "py-4",
                    isCurrentLangAr ? "pr-4" : "pl-4"
                ]} 
                dir={ isCurrentLangAr ? "rtl" : "ltr" }
                in:fly={{ x: isCurrentLangAr ? 50 : -50, y: -10, duration: 250 }}
            >
                <h2 class="text-2xl font-bold">
                    { isCurrentLangAr ? data.title.ar : data.title.en }
                </h2>

                {@render description()}

                {#if data.button}
                    <div class={[
                        "w-full",
                        "flex",
                        "items-center",
                        data.button.type === "action" ? "justify-center" : "justify-start"
                    ]}>
                        <button 
                            class={[
                                isFormatRTL ? "mr-4" : "ml-4", 
                                data.button.type === "action" ? "bg-navy-500" : "bg-gold-500", 
                                data.button.type === "action" ? "hover:bg-navy-600" : "hover:bg-gold-600", 
                                "p-4", 
                                "px-6", 
                                "w-56", 
                                "h-14", 
                                "cursor-pointer", 
                                "font-bold", 
                                "text-xl", 
                                "rounded-md", 
                                "flex", 
                                data.button.type === "action" ? "justify-center" : "justify-between", 
                                "items-center", 
                                "transition", 
                                "duration-200"
                            ]}
                        >
                            <span class="font-bold text-xl text-white">
                                { isCurrentLangAr ? data.button.text.ar : data.button.text.en }
                            </span>
                            {#if data.button.arrowVisible && !(data.button.type === "action")}
                                <svg class={ isCurrentLangAr ? "" : "rotate-180" } width="51" height="20" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.9998 15L6.99975 15" stroke="white" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M18.8 27L4.24558 16.1385C3.14533 15.3174 3.1805 13.6573 4.31453 12.8835L18.8 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
                                </svg>
                            {/if}
                        </button>
                    </div>
                {/if}
            </div>
        {/key}
    </div>

    <div class="w-9/10 bg-navy-50 drop-shadow-lg h-full flex justify-center items-center flex-col rounded-lg p-6 md:hidden">
        <div class="w-full h-full flex flex-col justify-center items-center gap-4" dir={isCurrentLangAr ? "rtl" : "ltr"}>
            <h2 class="text-2xl font-bold text-center">
                { isCurrentLangAr ? data.title.ar : data.title.en }
            </h2>
            <div class="w-full flex justify-center items-center">
                <img 
                    src={ data.img.src } 
                    alt={ data.img.alt ?? "" }
                    class="w-full max-w-[260px] ml-8 mt-6"
                >
            </div>
            {@render description()}
            
            {#if data.button}
                <button 
                    class={[
                        data.button.type === "action" ? "bg-navy-500" : "bg-gold-500", 
                        data.button.type === "action" ? "hover:bg-navy-600" : "hover:bg-gold-600", 
                        "p-4", 
                        "px-6", 
                        "w-full", 
                        "h-14", 
                        "cursor-pointer", 
                        "font-bold", 
                        "text-xl", 
                        "rounded-md", 
                        "flex", 
                        data.button.type === "action" ? "justify-center" : "justify-between",
                        "items-center", 
                        "transition", 
                        "duration-200"
                    ]}
                    onclick={() => goto(data.button?.link ?? "") }
                >
                    <span class="font-bold text-xl text-white">
                        { isCurrentLangAr ? data.button.text.ar : data.button.text.en }
                    </span>
                    {#if data.button.arrowVisible}
                        <svg class:rotate-180={!isCurrentLangAr} width="51" height="20" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.9998 15L6.99975 15" stroke="white" stroke-width="5" stroke-linecap="round"/>
                            <path d="M18.8 27L4.24558 16.1385C3.14533 15.3174 3.1805 13.6573 4.31453 12.8835L18.8 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
                        </svg>
                    {/if}
                </button>
            {/if}
        </div>
    </div>
</section>