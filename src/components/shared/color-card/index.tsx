import { $, component$, useSignal } from "@builder.io/qwik";

import { GOLDEN_RATIO_COLORS } from "@shared/constants";
import { RGBColor } from "@shared/types";
import { classnames, copyToClipboard, exportColor } from "@utils/index";

export interface ColorCardProps {
  color: RGBColor | string;
  style?: ("left" | "right" | "bottom" | "top")[];
}

export const ColorCard = component$<ColorCardProps>(({ color, style }) => {
  const { hex, rgb } = exportColor(color);

  const active = useSignal(false);

  const clickHandle$ = $(
    (off?: boolean) =>
      (active.value = typeof off !== "boolean" ? !active.value : off),
  );

  return (
    <div
      class={classnames("color-card", active.value ? "active" : "")}
      style={`--hex-color:${hex};--rgb-color:${rgb};transform-origin:${style?.join(" ")}`}
      onClick$={() => clickHandle$()}
      onMouseLeave$={() => clickHandle$(false)}
    >
      <div class="panel bg-slate-900 text-[8px] text-slate-300">
        <div
          class="hex-copy w-full cursor-pointer"
          onClick$={async (e) => {
            e.stopPropagation();
            await copyToClipboard(hex);
          }}
        >
          {hex}
        </div>
        <div
          class="rgb-copy w-full cursor-pointer"
          onClick$={async (e) => {
            e.stopPropagation();
            await copyToClipboard(rgb);
          }}
        >
          {rgb}
        </div>
      </div>
    </div>
  );
});

export const ColorsContainer = component$(() => {
  return (
    <div class="container mx-auto grid grid-flow-row grid-cols-10 p-2">
      {GOLDEN_RATIO_COLORS.map((color, idx) => (
        <ColorCard
          key={color}
          color={color}
          style={[
            idx % 10 < 5 ? "left" : "right",
            idx < 980 ? "top" : "bottom",
          ]}
        />
      ))}
    </div>
  );
});
