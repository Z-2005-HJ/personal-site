// @ts-check
import { defineConfig } from 'astro/config';

// 本地开发不设这些变量；GitHub Actions 构建时会注入，用于「项目站」子路径。
const site = process.env.SITE_URL?.trim();
const base = process.env.BASE_PATH?.trim();

export default defineConfig({
	...(site ? { site } : {}),
	...(base && base !== '/' ? { base } : {}),
});
