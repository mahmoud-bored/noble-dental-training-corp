<script lang="ts">
    import type { Snippet } from "svelte";
    
    const { children }: { children: Snippet } = $props()
</script>

<div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
    <span class="text-lg font-bold">
        {@render children()}
    </span>
</div>