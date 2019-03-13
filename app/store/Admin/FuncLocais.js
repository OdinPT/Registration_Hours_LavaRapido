Ext.define('ConLogin.store.Admin.FuncLocais', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.FuncPostos',

    alias: 'store.reg_func_postosSelec',
    xtype: 'RegFuncPostosSelect',

    storeId: 'RegFuncPostosseleccionado',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/MostraFuncLocalSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
           // console.log('loaded emp selecionado k');
        }
    }

});