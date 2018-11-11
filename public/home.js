

let arr = [
    ["#ceo-books", "/books"],
    ["#ceo-directory", "/directory"],
    ["#ceo-events", "/events"],
    ["#ceo-apparel", "https:/ceo-baruch.myshopify.com"],
    ["#ceo-slack", "https://join.slack.com/t/baruchceo/shared_invite/enQtNDAyNzMzMzAzNzk4LTczYmZlNDRiZWFjZmRlYTRjYjFiZTA5NTNlZGIwZTY2OWEzODIyMzAxYWU0N2Q0YWYyZjM3NTc3MGJhYzYyNTE"],
    ["#ceo-blog", "https://medium.com/@collin.reed112/"],
    ["#ceo-forum", "/forum"]
];


arr.forEach(el => {
    document.querySelector(el[0]).addEventListener('click', function(){
        window.location.href = el[1];
    })
});