import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="text-2xl">
      <div class="font-bold">Bold</div>
      <div class="font-bold italic">Bold Italic</div>
      <div class="font-semibold">Bold</div>
      <div class="font-semibold italic">Bold Italic</div>
      <div class="font-medium">Medium</div>
      <div class="font-medium italic">Medium Italic</div>
      <div class="">Regular</div>
    </div>
  );
});
