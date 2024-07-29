import groq from 'groq'

import { BLOCKS } from '../portableText/portableText'

export const MODULE_ACCORDION = groq`
	groups[] {
		_key,
		...,
		body[]{
			...,
			${BLOCKS}
		}
	}
`
