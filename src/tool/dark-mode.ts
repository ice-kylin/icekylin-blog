import { DarkMode } from '$lib/type';
import { darkModeState } from '$lib/state.svelte';

export function getInitDarkMode(): DarkMode {
	if (localStorage.getItem('darkMode') === '0') {
		return DarkMode.Light;
	}

	if (localStorage.getItem('darkMode') === '1') {
		return DarkMode.Dark;
	}

	return DarkMode.System;
}

export function modifyLocalStorage(mode: DarkMode) {
	if (mode === DarkMode.Light) {
		localStorage.setItem('darkMode', '0');

		return;
	}

	if (mode === DarkMode.Dark) {
		localStorage.setItem('darkMode', '1');

		return;
	}

	localStorage.removeItem('darkMode');
}

export function modifyDataTheme(mode: DarkMode) {
	if (mode === DarkMode.Light) {
		window.document.documentElement.setAttribute('data-theme', 'light');

		return;
	}

	if (mode === DarkMode.Dark) {
		window.document.documentElement.setAttribute('data-theme', 'dark');

		return;
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		window.document.documentElement.setAttribute('data-theme', 'dark');

		return;
	}

	window.document.documentElement.setAttribute('data-theme', 'light');
}

export function handleChange(event: MediaQueryListEvent) {
	if (!(darkModeState.mode === DarkMode.System)) {
		return;
	}

	if (event.matches) {
		modifyDataTheme(DarkMode.Dark);

		return;
	}

	modifyDataTheme(DarkMode.Light);
}
