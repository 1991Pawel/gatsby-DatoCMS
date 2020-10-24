// exports.createPages = async ({ actions: { createPage }, graphql }) => {

//     const data = await graphql(`
//     query MyQuery {
//         allDatoCmsGalleryphoto {
//           edges {
//             node {
//               category
//             }
//           }
//         }
//       }

//     `)

//     if (data.errors) {
//         console.log("Error retrieving data", data.errors)
//         return
//     }

//     const merchTemplate = require.resolve("./src/pages/gallery.js")

//     data.data.allDatoCmsGalleryphoto.edges.forEach(edge => {
//         createPage({
//             path: `/gallery/${edge.node.category}/`,
//             component: merchTemplate,
//             context: {
//                 slug: edge.node.category.toLowerCase(),
//             },
//         })
//     })
// }