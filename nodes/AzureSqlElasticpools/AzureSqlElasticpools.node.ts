import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlElasticpools implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Elasticpools',
                name: 'N8nDevAzureSqlElasticpools',
                icon: { light: 'file:./azure-sql-elasticpools.png', dark: 'file:./azure-sql-elasticpools.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
                defaults: { name: 'Azure SQL Elasticpools' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlElasticpoolsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
