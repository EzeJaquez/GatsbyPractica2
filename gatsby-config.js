module.exports = {
    siteMetadata: {
        title: "Mi primer sitio gatsby",
        siteUrl: `http://localhost:8000/`,
        description: "Descripcion de mi primer sitio gatsby",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name : `blog`,
                path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
    ],
};