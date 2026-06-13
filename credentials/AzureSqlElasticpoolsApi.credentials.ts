import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlElasticpoolsApi implements ICredentialType {
        name = 'N8nDevAzureSqlElasticpoolsApi';

        displayName = 'Azure SQL Elasticpools API';

        icon: Icon = { light: 'file:../nodes/AzureSqlElasticpools/azure-sql-elasticpools.png', dark: 'file:../nodes/AzureSqlElasticpools/azure-sql-elasticpools.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Elasticpools API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
