import groq from 'groq'

export const COLOR_THEME = groq`
	text {
		hex,
		rgb,
		alpha
	},
	background {
		hex,
		rgb,
		alpha
	},
	background2 {
		hex,
		rgb,
		alpha
	}
`
