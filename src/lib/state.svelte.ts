import { DarkMode } from '$lib/type';

export const footerHeightState: {
	height: number;
} = $state({ height: 0 });

export const darkModeState: {
	mode: DarkMode;
} = $state({ mode: DarkMode.System });

export const siteStartDaysState: {
	siteStartDays: number;
} = $state({ siteStartDays: 0 });
