import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { ColorsContainer } from "@components/shared/color-card";

export default component$(() => {
  return (
    <>
      <ColorsContainer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to GRC Picker",
  meta: [
    {
      name: "description",
      content: "A Golden Ratio Colors Picker",
    },
  ],
};
