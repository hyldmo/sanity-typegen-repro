import groq from 'groq'
import { COLOR_THEME } from './fragments/colorTheme'
import { CUSTOM_PRODUCT_OPTIONS } from './fragments/customProductOptions'
import { MODULES } from './fragments/modules'
import { SEO_SHOPIFY } from './fragments/seoShopify'

export const PRODUCT_PAGE_QUERY = groq`
	*[_type == 'product' && store.slug.current == $slug] | order(_updatedAt desc) [0]{
		_id,
		"available": !store.isDeleted && store.status == 'active',
		"customProductOptions": *[_type == 'settings' && locale == $language][0].customProductOptions[title in ^.store.options[].name] {
			${CUSTOM_PRODUCT_OPTIONS}
		},
		"gid": store.gid,
		"slug": store.slug.current,
		"page": *[_type == 'productPage' && references(^._id) && locale == $language][0] {
			...,
			modules[]{
				${MODULES},
			},
			${SEO_SHOPIFY},
			theme->{
				${COLOR_THEME}
			},
		}
	}
`
