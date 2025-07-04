//通用header
fetch('header.html')
.then(res => res.text())
.then(html => {
    document.getElementById('common-header').innerHTML = html;
});

//通用footer
fetch('footer.html')
.then(res => res.text())
.then(html => {
    document.getElementById('common-footer').innerHTML = html;
});
