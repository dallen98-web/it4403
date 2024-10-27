function BookSearchPg1() {
    var term = document.getElementById('textbox').value
    document.getElementById('results').innerHTML = ""
    console.log(term)

   
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes/?q=" + term + "&startIndex=0&maxResults=10",
        datatype: "json",

        success: function (json) {
            console.log(json)
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        },

        type: 'GET'
    });

}
function BookSearchPg2() {
    var term = document.getElementById('textbox').value
    document.getElementById('results').innerHTML = ""
    console.log(term)


    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes/?q=" + term + "&startIndex=10&maxResults=10",
        datatype: "json",

        success: function (json) {
            console.log(json)
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        },

        type: 'GET'
    });

}
function BookSearchPg3() {
    var term = document.getElementById('textbox').value
    document.getElementById('results').innerHTML = ""
    console.log(term)


    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes/?q=" + term + "&startIndex=20&maxResults=10",
        datatype: "json",

        success: function (json) {
            console.log(json)
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        },

        type: 'GET'
    });

}
function BookSearchPg4() {
    var term = document.getElementById('textbox').value
    document.getElementById('results').innerHTML = ""
    console.log(term)


    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes/?q=" + term + "&startIndex=30&maxResults=10",
        datatype: "json",

        success: function (json) {
            console.log(json)
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        },

        type: 'GET'
    });

}
function BookSearchPg5() {
    var term = document.getElementById('textbox').value
    document.getElementById('results').innerHTML = ""
    console.log(term)


    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes/?q=" + term + "&startIndex=40&maxResults=10",
        datatype: "json",

        success: function (json) {
            console.log(json)
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        },

        type: 'GET'
    });

}
