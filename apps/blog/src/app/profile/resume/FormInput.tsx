"use client"

import clsx from "clsx"
import get from "lodash.get"
import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"
import { type InputProps } from "react-html-props"

import { getAriaDescribedBy } from "./utils"

interface FormInputProps<T extends FieldValues> extends InputProps {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  options?: RegisterOptions<T, Path<T>>
  errors: FieldErrors<T>
  helperText?: string
}

// TODO: handle error state
export default function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  options,
  errors,
  className,
  helperText,
  ...props
}: FormInputProps<T>) {
  const errorMessage = get(errors, name)?.message
  const isInvalid = Boolean(errorMessage)

  const text = typeof errorMessage === "string" ? errorMessage : helperText

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name} className="block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <input
        id={name}
        className={clsx(
          isInvalid
            ? "border-red-300 placeholder-red-300 focus:border-red-500"
            : "border-zinc-300 focus:border-teal-500",
          "mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:outline-none focus:ring-0 sm:text-sm"
        )}
        aria-invalid={isInvalid ? "true" : undefined}
        aria-describedby={getAriaDescribedBy(name, text, isInvalid)}
        {...register(name, options)}
        {...props}
      />
      {text && (
        <p
          className={clsx(isInvalid ? "text-red-500" : " text-zinc-500", "mt-2 text-sm")}
          id={getAriaDescribedBy(name, text, isInvalid)}
        >
          {text}
        </p>
      )}
    </div>
  )
}