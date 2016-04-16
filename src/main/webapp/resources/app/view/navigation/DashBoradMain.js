Ext.define('AM.view.navigation.LeftNavMenu' ,
		
		{
	  
	  extend: 'Ext.panel.Panel',
      alias: 'widget.leftNavMenu',
      title: 'User Management',
      layout: {
      type: 'hbox',
      align: 'stretch',
      padding: 10
      },
      defaults: {
      flex: 1
      },
      items: [{
      xtype: 'container',
      margins: '0 5 0 0',
      layout: {type: 'vbox',
    	  align: 'stretch',
    	  animate: true
    	  },
    	  defaults: {
    	  flex: 1,
    	  frame: true
    	  },
    	  items: [{
    	  title: 'User Contact Information',
    	  margins: '0 0 5 0'
    	  }, {
    	  title: 'Session Log'
    	  }]
    	  }, {
    	  xtype: 'container',
    	  layout: {
    	  type: 'vbox',
    	  align: 'stretch',
    	  animate: true
    	  },
    	  defaults: {
    	  flex: 1,
    	  frame: true
    	  },
    	  items: [{
    	  title: 'Account Privileges',
    	  margins: '0 0 5 0'
    	  }, {
    	  title: 'Purchase History',
    	  }]
    	  }]


	  }

);