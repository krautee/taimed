function valjastada_lehekylg(string)
{
  parent.kooslusp.document.open("text/html")
  parent.kooslusp.document.writeln("<BODY background=../general/images/1HTtaust.gif><UL>")
  parent.kooslusp.document.writeln("<CENTER><br><img src=../general/titles/P-otstul.gif><br><br></CENTER>")
  parent.kooslusp.document.writeln(string)
//  parent.kooslusp.document.writeln("<FORM><INPUT TYPE=button VALUE=Tagasi NAME=Tagasi onClick='history.back()'</FORM><p>")
  parent.kooslusp.document.writeln("</UL></BODY>")
  parent.kooslusp.document.close()
}

function otsida(form)
{
  vastus = document.KetLugTaim.OtsiStringi(form.otsitav.value)
  linkide_arv = document.KetLugTaim.linkideArv
  if (linkide_arv == 0) valjastada_lehekylg("<br><font color=\"#000000\" size=\"3\" face=\"Arial\">Kahjuks ei leidnud s&otilde;na</font><font color=\"#006000\" size=\"3\" face=\"Arial\"><b> " + form.otsitav.value + " </b></font><font color=\"#000000\" size=\"3\" face=\"Arial\"> j&auml;rgi otsides midagi.</font>")
  else {
    parent.kooslusp.document.open("text/html")
    parent.kooslusp.document.writeln("<HEAD>")
    parent.kooslusp.document.writeln("<CENTER><br><img src=../general/titles/P-otstul.gif><br><br></CENTER>")
    parent.kooslusp.document.writeln("<TITLE>Otsiti s&otilde;na " + form.otsitav.value + " . See esines j&auml;rgmistel lehtedel</TITLE>")
//    parent.kooslusp.document.writeln("<base target=algframe>")
    parent.kooslusp.document.writeln("</HEAD>")
    parent.kooslusp.document.writeln("<BODY background=../general/images/1HTtaust.gif><UL>")
//    parent.kooslusp.document.writeln("<FORM><INPUT TYPE=button VALUE=Tagasi NAME=Tagasi onClick='history.back()'</FORM><p>")
    parent.kooslusp.document.writeln("<font color=\"#000000\" size=\"3\" face=\"Arial\">Otsiti s&otilde;na</font><font color=\"#006000\" size=\"3\" face=\"Arial\"><b> " + form.otsitav.value + "</b></font>.<br><font color=\"#000000\" size=\"3\" face=\"Arial\"> See esines " + linkide_arv + " lehel:</font><p><blockquote>")
    lopp = 0
    for (i = 0; i < linkide_arv; ++i)
    {
      algus = lopp
      lopp = vastus.indexOf("|", algus+1)
      valjastatav = "<li><a href=../" + vastus.substring(algus+1, lopp) + " style=\"color: rgb(0,0,0)\" left-margin=\"50\"><font color=\"#000000\" size=\"2\" face=\"Arial\">"
      algus = lopp
      lopp = vastus.indexOf("|", algus+1)
      valjastatav = valjastatav + vastus.substring(algus+1, lopp) + "</font></a ></li><br>"
      parent.kooslusp.document.writeln(valjastatav)
    }
    parent.kooslusp.document.writeln("</p></blockquote></UL></BODY>")
    parent.kooslusp.document.close()
  }
}
