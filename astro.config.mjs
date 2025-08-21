// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aditya-aswani.github.io',
  base: process.env.NODE_ENV === 'production' ? '/caliro-website' : '/',
  output: 'static'
});
