import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = listItem => !['config'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Data')
    .items([
      S.listItem()
        .title('Home')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        ),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
