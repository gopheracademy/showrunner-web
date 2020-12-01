import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-us-east-1.graphcms.com/v2/cki6d2nu1cpiy01xv4mj572a5/master'
);

export async function getStaticProps({ params }) {
  const { sponsor } = await graphcms.request(
    `
    query SponsorQuery($slug: String!) {
      sponsor(where:{slug: $slug}) {
        name
        description
        website
        logo {
          fileName
        }
      }
    }
    
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      sponsor,
    },
  };
}

export async function getStaticPaths() {
  const { sponsors } = await graphcms.request(`
    {
      sponsors {
       name 
       slug
      }
    }
  `);

  return {
    paths: sponsors.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const Sponsor = ({ sponsor }) => (
  <React.Fragment>
    <h1>{sponsor.name}</h1>
    <p>{sponsor.description}</p>
  </React.Fragment>
);
export default Sponsor;