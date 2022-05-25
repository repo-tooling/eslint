import { disableConflictRules } from "@repo-tooling/eslint-plugin-dprint/configs/disable-conflict-rules"
import { recommended } from "@repo-tooling/eslint-plugin-dprint/configs/recommended"
import { dprint } from "@repo-tooling/eslint-plugin-dprint/Rule"

export * as configSchema from "@repo-tooling/eslint-plugin-dprint/ConfigSchema"
export * as diff from "@repo-tooling/eslint-plugin-dprint/Diff"
export * as diffIterator from "@repo-tooling/eslint-plugin-dprint/DiffIterator"
export * as regularExpression from "@repo-tooling/eslint-plugin-dprint/RegularExpression"
export * as rule from "@repo-tooling/eslint-plugin-dprint/Rule"

export const configs = {
  "disable-conflict-rules": disableConflictRules,
  recommended
}
export const rules = {
  dprint
}
