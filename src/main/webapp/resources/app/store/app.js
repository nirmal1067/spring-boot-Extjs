 Ext.define('TechZoo.store.Books', {
    extend  : 'Ext.data.Store',
    storeId	: 'bookStore',
    model   : 'TechZoo.model.Book',
    fields  : ['id', 'title', 'author','price', 'qty'],
    proxy	: {
        type	: 'ajax',
        url		: '/SpringMVC-ExtJS-CRUD/api/book/loadBooks',
        reader	: {
            type	: 'json',
            root	: 'books'
        }
    },
    autoLoad: true
  });