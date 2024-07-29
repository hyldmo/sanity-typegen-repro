import groq from 'groq'

import { SEO } from './seo'

export const BLOG_PREVIEW = groq`
	_id,
	slug,
	categories[]->,
	${SEO},
	title,
`
