Ext.define('AM.view.navigation.CentralTab' ,
		
		{
	  requires: ['AM.view.user.CardMain','AM.view.navigation.DashBoardMain'],
	  extend: 'Ext.panel.Panel',
      alias: 'widget.centralTab',
      region: 'center',
      margins: '0 5 5 0',
      
      items: [
              {
              xtype: 'cardMain',
              
              },
              {
              xtype: 'dashBoardMain',
              
              }
             
              
              ]
      
//      items: [createUserWizard, userManagementPanel]
//
//
	  }

);