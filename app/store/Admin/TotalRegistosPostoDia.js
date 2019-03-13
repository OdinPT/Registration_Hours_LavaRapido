Ext.define('ConLogin.store.Admin.TotalRegistosPostoDia', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.TotalRegistosDia',

    alias: 'store.TotalESPostodia',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/TotalRegistosPostoDia.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
           // console.log('loaded Total entradas e saidas dos locais do dia');
        }
    }

});