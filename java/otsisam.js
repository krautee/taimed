function valjastada_lehekylg(string)
{
  parent.otsingsammal.document.open("text/html")
  parent.otsingsammal.document.writeln("<BODY background=../general/images/1HTtaust.gif><UL>")
  parent.otsingsammal.document.writeln("<CENTER><br><img src=../general/titles/P-otstul.gif><br><br></CENTER>")
  parent.otsingsammal.document.writeln(string)
//  parent.otsingsammal.document.writeln("<FORM><INPUT TYPE=button VALUE=Tagasi NAME=Tagasi onClick='history.back()'</FORM><p>")
  parent.otsingsammal.document.writeln("</UL></BODY>")
  parent.otsingsammal.document.close()
}

function otsida(form)
{
  vastus = document.KetLugTaim.OtsiStringi(form.otsitav.value)
  linkide_arv = document.KetLugTaim.linkideArv
  if (linkide_arv == 0) valjastada_lehekylg("<br><font color=\"#000000\" size=\"3\" face=\"Arial\">Kahjuks ei leidnud s&otilde;na</font><font color=\"#006000\" size=\"3\" face=\"Arial\"><b> " + form.otsitav.value + " </b></font><font color=\"#000000\" size=\"3\" face=\"Arial\"> j&auml;rgi otsides midagi.</font>")
  else {
    parent.otsingsammal.document.open("text/html")
    parent.otsingsammal.document.writeln("<HEAD>")
    parent.otsingsammal.document.writeln("<CENTER><br><img src=../general/titles/P-otstul.gif><br><br></CENTER>")
    parent.otsingsammal.document.writeln("<TITLE>Otsiti s&otilde;na " + form.otsitav.value + " . See esines j&auml;rgmistel lehtedel</TITLE>")
//    parent.otsingsammal.document.writeln("<base target=algframe>")
    parent.otsingsammal.document.writeln("</HEAD>")
    parent.otsingsammal.document.writeln("<BODY background=../general/images/1HTtaust.gif><UL>")
//    parent.otsingsammal.document.writeln("<FORM><INPUT TYPE=button VALUE=Tagasi NAME=Tagasi onClick='history.back()'</FORM><p>")
    parent.otsingsammal.document.writeln("<font color=\"#000000\" size=\"3\" face=\"Arial\">Otsiti s&otilde;na</font><font color=\"#006000\" size=\"3\" face=\"Arial\"><b> " + form.otsitav.value + "</b></font>.<br><font color=\"#000000\" size=\"3\" face=\"Arial\"> See esines " + linkide_arv + " lehel:</font><p><blockquote>")
    lopp = 0
    for (i = 0; i < linkide_arv; ++i)
    {
      algus = lopp
      lopp = vastus.indexOf("|", algus+1)
      valjastatav = "<li><a href=../" + vastus.substring(algus+1, lopp) + " style=\"color: rgb(0,0,0)\" left-margin=\"50\"><font color=\"#000000\" size=\"2\" face=\"Arial\">"
      algus = lopp
      lopp = vastus.indexOf("|", algus+1)
      valjastatav = valjastatav + vastus.substring(algus+1, lopp) + "</font></a ></li><br>"
      parent.otsingsammal.document.writeln(valjastatav)
    }
    parent.otsingsammal.document.writeln("</p></blockquote></UL></BODY>")
    parent.otsingsammal.document.close()
  }
}
