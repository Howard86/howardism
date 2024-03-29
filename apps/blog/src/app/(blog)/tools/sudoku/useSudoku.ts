"use client"

import { useCallback, useReducer } from "react"

import type { SudokuApiResponse } from "@/pages/api/sudoku"

import { SUDOKU_DIFFICULTIES } from "./constants"

type SudokuDifficulty = (typeof SUDOKU_DIFFICULTIES)[number]

interface SudokuState {
  difficulty: SudokuDifficulty
  game: number[]
  answer: number[]
  selected: number
  loading: boolean
  message?: string
}

type SudokuAction =
  | { type: "initialize" }
  | { type: "request"; payload: SudokuApiResponse }
  | { type: "select"; payload: number }
  | { type: "update"; payload: number }

const initialState: SudokuState = {
  difficulty: "beginner",
  game: [],
  answer: [],
  selected: -1,
  loading: false,
}

const reducer = (state: SudokuState, action: SudokuAction): SudokuState => {
  switch (action.type) {
    case "initialize":
      return { ...state, loading: true }

    case "request": {
      if (!action.payload.success) {
        return { ...state, message: action.payload.message, loading: false }
      }

      return {
        ...state,
        message: undefined,
        game: action.payload.sudoku,
        answer: action.payload.sudoku,
        difficulty: action.payload.difficulty,
        loading: false,
      }
    }

    case "select": {
      if (state.game[action.payload] > 0) {
        return state
      }

      return {
        ...state,
        selected: state.selected === action.payload ? -1 : action.payload,
      }
    }

    case "update": {
      if (state.selected < 0) {
        return state
      }

      const copiedAnswer = [...state.answer]
      copiedAnswer[state.selected] =
        state.answer[state.selected] === action.payload ? 0 : action.payload
      return { ...state, answer: copiedAnswer }
    }

    default: {
      throw new Error(`Unrecognized action ${action}`)
    }
  }
}

interface UseSudoku extends SudokuState {
  onStart: (difficulty: SudokuDifficulty) => void
  onSelect: (index: number) => void
  onUpdate: (number: number) => void
}

const useSudoku = (): UseSudoku => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onStart = useCallback(async (difficulty: SudokuDifficulty) => {
    dispatch({ type: "initialize" })

    const result = await fetch(`/api/sudoku?difficulty=${difficulty}`)

    if (!result.ok) {
      dispatch({
        type: "request",
        payload: {
          success: false,
          message: result.statusText,
        },
      })
      return
    }

    const response = await result.json()

    dispatch({ type: "request", payload: response })
  }, [])

  const onSelect = useCallback((index: number) => {
    dispatch({ type: "select", payload: index })
  }, [])

  const onUpdate = useCallback((number: number) => {
    dispatch({ type: "update", payload: number })
  }, [])

  return { ...state, onSelect, onUpdate, onStart }
}

export default useSudoku
