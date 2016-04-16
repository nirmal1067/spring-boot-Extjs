Ext.define('AM.view.user.AppViewPort' ,
		
		{
	
	  extend: 'Ext.container.Viewport',
      alias: 'widget.appViewPort',
	  layout: 'border',
	  items: [{
	  region: 'north',
	  margins: 5,
	  height: 100,
	  collapsible: true,
	  split: true,
	  titleCollapse: true,
	  xtype: 'container'
	  }, {
	  title: 'West',
	  region: 'west',
	  margins: '0 5 0 5',
	  flex: .3
	  }, {
	  title: 'Center',
	  region: 'center'
	  }, {
	  title: 'East',
	  region: 'east',
	  margins: '0 5 0 5',
	  collapsible: true,
	  split: true,
	  titleCollapse: true,
	  width: 200
	  }, {
	  title: 'South',
	  region: 'south',
	  split: true,
	  margins: '0 5 5 5',
	  flex: .3
	  }]
	  }

);