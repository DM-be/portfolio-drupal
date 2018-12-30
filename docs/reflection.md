
# Reflectie

Voor deze opdracht heb ik gebruik gemaakt van een custom theme in Drupal. 
Om dit te kunnen maken heb ik gebruik gemaakt van twig templates. Deze templates worden actief, op basis van template hooks.
Het was niet makkelijk om te zien welke templates nu precies gebruikt zullen worden, ook de documentatie was soms niet zo duidelijk.
Dit heb ik kunnen oplossen door debugging te configureren waardoor ik bij het laden in de inspector kon zien welke template wanneer geladen werd.

Vanaf dan kon ik werken zoals in Wordpress, de pagina's overriden en zelf bepalen wat er op de pagina komt.
Dit ging niet zo makkelijk. Bij Drupal moet je heel vaak de caches legen in het configuratie menu. Bijvoorbeeld bij het maken van een nieuwe template moet dit altijd gebeuren.
Ook wanneer ik langs het menu van Drupal de waarden zou veranderen die terecht komen in het template, moest ik de caches legen.
Hierdoor heb ik soms lang vastgelopen op bepaalde dingen die eigenlijk puur door de cache verkeerd werden geladen.
Uiteindelijk werd de cache pagina een bookmark. 

Maken van custom post types was wel makkelijk, ook het filteren ervan was duidelijk. Dit deed ik in de views pagina. 
Om de articles en projects te laden heb ik gebruik gemaakt van een alternatieve manier, waar ik html kon laten genereren in plaats van een bepaalde waarde.
Dit kon in principe ook met een template op block niveau. 

Het hosten was niet makkelijk. Waar bij Wordpress de duplicator heel makkelijk werkt, was het bij Drupal erg moeilijk.
Ik kreeg de backup and migrate plugin bijna niet werkende om een backup te maken. Na veel foutmeldingen kreeg ik uiteindelijk een backup file.
Dit kon met de restore optie niet worden gerestored in pantheon, ook hier kreeg ik foutmeldingen. 

Uiteindelijk heb ik de database werkende gekregen in pantheon en dan de rest van de bestanden en plugins opnieuw moeten configureren en installeren.

## conclusie
Ik kan snappen dat Drupal een hogere leercurve heeft dan Wordpress. Ook zie ik in dat het meer configureerbaar is. Doordat alles werkt met blocks en nodes.
Het is wel moeilijker om van start mee te gaan.
Het aantal menu's in Drupal vind ik overdreven. Het was soms echt heel ver zoeken naar een bepaalde knop dat ik nodig had. 

# Timesheet

Op vlak van tijdsinvestering kom ik op 15u uit. Hiervan 3 uur om de hosting werkende te krijgen. Ook heb ik veel tijd verloren met cache problemen.
