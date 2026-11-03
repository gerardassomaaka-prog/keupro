/* Keupro — application de gestion des passages de grade de taekwondo */
const DEMO = {"baremes":{"8":[["présentation",10,"T"],["Philosophie et ECM",30,"T"],["Lexique",30,"T"],["Histoire",30,"T"],["Postures",15,"P"],["Parades simples",15,"P"],["Attaques simples du poing",10,"P"],["Attaques simples du pied",60,"P"]],"7":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de combat",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",80,"P"],["Hanbeon Kyorugi",40,"P"],["Technique de compétition",40,"P"]],"6":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de combat",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",60,"P"],["Hanbeon Kyorugi",30,"P"],["Technique de compétition",30,"P"],["Jahu Kyorugi",40,"P"]],"5":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de combat",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",60,"P"],["Hoshinsul",10,"P"],["Hanbeon Kyorugi",20,"P"],["Technique de compétition",30,"P"],["Jahu Kyorugi",40,"P"]],"4":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de poomsae",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",60,"P"],["Hoshinsul",10,"P"],["Hanbeon Kyorugi",20,"P"],["Technique de compétition",30,"P"],["Jahu Kyorugi",40,"P"]],"3":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de poomsae",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",60,"P"],["Hoshinsul",10,"P"],["Hanbeon Kyorugi",20,"P"],["Technique de compétition",30,"P"],["Jahu Kyorugi",40,"P"]],"2":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de poomsae",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",60,"P"],["Hoshinsul",10,"P"],["Hanbeon Kyorugi",20,"P"],["Technique de compétition",30,"P"],["Jahu Kyorugi",40,"P"]],"1":[["présentation",10,"T"],["Philosophie et ECM",10,"T"],["Lexique",10,"T"],["Histoire",10,"T"],["Règles de compétition de poomsae",10,"T"],["Postures",10,"P"],["Membres supérieurs",30,"P"],["Membres inférieurs",50,"P"],["Poomsae",60,"P"],["Hoshinsul",10,"P"],["Hanbeon Kyorugi",20,"P"],["Technique de compétition",30,"P"],["Jahu Kyorugi",40,"P"]]},"s1":[["AKA EMMANUEL","","8",[9,8,19,20,10,10,6,40]],["ADOU FATOU","","8",null],["ZOUZOU DIDIER","","8",[8,8,20,25,10,15,6,42]],["DAGO MARC-AURELE","","8",[8,8,20,20,10,10,6,43]],["ANGORA PATRICK","","8",[9,8,22,25,10,10,6,44]],["KOUASSI DIDIER SARAH","","8",[6,8,20,20,10,10,6,46]],["N'GUESSAN ISMAEL ABOUBACAR","","8",[8,8,20,20,10,11,6,47]],["BAMBA EMMANUELLA YANNICK","","8",[9,8,20,20,10,11,7,48]],["COULIBALY HERMANN","","8",[8,8,20,20,10,11,7,45]],["ADOU AKISSI","","8",[9,8,20,20,10,12,8,50]],["KOUADIO MARC-AURELE","","8",[9,25,23,24,12,12,7,46]],["GBAGBO MOUSSA ROMARIC","","8",[9,17,18,19,10,9,6,37]],["DIOMANDE AMENAN","","8",[7,18,17,17,10,9,6,36]],["OUATTARA SERGE","","8",[7,18,17,17,10,10,6,36]],["KOUADIO ARNAUD","","8",null],["GUEU ABOUBACAR","","8",[7,17,17,17,10,9,5,38]],["FOFANA CHRIST","","8",[7,18,19,18,10,9,6,37]],["ZOUZOU ABOUBACAR ELIE","","8",[7,22,23,22,11,12,7,39]],["EHOUMAN KEVIN","","8",[7,23,22,23,11,12,8,40]],["KOUAKOU CHRIST","","8",[7,21,22,22,10,12,7,35]],["KONAN ROMARIC MARIAM","","8",[8,20,25,18,10,8,7,40]],["YAO ELIE","","8",[7,20,28,18,10,8,7,40]],["N'GUESSAN DIDIER","","8",[8,17,25,18,10,8,7,40]],["BROU IBRAHIM","","8",[7,20,25,20,10,8,7,40]],["AKA MOUSSA","","8",[8,17,25,18,10,8,7,40]],["LOBA NADEGE","","8",[7,20,25,20,10,8,7,40]],["DIOMANDE MARC-AURELE","","8",[8,17,25,18,10,8,7,40]],["ADOU IBRAHIM","","8",[8,20,25,20,10,8,8,45]],["TOURE JUNIOR INES","","8",[7,20,25,20,10,8,7,40]],["KOUASSI ADJOUA FRANCK","","8",[8,25,25,25,10,10,8,45]],["DOUMBIA ELIE","","8",[8,25,21,20,5,12,5,50]],["OUATTARA PRISCA ABOUBACAR","","8",[8,20,20,25,5,10,5,50]],["DOUMBIA CHRIST","","8",null],["ANGORA JUNIOR","","8",[8,18,20,20,5,10,5,50]],["KOFFI SARAH FATOU","","8",[8,17,18,20,5,11,6,50]],["SANOGO CHRIST ESTHER","","8",[10,30,27,27,6,13,8,55]],["FOFANA IBRAHIM","","8",[7,26,27,28,10,12,8,54]],["YAPI ABOUBACAR PRISCA","","8",[8,30,30,30,14,14,10,57]],["CISSE AICHA","","8",[8,30,26,26,6,13,7,54]],["KOUASSI AMOIN PATRICK","","8",[7,30,22,25,5,11,6,53]],["LOBA AMOIN","","8",[8,28,26,28,13,13,9,40]],["SEKA OCEANE ADJOUA","","8",[8,26,26,28,8,8,6,38]],["LOBA INES","","8",[8,27,26,28,8,8,6,38]],["COULIBALY AICHA PATRICK","","8",[8,25,26,28,8,8,6,38]],["DAGO ABOUBACAR","","8",[8,26,26,28,11,13,8,40]],["ASSI JOEL PATRICK","","8",[8,26,26,28,8,8,6,38]],["ASSI FRANCK","","8",[8,26,26,28,13,8,6,40]],["ADOU SARAH GRACE","","8",[8,26,26,28,8,8,6,38]],["ASSI PATRICK KEVIN","","8",[8,26,26,28,8,8,9,40]],["KONE AICHA","","8",[8,26,26,28,8,8,6,38]],["SEKA HERMANN FATOU","","8",[8,18,18,18,8,10,6,38]],["KONE AKISSI YANNICK","","8",[8,18,18,18,8,10,6,45]],["COULIBALY AMENAN IBRAHIM","","8",[8,18,18,18,8,10,6,38]],["BAMBA LAETITIA","","8",[8,18,18,18,8,10,6,36]],["AKA ABOUBACAR","","8",[8,18,18,18,18,8,10,6]],["DAGO DIDIER","","8",[8,20,18,19,8,10,6,40]],["BROU PATRICK","","8",[10,24,24,24,9,11,7,44]],["FOFANA DIDIER FRANCK","","8",[10,24,24,24,9,11,7,44]],["TANOH AKISSI","","8",[10,24,24,24,10,11,8,44]],["KOFFI PRISCA","","8",[10,26,26,26,9,12,8,50]],["ZADI ADJOUA","","8",[6,20,22,22,10,11,7,42]],["YAO ISMAEL","","8",[7,21,22,17,8,9,7,42]],["SEKA IBRAHIM","","8",[8,15,17,22,8,9,6,42]],["KONAN MARIAM","","8",[7,15,17,18,8,9,6,40]],["AHOUA ELIE","","8",[6,17,16,17,8,8,6,37]],["ASSI GRACE","","8",[6,17,16,18,9,8,7,39]],["ZADI HERMANN JOEL","","8",[7,17,16,20,9,8,6,38]],["CISSE AMOIN ESTHER","","8",[7,17,16,17,9,9,6,39]],["COULIBALY ESTHER ABOUBACAR","","8",[7,17,20,24,10,11,6,40]],["CISSE SARAH","","8",null],["BAMBA ELIE","","8",[9,20,20,20,9,9,6,45]],["AKA ELIE","","8",[10,20,20,20,9,9,6,45]],["YAPI FATOU","","8",[10,22,22,20,9,9,6,45]],["TANOH AYA","","8",[8,22,22,22,9,9,6,45]],["DOUMBIA JEAN-MARC","","8",[10,20,20,20,9,9,6,45]],["ZADI AMENAN GRACE","","8",[8,20,20,22,9,9,6,45]],["COULIBALY MARC-AURELE","","8",[9,20,20,20,9,9,6,45]],["LOBA EMMANUELLA INES","","8",[7,20,20,20,9,9,6,45]],["GUEU ROMARIC","","8",[7,20,20,20,9,9,6,45]],["DAGO SARAH","","8",[10,25,25,25,10,10,7,50]],["GUEU MARIAM NADEGE","","8",[8,19,18,20,10,10,6,44]],["N'GUESSAN JUNIOR AFFOUE","","8",[8,20,20,19,10,10,8,50]],["COULIBALY ESTHER","","8",[8,19,20,18,10,10,7,50]],["N'GUESSAN CHRIST PATRICK","","8",[8,19,20,18,11,11,7,50]],["KOUAME SARAH","","8",[8,20,20,19,9,9,7,49]],["GNAGNE NADEGE AYA","","8",null],["CISSE NADEGE","","8",[8,19,20,19,10,10,6,43]],["KOUASSI AFFOUE AMENAN","","8",[8,19,20,19,10,10,6,43]],["DIOMANDE AWA MARC-AURELE","","8",[8,19,20,19,10,10,8,50]],["DAGO YANNICK MOUSSA","","8",[8,19,20,19,9,9,5,40]],["ZOUZOU DIDIER ARNAUD","","8",[7,18,17,17,10,10,7,37]],["BAMBA FRANCK MOUSSA","","8",null],["FOFANA AWA","","8",[8,21,22,20,11,11,8,38]],["ADOU NADEGE YANNICK","","8",[6,18,17,18,10,10,7,38]],["YAO JUNIOR","","8",[6,20,20,21,10,10,6,38]],["GBAGBO JEAN-MARC AWA","","8",[7,17,18,18,10,10,6,39]],["DIOMANDE KEVIN AMENAN","","8",[8,17,17,18,10,10,6,37]],["LOBA JEAN-MARC AFFOUE","","8",[8,20,17,18,10,10,7,45]],["AKA GRACE","","8",null],["AKA ADJOUA YANNICK","","8",[9,19,18,18,10,10,7,37]],["ZOUZOU LAETITIA PATRICK","","8",[7,18,25,25,10,8,7,40]],["ASSI YANNICK","","8",[8,18,25,25,10,10,8,45]],["KONE OCEANE","","8",[7,20,25,25,10,8,7,40]],["TANOH MARIAM AMENAN","","8",[7,18,25,25,10,8,7,40]],["LOBA MARC-AURELE NADEGE","","8",[6,18,25,25,10,8,7,40]],["BROU KELLY INES","","8",null],["LOBA IBRAHIM","","8",[8,20,25,25,10,10,7,40]],["BAMBA MARIAM","","7",[6,6,6,6,6,6,22,35,55,25,35]],["SERI AMOIN","","7",[6,6,6,6,6,6,22,35,55,25,35]],["GUEU ADJOUA","","7",[6,6,6,6,6,6,20,35,55,25,35]],["ADOU NADEGE ELIE","","7",[8,6,6,6,6,6,20,35,55,25,35]],["BAMBA AFFOUE","","7",[7,6,6,6,6,6,22,35,55,30,35]],["KOUASSI OCEANE","","7",[8,6,6,6,6,6,22,35,55,25,35]],["TANOH CHRIST","","7",[6,6,6,6,6,6,22,35,55,25,35]],["TOURE SERGE","","7",null],["TANOH MARC-AURELE","","7",[6,6,6,6,6,6,22,35,55,25,35]],["TRAORE PRISCA MOUSSA","BONOUMIN","7",[6,6,6,6,6,6,22,35,55,25,35]],["DOUMBIA MARC-AURELE","","7",[6,6,6,6,6,6,17,21,33,21,21]],["SERI LAETITIA KEVIN","DID27 TKD","7",null],["BROU ABOUBACAR","","7",[6,7,6,7,6,7,19,34,51,22,22]],["COULIBALY ELIE","","7",[6,7,6,8,7,8,19,34,52,22,22]],["KOFFI ESTHER SERGE","","7",[8,7,6,7,7,7,19,30,50,21,21]],["LOBA NADEGE FATOU","","7",[8,7,6,8,7,7,23,42,54,29,31]],["KONAN JOEL PATRICK","","7",[6,8,6,8,8,7,24,40,54,29,30]],["DIOMANDE ROMARIC ARNAUD","","7",[6,8,7,8,7,7,24,40,55,29,30]],["KONE JOEL","","7",[6,8,7,8,7,7,15,38,51,27,29]],["ESSIS GRACE","","7",[6,6,6,6,4,5,17,30,41,21,21]],["N'GUESSAN AMOIN HERMANN","","7",[7,7,7,7,7,10,24,32,55,26,22]],["TRAORE MARC-AURELE ADJOUA","","7",[10,9,9,8,7,7,24,30,48,26,22]],["SERI PRISCA SARAH","","7",[10,8,9,7,7,9,18,33,48,20,22]],["GBAGBO JOEL MARIAM","","7",[9,8,9,7,7,8,18,33,50,24,22]],["KONE PRISCA","","7",[8,10,9,8,7,9,22,35,48,26,22]],["KOUASSI FRANCK","","7",[10,8,9,7,7,8,18,32,48,24,22]],["FOFANA YANNICK","WILL FITNESS","7",[7,7,9,7,7,8,18,32,48,24,22]],["LOBA GRACE","","7",[9,10,9,9,9,6,22,38,49,24,28]],["KONAN ESTHER AICHA","","7",[10,7,9,7,7,8,18,30,48,24,22]],["GNAGNE AMENAN","","7",[9,7,9,7,7,8,18,30,48,24,22]],["ADOU AYA","","7",[8,7,6,6,7,7,22,38,60,20,25]],["KOUAME SERGE JOEL","","7",[9,6,6,6,7,6,20,39,60,20,26]],["BROU FRANCK","","7",[8,6,6,6,7,6,20,40,62,20,26]],["ASSI FATOU","","7",[8,7,7,7,7,8,21,38,62,20,25]],["ANGORA FATOU","","7",[8,6,6,7,7,7,20,39,64,20,24]],["KOUAME HERMANN LAETITIA","","7",[9,6,6,6,7,7,20,40,62,20,25]],["AKA YANNICK","","7",[8,6,6,6,7,6,21,41,64,20,25]],["ANGORA AWA","","7",[9,6,7,7,7,6,19,40,63,20,26]],["AMANI YANNICK","FLORIANT","7",[10,6,7,7,7,7,20,40,63,20,27]],["DOUMBIA PATRICK AKISSI","","7",[10,6,8,6,7,7,19,39,65,20,18]],["KOUADIO ABOUBACAR","","7",[7,7,6,8,7,7,20,35,45,25,26]],["EHOUMAN KELLY JUNIOR","","7",null],["ADOU MARC-AURELE ABOUBACAR","","7",[8,7,7,6,7,7,21,36,49,26,27]],["TOURE EMMANUEL MOUSSA","","7",[8,7,7,7,8,6,18,35,48,26,27]],["TANOH YANNICK","","7",[8,5,5,5,5,6,19,35,42,26,27]],["COULIBALY KEVIN","","7",[10,8,7,8,8,7,22,39,58,28,29]],["SERI HERMANN ISMAEL","","7",[7,8,8,7,8,7,20,34,49,25,26]],["DAGO MARIAM","","7",[7,7,8,7,6,7,20,34,48,26,27]],["TRAORE AWA ISMAEL","","7",[7,7,6,7,7,7,20,34,49,26,27]],["EHOUMAN AICHA","","7",[9,8,8,9,8,7,20,33,50,27,29]],["YAPI KELLY AICHA","","7",[8,7,8,8,6,7,21,44,48,25,30]],["GUEU AWA ROMARIC","","7",[8,8,8,8,6,7,22,45,65,29,30]],["DOUMBIA ARNAUD MARC-AURELE","","7",[8,7,8,8,6,6,20,40,63,26,30]],["TRAORE KEVIN ABOUBACAR","","7",[8,7,8,8,6,6,20,41,60,26,30]],["LOBA ELIE YANNICK","","7",[9,7,8,8,6,6,20,42,60,24,30]],["TRAORE AFFOUE","","7",[9,8,8,8,6,6,20,43,65,25,30]],["ZADI AYA NADEGE","","7",[9,7,8,8,6,6,20,44,64,24,30]],["ASSI JEAN-MARC","","7",[9,7,8,8,6,6,22,43,63,29,30]],["BOKA KEVIN","","7",[8,10,8,10,10,5,21,31,45,30,32]],["KOUAKOU IBRAHIM ADJOUA","","7",[9,7,8,9,6,7,23,45,65,30,30]],["TANOH AWA","","7",[7,10,8,7,10,5,22,35,50,30,33]],["YAPI EMMANUEL EMMANUELLA","","7",[8,10,9,10,8,5,25,36,50,30,32]],["DOUMBIA CHRIST SERGE","","7",[7,7,7,7,7,5,20,30,45,30,32]],["LOBA AYA","","7",[7,6,8,10,7,5,20,35,50,30,30]],["BROU JEAN-MARC","","7",null],["DOUMBIA EMMANUELLA","","7",null],["GNAGNE LAETITIA KEVIN","","7",[7,6,8,7,10,5,21,32,45,30,32]],["ESSIS PATRICK","","7",[7,6,8,7,10,5,21,32,45,30,32]],["N'GUESSAN AMENAN KEVIN","","7",[7,10,6,6,7,5,23,32,46,30,32]],["KOFFI ESTHER","","7",[8,10,6,8,8,5,24,33,50,30,32]],["ADOU KELLY","","7",[6,6,6,6,6,6,16,30,20,10,19]],["KOUAKOU JEAN-MARC EMMANUEL","","7",[6,7,6,8,7,7,18,37,52,22,30]],["ZOUZOU IBRAHIM EMMANUEL","","7",[6,7,7,9,8,7,17,38,52,24,31]],["EHOUMAN ADJOUA","","7",[6,6,6,6,6,6,16,32,20,10,19]],["ASSI AMENAN","","7",[6,6,6,6,6,6,16,33,48,22,29]],["OUATTARA NADEGE","","7",[6,6,6,7,6,6,16,32,48,22,28]],["DOUMBIA PRISCA CHRIST","","7",[6,7,6,7,6,6,16,32,49,23,29]],["TOURE LAETITIA AFFOUE","","7",[6,6,6,6,6,6,17,33,48,23,29]],["CISSE AKISSI","","7",[6,7,6,7,6,7,17,35,49,22,30]],["ADOU JOEL","","7",[7,7,6,7,6,7,16,32,48,22,29]],["DIOMANDE IBRAHIM","","7",null],["ADOU ELIE","","7",[7,6,6,6,6,8,20,45,70,30,30]],["ANGORA EMMANUEL","","7",[8,6,6,6,6,8,20,45,40,30,30]],["OUATTARA ESTHER MARC-AURELE","","7",[7,8,8,8,8,8,20,45,60,35,30]],["ZADI NADEGE","","6",[7,6,6,7,10,5,20,40,40,24,23,30]],["ESSIS ELIE","","6",[8,10,10,10,10,7,25,45,45,26,25,35]],["N'GUESSAN FRANCK","","6",[8,10,10,10,10,7,26,45,45,25,25,35]],["KONAN MOUSSA JUNIOR","","6",[7,10,10,10,10,6,20,41,43,25,23,30]],["ADOU ELIE EMMANUELLA","","6",[7,10,10,10,10,6,22,41,43,25,23,33]],["YAPI ABOUBACAR EMMANUEL","","6",[8,10,8,7,10,6,23,42,45,26,23,30]],["OUATTARA ARNAUD","","6",[7,10,8,8,10,6,22,41,44,25,23,31]],["LOBA PRISCA MARC-AURELE","","6",[6,10,7,7,10,6,22,41,43,24,23,34]],["BROU AICHA ROMARIC","","6",[7,7,8,8,8,5,20,40,43,24,33,32]],["YAO ADJOUA LAETITIA","","6",[8,7,8,10,10,6,22,42,44,25,23,34]],["ZADI MARIAM JOEL","","6",[7,8,6,6,6,8,25,40,50,20,17,30]],["COULIBALY MARIAM","","6",[6,8,6,9,6,8,25,40,50,20,17,30]],["ZADI AFFOUE","","6",[8,8,9,6,6,8,25,40,50,20,17,30]],["BROU KEVIN","","6",[6,8,9,6,6,8,20,35,45,20,17,30]],["ANGORA JOEL","","6",[7,8,8,7,6,8,20,35,45,20,17,30]],["DIOMANDE KELLY","","6",[7,8,8,7,6,8,25,40,45,20,17,35]],["BROU CHRIST AYA","","6",[7,8,8,7,6,8,20,35,50,20,17,30]],["YAO FATOU NADEGE","","6",[8,8,9,6,9,8,20,35,40,20,15,30]],["TRAORE AMENAN PRISCA","","6",[7,7,9,6,9,8,20,35,45,25,16,30]],["KOUADIO JUNIOR","","6",[7,8,9,6,9,8,20,35,40,20,16,30]],["SEKA GRACE ABOUBACAR","","6",[9,6,6,6,7,6,17,29,38,22,19,23]],["AHOUA SERGE JUNIOR","","6",[7,6,7,6,6,6,19,30,38,21,20,23]],["FOFANA MOUSSA","","6",[7,7,6,7,6,6,20,31,39,20,20,22]],["AHOUA LAETITIA","","6",[9,7,6,7,6,8,25,40,44,22,19,23]],["SANOGO MARC-AURELE","","6",[9,7,7,7,6,7,22,34,40,21,20,22]],["KOUADIO EMMANUELLA","","6",[9,8,7,8,7,7,23,34,48,22,20,33]],["AKA AMOIN DIDIER","","6",[8,7,7,6,7,7,22,35,40,22,21,22]],["GNAGNE AWA JUNIOR","","6",[8,7,6,7,7,8,24,39,40,22,22,22]],["SEKA JUNIOR AICHA","","6",[9,8,7,8,8,8,23,38,41,22,21,22]],["YAPI SARAH","","6",[9,8,7,7,7,7,23,38,40,22,21,21]],["TOURE AYA","","6",[8,8,6,6,10,6,18,32,40,18,24,28]],["DOUMBIA INES","","6",[8,8,6,6,10,6,18,32,45,24,24,36]],["ANGORA MARIAM AICHA","","6",[8,8,6,6,10,8,24,45,48,28,28,36]],["GUEU KELLY","","6",[8,8,6,6,10,6,18,32,40,22,24,28]],["DOUMBIA HERMANN","","6",[9,6,6,6,10,6,18,33,36,19,24,28]],["SERI AFFOUE","","6",[9,6,6,6,10,6,18,32,45,20,24,32]],["GUEU EMMANUEL","","6",[9,6,7,6,10,6,18,32,48,20,24,28]],["KOUADIO MOUSSA","","6",[10,6,6,6,10,8,24,32,49,26,24,34]],["LOBA ELIE","","6",[10,6,7,6,10,8,28,45,50,28,24,34]],["N'GUESSAN INES AMOIN","","6",[9,6,7,6,10,7,20,33,50,26,24,30]],["SERI ADJOUA ISMAEL","","6",[8,8,7,7,7,7,17,35,40,17,20,30]],["DAGO FATOU ROMARIC","","6",[6,8,7,7,7,7,17,35,45,20,25,30]],["DOUMBIA DIDIER","","6",[7,8,7,7,7,7,17,35,45,20,20,30]],["KONAN AICHA","","6",[8,8,7,7,7,7,17,35,45,20,20,30]],["ASSI AMENAN AMOIN","","6",[6,8,7,7,7,7,17,35,40,25,20,30]],["GNAGNE JOEL","","6",[7,8,7,7,7,7,17,35,45,25,25,30]],["KONAN ADJOUA","","6",[7,8,7,7,7,7,17,35,40,20,20,30]],["KOUAME FRANCK","","6",null],["TRAORE AICHA IBRAHIM","","6",[6,8,7,7,7,7,17,35,40,25,25,30]],["AMANI EMMANUEL","","6",[6,8,7,7,7,7,17,35,40,25,25,30]],["DOUMBIA OCEANE","","6",[6,6,6,7,6,7,16,30,20,17,16,21]],["ADOU EMMANUEL","","6",[6,7,6,7,7,6,18,32,42,17,16,22]],["ANGORA OCEANE","","6",[8,7,6,8,8,8,21,37,44,17,16,21]],["SANOGO PRISCA","","6",[6,6,6,7,6,7,18,32,41,17,16,23]],["SERI IBRAHIM","","6",[6,6,6,6,6,7,16,20,38,17,16,21]],["KOUAKOU ELIE EMMANUELLA","","6",null],["KONE ADJOUA","","6",null],["ASSI SARAH ELIE","","6",[6,8,6,6,8,7,19,30,38,17,16,22]],["BAMBA INES","","6",[6,6,6,6,7,7,18,29,39,17,17,22]],["SERI AMENAN ELIE","","6",[6,6,6,6,7,7,18,29,39,17,17,22]],["GNAGNE ELIE SERGE","","6",[7,7,10,10,10,8,23,32,40,19,20,25]],["AHOUA PATRICK GRACE","","6",[7,9,10,10,10,9,24,32,42,18,20,25]],["DOUMBIA ARNAUD","","5",[7,8,8,8,5,8,20,30,38,8,12,16,26]],["N'GUESSAN KEVIN","","5",[9,9,10,8,5,8,21,32,40,8,12,16,26]],["KOUASSI OCEANE NADEGE","","5",[8,8,10,8,5,8,21,32,40,8,12,16,26]],["KOUADIO NADEGE ADJOUA","","5",[7,9,10,8,5,10,22,40,40,8,11,16,26]],["AHOUA MARC-AURELE ISMAEL","","5",[8,8,10,8,5,7,20,40,40,8,12,16,26]],["GUEU ADJOUA MOUSSA","","5",[10,7,9,8,5,8,20,32,40,8,12,16,26]],["ADOU ADJOUA","","5",[9,7,9,8,5,8,20,32,38,8,12,16,28]],["SEKA IBRAHIM AMOIN","","5",[10,8,10,8,5,9,20,32,38,8,12,22,26]],["GNAGNE AKISSI AYA","","5",[10,7,9,8,5,6,18,32,38,8,12,22,26]],["GBAGBO DIDIER","","5",[10,7,9,8,5,7,20,40,38,8,12,16,26]],["KOUAKOU NADEGE JOEL","","5",[9,8,8,7,9,5,19,34,49,7,14,19,26]],["GNAGNE MARC-AURELE","","5",[8,8,6,7,6,5,19,36,46,7,14,19,30]],["SERI JOEL AFFOUE","","5",[9,8,8,7,6,5,19,33,43,7,14,19,29]],["LOBA YANNICK ARNAUD","","5",[9,8,8,8,6,5,19,34,45,7,14,19,30]],["DOUMBIA AMOIN AYA","","5",[9,8,8,7,6,5,20,38,49,7,14,19,30]],["CISSE HERMANN","","5",[9,8,8,7,9,5,20,36,48,7,14,19,29]],["SANOGO DIDIER OCEANE","","5",[9,8,8,7,6,5,20,38,49,7,14,19,30]],["GNAGNE MARC-AURELE JEAN-MARC","","5",[8,8,8,7,6,5,21,39,49,7,14,19,29]],["TOURE INES","","5",[9,8,8,7,6,5,20,38,48,7,15,19,30]],["GNAGNE MOUSSA YANNICK","","5",[8,8,8,7,6,5,20,38,48,7,17,19,30]],["KOUAME MARIAM","","5",[8,7,7,8,8,8,17,30,40,7,13,12,30]],["DAGO ELIE","","5",[8,7,7,8,8,8,17,30,40,7,13,12,30]],["KOUAKOU AICHA","","5",[8,7,7,8,8,8,17,30,40,7,13,12,30]],["BAMBA ESTHER","","5",[8,8,7,6,8,8,17,30,40,7,12,12,30]],["AKA MARIAM HERMANN","","5",[8,7,7,8,8,6,17,30,40,7,13,12,30]],["DAGO JEAN-MARC","","5",[8,7,7,8,8,6,25,45,55,7,17,12,30]],["COULIBALY AMOIN","","5",[8,7,7,8,8,6,17,30,35,7,13,12,30]],["SERI AMENAN","","5",[8,7,7,8,8,6,17,30,40,7,13,12,30]],["AMANI AWA OCEANE","","5",[8,7,7,8,8,8,17,30,40,7,13,17,30]],["DIOMANDE FRANCK","","5",[7,7,7,8,8,7,17,30,35,7,12,12,30]],["DAGO ESTHER JOEL","","5",[9,6,6,6,6,6,20,35,45,7,12,22,35]],["KOUASSI AMENAN ESTHER","","5",[8,6,6,6,6,7,22,35,45,7,12,22,35]],["DOUMBIA PATRICK IBRAHIM","","5",[7,6,6,6,6,6,20,35,45,7,12,22,35]],["GNAGNE FRANCK","","5",[6,6,6,7,7,6,20,35,45,7,12,22,35]],["KOUAKOU AWA AYA","","5",[6,6,6,6,6,6,20,35,45,7,12,22,35]],["BOKA ELIE KEVIN","","5",[9,7,7,7,7,7,22,40,45,7,12,22,35]],["EHOUMAN AMENAN","","5",[8,6,6,6,6,7,20,35,45,7,12,22,35]],["GBAGBO AICHA AYA","","5",[7,6,7,7,7,7,20,35,45,7,12,22,35]],["SANOGO PATRICK KELLY","","5",[9,7,7,7,6,7,20,40,45,7,12,22,35]],["BAMBA ISMAEL","","5",[9,7,7,7,6,7,22,40,50,7,15,22,35]],["KONE INES","","5",[8,6,6,6,5,7,20,37,36,7,7,20,27]],["SANOGO LAETITIA DIDIER","","5",null],["CISSE IBRAHIM EMMANUEL","","5",[8,6,6,6,5,7,19,37,36,7,12,20,28]],["GNAGNE FATOU","","5",[8,6,6,10,6,7,21,37,36,7,12,22,25]],["KONAN EMMANUELLA SARAH","","5",[8,6,6,5,5,7,20,37,36,7,12,20,27]],["TOURE KELLY","","5",[9,6,10,6,5,7,20,30,36,7,12,20,25]],["BAMBA GRACE","","5",[8,6,6,5,5,7,20,36,36,7,12,20,26]],["TANOH HERMANN JEAN-MARC","","4",[7,6,6,6,6,6,20,45,45,7,12,20,35]],["LOBA ARNAUD MARC-AURELE","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["DIOMANDE JOEL","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["KONE NADEGE ISMAEL","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["AMANI ESTHER","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["KOFFI DIDIER","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["DIOMANDE GRACE","","4",[10,7,7,7,6,6,20,45,45,7,12,20,35]],["SERI MARIAM","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["KONE ABOUBACAR","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["BOKA LAETITIA","","4",[6,6,6,6,6,6,20,45,45,7,12,20,35]],["ZOUZOU CHRIST LAETITIA","","4",[10,10,9,5,10,8,23,45,42,8,12,18,25]],["CISSE KELLY","","4",[10,10,9,5,10,9,23,46,46,8,15,18,26]],["LOBA CHRIST DIDIER","","4",[10,10,10,5,10,8,23,46,46,8,15,28,26]],["ADOU YANNICK","","4",[10,10,9,5,10,7,23,38,40,8,12,18,24]],["KOUASSI KEVIN","","4",[10,10,9,5,10,6,20,35,45,8,12,18,24]],["KONE DIDIER","","4",[10,10,9,5,10,6,20,30,40,8,11,18,24]],["OUATTARA OCEANE","","4",[10,10,10,5,10,6,20,30,40,8,11,18,24]],["KONE YANNICK","","4",[9,10,10,5,10,6,19,30,40,8,11,18,24]],["KONAN FATOU ESTHER","","4",[10,10,9,5,10,6,20,30,40,8,11,18,24]],["ANGORA DIDIER GRACE","","4",[8,10,9,5,10,6,20,30,40,8,11,18,24]],["FOFANA CHRIST AMENAN","","4",[8,8,7,7,7,7,20,30,50,7,15,17,30]],["AKA EMMANUELLA MOUSSA","","4",[8,8,7,7,7,7,20,35,50,7,15,17,30]],["ZOUZOU YANNICK","","4",[8,8,7,7,7,7,20,35,50,7,15,17,30]],["N'GUESSAN KEVIN LAETITIA","","4",[8,8,7,7,7,7,20,35,50,7,15,17,30]],["KOUASSI FATOU","","4",[8,8,7,7,7,7,20,35,50,7,15,17,30]],["TRAORE AICHA","","4",[8,7,7,7,7,7,20,35,50,7,15,17,30]],["CISSE FATOU","","4",[8,7,7,7,7,7,20,35,50,7,15,17,30]],["SEKA MARC-AURELE","","4",[8,7,7,7,7,7,20,35,50,7,17,20,35]],["TRAORE FRANCK AMOIN","","4",[8,7,7,7,7,7,20,35,50,7,15,17,30]],["COULIBALY OCEANE MOUSSA","","4",[8,7,7,7,7,7,20,35,50,7,15,17,30]],["N'GUESSAN MARC-AURELE","","4",[8,10,10,8,10,5,25,41,50,7,15,25,35]],["FOFANA MARIAM MOUSSA","","4",[8,10,10,8,10,5,25,41,50,7,13,27,35]],["FOFANA AKISSI","","4",[7,10,10,8,10,5,25,40,50,7,12,25,34]],["N'GUESSAN AFFOUE","","4",[7,10,7,8,10,5,24,38,45,7,11,24,34]],["FOFANA AKISSI JOEL","","4",[7,10,8,8,10,5,24,37,45,7,10,22,33]],["ESSIS OCEANE","","4",[7,10,10,10,10,5,24,36,45,7,12,23,32]],["COULIBALY GRACE AICHA","","4",[7,10,7,10,10,5,24,36,45,7,12,20,32]],["ZOUZOU FRANCK","","4",[7,10,6,10,10,5,24,35,45,7,11,22,30]],["EHOUMAN JUNIOR","","4",[7,8,7,7,8,5,23,35,44,7,13,25,31]],["TANOH SERGE","","4",[10,10,8,8,10,5,24,36,46,7,16,25,31]],["KOUAME KEVIN","","4",[8,9,7,7,6,5,20,31,48,7,14,19,26]],["KOUADIO ROMARIC","","4",[8,9,7,7,6,5,19,29,40,7,14,19,27]],["EHOUMAN EMMANUEL","","4",[9,8,7,7,6,5,19,30,43,7,14,19,25]],["BOKA PATRICK FRANCK","","4",[9,8,7,7,6,5,19,30,43,7,14,19,26]],["ESSIS ESTHER","","4",[8,8,7,7,6,5,19,29,43,7,14,19,25]],["EHOUMAN ELIE","","3",[10,6,6,7,6,7,22,38,40,7,13,23,27]],["CISSE NADEGE PATRICK","","3",[10,10,9,8,7,8,23,38,48,7,18,24,29]],["SANOGO GRACE ELIE","","3",[10,9,8,8,7,8,24,37,47,7,14,23,28]],["DIOMANDE NADEGE FRANCK","","3",[10,7,7,6,7,8,25,38,49,7,14,22,27]],["AMANI AYA","","3",[10,6,7,7,6,8,25,40,47,7,13,23,26]],["ZOUZOU FRANCK EMMANUEL","","3",[10,8,7,8,8,8,26,40,48,7,12,22,26]],["AKA JEAN-MARC","","3",[9,7,7,8,7,7,25,38,50,7,13,23,26]],["FOFANA DIDIER","","3",[9,6,7,6,7,8,25,39,50,7,13,22,27]],["KONE FATOU","","3",[9,7,7,7,7,8,25,39,49,7,13,23,28]],["FOFANA ISMAEL","","3",null],["DAGO HERMANN YANNICK","","3",[8,6,5,6,5,7,20,38,40,7,12,18,30]],["KOUAKOU AYA MOUSSA","","3",[8,6,5,6,5,7,16,30,20,7,12,18,28]],["KOFFI FRANCK SARAH","","3",[8,6,5,6,5,6,20,36,40,7,12,18,30]],["LOBA JOEL","","3",[8,6,5,6,5,7,20,40,40,7,12,18,32]],["KONE LAETITIA","","3",[8,7,6,5,4,7,20,36,40,7,12,18,30]],["EHOUMAN AYA AFFOUE","","3",[8,6,7,5,4,6,20,36,40,7,12,18,30]],["KOUAME KELLY SERGE","","3",[8,6,7,5,4,6,20,42,40,7,12,18,30]],["BOKA JOEL","","3",[8,7,6,5,4,7,20,36,36,7,12,18,30]],["BOKA AFFOUE FATOU","","3",[8,7,6,5,4,7,20,42,40,7,12,18,30]],["CISSE KELLY AKISSI","","3",[8,7,6,5,4,7,20,36,40,7,12,18,30]],["N'GUESSAN AKISSI","","2",[7,6,6,7,6,7,20,30,37,7,12,21,25]],["KONE ADJOUA MARC-AURELE","","2",[7,6,7,6,7,7,20,30,38,7,12,22,24]],["KONAN SARAH","","2",[8,7,8,7,6,8,22,35,40,7,14,22,26]],["OUATTARA MARC-AURELE","","2",[8,7,7,6,6,7,21,28,36,7,12,21,24]],["CISSE LAETITIA JOEL","","2",[8,7,8,7,7,7,23,40,50,7,13,22,27]],["GNAGNE FRANCK AFFOUE","","2",[7,7,6,7,7,6,22,39,42,7,12,21,26]],["KOUAME MOUSSA","","2",[8,7,8,7,8,7,23,40,50,7,13,21,28]],["CISSE IBRAHIM","","2",[9,8,8,7,8,8,23,43,48,7,16,23,28]],["BROU AYA FATOU","","2",[8,7,8,7,6,7,22,40,30,7,13,21,25]],["ASSI JUNIOR MOUSSA","","2",[6,7,8,7,7,7,21,38,42,7,12,22,24]],["ESSIS DIDIER EMMANUEL","","2",[7,7,8,8,10,5,27,45,50,7,16,24,34]],["GNAGNE SARAH FATOU","","2",[8,10,10,10,10,5,26,45,50,7,17,25,35]],["SEKA MOUSSA SERGE","","2",[10,10,10,10,10,5,26,45,50,7,16,23,33]],["TOURE AKISSI","","2",[10,10,10,10,10,5,25,44,50,7,16,23,33]],["KOUASSI SERGE","","2",[8,10,8,10,8,5,25,44,45,7,16,22,32]],["KOUADIO INES","","2",[7,8,8,8,10,5,25,43,44,7,15,21,31]],["SEKA JEAN-MARC LAETITIA","","2",[7,7,7,8,8,5,25,43,44,7,15,20,31]],["LOBA MARC-AURELE JOEL","","2",[8,10,8,10,7,5,25,45,44,7,16,22,31]],["KOUAME KELLY","","2",[10,7,8,10,8,5,26,45,44,7,16,22,33]],["COULIBALY MARIAM PRISCA","","2",[10,10,10,10,10,5,25,44,45,7,16,22,33]],["GUEU NADEGE","","2",[8,7,6,8,8,7,19,38,42,7,19,42,28]],["KONE NADEGE","","2",[8,7,6,7,7,7,19,39,43,7,14,23,27]],["KOUAKOU SERGE ESTHER","","2",[7,8,6,7,6,6,17,42,33,7,12,24,25]],["OUATTARA IBRAHIM FRANCK","","2",[7,7,6,7,6,6,17,38,20,7,13,15,24]],["ASSI DIDIER","","2",[7,7,6,7,6,7,18,38,41,7,12,17,24]],["LOBA AFFOUE","","2",[8,6,7,8,6,7,18,39,41,7,12,18,25]],["COULIBALY KELLY","","2",[7,6,7,7,6,7,19,38,42,7,13,15,23]],["KOUAKOU ADJOUA","","2",[6,6,7,7,6,7,18,38,40,7,12,17,23]],["BROU INES","","2",[6,6,7,7,6,7,18,39,42,7,12,17,22]],["N'GUESSAN EMMANUELLA NADEGE","","2",[6,7,7,7,6,7,18,38,41,7,12,17,22]],["GBAGBO LAETITIA AFFOUE","","1",[9,6,6,6,6,7,20,40,45,7,14,20,30]],["KOUADIO PRISCA","","1",[8,5,5,5,6,6,18,38,36,7,12,24,30]],["LOBA AYA EMMANUEL","","1",[10,6,6,6,6,10,20,40,45,7,18,24,32]],["SEKA AMENAN","","1",[8,5,5,5,5,6,16,25,20,7,10,20,20]],["BAMBA FATOU ELIE","","1",[8,6,6,6,6,6,20,40,50,7,12,24,30]],["CISSE JEAN-MARC","","1",[8,6,6,6,6,10,20,40,40,7,12,24,30]],["BOKA KELLY ROMARIC","","1",[8,6,6,6,6,8,20,40,50,7,13,24,32]],["ANGORA ABOUBACAR","","1",[9,6,6,6,6,6,20,40,40,7,13,24,28]],["YAO JEAN-MARC","","1",[10,8,7,7,7,10,28,48,58,7,20,28,38]],["SEKA JOEL","","1",[10,8,7,7,7,10,27,47,58,7,18,28,37]],["GUEU ELIE ARNAUD","LATRILLE","1",[7,10,7,8,9,5,25,40,45,7,17,26,25]],["KONAN JUNIOR","LATRILLE","1",[6,10,6,7,8,5,24,35,44,7,16,25,24]],["YAO FRANCK AICHA","LATRILLE","1",[7,10,7,6,9,5,24,30,44,7,16,25,24]],["KOUAKOU ARNAUD YANNICK","LATRILLE","1",[7,10,7,8,8,5,23,32,44,7,16,25,24]]],"s2":[]};
const GR=['8','7','6','5','4','3','2','1'];
const LS_KEY='keupro.v1';
const CEINT0={'9':{nom:'Blanche',c:'#F7F7F3',s:''},'8':{nom:'Jaune',c:'#F5C518',s:''},'7':{nom:'Jaune barrée verte',c:'#F5C518',s:'#2E9E4F'},'6':{nom:'Verte',c:'#2E9E4F',s:''},'5':{nom:'Verte barrée bleue',c:'#2E9E4F',s:'#1F5FC8'},'4':{nom:'Bleue',c:'#1F5FC8',s:''},'3':{nom:'Bleue barrée rouge',c:'#1F5FC8',s:'#D0302F'},'2':{nom:'Rouge',c:'#D0302F',s:''},'1':{nom:'Deuxième rouge',c:'#D0302F',s:''}};
const clone=o=>JSON.parse(JSON.stringify(o));
function ensureNo(s){for(const g of GR){let mx=0;for(const c of s.cands)if(c.grade===g&&c.no>mx)mx=c.no;for(const c of s.cands)if(c.grade===g&&!c.no)c.no=++mx}}
function nextNo(s,g){let mx=0;for(const c of s.cands)if(c.grade===g&&c.no>mx)mx=c.no;return mx+1}
function migrate(){if(!S.ceintures)S.ceintures=clone(CEINT0);delete S.belts;S.regles.quota=S.regles.quota||50;S.evaluateurs=S.evaluateurs||[];S.sessions.forEach(s=>{ensureNo(s);s.log=s.log||[];evalCfg(s)})}
const ICONS={
 accueil:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
 bienvenue:'<path d="M3 12h18"/><path d="M8 8l-1 8M16 8l1 8"/>',
 corriger:'<path d="M7 7h11l-3-3M17 17H6l3 3"/>',
 jury:'<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="8" r="3"/><path d="M2.5 20c.6-3.3 2.9-5 5.5-5s4.9 1.7 5.5 5M11 20c.6-3.3 2.9-5 5.5-5s4.9 1.7 5.5 5"/>',
 print:'<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
 inscriptions:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M17 8h5M19.5 5.5v5"/>',
 bordereaux:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
 saisie:'<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/>',
 classement:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4"/>',
 statistiques:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 rapport:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
 offre:'<path d="M3 12l9-9h8v8l-9 9z"/><circle cx="16" cy="8" r="1.5"/>',
 reglages:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>'
};
const NAV=[['Session',[['accueil','Tableau de bord'],['inscriptions','Inscriptions'],['jury','Jury et lots'],['bordereaux','Bordereaux'],['saisie','Évaluation'],['classement','Classement'],['statistiques','Statistiques'],['rapport','Rapport FITKD']]],['Compte',[['offre','Offre & tarifs'],['reglages','Paramètres']]]];
const BNAV=[['accueil','Accueil'],['inscriptions','Inscrits'],['saisie','Évaluer'],['classement','Classement'],['statistiques','Stats']];

const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cap=s=>s?s.charAt(0).toUpperCase()+s.slice(1):s;
const uid=()=>(window.crypto&&crypto.randomUUID)?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,ch=>{const r=Math.random()*16|0;return(ch==='x'?r:(r&3|8)).toString(16)});
var MODE='local',SB=null,AUTH={user:null,ligue:null,role:null,ligues:[]},SY={lig:'',sess:new Map(),cand:new Map(),status:'ok',busy:false,again:false,t:null,retry:null},RTCH=null;
const CLOUD=(window.KEUPRO_CONFIG&&window.KEUPRO_CONFIG.url&&window.supabase)?window.KEUPRO_CONFIG:null;
const GL=g=>g==='1'?'1er Keup':g+'e Keup';
const fmt=(n,d=1)=>(n==null||!isFinite(n))?'—':n.toLocaleString('fr-FR',{minimumFractionDigits:d,maximumFractionDigits:d});
const fint=n=>(n==null||!isFinite(n))?'—':Math.round(n).toLocaleString('fr-FR');
const pct=(a,b)=>b?a*100/b:null;
const fdate=d=>{if(!d)return'';try{return new Date(d+'T00:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'})}catch(e){return d}};
const norm=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toUpperCase().replace(/[’']/g,"'").replace(/\s+/g,' ').trim();

/* ---------- state ---------- */
const EVAL_DEMO=['K. Assi — 7e Dan','Y. Brou — 6e Dan','N. Seka — 5e Dan','A. Konan — 5e Dan','M. Bamba — 4e Dan','F. Traoré — 4e Dan','S. Kouamé — 4e Dan','J. Yao — 3e Dan','E. Gnagne — 3e Dan','P. Zadi — 3e Dan'];
function defaultState(){const st=defaultState0();const s1=st.sessions[0];s1.chef=EVAL_DEMO[0];s1.eval={quota:50,conv:EVAL_DEMO.slice(1),chefLot:false,v:1};distribute(s1);return st}
function defaultState0(){
  const baremes={};
  for(const g of GR) baremes[g]=DEMO.baremes[g].map(([n,m,t])=>({n:cap(n),m,t}));
  const s1={id:'s1',titre:'Passage de grade du 27 mai 2023',date:'2023-05-27',lieu:'Cocody',demo:true,
    cands:DEMO.s1.map((r,i)=>({id:'a'+i,nom:r[0],club:r[1],grade:r[2],dos:7,absent:r[3]===null,notes:r[3]?r[3].slice():Array(baremes[r[2]].length).fill(null)})),
    jurys:{'8':{'0':{p:'K. Assi — 7e Dan',v:'Y. Brou — 6e Dan',r:''},'1':{p:'K. Assi — 7e Dan',v:'N. Seka — 5e Dan',r:''}}},
    rapport:{lieu:'Cocody'}};
  const s2={id:'s2',titre:'Passage de grade du 30 avril 2023',date:'2023-04-30',lieu:'Cocody',demo:true,
    cands:DEMO.s2.map((r,i)=>({id:'b'+i,nom:r[0],club:r[1],grade:r[2],dos:r[3],absent:false,notes:Array(baremes[r[2]].length).fill(null)})),
    jurys:{},rapport:{}};
  return {v:1,ligue:{nom:'Ligue Communale de Cocody',fed:'Fédération Ivoirienne de Taekwondo'},
    regles:{seuil:60,ment:[95,80,70,60],table:10,quota:50},baremes,ceintures:clone(CEINT0),
    evaluateurs:EVAL_DEMO.slice(),
    sessions:[s1].map(x=>{ensureNo(x);x.log=[];x.eval={quota:50,conv:[],chefLot:false,v:1};return x}),cur:'s1'};
}
let S=null;
try{const raw=localStorage.getItem(LS_KEY);if(raw){const p=JSON.parse(raw);if(p&&p.v===1&&Array.isArray(p.sessions))S=p}}catch(e){}
if(!S)S=defaultState();
migrate();
let saveT=null;
function save(){CC=null;clearTimeout(saveT);saveT=setTimeout(persist,350)}
function persist(){if(MODE==='cloud'){cacheCloud();scheduleSync()}else if(MODE==='local'){try{localStorage.setItem(LS_KEY,JSON.stringify(S))}catch(e){}}}
const sess=()=>S.sessions.find(s=>s.id===S.cur)||S.sessions[0];

/* ---------- scoring engine (mirrors the FITKD bordereau formulas) ---------- */
const MEN=['Assez-Bien','Bien','Très bien','Exceptionnel'];
function menIdx(m){const t=REG().ment;return m>=t[0]?4:m>=t[1]?3:m>=t[2]?2:m>=t[3]?1:0}
function menChip(m){const i=menIdx(m);return i?`<span class="men m${i}">${MEN[i-1]}</span>`:''}
const bmax=g=>(BAR()[g]||[]).reduce((a,e)=>a+(+e.m||0),0);
function evalC(c){
  const b=BAR()[c.grade]||[],max=bmax(c.grade);
  if(c.absent)return{st:'abs',max,tot:0,moy:null,over:[],n:0};
  let tot=0,th=0,pr=0,n=0;const over=[];
  b.forEach((e,i)=>{const v=c.notes[i];if(v!=null&&v!==''&&isFinite(v)){n++;tot+=+v;if(e.t==='T')th+=+v;else pr+=+v;if(+v>e.m||+v<0)over.push(i)}});
  const complete=b.length>0&&n===b.length;
  const moy=max?tot*100/max:0;
  const st=complete?(moy>=REG().seuil?'adm':'ech'):(n?'enc':'todo');
  return{st,tot,th,pr,n,moy:complete?moy:(n?moy:null),max,over,complete};
}
let CC=null;
function computed(){
  if(CC&&CC.sid===S.cur)return CC;
  const s=sess(),res=new Map(),by={};
  for(const c of s.cands){const r=evalC(c);res.set(c.id,r);if(r.complete)(by[c.grade]=by[c.grade]||[]).push(c)}
  for(const g in by){
    const L=by[g].sort((a,b)=>res.get(b.id).moy-res.get(a.id).moy||res.get(b.id).pr-res.get(a.id).pr||a.nom.localeCompare(b.nom));
    let prev=null,pr=0;L.forEach((c,i)=>{const m=res.get(c.id).moy;const rk=(prev!=null&&Math.abs(prev-m)<1e-9)?pr:i+1;res.get(c.id).rk=rk;prev=m;pr=rk});
  }
  CC={sid:S.cur,res,by};return CC;
}
const ST={adm:['ok','Admis'],ech:['ko','Échec'],enc:['warn','En cours'],todo:['mu','À noter'],abs:['mu','Absent']};
const pill=st=>`<span class="pill ${ST[st][0]}">${ST[st][1]}</span>`;
function curSess(){try{return S&&S.sessions?S.sessions.find(x=>x.id===S.cur)||null:null}catch(e){return null}}
function BAR(){const s=curSess();return(s&&s.lock&&s.lock.bar)||S.baremes}
function REG(){const s=curSess();return s&&s.lock&&s.lock.reg?{...S.regles,...s.lock.reg}:S.regles}
const isLocked=s=>!!(s&&s.lock);
const LK=()=>isLocked(curSess());
const fdt=t=>{try{return new Date(t).toLocaleString('fr-FR',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'})}catch(e){return''}};
const LOCK_ACTS=new Set(['import','impGo','toggleAdd','dos','askDel','delC','editC','merge','absent','st','qk','mvOpen','mvPick','mvGo','swOpen','swPick','swMode','swGo','absC','delAsk','renum','renumGo','bulkMove','undo','distrib','distribGo','assignRest','delSess','delSessGo']);
const LOCK_IN=new Set(['jury','note','gnote','rap']);
const LOCK_CH=new Set(['gabs','impF','chef','chefLot','quota','conv','tabOwner']);
const LOCK_FORMS=new Set(['add','addEval','editC']);
function lockedMsg(){toast(canAdmin()?"Session clôturée : déverrouillez-la avant toute modification.":"Session clôturée : seul l'administrateur peut la déverrouiller, à la demande du président du jury.")}
function ficheState(s){const C=computed();let done=0,abs=0;const rest={};for(const c of s.cands){const r=C.res.get(c.id);if(r.st==='abs'){abs++;done++}else if(r.complete)done++;else{const k=c.ev||'';rest[k]=(rest[k]||0)+1}}return{tot:s.cands.length,done,abs,left:s.cands.length-done,rest}}
const ICON_LOCK='<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>';
function lockBanner(s){if(!isLocked(s))return'';const L=s.lock,rq=s.unlockReq;const adm=canAdmin(),chef=isChefOf(s);
  const act=adm?`${rq?'<button class="btn sm ghost-l" data-act="reqRefuse">Refuser la demande</button>':''}<button class="btn sm pri" data-act="unlockM">Déverrouiller</button>`:chef?(rq?'<button class="btn sm ghost-l" data-act="reqCancel">Retirer ma demande</button>':'<button class="btn sm ghost-l" data-act="reqM">Demander le déverrouillage</button>'):'';
  return `<div class="lockbar" role="status"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON_LOCK}</svg><div class="grow"><b>Évaluation clôturée et verrouillée</b><span>Enregistrée le ${esc(fdt(L.at))} par ${esc(labelOf(L.par))}. Notes, absences, répartition, jurys et rapport ne peuvent plus être modifiés ; consultation, impressions et exports restent ouverts.</span>${rq?`<span class="rq">Demande de déverrouillage de ${esc(labelOf(rq.par))}, le ${esc(fdt(rq.at))} : « ${esc(rq.motif)} »</span>`:''}</div>${act?`<div class="acts">${act}</div>`:''}</div>`}
function closeCard(s,force){if(isLocked(s)||!seeAll(s)||!s.cands.length)return'';const st=ficheState(s);const ready=st.left===0;if(!ready&&!force)return'';
  const who=Object.entries(st.rest).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`${esc(shortLabel(k||null))} ${n}`).join(', ');
  return `<div class="card closecard ${ready?'ready':''}"><div class="grow"><h3>Clôture de l'évaluation</h3><p>${ready?`Les ${st.tot} fiches sont renseignées (${st.done-st.abs} candidats notés, ${st.abs} absent${st.abs>1?'s':''}). Enregistrez et clôturez : la session sera verrouillée contre toute modification.`:`${st.left} fiche${st.left>1?'s':''} sur ${st.tot} restent à renseigner${who?` (${who})`:''}. La clôture sera possible quand chaque candidat sera noté ou marqué absent.`}</p></div><button class="btn ${ready?'pri':''}" data-act="closeM" ${ready?'':'disabled'}><svg viewBox="0 0 24 24">${ICON_LOCK}</svg>Enregistrer et clôturer</button></div>`}
function lockView(){const v=$('#view');v.querySelectorAll('[data-in],[data-ch],[data-act]').forEach(el=>{const a=el.dataset.act,i=el.dataset.in,c=el.dataset.ch;if((a&&LOCK_ACTS.has(a))||(i&&LOCK_IN.has(i))||(c&&LOCK_CH.has(c))){el.disabled=true;el.classList.add('locked');if(el.tagName==='TEXTAREA'||el.tagName==='INPUT')el.readOnly=true}});
  v.querySelectorAll('form[data-form]').forEach(f=>{if(LOCK_FORMS.has(f.dataset.form))f.querySelectorAll('input,button,select').forEach(x=>x.disabled=true)})}
const isUuid=v=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(v||''));
function me(){if(MODE==='cloud')return{key:AUTH.user?AUTH.user.id:null,role:AUTH.role||'evaluateur'};const p=ui.as||'admin';return p==='admin'?{key:null,role:'admin'}:{key:p,role:'evaluateur'}}
const isChefOf=s=>!!(s&&s.chef&&s.chef===me().key);
const seeAll=s=>me().role==='admin'||isChefOf(s);
const visCands=s=>seeAll(s)?s.cands:s.cands.filter(c=>c.ev===me().key);
function allowedView(v){if(['bienvenue','connexion','ma-ligue','chargement','offre'].includes(v))return true;if(me().role==='admin')return true;const s=S&&S.sessions&&sess();if(s&&isChefOf(s))return true;return['accueil','saisie','bordereaux'].includes(v)}
function people(){if(MODE==='cloud')return(AUTH.membres||[]).map(m=>({key:m.user_id,label:m.nom||m.email||'Membre',role:m.role}));return(S.evaluateurs||[]).map(n=>({key:n,label:n}))}
function labelOf(k){if(k==='__admin__')return'Administrateur';if(!k)return'Non attribué';const p=people().find(x=>x.key===k);return p?p.label:(MODE==='cloud'?'Membre retiré':String(k))}
const shortLabel=k=>labelOf(k).split(/\s+[—–-]\s+/)[0];
function evalCfg(s){s.eval=s.eval||{};if(!s.eval.quota){let q=50;try{if(S&&S.regles&&S.regles.quota)q=S.regles.quota}catch(e){}s.eval.quota=q}if(!Array.isArray(s.eval.conv))s.eval.conv=[];return s.eval}
function lotKeys(s){const e=evalCfg(s);const k=e.conv.filter(x=>x&&x!==s.chef);if(e.chefLot&&s.chef)k.unshift(s.chef);return k}
function allTables(s){const out=[];for(const g of GR){const m=new Map();s.cands.filter(c=>c.grade===g).sort((a,b)=>a.no-b.no).forEach(c=>{const k=tableOf(c);if(!m.has(k))m.set(k,[]);m.get(k).push(c)});[...m.keys()].sort((a,b)=>a-b).forEach(k=>out.push({g,k,L:m.get(k)}))}return out}
function tableOwner(L){const cnt={};L.forEach(c=>{const k=c.ev||'';cnt[k]=(cnt[k]||0)+1});return Object.keys(cnt).sort((a,b)=>cnt[b]-cnt[a])[0]||null}
function bumpEval(s){const e=evalCfg(s);e.v=(e.v||0)+1}
function distribute(s){const keys=lotKeys(s);if(!keys.length)return 0;const T=allTables(s);const N=T.reduce((a,t)=>a+t.L.length,0)||1;let before=0;
  T.forEach(t=>{const i=Math.min(keys.length-1,Math.floor((before+t.L.length/2)*keys.length/N));t.L.forEach(c=>c.ev=keys[i]);before+=t.L.length});bumpEval(s);return keys.length}
function lotsOf(s){const keys=lotKeys(s);const m=new Map(keys.map(k=>[k,{key:k,tables:[],n:0}]));const T=allTables(s);let un=0;
  T.forEach(t=>{const o=tableOwner(t.L);t.L.forEach(c=>{if(!c.ev)un++});if(o){if(!m.has(o))m.set(o,{key:o,tables:[],n:0,extra:true});const x=m.get(o);x.tables.push(t);x.n+=t.L.filter(c=>c.ev===o).length}});
  return{lots:[...m.values()],un,T}}
function tablesSummary(tables){const by={};tables.forEach(t=>(by[t.g]=by[t.g]||[]).push(t.k+1));return GR.filter(g=>by[g]).map(g=>{const ks=by[g].sort((a,b)=>a-b);const rs=[];let a=ks[0],q=ks[0];for(const k of ks.slice(1)){if(k===q+1){q=k;continue}rs.push(a===q?`table ${a}`:`tables ${a} à ${q}`);a=q=k}rs.push(a===q?`table ${a}`:`tables ${a} à ${q}`);return `${GL(g)}, ${rs.join(', ')}`}).join(' ; ')}
const lum=h=>{const c=hex2rgb(safeColor(h));return(0.299*c[0]+0.587*c[1]+0.114*c[2])/255};
const canAdmin=()=>me().role==='admin';
const ADMIN_ACTS=new Set(['unlockM','unlockGo','reqRefuse','import','impGo','toggleAdd','dos','askDel','delC','editC','merge','mvOpen','mvPick','mvGo','swOpen','swPick','swMode','swGo','delAsk','renum','renumGo','bulkMove','selClear','newSess','barAdd','barDel','ceintReset','demoCopy','delSess','delSessGo','reset','askReset','logoDel']);
const ADMIN_CH=new Set(['sel','selAll','impF','restore','logo','ceintC','ceintS','ceintB','bart','chef','mnom']);
const ADMIN_FORMS=new Set(['add','newSess','editC']);
const denyAdmin=()=>toast("Action réservée à l'administrateur de la ligue");
const safeColor=c=>/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(String(c||''))?c:'#999999';
const safeImg=u=>/^data:image\/(png|jpe?g|webp);base64,[a-z0-9+\/=]+$/i.test(String(u||''))?u:'';
const CN=g=>(S.ceintures[String(g)]||{}).nom||'';
function beltI(g,cls=''){const b0=S.ceintures[String(g)]||{c:'#999',s:'',nom:''};const b={nom:b0.nom,c:safeColor(b0.c),s:b0.s?safeColor(b0.s):''};return `<i class="belt ${cls}" style="--b:${esc(b.c)};--s:${esc(b.s||b.c)}" title="Ceinture ${esc(b.nom)}"></i>`}
const gchip=g=>`<span class="gch" title="${esc(CN(+g+1))} → ${esc(CN(g))}">${beltI(g)}${GL(g)}</span>`;
const candsOf=(s,g)=>visCands(s).filter(c=>c.grade===g).sort((a,b)=>(a.no||1e9)-(b.no||1e9));
function tableOf(c){let t=10;try{if(S&&S.regles&&S.regles.table)t=S.regles.table}catch(e){}return Math.floor(((c.no||1)-1)/t)}
function tablesOf(s,g){const m=new Map();for(const c of candsOf(s,g)){const k=tableOf(c);if(!m.has(k))m.set(k,[]);m.get(k).push(c)}return [...m.entries()].sort((a,b)=>a[0]-b[0]).map(([k,L])=>({k,L}))}
function gstats(s,C,g){
  const L=g?candsOf(s,g):visCands(s);const o={ins:L.length,abs:0,pres:0,adm:0,ech:0,enc:0,todo:0,mc:[0,0,0,0],sum:0,nc:0};
  for(const c of L){const r=C.res.get(c.id);o[r.st]++;if(r.complete){o.sum+=r.moy;o.nc++}if(r.st==='adm'){const i=menIdx(r.moy);if(i)o.mc[i-1]++}}
  o.pres=o.ins-o.abs;o.moy=o.nc?o.sum/o.nc:null;o.taux=pct(o.adm,o.adm+o.ech);return o;
}
const gradesIn=s=>GR.filter(g=>visCands(s).some(c=>c.grade===g));

/* ---------- UI state ---------- */
const ui={view:'accueil',q:'',fg:'',fc:'',fd:'',insLim:100,addOpen:false,confirmDel:null,
  as:(()=>{try{return localStorage.getItem('keupro.as')||'admin'}catch(e){return'admin'}})(),pr:{classement:{o:'auto',scope:'cur'},stats:{o:'auto',scope:'cur'}},prK:null,sel:new Set(),undo:[],mvT:null,mvM:'',sw:null,bg:null,sai:{g:null,grp:0,idx:0,mode:(window.innerWidth>=960?'grille':'fiche')},cg:null,cclub:'',cadm:false,stg:'',bareG:'8'};

function toast(msg,undo){const t=$('#toast');t.innerHTML=esc(msg)+(undo?'<button class="toast-btn" data-act="undo">Annuler</button>':'');t.hidden=false;clearTimeout(t._t);t._t=setTimeout(()=>t.hidden=true,undo?7000:2600)}
function snap(s){ui.undo.push({sid:s.id,c:JSON.stringify(s.cands)});if(ui.undo.length>15)ui.undo.shift()}
function addLog(s,x){(s.log=s.log||[]).unshift({t:Date.now(),x});if(s.log.length>300)s.log.length=300}
function remapNotes(c,g){const ob=BAR()[c.grade]||[],nb=BAR()[g]||[];let kept=0;const notes=nb.map(e=>{const j=ob.findIndex(o=>norm(o.n)===norm(e.n)&&+o.m===+e.m);if(j>=0&&c.notes[j]!=null){kept++;return c.notes[j]}return null});return{notes,kept,had:c.notes.filter(v=>v!=null).length}}
function moveCand(s,c,g,motif){if(g===c.grade)return;const from=c.grade,no=nextNo(s,g);c.notes=remapNotes(c,g).notes;c.grade=g;c.no=no;addLog(s,`${c.nom} déplacé du ${GL(from)} (${CN(from)}) au ${GL(g)} (${CN(g)}), n° ${no}${motif?' — '+motif:''}`)}
function openModal(html){const m=$('#modal');m.innerHTML=`<div class="mbox" role="dialog" aria-modal="true">${html}</div>`;m.hidden=false;const f=m.querySelector('input,select,textarea');if(f&&window.innerWidth>700)f.focus()}
function closeModal(){const m=$('#modal');m.hidden=true;m.innerHTML='';if(ui.pendingRender){ui.pendingRender=false;setTimeout(softRender,30)}}

/* ---------- shell ---------- */
function renderShell(){
  const bn=BNAV.filter(([v])=>allowedView(v));$('#bnav').style.gridTemplateColumns=`repeat(${bn.length},1fr)`;
  const as=$('#asSel');if(as){as.hidden=MODE==='cloud';if(MODE!=='cloud'){const s0=sess();as.innerHTML=`<option value="admin" ${(ui.as||'admin')==='admin'?'selected':''}>Vue : administrateur</option>`+people().map(p=>`<option value="${esc(p.key)}" ${ui.as===p.key?'selected':''}>Vue : ${esc(shortLabel(p.key))}${s0&&s0.chef===p.key?' (président)':''}</option>`).join('')}}
  $('#sidenav').innerHTML=NAV.map(([lbl,items])=>`<div class="lbl">${lbl}</div>`+items.filter(([v])=>allowedView(v)).map(([v,t])=>`<a href="#${v}" class="${ui.view===v?'on':''}"><svg viewBox="0 0 24 24">${ICONS[v]}</svg>${t}</a>`).join('')).join('');
  $('#bnav').innerHTML=bn.map(([v,t])=>`<a href="#${v}" class="${ui.view===v?'on':''}"><svg viewBox="0 0 24 24">${ICONS[v]}</svg>${t}</a>`).join('');
  $('#sessSel').innerHTML=S.sessions.map(s=>`<option value="${s.id}" ${s.id===S.cur?'selected':''}>${esc(s.titre)}${s.demo?' · démo':''}</option>`).join('');
  $('#ligueName').textContent=S.ligue.nom;shellCloud();if(MODE==='cloud'){try{localStorage.setItem('keupro.cur.'+AUTH.ligue.id,S.cur)}catch(e){}}$('#fedName').textContent=S.ligue.fed;
}
function render(){if(!allowedView(ui.view))ui.view='accueil';document.body.classList.toggle('is-landing',['bienvenue','connexion','ma-ligue','chargement'].includes(ui.view));renderShell();const f=VIEWS[ui.view]||VIEWS.accueil;$('#view').innerHTML=f();
  const s=curSess();const SV=['accueil','inscriptions','jury','bordereaux','saisie','classement','statistiques','rapport'];
  if(s&&SV.includes(ui.view)){const extra=isLocked(s)?lockBanner(s):closeCard(s,['accueil','jury'].includes(ui.view));if(extra){const h=$('#view').querySelector(':scope > .hero, :scope > .page-h');if(h)h.insertAdjacentHTML('afterend',extra);else $('#view').insertAdjacentHTML('afterbegin',extra)}}
  if(LK())lockView()}
function go(v){if(location.hash!=='#'+v)location.hash=v;else{ui.view=v;render()}window.scrollTo(0,0)}
window.addEventListener('hashchange',()=>{const v=location.hash.slice(1);if(VIEWS[v]){ui.view=v;render();window.scrollTo(0,0)}});

function emptySession(){
  return `<div class="card empty"><h2>Aucun candidat dans cette session</h2><p>Importez la liste d'inscription (Word ou Excel) ou ajoutez les candidats un par un. Keupro répartit ensuite automatiquement les candidats par grade et par table de jury.</p>${canAdmin()?'<div class="row"><button class="btn pri" data-act="import">Importer une liste</button><button class="btn" data-act="go" data-v="inscriptions">Ajouter manuellement</button></div>':'<p class="note">L\'administrateur de la ligue n\'a pas encore ajouté de candidats à cette session.</p>'}</div>`;
}

/* ---------- VIEWS ---------- */
const VIEWS={};
VIEWS.accueil=function(){
  const s=sess(),C=computed();if(!seeAll(s))return evaluatorHome(s);
  const head=`<section class="hero"><div><div class="eyebrow">${esc(fdate(s.date))}${s.lieu?' · '+esc(s.lieu):''}${s.demo?' · données de démonstration':''}</div><h1>${esc(s.titre)}</h1><p>${esc(S.ligue.nom)} — ${esc(S.ligue.fed)}</p></div>
  <div class="row">${canAdmin()?'<button class="btn" data-act="import"><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>Importer</button>':''}<button class="btn pri" data-act="go" data-v="saisie"><svg viewBox="0 0 24 24">${ICONS.saisie}</svg>Saisir des notes</button></div></section>`;
  if(!s.cands.length)return head+emptySession();
  const T=gstats(s,C,null);const grades=gradesIn(s);
  const ntables=grades.reduce((a,g)=>a+tablesOf(s,g).length,0);
  const inc=s.cands.filter(c=>(c.dos&7)!==7).length;
  const noted=T.adm+T.ech;
  const step=(n,v,t,sub,state)=>`<button class="step ${state}" data-act="go" data-v="${v}"><span class="no">${n}</span><span><b>${t}</b><span>${sub}</span></span></button>`;
  const steps=`<div class="card steps">${step(1,'inscriptions','Inscriptions',`${T.ins} candidats${inc?` · ${inc} dossier${inc>1?'s':''} incomplet${inc>1?'s':''}`:''}`,'done')}${step(2,'jury','Jury et lots',lotKeys(s).length?`${lotKeys(s).length} évaluateurs, ${ntables} tables`:'à organiser',lotKeys(s).length&&!s.cands.some(c=>!c.ev)?'done':'act')}${step(3,'saisie','Évaluation',`${noted} / ${T.pres} notés`,noted>=T.pres?'done':'act')}${step(4,'classement','Classement',noted?`${T.adm} admis`:'en attente',noted>=T.pres?'done':'')}${step(5,'rapport','Rapport FITKD',noted>=T.pres?'prêt à exporter':'se remplit seul','')}</div>`;
  const kpi=(k,v,s2,bar,cls='')=>`<div class="card kpi"><div class="k">${k}</div><div class="v">${v}</div><div class="s">${s2}</div>${bar!=null?`<div class="bar ${cls}"><i style="width:${Math.min(100,bar)}%"></i></div>`:''}</div>`;
  const kpis=`<div class="kpis">${kpi('Inscrits',fint(T.ins),`${grades.length} grades sollicités`)}${kpi('Présents',fint(T.pres),`${T.abs} absent${T.abs>1?'s':''}`)}${kpi('Notés',`${noted}<span class="muted" style="font-size:20px"> / ${T.pres}</span>`,`${T.enc} en cours`,pct(noted,T.pres))}${kpi('Taux de réussite',T.taux==null?'—':fmt(T.taux,1)+'<span style="font-size:20px"> %</span>',`${T.adm} admis · ${T.ech} échecs`,T.taux,'ok')}${kpi('Moyenne générale',T.moy==null?'—':fmt(T.moy,1),'sur 100 · seuil '+REG().seuil)}</div>`;
  const prog=grades.map(g=>{const o=gstats(s,C,g);const n=o.adm+o.ech;return `<div class="gp">${gchip(g)}<div><div class="bar ${n>=o.pres?'ok':''}"><i style="width:${pct(n,o.pres)||0}%"></i></div></div><div class="meta num">${n}/${o.pres} notés · ${o.taux==null?'—':fmt(o.taux,0)+' %'} admis</div><button class="btn sm" data-act="saisieG" data-g="${g}">Saisir</button></div>`}).join('');
  // controls
  const al=[];
  for(const c of s.cands){const r=C.res.get(c.id);for(const i of r.over){const e=BAR()[c.grade][i];al.push(`<div class="li"><span class="alert-ic ko">!</span><div class="grow"><div class="t1">${esc(c.nom)}</div><div class="t2">${GL(c.grade)} · ${esc(e.n)} : <b>${fmt(+c.notes[i],0)}</b> pour un maximum de ${e.m}</div></div><button class="btn sm" data-act="fix" data-id="${c.id}">Corriger</button></div>`)}}
  const enc=s.cands.filter(c=>C.res.get(c.id).st==='enc').length;
  const seen=new Map();let dup=0;for(const c of s.cands){const k=norm(c.nom)+'|'+c.grade;if(seen.has(k))dup++;else seen.set(k,1)}
  if(enc)al.push(`<div class="li"><span class="alert-ic warn">${enc}</span><div class="grow"><div class="t1">Notes incomplètes</div><div class="t2">Candidats présents avec au moins une épreuve sans note</div></div><button class="btn sm" data-act="go" data-v="saisie">Compléter</button></div>`);
  if(inc)al.push(`<div class="li"><span class="alert-ic warn">${inc}</span><div class="grow"><div class="t1">Dossiers incomplets</div><div class="t2">Passeport, assurance ou licence sportive manquant</div></div><button class="btn sm" data-act="insInc">Voir</button></div>`);
  if(dup)al.push(`<div class="li"><span class="alert-ic warn">${dup}</span><div class="grow"><div class="t1">Doublons possibles</div><div class="t2">Même nom inscrit deux fois au même grade</div></div><button class="btn sm" data-act="go" data-v="inscriptions">Vérifier</button></div>`);
  {const un=s.cands.filter(c=>!c.ev).length;if(un)al.push(`<div class="li"><span class="alert-ic warn">${un}</span><div class="grow"><div class="t1">Candidat${un>1?'s':''} sans évaluateur</div><div class="t2">${lotKeys(s).length?'Inscrits après la répartition, ou lots à refaire':'Aucun évaluateur convoqué pour cette session'}</div></div><button class="btn sm" data-act="go" data-v="jury">Répartir</button></div>`);
   if(!s.chef)al.push(`<div class="li"><span class="alert-ic warn">!</span><div class="grow"><div class="t1">Président du jury non désigné</div><div class="t2">Il supervise tous les lots et peut réaffecter des tables</div></div><button class="btn sm" data-act="go" data-v="jury">Désigner</button></div>`)}
  if((s.log||[]).length)al.push(`<div class="li"><span class="alert-ic ok">${s.log.length}</span><div class="grow"><div class="t1">Correction${s.log.length>1?'s':''} enregistrée${s.log.length>1?'s':''}</div><div class="t2">${esc(s.log[0].x)}</div></div><button class="btn sm" data-act="go" data-v="inscriptions">Journal</button></div>`);
  if(!al.length)al.push(`<div class="li"><span class="alert-ic ok">✓</span><div class="grow"><div class="t1">Aucune anomalie détectée</div><div class="t2">Notes dans le barème, dossiers complets</div></div></div>`);
  const majors=grades.map(g=>{const L=(C.by[g]||[]).filter(c=>C.res.get(c.id).rk===1);if(!L.length)return'';const c=L[0],r=C.res.get(c.id);return `<div class="li">${gchip(g)}<div class="grow"><div class="t1">${esc(c.nom)}${L.length>1?` <span class="muted">+${L.length-1} ex æquo</span>`:''}</div><div class="t2">${esc(c.club||'Club non renseigné')}</div></div><b class="num">${fmt(r.moy,2)}</b></div>`}).join('')||`<div class="li"><div class="grow t2">Les majors apparaîtront dès que les premières fiches seront complètes.</div></div>`;
  return head+steps+kpis+`<div class="grid2"><div class="card"><div class="card-h"><div><h3>Avancement par grade</h3><p>Fiches complètes sur candidats présents</p></div></div>${prog}</div>
  <div class="card"><div class="card-h"><div><h3>Contrôles automatiques</h3><p>Vérifiés à chaque saisie</p></div><span class="pill ${al.length&&al[0].includes('alert-ic ok')?'ok':'warn'}">${al[0].includes('alert-ic ok')?'Conforme':al.length+' point'+(al.length>1?'s':'')}</span></div><div class="list">${al.slice(0,8).join('')}</div></div></div>
  <div class="card"><div class="card-h"><div><h3>Majors de promotion</h3><p>Meilleure moyenne de chaque grade</p></div><button class="btn sm" data-act="go" data-v="classement">Voir les classements</button></div><div class="list">${majors}</div></div>`;
};

VIEWS.inscriptions=function(){
  const s=sess();const clubs=[...new Set(s.cands.map(c=>c.club).filter(Boolean))].sort();
  const counts={};s.cands.forEach(c=>counts[c.grade]=(counts[c.grade]||0)+1);
  const add=ui.addOpen?`<form class="card pad" id="addForm" data-form="add" style="display:flex;flex-direction:column;gap:12px"><h3>Nouveau candidat</h3><div class="fgrid">
   <label class="field"><span>Nom et prénoms</span><input type="text" id="aNom" required autocomplete="off" placeholder="ex. KOUASSI AYA GRÂCE"></label>
   <label class="field"><span>Club</span><input type="text" id="aClub" list="clubList" autocomplete="off"></label>
   <label class="field"><span>Grade sollicité</span><select id="aGrade">${GR.map(g=>`<option value="${g}">${GL(g)}</option>`).join('')}</select></label></div>
   <div class="row"><label class="sw"><input type="checkbox" id="aP" checked>Passeport</label><label class="sw"><input type="checkbox" id="aA" checked>Assurance</label><label class="sw"><input type="checkbox" id="aL" checked>Licence sportive</label><span style="flex:1"></span><button type="button" class="btn ghost" data-act="toggleAdd">Fermer</button><button class="btn pri" type="submit">Ajouter</button></div></form>`:'';
  return `<div class="page-h"><div><div class="eyebrow">Étape 1</div><h1>Inscriptions</h1><p>${s.cands.length} candidats · ${clubs.length} clubs. Cliquez sur P, A ou L pour valider le passeport, l'assurance et la licence sportive. « Corriger » permet de changer un candidat de grade ou de l'intervertir avec un autre ; cochez plusieurs lignes pour les déplacer ensemble.</p></div>
  ${canAdmin()?'<div class="row"><button class="btn" data-act="import"><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>Importer Word / Excel</button><button class="btn pri" data-act="toggleAdd"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>Ajouter</button></div>':'<span class="pill mu">Lecture seule · évaluateur</span>'}</div>
  ${add}<datalist id="clubList">${clubs.map(c=>`<option value="${esc(c)}">`).join('')}</datalist>
  <div class="card"><div class="card-h" style="border-bottom:1px solid var(--line)"><div class="bar-tools" style="width:100%">
   <input type="search" id="q" placeholder="Rechercher un nom ou un club" value="${esc(ui.q)}" data-in="q" aria-label="Rechercher">
   <select id="fg" data-ch="fg" aria-label="Filtrer par grade"><option value="">Tous les grades</option>${GR.filter(g=>counts[g]).map(g=>`<option value="${g}" ${ui.fg===g?'selected':''}>${GL(g)} (${counts[g]})</option>`).join('')}</select>
   <select id="fc" data-ch="fc" aria-label="Filtrer par club"><option value="">Tous les clubs</option>${clubs.map(c=>`<option ${ui.fc===c?'selected':''}>${esc(c)}</option>`).join('')}</select>
   <select id="fd" data-ch="fd" aria-label="Filtrer par dossier"><option value="">Tous les dossiers</option><option value="inc" ${ui.fd==='inc'?'selected':''}>Dossiers incomplets</option><option value="ok" ${ui.fd==='ok'?'selected':''}>Dossiers complets</option></select>
  </div></div><div id="insTable">${insTable()}</div></div>
  ${clubsPanel(s)}${journal(s)}`;
};
function insFiltered(){const s=sess(),q=norm(ui.q);return s.cands.filter(c=>(!ui.fg||c.grade===ui.fg)&&(!ui.fc||c.club===ui.fc)&&(!ui.fd||(ui.fd==='inc'?(c.dos&7)!==7:(c.dos&7)===7))&&(!q||norm(c.nom).includes(q)||norm(c.club).includes(q)))}
function insTable(){
  const L=insFiltered();if(!sess().cands.length)return emptySession();
  if(!L.length)return `<div class="empty"><p>Aucun candidat ne correspond à ces filtres.</p></div>`;
  const rows=L.slice(0,ui.insLim).map((c,i)=>`<tr><td><input ${canAdmin()?'':'hidden'} type="checkbox" class="ck" data-ch="sel" data-id="${c.id}" ${ui.sel.has(c.id)?'checked':''} aria-label="Sélectionner ${esc(c.nom)}"></td><td class="n muted">${c.no}</td><td><b>${esc(c.nom)}</b>${c.absent?' <span class="pill mu">Absent</span>':''}</td><td>${esc(c.club)||'<span class="muted">—</span>'}</td><td>${gchip(c.grade)}</td>
   <td><span class="dos">${[[1,'P','Passeport'],[2,'A','Assurance'],[4,'L','Licence sportive']].map(([b,l,t])=>`<button class="${c.dos&b?'on':'off'}" data-act="dos" data-id="${c.id}" data-b="${b}" title="${t}">${l}</button>`).join('')}</span></td>
   <td style="text-align:right;white-space:nowrap">${canAdmin()?`<button class="btn sm" data-act="cm" data-id="${c.id}">Corriger</button> `:''}${ui.confirmDel===c.id?`<button class="btn sm danger" data-act="delC" data-id="${c.id}">Confirmer la suppression</button>`:`<button class="iconbtn del" data-act="askDel" data-id="${c.id}" title="Supprimer" aria-label="Supprimer">✕</button>`}</td></tr>`).join('');
  const vis=L.slice(0,ui.insLim);
  return `${selBar()}<div class="tw"><table class="t"><thead><tr><th><input type="checkbox" class="ck" data-ch="selAll" aria-label="Tout sélectionner" ${vis.length&&vis.every(c=>ui.sel.has(c.id))?'checked':''}></th><th class="n">N°</th><th>Nom et prénoms</th><th>Club</th><th>Grade sollicité</th><th>Dossier</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
  <div class="row" style="padding:12px 18px;justify-content:space-between;border-top:1px solid var(--line)"><span class="note">${Math.min(ui.insLim,L.length)} affichés sur ${L.length}</span>${L.length>ui.insLim?`<button class="btn sm" data-act="more">Afficher 100 de plus</button>`:''}</div>`;
}
function selBar(){const n=ui.sel.size;if(!n)return'';return `<div class="selbar"><b>${n} candidat${n>1?'s':''} sélectionné${n>1?'s':''}</b><span>Déplacer vers</span><select id="bulkG" aria-label="Grade de destination">${GR.map(g=>`<option value="${g}">${GL(g)} · ${esc(CN(g))}</option>`).join('')}</select><button class="btn sm pri" data-act="bulkMove">Déplacer</button><button class="btn sm ghost" data-act="selClear">Annuler la sélection</button></div>`}
function journal(s){const L=s.log||[];if(!L.length)return'';const d=t=>new Date(t).toLocaleString('fr-FR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});
  return `<details class="card"><summary><div><h3>Journal des corrections</h3><p class="note" style="margin:2px 0 0">${L.length} correction${L.length>1?'s':''} · repris dans le rapport exporté</p></div><span class="pill ac">${L.length}</span></summary><div class="list">${L.slice(0,40).map(e=>`<div class="li"><span class="note num" style="flex:none;width:92px">${d(e.t)}</span><div class="grow" style="font-size:13.5px">${esc(e.x)}</div></div>`).join('')}</div></details>`}
function clubKey(c){return norm(c).replace(/\b(TKD|TAEKWONDO|CLUB|SPORTS?|ACADEMY|ACADEMIE)\b/g,'').replace(/[^A-Z0-9 ]/g,' ').replace(/\s+/g,' ').trim()}
function clubsPanel(s){
  const cnt={};s.cands.forEach(c=>{if(c.club)cnt[c.club]=(cnt[c.club]||0)+1});
  const names=Object.keys(cnt);const sug=[];
  for(let i=0;i<names.length;i++)for(let j=0;j<names.length;j++){if(i===j)continue;const a=clubKey(names[i]),b=clubKey(names[j]);if(!a||!b)continue;
    if((a===b&&i<j)||(a!==b&&(b.startsWith(a+' ')))){const[from,to]=cnt[names[i]]<=cnt[names[j]]?[names[i],names[j]]:[names[j],names[i]];if(!sug.some(x=>x[0]===from))sug.push([from,to])}}
  const top=names.sort((a,b)=>cnt[b]-cnt[a]);
  return `<details class="card" ${sug.length?'open':''}><summary><div><h3>Clubs</h3><p class="note" style="margin:2px 0 0">${names.length} clubs${sug.length?` · ${sug.length} orthographe${sug.length>1?'s':''} à harmoniser`:''}</p></div><span class="pill ${sug.length?'warn':'ok'}">${sug.length?'À vérifier':'Harmonisés'}</span></summary>
  ${sug.length?`<div class="list">${sug.map(([f,t])=>`<div class="li"><span class="alert-ic warn">≈</span><div class="grow"><div class="t1">« ${esc(f)} » → « ${esc(t)} »</div><div class="t2">${cnt[f]} candidat${cnt[f]>1?'s':''} seront rattachés à ${esc(t)}</div></div><button class="btn sm" data-act="merge" data-f="${esc(f)}" data-t="${esc(t)}">Fusionner</button></div>`).join('')}</div>`:''}
  <div class="pad" style="display:flex;flex-wrap:wrap;gap:6px">${top.map(c=>`<span class="pill mu">${esc(c)} · ${cnt[c]}</span>`).join('')}</div></details>`;
}

VIEWS.bordereaux=function(){
  const s=sess();const grades=gradesIn(s);if(!grades.length)return `<div class="page-h"><div><div class="eyebrow">Étape 2</div><h1>Bordereaux d'évaluation</h1></div></div>`+(seeAll(s)?emptySession():noLot(s));
  if(!ui.bg||!grades.includes(ui.bg))ui.bg=grades[0];const g=ui.bg;const b=BAR()[g];const max=bmax(g);
  const size=S.regles.table;const groups=tablesOf(s,g);
  const T=b.filter(e=>e.t==='T'),P=b.filter(e=>e.t==='P');const sm=a=>a.reduce((x,e)=>x+e.m,0);
  const J=(s.jurys[g]=s.jurys[g]||{});
  const ev=`<datalist id="evList">${S.evaluateurs.map(e=>`<option value="${esc(e)}">`).join('')}</datalist>`;
  return `<div class="page-h"><div><div class="eyebrow">Étape 2</div><h1>Bordereaux d'évaluation</h1><p>Les candidats sont répartis automatiquement par grade, en tables de ${size}. Le jury désigné par la FITKD est saisi une seule fois par table. Touchez un nom pour le changer de grade ou l'intervertir : les autres candidats gardent leur numéro et leur table.</p></div>
  <div class="row">${canAdmin()?`<button class="btn" data-act="renum" data-g="${g}">Renuméroter ce grade</button>`:''}<button class="btn" data-act="bpPrev" ${seeAll(s)?'':'data-s="all"'}>${seeAll(s)?'Aperçu':'Aperçu de mes bordereaux'}</button><button class="btn pri" data-act="bprintM"><svg viewBox="0 0 24 24">${ICONS.print}</svg>Imprimer les bordereaux</button><button class="btn" data-act="xlsx"><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>Exporter les bordereaux (Excel)</button></div></div>
  <div class="tabs">${grades.map(x=>`<button class="${x===g?'on':''}" data-act="bg" data-g="${x}">${beltI(x)}${GL(x)} <span class="c">${candsOf(s,x).length}</span></button>`).join('')}</div>
  <div class="card"><div class="card-h"><div><h3>Barème · ${GL(g)}</h3><p>Ceinture ${esc(CN(+g+1))} → ${esc(CN(g))} · total sur ${max} · moyenne = total × 100 ÷ ${max} · admis à partir de ${REG().seuil}/100</p></div><button class="btn sm" data-act="go" data-v="reglages">Modifier le barème</button></div>
  <div class="tw"><table class="t"><thead><tr><th>Matières théoriques / ${sm(T)}</th><th class="n">Note sur</th><th>Matières pratiques / ${sm(P)}</th><th class="n">Note sur</th></tr></thead><tbody>
  ${Array.from({length:Math.max(T.length,P.length)},(_,i)=>`<tr><td>${T[i]?esc(T[i].n):''}</td><td class="n">${T[i]?T[i].m:''}</td><td>${P[i]?esc(P[i].n):''}</td><td class="n">${P[i]?P[i].m:''}</td></tr>`).join('')}</tbody></table></div></div>
  ${ev}<div class="groups">${groups.map(({k,L:G})=>{const j=J[k]||{};return `<div class="card"><div class="grp-h"><div><b>Table ${k+1}</b> <span class="note">n° ${k*size+1} à ${k*size+size}, ${G.length} candidat${G.length>1?'s':''}</span><div class="note">Évaluateur : <b>${esc(labelOf(tableOwner(G)))}</b></div></div><div class="row" style="gap:6px"><button class="btn sm ghost" data-act="bpPrev" data-k="${k}" title="Voir le bordereau de cette table">Aperçu</button><button class="btn sm ghost" data-act="bprintM" data-k="${k}" title="Imprimer le bordereau de cette table">Imprimer</button><button class="btn sm" data-act="saisieT" data-g="${g}" data-k="${k}">Évaluer</button></div></div>
   <div class="grp-names">${G.map(c=>`<button class="gn" data-act="cm" data-id="${c.id}" title="Corriger le grade ou la place"><span class="gn-no">${c.no}</span><span class="gn-n">${esc(c.nom)}</span>${c.absent?'<span class="pill mu">Absent</span>':''}<span class="gn-a">···</span></button>`).join('')}</div>
   <div class="jury">${[['p','Président'],['v','Vice-président'],['r','Rapporteur'],['o','Observations']].map(([f,l])=>`<label>${l}<input type="text" ${f==='o'?'':'list="evList"'} id="j-${g}-${k}-${f}" value="${esc(j[f]||'')}" data-in="jury" data-g="${g}" data-k="${k}" data-f="${f}" placeholder="${f==='o'?'Remarques du jury, imprimées sur le bordereau':'Nom — grade Dan'}"></label>`).join('')}</div></div>`}).join('')}</div>`;
};

/* --- Évaluation --- */
function saiList(){const s=sess(),u=ui.sai;const L=candsOf(s,u.g);if(u.grp==='all')return{L,off:0};return{L:L.filter(c=>tableOf(c)===u.grp),off:0}}
VIEWS.saisie=function(){
  const s=sess();const grades=gradesIn(s);if(!grades.length)return `<div class="page-h"><div><div class="eyebrow">Étape 3</div><h1>Évaluation</h1></div></div>`+(seeAll(s)?emptySession():noLot(s));
  const u=ui.sai;if(!u.g||!grades.includes(u.g)){u.g=grades[0];u.grp=0;u.idx=0}
  const all=candsOf(s,u.g);const size=S.regles.table;const TB=tablesOf(s,u.g);if(u.grp!=='all'&&!TB.some(t=>t.k===u.grp))u.grp=TB.length?TB[0].k:0;
  const C=computed();
  const grpOpts=TB.map(({k,L:G})=>{const done=G.filter(c=>{const r=C.res.get(c.id);return r.complete||r.st==='abs'}).length;return `<option value="${k}" ${u.grp===k?'selected':''}>Table ${k+1} · n° ${k*size+1}–${k*size+size} · ${done}/${G.length}${seeAll(s)?' · '+esc(shortLabel(tableOwner(G))):''}</option>`}).join('');
  const head=`<div class="page-h"><div><div class="eyebrow">Étape 3 · ${esc(s.titre)}</div><h1>Évaluation</h1><p>Chaque note est contrôlée par rapport au barème. Le total, la moyenne, la mention et le rang se calculent pendant la saisie.</p></div>
   <div class="seg" role="tablist"><button class="${u.mode==='fiche'?'on':''}" data-act="mode" data-m="fiche">Fiche (mobile)</button><button class="${u.mode==='grille'?'on':''}" data-act="mode" data-m="grille">Grille (bordereau)</button></div></div>
   <div class="tabs">${grades.map(x=>{const o=gstats(s,C,x);return `<button class="${x===u.g?'on':''}" data-act="sg" data-g="${x}">${beltI(x)}${GL(x)} <span class="c">${o.adm+o.ech}/${o.pres}</span></button>`}).join('')}</div>
   ${lockBand(s)}<div class="row"><select id="grpSel" data-ch="grp" style="max-width:420px" aria-label="Table de jury">${grpOpts}<option value="all" ${u.grp==='all'?'selected':''}>${seeAll(s)?'Toutes les tables':'Tout mon lot'} (${all.length})</option></select>${jurySummary(s,u)}</div>`;
  return head+(u.mode==='fiche'?ficheHTML():grilleHTML());
};
function lockBand(s){if(seeAll(s)){const un=s.cands.filter(c=>!c.ev).length;return isChefOf(s)?`<div class="lockband"><span><b>Président du jury</b> : vous voyez et pouvez noter tous les lots.</span>${un?`<span class="pill warn">${un} candidats sans évaluateur</span>`:''}<button class="btn sm" data-act="go" data-v="jury">Lots et réaffectations</button></div>`:''}
  const L=visCands(s);const T=allTables({cands:L});return `<div class="lockband"><span><b>Votre lot</b> : ${L.length} candidats, ${esc(tablesSummary(T))}. Les autres lots sont verrouillés.</span>${s.chef?`<span class="note">Président du jury : ${esc(labelOf(s.chef))}</span>`:''}</div>`}
function noLot(s){return `<div class="card empty"><h2>Aucun candidat ne vous est encore attribué</h2><p>${s.chef?esc(labelOf(s.chef))+', président du jury, ':'Le président du jury '}ou l'administrateur répartit les candidats entre les évaluateurs convoqués. Votre lot apparaîtra ici dès qu'il vous sera confié.</p></div>`}
function evaluatorHome(s){const C=computed();const L=visCands(s);const k=me().key;
  const head=`<section class="hero"><div><div class="eyebrow">${esc(fdate(s.date))}${s.lieu?', '+esc(s.lieu):''}</div><h1>${esc(s.titre)}</h1><p>${esc(labelOf(k))}, évaluateur${s.chef?`. Président du jury : ${esc(labelOf(s.chef))}`:''}</p></div>${L.length?`<div class="row"><button class="btn pri" data-act="go" data-v="saisie"><svg viewBox="0 0 24 24">${ICONS.saisie}</svg>Évaluer mon lot</button></div>`:''}</section>`;
  if(!L.length)return head+noLot(s);
  const T=gstats(s,C,null);const noted=T.adm+T.ech;
  const kpi=(a,b,c,bar)=>`<div class="card kpi"><div class="k">${a}</div><div class="v">${b}</div><div class="s">${c}</div>${bar!=null?`<div class="bar"><i style="width:${Math.min(100,bar)}%"></i></div>`:''}</div>`;
  const cards=gradesIn(s).flatMap(g=>tablesOf(s,g).map(({k:t,L:G})=>{const d=G.filter(c=>{const r=C.res.get(c.id);return r.complete||r.st==='abs'}).length;return `<div class="card lotcard"><div class="h">${gchip(g)}<span class="pill ${d>=G.length?'ok':d?'warn':'mu'}">${d}/${G.length}</span></div><b>Table ${t+1}</b><div class="bar ${d>=G.length?'ok':''}"><i style="width:${pct(d,G.length)}%"></i></div><button class="btn sm" data-act="saisieT" data-g="${g}" data-k="${t}">${d>=G.length?'Revoir':'Évaluer'}</button></div>`}));
  return head+`<div class="kpis" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">${kpi('Mon lot',L.length,'candidats confiés')}${kpi('Fiches complètes',noted+'<span class="muted" style="font-size:20px"> / '+T.pres+'</span>',T.abs+' absent'+(T.abs>1?'s':''),pct(noted,T.pres))}${kpi('Reste à noter',Math.max(0,T.pres-noted),'candidats présents')}</div>${lockBand(s)}
  <div class="card"><div class="card-h"><div><h3>Mes tables</h3><p>Touchez une table pour noter ses candidats. Les tables des autres évaluateurs ne sont pas accessibles.</p></div><button class="btn sm" data-act="bpPrev" data-s="all">Aperçu de mes bordereaux</button></div><div class="pad"><div class="lotcards">${cards.join('')}</div></div></div>`}
function jurySummary(s,u){if(u.grp==='all')return'';const j=(s.jurys[u.g]||{})[u.grp]||{};return j.p?`<span class="note">Jury : <b>${esc(j.p)}</b>${j.v?' · '+esc(j.v):''}</span>`:`<button class="btn sm ghost" data-act="go" data-v="bordereaux">Désigner le jury de cette table</button>`}
function quickVals(m){const out=[];for(const p of [.5,.6,.7,.8,.9,1]){const v=Math.round(m*p);if(!out.includes(v))out.push(v)}return out}
function ficheHTML(){
  const {L,off}=saiList();if(!L.length)return `<div class="card empty"><p>Aucun candidat dans cette table.</p></div>`;
  const u=ui.sai;if(u.idx>=L.length)u.idx=L.length-1;if(u.idx<0)u.idx=0;
  const C=computed();const c=L[u.idx];const b=BAR()[c.grade];
  const chips=L.map((x,i)=>{const r=C.res.get(x.id);const cl=r.st==='abs'?'abs':r.complete?'done':r.n?'enc':'';return `<button class="${cl} ${i===u.idx?'cur':''}" data-act="goc" data-k="${i}" title="${esc(x.nom)}">${x.no}</button>`}).join('');
  const sec=(t,lab)=>{const E=b.map((e,i)=>[e,i]).filter(([e])=>e.t===t);if(!E.length)return'';const mx=E.reduce((a,[e])=>a+e.m,0);
    return `<div class="sec-t"><h3>${lab}</h3><span>sur ${mx}</span></div>`+E.map(([e,i])=>{const v=c.notes[i];const bad=v!=null&&(v>e.m||v<0);return `<div class="ep"><div class="ep-n">${esc(e.n)}<small>note sur ${e.m}</small></div>
    <div class="ep-c"><button class="stp" data-act="st" data-i="${i}" data-d="-1" aria-label="Retirer 1">−</button><input class="ep-in ${bad?'bad':''}" id="ep-${i}" type="number" inputmode="decimal" min="0" max="${e.m}" step="0.5" value="${v==null?'':v}" data-in="note" data-i="${i}" aria-label="${esc(e.n)}"><button class="stp" data-act="st" data-i="${i}" data-d="1" aria-label="Ajouter 1">+</button></div>
    <div class="qk" id="qk-${i}">${quickVals(e.m).map(q=>`<button class="${v===q?'on':''}" data-act="qk" data-i="${i}" data-v="${q}">${q}</button>`).join('')}</div></div>`}).join('')};
  const body=c.absent?`<div class="absent-box"><h2>Candidat absent</h2><p>Il n'est pas classé et figure dans la liste des absents du rapport.</p><button class="btn" data-act="absent">Marquer présent</button></div>`:sec('T','Matières théoriques')+sec('P','Matières pratiques');
  return `<div class="navchips" aria-label="Candidats de la table">${chips}</div>
  <div class="card fiche"><div class="f-head"><span class="f-no">N° ${c.no}</span><div class="grow"><h2>${esc(c.nom)}</h2><div class="note">${esc(c.club||'Club non renseigné')} · ${beltI(+c.grade+1)} ${esc(CN(+c.grade+1))} → ${beltI(c.grade)} ${GL(c.grade)} (${esc(CN(c.grade))})</div></div><div class="row" style="gap:6px">${canAdmin()?`<button class="btn sm" data-act="cm" data-id="${c.id}">Corriger grade ou place</button>`:''}${c.absent?'':`<button class="btn sm" data-act="absent">Marquer absent</button>`}</div></div>
  ${body}<div class="fsum" id="fsum">${fsumHTML(c,L.length)}</div></div>`;
}
function ring(m,cls){const C=2*Math.PI*26;const d=m==null?0:C*Math.max(0,Math.min(100,m))/100;return `<svg class="ring ${cls}" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" class="rb"/><circle cx="32" cy="32" r="26" class="rf" stroke-dasharray="${d} 999" transform="rotate(-90 32 32)"/><text x="32" y="39" text-anchor="middle">${m==null?'–':Math.floor(m)}</text></svg>`}
function fsumHTML(c,n){
  const r=computed().res.get(c.id);const cls=r.st==='adm'?'ok':r.st==='ech'?'ko':r.st==='enc'?'warn':'mu';const u=ui.sai;
  return `${ring(r.moy,cls)}<div class="grow"><div class="tot">${c.absent?'Absent':`${fmt(r.tot,r.tot%1?1:0)} <span class="muted" style="font-size:15px">/ ${r.max}</span>`}</div><div class="row" style="gap:6px">${pill(r.st)}${r.st==='adm'?menChip(r.moy):''}${r.rk&&seeAll(sess())?`<span class="pill ac">Rang ${r.rk}</span>`:''}${r.over.length?'<span class="pill ko">Note hors barème</span>':''}</div></div>
  <div class="row" style="gap:8px"><button class="btn" data-act="nav" data-d="-1" ${u.idx<=0?'disabled':''}>Précédent</button><button class="btn pri" data-act="nav" data-d="1" ${u.idx>=n-1?'disabled':''}>Suivant</button></div>`;
}
function grilleHTML(){
  const {L,off}=saiList();if(!L.length)return `<div class="card empty"><p>Aucun candidat dans cette table.</p></div>`;
  const g=ui.sai.g,b=BAR()[g],C=computed();
  const th=b.map(e=>`<th class="${e.t==='T'?'th-t':''}" title="${esc(e.n)}"><div class="gh">${esc(e.n)}</div><small>/${e.m}</small></th>`).join('');
  const rows=L.map((c,ri)=>{const r=C.res.get(c.id);return `<tr class="${c.absent?'abs':''}" id="gr-${c.id}"><td class="num muted">${c.no}</td><td class="nm" title="${esc(c.nom)}"><button class="gn-btn" data-act="cm" data-id="${c.id}">${esc(c.nom)}</button></td>
   ${b.map((e,i)=>{const v=c.notes[i];const bad=v!=null&&(v>e.m||v<0);return `<td><input class="g-in ${bad?'bad':''}" type="number" inputmode="decimal" min="0" max="${e.m}" step="0.5" id="g-${c.id}-${i}" value="${v==null?'':v}" data-in="gnote" data-id="${c.id}" data-i="${i}" data-r="${ri}" data-c="${i}" ${c.absent?'disabled':''} aria-label="${esc(c.nom)} — ${esc(e.n)}"></td>`}).join('')}
   <td class="num" id="gt-${c.id}"><b>${c.absent?'':fmt(r.tot,r.tot%1?1:0)}</b></td><td class="num" id="gm-${c.id}">${r.moy==null?'':fmt(r.moy,2)}</td><td id="gs-${c.id}">${pill(r.st)}${r.st==='adm'?' '+menChip(r.moy):''}</td><td class="num rkc" id="gk-${c.id}">${seeAll(sess())?(r.rk||''):''}</td>
   <td><input type="checkbox" data-ch="gabs" data-id="${c.id}" ${c.absent?'checked':''} aria-label="Absent" style="width:18px;height:18px;accent-color:var(--accent)"></td></tr>`}).join('');
  return `<div class="card"><div class="tw" style="max-height:72vh;overflow:auto"><table class="grid"><thead><tr><th>N°</th><th style="text-align:left;position:sticky;left:0;z-index:2">Nom et prénoms</th>${th}<th>Total<small>/${bmax(g)}</small></th><th>Moy.<small>/100</small></th><th>Résultat · mention</th><th>Rang</th><th>Abs.</th></tr></thead><tbody>${rows}</tbody></table></div>
  <div class="row note" style="padding:10px 16px;border-top:1px solid var(--line)">Entrée ou ↓ : candidat suivant · ↑ : candidat précédent · colonnes teintées : matières théoriques · touchez un nom pour corriger son grade ou sa place.</div></div>`;
}
function setNote(c,i,raw){
  const e=BAR()[c.grade][i];let v=raw===''||raw==null?null:Number(String(raw).replace(',','.'));if(v!=null&&!isFinite(v))v=null;
  c.notes[i]=v;save();return v!=null&&(v>e.m||v<0);
}
function refreshGridRow(c){
  const C=computed();const r=C.res.get(c.id);
  const set=(id,h)=>{const el=document.getElementById(id);if(el)el.innerHTML=h};
  set('gt-'+c.id,`<b>${c.absent?'':fmt(r.tot,r.tot%1?1:0)}</b>`);set('gm-'+c.id,r.moy==null?'':fmt(r.moy,2));set('gs-'+c.id,`${pill(r.st)}${r.st==='adm'?' '+menChip(r.moy):''}`);
  const {L}=saiList();if(seeAll(sess()))for(const x of L){const el=document.getElementById('gk-'+x.id);if(el)el.textContent=C.res.get(x.id).rk||''}
}
function refreshFiche(c){const {L}=saiList();const f=$('#fsum');if(f)f.innerHTML=fsumHTML(c,L.length);
  const C=computed();const r=C.res.get(c.id);const btn=document.querySelector('.navchips .cur');if(btn){btn.className='cur '+(r.st==='abs'?'abs':r.complete?'done':r.n?'enc':'')}}

/* --- Classement --- */
VIEWS.classement=function(){
  const s=sess(),C=computed();const grades=gradesIn(s);if(!grades.length)return `<div class="page-h"><div><div class="eyebrow">Étape 4</div><h1>Classement par ordre de mérite</h1></div></div>`+emptySession();
  if(!ui.cg||!grades.includes(ui.cg))ui.cg=grades[0];const g=ui.cg;const o=gstats(s,C,g);
  let R=(C.by[g]||[]).slice();const clubs=[...new Set(candsOf(s,g).map(c=>c.club).filter(Boolean))].sort();
  if(ui.cclub)R=R.filter(c=>c.club===ui.cclub);if(ui.cadm)R=R.filter(c=>C.res.get(c.id).st==='adm');
  const top=(C.by[g]||[]).filter(c=>C.res.get(c.id).rk<=3).slice(0,3);
  const pod=top.length?`<div class="podium">${top.map((c,i)=>{const r=C.res.get(c.id);return `<div class="card pod r${i+1}"><span class="rk">${r.rk}${r.rk===1?'er':'e'}</span><div class="nm">${esc(c.nom)}</div><div class="sc">${fmt(r.moy,2)}</div>${menChip(r.moy)}<div class="cl">${esc(c.club||'—')}</div></div>`}).join('')}</div>`:'';
  const b=BAR()[g];const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0),pm=bmax(g)-tm;
  const rows=R.map(c=>{const r=C.res.get(c.id);return `<tr><td class="rkc">${r.rk}</td><td><b>${esc(c.nom)}</b></td><td>${esc(c.club)||'<span class="muted">—</span>'}</td><td class="n">${fmt(r.th,r.th%1?1:0)}</td><td class="n">${fmt(r.pr,r.pr%1?1:0)}</td><td class="n">${fmt(r.tot,r.tot%1?1:0)}</td><td class="n"><b>${fmt(r.moy,2)}</b></td><td>${pill(r.st)}</td><td>${menChip(r.moy)}</td></tr>`}).join('');
  const others=candsOf(s,g).filter(c=>!C.res.get(c.id).complete);
  return `<div class="page-h"><div><div class="eyebrow">Étape 4</div><h1>Classement par ordre de mérite</h1><p>Rang calculé sur la moyenne /100 parmi les candidats présents et entièrement notés. Ex æquo : même rang, départagés à l'affichage par la note pratique.</p></div>
  <div class="row"><button class="btn pri" data-act="printM" data-k="classement"><svg viewBox="0 0 24 24">${ICONS.print}</svg>Imprimer (PDF A4)</button><button class="btn" data-act="xlsx"><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>Exporter (Excel)</button></div></div>
  <div class="tabs">${grades.map(x=>`<button class="${x===g?'on':''}" data-act="cg" data-g="${x}">${beltI(x)}${GL(x)} <span class="c">${(C.by[x]||[]).length}</span></button>`).join('')}</div>
  <div class="kpis" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr))">
   <div class="card kpi"><div class="k">Classés</div><div class="v">${(C.by[g]||[]).length}</div><div class="s">${o.abs} absent${o.abs>1?'s':''}${o.enc+o.todo?` · ${o.enc+o.todo} non notés`:''}</div></div>
   <div class="card kpi"><div class="k">Admis</div><div class="v">${o.adm}</div><div class="s">${o.taux==null?'—':fmt(o.taux,1)+' % de réussite'}</div></div>
   <div class="card kpi"><div class="k">Moyenne du grade</div><div class="v">${o.moy==null?'—':fmt(o.moy,1)}</div><div class="s">sur 100</div></div>
   <div class="card kpi"><div class="k">Mentions TB et +</div><div class="v">${o.mc[2]+o.mc[3]}</div><div class="s">${o.mc[3]} exceptionnelle${o.mc[3]>1?'s':''}</div></div></div>
  ${pod}
  <div class="card"><div class="card-h"><h3>${GL(g)} · ${R.length} candidats</h3><div class="row"><select data-ch="cclub" style="width:auto;max-width:220px" aria-label="Club"><option value="">Tous les clubs</option>${clubs.map(c=>`<option ${ui.cclub===c?'selected':''}>${esc(c)}</option>`).join('')}</select><label class="sw"><input type="checkbox" data-ch="cadm" ${ui.cadm?'checked':''}>Admis uniquement</label></div></div>
  ${R.length?`<div class="tw"><table class="t"><thead><tr><th>Rang</th><th>Nom et prénoms</th><th>Club</th><th class="n">Théorie /${tm}</th><th class="n">Pratique /${pm}</th><th class="n">Total /${bmax(g)}</th><th class="n">Moy. /100</th><th>Résultat</th><th>Mention</th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="empty"><p>Aucun candidat classé avec ces filtres.</p></div>`}</div>
  ${others.length?`<div class="card"><div class="card-h"><h3>Non classés (${others.length})</h3><p>Absents ou fiches incomplètes</p></div><div class="pad" style="display:flex;flex-wrap:wrap;gap:6px">${others.map(c=>`<span class="pill mu">${esc(c.nom)} · ${ST[C.res.get(c.id).st][1]}</span>`).join('')}</div></div>`:''}`;
};

/* --- Statistiques --- */
function hb(label,val,max,text,color,mark){return `<div class="hb"><div class="hb-l" title="${esc(label.replace(/<[^>]+>/g,''))}">${label}</div><div class="hb-t"><div class="hb-f" style="width:${max?Math.max(0,Math.min(100,val*100/max)):0}%;background:${color}"></div>${mark!=null?`<span class="hb-mark" style="left:${mark}%"></span>`:''}</div><div class="hb-v">${text}</div></div>`}
VIEWS.statistiques=function(){
  const s=sess(),C=computed();const grades=gradesIn(s);if(!grades.length)return `<div class="page-h"><div><h1>Statistiques</h1></div></div>`+emptySession();
  const g=ui.stg&&grades.includes(ui.stg)?ui.stg:'';const T=gstats(s,C,g||null);
  const tabs=`<div class="tabs"><button class="${!g?'on':''}" data-act="stg" data-g="">Tous les grades</button>${grades.map(x=>`<button class="${x===g?'on':''}" data-act="stg" data-g="${x}">${beltI(x)}${GL(x)}</button>`).join('')}</div>`;
  const kp=`<div class="kpis"><div class="card kpi"><div class="k">Présents</div><div class="v">${T.pres}</div><div class="s">${fmt(pct(T.pres,T.ins),0)} % des inscrits</div></div><div class="card kpi"><div class="k">Admis</div><div class="v">${T.adm}</div><div class="s">${T.ech} échecs</div></div><div class="card kpi"><div class="k">Taux de réussite</div><div class="v">${T.taux==null?'—':fmt(T.taux,1)+'<span style="font-size:20px"> %</span>'}</div><div class="s">admis ÷ notés</div></div><div class="card kpi"><div class="k">Moyenne</div><div class="v">${T.moy==null?'—':fmt(T.moy,1)}</div><div class="s">sur 100</div></div><div class="card kpi"><div class="k">Mentions TB et +</div><div class="v">${T.mc[2]+T.mc[3]}</div><div class="s">${fmt(pct(T.mc[2]+T.mc[3],T.adm),0)} % des admis</div></div></div>`;
  // success by grade
  const succ=grades.map(x=>{const o=gstats(s,C,x);return hb(GL(x),o.taux||0,100,o.taux==null?'—':`${fmt(o.taux,0)} %`,'var(--ok)')}).join('');
  // mentions stacked
  const mcol=['var(--ko)','var(--m1)','var(--m2)','var(--m3)','var(--m4)'];
  const stk=(g?[g]:grades).map(x=>{const o=gstats(s,C,x);const n=o.adm+o.ech;const parts=[o.ech,...o.mc];return `<div class="hb" style="grid-template-columns:minmax(96px,150px) 1fr 76px"><div class="hb-l">${GL(x)}</div><div class="stk">${n?parts.map((p,i)=>`<i style="width:${p*100/n}%;background:${mcol[i]}" title="${['Échec',...MEN][i]} : ${p}"></i>`).join(''):''}</div><div class="hb-v">${n} notés</div></div>`}).join('');
  // histogram
  const bins=Array(10).fill(0);const L=(g?candsOf(s,g):s.cands).map(c=>C.res.get(c.id)).filter(r=>r.complete);L.forEach(r=>bins[Math.min(9,Math.floor(r.moy/10))]++);const bm=Math.max(1,...bins);
  const seuilBin=Math.floor(REG().seuil/10);
  const hist=`<div class="hist">${bins.map((v,i)=>`<div class="col"><b>${v||''}</b><i style="height:${v*100/bm}%;background:${i>=seuilBin?'var(--ok)':'var(--ko)'};opacity:${i>=seuilBin?1:.75}"></i></div>`).join('')}</div><div class="hist-x">${bins.map((_,i)=>`<span>${i*10}–${i*10+10}</span>`).join('')}</div>`;
  // épreuves
  let ep='';
  if(g){const b=BAR()[g];const comp=candsOf(s,g).filter(c=>C.res.get(c.id).complete);
    const A=b.map((e,i)=>{const avg=comp.length?comp.reduce((a,c)=>a+(+c.notes[i]||0),0)/comp.length:null;return{e,p:avg==null?null:avg*100/e.m,avg}}).sort((a,b)=>(a.p??0)-(b.p??0));
    ep=`<div class="card"><div class="card-h"><div><h3>Maîtrise par épreuve · ${GL(g)}</h3><p>Moyenne obtenue en % de la note maximale, de la plus faible à la plus forte. Le repère marque le seuil d'admission.</p></div></div><div class="pad">${A.map(x=>hb(`${esc(x.e.n)} <span class="muted">(${x.e.t==='T'?'théorie':'pratique'})</span>`,x.p||0,100,x.p==null?'—':`${fmt(x.p,0)} %`,x.p!=null&&x.p<REG().seuil?'var(--warn)':'var(--accent)',REG().seuil)).join('')}</div></div>`;
  }else{
    ep=`<div class="card"><div class="card-h"><div><h3>Théorie et pratique par grade</h3><p>Moyenne en % du maximum de chaque bloc. Choisissez un grade pour le détail par épreuve.</p></div><div class="legend"><span><i style="background:var(--accent)"></i>Théorie</span><span><i style="background:var(--ink)"></i>Pratique</span></div></div><div class="pad">${grades.map(x=>{const b=BAR()[x];const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0),pm=bmax(x)-tm;const comp=candsOf(s,x).map(c=>C.res.get(c.id)).filter(r=>r.complete);const th=comp.length?comp.reduce((a,r)=>a+r.th,0)/comp.length*100/tm:null;const pr=comp.length?comp.reduce((a,r)=>a+r.pr,0)/comp.length*100/pm:null;return `<div style="padding:6px 0">${hb(GL(x)+' · théorie',th||0,100,th==null?'—':fmt(th,0)+' %','var(--accent)')}${hb('pratique',pr||0,100,pr==null?'—':fmt(pr,0)+' %','var(--ink)')}</div>`}).join('')}</div></div>`;
  }
  // clubs
  const cl={};(g?candsOf(s,g):s.cands).forEach(c=>{const k=c.club||'Club non renseigné';const r=C.res.get(c.id);const o=cl[k]=cl[k]||{ins:0,pres:0,adm:0,ech:0,sum:0,best:null};o.ins++;if(!c.absent)o.pres++;if(r.st==='adm')o.adm++;if(r.st==='ech')o.ech++;if(r.complete){o.sum+=r.moy;if(!o.best||r.moy>o.best.m)o.best={m:r.moy,n:c.nom}}});
  const CL=Object.entries(cl).filter(([,o])=>o.adm+o.ech>0).sort((a,b)=>(pct(b[1].adm,b[1].adm+b[1].ech)-pct(a[1].adm,a[1].adm+a[1].ech))||(b[1].sum/(b[1].adm+b[1].ech)-a[1].sum/(a[1].adm+a[1].ech)));
  const clubT=CL.length?`<div class="tw"><table class="t"><thead><tr><th>Club</th><th class="n">Inscrits</th><th class="n">Notés</th><th class="n">Admis</th><th class="n">Réussite</th><th class="n">Moyenne</th><th>Meilleur candidat</th></tr></thead><tbody>${CL.map(([k,o])=>{const n=o.adm+o.ech;return `<tr><td><b>${esc(k)}</b></td><td class="n">${o.ins}</td><td class="n">${n}</td><td class="n">${o.adm}</td><td class="n">${fmt(pct(o.adm,n),0)} %</td><td class="n">${fmt(o.sum/n,1)}</td><td>${o.best?esc(o.best.n)+' <span class="muted num">'+fmt(o.best.m,1)+'</span>':''}</td></tr>`}).join('')}</tbody></table></div>`:`<div class="empty"><p>Les statistiques par club apparaîtront dès que des candidats rattachés à un club seront notés.</p></div>`;
  return `<div class="page-h"><div><div class="eyebrow">${esc(s.titre)}</div><h1>Statistiques</h1><p>Résultats, mentions, niveau par épreuve et performance des clubs, mis à jour à chaque note.</p></div><button class="btn pri" data-act="printM" data-k="stats"><svg viewBox="0 0 24 24">${ICONS.print}</svg>Imprimer (PDF A4)</button></div>${tabs}${kp}
  <div class="grid-eq"><div class="card"><div class="card-h"><div><h3>Taux de réussite par grade</h3><p>Admis sur candidats notés</p></div></div><div class="pad">${succ}</div></div>
  <div class="card"><div class="card-h"><div><h3>Répartition des moyennes</h3><p>${L.length} fiches complètes · seuil d'admission ${REG().seuil}/100</p></div><div class="legend"><span><i style="background:var(--ko)"></i>Sous le seuil</span><span><i style="background:var(--ok)"></i>Admis</span></div></div><div class="pad">${hist}</div></div></div>
  <div class="card"><div class="card-h"><div><h3>Résultats et mentions</h3><p>Part de chaque résultat parmi les candidats notés</p></div><div class="legend">${['Échec',...MEN].map((m,i)=>`<span><i style="background:${mcol[i]}"></i>${m}</span>`).join('')}</div></div><div class="pad">${stk}</div></div>
  ${ep}
  ${epSection(s,C,g,grades)}
  <div class="card"><div class="card-h"><div><h3>Performance des clubs</h3><p>Classés par taux de réussite puis par moyenne</p></div></div>${clubT}</div>`;
};

/* --- Statistiques par épreuve --- */
function epData(s){const map=new Map();const sl=REG().seuil;
  for(const g of GR){const b=BAR()[g]||[];const L=s.cands.filter(c=>c.grade===g&&!c.absent);
    b.forEach((e,i)=>{const k=norm(e.n);if(!map.has(k))map.set(k,{k,n:e.n,t:e.t,byG:{},ord:map.size});
      const vals=L.map(c=>c.notes[i]).filter(v=>v!=null&&v!==''&&isFinite(v)).map(Number);if(!vals.length)return;
      const pc=vals.map(v=>Math.max(0,Math.min(100,v*100/e.m)));const n=vals.length,p=pc.reduce((a,v)=>a+v,0)/n;
      map.get(k).byG[g]={n,m:e.m,avg:vals.reduce((a,v)=>a+v,0)/n,p,mast:pc.filter(v=>v>=sl).length*100/n,min:Math.min(...vals),max:Math.max(...vals),sd:Math.sqrt(pc.reduce((a,v)=>a+(v-p)**2,0)/n)}})}
  const rows=[...map.values()].filter(r=>Object.keys(r.byG).length).sort((a,b)=>(a.t===b.t?0:a.t==='T'?-1:1)||a.ord-b.ord);
  for(const r of rows){const gs=GR.filter(g=>r.byG[g]);r.gs=gs;r.trend=gs.length>1?r.byG[gs[gs.length-1]].p-r.byG[gs[0]].p:null;
    let n=0,sp=0,sm=0;for(const g of gs){const x=r.byG[g];n+=x.n;sp+=x.p*x.n;sm+=x.mast*x.n}r.all={n,p:n?sp/n:null,mast:n?sm/n:null}}
  return rows}
const epScope=(r,g)=>g?r.byG[g]||null:r.all;
const hbin=p=>p<50?0:p<60?1:p<70?2:p<80?3:4;
function trendCell(t){if(t==null)return'<span class="trend flat">—</span>';const c=t>3?'up':t<-3?'down':'flat';return `<span class="trend ${c}">${t>3?'↑':t<-3?'↓':'→'} ${t>0?'+':''}${fmt(t,0)} pts</span>`}
function prevSession(s){const cur=s.date||'';return S.sessions.filter(x=>x!==s&&(x.date||'')<cur&&x.cands.some(c=>!c.absent&&c.notes.some(v=>v!=null))).sort((a,b)=>(b.date||'').localeCompare(a.date||''))[0]||null}
function epSection(s,C,g,grades){
  const rows=epData(s);if(!rows.length)return'';const sl=REG().seuil;
  const head=`<tr><th>Épreuve</th>${grades.map(x=>`<th class="${x===g?'sel':''}">${beltI(x)}<br>${GL(x)}</th>`).join('')}<th>Évolution</th></tr>`;
  const body=rows.map(r=>`<tr><td class="ep-l" title="${esc(r.n)}">${esc(r.n)}<small>${r.t==='T'?'théorie':'pratique'}</small></td>${grades.map(x=>{const d=r.byG[x];return d?`<td class="hc h${hbin(d.p)} ${x===g?'sel':''}" title="${esc(r.n)} · ${GL(x)} : moyenne ${fmt(d.avg,1)}/${d.m} (${fmt(d.p,0)} %) · maîtrise ${fmt(d.mast,0)} % · ${d.n} notés">${fmt(d.p,0)}</td>`:`<td class="hx ${x===g?'sel':''}">·</td>`}).join('')}<td>${trendCell(r.trend)}</td></tr>`).join('');
  const sc=rows.map(r=>({r,d:epScope(r,g)})).filter(x=>x.d&&x.d.n);
  const byP=sc.slice().sort((a,b)=>b.d.p-a.d.p);const strong=byP.slice(0,5),weak=byP.slice(-5).reverse();
  const tr=rows.filter(r=>r.trend!=null).sort((a,b)=>b.trend-a.trend);const best=tr[0],worst=tr[tr.length-1];
  const lowM=sc.slice().sort((a,b)=>a.d.mast-b.d.mast)[0];
  const ins=`<div class="insight">
   ${best&&best.trend>0?`<div><span>Meilleure progression du ${GL(best.gFirst||best.gs[0])} au ${GL(best.gs[best.gs.length-1])}</span><b>${esc(best.n)}</b>${trendCell(best.trend)} · de ${fmt(best.byG[best.gs[0]].p,0)} % à ${fmt(best.byG[best.gs[best.gs.length-1]].p,0)} %</div>`:''}
   <div><span>Épreuve la mieux réussie${g?' au '+GL(g):''}</span><b>${esc(byP[0].r.n)}</b>${fmt(byP[0].d.p,0)} % de la note maximale en moyenne</div>
   ${lowM?`<div><span>Épreuve la moins maîtrisée${g?' au '+GL(g):''}</span><b>${esc(lowM.r.n)}</b>${fmt(lowM.d.mast,0)} % des pratiquants atteignent ${sl} % de la note</div>`:''}
   ${worst&&worst.trend<-3?`<div><span>Recul le plus net en montant de grade</span><b>${esc(worst.n)}</b>${trendCell(worst.trend)}</div>`:''}</div>`;
  const lst=(L,col)=>L.map(x=>hb(`${esc(x.r.n)}`,x.d.p,100,`${fmt(x.d.p,0)} %`,col,sl)).join('');
  const det=byP.map(({r,d})=>`<tr><td><b>${esc(r.n)}</b></td><td>${r.t==='T'?'Théorie':'Pratique'}</td>${g?`<td class="n">${d.m}</td>`:`<td class="n">${r.gs.length}</td>`}<td class="n">${d.n}</td>${g?`<td class="n">${fmt(d.avg,1)}</td>`:''}<td class="n"><b>${fmt(d.p,1)} %</b></td><td class="n">${fmt(d.mast,0)} %</td>${g?`<td class="n">${fmt(d.sd,1)}</td><td class="n">${fmt(d.min,d.min%1?1:0)} – ${fmt(d.max,d.max%1?1:0)}</td>`:`<td>${trendCell(r.trend)}</td>`}</tr>`).join('');
  // comparaison entre sessions
  const ps=prevSession(s);let cmp;
  if(ps){const prev=new Map(epData(ps).map(r=>[r.k,r]));const L=sc.map(({r,d})=>{const q=prev.get(r.k);const pd=q?epScope(q,g):null;return pd&&pd.n?{r,d,delta:d.p-pd.p,pp:pd.p}:null}).filter(Boolean).sort((a,b)=>b.delta-a.delta);
    cmp=L.length?`<div class="tw"><table class="t"><thead><tr><th>Épreuve</th><th class="n">${esc(fdate(ps.date))}</th><th class="n">${esc(fdate(s.date))}</th><th>Évolution</th></tr></thead><tbody>${L.map(x=>`<tr><td><b>${esc(x.r.n)}</b></td><td class="n">${fmt(x.pp,0)} %</td><td class="n">${fmt(x.d.p,0)} %</td><td>${trendCell(x.delta)}</td></tr>`).join('')}</tbody></table></div>`:`<div class="empty"><p>Aucune épreuve commune notée dans « ${esc(ps.titre)} ».</p></div>`}
  else cmp=`<div class="empty" style="padding:26px 20px"><p>La comparaison s'affichera dès qu'une session antérieure à celle-ci aura été notée dans Keupro. Vous verrez alors, épreuve par épreuve, si le niveau de la ligue progresse d'un passage de grade à l'autre.</p></div>`;
  return `<div class="card"><div class="card-h"><div><h3>Statistiques par épreuve</h3><p>Moyenne obtenue en % de la note maximale, pour chaque épreuve et chaque grade. La colonne Évolution compare le premier et le dernier grade où l'épreuve est évaluée.</p></div>
   <div class="legend"><span><i style="background:var(--ko-soft);border:1px solid var(--ko)"></i>&lt; 50</span><span><i style="background:var(--warn-soft);border:1px solid var(--warn)"></i>50–59</span><span><i style="background:var(--m1)"></i>60–69</span><span><i style="background:var(--m2)"></i>70–79</span><span><i style="background:var(--m3)"></i>80 et +</span></div></div>
   <div class="pad" style="display:flex;flex-direction:column;gap:16px">${ins}<div class="tw"><table class="heat"><thead>${head}</thead><tbody>${body}</tbody></table></div></div></div>
  <div class="grid-eq"><div class="card"><div class="card-h"><div><h3>Points forts</h3><p>Épreuves les mieux réussies${g?' au '+GL(g):', tous grades confondus'}</p></div></div><div class="pad">${lst(strong,'var(--ok)')}</div></div>
   <div class="card"><div class="card-h"><div><h3>Points à travailler</h3><p>Épreuves les moins réussies : priorités pour les stages de formation</p></div></div><div class="pad">${lst(weak,'var(--warn)')}</div></div></div>
  <div class="card"><div class="card-h"><div><h3>Détail par épreuve${g?' · '+GL(g):''}</h3><p>Maîtrise : part des pratiquants ayant obtenu au moins ${sl} % de la note maximale de l'épreuve.${g?' Écart-type en points de pourcentage : plus il est élevé, plus le niveau est hétérogène.':''}</p></div></div>
   <div class="tw"><table class="t"><thead><tr><th>Épreuve</th><th>Type</th>${g?'<th class="n">Note sur</th>':'<th class="n">Grades</th>'}<th class="n">Notés</th>${g?'<th class="n">Moyenne</th>':''}<th class="n">Moyenne %</th><th class="n">Maîtrise</th>${g?'<th class="n">Écart-type</th><th class="n">Min – max</th>':'<th>Évolution 8e → 1er</th>'}</tr></thead><tbody>${det}</tbody></table></div></div>
  <div class="card"><div class="card-h"><div><h3>Progression entre sessions</h3><p>${ps?`Comparaison avec « ${esc(ps.titre)} »${g?' · '+GL(g):''}`:'Évolution du niveau de la ligue d\'un passage de grade à l\'autre'}</p></div></div>${cmp}</div>`;
}

/* --- Jury et lots --- */
VIEWS.jury=function(){
  const s=sess();if(!seeAll(s))return noLot(s);const adm=canAdmin(),chef=isChefOf(s);const e=evalCfg(s);const N=s.cands.length;const Q=e.quota;const need=Math.max(1,Math.ceil(N/Q));
  const keys=lotKeys(s);const E=keys.length;const P=people();const {lots,un,T}=lotsOf(s);const C=computed();
  const head=`<div class="page-h"><div><div class="eyebrow">Organisation du jury</div><h1>Jury et lots d'évaluation</h1><p>Un évaluateur est convoqué pour ${Q} candidats inscrits. Le président du jury supervise tous les lots et peut confier une table à un autre évaluateur ; chaque évaluateur ne voit et ne note que son propre lot.</p></div>
   ${N&&E?`<button class="btn pri" data-act="distrib">Répartir les ${N} candidats entre ${E} évaluateur${E>1?'s':''}</button>`:''}</div>`;
  if(!N)return head+emptySession();
  const sizes=lots.filter(l=>l.n).map(l=>l.n);const mn=sizes.length?Math.min(...sizes):0,mx=sizes.length?Math.max(...sizes):0;
  const st=!E?['warn','Aucun évaluateur convoqué']:E>=need?['ok','Effectif suffisant']:['warn','Quota exceptionnel'];
  const calc=`<p class="calc"><b>${N}</b> candidats inscrits ÷ <b>${Q}</b> par évaluateur = <b>${need}</b> évaluateur${need>1?'s':''} à convoquer.</p>
   <p class="calc">${E?`<b>${E}</b> évaluateur${E>1?'s':''} convoqué${E>1?'s':''}${e.chefLot?' (président compris)':', hors président du jury'}. ${sizes.length?`Les lots vont de ${mn} à ${mx} candidats, tables entières.`:`Environ ${Math.ceil(N/E)} candidats chacun une fois la répartition faite.`}`:'Aucun évaluateur n\'est encore convoqué.'}
   ${E&&E<need?` Il manque ${need-E} évaluateur${need-E>1?'s':''} : chacun prend environ ${Math.ceil(N/E)} candidats au lieu de ${Q}, à condition de l'accepter.`:''}</p>`;
  const seg=lots.filter(l=>l.n).map(l=>{const gs=[...new Set(l.tables.map(t=>t.g))];const c1=S.ceintures[gs[0]]||{c:'#999'},c2=S.ceintures[gs[gs.length-1]]||c1;const col=safeColor(c1.c),bar=safeColor(gs.length>1?c2.c:(c1.s||c1.c));
    return `<div class="lotseg" style="flex:${l.n} 1 0;--b:${col};--s:${bar};--t:${lum(col)>.6?'#14171f':'#fff'}" title="${esc(labelOf(l.key))} : ${l.n} candidats, ${esc(tablesSummary(l.tables))}">${esc(shortLabel(l.key))}<small>${l.n}</small></div>`}).join('')+(un?`<div class="lotseg un" style="flex:${un} 1 0" title="${un} candidats sans évaluateur">?<small>${un}</small></div>`:'');
  const chefSel=adm?`<select id="chefSel" data-ch="chef" aria-label="Président du jury"><option value="">À désigner</option>${P.map(p=>`<option value="${esc(p.key)}" ${s.chef===p.key?'selected':''}>${esc(p.label)}</option>`).join('')}</select>`:`<b>${esc(labelOf(s.chef))}</b>`;
  const convList=P.filter(p=>p.key!==s.chef).map(p=>`<label><input type="checkbox" class="ck" data-ch="conv" data-k="${esc(p.key)}" ${e.conv.includes(p.key)?'checked':''}>${esc(p.label)}</label>`).join('')||'<span class="note">Aucun évaluateur enregistré.</span>';
  const addEv=MODE==='cloud'?(adm?`<p class="note" style="margin:0">Pour ajouter un évaluateur, transmettez-lui le code d'invitation <b>${esc(AUTH.ligue.code_invitation||'')}</b> : il apparaîtra ici après avoir rejoint la ligue. Son nom affiché se règle dans Compte.</p>`:''):`<form data-form="addEval" class="row" style="gap:8px"><input type="text" id="newEv" placeholder="Nom — grade Dan, ex. B. Kouassi — 4e Dan" style="flex:1 1 220px;width:auto" aria-label="Nouvel évaluateur"><button class="btn sm" type="submit">Ajouter</button></form>`;
  const lotRows=lots.map(l=>{const L=l.tables.flatMap(t=>t.L).filter(c=>c.ev===l.key);const d=L.filter(c=>{const r=C.res.get(c.id);return r.complete||r.st==='abs'}).length;
    return `<div class="lot-row"><div class="who">${esc(labelOf(l.key))}${l.key===s.chef?' <span class="pill ac">Président</span>':''}${l.extra?' <span class="pill mu">Renfort</span>':''}<small>${l.n?esc(tablesSummary(l.tables)):'Aucune table pour l\'instant'}</small></div>
     <div><span class="pill ${l.n>Q?'warn':l.n?'ok':'mu'}">${l.n} candidat${l.n>1?'s':''}${l.n>Q?' · au-delà du quota':''}</span></div><div><div class="note num">${d}/${L.length} fiches</div><div class="bar ${L.length&&d>=L.length?'ok':''}"><i style="width:${pct(d,L.length)||0}%"></i></div></div></div>`}).join('');
  const opts=k=>[...new Set([...keys,...(s.chef?[s.chef]:[]),...lots.map(l=>l.key)])].map(x=>`<option value="${esc(x)}" ${x===k?'selected':''}>${esc(shortLabel(x))}${x===s.chef?' (président)':''}</option>`).join('');
  const tgrid=GR.filter(g=>T.some(t=>t.g===g)).map(g=>`<div style="display:flex;flex-direction:column;gap:8px"><div>${gchip(g)}</div><div class="tgrid">${T.filter(t=>t.g===g).map(t=>{const o=tableOwner(t.L);const d=t.L.filter(c=>{const r=C.res.get(c.id);return r.complete||r.st==='abs'}).length;
    return `<div class="tchip ${o?'':'un'}"><b>Table ${t.k+1}</b><span>${t.L.length} candidats, ${d} fiches faites</span><select data-ch="tabOwner" data-g="${g}" data-k="${t.k}" aria-label="Évaluateur de la table ${t.k+1} du ${GL(g)}"><option value="">Non attribuée</option>${opts(o)}</select></div>`}).join('')}</div></div>`).join('');
  return head+`<div class="card pad" style="display:flex;flex-direction:column;gap:12px"><div class="row" style="justify-content:space-between"><h3>Effectif du jury</h3><span class="pill ${st[0]}">${st[1]}</span></div>${calc}<div class="lotstrip" role="img" aria-label="Répartition des candidats par évaluateur">${seg||'<div class="lotseg un" style="flex:1">Répartition à faire</div>'}</div></div>
  <div class="grid-eq"><div class="card pad" style="display:flex;flex-direction:column;gap:12px"><h3>Président du jury</h3><p class="note" style="margin:0">Évaluateur en chef : il voit tous les bordereaux, peut noter n'importe quel candidat et confier une table à un autre évaluateur.${adm?'':' Seul l\'administrateur peut le changer.'}</p>${chefSel}
    <label class="sw"><input type="checkbox" class="ck" data-ch="chefLot" ${e.chefLot?'checked':''}>Le président du jury prend aussi un lot</label>
    <label class="field" style="max-width:260px"><span>Candidats par évaluateur pour cette session</span><input type="number" id="qSess" min="5" max="400" value="${Q}" data-ch="quota"></label></div>
   <div class="card pad" style="display:flex;flex-direction:column;gap:12px"><div class="row" style="justify-content:space-between"><h3>Évaluateurs convoqués</h3><span class="pill ${E>=need?'ok':'warn'}">${E} sur ${need} nécessaires</span></div><div class="conv-list">${convList}</div>${addEv}</div></div>
  ${un?`<div class="card"><div class="li"><span class="alert-ic warn">${un}</span><div class="grow"><div class="t1">${un} candidat${un>1?'s':''} sans évaluateur</div><div class="t2">Inscrits après la répartition, ou tables retirées à un évaluateur</div></div>${E?'<button class="btn sm" data-act="assignRest">Confier au lot le moins chargé</button>':''}</div></div>`:''}
  <div class="card"><div class="card-h"><div><h3>Lots</h3><p>Chaque lot est composé de tables entières, dans l'ordre des grades.</p></div></div>${lotRows||'<div class="empty"><p>Convoquez des évaluateurs, puis lancez la répartition.</p></div>'}</div>
  <div class="card"><div class="card-h"><div><h3>Confier une table à un autre évaluateur</h3><p>Pour qu'un évaluateur en aide un autre ou le remplace : choisissez le nouvel évaluateur de la table. Les notes déjà saisies sont conservées.</p></div></div><div class="pad" style="display:flex;flex-direction:column;gap:18px">${tgrid}</div></div>`;
};

/* --- Rapport --- */
function reportRows(s,C){return GR.map(g=>{const o=gstats(s,C,g);return{g,...o}})}
VIEWS.rapport=function(){
  const s=sess(),C=computed();const R=s.rapport=s.rapport||{};const rows=reportRows(s,C);const tot=gstats(s,C,null);
  const f=(k,l,type='text',ph='')=>`<label class="field"><span>${l}</span><input type="${type}" id="rp-${k}" value="${esc(R[k]||'')}" data-in="rap" data-k="${k}" placeholder="${ph}"></label>`;
  const ta=(k,l)=>`<label class="field"><span>${l}</span><textarea id="rp-${k}" data-in="rap" data-k="${k}">${esc(R[k]||'')}</textarea></label>`;
  const cell=(n,d)=>n?`${n}<span class="muted"> · ${fmt(pct(n,d),0)} %</span>`:'<span class="muted">0</span>';
  const tr=r=>`<tr><td>${r.g?gchip(r.g):'<b>TOTAL</b>'}</td><td class="n">${r.ins||'—'}</td><td class="n">${r.ins?r.abs:'—'}</td><td class="n">${r.ins?r.pres:'—'}</td><td class="n">${r.ins?r.ech:'—'}</td><td class="n"><b>${r.ins?r.adm:'—'}</b></td><td class="n">${r.taux==null?'—':fmt(r.taux,1)+' %'}</td>${r.mc.map(n=>`<td class="n">${r.ins?cell(n,r.adm):'—'}</td>`).join('')}</tr>`;
  const pend=tot.enc+tot.todo;
  const recal=s.cands.filter(c=>{const st=C.res.get(c.id).st;return st==='ech'||st==='abs'});
  const evals=gradesIn(s).map(g=>{const J=s.jurys[g]||{};const names=[...new Set([...(s.chef?[labelOf(s.chef)+' (président du jury)']:[]),...candsOf(s,g).map(c=>c.ev).filter(Boolean).map(labelOf),...Object.values(J).flatMap(j=>[j.p,j.v,j.r]).filter(Boolean)])];return{g,names,n:candsOf(s,g).length}});
  return `<div class="page-h"><div><div class="eyebrow">Étape 5 · Commission Formation / Évaluation</div><h1>Rapport de passage de grade</h1><p>Le tableau des résultats et la liste des recalés se remplissent seuls à partir des notes. Complétez le jury et les observations, puis exportez.</p></div>
  <div class="row"><button class="btn" data-act="repHtml">Exporter le rapport (page imprimable)</button><button class="btn pri" data-act="xlsx">Exporter en Excel</button></div></div>
  <div class="card pad" style="display:flex;flex-direction:column;gap:14px"><h3>En-tête</h3><div class="fgrid">
   <label class="field"><span>Ligue</span><input type="text" value="${esc(S.ligue.nom)}" disabled></label>
   <label class="field"><span>Date</span><input type="text" value="${esc(fdate(s.date))}" disabled></label>
   ${f('lieu','Lieu')}${f('debut','Début','time')}${f('fin','Fin','time')}</div>
   <h3 style="margin-top:6px">Jury</h3><div class="fgrid">${f('pres','Président','text','Nom — grade Dan')}${f('vp','Vice-président')}${f('rapp','Rapporteur')}</div>${ta('membres','Membres (un par ligne)')}</div>
  <div class="card"><div class="card-h"><div><h3>1 · Tableau des résultats et mentions par grade</h3><p>Pourcentages de mentions calculés sur le nombre d'admis, comme dans le modèle FITKD${pend?` · <b>${pend} candidat${pend>1?'s':''} présent${pend>1?'s':''} pas encore noté${pend>1?'s':''}</b>`:''}</p></div></div>
  <div class="tw"><table class="t"><thead><tr><th>Grade sollicité</th><th class="n">Inscrits</th><th class="n">Absents</th><th class="n">Présents</th><th class="n">Échecs</th><th class="n">Admis</th><th class="n">Taux de réussite</th><th class="n">Assez-Bien</th><th class="n">Bien</th><th class="n">Très bien</th><th class="n">Exceptionnel</th></tr></thead><tbody>${rows.map(tr).join('')}</tbody><tfoot class="tfoot-total">${tr({...tot,g:null})}</tfoot></table></div></div>
  <div class="card pad" style="display:flex;flex-direction:column;gap:14px"><h3>2 · Déroulement de la mission et observations du jury</h3>${ta('commission','Au niveau de la commission')}<div class="grid-eq">${ta('forts','Au niveau de la ligue · points forts')}${ta('corriger','Points à corriger')}</div><div class="fgrid">${f('faitA','Fait à')}${f('le','Le','date')}</div></div>
  <div class="card"><div class="card-h"><div><h3>3 · Fiche de contrôle des passeports</h3><p>Délai de remplissage des passeports : une semaine à compter de la date du passage</p></div></div>
  <div class="tw"><table class="t"><thead><tr><th>Grades évalués</th><th>Évaluateurs</th><th class="n">Candidats</th><th class="n">Passeports reçus</th><th class="n">Passeports remplis</th></tr></thead><tbody>${evals.map(e=>`<tr><td>${gchip(e.g)}</td><td>${e.names.length?esc(e.names.join(', ')):'<span class="muted">Jury non désigné</span>'}</td><td class="n">${e.n}</td><td class="n"><input type="number" min="0" style="width:90px;min-height:32px" id="pr-${e.g}" value="${esc((R.pr||{})[e.g]??'')}" data-in="pass" data-g="${e.g}" data-f="pr"></td><td class="n"><input type="number" min="0" style="width:90px;min-height:32px" id="pf-${e.g}" value="${esc((R.pf||{})[e.g]??'')}" data-in="pass" data-g="${e.g}" data-f="pf"></td></tr>`).join('')}</tbody></table></div>
  <div class="pad"><b>Candidats recalés et/ou absents (${recal.length})</b><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${recal.map(c=>`<span class="pill ${c.absent?'mu':'ko'}">${esc(c.nom)} · ${GL(c.grade)}${c.absent?' · absent':''}</span>`).join('')||'<span class="note">Aucun pour le moment.</span>'}</div></div></div>`;
};

/* --- Offre --- */
VIEWS.offre=function(){
  const s=sess();const n=ui.roiN??Math.max(100,s.cands.length||400),k=ui.roiS??4,m=ui.roiM??4;
  const hours=n*k*m/60;const per=300000/(n*k);
  return `<div class="page-h"><div><div class="eyebrow">Proposition commerciale</div><h1>Keupro pour les ligues de taekwondo</h1><p>Un abonnement mensuel ou annuel par ligue, payable par Mobile Money ou virement. Les évaluateurs notent sur téléphone, la ligue récupère des bordereaux conformes FITKD et un rapport prêt à signer le jour même.</p></div></div>
  <div class="plans">
   <div class="card plan"><h2>Ligue Essentiel</h2><div class="price">15 000 <small>FCFA / mois</small></div><p class="note">Pour une ligue communale qui organise quelques passages par an. Ou 150 000 FCFA par an, soit deux mois offerts.</p><ul><li>Jusqu'à 400 candidats par session</li><li>5 comptes évaluateurs, saisie sur téléphone</li><li>Import Word et Excel des inscriptions</li><li>Bordereaux au format FITKD, avec aperçu avant impression</li><li>Classements, mentions et rangs calculés</li><li>Clôture et verrouillage de l'évaluation</li><li>Assistance par e-mail et WhatsApp, jours ouvrés</li></ul></div>
   <div class="card plan reco"><span class="tag">Recommandé</span><h2>Ligue Pro</h2><div class="price">30 000 <small>FCFA / mois</small></div><p class="note">Pour les ligues qui organisent de grands passages avec un jury complet. Ou 300 000 FCFA par an, soit deux mois offerts.</p><ul><li>Candidats et évaluateurs illimités</li><li>Jury et lots : un évaluateur pour 50 candidats, répartition automatique</li><li>Président du jury : supervision et réaffectation des tables en direct</li><li>Clôture, demandes de déverrouillage et journal des corrections</li><li>Statistiques par grade, par club et par épreuve</li><li>Rapport FITKD généré automatiquement</li><li>Assistance WhatsApp prioritaire le jour du passage</li></ul></div>
   <div class="card plan"><h2>Fédération</h2><div class="price">Sur devis</div><p class="note">Pour la FITKD ou un regroupement de ligues, selon le nombre de ligues et de passages.</p><ul><li>Toutes les ligues sur un même compte, chacune avec ses accès</li><li>Consolidation nationale des résultats et des statistiques</li><li>Historique des grades de chaque pratiquant</li><li>Attestations et diplômes générés</li><li>Hébergement dédié et sauvegardes quotidiennes</li><li>Formation des administrateurs et des présidents de jury</li><li>Interlocuteur dédié et engagement de disponibilité</li></ul><a class="btn" style="text-decoration:none;margin-top:auto" href="mailto:?subject=Keupro%20-%20demande%20de%20devis%20F%C3%A9d%C3%A9ration">Demander un devis</a></div>
  </div>
  <p class="note" style="margin:0">Prix en francs CFA, payables par Mobile Money (Orange Money, MTN MoMo, Moov Money, Wave) ou par virement. Sans engagement pour la formule mensuelle : la ligue peut ne payer que les mois où elle organise un passage.</p>
  <div class="card"><div class="card-h"><div><h3>Calculez ce que la ligue économise</h3><p>Estimation du temps de saisie, de calcul et de recopie manuelle supprimé</p></div></div><div class="pad roi">
   <div style="display:flex;flex-direction:column;gap:16px">
    <label class="field"><span>Candidats par session : <b class="num" id="roiNv">${n}</b></span><input type="range" min="50" max="1200" step="10" value="${n}" id="roiN" data-in="roi" data-k="roiN"></label>
    <label class="field"><span>Sessions par an : <b class="num" id="roiSv">${k}</b></span><input type="range" min="1" max="12" value="${k}" id="roiS" data-in="roi" data-k="roiS"></label>
    <label class="field"><span>Minutes de travail manuel par candidat : <b class="num" id="roiMv">${m}</b></span><input type="range" min="1" max="10" value="${m}" id="roiM" data-in="roi" data-k="roiM"></label>
    <p class="note">Saisie des notes, vérification des totaux, report sur le bordereau, calcul des rangs et remplissage du rapport.</p></div>
   <div class="roi-out"><div><b class="num" id="roiH">${fint(hours)} h</b><span>de travail manuel évitées par an</span></div><div><b class="num" id="roiC">${fint(n*k)}</b><span>candidats évalués par an</span></div><div><b class="num" id="roiP">${fint(per)} F</b><span>coût par candidat avec Ligue Pro, paiement annuel</span></div><div><b class="num">0</b><span>erreur de total ou de rang : tout est calculé</span></div></div></div></div>
  <div class="card pad"><h3>Pourquoi les ligues l'adoptent</h3><div class="grid-eq" style="margin-top:12px">
   <p style="margin:0"><b>Moins d'erreurs.</b> Dans le bordereau Excel analysé, 3 notes dépassaient le maximum de l'épreuve (par exemple 18 sur 15 en Postures). Keupro bloque ces saisies et les signale.</p>
   <p style="margin:0"><b>Résultats le jour même.</b> Classements, mentions et rapport sont prêts dès la dernière note. Plus de recopie entre la liste Word et les onglets Excel.</p>
   <p style="margin:0"><b>Données propres.</b> Les doublons et les noms de clubs écrits de plusieurs façons sont détectés : 16 noms de clubs probablement en double dans la liste du 30 avril 2023, comme « APPOLOS » et « APPOLOS ACADEMY ».</p>
   <p style="margin:0"><b>Pilotage technique.</b> Le niveau par épreuve et par club aide la ligue à cibler les stages de formation.</p></div></div>`;
};

/* --- Paramètres --- */
VIEWS.reglages=function(){
  const g=ui.bareG;const b=S.baremes[g];const r=S.regles;
  return `<div class="page-h"><div><div class="eyebrow">Compte</div><h1>Paramètres</h1><p>Ligue, règles de délibération, barèmes par grade et sauvegarde des données.</p></div></div>${MODE==='cloud'&&AUTH.role!=='admin'?'<div class="card pad note">Seul l\'administrateur de la ligue peut modifier ces paramètres. Vous les consultez en lecture seule.</div>':''}<fieldset class="ro-fs" ${MODE==='cloud'&&AUTH.role!=='admin'?'disabled':''}>
  <div class="grid-eq"><div class="card pad" style="display:flex;flex-direction:column;gap:12px"><h3>Ligue</h3>
   <label class="field"><span>Nom de la ligue</span><input type="text" id="lgNom" value="${esc(S.ligue.nom)}" data-in="lig" data-k="nom"></label>
   <label class="field"><span>Fédération</span><input type="text" id="lgFed" value="${esc(S.ligue.fed)}" data-in="lig" data-k="fed"></label>
   <label class="field"><span>Évaluateurs habilités (un par ligne)</span><textarea id="evals" data-in="evals">${esc(S.evaluateurs.join('\n'))}</textarea></label>
   <div class="field"><span>Logos de l'en-tête des bordereaux imprimés</span><div class="logos">${['l','r'].map(sd=>{const u=safeImg((S.logos||{})[sd]);return `<div class="logo-slot">${u?`<img src="${u}" alt="Logo ${sd==='l'?'gauche':'droit'}">`:'<span class="note">Aucun logo</span>'}<div class="row" style="gap:6px"><label class="btn sm" for="lg-${sd}">${sd==='l'?'Logo gauche':'Logo droit'}</label>${u?`<button class="btn sm ghost" data-act="logoDel" data-s="${sd}">Retirer</button>`:''}</div><input type="file" id="lg-${sd}" accept="image/png,image/jpeg,image/webp" data-ch="logo" data-s="${sd}" hidden></div>`}).join('')}</div><span class="note">Comme sur le bordereau d'origine : par exemple le logo de la fédération à gauche et les armoiries à droite.</span></div></div>
  <div class="card pad" style="display:flex;flex-direction:column;gap:12px"><h3>Règles de délibération</h3><div class="fgrid">
   <label class="field"><span>Seuil d'admission /100</span><input type="number" id="rgS" value="${r.seuil}" min="0" max="100" data-in="reg" data-k="seuil"></label>
   <label class="field"><span>Candidats par table</span><input type="number" id="rgT" value="${r.table}" min="1" max="60" data-in="reg" data-k="table"></label>
   <label class="field"><span>Candidats par évaluateur (référence)</span><input type="number" id="rgQ" value="${r.quota||50}" min="5" max="400" data-in="reg" data-k="quota"></label></div>
   <div class="fgrid">${MEN.map((m,i)=>`<label class="field"><span>${m} à partir de</span><input type="number" id="rgM${i}" value="${r.ment[3-i]}" min="0" max="100" data-in="men" data-i="${3-i}"></label>`).join('')}</div>
   <p class="note">Valeurs FITKD par défaut : admis à 60, Assez-Bien 60, Bien 70, Très bien 80, Exceptionnel 95.</p></div></div>
  <div class="card"><div class="card-h"><div><h3>Barèmes par grade</h3><p>Épreuves, note maximale et type. La moyenne /100 est recalculée automatiquement à partir du total.</p></div></div>
  <div class="pad" style="display:flex;flex-direction:column;gap:12px"><div class="tabs">${GR.map(x=>`<button class="${x===g?'on':''}" data-act="bareG" data-g="${x}">${beltI(x)}${GL(x)}</button>`).join('')}</div>
   <div class="row"><span class="note">Ceinture ${esc(CN(+g+1))} → ${esc(CN(g))} · Total actuel : <b>${bmax(g)}</b> points → moyenne = total × 100 ÷ ${bmax(g)}</span></div>
   ${b.map((e,i)=>`<div class="ep-edit"><input type="text" id="bn-${i}" value="${esc(e.n)}" data-in="bar" data-i="${i}" data-k="n" aria-label="Épreuve"><input type="number" id="bm-${i}" value="${e.m}" min="1" data-in="bar" data-i="${i}" data-k="m" aria-label="Note sur"><select id="bt-${i}" data-ch="bart" data-i="${i}" aria-label="Type"><option value="T" ${e.t==='T'?'selected':''}>Théorie</option><option value="P" ${e.t==='P'?'selected':''}>Pratique</option></select><button class="iconbtn del" data-act="barDel" data-i="${i}" aria-label="Supprimer l'épreuve">✕</button></div>`).join('')}
   <div><button class="btn sm" data-act="barAdd">Ajouter une épreuve</button></div></div></div>
  <div class="card"><div class="card-h"><div><h3>Ceintures</h3><p>Couleur de la ceinture de chaque grade. Une ceinture barrée porte une bande d'une autre couleur sur toute sa longueur.</p></div><button class="btn sm ghost" data-act="ceintReset">Rétablir les ceintures FITKD</button></div>
  <div class="pad">${['9',...GR].map(x=>{const c=S.ceintures[x];return `<div class="ce-row">${beltI(x,'lg')}<b>${GL(x)}</b><input type="text" id="cn-${x}" value="${esc(c.nom)}" data-in="ceintN" data-g="${x}" aria-label="Nom de la ceinture ${GL(x)}"><label class="sw"><input type="color" id="cc-${x}" value="${esc(c.c)}" data-ch="ceintC" data-g="${x}">Couleur</label><label class="sw"><input type="checkbox" class="ck" id="cb-${x}" ${c.s?'checked':''} data-ch="ceintB" data-g="${x}">Barrée</label>${c.s?`<label class="sw"><input type="color" id="cs-${x}" value="${esc(c.s)}" data-ch="ceintS" data-g="${x}">Barre</label>`:''}</div>`}).join('')}</div></div>
  </fieldset><div class="card pad" style="display:flex;flex-direction:column;gap:12px"><h3>Données</h3><p class="note" style="margin:0">${MODE==='cloud'?'Les données de la ligue sont enregistrées en ligne et partagées avec ses évaluateurs. Vous pouvez aussi en télécharger une copie.':'Les données sont enregistrées dans ce navigateur. Faites une sauvegarde avant de changer d\'appareil.'}</p>
   <div class="row"><button class="btn" data-act="backup">Télécharger une sauvegarde</button>${MODE==='cloud'?`<button class="btn" data-act="demoCopy">Ajouter une session de démonstration</button>`:`<label class="btn" for="restoreF">Restaurer une sauvegarde</label><input type="file" id="restoreF" accept=".json" data-ch="restore" hidden>
   ${ui.confirmReset?`<button class="btn danger" data-act="reset">Confirmer : tout effacer et recharger la démo</button>`:`<button class="btn ghost" data-act="askReset">Recharger les données de démonstration</button>`}`}
   ${MODE!=='cloud'||AUTH.role==='admin'?`<button class="btn ghost danger" data-act="delSess" style="white-space:normal;text-align:left">Supprimer la session « ${esc(sess().titre)} »</button>`:''}</div></div>`;
};

/* ---------- corrections ---------- */
function candMenu(id){const s=sess();const c=s.cands.find(x=>x.id===id);if(!c)return;
  if(!canAdmin()){openModal(`<div class="mh"><div style="min-width:0"><div class="eyebrow">N° ${c.no} · Table ${tableOf(c)+1} · ${GL(c.grade)}</div><h2>${esc(c.nom)}</h2><div class="note">${esc(c.club||'Club non renseigné')}</div></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
   <div class="acts"><button class="act" data-act="absC" data-id="${c.id}"><b>${c.absent?'Marquer présent':'Marquer absent'}</b><span>${c.absent?'Le candidat pourra être noté et classé.':'Le candidat ne sera pas classé.'}</span></button></div>
   <p class="note" style="margin:0">Le changement de grade, l'interversion et la modification du nom sont réservés à l'administrateur de la ligue. Signalez-lui l'erreur.</p>`);return}
  openModal(`<div class="mh"><div style="min-width:0"><div class="eyebrow">N° ${c.no} · Table ${tableOf(c)+1} · ${GL(c.grade)}</div><h2>${esc(c.nom)}</h2><div class="note">${esc(c.club||'Club non renseigné')}</div></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  <div class="trans"><div><span class="note">Ceinture actuelle</span>${beltI(+c.grade+1,'lg')}<b>${esc(CN(+c.grade+1))} · ${GL(String(+c.grade+1))}</b></div><span class="arr">→</span><div><span class="note">Grade sollicité</span>${beltI(c.grade,'lg')}<b>${esc(CN(c.grade))} · ${GL(c.grade)}</b></div></div>
  <div class="acts">
   <button class="act" data-act="mvOpen" data-id="${c.id}"><b>Changer de grade</b><span>Inscrit au mauvais grade par son club. Les notes des épreuves identiques sont conservées ; les autres candidats gardent leur numéro.</span></button>
   <button class="act" data-act="swOpen" data-id="${c.id}"><b>Intervertir avec un autre candidat</b><span>Échanger leurs places sur le bordereau, ou leurs notes si elles ont été saisies sur la mauvaise ligne.</span></button>
   <button class="act" data-act="editC" data-id="${c.id}"><b>Modifier le nom ou le club</b><span>Corriger une faute de frappe ou le club d'appartenance.</span></button>
   <button class="act" data-act="absC" data-id="${c.id}"><b>${c.absent?'Marquer présent':'Marquer absent'}</b><span>${c.absent?'Le candidat pourra être noté et classé.':'Le candidat ne sera pas classé et figurera dans la liste des absents.'}</span></button>
   <button class="act danger" data-act="delAsk" data-id="${c.id}"><b>Retirer de la session</b><span>Inscription annulée ou en double.</span></button>
  </div>`)}
function moveModal(id){const s=sess();const c=s.cands.find(x=>x.id===id);if(!c)return;const tg=ui.mvT;
  const opts=GR.map(g=>`<button class="gopt ${g===tg?'on':''}" data-act="mvPick" data-id="${c.id}" data-g="${g}" ${g===c.grade?'disabled style="opacity:.5;cursor:default"':''}><span class="bb">${beltI(+g+1)}→${beltI(g)}</span><b>${GL(g)}</b><span class="note">${esc(CN(+g+1))} → ${esc(CN(g))}</span>${g===c.grade?'<span class="pill mu">Grade actuel</span>':''}</button>`).join('');
  let imp='<span class="note">Choisissez le grade que le candidat doit réellement passer.</span>';
  if(tg&&tg!==c.grade){const {kept,had}=remapNotes(c,tg);const no=nextNo(s,tg);const tb=Math.floor((no-1)/S.regles.table)+1;
    imp=`<b>${esc(c.nom)} passera du ${GL(c.grade)} au ${GL(tg)}.</b><span>Il prendra le n° ${no} du ${GL(tg)} (table ${tb}). Son n° ${c.no} au ${GL(c.grade)} restera libre : les autres candidats gardent leur numéro et leur table.</span><span>${had?`${kept} note${kept>1?'s':''} sur ${had} conservée${kept>1?'s':''} (épreuves de même nom et de même barème)${kept<had?' ; les autres seront à saisir dans le nouveau barème':''}.`:'Aucune note n\'a encore été saisie pour ce candidat.'}</span>`}
  openModal(`<div class="mh"><div><div class="eyebrow">Changer de grade</div><h2>${esc(c.nom)}</h2></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  <div class="gopts">${opts}</div><div class="impact">${imp}</div>
  <label class="field"><span>Motif (facultatif, repris dans le journal et le rapport)</span><input type="text" id="mvMotif" list="mvMotifs" value="${esc(ui.mvM)}" data-in="mvM" placeholder="ex. Erreur d'inscription du club"></label>
  <datalist id="mvMotifs"><option value="Erreur d'inscription du club"><option value="Grade vérifié sur le passeport"><option value="Décision du président du jury"></datalist>
  <div class="mf"><button class="btn" data-act="cm" data-id="${c.id}">Retour</button><button class="btn pri" data-act="mvGo" data-id="${c.id}" ${tg&&tg!==c.grade?'':'disabled'}>${tg&&tg!==c.grade?'Déplacer en '+GL(tg):'Déplacer'}</button></div>`)}
function swListHTML(){const s=sess(),w=ui.sw;const a=s.cands.find(x=>x.id===w.a);const q=norm(w.q);
  let L=s.cands.filter(c=>c!==a);
  if(q)L=L.filter(c=>norm(c.nom).includes(q)||norm(c.club).includes(q));
  else L=L.filter(c=>c.grade===a.grade).sort((x,y)=>(tableOf(x)===tableOf(a)?0:1)-(tableOf(y)===tableOf(a)?0:1)||x.no-y.no);
  return L.slice(0,40).map(c=>`<button class="${c.id===w.b?'on':''}" data-act="swPick" data-id="${c.id}"><span class="gn-no">${c.no}</span><span class="grow">${esc(c.nom)}</span>${gchip(c.grade)}</button>`).join('')||'<p class="note" style="padding:10px">Aucun candidat trouvé.</p>'}
function swapModal(){const s=sess(),w=ui.sw;const a=s.cands.find(x=>x.id===w.a);if(!a)return;const b=s.cands.find(x=>x.id===w.b);
  const same=b&&b.grade===a.grade;
  let desc='';if(b){desc=w.mode==='notes'?`Les notes ${a.absent||b.absent?'et le statut absent ':''}de la ligne de <b>${esc(a.nom)}</b> passent à <b>${esc(b.nom)}</b>, et inversement. Les places ne changent pas.`:`<b>${esc(a.nom)}</b> prend le n° ${b.no} du ${GL(b.grade)} ; <b>${esc(b.nom)}</b> prend le n° ${a.no} du ${GL(a.grade)}.${same?' Chacun garde ses notes.':' Chacun garde les notes des épreuves communes aux deux barèmes.'}`}
  openModal(`<div class="mh"><div style="min-width:0"><div class="eyebrow">Intervertir · n° ${a.no} · ${GL(a.grade)}</div><h2>${esc(a.nom)}</h2></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  <label class="field"><span>Avec quel candidat ? (même grade proposé en premier, recherche sur toute la session)</span><input type="search" id="swq" value="${esc(w.q)}" data-in="swq" placeholder="Rechercher un nom ou un club" autocomplete="off"></label>
  <div class="cl-list" id="swList">${swListHTML()}</div>
  <div class="acts" style="flex-direction:row;flex-wrap:wrap"><button class="act ${w.mode==='place'?'on':''}" data-act="swMode" data-m="place" style="flex:1 1 220px"><b>Échanger leurs places</b><span>Numéro, table et grade. Pour un élève placé à la place d'un autre.</span></button>
  <button class="act ${w.mode==='notes'?'on':''}" data-act="swMode" data-m="notes" style="flex:1 1 220px" ${b&&!same?'disabled':''}><b>Échanger leurs notes</b><span>${b&&!same?'Possible seulement entre candidats du même grade.':'Pour des notes saisies sur la mauvaise ligne.'}</span></button></div>
  ${b?`<div class="impact"><span>${desc}</span></div>`:''}
  <div class="mf"><button class="btn" data-act="cm" data-id="${a.id}">Retour</button><button class="btn pri" data-act="swGo" ${b?'':'disabled'}>${b?'Intervertir avec '+esc(b.nom.split(' ')[0]):'Choisissez un candidat'}</button></div>`)}

/* ---------- impression A4 (PDF) ---------- */
const JSPDF_URL=(window.KEUPRO_LIBS&&window.KEUPRO_LIBS.jspdf)||'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
const AUTOTABLE_URL=(window.KEUPRO_LIBS&&window.KEUPRO_LIBS.autotable)||'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js';
function loadScript(src){return new Promise((res,rej)=>{const e=document.createElement('script');e.src=src;e.onload=res;e.onerror=()=>rej(new Error('lib'));document.head.appendChild(e)})}
async function ensurePdfLib(){if(!(window.jspdf&&window.jspdf.jsPDF))await loadScript(JSPDF_URL);if(!window.jspdf.jsPDF.API.autoTable)await loadScript(AUTOTABLE_URL)}
function prRec(k){const s=sess();if(k!=='classement')return 'p';const st=ui.pr.classement;const L=st.scope==='all'?s.cands:candsOf(s,ui.cg||gradesIn(s)[0]);return L.some(c=>c.club)?'l':'p'}
function printModal(k){ui.prK=k;const st=ui.pr[k];const rec=prRec(k);const s=sess();
  const why=k==='classement'?(rec==='l'?'Paysage : le tableau compte 9 colonnes avec le club, les noms longs tiennent sur une ligne.':'Portrait : sans colonne club, le tableau tient dans la largeur.'):'Portrait : les graphiques et le tableau des clubs s\'enchaînent sur la hauteur de la page.';
  const oc=(o,lbl,sub,ic)=>`<button class="orient ${st.o===o?'on':''}" data-act="prO" data-o="${o}"><span class="page-ic ${ic}"></span><b>${lbl}</b><small>${sub}</small></button>`;
  const scope=k==='classement'?`<div class="field"><span>Contenu</span><div class="acts">
    <button class="act ${st.scope==='cur'?'on':''}" data-act="prS" data-s="cur"><b>Grade affiché : ${GL(ui.cg||gradesIn(s)[0]||'8')}</b><span>${ui.cclub||ui.cadm?'Avec les filtres en cours'+(ui.cclub?' (club '+esc(ui.cclub)+')':'')+(ui.cadm?' (admis uniquement)':''):'Tous les candidats classés de ce grade'}</span></button>
    <button class="act ${st.scope==='all'?'on':''}" data-act="prS" data-s="all"><b>Tous les grades</b><span>Un grade par page, du 8e au 1er Keup</span></button></div></div>`
   :`<p class="note" style="margin:0">Vue imprimée : <b>${ui.stg?GL(ui.stg):'tous les grades'}</b>. Choisissez un grade dans les onglets pour imprimer la maîtrise par épreuve de ce grade.</p>`;
  openModal(`<div class="mh"><div><div class="eyebrow">Impression A4</div><h2>${k==='classement'?'Classement par ordre de mérite':'Statistiques'}</h2></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  ${scope}<div class="field"><span>Orientation de la page</span><div class="orients">${oc('auto','Automatique','Recommandé : '+(rec==='l'?'paysage':'portrait'),rec)}${oc('p','Portrait','21 × 29,7 cm','p')}${oc('l','Paysage','29,7 × 21 cm','l')}</div></div>
  <p class="note" style="margin:0">${st.o==='auto'?why:'Orientation choisie manuellement.'} Le fichier PDF est mis en page pour une feuille A4 : ouvrez-le puis imprimez-le à l'échelle 100 %.</p>
  <div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn pri" data-act="prGo">Télécharger le PDF A4</button></div>`)}
const PC={blue:[15,42,87],orange:[221,100,0],ink:[18,23,34],muted:[90,99,117],line:[220,224,231],track:[235,237,242],ok:[17,128,75],ko:[194,48,43],warn:[176,112,0],m:[[194,48,43],[169,214,182],[93,176,125],[30,127,76],[221,100,0]]};
const hex2rgb=h=>{h=String(h).replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');return[0,2,4].map(i=>parseInt(h.substr(i,2),16))};
const sessLine=s=>[s.titre,(fdate(s.date)&&!s.titre.includes(fdate(s.date)))?fdate(s.date):'',s.lieu].filter(Boolean).join(' · ');
const pt=v=>String(v??'').replace(/[  ]/g,' ').replace(/→/g,'->').replace(/≥/g,'>=').replace(/’/g,"'");
function pdfBase(o){const {jsPDF}=window.jspdf;const doc=new jsPDF({orientation:o==='l'?'landscape':'portrait',unit:'mm',format:'a4'});return{doc,o,W:doc.internal.pageSize.getWidth(),H:doc.internal.pageSize.getHeight(),M:14}}
function pdfHeader(P,title,sub){const {doc,W,M}=P;doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...PC.muted);doc.text(pt((S.ligue.fed+' · '+S.ligue.nom).toUpperCase()),M,M);
  doc.setFont('helvetica','bold');doc.setFontSize(17);doc.setTextColor(...PC.blue);doc.text(pt(title),M,M+8);doc.setFont('helvetica','normal');doc.setFontSize(9.5);doc.setTextColor(...PC.muted);doc.text(pt(sub),M,M+13.5);
  doc.setDrawColor(...PC.orange);doc.setLineWidth(.8);doc.line(M,M+16.5,W-M,M+16.5);return M+24}
function pdfFooter(P){const {doc,W,H,M}=P;const n=doc.getNumberOfPages();const d=new Date().toLocaleString('fr-FR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(...PC.muted);doc.setDrawColor(...PC.line);doc.setLineWidth(.2);doc.line(M,H-10,W-M,H-10);doc.text(pt('Keupro · '+S.ligue.nom+' · imprimé le '+d+(curSess()&&curSess().lock?' · résultats définitifs, session clôturée le '+fdt(curSess().lock.at):'')),M,H-6);doc.text(`Page ${i} / ${n}`,W-M,H-6,{align:'right'})}}
function pdfBelt(doc,g,x,y,w,h){const b=S.ceintures[String(g)]||{c:'#999999',s:''};doc.setFillColor(...hex2rgb(b.c));doc.rect(x,y,w,h,'F');if(b.s){doc.setFillColor(...hex2rgb(b.s));doc.rect(x,y+h/3,w,h/3,'F')}doc.setDrawColor(130,130,130);doc.setLineWidth(.15);doc.rect(x,y,w,h,'S')}
function need(P,y,h){if(y+h>P.H-16){P.doc.addPage();return P.M+2}return y}
function pdfTitle(doc,x,y,t){doc.setFont('helvetica','bold');doc.setFontSize(10.5);doc.setTextColor(...PC.ink);doc.text(pt(t),x,y)}
async function pdfClassement(o,scope){
  const s=sess(),C=computed();const grades=scope==='all'?gradesIn(s).filter(g=>(C.by[g]||[]).length):[ui.cg||gradesIn(s)[0]];
  if(!grades.length||!grades[0])throw new Error('vide');
  const P=pdfBase(o);const {doc,M}=P;
  grades.forEach((g,gi)=>{if(gi)doc.addPage();
    let y=pdfHeader(P,'Classement par ordre de mérite',sessLine(s));
    const st=gstats(s,C,g);let R=(C.by[g]||[]).slice();let fl='';
    if(scope!=='all'){if(ui.cclub){R=R.filter(c=>c.club===ui.cclub);fl+=' · club '+ui.cclub}if(ui.cadm){R=R.filter(c=>C.res.get(c.id).st==='adm');fl+=' · admis uniquement'}}
    pdfBelt(doc,g,M,y-3.6,16,4.6);doc.setFont('helvetica','bold');doc.setFontSize(13.5);doc.setTextColor(...PC.ink);doc.text(pt(`${GL(g)} · ceinture ${CN(+g+1)} → ${CN(g)}`),M+20,y);y+=6;
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(...PC.muted);
    doc.text(pt(`${(C.by[g]||[]).length} classés · ${st.adm} admis · ${st.ech} échecs · ${st.abs} absents · réussite ${st.taux==null?'—':fmt(st.taux,1)+' %'} · moyenne ${st.moy==null?'—':fmt(st.moy,2)}/100${fl}`),M,y);y+=4;
    const hasClub=R.some(c=>c.club);const b=BAR()[g];const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0),pm=bmax(g)-tm;
    const head=['Rang','Nom et prénoms',...(hasClub?['Club']:[]),'Théorie /'+tm,'Pratique /'+pm,'Total /'+bmax(g),'Moy. /100','Résultat','Mention'];
    const nf=v=>fmt(v,v%1?1:0);
    const body=R.map(c=>{const r=C.res.get(c.id);return[r.rk,c.nom,...(hasClub?[c.club||'—']:[]),nf(r.th),nf(r.pr),nf(r.tot),fmt(r.moy,2),r.st==='adm'?'Admis':'Échec',r.st==='adm'?(MEN[menIdx(r.moy)-1]||''):'']});
    const off=hasClub?1:0,iRes=6+off;const cs={0:{halign:'center',fontStyle:'bold',cellWidth:12},1:{fontStyle:'bold'}};for(let i=2+off;i<=5+off;i++)cs[i]={halign:'right'};cs[5+off].fontStyle='bold';
    doc.autoTable({startY:y+2,head:[head.map(pt)],body:body.map(r=>r.map(pt)),margin:{left:M,right:M,top:M+4,bottom:16},theme:'grid',
      styles:{font:'helvetica',fontSize:o==='l'?9:8.2,cellPadding:o==='l'?1.7:1.4,lineColor:PC.line,lineWidth:.15,textColor:PC.ink,overflow:'linebreak'},
      headStyles:{fillColor:PC.blue,textColor:255,fontStyle:'bold',halign:'center',valign:'middle'},alternateRowStyles:{fillColor:[246,247,250]},columnStyles:cs,
      didParseCell:d=>{if(d.section!=='body')return;if(d.column.index===iRes){d.cell.styles.textColor=d.cell.raw==='Admis'?PC.ok:PC.ko;d.cell.styles.fontStyle='bold'}
        if(d.column.index===0){const rk=+d.cell.raw;if(rk>=1&&rk<=3)d.cell.styles.fillColor=[[250,229,170],[226,230,237],[243,214,188]][rk-1]}}});
    y=doc.lastAutoTable.finalY+7;
    const others=candsOf(s,g).filter(c=>!C.res.get(c.id).complete);
    if(others.length&&scope==='all'||others.length&&!fl){const txt=doc.splitTextToSize(pt(`Non classés (${others.length}) : `+others.map(c=>c.nom+(c.absent?' (absent)':' (fiche incomplète)')).join(' ; ')),P.W-2*M);y=need(P,y,txt.length*3.8+2);doc.setFont('helvetica','normal');doc.setFontSize(8.2);doc.setTextColor(...PC.muted);doc.text(txt,M,y)}
  });
  pdfFooter(P);await saveFile(`Classement_${scope==='all'?'tous_grades':slug(GL(grades[0]))}_${s.date||'session'}.pdf`,doc.output('blob'),'application/pdf');
}
async function pdfStats(o){
  const s=sess(),C=computed();const grades=gradesIn(s);if(!grades.length)throw new Error('vide');const g=ui.stg&&grades.includes(ui.stg)?ui.stg:'';const T=gstats(s,C,g||null);
  const P=pdfBase(o);const {doc,W,M}=P;let y=pdfHeader(P,'Statistiques du passage de grade',`${sessLine(s)} · ${g?GL(g)+' (ceinture '+CN(+g+1)+' → '+CN(g)+')':'tous les grades'}`);
  const K=[['Présents',String(T.pres),`${fmt(pct(T.pres,T.ins),0)} % des inscrits`],['Admis',String(T.adm),`${T.ech} échecs`],['Taux de réussite',T.taux==null?'—':fmt(T.taux,1)+' %','admis / notés'],['Moyenne',T.moy==null?'—':fmt(T.moy,1),'sur 100'],['Mentions TB et +',String(T.mc[2]+T.mc[3]),`${T.mc[3]} exceptionnelle${T.mc[3]>1?'s':''}`]];
  const cw=(W-2*M-12)/5;K.forEach((k,i)=>{const x=M+i*(cw+3);doc.setFillColor(246,247,250);doc.setDrawColor(...PC.line);doc.setLineWidth(.2);doc.roundedRect(x,y,cw,19,1.5,1.5,'FD');
    doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(...PC.muted);doc.text(pt(k[0]),x+3,y+5);doc.setFont('helvetica','bold');doc.setFontSize(15);doc.setTextColor(...PC.ink);doc.text(pt(k[1]),x+3,y+12.6);
    doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(...PC.muted);doc.text(pt(k[2]),x+3,y+16.8)});y+=27;
  const RH=6.4;
  const hbar=(x,y0,w,rows,mark)=>{const lw=Math.min(46,w*.38),vw=16,tw=w-lw-vw-4;rows.forEach((r,i)=>{const yy=y0+i*RH;let lx=x;if(r.g){pdfBelt(doc,r.g,x,yy-2.6,7,2.6);lx=x+9}
      doc.setFont('helvetica','normal');doc.setFontSize(8.2);doc.setTextColor(...PC.ink);doc.text(doc.splitTextToSize(pt(r.l),lw-(lx-x)-1)[0],lx,yy);
      doc.setFillColor(...PC.track);doc.rect(x+lw,yy-3,tw,3.6,'F');const v=Math.max(0,Math.min(100,r.v||0));if(v){doc.setFillColor(...r.c);doc.rect(x+lw,yy-3,tw*v/100,3.6,'F')}
      if(mark!=null){doc.setDrawColor(...PC.ink);doc.setLineWidth(.35);doc.line(x+lw+tw*mark/100,yy-3.8,x+lw+tw*mark/100,yy+1.4)}
      doc.setFont('helvetica','bold');doc.text(pt(r.t),x+w,yy,{align:'right'})})};
  const blocks=[];
  blocks.push({h:9+grades.length*RH,draw:(x,y0,w)=>{pdfTitle(doc,x,y0,'Taux de réussite par grade');hbar(x,y0+8,w,grades.map(x2=>{const o2=gstats(s,C,x2);return{g:x2,l:GL(x2),v:o2.taux,t:o2.taux==null?'—':fmt(o2.taux,0)+' %',c:PC.ok}}))}});
  blocks.push({h:56,draw:(x,y0,w)=>{pdfTitle(doc,x,y0,`Répartition des moyennes (seuil ${REG().seuil}/100)`);const bins=Array(10).fill(0);(g?candsOf(s,g):s.cands).map(c=>C.res.get(c.id)).filter(r=>r.complete).forEach(r=>bins[Math.min(9,Math.floor(r.moy/10))]++);
      const bm=Math.max(1,...bins),ah=36,top=y0+8,bw=(w-9*1.6)/10,sb=Math.floor(REG().seuil/10);
      bins.forEach((v,i)=>{const bx=x+i*(bw+1.6),bh=ah*v/bm;doc.setFillColor(...(i>=sb?PC.ok:PC.ko));if(bh>0)doc.rect(bx,top+ah-bh,bw,bh,'F');doc.setFontSize(7.2);doc.setTextColor(...PC.ink);doc.setFont('helvetica','bold');if(v)doc.text(String(v),bx+bw/2,top+ah-bh-1.2,{align:'center'});
        doc.setFont('helvetica','normal');doc.setTextColor(...PC.muted);doc.setFontSize(6.6);doc.text(`${i*10}-${i*10+10}`,bx+bw/2,top+ah+4,{align:'center'})});
      doc.setDrawColor(...PC.line);doc.setLineWidth(.2);doc.line(x,top+ah,x+w,top+ah)}});
  const mg=g?[g]:grades;
  blocks.push({h:16+mg.length*RH,draw:(x,y0,w)=>{pdfTitle(doc,x,y0,'Résultats et mentions');const lab=['Échec',...MEN];let lx=x;doc.setFontSize(7.2);doc.setFont('helvetica','normal');
      lab.forEach((l,i)=>{doc.setFillColor(...PC.m[i]);doc.rect(lx,y0+3.2,2.6,2.6,'F');doc.setTextColor(...PC.muted);doc.text(pt(l),lx+3.6,y0+5.6);lx+=doc.getTextWidth(pt(l))+8});
      const lw=Math.min(30,w*.25),vw=18,tw=w-lw-vw-3;mg.forEach((x2,i)=>{const yy=y0+13+i*RH;const o2=gstats(s,C,x2);const n=o2.adm+o2.ech;pdfBelt(doc,x2,x,yy-2.6,7,2.6);doc.setFontSize(8.2);doc.setTextColor(...PC.ink);doc.text(pt(GL(x2)),x+9,yy);
        let cx=x+lw;[o2.ech,...o2.mc].forEach((v,j)=>{if(!n||!v)return;const ww=tw*v/n;doc.setFillColor(...PC.m[j]);doc.rect(cx,yy-3,ww,3.6,'F');cx+=ww});if(!n){doc.setFillColor(...PC.track);doc.rect(x+lw,yy-3,tw,3.6,'F')}
        doc.setFont('helvetica','bold');doc.text(`${n} notés`,x+w,yy,{align:'right'});doc.setFont('helvetica','normal')})}});
  if(g){const b=BAR()[g];const comp=candsOf(s,g).filter(c=>C.res.get(c.id).complete);const A=b.map((e,i)=>{const avg=comp.length?comp.reduce((a,c)=>a+(+c.notes[i]||0),0)/comp.length:null;return{e,p:avg==null?null:avg*100/e.m}}).sort((a,c)=>(a.p??0)-(c.p??0));
    blocks.push({h:9+A.length*RH,draw:(x,y0,w)=>{pdfTitle(doc,x,y0,'Maîtrise par épreuve (% de la note maximale)');hbar(x,y0+8,w,A.map(a=>({l:a.e.n+(a.e.t==='T'?' (th.)':' (pr.)'),v:a.p,t:a.p==null?'—':fmt(a.p,0)+' %',c:a.p!=null&&a.p<REG().seuil?PC.warn:PC.orange})),REG().seuil)}})}
  else blocks.push({h:9+grades.length*2*RH,draw:(x,y0,w)=>{pdfTitle(doc,x,y0,'Théorie et pratique par grade (% du maximum)');const rows=[];grades.forEach(x2=>{const b=BAR()[x2];const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0),pm=bmax(x2)-tm;const comp=candsOf(s,x2).map(c=>C.res.get(c.id)).filter(r=>r.complete);
      const th=comp.length?comp.reduce((a,r)=>a+r.th,0)/comp.length*100/tm:null,pr=comp.length?comp.reduce((a,r)=>a+r.pr,0)/comp.length*100/pm:null;rows.push({g:x2,l:GL(x2)+' théorie',v:th,t:th==null?'—':fmt(th,0)+' %',c:PC.orange},{l:'   pratique',v:pr,t:pr==null?'—':fmt(pr,0)+' %',c:PC.blue})});hbar(x,y0+8,w,rows)}});
  if(o==='l'){const cwid=(W-2*M-10)/2;const col=[y,y];for(const bk of blocks){let c=col[0]<=col[1]?0:1;if(col[c]+bk.h>P.H-16){const o2=1-c;if(col[o2]+bk.h<=P.H-16)c=o2;else{doc.addPage();col[0]=col[1]=M+2;c=0}}bk.draw(M+c*(cwid+10),col[c],cwid);col[c]+=bk.h+8}y=Math.max(col[0],col[1])}
  else for(const bk of blocks){y=need(P,y,bk.h);bk.draw(M,y,W-2*M);y+=bk.h+7}
  // clubs
  const cl={};(g?candsOf(s,g):s.cands).forEach(c=>{const k=c.club||'Club non renseigné';const r=C.res.get(c.id);const q=cl[k]=cl[k]||{ins:0,adm:0,ech:0,sum:0,best:null};q.ins++;if(r.st==='adm')q.adm++;if(r.st==='ech')q.ech++;if(r.complete){q.sum+=r.moy;if(!q.best||r.moy>q.best.m)q.best={m:r.moy,n:c.nom}}});
  const CL=Object.entries(cl).filter(([,q])=>q.adm+q.ech>0).sort((a,b)=>(pct(b[1].adm,b[1].adm+b[1].ech)-pct(a[1].adm,a[1].adm+a[1].ech))||(b[1].sum/(b[1].adm+b[1].ech)-a[1].sum/(a[1].adm+a[1].ech)));
  if(CL.length){y=need(P,y,24);pdfTitle(doc,M,y,'Performance des clubs');
    doc.autoTable({startY:y+3,head:[['Club','Inscrits','Notés','Admis','Réussite','Moyenne','Meilleur candidat'].map(pt)],body:CL.map(([k,q])=>{const n=q.adm+q.ech;return[k,q.ins,n,q.adm,fmt(pct(q.adm,n),0)+' %',fmt(q.sum/n,1),q.best?q.best.n+' ('+fmt(q.best.m,1)+')':''].map(pt)}),
      margin:{left:M,right:M,top:M+4,bottom:16},theme:'grid',styles:{font:'helvetica',fontSize:8,cellPadding:1.4,lineColor:PC.line,lineWidth:.15,textColor:PC.ink},headStyles:{fillColor:PC.blue,textColor:255,fontStyle:'bold'},alternateRowStyles:{fillColor:[246,247,250]},
      columnStyles:{0:{fontStyle:'bold'},1:{halign:'right'},2:{halign:'right'},3:{halign:'right'},4:{halign:'right'},5:{halign:'right'}}})}
  // statistiques par épreuve
  const ER=epData(s);if(ER.length){doc.addPage();y=pdfHeader(P,'Statistiques par épreuve',`${sessLine(s)} · moyenne en % de la note maximale`);
    const gg=grades;const binC=[[251,228,226],[251,239,213],[169,214,182],[93,176,125],[30,127,76]];
    doc.autoTable({startY:y,head:[['Épreuve',...gg.map(x=>GL(x)),'Évolution'].map(pt)],body:ER.map(r=>[r.n+(r.t==='T'?' (th.)':' (pr.)'),...gg.map(x=>r.byG[x]?fmt(r.byG[x].p,0):'·'),r.trend==null?'—':(r.trend>0?'+':'')+fmt(r.trend,0)+' pts'].map(pt)),
      margin:{left:M,right:M,top:M+4,bottom:16},theme:'grid',styles:{font:'helvetica',fontSize:8,cellPadding:1.5,lineColor:[255,255,255],lineWidth:.6,textColor:PC.ink,halign:'center'},headStyles:{fillColor:PC.blue,textColor:255,fontStyle:'bold'},columnStyles:{0:{halign:'left',fontStyle:'bold',cellWidth:o==='l'?70:52}},
      didParseCell:d=>{if(d.section!=='body')return;const ci=d.column.index;if(ci>0&&ci<=gg.length){const r=ER[d.row.index];const x=r.byG[gg[ci-1]];if(x){const bn=hbin(x.p);d.cell.styles.fillColor=binC[bn];d.cell.styles.textColor=bn===4?[255,255,255]:bn===0?PC.ko:bn===1?PC.warn:PC.ink;d.cell.styles.fontStyle='bold'}else d.cell.styles.textColor=[200,200,200]}
        if(ci===gg.length+1){const t=ER[d.row.index].trend;d.cell.styles.fontStyle='bold';d.cell.styles.textColor=t==null?PC.muted:t>3?PC.ok:t<-3?PC.ko:PC.muted}}});
    y=doc.lastAutoTable.finalY+5;doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(...PC.muted);doc.text(pt(`Couleurs : rouge < 50 %, orange 50–59 %, verts de 60 % à 80 % et plus. Évolution : écart entre le premier et le dernier grade où l'épreuve est évaluée.`),M,y);y+=8;
    const sc=ER.map(r=>({r,d:epScope(r,g)})).filter(x=>x.d&&x.d.n).sort((a,b)=>b.d.p-a.d.p);
    const half=(W-2*M-10)/2,hh=9+5*RH;y=need(P,y,hh);
    pdfTitle(doc,M,y,'Points forts'+(g?' · '+GL(g):''));hbar(M,y+8,half,sc.slice(0,5).map(x=>({l:x.r.n,v:x.d.p,t:fmt(x.d.p,0)+' %',c:PC.ok})),REG().seuil);
    pdfTitle(doc,M+half+10,y,'Points à travailler');hbar(M+half+10,y+8,half,sc.slice(-5).reverse().map(x=>({l:x.r.n,v:x.d.p,t:fmt(x.d.p,0)+' %',c:PC.warn})),REG().seuil);y+=hh+6;
    y=need(P,y,30);pdfTitle(doc,M,y,`Détail par épreuve${g?' · '+GL(g):''} (maîtrise = au moins ${REG().seuil} % de la note)`);
    doc.autoTable({startY:y+3,head:[['Épreuve','Type','Notés','Moyenne %','Maîtrise',g?'Écart-type':'Évolution'].map(pt)],body:sc.map(({r,d})=>[r.n,r.t==='T'?'Théorie':'Pratique',d.n,fmt(d.p,1)+' %',fmt(d.mast,0)+' %',g?fmt(d.sd,1):(r.trend==null?'—':(r.trend>0?'+':'')+fmt(r.trend,0)+' pts')].map(pt)),
      margin:{left:M,right:M,top:M+4,bottom:16},theme:'grid',styles:{font:'helvetica',fontSize:8,cellPadding:1.4,lineColor:PC.line,lineWidth:.15,textColor:PC.ink},headStyles:{fillColor:PC.blue,textColor:255,fontStyle:'bold'},alternateRowStyles:{fillColor:[246,247,250]},columnStyles:{0:{fontStyle:'bold'},2:{halign:'right'},3:{halign:'right'},4:{halign:'right'},5:{halign:'right'}}})}
  pdfFooter(P);await saveFile(`Statistiques_${g?slug(GL(g)):'tous_grades'}_${s.date||'session'}.pdf`,doc.output('blob'),'application/pdf');
}

/* ---------- bordereaux imprimés (format FITKD d'origine) ---------- */
function bpPages(bp){const s=sess();const size=S.regles.table;const g=ui.bg||gradesIn(s)[0];const grades=bp.scope==='all'?gradesIn(s):[g];const pages=[];
  for(const x of grades){const L=candsOf(s,x);if(!L.length)continue;const maxNo=Math.max(...L.map(c=>c.no));const byNo=new Map(L.map(c=>[c.no,c]));
    for(const {k} of tablesOf(s,x)){if(bp.scope==='table'&&k!==bp.k)continue;const slots=[];for(let n=k*size+1;n<=Math.min((k+1)*size,maxNo);n++)slots.push({n,c:byNo.get(n)||null});pages.push({g:x,k,slots})}}
  return pages}
function bpSheetHTML(pg,blank,showRk){const s=sess(),C=computed();const g=pg.g,b=BAR()[g],max=bmax(g);const nT=b.filter(e=>e.t==='T').length;const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0);const n=b.length;
  const dnum=s.date?new Date(s.date+'T00:00:00').toLocaleDateString('fr-FR'):'';const ligue=S.ligue.nom.toUpperCase().replace(/^LIGUE\s+/,'');const L=S.logos||{};
  const nf=v=>v==null||v===''?'':(+v%1?fmt(+v,1):String(+v));const sp=v=>{const t=String(v||'').split(/\s+[—–-]\s+/);return[t[0]||'',t.slice(1).join(' ')]};
  const mm=x=>Math.round(x*3.78);const nomW=n<=8?66:56;const epW=(277-(7+nomW+13+15+13+16+9))/n;
  const cols=[7,nomW,...Array(n).fill(epW),13,15,13,16,9].map(w=>`<col style="width:${mm(w)}px">`).join('');
  const ev=labelOf(tableOwner(pg.slots.map(x=>x.c).filter(Boolean)));const J=((s.jurys||{})[g]||{})[pg.k]||{};const t=REG().ment;
  const rows=pg.slots.map(({n:no,c})=>{if(!c)return `<tr><td>${no}</td><td class="nm mut">Place libérée</td>${'<td></td>'.repeat(n+5)}</tr>`;
    const r=C.res.get(c.id);let cells='';
    if(c.absent)cells=b.map((e,i)=>`<td>${'ABSENT'[i]||''}</td>`).join('')+'<td></td>'.repeat(5);
    else if(blank)cells='<td></td>'.repeat(n+5);
    else cells=b.map((e,i)=>{const v=c.notes[i];return `<td class="${v!=null&&(+v>e.m||+v<0)?'red':''}">${nf(v)}</td>`}).join('')+`<td class="b">${r.n?nf(r.tot):''}</td><td class="b">${r.complete?fmt(r.moy,2):''}</td><td class="sm">${r.complete?(r.st==='adm'?'admis':'échec'):''}</td><td class="xs">${r.complete&&r.st==='adm'?(MEN[menIdx(r.moy)-1]||''):''}</td><td>${r.complete&&showRk&&r.rk?r.rk:''}</td>`;
    return `<tr><td>${no}</td><td class="nm">${esc(c.nom)}${c.absent?' (ABSENT)':''}</td>${cells}</tr>`}).join('');
  const leg=[['Mention','Note moyenne générale'],['Exceptionnel',`Moy >= ${t[0]}`],['Très bien',`${t[1]} <= Moy < ${t[0]}`],['Bien',`${t[2]} <= Moy < ${t[1]}`],['Assez Bien',`${t[3]} <= Moy < ${t[2]}`],['Insuffisant',`Moy < ${REG().seuil}`]];
  const jr=[['Président',...sp(J.p||(s.chef?labelOf(s.chef):''))],['Vice Président',...sp(J.v)],['Rapporteur',...sp(J.r)]];
  return `<div class="bpsheet"><div class="bp-h"><div class="lg">${safeImg(L.l)?`<img src="${safeImg(L.l)}" alt="">`:''}</div><div class="ct"><div class="fed">${esc(S.ligue.fed.toUpperCase())}</div><div class="ti">BORDEREAU DE PASSAGE DE GRADE</div></div><div class="lg">${safeImg(L.r)?`<img src="${safeImg(L.r)}" alt="">`:''}</div></div>
  <div class="bp-l"><span>GRADE SOLLICITE : ${esc(GL(g).toUpperCase())}</span><span>LIGUE : ${esc(ligue)}</span><span>DATE : ${esc(dnum)}</span></div><div class="bp-s">Table ${pg.k+1} · évaluateur : ${esc(ev)} · ceinture ${esc(CN(+g+1))} → ${esc(CN(g))}</div>
  <table class="bp-t"><colgroup>${cols}</colgroup>
   <tr class="bh1"><td class="void" colspan="2"></td><th colspan="${nT}">Matières théoriques/${tm}</th><th colspan="${n-nT}">Matières pratiques/${max-tm}</th><th rowspan="2" class="v"><span>TOTAL SUR</span></th><th rowspan="2" class="v"><span>MOYENNE SUR</span></th><th rowspan="3" class="v"><span>RESULTAT</span></th><th rowspan="3" class="v"><span>MENTION</span></th><th rowspan="3" class="v"><span>RANG</span></th></tr>
   <tr class="bh2"><td class="void" colspan="2"></td>${b.map(e=>`<td class="v bep"><span>${esc(e.n)}</span></td>`).join('')}</tr>
   <tr class="bh3"><th colspan="2">NOTE SUR</th>${b.map(e=>`<td class="red b">${e.m}</td>`).join('')}<td class="red b">${max}</td><td class="red b">100</td></tr>
   <tr class="band"><td>N°</td><td class="b">Nom et prénoms</td><td colspan="${n+5}"></td></tr>${rows}</table>
  <div class="bp-f"><table class="leg">${leg.map((r,i)=>`<tr class="${i?'':'b'}"><td>${r[0]}</td><td>${esc(r[1])}</td></tr>`).join('')}</table>
   <div class="obs"><b>OBSERVATIONS DU JURY</b>${J.o&&!blank?`<p>${esc(J.o)}</p>`:'<i></i><i></i><i></i>'}</div>
   <table class="jur"><tr class="b"><td>FONCTION</td><td>Nom et Prénoms</td><td>Grade</td><td>Fonction FITKD-Signature</td></tr>${jr.map(r=>`<tr><td>${r[0]}</td><td>${blank?'':esc(r[1])}</td><td>${blank?'':esc(r[2])}</td><td></td></tr>`).join('')}</table></div>
  <div class="bp-p">Keupro · ${esc(s.titre)}${s.lock?' · clôturée le '+esc(fdt(s.lock.at)):''} · page ${ui.bpPg+1} / ${bpPages(ui.bp).length}</div></div>`}
function previewModal(){const pages=bpPages(ui.bp);if(!pages.length){toast('Aucun bordereau à afficher');return}const s=sess();ui.bpPg=Math.max(0,Math.min(pages.length-1,ui.bpPg||0));const pg=pages[ui.bpPg];const blank=ui.bp.mode==='vierge';
  const ev=shortLabel(tableOwner(pg.slots.map(x=>x.c).filter(Boolean)));
  const scopeL=ui.bp.scope==='table'?`table ${ui.bp.k+1} du ${GL(pg.g)}`:ui.bp.scope==='grade'?`toutes les tables du ${GL(pg.g)}`:seeAll(s)?'tous les grades':'tout mon lot';
  openModal(`<div class="mh"><div><div class="eyebrow">Aperçu avant impression, ${esc(scopeL)}</div><h2>${esc(GL(pg.g))}, table ${pg.k+1}</h2><p class="note" style="margin:2px 0 0">Évaluateur : ${esc(ev)} · ${pg.slots.filter(x=>x.c).length} candidats · ${blank?'bordereau vierge':'bordereau renseigné'}</p></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  <div class="bp-bar"><div class="row" style="gap:6px"><button class="btn sm" data-act="bpPg" data-d="-1" ${ui.bpPg?'':'disabled'} aria-label="Page précédente">‹</button><span class="num pg">Page ${ui.bpPg+1} / ${pages.length}</span><button class="btn sm" data-act="bpPg" data-d="1" ${ui.bpPg<pages.length-1?'':'disabled'} aria-label="Page suivante">›</button></div>
   <div class="seg"><button class="${!blank?'on':''}" data-act="bpPM" data-m="notes">Renseigné</button><button class="${blank?'on':''}" data-act="bpPM" data-m="vierge">Vierge</button></div>
   <div class="seg"><button class="${ui.bpFit!==false?'on':''}" data-act="bpFit" data-f="1">Page entière</button><button class="${ui.bpFit===false?'on':''}" data-act="bpFit" data-f="0">Taille réelle</button></div></div>
  <div class="bpview" id="bpview">${bpSheetHTML(pg,blank,seeAll(s))}</div>
  <div class="mf"><button class="btn" data-act="bprintM" data-keep="1">Options d'impression</button><button class="btn pri" data-act="bpGo"><svg viewBox="0 0 24 24">${ICONS.print}</svg>Télécharger le PDF A4${pages.length>1?` (${pages.length} pages)`:''}</button></div>`);
  $('#modal .mbox').classList.add('wide');requestAnimationFrame(fitSheet)}
function fitSheet(){const v=$('#bpview');const sh=v&&v.querySelector('.bpsheet');if(!sh)return;if(ui.bpFit!==false){const mb=v.closest('.mbox');const other=mb?mb.scrollHeight-v.offsetHeight:260;const k=Math.min(1,(v.clientWidth-2)/1123,Math.max(.25,(innerHeight*.9-other-8)/794));sh.style.transform=`scale(${k})`;v.style.height=Math.ceil(794*k+2)+'px';sh.style.marginLeft=Math.max(0,(v.clientWidth-1123*k)/2)+'px';v.classList.remove('real')}else{sh.style.transform='none';v.style.height='';v.classList.add('real')}}
window.addEventListener('resize',()=>{if($('#bpview'))fitSheet()});
function bprintModal(){const bp=ui.bp;const s=sess();const g=ui.bg||gradesIn(s)[0];if(!g){toast('Aucun candidat à imprimer');return}
  const cnt=sc=>bpPages({...bp,scope:sc}).length;
  const hasLogo=S.logos&&(S.logos.l||S.logos.r);
  openModal(`<div class="mh"><div><div class="eyebrow">Impression A4 paysage · format d'origine</div><h2>Bordereaux d'évaluation</h2></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  <div class="field"><span>Bordereaux à imprimer</span><div class="acts">
   ${bp.scope==='table'?`<button class="act on" data-act="bpS" data-s="table"><b>Table ${bp.k+1} du ${GL(g)}</b><span>1 page</span></button>`:''}
   <button class="act ${bp.scope==='grade'?'on':''}" data-act="bpS" data-s="grade"><b>Toutes les tables du ${GL(g)}</b><span>${cnt('grade')} page${cnt('grade')>1?'s':''}, une par table</span></button>
   <button class="act ${bp.scope==='all'?'on':''}" data-act="bpS" data-s="all"><b>${seeAll(s)?'Tous les grades':'Tout mon lot'}</b><span>${cnt('all')} page${cnt('all')>1?'s':''}${seeAll(s)?', du 8e au 1er Keup':', toutes les tables qui vous sont affectées'}</span></button></div></div>
  <div class="field"><span>Contenu</span><div class="acts" style="flex-direction:row;flex-wrap:wrap">
   <button class="act ${bp.mode==='notes'?'on':''}" data-act="bpM" data-m="notes" style="flex:1 1 200px"><b>Bordereau renseigné</b><span>Notes, total, moyenne, résultat, mention et rang : pour l'archivage.</span></button>
   <button class="act ${bp.mode==='vierge'?'on':''}" data-act="bpM" data-m="vierge" style="flex:1 1 200px"><b>Bordereau vierge</b><span>Noms et barème seulement, à remplir à la main le jour du passage.</span></button></div></div>
  <p class="note" style="margin:0">Mise en page identique au bordereau de l'évaluateur FITKD : une page par table de ${S.regles.table} candidats, en-tête de la fédération, barème « NOTE SUR », légende des mentions, observations et tableau de signatures du jury.${hasLogo?'':' <b>Astuce :</b> ajoutez les logos de l\'en-tête dans Paramètres.'}</p>
  <div class="mf">${hasLogo?'':'<button class="btn ghost" data-act="go" data-v="reglages">Ajouter les logos</button>'}<button class="btn" data-act="close">Annuler</button><button class="btn" data-act="bpPrev" data-keep="1">Aperçu</button><button class="btn pri" data-act="bpGo">Télécharger le PDF A4</button></div>`)}
function imgFmt(u){return /^data:image\/jpe?g/.test(u)?'JPEG':'PNG'}
function pdfLogo(doc,u,x,y,w,h){u=safeImg(u);if(!u)return;try{const p=doc.getImageProperties(u);const r=Math.min(w/p.width,h/p.height);const iw=p.width*r,ih=p.height*r;doc.addImage(u,imgFmt(u),x+(w-iw)/2,y+(h-ih)/2,iw,ih)}catch(e){}}
async function pdfBordereaux(bp){
  const s=sess(),C=computed();const pages=bpPages(bp);if(!pages.length)throw new Error('vide');
  const {jsPDF}=window.jspdf;const doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});const W=297,X0=10,TW=W-2*X0;
  const BLK=[0,0,0],RED=[255,0,0],GREEN=[0,176,80],GREY=[120,120,120];
  const blank=bp.mode==='vierge';const dnum=s.date?new Date(s.date+'T00:00:00').toLocaleDateString('fr-FR'):'';
  const ligue=pt(S.ligue.nom.toUpperCase().replace(/^LIGUE\s+/,''));
  const sp=v=>{const t=String(v||'').split(/\s+[—–-]\s+/);return[t[0]||'',t.slice(1).join(' ')]};
  const nf=v=>v==null||v===''?'':(+v%1?fmt(+v,1):String(+v));
  const cell=(x,y,w,h,lw)=>{doc.setLineWidth(lw||.2);doc.setDrawColor(...BLK);doc.rect(x,y,w,h,'S')};
  const ctext=(t,x,y,w,h,o={})=>{doc.setFont('helvetica',o.b?'bold':'normal');doc.setFontSize(o.fs||9);doc.setTextColor(...(o.c||BLK));const al=o.al||'center';const tx=al==='left'?x+1.5:al==='right'?x+w-1.5:x+w/2;doc.text(pt(t),tx,y+h/2+(o.fs||9)*0.3528*0.35,{align:al})};
  const vtext=(t,x,y,w,h,o={})=>{doc.setFont('helvetica',o.b?'bold':'normal');let fs=o.fs||8.5;doc.setFontSize(fs);doc.setTextColor(...BLK);let lines=doc.splitTextToSize(pt(t),h-3);
    while(lines.length*fs*0.3528*1.15>w-1&&fs>5.5){fs-=.5;doc.setFontSize(fs);lines=doc.splitTextToSize(pt(t),h-3)}const lg=fs*0.3528*1.15;const tot=lines.length*lg;
    lines.forEach((ln,i)=>{const tw=doc.getTextWidth(ln);const lx=x+w/2-tot/2+lg*(i+.78);doc.text(ln,lx,y+h-(h-tw)/2,{angle:90})})};
  pages.forEach((pg,pi)=>{if(pi)doc.addPage();const g=pg.g,b=BAR()[g],max=bmax(g);const nT=b.filter(e=>e.t==='T').length;const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0);
    // en-tête
    pdfLogo(doc,(S.logos||{}).l,X0,5,30,22);pdfLogo(doc,(S.logos||{}).r,W-X0-30,5,30,22);
    doc.setFont('helvetica','bold');doc.setFontSize(17);doc.setTextColor(...GREEN);doc.text(pt(S.ligue.fed.toUpperCase()),W/2,15,{align:'center'});
    doc.setTextColor(...BLK);doc.setFontSize(13);doc.text('BORDEREAU DE PASSAGE DE GRADE',W/2,29,{align:'center'});
    doc.setFontSize(11);doc.text(pt('GRADE SOLLICITE : '+GL(g).toUpperCase()),X0,37);doc.text(pt('LIGUE : '+ligue),W/2,37,{align:'center'});doc.text(pt('DATE : '+dnum),W-X0,37,{align:'right'});
    doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(...GREY);doc.text(pt(`Table ${pg.k+1} · évaluateur : ${labelOf(tableOwner(pg.slots.map(x=>x.c).filter(Boolean)))} · ceinture ${CN(+g+1)} → ${CN(g)}`),W-X0,41,{align:'right'});
    // colonnes
    const n=b.length;const nomW=n<=8?66:56;const fixed=7+nomW+13+15+13+16+9;const epW=(TW-fixed)/n;
    const ws=[7,nomW,...Array(n).fill(epW),13,15,13,16,9];const xs=[];ws.reduce((a,w,i)=>(xs[i]=a,a+w),X0);
    const iT=2,iTot=2+n,iMoy=iTot+1,iRes=iMoy+1,iMen=iRes+1,iRk=iMen+1;
    const yH=43,h1=7,h2=27,h3=5.5,h4=5,rh=8.3;
    // groupes
    const xT=xs[iT],wT=ws.slice(iT,iT+nT).reduce((a,v)=>a+v,0),xP=xT+wT,wP=ws.slice(iT+nT,iTot).reduce((a,v)=>a+v,0);
    cell(xT,yH,wT,h1,.5);ctext(`Matières théoriques/${tm}`,xT,yH,wT,h1,{b:1,fs:9});cell(xP,yH,wP,h1,.5);ctext(`Matières pratiques/${max-tm}`,xP,yH,wP,h1,{b:1,fs:9});
    b.forEach((e,i)=>{const x=xs[iT+i];cell(x,yH+h1,ws[iT+i],h2);vtext(e.n,x,yH+h1,ws[iT+i],h2,{fs:8.5})});
    [[iTot,'TOTAL SUR'],[iMoy,'MOYENNE SUR']].forEach(([i,t])=>{cell(xs[i],yH,ws[i],h1+h2,.5);vtext(t,xs[i],yH,ws[i],h1+h2,{b:1,fs:8.5})});
    [[iRes,'RESULTAT'],[iMen,'MENTION'],[iRk,'RANG']].forEach(([i,t])=>{cell(xs[i],yH,ws[i],h1+h2+h3,.5);vtext(t,xs[i],yH,ws[i],h1+h2+h3,{b:1,fs:8.5})});
    // NOTE SUR
    const y3=yH+h1+h2;cell(X0,y3,ws[0]+ws[1],h3,.5);ctext('NOTE SUR',X0,y3,ws[0]+ws[1],h3,{b:1,fs:9});
    b.forEach((e,i)=>{cell(xs[iT+i],y3,ws[iT+i],h3);ctext(e.m,xs[iT+i],y3,ws[iT+i],h3,{b:1,c:RED,fs:9})});cell(xs[iTot],y3,ws[iTot],h3);ctext(max,xs[iTot],y3,ws[iTot],h3,{b:1,c:RED,fs:9});cell(xs[iMoy],y3,ws[iMoy],h3);ctext(100,xs[iMoy],y3,ws[iMoy],h3,{b:1,c:RED,fs:9});
    // bandeau noir
    const y4=y3+h3;doc.setFillColor(...BLK);doc.rect(X0,y4,TW,h4,'F');doc.setTextColor(255,255,255);doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.text('N°',xs[0]+ws[0]/2,y4+3.4,{align:'center'});doc.setFont('helvetica','bold');doc.text(pt('Nom et prénoms'),xs[1]+ws[1]/2,y4+3.4,{align:'center'});
    // lignes candidats
    let y=y4+h4;
    pg.slots.forEach(({n:no,c})=>{ws.forEach((w,i)=>cell(xs[i],y,w,rh,i<2?.35:.2));ctext(no,xs[0],y,ws[0],rh,{fs:9});
      if(!c){ctext('Place libérée',xs[1],y,ws[1],rh,{al:'left',fs:8,c:GREY})}
      else{let nm=pt(c.nom+(c.absent?' (ABSENT)':''));doc.setFont('helvetica','bold');let fs=9;doc.setFontSize(fs);while(doc.getTextWidth(nm)>ws[1]-3&&fs>6.5){fs-=.5;doc.setFontSize(fs)}ctext(nm,xs[1],y,ws[1],rh,{b:1,al:'left',fs});
        if(c.absent){'ABSENT'.split('').forEach((l,i)=>{if(i<n)ctext(l,xs[iT+i],y,ws[iT+i],rh,{fs:9})})}
        else if(!blank){const r=C.res.get(c.id);b.forEach((e,i)=>{const v=c.notes[i];if(v!=null)ctext(nf(v),xs[iT+i],y,ws[iT+i],rh,{fs:9,c:(+v>e.m||+v<0)?RED:BLK})});
          if(r.n){ctext(nf(r.tot),xs[iTot],y,ws[iTot],rh,{b:1,fs:9})}
          if(r.complete){ctext(fmt(r.moy,2),xs[iMoy],y,ws[iMoy],rh,{b:1,fs:9});ctext(r.st==='adm'?'admis':'échec',xs[iRes],y,ws[iRes],rh,{fs:7.5});if(r.st==='adm')ctext(MEN[menIdx(r.moy)-1]||'',xs[iMen],y,ws[iMen],rh,{fs:7});if(r.rk&&seeAll(s))ctext(r.rk,xs[iRk],y,ws[iRk],rh,{fs:9})}}}
      y+=rh});
    doc.setLineWidth(.5);doc.rect(X0,y3,TW,y-y3,'S');
    // pied : légende, observations, jury
    const yF=y4+h4+S.regles.table*rh+5;const t=REG().ment;
    const leg=[['Mention','Note moyenne générale'],['Exceptionnel',`Moy >= ${t[0]}`],['Très bien',`${t[1]} <= Moy < ${t[0]}`],['Bien',`${t[2]} <= Moy < ${t[1]}`],['Assez Bien',`${t[3]} <= Moy < ${t[2]}`],['Insuffisant',`Moy < ${REG().seuil}`]];
    leg.forEach((r,i)=>{const lh=3.9;cell(X0,yF+i*lh,20,lh);cell(X0+20,yF+i*lh,30,lh);ctext(r[0],X0,yF+i*lh,20,lh,{fs:6.8,b:i===0});ctext(r[1],X0+20,yF+i*lh,30,lh,{fs:6.8,b:i===0})});
    const J=((s.jurys||{})[g]||{})[pg.k]||{};
    const ox=X0+58,ow=88;doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(...BLK);doc.text('OBSERVATIONS DU JURY',ox+ow/2,yF+2.5,{align:'center'});const tw=doc.getTextWidth('OBSERVATIONS DU JURY');doc.setLineWidth(.25);doc.line(ox+ow/2-tw/2,yF+3.2,ox+ow/2+tw/2,yF+3.2);
    if(J.o&&!blank){doc.setFont('helvetica','normal');doc.setFontSize(8);doc.text(doc.splitTextToSize(pt(J.o),ow),ox,yF+8)}
    else{doc.setDrawColor(170,170,170);doc.setLineWidth(.15);doc.setLineDashPattern([.6,.8],0);for(let i=0;i<3;i++)doc.line(ox,yF+9.5+i*5.5,ox+ow,yF+9.5+i*5.5);doc.setLineDashPattern([],0)}
    const jx=X0+152,jw=[25,44,17,TW-152-86];const jh=[4.5,7,7,7];const head=['FONCTION','Nom et Prénoms','Grade','Fonction FITKD-Signature'];
    const rows=[['Président',...sp(J.p||(s.chef?labelOf(s.chef):''))],['Vice Président',...sp(J.v)],['Rapporteur',...sp(J.r)]];
    let jy=yF;head.forEach((h,i)=>{const x=jx+jw.slice(0,i).reduce((a,v)=>a+v,0);cell(x,jy,jw[i],jh[0]);ctext(h,x,jy,jw[i],jh[0],{b:1,fs:7.5})});jy+=jh[0];
    rows.forEach(r=>{[0,1,2,3].forEach(i=>{const x=jx+jw.slice(0,i).reduce((a,v)=>a+v,0);cell(x,jy,jw[i],jh[1]);if(i<3&&r[i])ctext(blank&&i>0?'':r[i],x,jy,jw[i],jh[1],{fs:8,al:i===0?'center':'left'})});jy+=jh[1]});
    doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(...GREY);doc.text(pt(`Keupro · ${s.titre}${s.lock?' · clôturée le '+fdt(s.lock.at):''} · page ${pi+1} / ${pages.length}`),X0,206);
  });
  const g0=pages[0].g;const nm=bp.scope==='all'?'tous_grades':bp.scope==='table'?slug(GL(g0))+'_table_'+(bp.k+1):slug(GL(g0));
  await saveFile(`Bordereau_${blank?'vierge_':''}${nm}_${s.date||'session'}.pdf`,doc.output('blob'),'application/pdf');
}

/* ---------- mode en ligne (Supabase) ---------- */
const sessRow=s=>({id:s.id,ligue_id:AUTH.ligue.id,titre:s.titre||'Session',date:s.date||null,lieu:s.lieu||'',demo:!!s.demo,jurys:s.jurys||{},rapport:s.rapport||{},journal:s.log||[],chef_id:isUuid(s.chef)?s.chef:null,evaluation:s.eval||{},cloture_at:s.lock?new Date(s.lock.at).toISOString():null,cloture_par:s.lock&&isUuid(s.lock.par)?s.lock.par:null,cloture_bareme:s.lock?{bar:s.lock.bar||null,reg:s.lock.reg||null}:null,deverrouillage:s.lock&&s.unlockReq?s.unlockReq:null});
const candRow=(c,sid)=>({id:c.id,session_id:sid,ligue_id:AUTH.ligue.id,nom:c.nom,club:c.club||'',grade:c.grade,no:c.no??null,dos:c.dos??7,absent:!!c.absent,notes:c.notes||[],evaluateur:isUuid(c.ev)?c.ev:null});
const candFrom=r=>({id:r.id,nom:r.nom,club:r.club||'',grade:r.grade,no:r.no,dos:r.dos??7,absent:!!r.absent,notes:Array.isArray(r.notes)?r.notes:[],ev:r.evaluateur||null});
const sessFrom=r=>({id:r.id,titre:r.titre,date:r.date||'',lieu:r.lieu||'',demo:!!r.demo,jurys:r.jurys||{},rapport:r.rapport||{},log:Array.isArray(r.journal)?r.journal:[],chef:r.chef_id||null,eval:r.evaluation||{},lock:r.cloture_at?{at:Date.parse(r.cloture_at),par:r.cloture_par||null,bar:(r.cloture_bareme||{}).bar||null,reg:(r.cloture_bareme||{}).reg||null}:null,unlockReq:r.cloture_at&&r.deverrouillage?r.deverrouillage:null,cands:[]});
const ligRow=()=>({nom:S.ligue.nom,federation:S.ligue.fed,settings:{regles:S.regles,baremes:S.baremes,ceintures:S.ceintures,evaluateurs:S.evaluateurs,logos:S.logos||{}}});
function frErr(e){const m=String((e&&(e.message||e.error_description))||e||'');if(/clôtur|déverrouill|fiches d'évaluation/i.test(m))return m;
  if(/Invalid login credentials/i.test(m))return'E-mail ou mot de passe incorrect.';
  if(/Email not confirmed/i.test(m))return"Votre adresse e-mail n'est pas encore confirmée. Ouvrez le lien reçu par e-mail, puis reconnectez-vous.";
  if(/already registered|already exists/i.test(m))return'Un compte existe déjà avec cette adresse. Connectez-vous.';
  if(/Password should be at least|weak/i.test(m))return'Le mot de passe doit contenir au moins 8 caractères.';
  if(/rate limit|too many/i.test(m))return'Trop de tentatives. Patientez quelques minutes puis réessayez.';
  if(/réservée à l.administrateur/i.test(m))return"Action réservée à l'administrateur de la ligue.";
  if(/au moins un administrateur/i.test(m))return'La ligue doit garder au moins un administrateur. Nommez d\'abord un autre administrateur.';
  if(/code d.invitation inconnu/i.test(m))return"Code d'invitation inconnu. Vérifiez-le auprès de l'administrateur de la ligue.";
  if(/Failed to fetch|NetworkError|network/i.test(m))return'Connexion internet indisponible. Réessayez quand le réseau revient.';
  return m||'Une erreur est survenue.'}
function setSync(st){SY.status=st;const p=$('#syncPill');if(!p)return;const L={ok:['ok','Enregistré'],saving:['ac','Enregistrement…'],offline:['warn','Hors ligne'],error:['ko','Non enregistré']};const v=MODE==='cloud'?L[st]||L.ok:['mu','Démo locale'];p.className='pill '+v[0];p.textContent=v[1];p.title=MODE==='cloud'?(st==='ok'?'Toutes les modifications sont enregistrées en ligne':st==='offline'?'Les modifications seront envoyées au retour du réseau':st==='error'?'Nouvel essai automatique dans quelques secondes':''):'Connectez-vous pour enregistrer en ligne'}
function shellCloud(){const ns=document.querySelector('[data-act="newSess"]');if(ns)ns.hidden=!canAdmin();if(!CLOUD)return;const p=$('#syncPill'),a=$('#acctBtn');p.hidden=false;a.hidden=false;setSync(SY.status);
  a.innerHTML=MODE==='cloud'?(esc((AUTH.user&&AUTH.user.email||'?')[0].toUpperCase())+'<span class="hide-xs"> · '+(AUTH.role==='admin'?'Admin':(S&&S.sessions&&sess()&&isChefOf(sess()))?'Président du jury':'Évaluateur')+'</span>'):'Connexion';a.dataset.act=MODE==='cloud'?'account':'login'}
function scheduleSync(){if(MODE!=='cloud')return;setSync('saving');clearTimeout(SY.t);SY.t=setTimeout(syncNow,450)}
async function syncNow(){
  if(MODE!=='cloud')return;if(SY.busy){SY.again=true;return}SY.busy=true;clearTimeout(SY.retry);setSync('saving');
  try{const L=AUTH.ligue.id;
    if(AUTH.role==='admin'){const lr=ligRow(),j=JSON.stringify(lr);if(j!==SY.lig){const {error}=await SB.from('ligues').update(lr).eq('id',L);if(error)throw error;SY.lig=j}}
    const sUp=[],cUp=[],sSeen=new Set(),cSeen=new Set(),sJ=new Map(),cJ=new Map();
    for(const s of S.sessions){const r=sessRow(s),j=JSON.stringify(r);sSeen.add(s.id);if(SY.sess.get(s.id)!==j){sUp.push(r);sJ.set(s.id,j)}
      for(const c of s.cands){const rc=candRow(c,s.id),jc=JSON.stringify(rc);cSeen.add(c.id);if(SY.cand.get(c.id)!==jc){cUp.push(rc);cJ.set(c.id,jc)}}}
    const sDel=[...SY.sess.keys()].filter(id=>!sSeen.has(id)),cDel=[...SY.cand.keys()].filter(id=>!cSeen.has(id));
    if(AUTH.role==='admin'){
      const sPre=sUp.filter(r=>!r.cloture_at),sPost=sUp.filter(r=>r.cloture_at);
      if(sPre.length){const {error}=await SB.from('sessions').upsert(sPre);if(error)throw error;sPre.forEach(r=>SY.sess.set(r.id,sJ.get(r.id)))}
      for(let i=0;i<cUp.length;i+=500){const ch=cUp.slice(i,i+500);const {error}=await SB.from('candidats').upsert(ch);if(error)throw error;ch.forEach(r=>SY.cand.set(r.id,cJ.get(r.id)))}
      for(let i=0;i<cDel.length;i+=200){const ch=cDel.slice(i,i+200);const {error}=await SB.from('candidats').delete().in('id',ch);if(error)throw error;ch.forEach(id=>SY.cand.delete(id))}
      if(sDel.length){const {error}=await SB.from('sessions').delete().in('id',sDel);if(error)throw error;sDel.forEach(id=>SY.sess.delete(id))}
      if(sPost.length){const {error}=await SB.from('sessions').upsert(sPost);if(error)throw error;sPost.forEach(r=>SY.sess.set(r.id,sJ.get(r.id)))}
    }else{
      // évaluateur : seules les notes, l'absence, le jury et le rapport sont envoyés
      const sendS=async L=>{for(const r of L){if(!SY.sess.has(r.id))continue;const ss=S.sessions.find(x=>x.id===r.id);const pay={jurys:r.jurys};if(isChefOf(ss)){pay.rapport=r.rapport;pay.evaluation=r.evaluation;pay.cloture_at=r.cloture_at;pay.cloture_par=r.cloture_par;pay.cloture_bareme=r.cloture_bareme;pay.deverrouillage=r.deverrouillage}
        const {error}=await SB.from('sessions').update(pay).eq('id',r.id);if(error)throw error;SY.sess.set(r.id,sJ.get(r.id))}};
      await sendS(sUp.filter(r=>!r.cloture_at));
      const ex=cUp.filter(r=>SY.cand.has(r.id));let lost=false;
      const re=ex.filter(r=>isChefOf(S.sessions.find(x=>x.id===r.session_id)));
      for(let i=0;i<re.length;i+=300){const ch=re.slice(i,i+300);const {error}=await SB.rpc('affecter_evaluateurs',{p_rows:ch.map(r=>({id:r.id,evaluateur:r.evaluateur}))});if(error)throw error}
      for(let i=0;i<ex.length;i+=300){const ch=ex.slice(i,i+300);const {data,error}=await SB.rpc('enregistrer_notes',{p_rows:ch.map(r=>({id:r.id,notes:r.notes,absent:r.absent}))});if(error)throw error;if(typeof data==='number'&&data<ch.length)lost=true;ch.forEach(r=>SY.cand.set(r.id,cJ.get(r.id)))}
      await sendS(sUp.filter(r=>r.cloture_at));
      if(lost){toast("Une partie de ces candidats n'est plus dans votre lot : actualisation.");setTimeout(refreshCands,200)}
    }
    setSync('ok');
  }catch(e){console.warn('sync',e);if(/clôtur|déverrouill|fiches d'évaluation/i.test(String(e&&e.message))){SY.busy=false;reloadFromServer(frErr(e));return}setSync(navigator.onLine===false||/fetch|network/i.test(String(e&&e.message))?'offline':'error');SY.retry=setTimeout(syncNow,8000)}
  finally{SY.busy=false;if(SY.again){SY.again=false;scheduleSync()}}
}
function cacheCloud(){if(MODE!=='cloud')return;try{localStorage.setItem('keupro.cloud.'+AUTH.ligue.id,JSON.stringify(S))}catch(e){}}
function loadLocalState(){let x=null;try{const raw=localStorage.getItem(LS_KEY);if(raw){const p=JSON.parse(raw);if(p&&p.v===1&&Array.isArray(p.sessions))x=p}}catch(e){}if(!x)x=defaultState();return x}
function demoSessionCopy(){const d=clone(defaultState0().sessions[0]);d.id=uid();d.cands.forEach(c=>{c.id=uid();c.ev=null});d.lock=null;d.unlockReq=null;d.chef=null;d.eval={quota:S.regles.quota||50,conv:[],chefLot:false,v:1};ensureNo(d);d.demo=true;d.titre=d.titre+' (démonstration)';d.log=[];return d}
async function fetchAll(t,L){let out=[],from=0;for(;;){const {data,error}=await SB.from(t).select('*').eq('ligue_id',L).order('id').range(from,from+999);if(error)throw error;out=out.concat(data||[]);if(!data||data.length<1000)break;from+=1000}return out}
let RT={timer:null};
function softRender(){if(!$('#modal').hidden||(document.activeElement&&document.activeElement.matches&&document.activeElement.matches('#view input,#view textarea,#view select'))){ui.pendingRender=true;return}const y=window.scrollY;render();window.scrollTo(0,y)}
function remoteChanged(c){CC=null;cacheCloud();
  if(c&&ui.view==='saisie'&&ui.sai.mode==='grille'&&document.getElementById('gr-'+c.id)){(BAR()[c.grade]||[]).forEach((e,i)=>{const el=document.getElementById(`g-${c.id}-${i}`);if(el&&el!==document.activeElement)el.value=c.notes[i]??''});refreshGridRow(c);return}
  clearTimeout(RT.timer);RT.timer=setTimeout(softRender,300)}
function onCandChange(pl){if(MODE!=='cloud')return;
  if(pl.eventType==='DELETE'){const id=pl.old&&pl.old.id;if(!id||!SY.cand.has(id))return;for(const s of S.sessions){const k=s.cands.findIndex(c=>c.id===id);if(k>=0){s.cands.splice(k,1);break}}SY.cand.delete(id);remoteChanged();return}
  const r=pl.new;if(!r||r.ligue_id!==AUTH.ligue.id)return;const c=candFrom(r),j=JSON.stringify(candRow(c,r.session_id));if(SY.cand.get(r.id)===j)return;
  let loc=null,ls=null;for(const s of S.sessions){const x=s.cands.find(q=>q.id===r.id);if(x){loc=x;ls=s;break}}
  if(loc){if(SY.cand.has(r.id)&&JSON.stringify(candRow(loc,ls.id))!==SY.cand.get(r.id))return;if(ls.id!==r.session_id)return;Object.assign(loc,c)}
  else{const s=S.sessions.find(x=>x.id===r.session_id);if(!s)return;s.cands.push(c);loc=c}
  SY.cand.set(r.id,j);remoteChanged(loc)}
function onSessChange(pl){if(MODE!=='cloud')return;
  if(pl.eventType==='DELETE'){const id=pl.old&&pl.old.id;if(!id||!SY.sess.has(id))return;S.sessions=S.sessions.filter(s=>s.id!==id);SY.sess.delete(id);[...SY.cand.keys()].forEach(k=>{if(!S.sessions.some(s=>s.cands.some(c=>c.id===k)))SY.cand.delete(k)});if(!S.sessions.length)S.sessions.push(newSessionObj());if(!S.sessions.some(s=>s.id===S.cur))S.cur=S.sessions[0].id;remoteChanged();return}
  const r=pl.new;if(!r||r.ligue_id!==AUTH.ligue.id)return;const n=sessFrom(r);let loc=S.sessions.find(s=>s.id===r.id);const j=JSON.stringify(sessRow({...n}));if(SY.sess.get(r.id)===j)return;
  let reload=false;
  if(loc){if(SY.sess.has(r.id)&&JSON.stringify(sessRow(loc))!==SY.sess.get(r.id))return;const wasV=(loc.eval||{}).v,wasChef=loc.chef,wasLock=!!loc.lock,wasReq=!!loc.unlockReq;Object.assign(loc,{titre:n.titre,date:n.date,lieu:n.lieu,demo:n.demo,jurys:n.jurys,rapport:n.rapport,log:n.log,chef:n.chef,eval:n.eval,lock:n.lock,unlockReq:n.unlockReq});
    if(!wasLock&&n.lock)setTimeout(()=>toast(`« ${n.titre} » a été clôturée par ${labelOf(n.lock.par)} : les fiches sont verrouillées`),350);
    else if(wasLock&&!n.lock)setTimeout(()=>toast(`« ${n.titre} » est déverrouillée : les modifications sont de nouveau possibles`),350);
    else if(!wasReq&&n.unlockReq&&me().role==='admin')setTimeout(()=>toast(`${labelOf(n.unlockReq.par)} demande le déverrouillage de « ${n.titre} »`),350);
    if(me().role!=='admin'&&((n.eval||{}).v!==wasV||n.chef!==wasChef))reload=true}
  else S.sessions.push(n);SY.sess.set(r.id,j);remoteChanged();if(reload)refreshCands()}
async function reloadFromServer(msg){if(MODE!=='cloud')return;try{const L=AUTH.ligue.id;const ss=await fetchAll('sessions',L),cc=await fetchAll('candidats',L);const cur=S.cur;
    const old=new Map(S.sessions.map(x=>[x.id,S.sessions.indexOf(x)]));S.sessions=ss.map(sessFrom).sort((a,b)=>(old.get(a.id)??1e9)-(old.get(b.id)??1e9));const by=new Map(S.sessions.map(x=>[x.id,x]));
    cc.forEach(r=>{const x=by.get(r.session_id);if(x)x.cands.push(candFrom(r))});SY.sess=new Map();SY.cand=new Map();
    S.sessions.forEach(x=>{SY.sess.set(x.id,JSON.stringify(sessRow(x)));x.cands.forEach(c=>SY.cand.set(c.id,JSON.stringify(candRow(c,x.id))))});
    if(!S.sessions.length)S.sessions.push(newSessionObj());S.cur=S.sessions.some(x=>x.id===cur)?cur:S.sessions[0].id;CC=null;cacheCloud();setSync('ok');closeModal();render();if(msg)toast(msg)}
  catch(e){console.warn(e);setSync('error')}}
async function refreshCands(){if(MODE!=='cloud'||RT.refreshing)return;RT.refreshing=true;
  try{if(SY.status!=='ok')await syncNow();const cc=await fetchAll('candidats',AUTH.ligue.id);const by=new Map(S.sessions.map(x=>[x.id,x]));S.sessions.forEach(x=>x.cands=[]);SY.cand=new Map();
    cc.forEach(r=>{const x=by.get(r.session_id);if(x){const c=candFrom(r);x.cands.push(c);SY.cand.set(c.id,JSON.stringify(candRow(c,x.id)))}});CC=null;cacheCloud();ui.sai.g=null;ui.bg=null;softRender();toast('Répartition des lots mise à jour')}
  catch(e){console.warn(e)}finally{RT.refreshing=false}}
function newSessionObj(){const d=new Date().toISOString().slice(0,10);return{id:uid(),titre:'Passage de grade du '+fdate(d),date:d,lieu:'',cands:[],jurys:{},rapport:{},log:[]}}
async function cloudBoot(){
  SB=window.supabase.createClient(CLOUD.url,CLOUD.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  shellCloud();
  SB.auth.onAuthStateChange((ev,session)=>{setTimeout(async()=>{
    if(ev==='SIGNED_IN'&&MODE!=='cloud'&&!ui.starting)await cloudStart();
    else if(ev==='SIGNED_OUT'&&MODE==='cloud')await cloudStop(false);
    else if(ev==='PASSWORD_RECOVERY')pwdModal();},0)});
  window.addEventListener('online',()=>{if(MODE==='cloud')syncNow()});
  window.addEventListener('beforeunload',e=>{if(MODE==='cloud'&&SY.status!=='ok'){e.preventDefault();e.returnValue=''}});
  const {data}=await SB.auth.getSession();if(data&&data.session&&MODE!=='cloud'&&!ui.starting)await cloudStart();
}
async function cloudStart(){
  ui.starting=true;const prevView=ui.view;
  try{const {data:{user}}=await SB.auth.getUser();if(!user){ui.starting=false;return}AUTH.user=user;
    const {data:mem,error}=await SB.from('membres').select('ligue_id,role,ligues(id,nom,federation,code_invitation,settings)').eq('user_id',user.id);
    if(error)throw error;AUTH.ligues=mem||[];
    if(!AUTH.ligues.length){MODE='onboard';ui.view='ma-ligue';location.hash='ma-ligue';render();shellCloud();ui.starting=false;return}
    let pref=null;try{pref=localStorage.getItem('keupro.ligue')}catch(e){}
    const m=AUTH.ligues.find(x=>x.ligue_id===pref)||AUTH.ligues[0];AUTH.ligue=m.ligues;AUTH.role=m.role;
    try{const {data:mm}=await SB.from('membres').select('user_id,role,email,nom').eq('ligue_id',AUTH.ligue.id);AUTH.membres=mm||[]}catch(e){AUTH.membres=[]}
    ui.view='chargement';render();
    let ss,cc,offline=false;
    try{[ss,cc]=await Promise.all([fetchAll('sessions',AUTH.ligue.id),fetchAll('candidats',AUTH.ligue.id)])}catch(e){offline=true}
    const base=defaultState();
    if(offline){let c=null;try{c=JSON.parse(localStorage.getItem('keupro.cloud.'+AUTH.ligue.id)||'null')}catch(e){}if(!c)throw new Error('Failed to fetch');S=c;}
    else{const st=AUTH.ligue.settings||{};
      S={v:1,ligue:{nom:AUTH.ligue.nom,fed:AUTH.ligue.federation},regles:st.regles||base.regles,baremes:st.baremes||base.baremes,ceintures:st.ceintures||base.ceintures,evaluateurs:st.evaluateurs||[],logos:st.logos||{},sessions:[],cur:null};
      const byS=new Map();ss.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))).forEach(r=>{const x=sessFrom(r);byS.set(r.id,x);S.sessions.push(x)});
      cc.forEach(r=>{const x=byS.get(r.session_id);if(x)x.cands.push(candFrom(r))});}
    MODE='cloud';
    // snapshot of what the server has
    SY.sess=new Map();SY.cand=new Map();
    if(offline){S.sessions.forEach(s=>{SY.sess.set(s.id,'');s.cands.forEach(c=>SY.cand.set(c.id,''))})}
    else{SY.lig=JSON.stringify({nom:AUTH.ligue.nom,federation:AUTH.ligue.federation,settings:AUTH.ligue.settings||{}});
      S.sessions.forEach(s=>{SY.sess.set(s.id,JSON.stringify(sessRow(s)));s.cands.forEach(c=>SY.cand.set(c.id,JSON.stringify(candRow(c,s.id))))})}
    migrate();if(!S.sessions.length)S.sessions.push(newSessionObj());
    let cur=null;try{cur=localStorage.getItem('keupro.cur.'+AUTH.ligue.id)}catch(e){}S.cur=S.sessions.some(s=>s.id===cur)?cur:S.sessions[0].id;
    CC=null;
    if(RTCH){try{SB.removeChannel(RTCH)}catch(e){}}
    RTCH=SB.channel('ligue-'+AUTH.ligue.id).on('postgres_changes',{event:'*',schema:'public',table:'candidats',filter:'ligue_id=eq.'+AUTH.ligue.id},onCandChange).on('postgres_changes',{event:'DELETE',schema:'public',table:'candidats'},onCandChange)
      .on('postgres_changes',{event:'*',schema:'public',table:'sessions',filter:'ligue_id=eq.'+AUTH.ligue.id},onSessChange).on('postgres_changes',{event:'DELETE',schema:'public',table:'sessions'},onSessChange).subscribe();
    setSync(offline?'offline':'ok');save();
    const target=ui.afterLogin||(['connexion','ma-ligue','chargement'].includes(prevView)?'accueil':prevView);ui.afterLogin=null;ui.sai.g=null;ui.bg=ui.cg=null;
    if(location.hash.slice(1)!==target)location.hash=target;ui.view=target;render();
    if(offline)toast('Hors ligne : dernière copie de cet appareil. Les modifications seront envoyées au retour du réseau.');
  }catch(e){console.warn(e);toast(frErr(e));MODE=MODE==='cloud'?'cloud':'local';if(ui.view==='chargement'){ui.view='bienvenue';render()}}
  finally{ui.starting=false;shellCloud()}
}
async function cloudStop(signOut){
  if(signOut&&SY.status!=='ok'&&MODE==='cloud'){await syncNow()}
  if(RTCH){try{SB.removeChannel(RTCH)}catch(e){}RTCH=null}
  if(signOut){try{await SB.auth.signOut()}catch(e){}}
  MODE='local';AUTH={user:null,ligue:null,role:null,ligues:[]};SY.sess=new Map();SY.cand=new Map();SY.lig='';S=loadLocalState();migrate();CC=null;
  ui.view='bienvenue';location.hash='bienvenue';render();shellCloud();toast('Vous êtes déconnecté')}
function accountModal(){if(MODE!=='cloud'){ACT.login({dataset:{}});return}
  const adm=AUTH.role==='admin';
  openModal(`<div class="mh"><div><div class="eyebrow">Mon compte</div><h2>${esc(AUTH.ligue.nom)}</h2><div class="note">${esc(AUTH.user.email)} · ${adm?'administrateur':'évaluateur'}</div></div><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  ${adm?`<div class="field"><span>Code d'invitation des évaluateurs</span><div class="code-box">${esc(AUTH.ligue.code_invitation||'')}</div><div class="row"><button class="btn sm" data-act="copyCode" data-c="${esc(AUTH.ligue.code_invitation||'')}">Copier le code</button><button class="btn sm ghost" data-act="newCode">Créer un nouveau code</button></div><span class="note">Chaque évaluateur crée son compte, puis saisit ce code pour rejoindre la ligue. Créez un nouveau code pour bloquer les invitations déjà envoyées.</span></div>
   <p class="note" style="margin:0"><b>Administrateur</b> : sessions, inscriptions, corrections de grade, barèmes et paramètres. <b>Évaluateur</b> : saisie des notes, absences, jury et rapport.</p>
   <div class="field"><span>Membres de la ligue</span><div class="list card" id="memList" style="box-shadow:none"><div class="li note">Chargement…</div></div></div>`:''}
  ${AUTH.ligues.length>1?`<div class="field"><span>Changer de ligue</span><div class="acts">${AUTH.ligues.map(m=>`<button class="act ${m.ligue_id===AUTH.ligue.id?'on':''}" data-act="switchLigue" data-l="${m.ligue_id}"><b>${esc(m.ligues.nom)}</b><span>${m.role==='admin'?'Administrateur':'Évaluateur'}</span></button>`).join('')}</div></div>`:''}
  <div class="mf"><button class="btn danger" data-act="logout">Se déconnecter</button><button class="btn" data-act="close">Fermer</button></div>`);
  if(adm)SB.from('membres').select('user_id,role,email,nom').eq('ligue_id',AUTH.ligue.id).then(({data,error})=>{const el=$('#memList');if(!el)return;if(error){el.innerHTML=`<div class="li note">${esc(frErr(error))}</div>`;return}
    el.innerHTML=(data||[]).map(m=>`<div class="li" style="flex-wrap:wrap"><div class="grow"><input type="text" value="${esc(m.nom||'')}" placeholder="Nom affiché, ex. K. Assi — 6e Dan" data-ch="mnom" data-u="${m.user_id}" aria-label="Nom affiché" style="min-height:32px;padding:4px 8px"><div class="t2">${esc(m.email||'Membre')}${m.user_id===AUTH.user.id?' · vous':''}</div></div><select data-ch="role" data-u="${m.user_id}" aria-label="Rôle de ${esc(m.email||'ce membre')}" style="width:auto;min-height:32px;padding:4px 8px"><option value="admin" ${m.role==='admin'?'selected':''}>Administrateur</option><option value="evaluateur" ${m.role!=='admin'?'selected':''}>Évaluateur</option></select>${m.user_id!==AUTH.user.id?`<button class="btn sm ghost danger" data-act="rmMember" data-u="${m.user_id}">Retirer</button>`:''}</div>`).join('')})}
function pwdModal(){openModal(`<form data-form="newPwd" style="display:flex;flex-direction:column;gap:14px"><div class="mh"><h2>Nouveau mot de passe</h2></div><label class="field"><span>Mot de passe (8 caractères minimum)</span><input type="password" id="npw" minlength="8" required autocomplete="new-password"></label><div class="mf"><button class="btn pri" type="submit">Enregistrer</button></div></form>`)}
VIEWS.chargement=()=>`<div class="authwrap"><div class="wrap"><div class="authcard" style="align-items:center;text-align:center"><h2>Chargement de la ligue…</h2><p class="note" style="margin:0">Récupération des sessions et des notes.</p></div></div></div>`;
VIEWS.connexion=function(){const a=ui.auth||{tab:'login'};const t=a.tab;
  const title={login:'Connexion',signup:'Créer un compte',reset:'Mot de passe oublié'}[t];
  return `<div class="authwrap"><nav class="lnav"><div class="wrap"><div class="brand" data-act="go" data-v="bienvenue" style="cursor:pointer"><svg class="logo" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#DD6400"/><path d="M7 21h26" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M17 15l6 6-6 6" stroke="#0F2A57" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><b>Keupro</b><small>Passages de grade</small></div></div><button class="btn on-dark cta" data-act="go" data-v="accueil">Essayer la démo</button></div></nav>
  <div class="wrap"><form class="authcard" data-form="auth"><div><div class="eyebrow">Espace de la ligue</div><h1>${title}</h1></div>
   ${a.err?`<div class="err" role="alert">${esc(a.err)}</div>`:''}${a.msg?`<div class="ok" role="status">${esc(a.msg)}</div>`:''}
   <label class="field"><span>Adresse e-mail</span><input type="email" id="auEmail" required autocomplete="email" value="${esc(a.email||'')}"></label>
   ${t!=='reset'?`<label class="field"><span>Mot de passe${t==='signup'?' (8 caractères minimum)':''}</span><input type="password" id="auPwd" required minlength="${t==='signup'?8:1}" autocomplete="${t==='signup'?'new-password':'current-password'}"></label>`:''}
   <button class="btn pri lg" type="submit" ${a.busy?'disabled':''}>${a.busy?'Patientez…':t==='login'?'Se connecter':t==='signup'?'Créer mon compte':'Recevoir le lien de réinitialisation'}</button>
   <div class="note" style="display:flex;flex-direction:column;gap:6px">${t==='login'?`<span>Pas encore de compte ? <button type="button" class="linkbtn" data-act="authTab" data-t="signup">Créer un compte</button></span><span><button type="button" class="linkbtn" data-act="authTab" data-t="reset">Mot de passe oublié ?</button></span>`:`<span>Déjà inscrit ? <button type="button" class="linkbtn" data-act="authTab" data-t="login">Se connecter</button></span>`}
   ${t==='signup'?'<span>Responsable de ligue : vous créerez ensuite votre ligue. Évaluateur : vous saisirez le code d\'invitation transmis par votre ligue.</span>':''}</div></form></div></div>`};
VIEWS['ma-ligue']=function(){return `<div class="authwrap"><nav class="lnav"><div class="wrap"><div class="brand"><svg class="logo" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#DD6400"/><path d="M7 21h26" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M17 15l6 6-6 6" stroke="#0F2A57" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><b>Keupro</b><small>${esc(AUTH.user?AUTH.user.email:'')}</small></div></div><button class="btn on-dark cta" data-act="logout">Se déconnecter</button></div></nav>
  <div class="wrap" style="flex-direction:column;gap:20px"><div style="text-align:center;max-width:620px"><h1 style="font-size:34px">Bienvenue sur Keupro</h1><p style="color:var(--side-fg)">Créez l'espace de votre ligue, ou rejoignez une ligue existante avec le code transmis par son administrateur.</p></div>
  <div class="ob-grid"><form class="authcard" data-form="newLigue" style="max-width:none"><h2>Créer ma ligue</h2><p class="note" style="margin:0">Vous en serez l'administrateur : barèmes, sessions, invitation des évaluateurs.</p>
   <label class="field"><span>Nom de la ligue</span><input type="text" id="olNom" required minlength="2" placeholder="ex. Ligue Communale de Cocody"></label>
   <label class="field"><span>Fédération</span><input type="text" id="olFed" value="Fédération Ivoirienne de Taekwondo"></label>
   <label class="sw"><input type="checkbox" class="ck" id="olDemo" checked>Ajouter une session de démonstration (noms fictifs)</label>
   <button class="btn pri" type="submit">Créer la ligue</button></form>
  <form class="authcard" data-form="joinLigue" style="max-width:none"><h2>Rejoindre une ligue</h2><p class="note" style="margin:0">Pour les évaluateurs désignés : saisissez le code d'invitation à 8 caractères.</p>
   <label class="field"><span>Code d'invitation</span><input type="text" id="ojCode" required minlength="6" maxlength="12" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:3px;font-weight:700" placeholder="ex. 1A2B3C4D"></label>
   <button class="btn pri" type="submit">Rejoindre</button></form></div></div></div>`};
document.addEventListener('submit',async e=>{const f=e.target,k=f.dataset.form;if(!['auth','newLigue','joinLigue','newPwd'].includes(k))return;e.preventDefault();e.stopImmediatePropagation();
  if(k==='auth'){const a=ui.auth=ui.auth||{tab:'login'};a.email=$('#auEmail').value.trim();const pw=$('#auPwd')?$('#auPwd').value:'';a.err='';a.msg='';a.busy=true;render();
    try{if(a.tab==='login'){const {error}=await SB.auth.signInWithPassword({email:a.email,password:pw});if(error)throw error;a.busy=false;await cloudStart();return}
      if(a.tab==='signup'){const {data,error}=await SB.auth.signUp({email:a.email,password:pw,options:{emailRedirectTo:location.origin}});if(error)throw error;
        if(data&&data.session){a.busy=false;await cloudStart();return}a.msg='Compte créé. Ouvrez le lien de confirmation envoyé à '+a.email+', puis connectez-vous.';a.tab='login'}
      if(a.tab==='reset'){const {error}=await SB.auth.resetPasswordForEmail(a.email,{redirectTo:location.origin});if(error)throw error;a.msg='Si un compte existe pour cette adresse, un lien de réinitialisation vient d\'être envoyé.'}
    }catch(err){a.err=frErr(err)}a.busy=false;if(ui.view==='connexion')render();return}
  if(k==='newLigue'){const nom=$('#olNom').value.trim(),fed=$('#olFed').value.trim(),demo=$('#olDemo').checked;const {error}=await SB.rpc('creer_ligue',{p_nom:nom,p_federation:fed});if(error){toast(frErr(error));return}
    await cloudStart();if(demo&&MODE==='cloud'){const d=demoSessionCopy();S.sessions=S.sessions.filter(x=>x.cands.length);S.sessions.unshift(d);S.cur=d.id;save();render()}toast('Ligue créée');return}
  if(k==='joinLigue'){const {error}=await SB.rpc('rejoindre_ligue',{p_code:$('#ojCode').value.trim()});if(error){toast(frErr(error));return}await cloudStart();toast('Vous avez rejoint la ligue');return}
  if(k==='newPwd'){const {error}=await SB.auth.updateUser({password:$('#npw').value});if(error){toast(frErr(error));return}closeModal();toast('Mot de passe modifié')}
},true);

/* ---------- landing ---------- */
VIEWS.bienvenue=function(){
  const s=sess(),C=computed();const grades=gradesIn(s);const ntab=grades.reduce((a,g)=>a+tablesOf(s,g).length,0);let over=0;for(const c of s.cands)over+=C.res.get(c.id).over.length;const T=gstats(s,C,null);
  const ladder=['1','2','3','4','5','6','7','8','9'].map((g,r)=>{const b=S.ceintures[g];return `<div class="rung" style="--i:${8-r}"><div class="k">${GL(g)}<small>${esc(b.nom)}</small></div><div class="band" style="--b:${esc(b.c)};--s:${esc(b.s||b.c)}"></div></div>`}).join('');
  let sample=null;for(const g of grades){const L=C.by[g]||[];if(L.length){sample=L[Math.floor(L.length/3)];break}}
  const sr=sample?C.res.get(sample.id):null;
  const card=sample?`<div class="lcard">${ring(sr.moy,sr.st==='adm'?'ok':'ko')}<div style="min-width:0"><div class="note">Fiche de notation · candidat n° ${sample.no} · ${GL(sample.grade)}</div><div class="t">${fmt(sr.tot,sr.tot%1?1:0)} <span class="muted" style="font-size:15px">/ ${sr.max}</span></div><div class="row" style="gap:6px">${pill(sr.st)}${sr.st==='adm'?menChip(sr.moy):''}<span class="pill ac">Rang ${sr.rk}</span></div></div></div>`:'';
  const ic=k=>`<span class="ic"><svg viewBox="0 0 24 24">${ICONS[k]}</svg></span>`;
  const feats=[['saisie','Saisie sur téléphone','Chaque évaluateur note sa table sur son téléphone : boutons de notes rapides, total et moyenne calculés pendant la saisie.'],
   ['reglages','Barème contrôlé','Une note supérieure au maximum de l\'épreuve est refusée et signalée avant la délibération.'],
   ['corriger','Corrections sans casse','Un élève inscrit au mauvais grade change de liste en deux touchers. Les autres gardent leur numéro et leur table, et chaque correction est tracée.',true],
   ['classement','Classement par mérite','Rang, mention et podium pour chaque grade, avec les ex æquo et les absents traités comme dans le bordereau FITKD.'],
   ['statistiques','Statistiques utiles','Taux de réussite, répartition des moyennes, maîtrise de chaque épreuve et performance des clubs.'],
   ['rapport','Exports conformes','Bordereaux Excel avec formules, classement et rapport de passage de grade prêts à signer.']];
  const steps=[['Importer les inscriptions','Fiche Word ou liste Excel : grade sollicité, club et dossier (passeport, assurance, licence) sont reconnus.'],['Constituer les tables','Répartition par grade en tables de '+S.regles.table+' et désignation du jury FITKD.'],['Évaluer','Théorie puis pratique, épreuve par épreuve, sur téléphone ou en grille.'],['Délibérer','Admis à '+REG().seuil+'/100, mentions et rangs calculés automatiquement.'],['Rapporter','Rapport, recalés, absents et fiche des passeports générés pour la commission.']];
  return `<nav class="lnav" aria-label="Menu du site"><div class="wrap"><div class="brand" data-act="to" data-t="l-top"><svg class="logo" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#DD6400"/><path d="M7 21h26" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M17 15l6 6-6 6" stroke="#0F2A57" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><b>Keupro</b><small>Passages de grade</small></div></div>
   <div class="links"><button data-act="to" data-t="l-features">Fonctionnalités</button><button data-act="to" data-t="l-parcours">Parcours</button><button data-act="to" data-t="l-ceintures">Ceintures</button><button data-act="go" data-v="offre">Tarifs</button></div>
   ${CLOUD&&MODE!=='cloud'?`<button class="btn pri cta" data-act="login">Se connecter</button>`:`<button class="btn pri cta" data-act="go" data-v="accueil">Ouvrir l'application</button>`}</div></nav>
  <header class="lhero" id="l-top"><div class="lphoto" aria-hidden="true"></div><div class="wrap"><div><div class="eyebrow">Pour les ligues de la Fédération Ivoirienne de Taekwondo</div>
   <h1>Les passages de grade, <em>sans ressaisie</em></h1>
   <p class="lead">Keupro accompagne votre ligue de l'inscription au rapport FITKD : import des listes, tables de jury, notation sur téléphone, classements par ordre de mérite et statistiques, de la ceinture blanche à la deuxième ceinture rouge.</p>
   <div class="ctas"><button class="btn pri lg" ${CLOUD&&MODE!=='cloud'?'data-act="login" data-v="saisie"':'data-act="go" data-v="saisie"'}>Accéder à l'évaluation <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>${CLOUD&&MODE!=='cloud'?'<button class="btn on-dark lg" data-act="go" data-v="accueil">Essayer la démo</button>':'<button class="btn on-dark lg" data-act="go" data-v="inscriptions">Voir les listes de candidats</button>'}</div>
   ${s.cands.length?`<p class="proof"><i></i><span>Testé sur un bordereau réel de la ${esc(S.ligue.nom)} : ${T.ins} candidats${over?`, ${over} note${over>1?'s':''} hors barème repérée${over>1?'s':''} automatiquement`:''}.</span></p>`:''}</div>
   <div><div class="ladder" aria-label="Progression des ceintures du 9e au 1er Keup">${ladder}</div>${card}</div></div></header>
  ${s.cands.length?`<section class="lstats"><div class="wrap"><div class="lstat"><b>${T.ins}</b><span>candidats dans « ${esc(s.titre)} »</span></div><div class="lstat"><b>${grades.length}</b><span>grades évalués, du 8e au 1er Keup</span></div><div class="lstat"><b>${ntab}</b><span>tables de jury constituées automatiquement</span></div><div class="lstat"><b>${T.taux==null?'—':fmt(T.taux,1)+' %'}</b><span>de réussite, calculé à la dernière note</span></div></div></section>`:''}
  <section class="lsec" id="l-features"><div class="wrap"><div class="eyebrow">Fonctionnalités</div><h2>Tout le passage de grade dans une seule application</h2><p class="intro">Fini les fiches Word recopiées dans des onglets Excel, les totaux faits à la main et les rangs recalculés après chaque correction.</p>
   <div class="lfeats">${feats.map(([k,t,d,n])=>`<div class="card lfeat">${ic(k)}<h3>${t}${n?' <span class="pill ac">Nouveau</span>':''}</h3><p>${d}</p></div>`).join('')}</div></div></section>
  <section class="lsec alt" id="l-parcours"><div class="wrap"><div class="eyebrow">Parcours</div><h2>Cinq étapes, de l'inscription au rapport</h2><p class="intro">Le même déroulé que celui de la commission formation et évaluation, sans aucune ressaisie entre les étapes.</p>
   <div class="lsteps">${steps.map(([t,d],i)=>`<div class="card lstep"><span class="no">${i+1}</span><b>${t}</b><p>${d}</p></div>`).join('')}</div></div></section>
  <section class="lsec" id="l-ceintures"><div class="wrap"><div class="eyebrow">Ceintures</div><h2>Neuf ceintures, huit passages</h2><p class="intro">De la ceinture blanche (9e Keup) à la deuxième ceinture rouge (1er Keup). Chaque grade a déjà son barème : épreuves théoriques, épreuves pratiques et note maximale.</p>
   <div class="lbelts">${['9',...[...GR].reverse()].map(g=>{const b=S.ceintures[g];const sub=g==='9'?'Ceinture de départ':`${BAR()[g].length} épreuves · total sur ${bmax(g)}`;return `<div class="card lbelt">${beltI(g,'lg')}<b>${GL(g)}</b><span><strong>${esc(b.nom)}</strong><br>${sub}</span></div>`}).join('')}</div></div></section>
  <section class="lcta"><div class="wrap"><h2>Votre prochain passage de grade commence ici</h2><div class="ctas" style="margin-top:0"><button class="btn pri lg" data-act="go" data-v="saisie">Accéder à l'évaluation</button><button class="btn on-dark lg" data-act="go" data-v="offre">Voir les tarifs</button></div></div></section>
  <footer class="lfoot"><div class="wrap"><span>Keupro · ${esc(S.ligue.nom)} · ${esc(S.ligue.fed)}</span><span>Démonstration : notes d'un passage de grade réel, noms des candidats fictifs.</span></div></footer>`;
};

/* ---------- import ---------- */
let IMP=null;
function importModal(){
  IMP=null;
  openModal(`<div class="mh"><h2>Importer des candidats</h2><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
  <p class="note" style="margin:0">Formats acceptés : fiche de validation Word (.docx), liste ou bordereau Excel (.xlsx, .xls), CSV. Keupro repère le grade sollicité de chaque tableau ou onglet, le club (« / » = même club que la ligne au-dessus), les colonnes Pass., ASS., L.S., et les notes si le fichier est un bordereau déjà rempli.</p>
  <label class="drop" id="drop" for="impF"><b>Glissez le fichier ici ou touchez pour le choisir</b><span>Les candidats seront ajoutés à « ${esc(sess().titre)} »</span></label><input type="file" id="impF" accept=".docx,.xlsx,.xls,.csv" data-ch="impF" hidden>
  <label class="field"><span>Grade à utiliser si le fichier ne l'indique pas</span><select id="impG">${GR.map(g=>`<option value="${g}">${GL(g)}</option>`).join('')}</select></label>
  <div id="impPrev"></div>
  <div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn pri" data-act="impGo" id="impGo" disabled>Importer</button></div>`);
  const d=$('#drop');['dragover','dragenter'].forEach(ev=>d.addEventListener(ev,e=>{e.preventDefault();d.classList.add('over')}));['dragleave','drop'].forEach(ev=>d.addEventListener(ev,e=>{e.preventDefault();d.classList.remove('over')}));
  d.addEventListener('drop',e=>{const f=e.dataTransfer.files[0];if(f)handleImport(f)});
}
const gradeFrom=t=>{const m=String(t||'').match(/(\d)\s*(?:e|è|ème|eme|er|ère|°)?\s*(?:me)?\s*k[eé]up/i)||String(t||'').match(/sollicit[ée]\s*:?\s*(\d)/i);return m&&GR.includes(m[1])?m[1]:null};
async function handleImport(file){
  const prev=$('#impPrev');prev.innerHTML='<p class="note">Lecture du fichier…</p>';
  try{
    const name=file.name.toLowerCase();let rows=[];
    if(name.endsWith('.docx'))rows=await parseDocx(file);
    else if(name.endsWith('.csv')){const txt=await file.text();if(!window.XLSX)throw new Error('lib');rows=parseWorkbook(XLSX.read(txt,{type:'string'}))}
    else{if(!window.XLSX)throw new Error('lib');rows=parseWorkbook(XLSX.read(await file.arrayBuffer(),{type:'array'}))}
    const dg=$('#impG').value;rows.forEach(r=>{if(!r.grade)r.grade=dg});
    const s=sess();const have=new Set(s.cands.map(c=>norm(c.nom)+'|'+c.grade));const fresh=[];let dup=0;const seen=new Set();
    for(const r of rows){const k=norm(r.nom)+'|'+r.grade;if(have.has(k)||seen.has(k)){dup++;continue}seen.add(k);fresh.push(r)}
    IMP=fresh;const by={};fresh.forEach(r=>by[r.grade]=(by[r.grade]||0)+1);const withN=fresh.filter(r=>r.notes).length;
    prev.innerHTML=`<div class="card pad" style="display:flex;flex-direction:column;gap:10px;box-shadow:none"><b>${fresh.length} candidats prêts à importer</b><div style="display:flex;flex-wrap:wrap;gap:6px">${GR.filter(g=>by[g]).map(g=>`<span class="pill mu">${GL(g)} · ${by[g]}</span>`).join('')}</div><span class="note">${dup?dup+' doublon'+(dup>1?'s':'')+' ignoré'+(dup>1?'s':'')+' · ':''}${withN?withN+' avec notes · ':''}${new Set(fresh.map(r=>r.club).filter(Boolean)).size} clubs</span>
    <div class="tw"><table class="t"><tbody>${fresh.slice(0,6).map(r=>`<tr><td>${esc(r.nom)}</td><td>${esc(r.club)}</td><td>${GL(r.grade)}</td></tr>`).join('')}</tbody></table></div></div>`;
    $('#impGo').disabled=!fresh.length;
  }catch(e){prev.innerHTML=`<p class="pill ko" style="white-space:normal">${e.message==='lib'?"Le module de lecture Excel n'a pas pu se charger. Vérifiez la connexion puis réessayez.":"Ce fichier n'a pas pu être lu. Vérifiez qu'il contient un tableau avec une colonne « Nom et prénoms »."}</p>`}
}
async function parseDocx(file){
  if(!window.JSZip)throw new Error('lib');
  const zip=await JSZip.loadAsync(await file.arrayBuffer());const xml=await zip.file('word/document.xml').async('string');
  const doc=new DOMParser().parseFromString(xml,'application/xml');const body=doc.getElementsByTagNameNS('*','body')[0];
  const txt=n=>Array.from(n.getElementsByTagNameNS('*','t')).map(t=>t.textContent).join('').trim();
  let grade=null;const out=[];
  for(const el of Array.from(body.children)){
    if(el.localName==='p'){const g=gradeFrom(txt(el));if(g)grade=g}
    else if(el.localName==='tbl'){
      const trs=Array.from(el.getElementsByTagNameNS('*','tr'));let idx=null,prevClub='';
      for(const tr of trs){const cells=Array.from(tr.getElementsByTagNameNS('*','tc')).map(txt);
        if(!idx){const H=cells.map(norm);const ni=H.findIndex(h=>h.includes('NOM'));if(ni>=0){idx={nom:ni,club:H.findIndex(h=>h.includes('CLUB')),p:H.findIndex(h=>h.startsWith('PASS')),a:H.findIndex(h=>h.startsWith('ASS')),l:H.findIndex(h=>h.startsWith('L.S')||h.startsWith('LIC')),g:H.findIndex(h=>h.includes('GRADE'))}}continue}
        const nom=(cells[idx.nom]||'').trim();if(!nom)continue;
        let club=idx.club>=0?(cells[idx.club]||'').trim():'';if(!club||/^[\/\-"]+$/.test(club))club=prevClub;else prevClub=club;
        const ok=i=>i<0||/ok|oui|x|✓/i.test(cells[i]||'');
        out.push({nom:nom.toUpperCase(),club,grade:(idx.g>=0&&gradeFrom((cells[idx.g]||'')+' keup'))||grade,dos:(ok(idx.p)?1:0)|(ok(idx.a)?2:0)|(ok(idx.l)?4:0)});
      }
    }
  }
  return out;
}
function parseWorkbook(wb){
  const out=[];
  for(const sn of wb.SheetNames){
    const A=XLSX.utils.sheet_to_json(wb.Sheets[sn],{header:1,defval:null,raw:true});
    let hr=-1;for(let i=0;i<Math.min(A.length,40);i++){if((A[i]||[]).some(v=>typeof v==='string'&&/^nom/i.test(v.trim()))){hr=i;break}}
    if(hr<0)continue;
    const H=A[hr].map(v=>norm(v));const ni=H.findIndex(h=>h.startsWith('NOM'));const ci=H.findIndex(h=>h.includes('CLUB'));const gi=H.findIndex(h=>h.includes('GRADE'));
    const pi=H.findIndex(h=>h.startsWith('PASS')),ai=H.findIndex(h=>h.startsWith('ASS')),li=H.findIndex(h=>h.startsWith('L.S')||h.startsWith('LIC'));
    let sg=gradeFrom(sn);if(!sg)for(let i=0;i<hr;i++){for(const v of A[i]||[]){const g=gradeFrom(v);if(g){sg=g;break}}if(sg)break}
    // bordereau notes: find "NOTE SUR" row
    let nr=-1;for(let i=0;i<Math.min(A.length,40);i++){if(typeof (A[i]||[])[0]==='string'&&/note sur/i.test(A[i][0])){nr=i;break}}
    let ncols=null;if(nr>=0&&sg){const bl=BAR()[sg].length;const cols=[];(A[nr]||[]).forEach((v,j)=>{if(j>ni&&typeof v==='number')cols.push(j)});if(cols.length>=bl)ncols=cols.slice(0,bl)}
    let prevClub='';
    for(let i=hr+1;i<A.length;i++){const r=A[i]||[];let nom=r[ni];if(typeof nom!=='string'||!nom.trim())continue;nom=nom.trim();
      if(/^(fonction|pr[ée]sident|vice|rapporteur|total|[ée]valuateurs?|membres?|jury)\b/i.test(nom))continue;
      if(nr>=0&&!(typeof r[0]==='number'))continue;
      const absent=/\(absent\)/i.test(nom);nom=nom.replace(/\s*\(absent\)\s*/i,'').toUpperCase();
      let club=ci>=0?String(r[ci]??'').trim():'';if(!club||/^[\/\-"]+$/.test(club))club=ci>=0?prevClub:'';else prevClub=club;
      const ok=k=>k<0||/ok|oui|x|1|✓/i.test(String(r[k]??''));
      const o={nom,club,grade:(gi>=0&&gradeFrom(String(r[gi]??'')+' keup'))||sg,dos:(ok(pi)?1:0)|(ok(ai)?2:0)|(ok(li)?4:0)};
      if(ncols){const v=ncols.map(j=>r[j]);if(absent||v[0]==='A'){o.absent=true}else if(v.some(x=>typeof x==='number'))o.notes=v.map(x=>typeof x==='number'?x:null)}
      else if(absent)o.absent=true;
      out.push(o);
    }
  }
  return out;
}

/* ---------- export ---------- */
const dlP=(window.claude&&window.claude.use)?window.claude.use('downloads').catch(()=>null):Promise.resolve(null);
async function saveFile(filename,data,mime){
  const dl=await Promise.race([dlP,new Promise(r=>setTimeout(()=>r(null),1500))]);
  if(dl){try{await dl.save({filename,data});toast('Fichier enregistré');return}catch(e){if(e&&e.code==='declined'){toast('Téléchargement annulé');return}if(e&&e.code==='rate_limited'){toast('Un téléchargement est déjà en attente');return}}}
  try{const blob=data instanceof Blob?data:new Blob([data],{type:mime||'application/octet-stream'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);toast('Fichier prêt : '+filename)}catch(e){toast("Le téléchargement n'est pas disponible ici")}
}
const slug=s=>norm(s).replace(/[^A-Z0-9]+/g,'_').replace(/^_|_$/g,'');
function buildWorkbook(){
  const s=sess(),C=computed(),X=XLSX,wb=X.utils.book_new();const E=X.utils.encode_cell,col=X.utils.encode_col;
  for(const g of gradesIn(s)){
    const b=BAR()[g],max=bmax(g),L=candsOf(s,g);const tm=b.filter(e=>e.t==='T').reduce((a,e)=>a+e.m,0);
    const aoa=[['FEDERATION IVOIRIENNE DE TAEKWONDO'],[S.ligue.nom.toUpperCase()],['BORDEREAU DE PASSAGE DE GRADE'],[`GRADE SOLLICITE : ${GL(g).toUpperCase()}`,null,'LIGUE :',S.ligue.nom,null,'DATE :',fdate(s.date)],[]];
    const h1=[null,null,null];b.forEach((e,i)=>h1.push(i===0?`Matières théoriques/${tm}`:(e.t==='P'&&b[i-1].t==='T')?`Matières pratiques/${max-tm}`:null));h1.push('TOTAL SUR','MOYENNE SUR','RESULTAT','MENTION','RANG');aoa.push(h1);
    aoa.push(['N°','Nom et prénoms','Club',...b.map(e=>e.n),null,null,null,null,null]);
    aoa.push(['NOTE SUR',null,null,...b.map(e=>e.m),max,100]);
    const ws=X.utils.aoa_to_sheet(aoa);const r0=aoa.length;const n=L.length;const c0=3,cT=c0+b.length,cM=cT+1,cR=cM+1,cMe=cR+1,cRk=cMe+1;
    const t=REG().ment,sl=REG().seuil;
    L.forEach((c,k)=>{const R=r0+k,r=C.res.get(c.id),xr=R+1;
      ws[E({r:R,c:0})]={t:'n',v:c.no};ws[E({r:R,c:1})]={t:'s',v:c.nom+(c.absent?' (ABSENT)':'')};ws[E({r:R,c:2})]={t:'s',v:c.club||''};
      b.forEach((e,i)=>{const v=c.notes[i];if(c.absent){if(i===0)ws[E({r:R,c:c0})]={t:'s',v:'ABSENT'}}else if(v!=null)ws[E({r:R,c:c0+i})]={t:'n',v:+v}});
      const rng=`${col(c0)}${xr}:${col(cT-1)}${xr}`,M=`${col(cM)}${xr}`;
      ws[E({r:R,c:cT})]={t:'n',v:r.tot||0,f:`SUM(${rng})`};
      ws[E({r:R,c:cM})]=r.complete?{t:'n',v:r.moy,f:`IF(COUNT(${rng})=${b.length},${col(cT)}${xr}*100/${max},"")`}:{t:'s',v:'',f:`IF(COUNT(${rng})=${b.length},${col(cT)}${xr}*100/${max},"")`};
      ws[E({r:R,c:cR})]={t:'s',v:r.st==='adm'?'admis':r.st==='ech'?'échec':'',f:`IF(${M}="","",IF(${M}>=${sl},"admis","échec"))`};
      ws[E({r:R,c:cMe})]={t:'s',v:r.st==='adm'?MEN[menIdx(r.moy)-1]||'':'',f:`IF(${M}="","",IF(${M}>=${t[0]},"Exceptionnel",IF(${M}>=${t[1]},"Très bien",IF(${M}>=${t[2]},"Bien",IF(${M}>=${t[3]},"Assez-Bien","")))))`};
      ws[E({r:R,c:cRk})]=r.rk?{t:'n',v:r.rk,f:`IF(${M}="","",RANK(${M},${col(cM)}$${r0+1}:${col(cM)}$${r0+n}))`}:{t:'s',v:'',f:`IF(${M}="","",RANK(${M},${col(cM)}$${r0+1}:${col(cM)}$${r0+n}))`};
    });
    // jury
    const J=s.jurys[g]||{};let jr=r0+n+2;const jrows=Object.keys(J).filter(k=>J[k].p||J[k].v||J[k].r);
    if(jrows.length){ws[E({r:jr,c:1})]={t:'s',v:'JURY'};jr++;for(const k of jrows){const j=J[k];ws[E({r:jr,c:1})]={t:'s',v:`Table ${+k+1}`};ws[E({r:jr,c:2})]={t:'s',v:`Président : ${j.p||''}`};ws[E({r:jr,c:6})]={t:'s',v:`Vice-président : ${j.v||''}`};ws[E({r:jr,c:10})]={t:'s',v:`Rapporteur : ${j.r||''}`};jr++}}
    ws['!ref']=X.utils.encode_range({s:{r:0,c:0},e:{r:Math.max(jr,r0+n),c:cRk}});
    ws['!cols']=[{wch:5},{wch:36},{wch:18},...b.map(()=>({wch:11})),{wch:9},{wch:10},{wch:10},{wch:13},{wch:7}];
    X.utils.book_append_sheet(wb,ws,(g==='1'?'1er':g+'e')+' KEUP');
  }
  // classement
  const cl=[['CLASSEMENT PAR ORDRE DE MÉRITE — '+s.titre],[],['Grade','Rang','Nom et prénoms','Club','Total','Moyenne /100','Résultat','Mention']];
  for(const g of gradesIn(s))for(const c of (C.by[g]||[])){const r=C.res.get(c.id);cl.push([GL(g),r.rk,c.nom,c.club||'',r.tot,Math.round(r.moy*100)/100,r.st==='adm'?'Admis':'Échec',r.st==='adm'?MEN[menIdx(r.moy)-1]||'':''])}
  const wsC=X.utils.aoa_to_sheet(cl);wsC['!cols']=[{wch:10},{wch:6},{wch:38},{wch:20},{wch:8},{wch:12},{wch:9},{wch:13}];X.utils.book_append_sheet(wb,wsC,'CLASSEMENT');
  // rapport
  const R=s.rapport||{};const rp=[['FEDERATION IVOIRIENNE DE TAEKWONDO'],['BUREAU TECHNIQUE NATIONAL — COMMISSION FORMATION/EVALUATION'],['RAPPORT DE PASSAGE DE GRADE'],[],['Ligue :',S.ligue.nom],['Date :',fdate(s.date)],['Lieu :',R.lieu||''],['Timing :','Début : '+(R.debut||''),'Fin : '+(R.fin||'')],['Président :',R.pres||''],['Vice-président :',R.vp||''],['Rapporteur :',R.rapp||''],['Membres :',(R.membres||'').replace(/\n/g,' ; ')],[],['1/ TABLEAU DES RESULTATS ET MENTIONS PAR GRADE'],
    ['Grade sollicité','Inscrits','Absents','Présents','Echecs','Admis','Taux de réussite','Assez Bien','%','Bien','%','Très bien','%','Exceptionnelle','%']];
  const pp=(a,b)=>b?fmt(a*100/b,1)+' %':'';
  for(const r of [...reportRows(s,C),{g:null,...gstats(s,C,null)}])rp.push([r.g?GL(r.g):'TOTAL',r.ins,r.abs,r.pres,r.ech,r.adm,pp(r.adm,r.adm+r.ech),r.mc[0],pp(r.mc[0],r.adm),r.mc[1],pp(r.mc[1],r.adm),r.mc[2],pp(r.mc[2],r.adm),r.mc[3],pp(r.mc[3],r.adm)]);
  rp.push([],['2/ DEROULEMENT DE LA MISSION ET OBSERVATIONS DU JURY'],['Au niveau de la commission :',R.commission||''],['Points forts :',R.forts||''],['Points à corriger :',R.corriger||''],['Fait à :',R.faitA||'','Le :',R.le?fdate(R.le):''],[],['3/ CANDIDATS RECALES ET/OU ABSENTS']);
  s.cands.filter(c=>['ech','abs'].includes(C.res.get(c.id).st)).forEach((c,i)=>rp.push([i+1,c.nom,GL(c.grade),c.absent?'Absent':'Échec']));
  if((s.log||[]).length){rp.push([],['4/ CORRECTIONS DE GRADE ET DE PLACE']);s.log.slice().reverse().forEach(e=>rp.push([new Date(e.t).toLocaleString('fr-FR'),e.x]))}
  const wsR=X.utils.aoa_to_sheet(rp);wsR['!cols']=[{wch:26},{wch:30},{wch:12},{wch:10},{wch:8},{wch:8},{wch:14}];X.utils.book_append_sheet(wb,wsR,'RAPPORT');
  return wb;
}
function exportXlsx(){if(!window.XLSX){toast("Le module Excel n'est pas chargé. Vérifiez la connexion.");return}const s=sess();if(!s.cands.length){toast('Aucun candidat à exporter');return}
  const wb=buildWorkbook();const buf=XLSX.write(wb,{type:'array',bookType:'xlsx'});saveFile(`Bordereau_${slug(S.ligue.nom)}_${s.date||'session'}.xlsx`,new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}))}
function exportReportHtml(){
  const s=sess(),C=computed(),R=s.rapport||{};const rows=[...reportRows(s,C).filter(r=>r.ins),{g:null,...gstats(s,C,null)}];
  const pp=(a,b)=>b?fmt(pct(a,b),1)+' %':'—';
  const recal=s.cands.filter(c=>['ech','abs'].includes(C.res.get(c.id).st));
  const html=`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Rapport de passage de grade — ${esc(s.titre)}</title><style>body{font-family:Arial,sans-serif;font-size:12px;color:#111;max-width:900px;margin:24px auto;padding:0 16px}h1,h2{text-align:center;margin:4px 0}h1{font-size:18px}h2{font-size:14px;font-weight:normal}h3{font-size:13px;margin:22px 0 8px;text-transform:uppercase}table{border-collapse:collapse;width:100%}td,th{border:1px solid #444;padding:4px 6px;text-align:center}td:first-child,th:first-child{text-align:left}.kv td{border:0;text-align:left;padding:3px 6px}.box{border:1px solid #444;min-height:60px;padding:8px;white-space:pre-wrap}.sig{margin-top:40px;text-align:right}@media print{body{margin:0}}</style></head><body>
  <h1>FÉDÉRATION IVOIRIENNE DE TAEKWONDO</h1><h2>Bureau Technique National — Commission Formation / Évaluation</h2><h1 style="margin-top:14px">RAPPORT DE PASSAGE DE GRADE</h1>
  <table class="kv"><tr><td><b>Ligue :</b> ${esc(S.ligue.nom)}</td><td><b>Date :</b> ${esc(fdate(s.date))}</td><td><b>Lieu :</b> ${esc(R.lieu||'')}</td></tr><tr><td><b>Début :</b> ${esc(R.debut||'')}</td><td><b>Fin :</b> ${esc(R.fin||'')}</td><td></td></tr><tr><td><b>Président :</b> ${esc(R.pres||'')}</td><td><b>Vice-président :</b> ${esc(R.vp||'')}</td><td><b>Rapporteur :</b> ${esc(R.rapp||'')}</td></tr><tr><td colspan="3"><b>Membres :</b> ${esc((R.membres||'').replace(/\n/g,' ; '))}</td></tr></table>
  <h3>1 / Tableau des résultats et mentions par grade</h3><table><tr><th rowspan="2">Grade sollicité</th><th rowspan="2">Inscrits</th><th rowspan="2">Absents</th><th rowspan="2">Présents</th><th rowspan="2">Échecs</th><th rowspan="2">Admis</th><th rowspan="2">Taux de réussite</th><th colspan="2">Assez Bien</th><th colspan="2">Bien</th><th colspan="2">Très bien</th><th colspan="2">Exceptionnelle</th></tr><tr>${'<th>Nbre</th><th>%</th>'.repeat(4)}</tr>
  ${rows.map(r=>`<tr${r.g?'':' style="font-weight:bold"'}><td>${r.g?GL(r.g):'TOTAL'}</td><td>${r.ins}</td><td>${r.abs}</td><td>${r.pres}</td><td>${r.ech}</td><td>${r.adm}</td><td>${pp(r.adm,r.adm+r.ech)}</td>${r.mc.map(n=>`<td>${n}</td><td>${pp(n,r.adm)}</td>`).join('')}</tr>`).join('')}</table>
  <h3>2 / Déroulement de la mission et observations du jury</h3><p><b>Au niveau de la commission</b></p><div class="box">${esc(R.commission||'')}</div><p><b>Au niveau de la ligue — points forts</b></p><div class="box">${esc(R.forts||'')}</div><p><b>Points à corriger</b></p><div class="box">${esc(R.corriger||'')}</div>
  <p class="sig">Fait à ${esc(R.faitA||'…………………')}, le ${esc(R.le?fdate(R.le):'…………………')}<br><br><b>LE PRÉSIDENT DU JURY</b></p>
  <h3>3 / Candidats recalés et/ou absents (${recal.length})</h3><table><tr><th>N°</th><th>Nom et prénoms</th><th>Grade sollicité</th><th>Motif</th></tr>${recal.map((c,i)=>`<tr><td>${i+1}</td><td style="text-align:left">${esc(c.nom)}</td><td>${GL(c.grade)}</td><td>${c.absent?'Absent':'Échec'}</td></tr>`).join('')}</table>
  ${(s.log||[]).length?`<h3>4 / Corrections de grade et de place (${s.log.length})</h3><table><tr><th>Date</th><th>Correction</th></tr>${s.log.slice().reverse().map(e=>`<tr><td>${new Date(e.t).toLocaleString('fr-FR')}</td><td style="text-align:left">${esc(e.x)}</td></tr>`).join('')}</table>`:''}
  <p style="margin-top:18px"><i>NB : délai de remplissage des passeports : une (1) semaine à compter de la date du passage de grades.</i></p><p style="color:#777;font-size:10px">Généré par Keupro</p></body></html>`;
  saveFile(`Rapport_${slug(S.ligue.nom)}_${s.date||'session'}.html`,html,'text/html');
}

/* ---------- actions ---------- */
const ACT={
  go:t=>go(t.dataset.v),
  menu:()=>openModal(`<div class="mh"><h2>Menu</h2><button class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div><div class="menu-grid"><a href="#bienvenue" data-act="close"><svg viewBox="0 0 24 24">${ICONS.bienvenue}</svg>Présentation</a>${NAV.flatMap(([,i])=>i).filter(([v])=>allowedView(v)).map(([v,l])=>`<a href="#${v}" data-act="close"><svg viewBox="0 0 24 24">${ICONS[v]}</svg>${l}</a>`).join('')}</div>`),
  close:()=>closeModal(),
  newSess:()=>openModal(`<form data-form="newSess" style="display:flex;flex-direction:column;gap:14px"><div class="mh"><h2>Nouvelle session de passage</h2><button type="button" class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
    <label class="field"><span>Intitulé</span><input type="text" id="nsT" required placeholder="Passage de grade du …"></label><div class="fgrid"><label class="field"><span>Date</span><input type="date" id="nsD" required></label><label class="field"><span>Lieu</span><input type="text" id="nsL" placeholder="ex. Gymnase de Cocody"></label></div>
    <div class="mf"><button type="button" class="btn" data-act="close">Annuler</button><button class="btn pri" type="submit">Créer la session</button></div></form>`),
  import:()=>importModal(),
  impGo:()=>{if(!IMP||!IMP.length)return;const s=sess();for(const r of IMP){const n=BAR()[r.grade].length;s.cands.push({id:uid(),nom:r.nom,club:r.club||'',grade:r.grade,dos:r.dos??7,absent:!!r.absent,notes:r.notes?r.notes.slice(0,n).concat(Array(Math.max(0,n-r.notes.length)).fill(null)):Array(n).fill(null)})}ensureNo(s);save();closeModal();toast(IMP.length+' candidats importés');IMP=null;render()},
  toggleAdd:()=>{ui.addOpen=!ui.addOpen;render()},
  dos:t=>{const c=sess().cands.find(x=>x.id===t.dataset.id);c.dos^=+t.dataset.b;save();t.className=c.dos&+t.dataset.b?'on':'off'},
  askDel:t=>{ui.confirmDel=t.dataset.id;$('#insTable').innerHTML=insTable()},
  delC:t=>{const s=sess();const c=s.cands.find(x=>x.id===t.dataset.id);snap(s);s.cands=s.cands.filter(x=>x!==c);addLog(s,`${c.nom} retiré de la session (${GL(c.grade)}, n° ${c.no})`);ui.confirmDel=null;save();toast('Candidat supprimé',true);$('#insTable').innerHTML=insTable()},
  editC:t=>{const c=sess().cands.find(x=>x.id===t.dataset.id);openModal(`<form data-form="editC" data-id="${c.id}" style="display:flex;flex-direction:column;gap:14px"><div class="mh"><h2>Modifier le candidat</h2><button type="button" class="iconbtn" data-act="close" aria-label="Fermer">✕</button></div>
    <label class="field"><span>Nom et prénoms</span><input type="text" id="eNom" value="${esc(c.nom)}" required></label><div class="fgrid"><label class="field"><span>Club</span><input type="text" id="eClub" value="${esc(c.club)}"></label><label class="field"><span>Grade sollicité</span><select id="eGrade">${GR.map(g=>`<option value="${g}" ${g===c.grade?'selected':''}>${GL(g)}</option>`).join('')}</select></label></div>
    <p class="note" style="margin:0">Si le grade change, les notes des épreuves identiques sont conservées et le candidat prend le dernier numéro du nouveau grade.</p><div class="mf"><button type="button" class="btn" data-act="close">Annuler</button><button class="btn pri" type="submit">Enregistrer</button></div></form>`)},
  more:()=>{ui.insLim+=100;$('#insTable').innerHTML=insTable()},
  merge:t=>{const f=t.dataset.f,to=t.dataset.t;let n=0;sess().cands.forEach(c=>{if(c.club===f){c.club=to;n++}});save();toast(`${n} candidat${n>1?'s':''} rattaché${n>1?'s':''} à ${to}`);render()},
  insInc:()=>{ui.fd='inc';go('inscriptions')},
  bg:t=>{ui.bg=t.dataset.g;render()},
  saisieG:t=>{ui.sai.g=t.dataset.g;ui.sai.grp=0;ui.sai.idx=0;go('saisie')},
  saisieT:t=>{ui.sai.g=t.dataset.g;ui.sai.grp=+t.dataset.k;ui.sai.idx=0;go('saisie')},
  fix:t=>{const s=sess();const c=s.cands.find(x=>x.id===t.dataset.id);ui.sai.g=c.grade;ui.sai.grp=tableOf(c);ui.sai.idx=candsOf(s,c.grade).filter(x=>tableOf(x)===tableOf(c)).indexOf(c);ui.sai.mode='fiche';go('saisie')},
  mode:t=>{ui.sai.mode=t.dataset.m;render()},
  sg:t=>{ui.sai.g=t.dataset.g;ui.sai.grp=0;ui.sai.idx=0;render()},
  goc:t=>{ui.sai.idx=+t.dataset.k;render();$('.fiche')?.scrollIntoView({block:'start',behavior:'smooth'})},
  nav:t=>{ui.sai.idx+=+t.dataset.d;render();$('.fiche')?.scrollIntoView({block:'start',behavior:'smooth'})},
  absent:()=>{const {L}=saiList();const c=L[ui.sai.idx];c.absent=!c.absent;save();render()},
  st:t=>{const {L}=saiList();const c=L[ui.sai.idx];const i=+t.dataset.i;const e=BAR()[c.grade][i];let v=(c.notes[i]??Math.round(e.m*.6))+(c.notes[i]==null?0:+t.dataset.d);v=Math.max(0,Math.min(e.m,v));ficheSet(c,i,v)},
  qk:t=>{const {L}=saiList();const c=L[ui.sai.idx];ficheSet(c,+t.dataset.i,+t.dataset.v)},
  cg:t=>{ui.cg=t.dataset.g;ui.cclub='';render()},
  stg:t=>{ui.stg=t.dataset.g;render()},
  xlsx:()=>exportXlsx(),
  repHtml:()=>exportReportHtml(),
  bareG:t=>{ui.bareG=t.dataset.g;render()},
  barAdd:()=>{const g=ui.bareG;S.baremes[g].push({n:'Nouvelle épreuve',m:10,t:'P'});S.sessions.filter(s=>!s.lock).forEach(s=>s.cands.forEach(c=>{if(c.grade===g)c.notes.push(null)}));save();render()},
  barDel:t=>{const g=ui.bareG,i=+t.dataset.i;if(S.baremes[g].length<=1)return;S.baremes[g].splice(i,1);S.sessions.filter(s=>!s.lock).forEach(s=>s.cands.forEach(c=>{if(c.grade===g)c.notes.splice(i,1)}));save();render();toast('Épreuve supprimée')},
  backup:()=>saveFile(`Keupro_sauvegarde_${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(S),'application/json'),
  askReset:()=>{ui.confirmReset=true;render()},
  reset:()=>{S=defaultState();ui.confirmReset=false;save();toast('Données de démonstration rechargées');go('accueil')},
  delSess:()=>{if(S.sessions.length<=1){toast('Gardez au moins une session');return}openModal(`<div class="mh"><h2>Supprimer la session ?</h2></div><p style="margin:0">« ${esc(sess().titre)} » et ses ${sess().cands.length} candidats seront définitivement supprimés de cet appareil.</p><div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn danger" data-act="delSessGo">Supprimer</button></div>`)},
  cm:t=>candMenu(t.dataset.id),
  mvOpen:t=>{ui.mvT=null;ui.mvM='';moveModal(t.dataset.id)},
  mvPick:t=>{ui.mvT=t.dataset.g;moveModal(t.dataset.id)},
  mvGo:t=>{const s=sess();const c=s.cands.find(x=>x.id===t.dataset.id);const g=ui.mvT;if(!c||!g||g===c.grade)return;snap(s);moveCand(s,c,g,ui.mvM.trim());save();closeModal();toast(`${c.nom} déplacé en ${GL(g)} (n° ${c.no})`,true);render()},
  swOpen:t=>{ui.sw={a:t.dataset.id,b:null,q:'',mode:'place'};swapModal()},
  swPick:t=>{ui.sw.b=t.dataset.id;const s=sess();const a=s.cands.find(x=>x.id===ui.sw.a),b=s.cands.find(x=>x.id===ui.sw.b);if(a&&b&&a.grade!==b.grade&&ui.sw.mode==='notes')ui.sw.mode='place';swapModal()},
  swMode:t=>{if(t.disabled)return;ui.sw.mode=t.dataset.m;swapModal()},
  swGo:()=>{const s=sess(),w=ui.sw;const a=s.cands.find(x=>x.id===w.a),b=s.cands.find(x=>x.id===w.b);if(!a||!b)return;snap(s);
    if(w.mode==='notes'){if(a.grade!==b.grade)return;[a.notes,b.notes]=[b.notes,a.notes];[a.absent,b.absent]=[b.absent,a.absent];addLog(s,`Notes interverties entre ${a.nom} et ${b.nom} (${GL(a.grade)})`)}
    else{const ga=a.grade,gb=b.grade,na=a.no,nb=b.no;if(ga!==gb){const xa=remapNotes(a,gb).notes,xb=remapNotes(b,ga).notes;a.notes=xa;b.notes=xb}a.grade=gb;a.no=nb;b.grade=ga;b.no=na;addLog(s,`Places interverties : ${a.nom} → ${GL(gb)} n° ${nb} ; ${b.nom} → ${GL(ga)} n° ${na}`)}
    save();closeModal();toast(w.mode==='notes'?'Notes interverties':'Places interverties',true);render()},
  absC:t=>{const c=sess().cands.find(x=>x.id===t.dataset.id);c.absent=!c.absent;save();closeModal();toast(c.absent?c.nom+' marqué absent':c.nom+' marqué présent');render()},
  delAsk:t=>{const c=sess().cands.find(x=>x.id===t.dataset.id);openModal(`<div class="mh"><h2>Retirer ce candidat ?</h2></div><p style="margin:0"><b>${esc(c.nom)}</b> (${GL(c.grade)}, n° ${c.no}) sera retiré de la session avec ses notes. Son numéro restera libre ; les autres candidats ne bougent pas.</p><div class="mf"><button class="btn" data-act="cm" data-id="${c.id}">Retour</button><button class="btn danger" data-act="delC" data-id="${c.id}">Retirer</button></div>`)},
  renum:t=>{const g=t.dataset.g;openModal(`<div class="mh"><h2>Renuméroter le ${GL(g)} ?</h2></div><p style="margin:0">Les candidats du ${GL(g)} seront renumérotés de 1 à ${candsOf(sess(),g).length} dans l'ordre actuel, ce qui supprime les numéros libres. Des candidats peuvent alors changer de table : à faire de préférence avant d'imprimer les bordereaux.</p><div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn pri" data-act="renumGo" data-g="${g}">Renuméroter</button></div>`)},
  renumGo:t=>{const s=sess(),g=t.dataset.g;snap(s);candsOf(s,g).forEach((c,i)=>c.no=i+1);addLog(s,`${GL(g)} renuméroté de 1 à ${candsOf(s,g).length}`);save();closeModal();toast(GL(g)+' renuméroté',true);render()},
  bulkMove:()=>{const s=sess(),g=$('#bulkG').value;const L=s.cands.filter(c=>ui.sel.has(c.id)&&c.grade!==g).sort((a,b)=>(a.grade===b.grade?a.no-b.no:0));if(!L.length){toast('Ces candidats sont déjà en '+GL(g));return}snap(s);L.forEach(c=>moveCand(s,c,g,'déplacement groupé'));ui.sel.clear();save();toast(`${L.length} candidat${L.length>1?'s':''} déplacé${L.length>1?'s':''} en ${GL(g)}`,true);render()},
  selClear:()=>{ui.sel.clear();$('#insTable').innerHTML=insTable()},
  undo:()=>{const u=ui.undo.pop();if(!u){toast('Rien à annuler');return}const s=S.sessions.find(x=>x.id===u.sid);if(!s)return;s.cands=JSON.parse(u.c);addLog(s,'Dernière correction annulée');save();$('#toast').hidden=true;toast('Correction annulée');render()},
  ceintReset:()=>{S.ceintures=clone(CEINT0);save();toast('Ceintures FITKD rétablies');render()},
  to:t=>{document.getElementById(t.dataset.t)?.scrollIntoView({behavior:'smooth',block:'start'})},
  printM:t=>printModal(t.dataset.k),
  closeM:async()=>{const s=sess();if(!seeAll(s)){denyAdmin();return}if(isLocked(s))return;
    if(MODE==='cloud'){toast('Enregistrement des dernières notes…');await syncNow();if(SY.status!=='ok'){toast("Des notes ne sont pas encore enregistrées sur le serveur : vérifiez la connexion, puis réessayez.");return}}
    const st=ficheState(s);if(st.left){toast(`${st.left} fiche${st.left>1?'s':''} encore à renseigner`);render();return}
    openModal(`<div class="mh"><h2>Enregistrer et clôturer l'évaluation ?</h2></div><p style="margin:0">Les ${st.tot} fiches de « ${esc(s.titre)} » (${st.done-st.abs} candidats notés, ${st.abs} absents) seront enregistrées et verrouillées. Plus personne ne pourra modifier les notes, les absences, la répartition des lots, les jurys ni le rapport ; les barèmes et le seuil d'admission en vigueur sont figés pour cette session.</p><p class="note" style="margin:0">Seul l'administrateur pourra déverrouiller la session, sur demande motivée du président du jury.</p><div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn pri" data-act="closeGo"><svg viewBox="0 0 24 24">${ICON_LOCK}</svg>Clôturer</button></div>`)},
  closeGo:()=>{const s=sess();if(!seeAll(s)||isLocked(s))return;const st=ficheState(s);if(st.left){closeModal();toast('Des fiches ont changé : vérifiez avant de clôturer');render();return}
    s.lock={at:Date.now(),par:me().key||'__admin__',bar:clone(S.baremes),reg:{seuil:S.regles.seuil,ment:[...S.regles.ment]}};s.unlockReq=null;CC=null;
    if(MODE!=='cloud')addLog(s,`Évaluation enregistrée et clôturée par ${labelOf(s.lock.par)}`);save();closeModal();toast('Évaluation enregistrée et verrouillée',true);render()},
  unlockM:()=>{const s=sess();if(!isLocked(s))return;const rq=s.unlockReq;openModal(`<div class="mh"><h2>Déverrouiller la session ?</h2></div>${rq?`<p style="margin:0"><b>${esc(labelOf(rq.par))}</b> demande le déverrouillage :</p><blockquote class="rqq">${esc(rq.motif)}</blockquote>`:'<p style="margin:0">Aucune demande du président du jury n\'est en attente.</p>'}<p style="margin:0">Après déverrouillage, les notes et la répartition redeviennent modifiables. Le président du jury ou vous-même devrez clôturer à nouveau la session une fois la correction faite.</p><div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn pri" data-act="unlockGo">Déverrouiller pour modification</button></div>`)},
  unlockGo:()=>{const s=sess();if(!canAdmin()||!isLocked(s))return;const rq=s.unlockReq;s.lock=null;s.unlockReq=null;CC=null;if(MODE!=='cloud')addLog(s,`Session déverrouillée par l'administrateur${rq?` (demande : « ${rq.motif} »)`:''}`);save();closeModal();toast('Session déverrouillée : les modifications sont possibles',true);render()},
  reqM:()=>{const s=sess();if(!isChefOf(s)||!isLocked(s))return;openModal(`<div class="mh"><h2>Demander le déverrouillage</h2></div><form data-form="unlockReq" style="display:flex;flex-direction:column;gap:12px"><p style="margin:0">L'administrateur recevra votre demande et décidera de déverrouiller la session. Indiquez la correction à apporter.</p><label class="field"><span>Motif</span><textarea id="rqMotif" rows="3" maxlength="500" placeholder="Ex. : erreur de saisie en Poomsae, 7e Keup table 3, candidat n° 24"></textarea></label><div class="mf"><button class="btn" type="button" data-act="close">Annuler</button><button class="btn pri" type="submit">Envoyer la demande</button></div></form>`);setTimeout(()=>$('#rqMotif')?.focus(),50)},
  reqCancel:()=>{const s=sess();if(!isChefOf(s)||!s.unlockReq)return;s.unlockReq=null;save();toast('Demande retirée');render()},
  reqRefuse:()=>{const s=sess();if(!canAdmin()||!s.unlockReq)return;const rq=s.unlockReq;s.unlockReq=null;if(MODE!=='cloud')addLog(s,`Demande de déverrouillage refusée (${rq.motif})`);save();toast('Demande refusée : la session reste verrouillée');render()},
  distrib:()=>{const s=sess();if(!seeAll(s)){denyAdmin();return}const E=lotKeys(s).length;if(!E){toast("Convoquez d'abord au moins un évaluateur");return}
    if(s.cands.some(c=>c.ev)){openModal(`<div class="mh"><h2>Refaire la répartition ?</h2></div><p style="margin:0">Les ${s.cands.length} candidats seront répartis de nouveau entre les ${E} évaluateurs convoqués, par tables entières. Des tables peuvent changer d'évaluateur ; les notes déjà saisies sont conservées.</p><div class="mf"><button class="btn" data-act="close">Annuler</button><button class="btn pri" data-act="distribGo">Répartir</button></div>`);return}ACT.distribGo()},
  distribGo:()=>{const s=sess();if(!seeAll(s))return;snap(s);const n=distribute(s);addLog(s,`Répartition : ${s.cands.length} candidats entre ${n} évaluateurs`);save();closeModal();toast(`Candidats répartis entre ${n} évaluateurs`,true);render()},
  assignRest:()=>{const s=sess();if(!seeAll(s))return;const {lots}=lotsOf(s);const keys=lotKeys(s);if(!keys.length)return;snap(s);const load=new Map(keys.map(k=>[k,0]));lots.forEach(l=>{if(load.has(l.key))load.set(l.key,l.n)});
    allTables(s).forEach(t=>{const rest=t.L.filter(c=>!c.ev);if(!rest.length)return;const o=tableOwner(t.L.filter(c=>c.ev));const k=o&&load.has(o)?o:[...load.entries()].sort((a,b)=>a[1]-b[1])[0][0];rest.forEach(c=>c.ev=k);load.set(k,(load.get(k)||0)+rest.length)});
    bumpEval(s);addLog(s,'Candidats sans évaluateur confiés aux lots');save();toast('Candidats confiés',true);render()},
  logoDel:t=>{delete S.logos[t.dataset.s];save();render()},
  bprintM:t=>{ui.bp=ui.bp||{scope:seeAll(sess())?'grade':'all',mode:'notes',k:0};if(!t.dataset.keep){if(t.dataset.k!=null){ui.bp.scope='table';ui.bp.k=+t.dataset.k}else if(ui.bp.scope==='table')ui.bp.scope='grade'}bprintModal()},
  bpPrev:t=>{ui.bp=ui.bp||{scope:seeAll(sess())?'grade':'all',mode:'notes',k:0};if(!t.dataset.keep){if(t.dataset.g)ui.bg=t.dataset.g;if(t.dataset.k!=null){ui.bp.scope='table';ui.bp.k=+t.dataset.k}else if(t.dataset.s)ui.bp.scope=t.dataset.s;else if(ui.bp.scope==='table')ui.bp.scope='grade'}ui.bpPg=0;previewModal()},
  bpPg:t=>{ui.bpPg=(ui.bpPg||0)+(+t.dataset.d);previewModal()},
  bpPM:t=>{ui.bp.mode=t.dataset.m;previewModal()},
  bpFit:t=>{ui.bpFit=t.dataset.f==='1';fitSheet();document.querySelectorAll('[data-act="bpFit"]').forEach(b=>b.classList.toggle('on',b===t))},
  bpS:t=>{ui.bp.scope=t.dataset.s;bprintModal()},
  bpM:t=>{ui.bp.mode=t.dataset.m;bprintModal()},
  bpGo:async t=>{t.disabled=true;t.textContent='Préparation du PDF…';try{await ensurePdfLib();await pdfBordereaux(ui.bp);closeModal()}catch(e){t.disabled=false;t.textContent='Télécharger le PDF A4';toast(e&&e.message==='lib'?"Le module PDF n'a pas pu se charger. Vérifiez la connexion puis réessayez.":"Le PDF n'a pas pu être créé.")}},
  prO:t=>{ui.pr[ui.prK].o=t.dataset.o;printModal(ui.prK)},
  prS:t=>{ui.pr[ui.prK].scope=t.dataset.s;printModal(ui.prK)},
  prGo:async t=>{const k=ui.prK,st=ui.pr[k];const o=st.o==='auto'?prRec(k):st.o;t.disabled=true;t.textContent='Préparation du PDF…';
    try{await ensurePdfLib();if(k==='classement')await pdfClassement(o,st.scope);else await pdfStats(o);closeModal()}
    catch(e){t.disabled=false;t.textContent='Télécharger le PDF A4';toast(e&&e.message==='lib'?"Le module PDF n'a pas pu se charger. Vérifiez la connexion puis réessayez.":"Le PDF n'a pas pu être créé.")}},
  login:t=>{ui.afterLogin=t.dataset.v||'accueil';ui.auth={tab:'login'};go('connexion')},
  authTab:t=>{ui.auth={tab:t.dataset.t};render()},
  account:()=>accountModal(),
  copyCode:async t=>{try{await navigator.clipboard.writeText(t.dataset.c);toast('Code copié')}catch(e){toast('Code : '+t.dataset.c)}},
  newCode:async()=>{const {data,error}=await SB.rpc('nouveau_code_invitation',{p_ligue:AUTH.ligue.id});if(error){toast(frErr(error));return}AUTH.ligue.code_invitation=data;accountModal();toast('Nouveau code créé')},
  rmMember:async t=>{const {data,error}=await SB.from('membres').delete().eq('ligue_id',AUTH.ligue.id).eq('user_id',t.dataset.u).select('user_id');if(error||!data||!data.length){toast(error?frErr(error):'Membre non retiré.');return}toast('Évaluateur retiré');accountModal()},
  switchLigue:async t=>{try{localStorage.setItem('keupro.ligue',t.dataset.l)}catch(e){}closeModal();await cloudStart()},
  logout:async()=>{closeModal();await cloudStop(true)},
  demoCopy:()=>{const d=demoSessionCopy();S.sessions.unshift(d);S.cur=d.id;save();toast('Session de démonstration ajoutée');go('accueil')},
  delSessGo:()=>{S.sessions=S.sessions.filter(s=>s.id!==S.cur);S.cur=S.sessions[0].id;save();closeModal();toast('Session supprimée');go('accueil')}
};
function ficheSet(c,i,v){const bad=setNote(c,i,v);const inp=$('#ep-'+i);if(inp){inp.value=v==null?'':v;inp.classList.toggle('bad',bad)}const q=$('#qk-'+i);if(q)q.querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.v===v));refreshFiche(c)}
const IN={
  q:t=>{ui.q=t.value;ui.insLim=100;$('#insTable').innerHTML=insTable()},
  ceintN:t=>{S.ceintures[t.dataset.g].nom=t.value;save()},
  mvM:t=>{ui.mvM=t.value},
  swq:t=>{ui.sw.q=t.value;const l=$('#swList');if(l)l.innerHTML=swListHTML()},
  jury:t=>{const s=sess();const J=(s.jurys[t.dataset.g]=s.jurys[t.dataset.g]||{});(J[t.dataset.k]=J[t.dataset.k]||{})[t.dataset.f]=t.value;save()},
  note:t=>{const {L}=saiList();const c=L[ui.sai.idx];const i=+t.dataset.i;const bad=setNote(c,i,t.value);t.classList.toggle('bad',bad);const v=c.notes[i];const q=$('#qk-'+i);if(q)q.querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.v===v));refreshFiche(c);if(bad)toast(`Maximum ${BAR()[c.grade][i].m} pour cette épreuve`)},
  gnote:t=>{const c=sess().cands.find(x=>x.id===t.dataset.id);const bad=setNote(c,+t.dataset.i,t.value);t.classList.toggle('bad',bad);refreshGridRow(c)},
  rap:t=>{const s=sess();(s.rapport=s.rapport||{})[t.dataset.k]=t.value;save()},
  pass:t=>{const s=sess();const R=s.rapport=s.rapport||{};(R[t.dataset.f]=R[t.dataset.f]||{})[t.dataset.g]=t.value;save()},
  roi:t=>{ui[t.dataset.k]=+t.value;const n=ui.roiN??+$('#roiN').value,k=ui.roiS??+$('#roiS').value,m=ui.roiM??+$('#roiM').value;$('#roiNv').textContent=n;$('#roiSv').textContent=k;$('#roiMv').textContent=m;$('#roiH').textContent=fint(n*k*m/60)+' h';$('#roiC').textContent=fint(n*k);$('#roiP').textContent=fint(300000/(n*k))+' F'},
  lig:t=>{S.ligue[t.dataset.k]=t.value;save();renderShell()},
  evals:t=>{S.evaluateurs=t.value.split('\n').map(x=>x.trim()).filter(Boolean);save()},
  reg:t=>{const v=+t.value;if(!isFinite(v)||v<=0&&t.dataset.k==='table')return;S.regles[t.dataset.k]=v;save()},
  men:t=>{const v=+t.value;if(isFinite(v)){S.regles.ment[+t.dataset.i]=v;save()}},
  bar:t=>{const e=S.baremes[ui.bareG][+t.dataset.i];if(t.dataset.k==='m'){const v=+t.value;if(v>0)e.m=v}else e.n=t.value;save()}
};
const CH={
  sess:t=>{S.cur=t.value;save();CC=null;ui.sel.clear();ui.sai={...ui.sai,g:null,grp:0,idx:0};ui.bg=ui.cg=null;ui.fc='';render()},
  fg:t=>{ui.fg=t.value;ui.insLim=100;$('#insTable').innerHTML=insTable()},
  fc:t=>{ui.fc=t.value;ui.insLim=100;$('#insTable').innerHTML=insTable()},
  fd:t=>{ui.fd=t.value;ui.insLim=100;$('#insTable').innerHTML=insTable()},
  grp:t=>{ui.sai.grp=t.value==='all'?'all':+t.value;ui.sai.idx=0;render()},
  gabs:t=>{const c=sess().cands.find(x=>x.id===t.dataset.id);c.absent=t.checked;save();render()},
  cclub:t=>{ui.cclub=t.value;render()},
  cadm:t=>{ui.cadm=t.checked;render()},
  impF:t=>{if(t.files[0])handleImport(t.files[0])},
  logo:t=>{const f=t.files[0];if(!f)return;const sd=t.dataset.s;const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,360/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);S.logos=S.logos||{};S.logos[sd]=c.toDataURL('image/png');save();toast('Logo enregistré');render()};im.onerror=()=>toast("Cette image n'a pas pu être lue");im.src=rd.result};rd.readAsDataURL(f)},
  role:async t=>{const u=t.dataset.u,r=t.value;const {data,error}=await SB.from('membres').update({role:r}).eq('ligue_id',AUTH.ligue.id).eq('user_id',u).select('user_id');
    if(error||!data||!data.length){toast(error?frErr(error):"Rôle non modifié : action réservée à l'administrateur.");accountModal();return}
    toast(r==='admin'?'Rôle : administrateur':'Rôle : évaluateur');if(u===AUTH.user.id){AUTH.role=r;closeModal();render()}},
  as:t=>{ui.as=t.value;try{localStorage.setItem('keupro.as',ui.as)}catch(e){}ui.sai.g=null;ui.bg=ui.cg=null;CC=null;render();toast(ui.as==='admin'?'Vue administrateur':'Vue de '+shortLabel(ui.as)+(isChefOf(sess())?', président du jury':', évaluateur'))},
  chef:t=>{const s=sess();s.chef=t.value||null;bumpEval(s);addLog(s,`Président du jury : ${labelOf(s.chef)}`);save();render()},
  chefLot:t=>{const s=sess();if(!seeAll(s))return;evalCfg(s).chefLot=t.checked;bumpEval(s);save();render()},
  quota:t=>{const s=sess();if(!seeAll(s))return;const v=Math.round(+t.value);if(v>=5){evalCfg(s).quota=v;bumpEval(s);save();render()}},
  conv:t=>{const s=sess();if(!seeAll(s))return;const e=evalCfg(s);const k=t.dataset.k;e.conv=t.checked?[...new Set([...e.conv,k])]:e.conv.filter(x=>x!==k);bumpEval(s);save();render()},
  tabOwner:t=>{const s=sess();if(!seeAll(s))return;const g=t.dataset.g,k=+t.dataset.k,v=t.value||null;snap(s);s.cands.filter(c=>c.grade===g&&tableOf(c)===k).forEach(c=>c.ev=v);bumpEval(s);addLog(s,`${GL(g)}, table ${k+1} confiée à ${labelOf(v)}`);save();toast(`Table ${k+1} du ${GL(g)} confiée à ${shortLabel(v)}`,true);render()},
  mnom:async t=>{const {data,error}=await SB.from('membres').update({nom:t.value.trim()||null}).eq('ligue_id',AUTH.ligue.id).eq('user_id',t.dataset.u).select('user_id,role,email,nom');if(error||!data||!data.length){toast(error?frErr(error):'Nom non modifié');return}
    const m=(AUTH.membres||[]).find(x=>x.user_id===t.dataset.u);if(m)m.nom=data[0].nom;toast('Nom enregistré')},
  ceintC:t=>{S.ceintures[t.dataset.g].c=t.value;save();render()},
  ceintS:t=>{S.ceintures[t.dataset.g].s=t.value;save();render()},
  ceintB:t=>{const g=t.dataset.g;S.ceintures[g].s=t.checked?((S.ceintures[String(+g-1)]||{}).c||'#2E9E4F'):'';save();render()},
  sel:t=>{t.checked?ui.sel.add(t.dataset.id):ui.sel.delete(t.dataset.id);$('#insTable').innerHTML=insTable()},
  selAll:t=>{insFiltered().slice(0,ui.insLim).forEach(c=>t.checked?ui.sel.add(c.id):ui.sel.delete(c.id));$('#insTable').innerHTML=insTable()},
  bart:t=>{BAR()[ui.bareG][+t.dataset.i].t=t.value;save();render()},
  restore:async t=>{const f=t.files[0];if(!f)return;try{const p=JSON.parse(await f.text());if(!p||p.v!==1||!Array.isArray(p.sessions))throw 0;S=p;migrate();save();toast('Sauvegarde restaurée');go('accueil')}catch(e){toast("Ce fichier n'est pas une sauvegarde Keupro")}}
};
document.addEventListener('click',e=>{const t=e.target.closest('[data-act]');if(!t)return;if(t.tagName==='A'&&t.dataset.act==='close'){closeModal();return}e.preventDefault();if(!canAdmin()&&ADMIN_ACTS.has(t.dataset.act)){denyAdmin();return}if(LK()&&LOCK_ACTS.has(t.dataset.act)){closeModal();lockedMsg();return}ACT[t.dataset.act]?.(t,e)});
document.addEventListener('input',e=>{const t=e.target.closest('[data-in]');if(!t)return;if(LK()&&LOCK_IN.has(t.dataset.in)){lockedMsg();softRender();return}IN[t.dataset.in]?.(t,e)});
document.addEventListener('change',e=>{const t=e.target.closest('[data-ch]');if(!t)return;if(!canAdmin()&&ADMIN_CH.has(t.dataset.ch)){if(t.type==='checkbox')t.checked=!t.checked;denyAdmin();return}if(LK()&&LOCK_CH.has(t.dataset.ch)){if(t.type==='checkbox')t.checked=!t.checked;lockedMsg();render();return}CH[t.dataset.ch]?.(t,e)});
document.addEventListener('focusout',e=>{const t=e.target;if(t.matches&&t.matches('[data-in="bar"],[data-in="reg"],[data-in="men"]'))render();if(ui.pendingRender){setTimeout(()=>{if(ui.pendingRender){ui.pendingRender=false;softRender()}},60)}});
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&!$('#modal').hidden)closeModal();
  const t=e.target;if(t.classList&&t.classList.contains('g-in')&&['Enter','ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const r=+t.dataset.r+(e.key==='ArrowUp'?-1:1);const n=document.querySelector(`.g-in[data-r="${r}"][data-c="${t.dataset.c}"]`);if(n){n.focus();n.select()}}
  if(t.classList&&t.classList.contains('ep-in')&&e.key==='Enter'){e.preventDefault();const all=[...document.querySelectorAll('.ep-in')];const k=all.indexOf(t);if(all[k+1]){all[k+1].focus();all[k+1].select()}else document.querySelector('[data-act="nav"][data-d="1"]')?.click()}
});
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target;const k=f.dataset.form;if(!canAdmin()&&ADMIN_FORMS.has(k)){denyAdmin();return}if(LK()&&LOCK_FORMS.has(k)){lockedMsg();return}
  if(k==='unlockReq'){const s=sess();if(!isChefOf(s)||!isLocked(s))return;const m=$('#rqMotif').value.trim();if(m.length<5){toast('Précisez la correction à apporter');return}s.unlockReq={par:me().key,motif:m.slice(0,500),at:Date.now()};if(MODE!=='cloud')addLog(s,`Demande de déverrouillage de ${labelOf(me().key)} : « ${s.unlockReq.motif} »`);save();closeModal();toast("Demande envoyée à l'administrateur",true);render();return}
  if(k==='add'){const nom=$('#aNom').value.trim();if(!nom)return;const g=$('#aGrade').value;sess().cands.push({id:uid(),nom:nom.toUpperCase(),club:$('#aClub').value.trim(),grade:g,dos:($('#aP').checked?1:0)|($('#aA').checked?2:0)|($('#aL').checked?4:0),absent:false,notes:Array(BAR()[g].length).fill(null)});ensureNo(sess());save();toast(nom.toUpperCase()+' ajouté en '+GL(g));$('#aNom').value='';$('#aNom').focus();$('#insTable').innerHTML=insTable()}
  if(k==='addEval'){if(!seeAll(sess()))return;const n=$('#newEv').value.trim();if(!n)return;if(!S.evaluateurs.includes(n))S.evaluateurs.push(n);const e=evalCfg(sess());if(!e.conv.includes(n))e.conv.push(n);bumpEval(sess());save();render();toast(n+' convoqué')}
  if(k==='newSess'){const s={id:uid(),titre:$('#nsT').value.trim()||'Nouvelle session',date:$('#nsD').value,lieu:$('#nsL').value.trim(),cands:[],jurys:{},rapport:{lieu:$('#nsL').value.trim()}};S.sessions.unshift(s);S.cur=s.id;save();closeModal();toast('Session créée');go('accueil')}
  if(k==='editC'){const c=sess().cands.find(x=>x.id===f.dataset.id);c.nom=$('#eNom').value.trim().toUpperCase()||c.nom;c.club=$('#eClub').value.trim();const g=$('#eGrade').value;if(g!==c.grade){snap(sess());moveCand(sess(),c,g,'')}save();closeModal();toast('Modifications enregistrées',true);render()}
});
ui.view=VIEWS[location.hash.slice(1)]&&!['connexion','ma-ligue','chargement'].includes(location.hash.slice(1))?location.hash.slice(1):'bienvenue';
render();
if(CLOUD)cloudBoot();
