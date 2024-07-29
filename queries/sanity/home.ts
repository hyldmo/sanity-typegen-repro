import groq from 'groq'
import { MODULES } from './fragments/modules'
import { SEO } from './fragments/seo'

export const INDEX_PAGE_QUERY = groq`
	*[_type == 'indexPage' && indexType == $type && locale == $language] | order(_updatedAt desc) [0]{
		...,
		modules[] {
			${MODULES}
		},
		${SEO}
	}
`
