// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c',
    name: 'Insights Org Sub2',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'e58d7273-6738-4be8-9c6e-82863ed7b695',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/%2Fsubscriptions%2F4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c%2FresourceGroups%2Finsights-integration%2Fproviders%2Ftest.shoebox%2Ftestresources2%2F0000000000eastusR2/providers/microsoft.insights/diagnosticSettings/service?api-version=2015-07-01')
  .reply(200, "{\"id\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/insights-integration/providers/test.shoebox/testresources2/0000000000eastusr2/diagnosticSettings/service\",\"name\":\"service\",\"location\":null,\"tags\":null,\"properties\":{\"storageAccountId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/Default-Storage-EastUS/providers/Microsoft.ClassicStorage/storageAccounts/testshoeboxeastus\",\"metrics\":[{\"timeGrain\":\"PT1M\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}],\"logs\":[{\"category\":\"TestLog1\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}},{\"category\":\"TestLog2\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e59cc956-34bf-43c7-9d5d-17e70d6dc3ff',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '55f96fbd-30b0-455b-829f-0fed7d092f62',
  'x-ms-routing-request-id': 'WESTUS:20151112T234947Z:55f96fbd-30b0-455b-829f-0fed7d092f62',
  date: 'Thu, 12 Nov 2015 23:49:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/%2Fsubscriptions%2F4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c%2FresourceGroups%2Finsights-integration%2Fproviders%2Ftest.shoebox%2Ftestresources2%2F0000000000eastusR2/providers/microsoft.insights/diagnosticSettings/service?api-version=2015-07-01')
  .reply(200, "{\"id\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/insights-integration/providers/test.shoebox/testresources2/0000000000eastusr2/diagnosticSettings/service\",\"name\":\"service\",\"location\":null,\"tags\":null,\"properties\":{\"storageAccountId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/Default-Storage-EastUS/providers/Microsoft.ClassicStorage/storageAccounts/testshoeboxeastus\",\"metrics\":[{\"timeGrain\":\"PT1M\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}],\"logs\":[{\"category\":\"TestLog1\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}},{\"category\":\"TestLog2\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e59cc956-34bf-43c7-9d5d-17e70d6dc3ff',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '55f96fbd-30b0-455b-829f-0fed7d092f62',
  'x-ms-routing-request-id': 'WESTUS:20151112T234947Z:55f96fbd-30b0-455b-829f-0fed7d092f62',
  date: 'Thu, 12 Nov 2015 23:49:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/%2Fsubscriptions%2F4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c%2FresourceGroups%2Finsights-integration%2Fproviders%2Ftest.shoebox%2Ftestresources2%2F0000000000eastusR2/providers/microsoft.insights/diagnosticSettings/service?api-version=2015-07-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/insights-integration/providers/test.shoebox/testresources2/0000000000eastusr2/diagnosticSettings/service\",\"name\":\"service\",\"location\":null,\"tags\":null,\"properties\":{\"storageAccountId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/Default-Storage-EastUS/providers/Microsoft.ClassicStorage/storageAccounts/testshoeboxeastus\",\"metrics\":[{\"timeGrain\":\"PT1M\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}],\"logs\":[{\"category\":\"TestLog1\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}},{\"category\":\"TestLog2\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e9803d36-d17a-40c7-8ba5-22311bb49bbb',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': '88d26444-7902-48bc-985c-0bbab9af59f5',
  'x-ms-routing-request-id': 'WESTUS:20151112T234952Z:88d26444-7902-48bc-985c-0bbab9af59f5',
  date: 'Thu, 12 Nov 2015 23:49:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/%2Fsubscriptions%2F4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c%2FresourceGroups%2Finsights-integration%2Fproviders%2Ftest.shoebox%2Ftestresources2%2F0000000000eastusR2/providers/microsoft.insights/diagnosticSettings/service?api-version=2015-07-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/insights-integration/providers/test.shoebox/testresources2/0000000000eastusr2/diagnosticSettings/service\",\"name\":\"service\",\"location\":null,\"tags\":null,\"properties\":{\"storageAccountId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/Default-Storage-EastUS/providers/Microsoft.ClassicStorage/storageAccounts/testshoeboxeastus\",\"metrics\":[{\"timeGrain\":\"PT1M\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}],\"logs\":[{\"category\":\"TestLog1\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}},{\"category\":\"TestLog2\",\"enabled\":true,\"retentionPolicy\":{\"days\":0}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e9803d36-d17a-40c7-8ba5-22311bb49bbb',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': '88d26444-7902-48bc-985c-0bbab9af59f5',
  'x-ms-routing-request-id': 'WESTUS:20151112T234952Z:88d26444-7902-48bc-985c-0bbab9af59f5',
  date: 'Thu, 12 Nov 2015 23:49:51 GMT',
  connection: 'close' });
 return result; }]];