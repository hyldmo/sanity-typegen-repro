import groq from 'groq'
import { COLOR_THEME } from './colorTheme'

export const LINK_EXTERNAL = groq`
	_key,
	_type,
	newWindow,
	title,
	url,
	theme->{
		${COLOR_THEME}
	}
`
