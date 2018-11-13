var incidentService = {

	incident : {},

	init : function(type) {
		this.incident = {};
		this.incident.type = type;
		this.incident.questions = new Object();
	},

	setcat : function(key, cat) {

		this.incident.category = cat;
		this.incident.questions[key] = cat;
	},
	
	setstate : function(key, cat) {

		this.incident.state = cat;
		this.incident.questions[key] = cat;
	},
	
	setgovt : function(key, cat) {

		this.incident.govt = cat;
		this.incident.questions[key] = cat;
	},

	inext : function(key, val, flag) {
		this.incident.questions[key] = val;

		self = this.incident;
		if (flag == 1) {
			// submit
			type = this.incident.type;
			cat = this.incident.category;
			desc = this.incident.description;
			state = this.incident.state;
			govt = this.incident.govt;
			console.log(this.incident.questions);
			ques = JSON.stringify(this.incident.questions);
			console.log(ques);

			$.ajax({
				xhrFields : {
					withCredentials : true
				},
				headers : {
					'Authorization' : 'Bearer ' + AppConfig.token
				},
				url : AppConfig.appUrl + "/incidents",
				data : {
					"type" : type,
					"state" : state,
					"govt" : govt,
					"category" : cat,
					"description" : desc,
					"questions" : ques
				},
				cache : false,
				type : "POST",
				success : function(response) {
					console.log("Ankit incident created : " + response.id);
					self.id = response.id;
				},
				error : function(xhr) {
					alert("Incident was not created");
				}
			});
		}
	},

	next : function(formid, flag) {

		console.log("Ankit formid : " + formid);
		console.log($(formid));
		console.log($(formid).find('textarea'));

		self = this.incident;

		$(formid).find('input[type=text]').each(function() {

			key = $(this).attr('id');
			val = $(this).val();
			self.questions[key] = val;

		});

		$(formid).find('textarea').each(function() {

			key = $(this).attr('id');
			val = $(this).val();
			self.questions[key] = val;

			if (key == 'desc') {
				self.description = val;
			}

		});

		if (flag == 1) {
			// submit
			type = this.incident.type;
			cat = this.incident.category;
			state = this.incident.state;
			govt = this.incident.govt;
			desc = this.incident.description;
			console.log(this.incident.questions);
			ques = JSON.stringify(this.incident.questions);
			console.log(ques);

			$.ajax({
				xhrFields : {
					withCredentials : true
				},
				headers : {
					'Authorization' : 'Bearer ' + AppConfig.token
				},
				url : AppConfig.appUrl + "incidents",
				data : {
					"type" : type,
					"state" : state,
					"govt" : govt,
					"category" : cat,
					"description" : desc,
					"questions" : ques
				},
				cache : false,
				type : "POST",
				success : function(response) {
					console.log("Ankit incident created : " + response.id);
					self.id = response.id;
				},
				error : function(xhr) {
					alert("Incident was not created");
				}
			});
		}

	},

	getImage : function() {

		console.log("Ankit get image : ");
		console.log("Ankit iid : " + this.incident.id);

		document.getElementById('iid').value = this.incident.id;
		iid = document.getElementById('iid').value;
		imgurl = AppConfig.appUrl + "incidents/image/" + iid;

		console.log("Ankit url : " + iid);
		navigator.camera.getPicture(this.uploadPhoto, function(message) {
			alert('get picture failed');
		}, {
			quality : 40,
			destinationType : navigator.camera.DestinationType.FILE_URI,
			sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY
		});
	},

	uploadPhoto : function(imageURI) {

		console.log("Ankit Filename : " + imageURI);
		iid = document.getElementById('iid').value;
		imgurl = AppConfig.appUrl + "incidents/image/" + iid;

		console.log("Ankit url : " + iid);
		var options = new FileUploadOptions();
		options.fileKey = "file";
		options.fileName = decodeURIComponent(imageURI.substr(imageURI
				.lastIndexOf('/') + 1));
		options.mimeType = "image/jpeg";
		console.log(options.fileName);
		/*
		 * var params = new Object(); params.value1 = "test"; params.value2 =
		 * "param"; options.params = params;
		 */
		options.chunkedMode = false;

		var headers = {
			'Authorization' : 'Bearer ' + AppConfig.token
		};

		options.headers = headers;

		// $.mobile.changePage("#notification");
		console.log("Ankit Uploading file ");
		var ft = new FileTransfer();
		// var url = "incidents/image/"+this.incident.id;
		ft.upload(imageURI, imgurl, function(result) {
			console.log("Ankit File Upload Success");
			console.log(JSON.stringify(result));
			$.mobile.changePage("#notification");
		}, function(error) {
			console.log("Ankit File Upload Error");
			console.log(JSON.stringify(error));
			// $.mobile.changePage("#notification");
		}, options);
	},

	refresh : function() {

		$.get(AppConfig.appUrl + "/incidents", function(data) {
			$("#incilist").html(citizenx.app.homeTemplate(data));
		});
	}

}