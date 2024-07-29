import groq from 'groq'
import { COLOR_THEME } from './colorTheme'
import { IMAGE } from './image'
import { LINKS } from './links'

import { MODULE_ACCORDION } from './modules/accordion'
import { MODULE_CALLOUT } from './modules/callout'
import { MODULE_CALL_TO_ACTION } from './modules/callToAction'
import { MODULE_COLLECTION } from './modules/collection'
import { MODULE_IMAGE } from './modules/image'
import { MODULE_INSTAGRAM } from './modules/instagram'
import { MODULE_PRODUCT } from './modules/product'
import { PORTABLE_TEXT } from './portableText/portableText'

const BASE_MODULES = groq`
	...,
	image {
		${IMAGE}
	},
	(_type == "module.hero" || _type == "module.textBoxAndImage") => {
		...,
		image {
			${IMAGE}
		},
		links[] {
			${LINKS}
		}
	},
	_type == "module.calloutBoxSection" => {
		calloutTheme->{
			${COLOR_THEME}
		}
	},
	_type == "module.promo" => {
		link[] {
			${LINKS}
		}
	},
	_type == "block.accordion" => {
		${MODULE_ACCORDION}
	},
	_type == "module.callout" => {
		${MODULE_CALLOUT}
	},
	_type == 'module.callToAction' => {
		${MODULE_CALL_TO_ACTION}
	},
	_type == "module.collection" => {
		${MODULE_COLLECTION}
	},
	_type == "module.image" => {
		${MODULE_IMAGE}
	},
	_type == "module.instagram" => {
		${MODULE_INSTAGRAM}
	},
	_type == "module.product" => {
		${MODULE_PRODUCT}
	},
	_type == "module.productBlock" => {
		ctas[] {
			${PORTABLE_TEXT}
		}
	},
	content[] {
		...,
		${PORTABLE_TEXT}
	},
	theme->{
		${COLOR_THEME}
	},
	settings {
		...,
		theme->{
			${COLOR_THEME}
		},
	}
`

export const MODULES = groq`
	${BASE_MODULES},
	_type == "module.template" => {
		_type,
		template->{
			modules[] {
				${BASE_MODULES}
			}
		}
	}
`
