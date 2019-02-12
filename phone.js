$(document).ready(function() { 
    $("#tab_bar").show();
    $("#tab_bar").addClass("end");
    $("#DialerUp").addClass("end");
    $("#ContactListUp").addClass("end");
    $("#AddContactUp").addClass("end");
    $("#Help").addClass("end");    
    $("#content_dialer").show(); 
    $("#content_addcontact").hide();
    $("#content_list").hide();
    $("#content_help").hide();
 

    $("#DialerUp").click(function() { 
    if($(this).hasClass("end")){
        $(this).removeClass("end");
        $(this).addClass("start");
        $("#ContactListUp").addClass("end");
        $("#AddContactUp").addClass("end");
        $("#Help").addClass("end");
        }else{
        $("#ContactListUp").addClass("end");
        $("#AddContactUp").addClass("end");
        $("#Help").addClass("end");
        };
   
    $("#tab_bar").show();
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_addcontact").hide(); 
    $("#content_help").hide(); 
});      
    $("#ContactListUp").click(function() {
    if($(this).hasClass("end")){
        $(this).removeClass("end");
        $(this).addClass("start");
        $("#DialerUp").addClass("end");
        $("#AddContactUp").addClass("end");
        $("#Help").addClass("end");
    }else{
        $("#DialerUp").addClass("end");
        $("#AddContactUp").addClass("end");
        $("#Help").addClass("end");
        };   
   
    $("#tab_bar").show(); 
    $("#content_list").show();
    $("#content_dialer").hide(); 
    $("#content_addcontact").hide();
    $("#content_help").hide();
}); 
    $("#AddContactUp").click(function() { 
    if($(this).hasClass("end")){
        $(this).removeClass("end");
        $(this).addClass("start");
        $("#ContactListUp").addClass("end");
        $("#DialerUp").addClass("end");
        $("#Help").addClass("end");
    }else{
        $("#ContactListUp").addClass("end");
        $("#DialerUp").addClass("end"); 
        $("#Help").addClass("end");  
        };     
     
    $("#tab_bar").show(); 
    $("#content_addcontact").show();
    $("#content_dialer").hide(); 
    $("#content_list").hide();
    $("#content_help").hide();
 });
 $("#Help").click(function() { 
    if($(this).hasClass("end")){
        $(this).removeClass("end");
        $(this).addClass("start");
        $("#ContactListUp").addClass("end");
        $("#DialerUp").addClass("end");
        $("#AddContactUp").addClass("end");
        
        
    }else{
        $("#ContactListUp").addClass("end");
        $("#DialerUp").addClass("end"); 
        $("#AddContactUp").addClass("end");
          
        };     
     
    $("#tab_bar").show(); 
    $("#content_help").show();
    $("#content_dialer").hide(); 
    $("#content_list").hide();
    $("#content_addcontact").hide();
 });

    $("#dial_pad button").click(function() {
        $("#number").val($("#number").val() + this.innerText);
});

    $("#clearnum").click(function() {
	    $("#number").val("");
});

}); 

 
 
   
   

    
           