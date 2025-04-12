<script lang="ts">
  import type { Snippet } from "svelte";

    const { children }: { children: Snippet } = $props()
</script>
<div class="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
    <span>
        {@render children()}
    </span>
</div>