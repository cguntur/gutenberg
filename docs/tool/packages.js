const packages = [
	[
		'core',
		{
			'Autogenerated actions': 'packages/core-data/src/actions.js',
			'Autogenerated selectors': 'packages/core-data/src/selectors.js',
		},
	],
	'core/annotations',
	'core/blocks',
	'core/block-editor',
	'core/editor',
	'core/edit-post',
	'core/keyboard-shortcuts',
	'core/notices',
	'core/nux',
	'core/viewport',
];

module.exports = function() {
	return packages.map( ( entry ) => {
		if ( ! Array.isArray( entry ) ) {
			entry = [
				entry,
				{
					'Autogenerated actions': `packages/${ entry.replace(
						'core/',
						''
					) }/src/store/actions.js`,
					'Autogenerated selectors': `packages/${ entry.replace(
						'core/',
						''
					) }/src/store/selectors.js`,
				},
			];
		}
		return entry;
	} );
};
