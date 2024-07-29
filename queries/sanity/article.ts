import groq from 'groq'
import { COLOR_THEME } from './fragments/colorTheme'
import { PORTABLE_TEXT } from './fragments/portableText/portableText'
import { SEO } from './fragments/seo'

export const ARTICLE_QUERY = groq`
	*[_type == 'article' && slug.current == $slug && locale == $language] | order(_updatedAt desc) [0]{
		...,
		author->,
		categories[]->,
		content[] {
			${PORTABLE_TEXT}
		},
		theme->{
			${COLOR_THEME}
		},
		${SEO},
		title
	}
`
