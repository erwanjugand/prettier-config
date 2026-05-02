import * as sortImports from '@trivago/prettier-plugin-sort-imports'
import type { Config, Plugin } from 'prettier'

const sortImportsPlugin = (sortImports as unknown as { default: Plugin }).default

export const config: Config = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  plugins: [sortImportsPlugin],
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^(@|^)/', '^(.|..)/'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
}
