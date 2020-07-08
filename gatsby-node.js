const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // 1. get path to data
    const blogTemplate = path.resolve('./src/templates/blog.js')

    // 2. get markdown data
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug                        
                    }
                }
            }
        }
    `)

    // 3. create new contentful pages
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
