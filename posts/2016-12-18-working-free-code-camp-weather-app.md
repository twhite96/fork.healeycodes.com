---
ID: 1533
title: >
  Working on the Free Code Camp Weather
  App
# working-free-code-camp-weather-app
author: Tiffany White
date: 2016-12-18 23:18:42
layout: post
link: >
  https://tiffanywhite.tech/working-free-code-camp-weather-app/
published: true
tags:
  - AJAX
  - free code camp
  - weather app
categories:
  - Free Code Camp
---



I am working on the Free Code Camp weather app quite consistently.

Understanding the difference between `$getJSON()` and `$ajax()` to parse the JSON response from your chosen weather API is key. You *can* technically use `$getJSON` but the `$ajax` API call syntax is much easier to understand, though is more verbose. You can also customize how you get your response as well as other options.

Take:

[javascript]
$(document).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			var url = "https://api.darksky.net/forecast/<API_KEY>/" + lat + "," + lon;
			$.ajax({
				type: 'GET',
				url: url,
				dataType: "jsonp",
				success: function(data)
			)};
[/javascript]

This jQuery code has an `$ajax()` function with an object inside it. It specifies what type of ajax API call it needs, which is `GET`-- we are retrieving information from the API, in the form of a JSON response. We are passing in the API URL which we assigned to the `url` variable in the self-executing anonymous function expression `navigator.geolocation.getCurrentPosition(function(position)`. Also in the `ajax` call is the `dataType` which expects the type of data the response will give back which is most commonly jsonp, and the `success` callback.

This is fairly easy to grok if you are familiar with jQuery.

## `$.getJSON()` or `$ajax()`?

`$.getJSON(url, data, success)` is how you would use it. It's simple, not verbose, yet it is limiting.

A better `$.ajax()` example which showcases the complexity you can accomplish:

[javascript]
$.ajax({
  type: 'GET',
  url: filename,
  data: data,
  async: false,
  beforeSend: function (xhr) {
    if (xhr && xhr.overrideMimeType) {
      xhr.overrideMimeType('application/json;charset=utf-8');
    }
  },
  dataType: 'json',
  success: function (data) {
    //Do stuff with the JSON data
  }
});
[/javascript]

There are *a lot*of parameters here. Some are asking if you want to get the results asynchronously, using an `xhr` response from the server, and several other types of parameters. This gives you more control, depending on the API.

## Link to the App?





I am working on the Free Code Camp weather app quite consistently.

Understanding the difference between `$getJSON()` and `$ajax()` to parse the JSON response from your chosen weather API is key. You *can* technically use `$getJSON` but the `$ajax` API call syntax is much easier to understand, though is more verbose. You can also customize how you get your response as well as other options.

Take:

[javascript]
$(document).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			var url = "https://api.darksky.net/forecast/<API_KEY>/" + lat + "," + lon;
			$.ajax({
				type: 'GET',
				url: url,
				dataType: "jsonp",
				success: function(data)
			)};
[/javascript]

This jQuery code has an `$ajax()` function with an object inside it. It specifies what type of ajax API call it needs, which is `GET`-- we are retrieving information from the API, in the form of a JSON response. We are passing in the API URL which we assigned to the `url` variable in the self-executing anonymous function expression `navigator.geolocation.getCurrentPosition(function(position)`. Also in the `ajax` call is the `dataType` which expects the type of data the response will give back which is most commonly jsonp, and the `success` callback.

This is fairly easy to grok if you are familiar with jQuery.

## `$.getJSON()` or `$ajax()`?

`$.getJSON(url, data, success)` is how you would use it. It's simple, not verbose, yet it is limiting.

A better `$.ajax()` example which showcases the complexity you can accomplish:

[javascript]
$.ajax({
  type: 'GET',
  url: filename,
  data: data,
  async: false,
  beforeSend: function (xhr) {
    if (xhr && xhr.overrideMimeType) {
      xhr.overrideMimeType('application/json;charset=utf-8');
    }
  },
  dataType: 'json',
  success: function (data) {
    //Do stuff with the JSON data
  }
});
[/javascript]

There are *a lot*of parameters here. Some are asking if you want to get the results asynchronously, using an `xhr` response from the server, and several other types of parameters. This gives you more control, depending on the API.

## Link to the App?





It's *almost* finished. Still need to get civic data and do some CSS Kung fu. But after that, it should be ready to go. No link-- I have an API key I am using and need to keep it a secret for a bit. Once it is done I will link it up on GitHub Project Pages.