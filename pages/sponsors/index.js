import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
    const graphcms = new GraphQLClient(
        'https://api-us-east-1.graphcms.com/v2/cki6d2nu1cpiy01xv4mj572a5/master'
    );

    const { sponsors } = await graphcms.request(
        `
      { 
        sponsors {
          slug
          name
        }
      }
    `
    );

    return {
        props: {
            sponsors,
        },
    };
}

const IndexPage = ({ sponsors }) => {
    return sponsors.map(({ slug, name }) => (
        <Link key={slug} href={`/sponsors/${slug}`}>
            <a>{name}</a>
        </Link>
    ));
};

export default IndexPage;