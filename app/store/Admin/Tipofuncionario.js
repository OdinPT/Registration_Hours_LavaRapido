Ext.define('ConLogin.store.Admin.TipoFuncionario', {
    extend: 'Ext.data.ArrayStore',
    model: 'ConLogin.model.Tipos_Func',
    alias: 'store.Tipos_Func',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/TiposFunc.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});