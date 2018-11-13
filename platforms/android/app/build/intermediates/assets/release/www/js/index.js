/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var citizenx = {};
citizenx.app = {
    // Application Constructor
    incidents: [{"id":"ae815a94-8034-4ae7-9446-c513b54cafe5","type":"Hospitals","image":null,"state":"teststate","govt":"testgov","questions":{"Hospital Response Time":"< 30 mins","address":"jnjsnjknsjknjnjdn","Hospital Report Type":"Expired medicine","Overall Rating":"Poor","hospitalname":"abc","departmenthead":"hij","department":"def","desc":"I was given expired medicine at this hospital"},"status":"NEW","createdBy":"70a9fc05-9df4-41f6-97c7-53986b961a2b","author":"admin","createdOn":1521613479901,"createdOnStr":"21-03-2018 06:24:39","reportDateStr":null},{"id":"880bd7fd-020f-4298-a7e3-a5af1ec67be0","type":"Election Malpractice","image":"b990b3ee-4417-42e4-bce6-b94a915fadfc","state":"teststate","govt":"testgov","questions":{"address":"jhshdsjhjsdj","Election Type":"State Assembly","Incident type":"Ballot snatching","Overall Rating":"Poor","desc":"We saw ballot snatching at this election"},"status":"NEW","createdBy":"40649331-f771-40d9-8b0c-ea4d73593665","author":"admin","createdOn":1521613132764,"createdOnStr":"21-03-2018 06:18:52","reportDateStr":null},{"id":"0603b1e0-6cad-4c19-b780-050c42153d92","type":"Graft(Bribe)","image":"4dcf9f29-790b-4e02-b22d-ebf1cd446797","state":"teststate","govt":"testgov","questions":{"Police Response Time":"Speed up my payment","Graft Incident By":"Customs","address":"jhsjhsdhjdshj","Overall Rating":"Poor","desc":"Custom officer took bribe"},"status":"NEW","createdBy":"2c261122-0d1a-4315-bdf4-0b92065c7a07","author":"admin","createdOn":1521610802371,"createdOnStr":"21-03-2018 05:40:02","reportDateStr":null},{"id":"ed7183d1-eed7-48b7-8575-810653502c66","type":"Airports","image":"cb0fc01b-473e-4cf1-a0a7-41c9a39f189f","state":"teststate","govt":"testgov","questions":{"Police Response Time":"< 30 mins","Overall Rating":"Poor","Airport Report Type":"Unruly queues","terminal":"def","airline":"","airport":"abc","desc":"There was an unruly  queue at abc airport"},"status":"NEW","createdBy":"2c261122-0d1a-4315-bdf4-0b92065c7a07","author":"admin","createdOn":1521610748801,"createdOnStr":"21-03-2018 05:39:08","reportDateStr":null},{"id":"d16d7cf4-4a9a-4e93-b72d-4810a361a4e1","type":"Crime","image":"232afbf5-9484-46ad-8b13-2d698b6169f7","state":"teststate","govt":"testgov","questions":{"Crime Type":"Fake Products","Police Response Time":"< 30min","address":"kkssnjnsjnsjns","Overall Rating":"Fair","police_station":"kjsksksksk","desc":"njsjsjsjsjsj"},"status":"NEW","createdBy":"6580aa10-242f-474a-bc85-a0165d501c57","author":"admin","createdOn":1521608653308,"createdOnStr":"21-03-2018 05:04:13","reportDateStr":null},{"id":"d23afd22-08e7-40bd-9bec-aa096e0c05a4","type":"Crime","image":"9c725723-b80d-4800-9618-fb0aaae80f9e","state":"teststate","govt":"testgov","questions":{"Crime Type":"Fake Products","Police Response Time":"No Response","address":"Hdhdgcgxgxjc","Overall Rating":"Poor","police_station":"Xydtstxucyx","desc":"Jfuchxxifkfdn"},"status":"NEW","createdBy":"70a9fc05-9df4-41f6-97c7-53986b961a2b","author":"admin","createdOn":1521442961355,"createdOnStr":"19-03-2018 07:02:41","reportDateStr":null},{"id":"24d74fd8-c38c-496e-afc6-53397b763bd0","type":"Crime","image":null,"state":"teststate","govt":"testgov","questions":{"Crime Type":"Fake Products","Police Response Time":"No Response","address":"Bvscvbccdd","Overall Rating":"Poor","police_station":"Bcxcbvcxv","desc":"Hf cu kung ggddcc"},"status":"NEW","createdBy":"40649331-f771-40d9-8b0c-ea4d73593665","author":"admin","createdOn":1521442507684,"createdOnStr":"19-03-2018 06:55:07","reportDateStr":null},{"id":"991eea67-f949-4cee-8165-9c9c68347c69","type":"Crime","image":null,"state":"teststate","govt":"testgov","questions":{"Crime Type":"Fake Products","Police Response Time":"No Response","address":"Ydydyd","Overall Rating":"Fair","police_station":"Hdydyddy","desc":"Hxysts"},"status":"NEW","createdBy":"2c261122-0d1a-4315-bdf4-0b92065c7a07","author":"admin","createdOn":1521442008402,"createdOnStr":"19-03-2018 06:46:48","reportDateStr":null},{"id":"bb511bdf-469b-4a9b-a66a-9bd11bc39fe3","type":"Crime","image":null,"state":"teststate","govt":"testgov","questions":{"Crime Type":"Fake Products","Police Response Time":"No Response","address":"Kvjvucuc","Overall Rating":"Poor","police_station":"Hcyxhxhx","desc":"Bdydydu"},"status":"NEW","createdBy":"f6c4c653-66e3-4544-9510-72e1416bd2a0","author":"admin","createdOn":1521441490282,"createdOnStr":"19-03-2018 06:38:10","reportDateStr":null},{"id":"0e404a8c-6f0f-4979-b9d6-61717a317aeb","type":"Crime","image":null,"state":"teststate","govt":"testgov","questions":{"Crime Type":"Fake Products","Police Response Time":"No Response","address":"Jgufufufjfugudufid","Overall Rating":"Poor","police_station":"Jgufufufig","desc":"Kgjfjdnffjfufuf"},"status":"NEW","createdBy":"6580aa10-242f-474a-bc85-a0165d501c57","author":"admin","createdOn":1521440878287,"createdOnStr":"19-03-2018 06:27:58","reportDateStr":null}],
		
	homeTemplate: {},
		
	initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        this.homeTemplate = Handlebars.compile($("#home-template").html());  

        //var incis = this.incidents;

        //$("#incilist").append(this.homeTemplate(incis));
        $.get(AppConfig.appUrl + "/incidents", function(data) {
			$("#incilist").html(citizenx.app.homeTemplate(data));
		});
    },

    onDeviceReady: function() {
        FastClick.attach(document.body);   

    }

    
};

citizenx.app.initialize();