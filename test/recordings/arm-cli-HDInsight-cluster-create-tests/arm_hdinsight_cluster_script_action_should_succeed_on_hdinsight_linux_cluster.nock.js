// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions/operationresults/62436b00-ce27-4e15-8966-47ec0a4738d1-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions/azureasyncoperations/62436b00-ce27-4e15-8966-47ec0a4738d1-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '64d2a251-52d5-4a8e-8ffe-ed4f4f378581',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4bac8c2b-1af5-4467-b085-79994d467ba0',
  'x-ms-routing-request-id': 'WESTUS:20160425T233808Z:4bac8c2b-1af5-4467-b085-79994d467ba0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:38:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions/operationresults/62436b00-ce27-4e15-8966-47ec0a4738d1-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions/azureasyncoperations/62436b00-ce27-4e15-8966-47ec0a4738d1-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '64d2a251-52d5-4a8e-8ffe-ed4f4f378581',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4bac8c2b-1af5-4467-b085-79994d467ba0',
  'x-ms-routing-request-id': 'WESTUS:20160425T233808Z:4bac8c2b-1af5-4467-b085-79994d467ba0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:38:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions/azureasyncoperations/62436b00-ce27-4e15-8966-47ec0a4738d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65f6c2c0-8d74-4a33-80f6-491eea390034',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14906',
  'x-ms-correlation-request-id': '840da6e6-00cb-49e8-bc5f-dee2e62df3e0',
  'x-ms-routing-request-id': 'WESTUS:20160425T233909Z:840da6e6-00cb-49e8-bc5f-dee2e62df3e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:39:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/executeScriptActions/azureasyncoperations/62436b00-ce27-4e15-8966-47ec0a4738d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65f6c2c0-8d74-4a33-80f6-491eea390034',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14906',
  'x-ms-correlation-request-id': '840da6e6-00cb-49e8-bc5f-dee2e62df3e0',
  'x-ms-routing-request-id': 'WESTUS:20160425T233909Z:840da6e6-00cb-49e8-bc5f-dee2e62df3e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:39:09 GMT',
  connection: 'close' });
 return result; }]];