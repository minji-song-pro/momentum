$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
    getDday();
});


function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11, 5);
            $('#time').text(datetime);
        });
}

function renderQuote() {
    let url = `https://api.qwer.pw/request/helpful_text?apikey=guest`;
    // let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `${data[1]['respond']}`;
            var contents = content.split('-');
            var contents2 = null;

            if (contents[1] == null) {
                var contents2 = contents[0].split('–');
                $('#content').text('" ' + contents2[0] + ' "');
                $('#author').text(contents2[1]);
            }
            else {
                $('#content').text('" ' + contents[0] + ' "');
                $('#author').text(contents[1]);
            }
        });
}

function getDday() {
    var today = new Date().getDate();
    var test_date = 24 - today;
    $('#dday').text("D-" + test_date);

}