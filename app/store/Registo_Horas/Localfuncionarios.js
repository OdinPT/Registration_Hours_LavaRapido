Ext.define('ConLogin.store.Registo_Horas.LocalFuncionarios', {
    extend: 'Ext.data.ArrayStore',
    model: 'ConLogin.model.Registo_Horas',

    alias: 'store.Local_Func',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Registo_Horas_List/Local_func.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});