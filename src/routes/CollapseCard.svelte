<script lang="ts">
  import { fly } from "svelte/transition";

    interface Content {
        title: {
            en: string,
            ar: string
        },
        text: {
            en: string,
            ar:string
        }
    }
    let { isCurrentLangAr, content }: { isCurrentLangAr: boolean, content: Content} = $props()
    let collapsibleOpen = $state(false)
    $effect(() => {
        isCurrentLangAr
        collapsibleOpen = false
    })

</script>
  
{#key isCurrentLangAr}
    <div class="w-full md:max-w-[calc(50%_-_8px)] relative" in:fly={{ x: isCurrentLangAr ? 40 : -40, y: -20, duration: 200 }}>
        <button 
            class={[
                "shadow-md", 
                "p-4", 
                "rounded-md", 
                "flex", 
                "items-center", 
                "justify-between", 
                "gap-4", 
                "w-full", 
                "cursor-pointer", 
                isCurrentLangAr ? "text-right" : "text-left",
            ]}
            onclick={() => collapsibleOpen = !collapsibleOpen}
            dir={ isCurrentLangAr ? "rtl" : "ltr"}
        >
            { isCurrentLangAr ? content.title.ar : content.title.en }
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                <path fill="currentColor" fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31L8.78 9.53a.75.75 0 0 1-1.06-1.06zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></path>
            </svg>
        </button>
        
        <div 
            class={[
                collapsibleOpen ? "max-h-36" : "max-h-0", 
                "overflow-hidden", 
                "transition-all", 
                "duration-300",
                "shadow-md",
                "rounded-md",
                "-translate-y-1",
                "absolute",
                "left-0",
                "w-full",
                "z-10"
            ]}
        >
            <p class={[
                    "p-4",
                    "bg-white",
                    "border-t",
                    "border-cgray-500",
                    isCurrentLangAr ? "text-right" : "text-left"
                ]} 
                dir={ isCurrentLangAr ? "rtl" : "ltr"}
            >
                { isCurrentLangAr ? content.text.ar : content.text.en }
            </p>
        </div>
    </div>
{/key}