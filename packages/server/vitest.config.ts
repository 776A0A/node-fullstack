import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'server',
    environment: 'node',
  },
  plugins: [tsconfigPaths()],
})