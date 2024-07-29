import groq from 'groq'
import { COLOR_THEME } from './fragments/colorTheme'
import { MODULES } from './fragments/modules'
import { SEO } from './fragments/seo'

export const PAGE_QUERY = groq`
	*[_type == 'page' && slug.current == $slug && locale == $language] | order(_updatedAt desc) [0]{
		modules[] {
			${MODULES}
		},
		theme->{
			${COLOR_THEME}
		},
		${SEO},
		title,
	}
`
