import { Case } from "@tsplus/stdlib/data/Case"
import type { Tuple } from "@tsplus/stdlib/data/Tuple"

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
export interface NoChange extends Case {
  readonly _tag: "NoChange"
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff NoChange
 */
export const NoChange = Case.tagged<NoChange>("NoChange")

/**
 * Represents a difference caused by the addition of text to a string.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/Addition
 */
export interface Addition extends Case {
  _tag: "Addition"
  range: Tuple<[number, number]>
  newText: string
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff Addition
 */
export const Addition = Case.tagged<Addition>("Addition")

/**
 * Represents a difference caused by the removal of text from a string.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/Removal
 */
export interface Removal extends Case {
  _tag: "Removal"
  range: Tuple<[number, number]>
  oldText: string
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff Removal
 */
export const Removal = Case.tagged<Removal>("Removal")

/**
 * Represents a difference caused by the replacement of text within a string.
 *
 * @tsplus type eslint/eslint-plugin-dprint/Diff/Replacement
 */
export interface Replacement extends Case {
  _tag: "Replacement"
  range: Tuple<[number, number]>
  newText: string
  oldText: string
}
/**
 * @tsplus static eslint/eslint-plugin-dprint/Diff Replacement
 */
export const Replacement = Case.tagged<Replacement>("Replacement")

/**
 * @tsplus unify eslint/eslint-plugin-dprint/Diff
 * @tsplus unify eslint/eslint-plugin-dprint/Diff/Addition
 * @tsplus unify eslint/eslint-plugin-dprint/Diff/NoChange
 * @tsplus unify eslint/eslint-plugin-dprint/Diff/Removal
 * @tsplus unify eslint/eslint-plugin-dprint/Diff/Replacement
 */
export function unifyDiff<X extends Diff>(self: X): Diff {
  return self
}
