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
			rating = this.incident.rating;
			console.log(this.incident.questions);
			
			ques = JSON.stringify(this.incident.questions);
			console.log(ques);
			
			if(!rating){
				rating = "1";
			}
			
			requestbody = JSON.stringify({
				"category" : type,
				"state" : state,
				"city" : govt,
				"subcategory" : cat,
				"description" : desc,
				"country": "Nigeria",
				"questions": [],
				//"questions" : ques,
				"rating" : rating
			});
			
			console.log("Ankit: " + requestbody);
			
			
			$.ajax({
				/*xhrFields : {
					withCredentials : true
				},*/
				headers : {
					'token': AppConfig.token,
		        	'Content-Type': 'application/json'
				},
				url : AppConfig.appUrl + "/incident/",
				data : JSON.stringify({
					"category" : type,
					"state" : state,
					"city" : govt,
					"subcategory" : cat,
					"description" : desc,
					"country": "Nigeria",
					"questions": [],
					//"questions" : ques,
					"rating" : rating
				}),
				dataType: 'json',
				cache : false,
				type : "PUT",
				success : function(response) {
					console.log("Ankit incident created : " + response.id);
					document.getElementById('iid').value = response.id;
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
			rating = this.incident.rating;
			console.log(this.incident.questions);
			ques = JSON.stringify(this.incident.questions);
			console.log(ques);

			if(!rating){
				rating = "1";
			}
			
			$.ajax({
				/*xhrFields : {
					withCredentials : true
				},*/
				headers : {
					'token': AppConfig.token,
			        'Content-Type': 'application/json'
				},
				url : AppConfig.appUrl + "/incident/",
				data : JSON.stringify({
					"category" : type,
					"state" : state,
					"city" : govt,
					"country": "Nigeria",
					"subcategory" : cat,
					"description" : desc,
					"questions": [],
					//"questions" : ques,
					"rating": rating
					
				}),
				dataType: 'json',
				cache : false,
				type : "PUT",
				success : function(response) {
					console.log("Ankit incident created : " + response.id);
					document.getElementById('iid').value = response.id;
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
		imgurl = AppConfig.appUrl + "/image/" + iid;

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
		imgurl = AppConfig.appUrl + "/image/" + iid+"/";

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
				'token': AppConfig.token
		};

		options.headers = headers;

		// $.mobile.navigate("#notification");
		console.log("Ankit Uploading file ");
		var ft = new FileTransfer();
		// var url = "incidents/image/"+this.incident.id;
		ft.upload(imageURI, imgurl, function(result) {
			console.log("Ankit File Upload Success");
			console.log(JSON.stringify(result));
			$.mobile.navigate("#notification");
		}, function(error) {
			console.log("Ankit File Upload Error");
			console.log(JSON.stringify(error));
			// $.mobile.navigate("#notification");
		}, options);
	},

	refresh : function() {

		//console.log("Ankit : Inside refresh");
		//alert("Ankit : Inside refresh");
		$.ajax({

		    headers: {
		        'token': AppConfig.token,
		        'Content-Type': 'application/json'
		    },
		    url: AppConfig.appUrl + '/getincidents/',
		    type: "POST",
		    data: JSON.stringify({"sort":"date_added","order":"desc","page":1,"limit":10}),
		    dataType: 'json',
		    success: function(resp){
		    	//alert("Login Successful");
		    	//console.log("Ankit resp : " + data);
		    	//console.log("Ankit resp : " + data.token);
		    	
		    	data = resp.data;
		    	
		    	for (var i = 0; i < data.length; i++) {
		    	    tnow = Math.floor(Date.now() / 1000);
		    		t1 = data[i].createdOn;
		    		tdiff = tnow -t1;
		    		el = data[i]
		    		
		    		if(tdiff <= 60){
		    			//diff = Math.round(tdiff/60);
		    			el['createdOnStr'] = tdiff + " seconds";
		    			
		    		}
		    		else if(tdiff > 60 && tdiff <= 3600){
		    			diff = Math.round(tdiff/60);
		    			el['createdOnStr'] = diff + " minutes";
		    			
		    		}
		    		else if(tdiff > 3600 && tdiff <= 86400){
		    			diff = Math.round(tdiff/3600);
		    			el['createdOnStr'] = diff + " hours";
		    		}
		    		else if(tdiff > 86400 && tdiff <= 604800){
		    			diff = Math.round(tdiff/86400);
		    			el['createdOnStr'] = diff + " days";
		    		}
		    		else if(tdiff > 604800 && tdiff <= 18144000){
		    			diff = Math.round(tdiff/604800);
		    			el['createdOnStr'] = diff + " weeks";
		    		}
		    		else if(tdiff > 18144000 && tdiff <= 217728000){
		    			diff = Math.round(tdiff/18144000);
		    			el['createdOnStr'] = diff + " months";
		    		}
		    		else if(tdiff > 217728000){
		    			diff = Math.round(tdiff/217728000);
		    			el['createdOnStr'] = diff + " years";
		    		}
		    		else{
		    			ts = new Date(t1*1000);
		    			el['createdOnStr'] = ts.toDateString();
		    		}
	    		
		    	}
		    	
		    	console.log("Ankit :" + JSON.stringify(data));
		    	//alert(JSON.stringify(data));
		    	$("#incilist").html(citizenx.app.homeTemplate(data));
		    	
		    	$.mobile.navigate('#home');

		    },
		    error: function(){
		    	//alert("Invalid username or password");
		    	//$.mobile.navigate(nxt);
		    }
		});


    /*old Version
    $.get(AppConfig.appUrl + "/incidents", function(data) {
		$("#incilist").html(citizenx.app.homeTemplate(data));
	});*/
	}

}