<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { fly } from "svelte/transition";

    let { isCurrentLangAr, title, content }: { isCurrentLangAr: boolean, title: Snippet, content: Snippet} = $props()
    let collapsibleOpen = $state(false)
    $effect(() => {
        isCurrentLangAr
        collapsibleOpen = false
    })

    let cardContent: HTMLElement | undefined = $state()
    let cardMaxHeight = $state(0)
    function setCardMaxHeight(): void {
        if(cardContent) {
            cardMaxHeight = cardContent.scrollHeight + 25
        }
    }
    onMount(setCardMaxHeight)
    $inspect(cardMaxHeight)
</script>

<svelte:window on:resize={setCardMaxHeight}/>

{#key isCurrentLangAr}
    <div class="w-full md:max-w-[calc(50%_-_8px)] relative min-h-14" in:fly={{ x: isCurrentLangAr ? 40 : -40, y: -20, duration: 200 }}>
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
            {@render title()}
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                <path fill="currentColor" fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31L8.78 9.53a.75.75 0 0 1-1.06-1.06zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></path>
            </svg>
        </button>
        
        <div 
            class={[
                "overflow-hidden", 
                "transition-all", 
                "duration-300",
                "shadow-md",
                "rounded-md",
                "-translate-y-1",
                "absolute",
                "left-0",
                "w-full",
                "z-10",
                "bg-white"
            ]}
            style="max-height: {collapsibleOpen ? cardMaxHeight + "px" : "0px"};"
        >
            <div 
                bind:this={cardContent}
                class={[
                    "p-4",
                    "bg-white", 
                    "border-t",
                    "border-cgray-500",
                    isCurrentLangAr ? "text-right" : "text-left"
                ]} 
                dir={ isCurrentLangAr ? "rtl" : "ltr"}
            >
                {@render content()}
            </div>
            <div class="w-full flex justify-center items-center mb-2 bg-white">
                <hr class="w-1/4 border rounded-lg border-navy-900">
            </div>
        </div>
    </div>
{/key}