Ext.define('ConLogin.store.Registo_Horas.RegistoHorasDia', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Registo_Horas',
    alias: 'store.RhorasDia',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Registo_Horas_List/CarregaRegHorasDia.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});