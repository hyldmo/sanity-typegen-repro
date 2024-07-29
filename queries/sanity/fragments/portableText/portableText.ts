import groq from 'groq'
import { BLOG_PREVIEW } from '../blogPreview'
import { COLOR_THEME } from '../colorTheme'
import { LINKS } from '../links'
import { MODULE_ACCORDION } from '../modules/accordion'
import { MODULE_CALLOUT } from '../modules/callout'
import { MODULE_GRID } from '../modules/grid'
import { MODULE_IMAGES } from '../modules/images'
import { MODULE_INSTAGRAM } from '../modules/instagram'
import { MODULE_PRODUCTS } from '../modules/products'
import { MARK_DEFS } from './markDefs'

export const BLOCKS = groq`
	_type == 'blockCallout' || _type == 'module.callout' => {
		'_type': 'module.callout',
		${MODULE_CALLOUT}
	},
	_type == 'blockGrid' || _type == 'block.grid' => {
		'_type': 'block.grid',
		${MODULE_GRID},
	},
	_type == 'blockImages' || _type == 'module.images' => {
		'_type': 'module.images',
		${MODULE_IMAGES}
	},
	_type == 'blockInstagram' || _type == 'module.instagram' => {
		'_type': 'module.instagram',
		${MODULE_INSTAGRAM}
	},
	_type == 'blockProducts' || _type == 'module.products' => {
		'_type': 'module.products',
		${MODULE_PRODUCTS}
	},
	_type == 'block.employees' => {
		employees[]->{
			...
		}
	},
	_type == 'block.contact' || _type == 'block.contactV2' => {
		items[]{
			...,
			employee->,
			buttonTheme->
		}
	},
	_type == 'block.articleGrid' => {
		items[]{
			...,
			link[] {
				${LINKS}
			}
		}
	},
	_type == 'block.articleList' => {
		items != null => {
			items[]->{
				${BLOG_PREVIEW}
			}
		},
		items == null => {
			"items": *[_type == 'blog' && locale == $language] | order(_updatedAt desc)[]{
				${BLOG_PREVIEW}
			}
		}
	},
	theme->{
		${COLOR_THEME}
	},
	markDefs[] {
		${MARK_DEFS}
	}
`

// We check the _type for backwards compatibility with the old block type names.
export const PORTABLE_TEXT = groq`
	...,
	_type == 'blockAccordion' || _type == 'block.accordion' => {
		'_type': 'block.accordion',
		${MODULE_ACCORDION},
	},

	${BLOCKS}
`
