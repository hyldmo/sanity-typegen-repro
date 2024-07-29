import groq from 'groq'

export const IMAGE = groq`
	...,
	asset->{
		_id,
		sha1hash,
		dimensions,
	},
	'height': asset->metadata.dimensions.height,
	'width': asset->metadata.dimensions.width,
`
