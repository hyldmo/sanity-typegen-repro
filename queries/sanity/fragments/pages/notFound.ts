import groq from 'groq'

import { COLOR_THEME } from '../colorTheme'
import { PORTABLE_TEXT } from '../portableText/portableText'

export const NOT_FOUND_PAGE = groq`
	body[] {
		${PORTABLE_TEXT}
	},
	"collectionGid": collection->store.gid,
	colorTheme->{
		${COLOR_THEME}
	},
	title
`
