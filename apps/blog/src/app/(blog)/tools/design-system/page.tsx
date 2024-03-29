import { SimpleLayout } from "@/app/(common)/SimpleLayout"

import ThemePreview from "./ThemePreview"

export default function ComponentPreview() {
  return (
    <SimpleLayout
      title="Design System"
      intro="Built-in daisyUI components following current color theme"
    >
      <ThemePreview />
    </SimpleLayout>
  )
}
