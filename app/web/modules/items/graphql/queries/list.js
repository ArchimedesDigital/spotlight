import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query itemListQuery($hostname: String, $textsearch: String, $offset: Int, $limit: Int) {
		project(hostname: $hostname) {
	    _id
			items(textsearch: $textsearch, offset: $offset, limit: $limit) {
				_id
				title
				slug
				description
				files {
					_id
					type
					name
				}
			}
			itemsCount(textsearch: $textsearch)

			files {
				_id
				type
				name
			}
		}
	}
`;

const itemListQuery = graphql(query, {
	name: 'itemListQuery',
	options: ({ textsearch, skip, limit }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			textsearch,
			offset: skip,
			limit,
		},
	}),
});

export default itemListQuery;
