import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:4000/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'axios',
      httpClient: 'axios',
      clean: true,
      baseUrl: 'http://localhost:4000',
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
