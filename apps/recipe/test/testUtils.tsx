import "@howardism/jest-config/setup"

import { render, RenderOptions, RenderResult } from "@testing-library/react"
import { ReactElement } from "react"

import GlobalWrapper from "@/components/GlobalWrapper"

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, { wrapper: GlobalWrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
