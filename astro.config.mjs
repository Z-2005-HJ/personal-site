// @ts-check
import { defineConfig } from 'astro/config';

// 本地开发不设这些变量；GitHub Actions 构建时会注入，用于「项目站」子路径。
// Astro 要求 base 以 / 开头并以 / 结尾，否则 import.meta.env.BASE_URL 拼接会出错。
const site = process.env.SITE_URL?.trim();
const baseRaw = process.env.BASE_PATH?.trim();

const base =
	baseRaw && baseRaw !== '/'
		? `${baseRaw.startsWith('/') ? '' : '/'}${baseRaw.replace(/^\/+|\/+$/g, '')}/`
		: undefined;

export default defineConfig({
	...(site ? { site } : {}),
	...(base ? { base } : {}),
});
