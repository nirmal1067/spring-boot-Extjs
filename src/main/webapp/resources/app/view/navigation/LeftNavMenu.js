Ext.define('AM.view.navigation.LeftNavMenu' ,
		
		{
	requires: ['AM.view.menu.TreeMenu'],
	  extend: 'Ext.panel.Panel',
      alias: 'widget.leftNavMenu',
      title: 'Main Menu',
      region: 'west',
      margins: '0 5 5 5',
//      flex: .3,
      collapsible: true,
      titleCollapse: true,
      layout: 'accordion',
      layoutConfig: {
      animate: false,
      multi: true
      },
      items: [{
      title: 'Product Management',
    	  xtype: 'treeMenu'	  
      }, {
    	  title: 'User Management'
      }, {
      title: 'Settings'
      }]


	  }

);