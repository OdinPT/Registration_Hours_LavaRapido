Ext.define('ConLogin.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ConLogin.view.main.MainController',
        'ConLogin.view.main.MainModel',
        'ConLogin.view.main.List',
        'ConLogin.view.main.FormRegistoHoras.ListHorasDia',
        'ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal'
    ],

    controller: 'main',
    viewModel: 'main',

    plugins: 'viewport',
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,


    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
            },
                   flex: 0
        },
            html:'<img src="https://image.ibb.co/ktEti7/logotipo_curvas_v3_preview_s_logo.png" height="105" width="270"/>',

        items: [{

            xtype: 'button',
            text: 'Logout',
            margin: '5 0',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 60
                }
            }
        }
    },

     items: [{
         title: 'Registos dia',
         iconCls: 'fa-user',
         items: [{
             title: 'Registo do dia',
               xtype:  'RegHorasprincipal'
         }]
     },
     {
        title: 'Registos anteriores',
        iconCls: 'fa-user',
        items: [{
            xtype: 'JuncaoRegAnteriores'
        }]
    }

    ,{
        title: 'Registos de todos os Postos',
        id:'Tpostos',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'mainMenuTodosPostos'
        }]
   },{
        title: 'Administração',
        margin: '5 0 0 0',
        id:'Admin1',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'mainwidgetAdmin'
        }]
    }],

    listeners: {
        'afterrender': function () {
            {
                method:'POST',
                    myRequest2 = Ext.Ajax.request({
                        url: 'app/php/VerificaAcessos/AcessoAdministracao.php',
                        success: function (response, opts){Ext.getCmp('Admin1').setDisabled(false);},
                        failure: function (){Ext.getCmp('Admin1').setDisabled(true);}
                    });
                myRequest3 = Ext.Ajax.request({
                    url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                    success: function (response, opts){Ext.getCmp('Tpostos').setDisabled(false);},
                    failure: function (){Ext.getCmp('Tpostos').setDisabled(true);}
                });
            }

        }
    }
});
