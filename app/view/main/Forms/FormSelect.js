Ext.define('ConLogin.view.main.Form.FormSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'SelectSelectCont',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.view.main.Admin.logRequestPesquisa'
    ],

    id: 'formSelectCont',

    frame: false,

    layout: {
        type: 'form',
        align: 'fit',
        margin: 1
    },

    items: [

        {
            xtype: 'datefield',
            fieldLabel: 'Data de Inicio',
            id: 'Datainicio',
            name: 'Datainicio',
            emptyText : 'Insira a Data de inicio',
            allowBlank: false,
            blankText: 'Campo obrigatório',
            value: new Date()
        },

        {
            xtype: 'datefield',
            fieldLabel: 'Data de fim ',
            id: 'DateFim',
            name: 'DateFim',
            emptyText : 'Insira a Data de fim',
            allowBlank: false,
            blankText: 'Campo obrigatório',
            value: new Date()

        }
    ],


    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Efetuar Pesquisa',
                glyph: 'f063@FontAwesome',

                formBind: true,
                listeners: {
                    click: 'onClickSearchRegCont'
                }

            },{
                text: 'Converter Pesquisa em PDF',
                glyph: 'f1c1@FontAwesome',

                formBind: true,
                handler: function () {

                    var messageBox = Ext.create('Ext.window.MessageBox', {
                        buttonText: {
                            yes: 'Sim',
                            no: 'Não'
                        }
                    });
                    messageBox.confirm('Download', 'Pretende mesmo descarregar o ficheiro?', function(btn){
                        if(btn === 'yes'){
                            window.location.assign('app/php/Gera-pdf/index.php');
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
