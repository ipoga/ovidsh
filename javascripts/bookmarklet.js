var ids = document.getElementsByClassName("searchhistory-col-Num");
var terms = document.getElementsByClassName("searchhistory-search-term");
var hits = document.getElementsByClassName("searchhistory-col-Results");
var out1 = "";
var out2 = "";
for (var i = 0; i < ids.length - 1; i++) {
    var id = ids[i + 1].innerHTML;
    var term = terms[i].innerHTML;
    var hit = hits[i + 1].innerHTML;
    out1 = out1 + id + "\t" + term + "\t" + hit + "\n";
    out2 = out2 + term + "\n";
}
var h = document.getElementById("ovidsh_display");
if (h == null) {
    console.log("Creating div");
    h = document.createElement("div");
    document.body.appendChild(h);
} else {
    h.style.display = "block";
    h.style.width = "640px";
    h.style.height = "480px";
    console.log("Div exists");
}
h.innerHTML = "<div width='480' height='640' style='background: #fff;position: absolute;top: 20px;left: 20px; padding: 20px; border: 1px solid #777;resize:both;overflow: auto;z-index:999' id='ovidsh_display'>OvidSH (<a href='javascript:var h = document.getElementById(\"ovidsh_display\");h.style.display = \"none\";void(0);'>Close this window</a>)<hr/><pre>" + out1 + "<br/><br/>" + out2 + "</pre></div>";