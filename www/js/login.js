var loginService = {
		
		register: function(){
			
			name = $("#name").val();
			email = $("#email").val();
			username = $("#username").val();
			password = $("#password").val();
			
			$.ajax({
			    /*xhrFields: {
			        withCredentials: true
			    },
			    headers: {
			        'Authorization': 'Basic ' + AppConfig.key
			    },*/
			    type: "PUT",
			    url: AppConfig.appUrl + '/user/register/',
			    contentType: 'application/json',
			    dataType: 'json',
			    data: JSON.stringify({ name: name, email: email,username: username,password: password }),
			    success: function(data){
			    	
			    	if(data.status){
			    		alert("Please login using your credentials.");
				    	$.mobile.changePage('#signin');
				    	
			    	}
			    	else{
			    		alert("User registration failed : " + data.error);
			    	}
			    	
			    	
			    }
			});
			
		},
		
		login: function(nxt){
			
			
			uid = $("#txt-id").val();
			pass = $("#txt-password").val();
			
			//alert("login"+uid+pass+nxt);
			
			//var key = btoa(uid+':'+pass);

			//save the key somewhere - I am saving it in memory
			//AppConfig.key = key;

			
			$.ajax({
			    /*xhrFields: {
			        withCredentials: true
			    },
			    headers: {
			        'Authorization': 'Basic ' + AppConfig.key
			    },*/
			    type: "POST",
			    url: AppConfig.appUrl + '/user/login/',
			    contentType: 'application/json',
			    dataType: 'json',
			    data: JSON.stringify({ username: uid, password: pass }),
			    success: function(data){
			    	//alert("Login Successful");
			    	//console.log("Ankit resp : " + data);
			    	//console.log("Ankit resp : " + data.token);
			    	//console.log(data);
			    	//alert(data);
			    	
			    	if(data.status){
			    		AppConfig.token = data.data;
			    		incidentService.refresh();
				    	//$.mobile.changePage(nxt);
				    	
			    	}
			    	else{
			    		alert("Invalid username or password");
			    		$.mobile.navigate("#signin");
			    	}
			    	
			    	
			    }/*,
			    error: function(){
			    	alert("Invalid username or password");
			    	//$.mobile.changePage(nxt);
			    }*/
			});
			
			
		}
		
		
		/*old version*/
		/*login(nxt){
			uid = $("#txt-id").val();
			pass = $("#txt-password").val();
			
			var key = btoa(uid+':'+pass);

			//save the key somewhere - I am saving it in memory
			AppConfig.key = key;

			
			$.ajax({
			    xhrFields: {
			        withCredentials: true
			    },
			    headers: {
			        'Authorization': 'Basic ' + AppConfig.key
			    },
			    url: AppConfig.appUrl + 'login',
			    success: function(data){
			    	//alert("Login Successful");
			    	//console.log("Ankit resp : " + data);
			    	//console.log("Ankit resp : " + data.token);
			    	
			    	AppConfig.token = data.token;
			    	$.mobile.changePage(nxt);
			    },
			    error: function(){
			    	alert("Invalid username or password");
			    	//$.mobile.changePage(nxt);
			    }
			});
			
			
		}*/
}