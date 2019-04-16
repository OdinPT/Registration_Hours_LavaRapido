Ext.define('ConLogin.view.main.Admin.WindowBackupDB', {
    extend: 'Ext.form.Panel',
    xtype: 'WindowBackupBD',

    id: 'formWinBackupBD',

    frame: false,
    padding:5,

    layout: {
        type: 'hbox'
    },

/*
    items: [

        {
            xtype: 'combobox',
            fieldLabel: 'Mês a Pesquisar: ',

            store: {
                type: 'meses'

            },

            valueField: 'numMes',
            displayField: 'mes',
            typeAhead: true,
            emptyText: 'Selecione o mes a pesquisar...',
            id: 'numMes',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o mes a pesquisar'
        }
        ],
*/

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
           {
                text: 'Download BD',
                glyph: 'f1c1@FontAwesome',

                formBind: true,
               handler: function () {

                   var messageBox = Ext.create('Ext.window.MessageBox', {
                       buttonText: {
                           yes: 'Sim',
                           no: 'Não'
                       }
                   });
                   messageBox.confirm('Download', 'Pretende mesmo descarregar a pesquisa?', function(btn){
                       if(btn === 'yes'){
                           window.location.assign('app/php/Admin/Backup_BD/Download.php');
                           //messageBox.maskClickAction = this.getMaskClickAction();
                       }
                       else{

                       }
                   });
               }
            }
        ]
    }
});
