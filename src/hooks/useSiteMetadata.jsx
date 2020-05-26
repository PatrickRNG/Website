import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            author
            description
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            menus
            socialMedia {
              linkedin
              twitter
              instagram
              github
              email
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
}