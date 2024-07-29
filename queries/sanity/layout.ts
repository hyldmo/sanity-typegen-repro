import groq from 'groq'

import { COLOR_THEME } from './fragments/colorTheme'
import { LINKS } from './fragments/links'
import { MODULES } from './fragments/modules'
import { PORTABLE_TEXT } from './fragments/portableText/portableText'

export const LAYOUT_QUERY = groq`
	*[_type == 'settings' && locale == $language] | order(_updatedAt desc) [0] {
		...,
		heroHeaderTheme->{
			${COLOR_THEME}
		},
		fixedHeaderTheme->{
			${COLOR_THEME}
		},
		supportHeaderTheme->{
			${COLOR_THEME}
		},
		productHeaderTheme->{
			${COLOR_THEME}
		},
		legalTheme->{
			${COLOR_THEME}
		},
		footer {
			links[] {
				${LINKS}
			},
			text[]{
				${PORTABLE_TEXT}
			},
			theme->{
				${COLOR_THEME}
			}
		},
		kbFooter->{
			...,
			modules[] {
				${MODULES}
			}
		},
		headerCTA {
			...,
			links[] {
				${LINKS}
			}
		},
		surveyQuestions[] {
			...,
			theme->{
				${COLOR_THEME}
			},
			buttonTheme->{
				${COLOR_THEME}
			}
		},
		surveyContact->{
			...,
			modules[] {
				${MODULES}
			}
		},
		menu {
			...,
			links[] {
				${LINKS}
			}
		},
		centerMenu {
			...,
			links[] {
				${LINKS}
			}
		},
		notFoundPage {
			...,
			body[]{
				${PORTABLE_TEXT}
			},
			theme->{
				${COLOR_THEME}
			}
		}
	}
`
