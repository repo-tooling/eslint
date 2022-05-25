/**
 * A `Diff` represents the different between two pieces of text.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff
 */
export type Diff = NoChange | Addition | Removal | Replacement

/**
 * @tsplus type eslint/eslint-plugin-dprint/Diff
 */
export interface DiffOps {}
export const Diff: DiffOps = {}

/**
 * Represents no difference between two strings.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/NoChange
 */
export interface NoChange {
  readonly _tag: "NoChange"
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff NoChange
 */
export const NoChange: Diff = {
  _tag: "NoChange"
}

/**
 * Represents a difference caused by the addition of text to a string.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/Addition
 */
export interface Addition {
  _tag: "Addition"
  range: [number, number]
  newText: string
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff Addition
 */
export function Addition(range: [number, number], newText: string): Diff {
  return {
    _tag: "Addition",
    range,
    newText
  }
}

/**
 * Represents a difference caused by the removal of text from a string.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/Removal
 */
export interface Removal {
  _tag: "Removal"
  range: [number, number]
  oldText: string
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff Removal
 */
export function Removal(range: [number, number], oldText: string): Diff {
  return {
    _tag: "Removal",
    range,
    oldText
  }
}

/**
 * Represents a difference caused by the replacement of text within a string.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/Replacement
 */
export interface Replacement {
  _tag: "Replacement"
  range: [number, number]
  oldText: string
  newText: string
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff Replacement
 */
export function Replacement(range: [number, number], oldText: string, newText: string): Diff {
  return {
    _tag: "Replacement",
    range,
    oldText,
    newText
  }
}
