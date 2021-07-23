const SERVER_URL = "/server";
let xhr = new XMLHttpRequest(), url = ""
//创建http请求
xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    //请求成功时
    if (this.status === 200) {
        handle(this.response);
    } else {
        console.error(this.statusText);
    }
}
xhr.onerror = function () {
    console.error(this.statusText);
}
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', "application/json");

xhr.send(null);