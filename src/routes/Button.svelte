<script lang="ts">
  import type { Snippet } from "svelte";
    
    const { children }: { children: Snippet } = $props()
</script>
<button 
    class="
        inline-flex items-center justify-center text-sm font-medium ring-offset-background 
        transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-8 text-white font-tajawal cursor-pointer"
    >
    {@render children()}
</button>