/*
 * This script takes a newline-separated sctring of HTA-database style
 * references and cconverts them into standard RIS style format.
 * @param hta the original data as string
 * @return  the RIS formatted string
 */
function hta(hta) {
    var ls = hta.split("\n");
    var ret;
    for (i = 0; i < ls.length; i++) {
        l = ls[i];
        if (l.substring(0, 6) == "Record") {
            ret = ret + "TY  - RPRT";
            i++;
        } else {
            var d = l.substr(0, 3);
            var f = l.substr(4).trim();
            switch (d) {
                case "TTL":
                    ret = ret + "T1  - "+f+"\n";
                    break;
                case "PUB":
                    ret = ret + "PB  - "+f+"\n";
                    break;
                case "XYR":
                    ret = ret + "Y1  - "+f+"\n";
                    break;
                case "RUR":
                    ret = ret + "ER  - \n\n";
                    break;
                case "AUT":
                    var aus = f.split(",");
                    if (aus.length > 1) {
                        l = "";
                        for (j = 0; j < aus.length; j++) {
                            var au = aus[j].trim();
                            ret = ret + "A1  - " + au + "\n";
                        }
                        l = substr(l, 0, -1);
                    } else {
                        ret = ret + "A1  - "+f+"\n";
                    }
                    break;
                default:
                    l = "";
                    break;
            }
        }
    }
    return ret;
}