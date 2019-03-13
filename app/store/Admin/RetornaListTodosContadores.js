Ext.define('ConLogin.store.Admin.RetornaListTodosContadores', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.RegistosPosto',
    alias: 'store.RetornaListTodosContadores',

    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaTodosRegistosContadores.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});