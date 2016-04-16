Ext.define('AM.view.AppViewPort' ,
		
		{
	
	  requires: ['AM.view.navigation.LeftNavMenu','AM.view.navigation.CentralTab'],
	  extend: 'Ext.container.Viewport',
      alias: 'widget.appViewPort',
	  layout: 'border',
	  items: [
	  {
		  region: 'north',
		  margins: 5,
		  height: 40,
		  xtype: 'appToolBar'
		 // html: 'Logo Here'
	  }, 
	  {
//	  title: 'West',
//	  region: 'west',
	  xtype: 'leftNavMenu',
	  
	  margins: '0 5 0 5',
	  flex: .3
	  },
	  {
	  xtype: 'centralTab',	  
//	  title: 'Center',
//	  region: 'center'
		  
	  }
//	  {
//	  title: 'East',
//	  region: 'east',
//	  margins: '0 5 0 5',
//	  collapsible: true,
//	  split: true,
//	  titleCollapse: true,
//	  width: 200
//	  },
//	  {
//	  title: 'South',
//	  region: 'south',
//	  split: true,
//	  margins: '0 5 5 5',
//	  flex: .3
//	  }
	  
	  ]
	  }

);