// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
<<<<<<< HEAD
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
=======
    id: '12f44720-8952-422c-bb7d-28831c2de639',
    name: 'BDHadoopHumboltCRUDReliability',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
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
<<<<<<< HEAD
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting?api-version=2015-03-01-preview', '*')
=======
.post('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting?api-version=2015-03-01-preview', '*')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
<<<<<<< HEAD
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/operationresults/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '7175eb90-c941-474b-925f-fc9950f2e870',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '928d8bb4-48e5-425a-ba73-b2f8add0cfb2',
  'x-ms-routing-request-id': 'WESTUS:20160425T232554Z:928d8bb4-48e5-425a-ba73-b2f8add0cfb2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:25:53 GMT',
=======
  location: 'https://management.azure.com/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/operationresults/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'df6c1096-2053-4818-9268-17de70415be1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0a1fd015-7cd3-4da7-abc2-5e47722f51c9',
  'x-ms-routing-request-id': 'WESTUS:20160413T202121Z:0a1fd015-7cd3-4da7-abc2-5e47722f51c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:21:20 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
<<<<<<< HEAD
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting?api-version=2015-03-01-preview', '*')
=======
.post('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting?api-version=2015-03-01-preview', '*')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
<<<<<<< HEAD
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/operationresults/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '7175eb90-c941-474b-925f-fc9950f2e870',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '928d8bb4-48e5-425a-ba73-b2f8add0cfb2',
  'x-ms-routing-request-id': 'WESTUS:20160425T232554Z:928d8bb4-48e5-425a-ba73-b2f8add0cfb2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:25:53 GMT',
=======
  location: 'https://management.azure.com/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/operationresults/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'df6c1096-2053-4818-9268-17de70415be1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0a1fd015-7cd3-4da7-abc2-5e47722f51c9',
  'x-ms-routing-request-id': 'WESTUS:20160413T202121Z:0a1fd015-7cd3-4da7-abc2-5e47722f51c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:21:20 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'c3b52547-d53b-4b65-847c-53702c859257',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '87d3cc6d-0757-4bfd-8994-ea5dd402207e',
  'x-ms-routing-request-id': 'WESTUS:20160425T232655Z:87d3cc6d-0757-4bfd-8994-ea5dd402207e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:26:54 GMT',
=======
  'x-ms-request-id': '9dddc318-9682-410e-ad50-44864487bc9d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': 'a51f36aa-c47e-413c-b700-c9288018615c',
  'x-ms-routing-request-id': 'WESTUS:20160413T202222Z:a51f36aa-c47e-413c-b700-c9288018615c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:22:21 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'c3b52547-d53b-4b65-847c-53702c859257',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '87d3cc6d-0757-4bfd-8994-ea5dd402207e',
  'x-ms-routing-request-id': 'WESTUS:20160425T232655Z:87d3cc6d-0757-4bfd-8994-ea5dd402207e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:26:54 GMT',
=======
  'x-ms-request-id': '9dddc318-9682-410e-ad50-44864487bc9d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': 'a51f36aa-c47e-413c-b700-c9288018615c',
  'x-ms-routing-request-id': 'WESTUS:20160413T202222Z:a51f36aa-c47e-413c-b700-c9288018615c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:22:21 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'c3271d0c-aaba-4b91-a98e-e1d95001012d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': '088d7018-e703-4a38-a507-e097cd853da0',
  'x-ms-routing-request-id': 'WESTUS:20160425T232755Z:088d7018-e703-4a38-a507-e097cd853da0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:27:55 GMT',
=======
  'x-ms-request-id': '74a2cd14-910e-463a-98c2-6f25ad708435',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c03a8eb0-fb6e-4b9d-9588-32b5ed690525',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202325Z:c03a8eb0-fb6e-4b9d-9588-32b5ed690525',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:23:25 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'c3271d0c-aaba-4b91-a98e-e1d95001012d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': '088d7018-e703-4a38-a507-e097cd853da0',
  'x-ms-routing-request-id': 'WESTUS:20160425T232755Z:088d7018-e703-4a38-a507-e097cd853da0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:27:55 GMT',
