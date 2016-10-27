var ids = document.getElementsByClassName("searchhistory-col-Num");
var terms = document.getElementsByClassName("searchhistory-search-term");
var hits = document.getElementsByClassName("searchhistory-col-Results");
var out1 = "";
var out2 = "";
for (var i = 0; i < ids.length - 1; i++) {
    var id = ids[i + 1].innerHTML;
    var term = terms[i].innerHTML.trim();
    var hit = hits[i + 1].innerHTML;
    out1 = out1 + id + "\t" + term + "\t" + hit + "\n";
    out2 = out2 + term + "\n";
}
var h = document.getElementById("ovidsh_display");
if (h == null) {
    console.log("Creating div");
    h = document.createElement("div");
    var first = document.body.firstChild;
    document.body.insertBefore(h,first);
    //document.body.appendChild(h);
} else {
    h.style.display = "initial";
    console.log("Div exists");
}
h.innerHTML = "<div style='width: 100%;background: #fff;position: relative;padding: 20px; border-bottom: 1px solid #777;' id='ovidsh_display'>OvidSH (<a href='javascript:var h = document.getElementById(\"ovidsh_display\");h.style.display = \"none\";void(0);'>Close this window</a>)<hr/><pre>" + out1 + "<br/><br/>" + out2 + "</pre></div>";