function BookSearchPg1() {
    //var term = document.getElementById('textbox').value
            
                    $("#results").html("Displaying Results ...");
                    $.getJSON("https://www.googleapis.com/books/v1/volumes/?q=" + $("#textbox").val() + "&startIndex=0&maxResults=10", function (jsonData) {
                        $("#results").html("");
                        var template = $('#booktemplate').html();
                        var html = Mustache.render(template, jsonData);
                        $("#results").html(html);
                    });
                
            
}
function BookSearchPg2() {
    var term = document.getElementById('textbox').value
 
    $("#results").html("Displaying Results ...");
    $.getJSON("https://www.googleapis.com/books/v1/volumes/?q=" + $("#textbox").val() + "&startIndex=10&maxResults=10", function (jsonData) {
        $("#results").html("");
        var template = $('#booktemplate').html();
        var html = Mustache.render(template, jsonData);
        $("#results").html(html);
    });


}
function BookSearchPg3() {
    var term = document.getElementById('textbox').value
    
    $("#results").html("Displaying Results ...");
    $.getJSON("https://www.googleapis.com/books/v1/volumes/?q=" + $("#textbox").val() + "&startIndex=20&maxResults=10", function (jsonData) {
        $("#results").html("");
        var template = $('#booktemplate').html();
        var html = Mustache.render(template, jsonData);
        $("#results").html(html);
    });


}
function BookSearchPg4() {
    var term = document.getElementById('textbox').value
    
    $("#results").html("Displaying Results ...");
    $.getJSON("https://www.googleapis.com/books/v1/volumes/?q=" + $("#textbox").val() + "&startIndex=30&maxResults=10", function (jsonData) {
        $("#results").html("");
        var template = $('#booktemplate').html();
        var html = Mustache.render(template, jsonData);
        $("#results").html(html);
    });


}
function BookSearchPg5() {
    var term = document.getElementById('textbox').value
   
    $("#results").html("Displaying Results ...");
    $.getJSON("https://www.googleapis.com/books/v1/volumes/?q=" + $("#textbox").val() + "&startIndex=40&maxResults=10", function (jsonData) {
        $("#results").html("");
        var template = $('#booktemplate').html();
        var html = Mustache.render(template, jsonData);
        $("#results").html(html);
    });


}
function BookInfo() {
    var x = document.getElementById("BookDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}