=======
  'x-ms-request-id': '74a2cd14-910e-463a-98c2-6f25ad708435',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c03a8eb0-fb6e-4b9d-9588-32b5ed690525',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202325Z:c03a8eb0-fb6e-4b9d-9588-32b5ed690525',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:23:25 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '3983d8fe-0396-4323-b23c-60b6ebb08d84',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'e0c9a91d-4907-4e2c-a5e3-4f13e0dd4825',
  'x-ms-routing-request-id': 'WESTUS:20160425T232856Z:e0c9a91d-4907-4e2c-a5e3-4f13e0dd4825',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:28:56 GMT',
=======
  'x-ms-request-id': 'bb325c5f-4f92-499b-89d7-06b9d7903a60',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '44011f0c-bc80-4362-a363-f6ff6bb24bde',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202426Z:44011f0c-bc80-4362-a363-f6ff6bb24bde',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:24:25 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '3983d8fe-0396-4323-b23c-60b6ebb08d84',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'e0c9a91d-4907-4e2c-a5e3-4f13e0dd4825',
  'x-ms-routing-request-id': 'WESTUS:20160425T232856Z:e0c9a91d-4907-4e2c-a5e3-4f13e0dd4825',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:28:56 GMT',
=======
  'x-ms-request-id': 'bb325c5f-4f92-499b-89d7-06b9d7903a60',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '44011f0c-bc80-4362-a363-f6ff6bb24bde',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202426Z:44011f0c-bc80-4362-a363-f6ff6bb24bde',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:24:25 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'bce6a1c3-9b86-4581-a6c6-59a1131c4533',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '72af7b7c-362b-4c4c-a34d-2671145baf56',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T232957Z:72af7b7c-362b-4c4c-a34d-2671145baf56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:29:57 GMT',
=======
  'x-ms-request-id': '1f21777d-c7f5-4448-ae99-0c267aad13bd',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '88c76c3a-77cd-4741-a3ee-d0d4a3835431',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202526Z:88c76c3a-77cd-4741-a3ee-d0d4a3835431',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:25:26 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'bce6a1c3-9b86-4581-a6c6-59a1131c4533',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '72af7b7c-362b-4c4c-a34d-2671145baf56',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T232957Z:72af7b7c-362b-4c4c-a34d-2671145baf56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:29:57 GMT',
=======
  'x-ms-request-id': '1f21777d-c7f5-4448-ae99-0c267aad13bd',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '88c76c3a-77cd-4741-a3ee-d0d4a3835431',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202526Z:88c76c3a-77cd-4741-a3ee-d0d4a3835431',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:25:26 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a03e59c0-a4a8-4bbc-9271-70947ede9aeb',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14926',
  'x-ms-correlation-request-id': 'dc1e4c03-40d9-44f4-9c3b-edc42fa66340',
  'x-ms-routing-request-id': 'WESTUS:20160425T233058Z:dc1e4c03-40d9-44f4-9c3b-edc42fa66340',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:30:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a03e59c0-a4a8-4bbc-9271-70947ede9aeb',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14926',
  'x-ms-correlation-request-id': 'dc1e4c03-40d9-44f4-9c3b-edc42fa66340',
  'x-ms-routing-request-id': 'WESTUS:20160425T233058Z:dc1e4c03-40d9-44f4-9c3b-edc42fa66340',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:30:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'f143c08a-f977-4f0a-bd98-59c487316697',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '85f53c2b-688a-4223-85ee-337b3703209d',
  'x-ms-routing-request-id': 'WESTUS:20160425T233159Z:85f53c2b-688a-4223-85ee-337b3703209d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:31:58 GMT',
=======
  'x-ms-request-id': '24391cc2-5383-4ecc-817b-19ba41e55f4e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '3d5c8279-dee7-4561-8a6e-87d1074e002e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202628Z:3d5c8279-dee7-4561-8a6e-87d1074e002e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:26:27 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946/changerdpsetting/azureasyncoperations/2596b949-d5b5-4135-8f04-0192cc4495fc-0?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257/changerdpsetting/azureasyncoperations/024e27c9-bc3a-4cfc-bb58-cbd1d5bc8662-0?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'f143c08a-f977-4f0a-bd98-59c487316697',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '85f53c2b-688a-4223-85ee-337b3703209d',
  'x-ms-routing-request-id': 'WESTUS:20160425T233159Z:85f53c2b-688a-4223-85ee-337b3703209d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:31:58 GMT',
=======
  'x-ms-request-id': '24391cc2-5383-4ecc-817b-19ba41e55f4e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '3d5c8279-dee7-4561-8a6e-87d1074e002e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T202628Z:3d5c8279-dee7-4561-8a6e-87d1074e002e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:26:27 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; }]];