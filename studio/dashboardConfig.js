export default {
  widgets: [
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
                  buildHookId: '5f627a4f924ff050e78a01f9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2ji5bmhz',
                  apiId: 'edcdf9f2-cb6b-4f49-88b0-6bd8e82f61a8'
                },
                {
                  buildHookId: '5f627a4f9f65b04445242401',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cgg7pn6n',
                  apiId: 'a7fea1ba-b1ac-4611-b300-c44597559d0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/camillekaev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cgg7pn6n.netlify.app', category: 'apps'}
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
