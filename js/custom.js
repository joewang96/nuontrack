// ----------- Smooth Scroll Functions --------------
$("#scroll-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#marketing").offset().top},
        'slow');
});

$("#home-brand").click(function() {
    $('html,body').animate({
        scrollTop: $("#top").offset().top},
        'slow');
});

// ---------------- Check if login is valid functions -------------

$('#log-email').change(function(e){
  if($('#log-email').val() == "" || $('#log-pass').val() == ""){
     $("#submit-login").prop('disabled',true);
   }
  else {
    $("#submit-login").prop('disabled',false);
  }
});

$('#log-pass').change(function(e){
  if($('#log-email').val() == "" || $('#log-pass').val() == ""){
     $("#submit-login").prop('disabled',true);
   }
  else {
    $("#submit-login").prop('disabled',false);
  }
});

// ------------ Check if new account is valid -------------------

$('#acc-email').change(function(e){
  if($('#acc-email').val() == "" || $('#acc-pass').val() == "" || $('#acc-id').val() == "" || $('#acc-confirm').val() == ""){
     $("#submit-acc").prop('disabled',true);
   }
  else {
    $("#submit-acc").prop('disabled',false);
  }
});

$('#acc-id').change(function(e){
  if($('#acc-email').val() == "" || $('#acc-pass').val() == "" || $('#acc-id').val() == "" || $('#acc-confirm').val() == ""){
     $("#submit-acc").prop('disabled',true);
   }
  else {
    $("#submit-acc").prop('disabled',false);
  }
});

$('#acc-pass').change(function(e){
  if($('#acc-email').val() == "" || $('#acc-pass').val() == "" || $('#acc-id').val() == "" || $('#acc-confirm').val() == ""){
     $("#submit-acc").prop('disabled',true);
   }
  else {
    $("#submit-acc").prop('disabled',false);
  }
});

$('#acc-confirm').change(function(e){
  if($('#acc-email').val() == "" || $('#acc-pass').val() == "" || $('#acc-id').val() == "" || $('#acc-confirm').val() == ""){
     $("#submit-acc").prop('disabled',true);
   }
  else {
    $("#submit-acc").prop('disabled',false);
  }
});

// ------------ Popover and Toggle Functions --------------

$(function () {
  $('[data-toggle="popover"]').popover()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.clickable').click( function() {
    window.location = $(this).find('a').attr('href');
}).hover( function() {
    $(this).toggleClass('hover');
});

$(".expand").click(function () {
   $(this).toggleClass("red");
});

$(".expand").click(function () {
   $(".prof-menu").toggleClass("visible");
});

// --------- Now for modal changing login to register and vice versa -----

$("#btn-login").click(function () {
   $("#account-mod").addClass("hidden");
   $("#login-mod").removeClass("hidden");
});

$("#btn-create").click(function () {
   $("#login-mod").addClass("hidden");
   $("#account-mod").removeClass("hidden");
});

$(".login-js").click(function () {
   $("#account-mod").addClass("hidden");
   $("#login-mod").removeClass("hidden");
});

$(".account-js").click(function () {
   $("#login-mod").addClass("hidden");
   $("#account-mod").removeClass("hidden");
});

// --------- The part that toggles disable/enable for input -----------

$(".disable-enable").click(function () {
   $(this).toggleClass("red");
});

$("#edit1").click(function () {
   document.getElementById("input-pref").disabled = !document.getElementById("input-pref").disabled;
   document.getElementById("input-password").disabled = !document.getElementById("input-password").disabled;
});

$("#edit2").click(function () {
   document.getElementById("user-email").disabled = !document.getElementById("user-email").disabled;
   document.getElementById("user-sms").disabled = !document.getElementById("user-sms").disabled;
   document.getElementById("user-car").disabled = !document.getElementById("user-car").disabled;
   document.getElementById("user-linkedin").disabled = !document.getElementById("user-linkedin").disabled;
   document.getElementById("user-skype").disabled = !document.getElementById("user-skype").disabled;
});

// --------- For the custom file input button to show the file you chose ------ 

