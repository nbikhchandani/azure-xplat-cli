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
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946\",\"name\":\"xplatTestHDInsightClusterCreate5946\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"6764e445-3dae-4d41-995c-0c67868f118d\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-25T22:23:22.327\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate5946.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate5946.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4bac6377-c27e-4b4d-b25a-8953fc207220',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0ce68833-7bd8-490b-ab2f-1cb0952623eb',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230653Z:0ce68833-7bd8-490b-ab2f-1cb0952623eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:06:52 GMT',
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257\",\"name\":\"xplatTestHDInsightClusterCreate3257\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"West US\",\"etag\":\"8aaef434-0a16-4186-a41c-4cb7ff708467\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-13T19:44:40.923\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3257.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3257.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1379',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bfaef768-521a-4c74-9df9-bdf0fa2c95a1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '7276bcd0-1e05-4433-b575-f34f9fa0252b',
  'x-ms-routing-request-id': 'WESTUS:20160413T200531Z:7276bcd0-1e05-4433-b575-f34f9fa0252b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:05:31 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate912/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5946\",\"name\":\"xplatTestHDInsightClusterCreate5946\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"6764e445-3dae-4d41-995c-0c67868f118d\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-25T22:23:22.327\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate5946.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate5946.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4bac6377-c27e-4b4d-b25a-8953fc207220',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0ce68833-7bd8-490b-ab2f-1cb0952623eb',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230653Z:0ce68833-7bd8-490b-ab2f-1cb0952623eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:06:52 GMT',
=======
  .get('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3257\",\"name\":\"xplatTestHDInsightClusterCreate3257\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"West US\",\"etag\":\"8aaef434-0a16-4186-a41c-4cb7ff708467\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-13T19:44:40.923\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3257.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3257.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1379',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bfaef768-521a-4c74-9df9-bdf0fa2c95a1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '7276bcd0-1e05-4433-b575-f34f9fa0252b',
  'x-ms-routing-request-id': 'WESTUS:20160413T200531Z:7276bcd0-1e05-4433-b575-f34f9fa0252b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:05:31 GMT',
>>>>>>> 020e4c6585e0b3fd70209f353d3dc71a397246bc
  connection: 'close' });
 return result; }]];