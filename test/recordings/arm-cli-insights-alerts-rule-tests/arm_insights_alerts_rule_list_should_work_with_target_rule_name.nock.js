// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-WestUS/providers/microsoft.insights/alertrules/requestignhas?api-version=2016-03-01')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-WestUS/providers/microsoft.insights/alertrules/requestignhas\",\"name\":\"requestignhas\",\"type\":\"Microsoft.Insights/alertRules\",\"location\":\"westus\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\",\"hidden-link:/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-WestUS/providers/Microsoft.Web/sites/minuevositio2\":\"Resource\"},\"properties\":{\"name\":\"requestignhas\",\"description\":\"Pura vida\",\"isEnabled\":true,\"condition\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition\",\"dataSource\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-WestUS/providers/Microsoft.Web/sites/minuevositio2\",\"metricName\":\"Requests\"},\"threshold\":1.0,\"windowSize\":\"PT5M\",\"timeAggregation\":\"Total\"},\"lastUpdatedTime\":\"2016-03-17T17:07:14.4017348Z\",\"provisioningState\":\"Succeeded\",\"actions\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1397',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '495963cd-2ca0-408a-982f-a5ec707bfeb3',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14955',
  'x-ms-correlation-request-id': 'ad25eae1-b8ac-4a0d-aab6-b55c037dc672',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160317T232434Z:ad25eae1-b8ac-4a0d-aab6-b55c037dc672',
  date: 'Thu, 17 Mar 2016 23:24:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-WestUS/providers/microsoft.insights/alertrules/requestignhas?api-version=2016-03-01')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-WestUS/providers/microsoft.insights/alertrules/requestignhas\",\"name\":\"requestignhas\",\"type\":\"Microsoft.Insights/alertRules\",\"location\":\"westus\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\",\"hidden-link:/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-WestUS/providers/Microsoft.Web/sites/minuevositio2\":\"Resource\"},\"properties\":{\"name\":\"requestignhas\",\"description\":\"Pura vida\",\"isEnabled\":true,\"condition\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition\",\"dataSource\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-WestUS/providers/Microsoft.Web/sites/minuevositio2\",\"metricName\":\"Requests\"},\"threshold\":1.0,\"windowSize\":\"PT5M\",\"timeAggregation\":\"Total\"},\"lastUpdatedTime\":\"2016-03-17T17:07:14.4017348Z\",\"provisioningState\":\"Succeeded\",\"actions\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1397',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '495963cd-2ca0-408a-982f-a5ec707bfeb3',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14955',
  'x-ms-correlation-request-id': 'ad25eae1-b8ac-4a0d-aab6-b55c037dc672',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160317T232434Z:ad25eae1-b8ac-4a0d-aab6-b55c037dc672',
  date: 'Thu, 17 Mar 2016 23:24:33 GMT',
  connection: 'close' });
 return result; }]];