$("#upload-file").change(function(){
	if($('#upload-file').get(0).files.length != 0){
		$('#upload-label').addClass("file-complete");
		var fileName = $(this).val().split('/').pop().split('\\').pop();
		$('#file-extension').text(fileName);
	}
	else {
		$('#upload-label').removeClass("file-complete");
	}
});



// ---------------- Scripts to disable one select based on another -------------- 
$('#apply-package').change(function(e){
  if($(this).val() != "default"){
     $("#apply-new").prop('disabled',true);
   }
  else {
    $("#apply-new").prop('disabled',false);
  }
});

$('#apply-new').change(function(e){
  if($(this).val() != "default"){
     $("#apply-package").prop('disabled',true);
   }
  else {
    $("#apply-package").prop('disabled',false);
  }
});

// -------------- Scripts to disallow submit if nothing is chosen --------------

$('#apply-new').change(function(e){
  if($(this).val() == "default" && $('#apply-package').val() == "default"){
     $("#submit-app").prop('disabled',true);
   }
  else {
    $("#submit-app").prop('disabled',false);
  }
});

$('#apply-package').change(function(e){
  if($(this).val() == "default" && $('#apply-new').val() == "default"){
     $("#submit-app").prop('disabled',true);
   }
  else {
    $("#submit-app").prop('disabled',false);
  }
});

$('#job-info-priority').change(function(e){
  if($(this).val() == "default"){
     $("#submit-prior").prop('disabled',true);
   }
  else {
    $("#submit-prior").prop('disabled',false);
  }
});

$('#event-interest').change(function(e){
  if($(this).val() == "default"){
     $("#submit-event").prop('disabled',true);
   }
  else {
    $("#submit-event").prop('disabled',false);
  }
});

$('#upload-file').change(function(e){
  if($('.file-choices').val() == "default" || $('#filename').val() == "" || $('#upload-file').get(0).files.length === 0){
     $("#submit-file").prop('disabled',true);
   }
  else {
    $("#submit-file").prop('disabled',false);
  }
});

$('.file-choices').change(function(e){
  if($('.file-choices').val() == "default" || $('#filename').val() == "" || $('#upload-file').get(0).files.length === 0){
     $("#submit-file").prop('disabled',true);
   }
  else {
    $("#submit-file").prop('disabled',false);
  }
});

$('#filename').change(function(e){
  if($('.file-choices').val() == "default" || $('#filename').val() == "" || $('#upload-file').get(0).files.length === 0){
     $("#submit-file").prop('disabled',true);
   }
  else {
    $("#submit-file").prop('disabled',false);
  }
});

// ------------------ Scripts for the Timeline functionality -------------------------

