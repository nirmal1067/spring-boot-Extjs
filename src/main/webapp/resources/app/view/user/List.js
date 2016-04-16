Ext.define('AM.view.user.List' ,
		
		{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',

    initComponent: function() {
        this.store = {
            fields: ['name', 'email'],
            data  : [
                {name: 'Santa',    node: 'ed@sencha.com',active: 'ed@sencha.com',rating: 'ed@sencha.com',amount: 'ed@sencha.com',email: 'sa@ha.com'},
                {name: 'Banta',    node: 'ed@sencha.com',active: 'ed@sencha.com',rating: 'ed@sencha.com',amount: 'ed@sencha.com',email: 'ba@ha.com'},
            ]
        };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Node',  dataIndex: 'node',  flex: 1},
            {header: 'Active',  dataIndex: 'active',  flex: 1},
            {header: 'Rating',  dataIndex: 'rating',  flex: 1},
            {header: 'Amount',  dataIndex: 'amount',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
}

);