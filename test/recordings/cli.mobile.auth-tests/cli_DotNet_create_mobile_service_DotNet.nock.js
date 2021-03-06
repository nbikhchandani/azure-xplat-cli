// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: '985853293ead433e81ae77f320c184fd:0000',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '3e81ba51aaeb9bb283ab1738f26aa369',
  date: 'Mon, 13 Apr 2015 23:09:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/3e81ba51aaeb9bb283ab1738f26aa369')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>3e81ba51-aaeb-9bb2-83ab-1738f26aa369</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'c849af2f336a9ac3901dd9215eca9c2a',
  date: 'Mon, 13 Apr 2015 23:09:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/3e81ba51aaeb9bb283ab1738f26aa369')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>3e81ba51-aaeb-9bb2-83ab-1738f26aa369</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'df0ed34b86a195b9ab7695a9bcd23f5b',
  date: 'Mon, 13 Apr 2015 23:09:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/3e81ba51aaeb9bb283ab1738f26aa369')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>3e81ba51-aaeb-9bb2-83ab-1738f26aa369</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'f3b802f7b7d4958e8da6200f5176024c',
  date: 'Mon, 13 Apr 2015 23:09:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/3e81ba51aaeb9bb283ab1738f26aa369')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>3e81ba51-aaeb-9bb2-83ab-1738f26aa369</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '38f3e7a188279869bd3d5bbcde0edf84',
  date: 'Mon, 13 Apr 2015 23:09:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/3e81ba51aaeb9bb283ab1738f26aa369')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>3e81ba51-aaeb-9bb2-83ab-1738f26aa369</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'a3584b725919960d8c092eb251422c24',
  date: 'Mon, 13 Apr 2015 23:09:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/3e81ba51aaeb9bb283ab1738f26aa369')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>3e81ba51-aaeb-9bb2-83ab-1738f26aa369</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '250a073e04aa94189c74ae725b5682f2',
  date: 'Mon, 13 Apr 2015 23:09:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestDotNet1969mobileservice')
  .reply(200, "<Application xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestDotNet1969mobileservice</Name><Label>clitestDotNet1969</Label><Description>clitestDotNet1969</Description><Uri>https://management.core.windows.net/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestDotNet1969mobileservice</Uri><State>Healthy</State><InternalResources><InternalResource><LogicalName>ZumoMobileService</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.MobileServices.MobileService</Type><Name>clitestDotNet1969</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/clitestDotNet1969</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlDatabase_98fd3fa9786c4751b75f7e4864a59ac3</LogicalName><State>Provisioned</State><Type>Microsoft.WindowsAzure.SQLAzure.DataBase</Type><Name>clitestDotNet1969_db</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/jkzhsjrim4/databases/clitestDotNet1969_db</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlServer_20dfaae5646e48a1921878d85c7a0608</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.SQLAzure.Server</Type><Name>jkzhsjrim4</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/jkzhsjrim4</SelfLinkUri><FailureCode/></InternalResource></InternalResources><ExternalResources/></Application>", { 'cache-control': 'no-cache',
  'content-length': '1612',
  'content-type': 'application/xml; charset=utf-8',
  etag: '985853293ead433e81ae77f320c184fd:0001',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '9a789373a5ba97b3841c088a3585297f',
  date: 'Mon, 13 Apr 2015 23:09:31 GMT' });
 return result; }]];