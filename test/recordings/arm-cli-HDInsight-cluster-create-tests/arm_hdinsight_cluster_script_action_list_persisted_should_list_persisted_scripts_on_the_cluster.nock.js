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
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/scriptActions?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2050/scriptActions?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '6abcfa98-d415-42bf-84ac-a99c602912ac',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': 'f22a4d44-7726-43b1-b092-f144f0cebb7a',
  'x-ms-routing-request-id': 'WESTUS:20160425T233911Z:f22a4d44-7726-43b1-b092-f144f0cebb7a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:39:11 GMT',
=======
  'x-ms-request-id': 'eb86357f-4d17-452b-aa85-79fb8d0077d1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'af4b7aa2-0992-4e46-bfe9-78b03a7bd787',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T203425Z:af4b7aa2-0992-4e46-bfe9-78b03a7bd787',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:34:24 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2943/scriptActions?api-version=2015-03-01-preview')
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2050/scriptActions?api-version=2015-03-01-preview')
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '6abcfa98-d415-42bf-84ac-a99c602912ac',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': 'f22a4d44-7726-43b1-b092-f144f0cebb7a',
  'x-ms-routing-request-id': 'WESTUS:20160425T233911Z:f22a4d44-7726-43b1-b092-f144f0cebb7a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:39:11 GMT',
=======
  'x-ms-request-id': 'eb86357f-4d17-452b-aa85-79fb8d0077d1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'af4b7aa2-0992-4e46-bfe9-78b03a7bd787',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T203425Z:af4b7aa2-0992-4e46-bfe9-78b03a7bd787',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:34:24 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; }]];