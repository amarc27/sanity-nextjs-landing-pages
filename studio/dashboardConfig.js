export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d2e1bf446a24f0189d7328b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-18pdwxij',
                  apiId: 'd671db85-975c-497a-8bca-4b7ab7dd1b34'
                },
                {
                  buildHookId: '5d2e1bf4347092017ee8c649',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2hpfpmws',
                  apiId: '5723a962-6ff9-4a5d-9329-b5cbda8e25d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amarc27/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2hpfpmws.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
