import groq from 'groq'
import { BLOG_PREVIEW } from './fragments/blogPreview'
import { COLOR_THEME } from './fragments/colorTheme'
import { PORTABLE_TEXT } from './fragments/portableText/portableText'
import { SEO } from './fragments/seo'

export const BLOG_QUERY = groq`
	*[_type == 'blog' && slug.current == $slug && locale == $language] | order(_updatedAt desc) [0]{
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
		title,

		"related": *[_type == 'blog' && slug.current != $slug && locale == $language] | order(_updatedAt desc) [0...2]{
			${BLOG_PREVIEW}
		}
	}
`
