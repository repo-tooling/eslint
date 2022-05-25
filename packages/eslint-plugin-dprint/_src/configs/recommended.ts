import { disableConflictRules } from "@repo-tooling/eslint-plugin-dprint/configs/disable-conflict-rules"

export const recommended = {
  plugins: ["@repo-tooling/dprint"],
  rules: {
    ...disableConflictRules.rules,
    "@repo-tooling/dprint/dprint": "warn"
  }
}
