/*
 * This script takes a newline-separated sctring of HTA-database style
 * references and cconverts them into standard RIS style format.
 * @param hta the original data as string
 * @return  the RIS formatted string
 */
function hta(hta) {
    var ls = hta.split("\n");
    var l;
    for (i = 0; i < ls.length; i++) {
        l = ls[i];
        if (l.substring(0, 6) == "Record") {
            l = "TY  - RPRT";
            i++;
        } else {
            var d = l.substr(0, 3);
            var f = l.substr(4).trim();
            switch (d) {
                case "TTL":
                    l = "T1  - $f";
                    break;
                case "PUB":
                    l = "PB  - $f";
                    break;
                case "XYR":
                    l = "Y1  - $f";
                    break;
                case "RUR":
                    l = "ER  - \n";
                    break;
                case "AUT":
                    var aus = f.split(",");
                    if (aus.length > 1) {
                        l = "";
                        for (j = 0; j < aus.length; j++) {
                            var au = aus[j].trim();
                            l = l + "A1  - " + au + "\n";
                        }
                        l = substr(l, 0, -1);
                    } else {
                        l = "A1  - $f";
                    }
                    break;
                default:
                    l = "";
                    break;
            }
        }
    }
    return l;
}