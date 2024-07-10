import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flexcentercol sticky left-0 right-0 top-0 z-50 bg-slate-900 p-4 text-center">
      <h1 class="">Golden Ratio Colors Picker</h1>
      <p class="">
        Made by{" "}
        <Link
          target="_blank"
          href="https://github.com/yuran1811"
          class="underline underline-offset-2"
        >
          yuran1811
        </Link>
      </p>
    </div>
  );
});
