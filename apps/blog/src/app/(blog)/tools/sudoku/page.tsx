import { SimpleLayout } from "@/app/(common)/SimpleLayout"

import SudokuGame from "./SudokuGame"

export default function SudokuPage() {
  return (
    <SimpleLayout
      title="Sudoku Game"
      intro="A handmade Sudoku game randomly generated via difficulty"
    >
      <SudokuGame />
    </SimpleLayout>
  )
}
