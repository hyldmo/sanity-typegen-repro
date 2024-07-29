import groq from 'groq'
import { COLOR_THEME } from './colorTheme'

export const LINK_INTERNAL = groq`
	_key,
	_type,
	title,
	...reference->{
		"documentType": _type,
		(_type == "collection") => {
			"slug": "/collections/" + store.slug.current,
		},
		(_type == "indexPage" && indexType == "home") => {
			"slug": "/",
		},
		(_type == "indexPage" && indexType == "blog") => {
			"slug": "/blogs",
		},
		(_type == "indexPage" && indexType == "support") => {
			"slug": "/support",
		},
		(_type == "page") => {
			"slug": "/pages/" + slug.current,
		},
		(_type == "blog") => {
			"slug": "/blogs/" + slug.current,
		},
		(_type == "article") => {
			"slug": "/support/" + slug.current,
		},
		(_type == "product") => {
			store {
				title,
				slug
			},
			"slug": "/products/" + store.slug.current,
		},
	},
	theme->{
		${COLOR_THEME}
	}
`
