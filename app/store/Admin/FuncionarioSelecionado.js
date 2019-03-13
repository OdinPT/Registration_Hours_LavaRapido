Ext.define('ConLogin.store.Admin.FuncionarioSelecionado', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.FuncionarioSelecionado',

    alias: 'store.reg_select_func',
    xtype: 'Regfuncselect',

    storeId: 'Regfuncseleccionado',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/MostraFuncSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
            //console.log('loaded func selecionado');
        }
    }

});