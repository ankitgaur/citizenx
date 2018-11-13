var loginService = {
		
		login(nxt){
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
			
			
		}
}