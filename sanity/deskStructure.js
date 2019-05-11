import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = listItem => ['ourWorks'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Home')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('About')
        .child(
          S.editor()
            .id('aboutPage')
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.listItem()
        .title('Services')
        .child(
          S.editor()
            .id('servicesPage')
            .schemaType('servicePage')
            .documentId('servicesPage')
        ),
      S.listItem()
        .title('Products')
        .child(
          S.editor()
            .id('productsPage')
            .schemaType('productsPage')
            .documentId('productsPage')
        ),
      S.listItem()
        .title('Contact')
        .child(
          S.editor()
            .id('contactPage')
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.listItem()
        .title('Works')
        .child(
          S.editor()
            .id('worksPage')
            .schemaType('worksPage')
            .documentId('worksPage')
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