$(".time-point").click(function () {
   var id = $(this).attr('id');
   if(id == 'time1') {
   	$("#time-head").text("First Resume Referral");
   	$("#time-date").text("October 1, 2016");
   	$("#time-time").text("N/A");
   	$("#time-body").text("The first round of resumes will be sent out during this time. In order for students to be allowed to send out their resume, they must meet with their Co-Op Advisor, have their resume approved, and perform any other tasks required of by the student's individual college.");
   	$('#time1').addClass('current-point');
   $('#time2').removeClass('current-point');
   $('#time3').removeClass('current-point');
   $('#time4').removeClass('current-point');
   $('#time5').removeClass('current-point');
   $('#time6').removeClass('current-point');
   }
   else if(id == 'time2') {
   	$("#time-head").text("Apple Interview");
   	$("#time-date").text("October 5, 2016");
   	$("#time-time").text("10:00 AM - 2:00 PM");
   	$("#time-body").text("Interview with Apple at this date and time. The interview will be conducted on campus, consisting of two parts. The first part of the interview will be conducted over Skype, talking with various developers in California. The second part will be conducted by the on-site interviewer.");
   	$('#time1').removeClass('current-point');
   $('#time2').addClass('current-point');
   $('#time3').removeClass('current-point');
   $('#time4').removeClass('current-point');
   $('#time5').removeClass('current-point');
   $('#time6').removeClass('current-point');

   }
   else if(id == 'time3') {
   	$("#time-head").text("Meeting with Advisor");
   	$("#time-date").text("October 20, 2016");
   	$("#time-time").text("11:40 AM - 12:00 PM");
   	$("#time-body").text("Meeting with your Co-Op Advisor at this date and time. Make sure to arrive about five minutes early. This meeting will discuss any new updates in the Co-Op search and any questions can be asked during this time.");
   	$('#time1').removeClass('current-point');
   $('#time2').removeClass('current-point');
   $('#time3').addClass('current-point');
   $('#time4').removeClass('current-point');
   $('#time5').removeClass('current-point');
   $('#time6').removeClass('current-point');

   }
   else if(id == 'time4') {
   	$("#time-head").text("CCIS Expo Event");
   	$("#time-date").text("November 3, 2016");
   	$("#time-time").text("6:00 PM - 9:00 PM");
   	$("#time-body").text("The College of Computer and Information Sciences is putting on a Co-Op Expo, allowing students searching for Co-Ops to meet with potential employers and begin networking. The event will be held in the Curry Student Center Ballroom, and registration is required.");
   	$('#time1').removeClass('current-point');
   $('#time2').removeClass('current-point');
   $('#time3').removeClass('current-point');
   $('#time4').addClass('current-point');
   $('#time5').removeClass('current-point');
   $('#time6').removeClass('current-point');

   }
   else if(id == 'time5') {
   	$("#time-head").text("State Street Interview");
   	$("#time-date").text("December 13, 2016");
   	$("#time-time").text("3:00 PM - 5:00 PM");
   	$("#time-body").text("Interview with State Street at this date and time. The interview will take place at their office located in Downtown Boston. Make sure to arrive early and bring copies of your most current resume.");
   	$('#time1').removeClass('current-point');
   $('#time2').removeClass('current-point');
   $('#time3').removeClass('current-point');
   $('#time4').removeClass('current-point');
   $('#time5').addClass('current-point');
   $('#time6').removeClass('current-point');

   }
   else if(id == 'time6') {
   	$("#time-head").text("Final Resume Referrals");
   	$("#time-date").text("January 1, 2017");
   	$("#time-time").text("N/A");
   	$("#time-body").text("The last round of resumes will be sent out during the first week of January. Students will still be allowed to continue their search into early February, however no new applications will be sent beyond this date. Students should make sure to apply to all of their desired positions before this date.");
   	$('#time1').removeClass('current-point');
   $('#time2').removeClass('current-point');
   $('#time3').removeClass('current-point');
   $('#time4').removeClass('current-point');
   $('#time5').removeClass('current-point');
   $('#time6').addClass('current-point');

   }
});

// ---------------- Check if adding a new timeline event is valid -------------

$('#input-time-title').change(function(e){
  if($('#input-time-title').val() == "" || $('#input-time-date').val() == "" || $('#input-time-time').val() == "" || $('#input-time-desc').val() == ""){
     $("#submit-time").prop('disabled',true);
   }
  else {
    $("#submit-time").prop('disabled',false);
  }
});

$('#input-time-date').change(function(e){
  if($('#input-time-title').val() == "" || $('#input-time-date').val() == "" || $('#input-time-time').val() == "" || $('#input-time-desc').val() == ""){
     $("#submit-time").prop('disabled',true);
   }
  else {
    $("#submit-time").prop('disabled',false);
  }
});

$('#input-time-time').change(function(e){
  if($('#input-time-title').val() == "" || $('#input-time-date').val() == "" || $('#input-time-time').val() == "" || $('#input-time-desc').val() == ""){
     $("#submit-time").prop('disabled',true);
   }
  else {
    $("#submit-time").prop('disabled',false);
  }
});

$('#input-time-desc').change(function(e){
  if($('#input-time-title').val() == "" || $('#input-time-date').val() == "" || $('#input-time-time').val() == "" || $('#input-time-desc').val() == ""){
     $("#submit-time").prop('disabled',true);
   }
  else {
    $("#submit-time").prop('disabled',false);
  }
});













