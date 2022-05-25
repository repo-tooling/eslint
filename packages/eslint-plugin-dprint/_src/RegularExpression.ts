/**
 * @tsplus type eslint/eslint-plugin-dprint/RegularExpression/Ops
 */
export interface RegularExpressionOps {}
export const RegularExpression: RegularExpressionOps = {}

/**
 * @tsplus static eslint/eslint-plugin-dprint/RegularExpression/Ops IS_WHITESPACE_REGEX
 */
export const IS_WHITESPACE_REGEX = /^\s+$/u

/**
 * Check if a given text is whitespace(s).
 *
 * @tsplus static eslint/eslint-plugin-dprint/RegularExpression/Ops isWhitespace
 */
export function isWhitespace(s: string): boolean {
  return IS_WHITESPACE_REGEX.test(s)
}

/**
 * @tsplus static eslint/eslint-plugin-dprint/RegularExpression/Ops STARTS_WITH_WHITESPACE_REGEX
 */
export const STARTS_WITH_WHITESPACE_REGEX = /^\s+/u

/**
 * @tsplus static eslint/eslint-plugin-dprint/RegularExpression/Ops HAS_LINE_BREAK_REGEX
 */
export const HAS_LINE_BREAK_REGEX = /\r\n|[\r\n]/u

/**
 * @tsplus static eslint/eslint-plugin-dprint/RegularExpression/Ops GLOBAL_LINE_BREAK_REGEX
 */
export const GLOBAL_LINE_BREAK_REGEX = /\r\n|[\r\n]/gu

/**
 * Check if a given text contains line break(s).
 *
 * @tsplus static eslint/eslint-plugin-dprint/RegularExpression/Ops hasLineBreak
 */
export function hasLinebreak(s: string): boolean {
  return HAS_LINE_BREAK_REGEX.test(s)
}
