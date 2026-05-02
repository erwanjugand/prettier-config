import prettierConfig from "eslint-config-prettier/flat";
import { baseConfig } from "@erwanjugand/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(baseConfig, prettierConfig, { ignores: ["dist"] });
