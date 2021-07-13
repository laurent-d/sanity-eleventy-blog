export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ee001f38d4f9643d3ed5a7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1qgxrcd6',
                  apiId: '2d969a5a-325b-46f0-bff4-4546b5d3558d'
                },
                {
                  buildHookId: '60ee001fc125e86753f82319',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2412isu9',
                  apiId: 'f1ac9bd3-3d50-4e9b-8681-2b7411d9c461'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/laurent-d/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2412isu9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
