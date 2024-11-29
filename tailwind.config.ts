import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const sans: string[] = [
	...defaultTheme.fontFamily.sans,
	'Noto Sans SC Variable',
	'Noto Sans Variable'
];
const art: string[] = ['Tiny5'];

export default {
	darkMode: ['selector', '[data-theme="dark"]'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
				onPrimary: 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
				primaryContainer: 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
				onPrimaryContainer: 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
				primaryFixed: 'rgb(var(--md-sys-color-primary-fixed) / <alpha-value>)',
				onPrimaryFixed: 'rgb(var(--md-sys-color-on-primary-fixed) / <alpha-value>)',
				primaryFixedDim: 'rgb(var(--md-sys-color-primary-fixed-dim) / <alpha-value>)',
				onPrimaryFixedVariant: 'rgb(var(--md-sys-color-on-primary-fixed-variant) / <alpha-value>)',
				secondary: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
				onSecondary: 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
				secondaryContainer: 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
				onSecondaryContainer: 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
				secondaryFixed: 'rgb(var(--md-sys-color-secondary-fixed) / <alpha-value>)',
				onSecondaryFixed: 'rgb(var(--md-sys-color-on-secondary-fixed) / <alpha-value>)',
				secondaryFixedDim: 'rgb(var(--md-sys-color-secondary-fixed-dim) / <alpha-value>)',
				onSecondaryFixedVariant:
					'rgb(var(--md-sys-color-on-secondary-fixed-variant) / <alpha-value>)',
				tertiary: 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
				onTertiary: 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
				tertiaryContainer: 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
				onTertiaryContainer: 'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
				tertiaryFixed: 'rgb(var(--md-sys-color-tertiary-fixed) / <alpha-value>)',
				onTertiaryFixed: 'rgb(var(--md-sys-color-on-tertiary-fixed) / <alpha-value>)',
				tertiaryFixedDim: 'rgb(var(--md-sys-color-tertiary-fixed-dim) / <alpha-value>)',
				onTertiaryFixedVariant:
					'rgb(var(--md-sys-color-on-tertiary-fixed-variant) / <alpha-value>)',
				error: 'rgb(var(--md-sys-color-error) / <alpha-value>)',
				onError: 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
				errorContainer: 'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
				onErrorContainer: 'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)',
				outline: 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
				background: 'rgb(var(--md-sys-color-background) / <alpha-value>)',
				onBackground: 'rgb(var(--md-sys-color-on-background) / <alpha-value>)',
				surface: 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
				onSurface: 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
				surfaceVariant: 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
				onSurfaceVariant: 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
				inverseSurface: 'rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)',
				inverseOnSurface: 'rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)',
				inversePrimary: 'rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)',
				shadow: 'rgb(var(--md-sys-color-shadow) / <alpha-value>)',
				surfaceTint: 'rgb(var(--md-sys-color-surface-tint) / <alpha-value>)',
				outlineVariant: 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
				scrim: 'rgb(var(--md-sys-color-scrim) / <alpha-value>)',
				surfaceContainerHighest:
					'rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)',
				surfaceContainerHigh: 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
				surfaceContainer: 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
				surfaceContainerLow: 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
				surfaceContainerLowest: 'rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)',
				surfaceBright: 'rgb(var(--md-sys-color-surface-bright) / <alpha-value>)',
				surfaceDim: 'rgb(var(--md-sys-color-surface-dim) / <alpha-value>)'
			},
			fontFamily: {
				sans,
				art
			},
			typography: {
				m3: {
					css: [
						{
							fontFamily: sans.join(', ')
						},
						{
							'--tw-prose-body': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-headings': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-lead': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-links': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-bold': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-counters': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-bullets': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-hr': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-quotes': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-quote-borders': 'rgb(var(--md-sys-color-primary) / 1)',
							'--tw-prose-captions': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-code': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-pre-code': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-pre-bg': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-th-borders': 'rgb(var(--md-sys-color-on-surface) / 1)',
							'--tw-prose-td-borders': 'rgb(var(--md-sys-color-on-surface) / 1)'
						}
					]
				}
			}
		}
	},
	plugins: [typography]
} satisfies Config;
