import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuscadorMunicipios() {
    const [busquedadorMunicipios, setBusquedadadorMUnicipios] = useState("");
    let municipiosFiltrados = [];
    const navigate = useNavigate();

    const listaMunicipios = [
        {
            "cod": "001001",
            "arc": 1,
            "nm": "MEDELLIN(ANT)",
            "cd": 1,
            "cm": 1
        },
        {
            "cod": "001004",
            "arc": 1,
            "nm": "ABEJORRAL(ANT)",
            "cd": 1,
            "cm": 4
        },
        {
            "cod": "001007",
            "arc": 1,
            "nm": "ABRIAQUI(ANT)",
            "cd": 1,
            "cm": 7
        },
        {
            "cod": "001010",
            "arc": 1,
            "nm": "ALEJANDRIA(ANT)",
            "cd": 1,
            "cm": 10
        },
        {
            "cod": "001013",
            "arc": 1,
            "nm": "AMAGA(ANT)",
            "cd": 1,
            "cm": 13
        },
        {
            "cod": "001016",
            "arc": 1,
            "nm": "AMALFI(ANT)",
            "cd": 1,
            "cm": 16
        },
        {
            "cod": "001019",
            "arc": 1,
            "nm": "ANDES(ANT)",
            "cd": 1,
            "cm": 19
        },
        {
            "cod": "001022",
            "arc": 1,
            "nm": "ANGELOPOLIS(ANT)",
            "cd": 1,
            "cm": 22
        },
        {
            "cod": "001025",
            "arc": 1,
            "nm": "ANGOSTURA(ANT)",
            "cd": 1,
            "cm": 25
        },
        {
            "cod": "001028",
            "arc": 1,
            "nm": "ANORI(ANT)",
            "cd": 1,
            "cm": 28
        },
        {
            "cod": "001031",
            "arc": 1,
            "nm": "ANTIOQUIA(ANT)",
            "cd": 1,
            "cm": 31
        },
        {
            "cod": "001034",
            "arc": 1,
            "nm": "ANZA(ANT)",
            "cd": 1,
            "cm": 34
        },
        {
            "cod": "001035",
            "arc": 1,
            "nm": "APARTADO(ANT)",
            "cd": 1,
            "cm": 35
        },
        {
            "cod": "001037",
            "arc": 1,
            "nm": "ARBOLETES(ANT)",
            "cd": 1,
            "cm": 37
        },
        {
            "cod": "001039",
            "arc": 1,
            "nm": "ARGELIA(ANT)",
            "cd": 1,
            "cm": 39
        },
        {
            "cod": "001040",
            "arc": 1,
            "nm": "ARMENIA(ANT)",
            "cd": 1,
            "cm": 40
        },
        {
            "cod": "001043",
            "arc": 1,
            "nm": "BARBOSA(ANT)",
            "cd": 1,
            "cm": 43
        },
        {
            "cod": "001046",
            "arc": 1,
            "nm": "BELMIRA(ANT)",
            "cd": 1,
            "cm": 46
        },
        {
            "cod": "001049",
            "arc": 1,
            "nm": "BELLO(ANT)",
            "cd": 1,
            "cm": 49
        },
        {
            "cod": "001052",
            "arc": 1,
            "nm": "BETANIA(ANT)",
            "cd": 1,
            "cm": 52
        },
        {
            "cod": "001055",
            "arc": 1,
            "nm": "BETULIA(ANT)",
            "cd": 1,
            "cm": 55
        },
        {
            "cod": "001058",
            "arc": 1,
            "nm": "BOLIVAR(ANT)",
            "cd": 1,
            "cm": 58
        },
        {
            "cod": "001061",
            "arc": 1,
            "nm": "BURITICA(ANT)",
            "cd": 1,
            "cm": 61
        },
        {
            "cod": "001062",
            "arc": 1,
            "nm": "BRICEÑO(ANT)",
            "cd": 1,
            "cm": 62
        },
        {
            "cod": "001064",
            "arc": 1,
            "nm": "CACERES(ANT)",
            "cd": 1,
            "cm": 64
        },
        {
            "cod": "001067",
            "arc": 1,
            "nm": "CAICEDO(ANT)",
            "cd": 1,
            "cm": 67
        },
        {
            "cod": "001070",
            "arc": 1,
            "nm": "CALDAS(ANT)",
            "cd": 1,
            "cm": 70
        },
        {
            "cod": "001073",
            "arc": 1,
            "nm": "CAMPAMENTO(ANT)",
            "cd": 1,
            "cm": 73
        },
        {
            "cod": "001076",
            "arc": 1,
            "nm": "CAÑASGORDAS(ANT)",
            "cd": 1,
            "cm": 76
        },
        {
            "cod": "001078",
            "arc": 1,
            "nm": "CARACOLI(ANT)",
            "cd": 1,
            "cm": 78
        },
        {
            "cod": "001079",
            "arc": 1,
            "nm": "CARAMANTA(ANT)",
            "cd": 1,
            "cm": 79
        },
        {
            "cod": "001080",
            "arc": 1,
            "nm": "CAREPA(ANT)",
            "cd": 1,
            "cm": 80
        },
        {
            "cod": "001082",
            "arc": 1,
            "nm": "CARMEN DE VIBORAL(ANT)",
            "cd": 1,
            "cm": 82
        },
        {
            "cod": "001085",
            "arc": 1,
            "nm": "CAROLINA(ANT)",
            "cd": 1,
            "cm": 85
        },
        {
            "cod": "001088",
            "arc": 1,
            "nm": "CAUCASIA(ANT)",
            "cd": 1,
            "cm": 88
        },
        {
            "cod": "001091",
            "arc": 1,
            "nm": "CISNEROS(ANT)",
            "cd": 1,
            "cm": 91
        },
        {
            "cod": "001094",
            "arc": 1,
            "nm": "COCORNA(ANT)",
            "cd": 1,
            "cm": 94
        },
        {
            "cod": "001097",
            "arc": 1,
            "nm": "CONCEPCION(ANT)",
            "cd": 1,
            "cm": 97
        },
        {
            "cod": "001100",
            "arc": 1,
            "nm": "CONCORDIA(ANT)",
            "cd": 1,
            "cm": 100
        },
        {
            "cod": "001103",
            "arc": 1,
            "nm": "COPACABANA(ANT)",
            "cd": 1,
            "cm": 103
        },
        {
            "cod": "001106",
            "arc": 1,
            "nm": "CHIGORODO(ANT)",
            "cd": 1,
            "cm": 106
        },
        {
            "cod": "001109",
            "arc": 1,
            "nm": "DABEIBA(ANT)",
            "cd": 1,
            "cm": 109
        },
        {
            "cod": "001112",
            "arc": 1,
            "nm": "DON MATIAS(ANT)",
            "cd": 1,
            "cm": 112
        },
        {
            "cod": "001115",
            "arc": 1,
            "nm": "EBEJICO(ANT)",
            "cd": 1,
            "cm": 115
        },
        {
            "cod": "001117",
            "arc": 1,
            "nm": "EL BAGRE(ANT)",
            "cd": 1,
            "cm": 117
        },
        {
            "cod": "001118",
            "arc": 1,
            "nm": "ENTRERRIOS(ANT)",
            "cd": 1,
            "cm": 118
        },
        {
            "cod": "001121",
            "arc": 1,
            "nm": "ENVIGADO(ANT)",
            "cd": 1,
            "cm": 121
        },
        {
            "cod": "001124",
            "arc": 1,
            "nm": "FREDONIA(ANT)",
            "cd": 1,
            "cm": 124
        },
        {
            "cod": "001127",
            "arc": 1,
            "nm": "FRONTINO(ANT)",
            "cd": 1,
            "cm": 127
        },
        {
            "cod": "001130",
            "arc": 1,
            "nm": "GIRALDO(ANT)",
            "cd": 1,
            "cm": 130
        },
        {
            "cod": "001133",
            "arc": 2,
            "nm": "GIRARDOTA(ANT)",
            "cd": 1,
            "cm": 133
        },
        {
            "cod": "001136",
            "arc": 2,
            "nm": "GOMEZ PLATA(ANT)",
            "cd": 1,
            "cm": 136
        },
        {
            "cod": "001139",
            "arc": 2,
            "nm": "GRANADA(ANT)",
            "cd": 1,
            "cm": 139
        },
        {
            "cod": "001140",
            "arc": 2,
            "nm": "GUADALUPE(ANT)",
            "cd": 1,
            "cm": 140
        },
        {
            "cod": "001142",
            "arc": 2,
            "nm": "GUARNE(ANT)",
            "cd": 1,
            "cm": 142
        },
        {
            "cod": "001145",
            "arc": 2,
            "nm": "GUATAPE(ANT)",
            "cd": 1,
            "cm": 145
        },
        {
            "cod": "001148",
            "arc": 2,
            "nm": "HELICONIA(ANT)",
            "cd": 1,
            "cm": 148
        },
        {
            "cod": "001150",
            "arc": 2,
            "nm": "HISPANIA(ANT)",
            "cd": 1,
            "cm": 150
        },
        {
            "cod": "001151",
            "arc": 2,
            "nm": "ITAGUI(ANT)",
            "cd": 1,
            "cm": 151
        },
        {
            "cod": "001154",
            "arc": 2,
            "nm": "ITUANGO(ANT)",
            "cd": 1,
            "cm": 154
        },
        {
            "cod": "001157",
            "arc": 2,
            "nm": "JARDIN(ANT)",
            "cd": 1,
            "cm": 157
        },
        {
            "cod": "001160",
            "arc": 2,
            "nm": "JERICO(ANT)",
            "cd": 1,
            "cm": 160
        },
        {
            "cod": "001163",
            "arc": 2,
            "nm": "LA CEJA(ANT)",
            "cd": 1,
            "cm": 163
        },
        {
            "cod": "001166",
            "arc": 2,
            "nm": "LA ESTRELLA(ANT)",
            "cd": 1,
            "cm": 166
        },
        {
            "cod": "001168",
            "arc": 2,
            "nm": "PUERTO NARE-LA MAGDALENA(ANT)",
            "cd": 1,
            "cm": 168
        },
        {
            "cod": "001169",
            "arc": 2,
            "nm": "LA UNION(ANT)",
            "cd": 1,
            "cm": 169
        },
        {
            "cod": "001170",
            "arc": 2,
            "nm": "LA PINTADA(ANT)",
            "cd": 1,
            "cm": 170
        },
        {
            "cod": "001172",
            "arc": 2,
            "nm": "LIBORINA(ANT)",
            "cd": 1,
            "cm": 172
        },
        {
            "cod": "001175",
            "arc": 2,
            "nm": "MACEO(ANT)",
            "cd": 1,
            "cm": 175
        },
        {
            "cod": "001178",
            "arc": 2,
            "nm": "MARINILLA(ANT)",
            "cd": 1,
            "cm": 178
        },
        {
            "cod": "001181",
            "arc": 2,
            "nm": "MONTEBELLO(ANT)",
            "cd": 1,
            "cm": 181
        },
        {
            "cod": "001184",
            "arc": 2,
            "nm": "MURINDO(ANT)",
            "cd": 1,
            "cm": 184
        },
        {
            "cod": "001187",
            "arc": 2,
            "nm": "MUTATA(ANT)",
            "cd": 1,
            "cm": 187
        },
        {
            "cod": "001190",
            "arc": 2,
            "nm": "NARIÑO(ANT)",
            "cd": 1,
            "cm": 190
        },
        {
            "cod": "001191",
            "arc": 2,
            "nm": "NECHI(ANT)",
            "cd": 1,
            "cm": 191
        },
        {
            "cod": "001192",
            "arc": 2,
            "nm": "NECOCLI(ANT)",
            "cd": 1,
            "cm": 192
        },
        {
            "cod": "001193",
            "arc": 2,
            "nm": "OLAYA(ANT)",
            "cd": 1,
            "cm": 193
        },
        {
            "cod": "001196",
            "arc": 2,
            "nm": "PEÑOL(ANT)",
            "cd": 1,
            "cm": 196
        },
        {
            "cod": "001199",
            "arc": 2,
            "nm": "PEQUE(ANT)",
            "cd": 1,
            "cm": 199
        },
        {
            "cod": "001202",
            "arc": 2,
            "nm": "PUEBLORRICO(ANT)",
            "cd": 1,
            "cm": 202
        },
        {
            "cod": "001205",
            "arc": 2,
            "nm": "PUERTO BERRIO(ANT)",
            "cd": 1,
            "cm": 205
        },
        {
            "cod": "001206",
            "arc": 2,
            "nm": "PUERTO TRIUNFO(ANT)",
            "cd": 1,
            "cm": 206
        },
        {
            "cod": "001208",
            "arc": 2,
            "nm": "REMEDIOS(ANT)",
            "cd": 1,
            "cm": 208
        },
        {
            "cod": "001211",
            "arc": 2,
            "nm": "RETIRO(ANT)",
            "cd": 1,
            "cm": 211
        },
        {
            "cod": "001214",
            "arc": 2,
            "nm": "RIONEGRO(ANT)",
            "cd": 1,
            "cm": 214
        },
        {
            "cod": "001217",
            "arc": 2,
            "nm": "SABANALARGA(ANT)",
            "cd": 1,
            "cm": 217
        },
        {
            "cod": "001218",
            "arc": 2,
            "nm": "SABANETA(ANT)",
            "cd": 1,
            "cm": 218
        },
        {
            "cod": "001220",
            "arc": 2,
            "nm": "SALGAR(ANT)",
            "cd": 1,
            "cm": 220
        },
        {
            "cod": "001223",
            "arc": 2,
            "nm": "SAN ANDRES(ANT)",
            "cd": 1,
            "cm": 223
        },
        {
            "cod": "001226",
            "arc": 2,
            "nm": "SAN CARLOS(ANT)",
            "cd": 1,
            "cm": 226
        },
        {
            "cod": "001227",
            "arc": 2,
            "nm": "SAN FRANCISCO(ANT)",
            "cd": 1,
            "cm": 227
        },
        {
            "cod": "001229",
            "arc": 2,
            "nm": "SAN JERONIMO(ANT)",
            "cd": 1,
            "cm": 229
        },
        {
            "cod": "001230",
            "arc": 2,
            "nm": "SAN JOSE DE LA MONTAÑA(ANT)",
            "cd": 1,
            "cm": 230
        },
        {
            "cod": "001231",
            "arc": 2,
            "nm": "SAN JUAN DE URABA(ANT)",
            "cd": 1,
            "cm": 231
        },
        {
            "cod": "001232",
            "arc": 2,
            "nm": "SAN LUIS(ANT)",
            "cd": 1,
            "cm": 232
        },
        {
            "cod": "001235",
            "arc": 2,
            "nm": "SAN PEDRO(ANT)",
            "cd": 1,
            "cm": 235
        },
        {
            "cod": "001237",
            "arc": 2,
            "nm": "SAN PEDRO DE URABA(ANT)",
            "cd": 1,
            "cm": 237
        },
        {
            "cod": "001238",
            "arc": 2,
            "nm": "SAN RAFAEL(ANT)",
            "cd": 1,
            "cm": 238
        },
        {
            "cod": "001241",
            "arc": 2,
            "nm": "SAN ROQUE(ANT)",
            "cd": 1,
            "cm": 241
        },
        {
            "cod": "001244",
            "arc": 2,
            "nm": "SAN VICENTE(ANT)",
            "cd": 1,
            "cm": 244
        },
        {
            "cod": "001247",
            "arc": 3,
            "nm": "SANTA BARBARA(ANT)",
            "cd": 1,
            "cm": 247
        },
        {
            "cod": "001250",
            "arc": 3,
            "nm": "SANTA ROSA DE OSOS(ANT)",
            "cd": 1,
            "cm": 250
        },
        {
            "cod": "001253",
            "arc": 3,
            "nm": "SANTO DOMINGO(ANT)",
            "cd": 1,
            "cm": 253
        },
        {
            "cod": "001256",
            "arc": 3,
            "nm": "SANTUARIO(ANT)",
            "cd": 1,
            "cm": 256
        },
        {
            "cod": "001259",
            "arc": 3,
            "nm": "SEGOVIA(ANT)",
            "cd": 1,
            "cm": 259
        },
        {
            "cod": "001262",
            "arc": 3,
            "nm": "SONSON(ANT)",
            "cd": 1,
            "cm": 262
        },
        {
            "cod": "001265",
            "arc": 3,
            "nm": "SOPETRAN(ANT)",
            "cd": 1,
            "cm": 265
        },
        {
            "cod": "001268",
            "arc": 3,
            "nm": "TAMESIS(ANT)",
            "cd": 1,
            "cm": 268
        },
        {
            "cod": "001270",
            "arc": 3,
            "nm": "TARAZA(ANT)",
            "cd": 1,
            "cm": 270
        },
        {
            "cod": "001271",
            "arc": 3,
            "nm": "TARSO(ANT)",
            "cd": 1,
            "cm": 271
        },
        {
            "cod": "001274",
            "arc": 3,
            "nm": "TITIRIBI(ANT)",
            "cd": 1,
            "cm": 274
        },
        {
            "cod": "001277",
            "arc": 3,
            "nm": "TOLEDO(ANT)",
            "cd": 1,
            "cm": 277
        },
        {
            "cod": "001280",
            "arc": 3,
            "nm": "TURBO(ANT)",
            "cd": 1,
            "cm": 280
        },
        {
            "cod": "001282",
            "arc": 3,
            "nm": "URAMITA(ANT)",
            "cd": 1,
            "cm": 282
        },
        {
            "cod": "001283",
            "arc": 3,
            "nm": "URRAO(ANT)",
            "cd": 1,
            "cm": 283
        },
        {
            "cod": "001286",
            "arc": 3,
            "nm": "VALDIVIA(ANT)",
            "cd": 1,
            "cm": 286
        },
        {
            "cod": "001289",
            "arc": 3,
            "nm": "VALPARAISO(ANT)",
            "cd": 1,
            "cm": 289
        },
        {
            "cod": "001290",
            "arc": 3,
            "nm": "VEGACHI(ANT)",
            "cd": 1,
            "cm": 290
        },
        {
            "cod": "001291",
            "arc": 3,
            "nm": "VIGIA DEL FUERTE(ANT)",
            "cd": 1,
            "cm": 291
        },
        {
            "cod": "001292",
            "arc": 3,
            "nm": "VENECIA(ANT)",
            "cd": 1,
            "cm": 292
        },
        {
            "cod": "001293",
            "arc": 3,
            "nm": "YALI(ANT)",
            "cd": 1,
            "cm": 293
        },
        {
            "cod": "001295",
            "arc": 3,
            "nm": "YARUMAL(ANT)",
            "cd": 1,
            "cm": 295
        },
        {
            "cod": "001298",
            "arc": 3,
            "nm": "YOLOMBO(ANT)",
            "cd": 1,
            "cm": 298
        },
        {
            "cod": "001300",
            "arc": 3,
            "nm": "YONDO-CASABE(ANT)",
            "cd": 1,
            "cm": 300
        },
        {
            "cod": "001301",
            "arc": 3,
            "nm": "ZARAGOZA(ANT)",
            "cd": 1,
            "cm": 301
        },
        {
            "cod": "003001",
            "arc": 3,
            "nm": "BARRANQUILLA(ATL)",
            "cd": 3,
            "cm": 1
        },
        {
            "cod": "003004",
            "arc": 3,
            "nm": "BARANOA(ATL)",
            "cd": 3,
            "cm": 4
        },
        {
            "cod": "003007",
            "arc": 3,
            "nm": "CAMPO DE LA CRUZ(ATL)",
            "cd": 3,
            "cm": 7
        },
        {
            "cod": "003010",
            "arc": 3,
            "nm": "CANDELARIA(ATL)",
            "cd": 3,
            "cm": 10
        },
        {
            "cod": "003013",
            "arc": 3,
            "nm": "GALAPA(ATL)",
            "cd": 3,
            "cm": 13
        },
        {
            "cod": "003016",
            "arc": 3,
            "nm": "JUAN DE ACOSTA(ATL)",
            "cd": 3,
            "cm": 16
        },
        {
            "cod": "003019",
            "arc": 3,
            "nm": "LURUACO(ATL)",
            "cd": 3,
            "cm": 19
        },
        {
            "cod": "003022",
            "arc": 3,
            "nm": "MALAMBO(ATL)",
            "cd": 3,
            "cm": 22
        },
        {
            "cod": "003025",
            "arc": 3,
            "nm": "MANATI(ATL)",
            "cd": 3,
            "cm": 25
        },
        {
            "cod": "003028",
            "arc": 3,
            "nm": "PALMAR DE VARELA(ATL)",
            "cd": 3,
            "cm": 28
        },
        {
            "cod": "003031",
            "arc": 3,
            "nm": "PIOJO(ATL)",
            "cd": 3,
            "cm": 31
        },
        {
            "cod": "003034",
            "arc": 3,
            "nm": "POLONUEVO(ATL)",
            "cd": 3,
            "cm": 34
        },
        {
            "cod": "003035",
            "arc": 3,
            "nm": "PONEDERA(ATL)",
            "cd": 3,
            "cm": 35
        },
        {
            "cod": "003037",
            "arc": 3,
            "nm": "PUERTO COLOMBIA(ATL)",
            "cd": 3,
            "cm": 37
        },
        {
            "cod": "003040",
            "arc": 3,
            "nm": "REPELON(ATL)",
            "cd": 3,
            "cm": 40
        },
        {
            "cod": "003043",
            "arc": 3,
            "nm": "SABANAGRANDE(ATL)",
            "cd": 3,
            "cm": 43
        },
        {
            "cod": "003046",
            "arc": 3,
            "nm": "SABANALARGA(ATL)",
            "cd": 3,
            "cm": 46
        },
        {
            "cod": "003047",
            "arc": 3,
            "nm": "SANTA LUCIA(ATL)",
            "cd": 3,
            "cm": 47
        },
        {
            "cod": "003049",
            "arc": 3,
            "nm": "SANTO TOMAS(ATL)",
            "cd": 3,
            "cm": 49
        },
        {
            "cod": "003052",
            "arc": 3,
            "nm": "SOLEDAD(ATL)",
            "cd": 3,
            "cm": 52
        },
        {
            "cod": "003055",
            "arc": 3,
            "nm": "SUAN(ATL)",
            "cd": 3,
            "cm": 55
        },
        {
            "cod": "003058",
            "arc": 3,
            "nm": "TUBARA(ATL)",
            "cd": 3,
            "cm": 58
        },
        {
            "cod": "003061",
            "arc": 3,
            "nm": "USIACURI(ATL)",
            "cd": 3,
            "cm": 61
        },
        {
            "cod": "005001",
            "arc": 3,
            "nm": "CARTAGENA(BOL)",
            "cd": 5,
            "cm": 1
        },
        {
            "cod": "005004",
            "arc": 3,
            "nm": "ACHI(BOL)",
            "cd": 5,
            "cm": 4
        },
        {
            "cod": "005005",
            "arc": 4,
            "nm": "ARENAL(BOL)",
            "cd": 5,
            "cm": 5
        },
        {
            "cod": "005006",
            "arc": 4,
            "nm": "ALTOS DEL ROSARIO(BOL)",
            "cd": 5,
            "cm": 6
        },
        {
            "cod": "005007",
            "arc": 4,
            "nm": "ARJONA(BOL)",
            "cd": 5,
            "cm": 7
        },
        {
            "cod": "005009",
            "arc": 4,
            "nm": "ARROYO HONDO(BOL)",
            "cd": 5,
            "cm": 9
        },
        {
            "cod": "005010",
            "arc": 4,
            "nm": "BARRANCO DE LOBA(BOL)",
            "cd": 5,
            "cm": 10
        },
        {
            "cod": "005013",
            "arc": 4,
            "nm": "CALAMAR(BOL)",
            "cd": 5,
            "cm": 13
        },
        {
            "cod": "005014",
            "arc": 4,
            "nm": "CANTAGALLO(BOL)",
            "cd": 5,
            "cm": 14
        },
        {
            "cod": "005015",
            "arc": 4,
            "nm": "CICUCO(BOL)",
            "cd": 5,
            "cm": 15
        },
        {
            "cod": "005016",
            "arc": 4,
            "nm": "CORDOBA(BOL)",
            "cd": 5,
            "cm": 16
        },
        {
            "cod": "005018",
            "arc": 4,
            "nm": "CLEMENCIA(BOL)",
            "cd": 5,
            "cm": 18
        },
        {
            "cod": "005022",
            "arc": 4,
            "nm": "EL CARMEN DE BOLIVAR(BOL)",
            "cd": 5,
            "cm": 22
        },
        {
            "cod": "005025",
            "arc": 4,
            "nm": "EL GUAMO(BOL)",
            "cd": 5,
            "cm": 25
        },
        {
            "cod": "005026",
            "arc": 4,
            "nm": "HATILLO DE LOBA(BOL)",
            "cd": 5,
            "cm": 26
        },
        {
            "cod": "005027",
            "arc": 4,
            "nm": "EL PEÑON(BOL)",
            "cd": 5,
            "cm": 27
        },
        {
            "cod": "005028",
            "arc": 4,
            "nm": "MAGANGUE(BOL)",
            "cd": 5,
            "cm": 28
        },
        {
            "cod": "005031",
            "arc": 4,
            "nm": "MAHATES(BOL)",
            "cd": 5,
            "cm": 31
        },
        {
            "cod": "005037",
            "arc": 4,
            "nm": "MARGARITA(BOL)",
            "cd": 5,
            "cm": 37
        },
        {
            "cod": "005040",
            "arc": 4,
            "nm": "MARIA LA BAJA(BOL)",
            "cd": 5,
            "cm": 40
        },
        {
            "cod": "005041",
            "arc": 4,
            "nm": "MONTECRISTO(BOL)",
            "cd": 5,
            "cm": 41
        },
        {
            "cod": "005043",
            "arc": 4,
            "nm": "MOMPOS(BOL)",
            "cd": 5,
            "cm": 43
        },
        {
            "cod": "005044",
            "arc": 4,
            "nm": "MORALES(BOL)",
            "cd": 5,
            "cm": 44
        },
        {
            "cod": "005050",
            "arc": 4,
            "nm": "NOROSI(BOL)",
            "cd": 5,
            "cm": 50
        },
        {
            "cod": "005059",
            "arc": 4,
            "nm": "PINILLOS(BOL)",
            "cd": 5,
            "cm": 59
        },
        {
            "cod": "005063",
            "arc": 4,
            "nm": "REGIDOR(BOL)",
            "cd": 5,
            "cm": 63
        },
        {
            "cod": "005065",
            "arc": 4,
            "nm": "RIOVIEJO(BOL)",
            "cd": 5,
            "cm": 65
        },
        {
            "cod": "005070",
            "arc": 4,
            "nm": "SAN ESTANISLAO(BOL)",
            "cd": 5,
            "cm": 70
        },
        {
            "cod": "005072",
            "arc": 4,
            "nm": "SAN CRISTOBAL(BOL)",
            "cd": 5,
            "cm": 72
        },
        {
            "cod": "005073",
            "arc": 4,
            "nm": "SAN FERNANDO(BOL)",
            "cd": 5,
            "cm": 73
        },
        {
            "cod": "005076",
            "arc": 4,
            "nm": "SAN JACINTO(BOL)",
            "cd": 5,
            "cm": 76
        },
        {
            "cod": "005078",
            "arc": 4,
            "nm": "SAN JACINTO DEL CAUCA(BOL)",
            "cd": 5,
            "cm": 78
        },
        {
            "cod": "005079",
            "arc": 4,
            "nm": "SAN JUAN NEPOMUCENO(BOL)",
            "cd": 5,
            "cm": 79
        },
        {
            "cod": "005082",
            "arc": 4,
            "nm": "SAN MARTIN DE LOBA(BOL)",
            "cd": 5,
            "cm": 82
        },
        {
            "cod": "005084",
            "arc": 4,
            "nm": "SAN PABLO(BOL)",
            "cd": 5,
            "cm": 84
        },
        {
            "cod": "005091",
            "arc": 4,
            "nm": "SANTA CATALINA(BOL)",
            "cd": 5,
            "cm": 91
        },
        {
            "cod": "005094",
            "arc": 4,
            "nm": "SANTA ROSA(BOL)",
            "cd": 5,
            "cm": 94
        },
        {
            "cod": "005095",
            "arc": 4,
            "nm": "SANTA ROSA DEL SUR(BOL)",
            "cd": 5,
            "cm": 95
        },
        {
            "cod": "005097",
            "arc": 4,
            "nm": "SIMITI(BOL)",
            "cd": 5,
            "cm": 97
        },
        {
            "cod": "005106",
            "arc": 4,
            "nm": "SOPLAVIENTO(BOL)",
            "cd": 5,
            "cm": 106
        },
        {
            "cod": "005110",
            "arc": 4,
            "nm": "TALAIGUA NUEVO(BOL)",
            "cd": 5,
            "cm": 110
        },
        {
            "cod": "005113",
            "arc": 4,
            "nm": "TIQUISIO (PTO. RICO)(BOL)",
            "cd": 5,
            "cm": 113
        },
        {
            "cod": "005118",
            "arc": 4,
            "nm": "TURBACO(BOL)",
            "cd": 5,
            "cm": 118
        },
        {
            "cod": "005121",
            "arc": 4,
            "nm": "TURBANA(BOL)",
            "cd": 5,
            "cm": 121
        },
        {
            "cod": "005124",
            "arc": 4,
            "nm": "VILLANUEVA(BOL)",
            "cd": 5,
            "cm": 124
        },
        {
            "cod": "005127",
            "arc": 4,
            "nm": "ZAMBRANO(BOL)",
            "cd": 5,
            "cm": 127
        },
        {
            "cod": "007001",
            "arc": 4,
            "nm": "TUNJA(BOY)",
            "cd": 7,
            "cm": 1
        },
        {
            "cod": "007007",
            "arc": 4,
            "nm": "ALMEIDA(BOY)",
            "cd": 7,
            "cm": 7
        },
        {
            "cod": "007008",
            "arc": 4,
            "nm": "AQUITANIA (PUEBLOVIEJO)(BOY)",
            "cd": 7,
            "cm": 8
        },
        {
            "cod": "007010",
            "arc": 4,
            "nm": "ARCABUCO(BOY)",
            "cd": 7,
            "cm": 10
        },
        {
            "cod": "007013",
            "arc": 4,
            "nm": "BELEN(BOY)",
            "cd": 7,
            "cm": 13
        },
        {
            "cod": "007016",
            "arc": 4,
            "nm": "BERBEO(BOY)",
            "cd": 7,
            "cm": 16
        },
        {
            "cod": "007019",
            "arc": 5,
            "nm": "BETEITIVA(BOY)",
            "cd": 7,
            "cm": 19
        },
        {
            "cod": "007022",
            "arc": 5,
            "nm": "BOAVITA(BOY)",
            "cd": 7,
            "cm": 22
        },
        {
            "cod": "007025",
            "arc": 5,
            "nm": "BOYACA(BOY)",
            "cd": 7,
            "cm": 25
        },
        {
            "cod": "007028",
            "arc": 5,
            "nm": "BRICEÑO(BOY)",
            "cd": 7,
            "cm": 28
        },
        {
            "cod": "007031",
            "arc": 5,
            "nm": "BUENAVISTA(BOY)",
            "cd": 7,
            "cm": 31
        },
        {
            "cod": "007034",
            "arc": 5,
            "nm": "BUSBANZA(BOY)",
            "cd": 7,
            "cm": 34
        },
        {
            "cod": "007037",
            "arc": 5,
            "nm": "CALDAS(BOY)",
            "cd": 7,
            "cm": 37
        },
        {
            "cod": "007040",
            "arc": 5,
            "nm": "CAMPOHERMOSO(BOY)",
            "cd": 7,
            "cm": 40
        },
        {
            "cod": "007043",
            "arc": 5,
            "nm": "CERINZA(BOY)",
            "cd": 7,
            "cm": 43
        },
        {
            "cod": "007046",
            "arc": 5,
            "nm": "CIENEGA(BOY)",
            "cd": 7,
            "cm": 46
        },
        {
            "cod": "007049",
            "arc": 5,
            "nm": "COMBITA(BOY)",
            "cd": 7,
            "cm": 49
        },
        {
            "cod": "007052",
            "arc": 5,
            "nm": "COPER(BOY)",
            "cd": 7,
            "cm": 52
        },
        {
            "cod": "007055",
            "arc": 5,
            "nm": "CORRALES(BOY)",
            "cd": 7,
            "cm": 55
        },
        {
            "cod": "007058",
            "arc": 5,
            "nm": "COVARACHIA(BOY)",
            "cd": 7,
            "cm": 58
        },
        {
            "cod": "007059",
            "arc": 5,
            "nm": "CUBARA(BOY)",
            "cd": 7,
            "cm": 59
        },
        {
            "cod": "007060",
            "arc": 5,
            "nm": "CUCAITA(BOY)",
            "cd": 7,
            "cm": 60
        },
        {
            "cod": "007061",
            "arc": 5,
            "nm": "CUITIVA(BOY)",
            "cd": 7,
            "cm": 61
        },
        {
            "cod": "007064",
            "arc": 5,
            "nm": "CHINAVITA(BOY)",
            "cd": 7,
            "cm": 64
        },
        {
            "cod": "007067",
            "arc": 5,
            "nm": "CHIQUINQUIRA(BOY)",
            "cd": 7,
            "cm": 67
        },
        {
            "cod": "007068",
            "arc": 5,
            "nm": "CHIQUIZA(BOY)",
            "cd": 7,
            "cm": 68
        },
        {
            "cod": "007070",
            "arc": 5,
            "nm": "CHISCAS(BOY)",
            "cd": 7,
            "cm": 70
        },
        {
            "cod": "007073",
            "arc": 5,
            "nm": "CHITA(BOY)",
            "cd": 7,
            "cm": 73
        },
        {
            "cod": "007076",
            "arc": 5,
            "nm": "CHITARAQUE(BOY)",
            "cd": 7,
            "cm": 76
        },
        {
            "cod": "007077",
            "arc": 5,
            "nm": "CHIVATA(BOY)",
            "cd": 7,
            "cm": 77
        },
        {
            "cod": "007078",
            "arc": 5,
            "nm": "CHIVOR(BOY)",
            "cd": 7,
            "cm": 78
        },
        {
            "cod": "007079",
            "arc": 5,
            "nm": "DUITAMA(BOY)",
            "cd": 7,
            "cm": 79
        },
        {
            "cod": "007082",
            "arc": 5,
            "nm": "EL COCUY(BOY)",
            "cd": 7,
            "cm": 82
        },
        {
            "cod": "007085",
            "arc": 5,
            "nm": "EL ESPINO(BOY)",
            "cd": 7,
            "cm": 85
        },
        {
            "cod": "007088",
            "arc": 5,
            "nm": "FIRAVITOBA(BOY)",
            "cd": 7,
            "cm": 88
        },
        {
            "cod": "007091",
            "arc": 5,
            "nm": "FLORESTA(BOY)",
            "cd": 7,
            "cm": 91
        },
        {
            "cod": "007094",
            "arc": 5,
            "nm": "GACHANTIVA(BOY)",
            "cd": 7,
            "cm": 94
        },
        {
            "cod": "007097",
            "arc": 5,
            "nm": "GAMEZA(BOY)",
            "cd": 7,
            "cm": 97
        },
        {
            "cod": "007100",
            "arc": 5,
            "nm": "GARAGOA(BOY)",
            "cd": 7,
            "cm": 100
        },
        {
            "cod": "007103",
            "arc": 5,
            "nm": "GUACAMAYAS(BOY)",
            "cd": 7,
            "cm": 103
        },
        {
            "cod": "007106",
            "arc": 5,
            "nm": "GUATEQUE(BOY)",
            "cd": 7,
            "cm": 106
        },
        {
            "cod": "007109",
            "arc": 5,
            "nm": "GUAYATA(BOY)",
            "cd": 7,
            "cm": 109
        },
        {
            "cod": "007112",
            "arc": 5,
            "nm": "GUICAN(BOY)",
            "cd": 7,
            "cm": 112
        },
        {
            "cod": "007118",
            "arc": 5,
            "nm": "IZA(BOY)",
            "cd": 7,
            "cm": 118
        },
        {
            "cod": "007121",
            "arc": 5,
            "nm": "JENESANO(BOY)",
            "cd": 7,
            "cm": 121
        },
        {
            "cod": "007124",
            "arc": 5,
            "nm": "JERICO(BOY)",
            "cd": 7,
            "cm": 124
        },
        {
            "cod": "007127",
            "arc": 5,
            "nm": "LABRANZAGRANDE(BOY)",
            "cd": 7,
            "cm": 127
        },
        {
            "cod": "007130",
            "arc": 5,
            "nm": "LA CAPILLA(BOY)",
            "cd": 7,
            "cm": 130
        },
        {
            "cod": "007136",
            "arc": 5,
            "nm": "LA UVITA(BOY)",
            "cd": 7,
            "cm": 136
        },
        {
            "cod": "007137",
            "arc": 5,
            "nm": "LA VICTORIA(BOY)",
            "cd": 7,
            "cm": 137
        },
        {
            "cod": "007139",
            "arc": 5,
            "nm": "VILLA DE LEIVA(BOY)",
            "cd": 7,
            "cm": 139
        },
        {
            "cod": "007142",
            "arc": 5,
            "nm": "MACANAL(BOY)",
            "cd": 7,
            "cm": 142
        },
        {
            "cod": "007148",
            "arc": 5,
            "nm": "MARIPI(BOY)",
            "cd": 7,
            "cm": 148
        },
        {
            "cod": "007151",
            "arc": 5,
            "nm": "MIRAFLORES(BOY)",
            "cd": 7,
            "cm": 151
        },
        {
            "cod": "007154",
            "arc": 5,
            "nm": "MONGUA(BOY)",
            "cd": 7,
            "cm": 154
        },
        {
            "cod": "007157",
            "arc": 5,
            "nm": "MONGUI(BOY)",
            "cd": 7,
            "cm": 157
        },
        {
            "cod": "007160",
            "arc": 6,
            "nm": "MONIQUIRA(BOY)",
            "cd": 7,
            "cm": 160
        },
        {
            "cod": "007161",
            "arc": 6,
            "nm": "MOTAVITA(BOY)",
            "cd": 7,
            "cm": 161
        },
        {
            "cod": "007163",
            "arc": 6,
            "nm": "MUZO(BOY)",
            "cd": 7,
            "cm": 163
        },
        {
            "cod": "007166",
            "arc": 6,
            "nm": "NOBSA(BOY)",
            "cd": 7,
            "cm": 166
        },
        {
            "cod": "007169",
            "arc": 6,
            "nm": "NUEVO COLON(BOY)",
            "cd": 7,
            "cm": 169
        },
        {
            "cod": "007173",
            "arc": 6,
            "nm": "OICATA(BOY)",
            "cd": 7,
            "cm": 173
        },
        {
            "cod": "007176",
            "arc": 6,
            "nm": "OTANCHE(BOY)",
            "cd": 7,
            "cm": 176
        },
        {
            "cod": "007178",
            "arc": 6,
            "nm": "PACHAVITA(BOY)",
            "cd": 7,
            "cm": 178
        },
        {
            "cod": "007179",
            "arc": 6,
            "nm": "PAEZ(BOY)",
            "cd": 7,
            "cm": 179
        },
        {
            "cod": "007181",
            "arc": 6,
            "nm": "PAIPA(BOY)",
            "cd": 7,
            "cm": 181
        },
        {
            "cod": "007184",
            "arc": 6,
            "nm": "PAJARITO(BOY)",
            "cd": 7,
            "cm": 184
        },
        {
            "cod": "007187",
            "arc": 6,
            "nm": "PANQUEBA(BOY)",
            "cd": 7,
            "cm": 187
        },
        {
            "cod": "007190",
            "arc": 6,
            "nm": "PAUNA(BOY)",
            "cd": 7,
            "cm": 190
        },
        {
            "cod": "007193",
            "arc": 6,
            "nm": "PAYA(BOY)",
            "cd": 7,
            "cm": 193
        },
        {
            "cod": "007199",
            "arc": 6,
            "nm": "PAZ DE RIO(BOY)",
            "cd": 7,
            "cm": 199
        },
        {
            "cod": "007202",
            "arc": 6,
            "nm": "PESCA(BOY)",
            "cd": 7,
            "cm": 202
        },
        {
            "cod": "007205",
            "arc": 6,
            "nm": "PISBA(BOY)",
            "cd": 7,
            "cm": 205
        },
        {
            "cod": "007214",
            "arc": 6,
            "nm": "PUERTO BOYACA(BOY)",
            "cd": 7,
            "cm": 214
        },
        {
            "cod": "007215",
            "arc": 6,
            "nm": "QUIPAMA(BOY)",
            "cd": 7,
            "cm": 215
        },
        {
            "cod": "007217",
            "arc": 6,
            "nm": "RAMIRIQUI(BOY)",
            "cd": 7,
            "cm": 217
        },
        {
            "cod": "007220",
            "arc": 6,
            "nm": "RAQUIRA(BOY)",
            "cd": 7,
            "cm": 220
        },
        {
            "cod": "007223",
            "arc": 6,
            "nm": "RONDON(BOY)",
            "cd": 7,
            "cm": 223
        },
        {
            "cod": "007226",
            "arc": 6,
            "nm": "SABOYA(BOY)",
            "cd": 7,
            "cm": 226
        },
        {
            "cod": "007232",
            "arc": 6,
            "nm": "SACHICA(BOY)",
            "cd": 7,
            "cm": 232
        },
        {
            "cod": "007235",
            "arc": 6,
            "nm": "SAMACA(BOY)",
            "cd": 7,
            "cm": 235
        },
        {
            "cod": "007237",
            "arc": 6,
            "nm": "SAN EDUARDO(BOY)",
            "cd": 7,
            "cm": 237
        },
        {
            "cod": "007238",
            "arc": 6,
            "nm": "SAN JOSE DE PARE(BOY)",
            "cd": 7,
            "cm": 238
        },
        {
            "cod": "007241",
            "arc": 6,
            "nm": "SAN LUIS DE GACENO(BOY)",
            "cd": 7,
            "cm": 241
        },
        {
            "cod": "007247",
            "arc": 6,
            "nm": "SAN MATEO(BOY)",
            "cd": 7,
            "cm": 247
        },
        {
            "cod": "007248",
            "arc": 6,
            "nm": "SAN MIGUEL DE SEMA(BOY)",
            "cd": 7,
            "cm": 248
        },
        {
            "cod": "007249",
            "arc": 6,
            "nm": "SAN PABLO DE BORBUR(BOY)",
            "cd": 7,
            "cm": 249
        },
        {
            "cod": "007250",
            "arc": 6,
            "nm": "SANTANA(BOY)",
            "cd": 7,
            "cm": 250
        },
        {
            "cod": "007251",
            "arc": 6,
            "nm": "SANTA MARIA(BOY)",
            "cd": 7,
            "cm": 251
        },
        {
            "cod": "007253",
            "arc": 6,
            "nm": "SANTA ROSA DE VITERBO(BOY)",
            "cd": 7,
            "cm": 253
        },
        {
            "cod": "007256",
            "arc": 6,
            "nm": "SANTA SOFIA(BOY)",
            "cd": 7,
            "cm": 256
        },
        {
            "cod": "007259",
            "arc": 6,
            "nm": "SATIVANORTE(BOY)",
            "cd": 7,
            "cm": 259
        },
        {
            "cod": "007262",
            "arc": 6,
            "nm": "SATIVASUR(BOY)",
            "cd": 7,
            "cm": 262
        },
        {
            "cod": "007265",
            "arc": 6,
            "nm": "SIACHOQUE(BOY)",
            "cd": 7,
            "cm": 265
        },
        {
            "cod": "007268",
            "arc": 6,
            "nm": "SOATA(BOY)",
            "cd": 7,
            "cm": 268
        },
        {
            "cod": "007271",
            "arc": 6,
            "nm": "SOCOTA(BOY)",
            "cd": 7,
            "cm": 271
        },
        {
            "cod": "007274",
            "arc": 6,
            "nm": "SOCHA(BOY)",
            "cd": 7,
            "cm": 274
        },
        {
            "cod": "007277",
            "arc": 6,
            "nm": "SOGAMOSO(BOY)",
            "cd": 7,
            "cm": 277
        },
        {
            "cod": "007280",
            "arc": 6,
            "nm": "SOMONDOCO(BOY)",
            "cd": 7,
            "cm": 280
        },
        {
            "cod": "007281",
            "arc": 6,
            "nm": "SORA(BOY)",
            "cd": 7,
            "cm": 281
        },
        {
            "cod": "007282",
            "arc": 6,
            "nm": "SORACA(BOY)",
            "cd": 7,
            "cm": 282
        },
        {
            "cod": "007283",
            "arc": 6,
            "nm": "SOTAQUIRA(BOY)",
            "cd": 7,
            "cm": 283
        },
        {
            "cod": "007286",
            "arc": 6,
            "nm": "SUSACON(BOY)",
            "cd": 7,
            "cm": 286
        },
        {
            "cod": "007289",
            "arc": 6,
            "nm": "SUTAMARCHAN(BOY)",
            "cd": 7,
            "cm": 289
        },
        {
            "cod": "007292",
            "arc": 6,
            "nm": "SUTATENZA(BOY)",
            "cd": 7,
            "cm": 292
        },
        {
            "cod": "007298",
            "arc": 6,
            "nm": "TASCO(BOY)",
            "cd": 7,
            "cm": 298
        },
        {
            "cod": "007301",
            "arc": 7,
            "nm": "TENZA(BOY)",
            "cd": 7,
            "cm": 301
        },
        {
            "cod": "007304",
            "arc": 7,
            "nm": "TIBANA(BOY)",
            "cd": 7,
            "cm": 304
        },
        {
            "cod": "007307",
            "arc": 7,
            "nm": "TIBASOSA(BOY)",
            "cd": 7,
            "cm": 307
        },
        {
            "cod": "007310",
            "arc": 7,
            "nm": "TINJACA(BOY)",
            "cd": 7,
            "cm": 310
        },
        {
            "cod": "007311",
            "arc": 7,
            "nm": "TIPACOQUE(BOY)",
            "cd": 7,
            "cm": 311
        },
        {
            "cod": "007313",
            "arc": 7,
            "nm": "TOCA(BOY)",
            "cd": 7,
            "cm": 313
        },
        {
            "cod": "007316",
            "arc": 7,
            "nm": "TOGUI(BOY)",
            "cd": 7,
            "cm": 316
        },
        {
            "cod": "007319",
            "arc": 7,
            "nm": "TOPAGA(BOY)",
            "cd": 7,
            "cm": 319
        },
        {
            "cod": "007322",
            "arc": 7,
            "nm": "TOTA(BOY)",
            "cd": 7,
            "cm": 322
        },
        {
            "cod": "007324",
            "arc": 7,
            "nm": "TUNUNGUA(BOY)",
            "cd": 7,
            "cm": 324
        },
        {
            "cod": "007325",
            "arc": 7,
            "nm": "TURMEQUE(BOY)",
            "cd": 7,
            "cm": 325
        },
        {
            "cod": "007328",
            "arc": 7,
            "nm": "TUTA(BOY)",
            "cd": 7,
            "cm": 328
        },
        {
            "cod": "007331",
            "arc": 7,
            "nm": "TUTAZA(BOY)",
            "cd": 7,
            "cm": 331
        },
        {
            "cod": "007334",
            "arc": 7,
            "nm": "UMBITA(BOY)",
            "cd": 7,
            "cm": 334
        },
        {
            "cod": "007337",
            "arc": 7,
            "nm": "VENTAQUEMADA(BOY)",
            "cd": 7,
            "cm": 337
        },
        {
            "cod": "007340",
            "arc": 7,
            "nm": "VIRACACHA(BOY)",
            "cd": 7,
            "cm": 340
        },
        {
            "cod": "007346",
            "arc": 7,
            "nm": "ZETAQUIRA(BOY)",
            "cd": 7,
            "cm": 346
        },
        {
            "cod": "009001",
            "arc": 7,
            "nm": "MANIZALES(CAL)",
            "cd": 9,
            "cm": 1
        },
        {
            "cod": "009004",
            "arc": 7,
            "nm": "AGUADAS(CAL)",
            "cd": 9,
            "cm": 4
        },
        {
            "cod": "009007",
            "arc": 7,
            "nm": "ANSERMA(CAL)",
            "cd": 9,
            "cm": 7
        },
        {
            "cod": "009013",
            "arc": 7,
            "nm": "ARANZAZU(CAL)",
            "cd": 9,
            "cm": 13
        },
        {
            "cod": "009022",
            "arc": 7,
            "nm": "BELALCAZAR(CAL)",
            "cd": 9,
            "cm": 22
        },
        {
            "cod": "009034",
            "arc": 7,
            "nm": "CHINCHINA(CAL)",
            "cd": 9,
            "cm": 34
        },
        {
            "cod": "009037",
            "arc": 7,
            "nm": "FILADELFIA(CAL)",
            "cd": 9,
            "cm": 37
        },
        {
            "cod": "009049",
            "arc": 7,
            "nm": "LA DORADA(CAL)",
            "cd": 9,
            "cm": 49
        },
        {
            "cod": "009052",
            "arc": 7,
            "nm": "LA MERCED(CAL)",
            "cd": 9,
            "cm": 52
        },
        {
            "cod": "009055",
            "arc": 7,
            "nm": "MANZANARES(CAL)",
            "cd": 9,
            "cm": 55
        },
        {
            "cod": "009058",
            "arc": 7,
            "nm": "MARMATO(CAL)",
            "cd": 9,
            "cm": 58
        },
        {
            "cod": "009061",
            "arc": 7,
            "nm": "MARQUETALIA(CAL)",
            "cd": 9,
            "cm": 61
        },
        {
            "cod": "009067",
            "arc": 7,
            "nm": "MARULANDA(CAL)",
            "cd": 9,
            "cm": 67
        },
        {
            "cod": "009076",
            "arc": 7,
            "nm": "NEIRA(CAL)",
            "cd": 9,
            "cm": 76
        },
        {
            "cod": "009078",
            "arc": 7,
            "nm": "NORCASIA(CAL)",
            "cd": 9,
            "cm": 78
        },
        {
            "cod": "009079",
            "arc": 7,
            "nm": "PACORA(CAL)",
            "cd": 9,
            "cm": 79
        },
        {
            "cod": "009082",
            "arc": 7,
            "nm": "PALESTINA(CAL)",
            "cd": 9,
            "cm": 82
        },
        {
            "cod": "009085",
            "arc": 7,
            "nm": "PENSILVANIA(CAL)",
            "cd": 9,
            "cm": 85
        },
        {
            "cod": "009103",
            "arc": 7,
            "nm": "RIOSUCIO(CAL)",
            "cd": 9,
            "cm": 103
        },
        {
            "cod": "009106",
            "arc": 7,
            "nm": "RISARALDA(CAL)",
            "cd": 9,
            "cm": 106
        },
        {
            "cod": "009109",
            "arc": 7,
            "nm": "SALAMINA(CAL)",
            "cd": 9,
            "cm": 109
        },
        {
            "cod": "009115",
            "arc": 7,
            "nm": "SAMANA(CAL)",
            "cd": 9,
            "cm": 115
        },
        {
            "cod": "009120",
            "arc": 7,
            "nm": "SAN JOSE(CAL)",
            "cd": 9,
            "cm": 120
        },
        {
            "cod": "009124",
            "arc": 7,
            "nm": "SUPIA(CAL)",
            "cd": 9,
            "cm": 124
        },
        {
            "cod": "009127",
            "arc": 7,
            "nm": "VICTORIA(CAL)",
            "cd": 9,
            "cm": 127
        },
        {
            "cod": "009130",
            "arc": 7,
            "nm": "VILLAMARIA(CAL)",
            "cd": 9,
            "cm": 130
        },
        {
            "cod": "009133",
            "arc": 7,
            "nm": "VITERBO(CAL)",
            "cd": 9,
            "cm": 133
        },
        {
            "cod": "011001",
            "arc": 7,
            "nm": "POPAYAN(CAU)",
            "cd": 11,
            "cm": 1
        },
        {
            "cod": "011004",
            "arc": 7,
            "nm": "ALMAGUER(CAU)",
            "cd": 11,
            "cm": 4
        },
        {
            "cod": "011005",
            "arc": 7,
            "nm": "ARGELIA(CAU)",
            "cd": 11,
            "cm": 5
        },
        {
            "cod": "011006",
            "arc": 7,
            "nm": "BALBOA(CAU)",
            "cd": 11,
            "cm": 6
        },
        {
            "cod": "011007",
            "arc": 7,
            "nm": "BOLIVAR(CAU)",
            "cd": 11,
            "cm": 7
        },
        {
            "cod": "011010",
            "arc": 7,
            "nm": "BUENOS AIRES(CAU)",
            "cd": 11,
            "cm": 10
        },
        {
            "cod": "011013",
            "arc": 8,
            "nm": "CAJIBIO(CAU)",
            "cd": 11,
            "cm": 13
        },
        {
            "cod": "011016",
            "arc": 8,
            "nm": "CALDONO(CAU)",
            "cd": 11,
            "cm": 16
        },
        {
            "cod": "011019",
            "arc": 8,
            "nm": "CALOTO(CAU)",
            "cd": 11,
            "cm": 19
        },
        {
            "cod": "011022",
            "arc": 8,
            "nm": "CORINTO(CAU)",
            "cd": 11,
            "cm": 22
        },
        {
            "cod": "011025",
            "arc": 8,
            "nm": "EL TAMBO(CAU)",
            "cd": 11,
            "cm": 25
        },
        {
            "cod": "011027",
            "arc": 8,
            "nm": "FLORENCIA(CAU)",
            "cd": 11,
            "cm": 27
        },
        {
            "cod": "011028",
            "arc": 8,
            "nm": "GUAPI(CAU)",
            "cd": 11,
            "cm": 28
        },
        {
            "cod": "011029",
            "arc": 8,
            "nm": "GUACHENE(CAU)",
            "cd": 11,
            "cm": 29
        },
        {
            "cod": "011031",
            "arc": 8,
            "nm": "INZA(CAU)",
            "cd": 11,
            "cm": 31
        },
        {
            "cod": "011034",
            "arc": 8,
            "nm": "JAMBALO(CAU)",
            "cd": 11,
            "cm": 34
        },
        {
            "cod": "011037",
            "arc": 8,
            "nm": "LA SIERRA(CAU)",
            "cd": 11,
            "cm": 37
        },
        {
            "cod": "011040",
            "arc": 8,
            "nm": "LA VEGA(CAU)",
            "cd": 11,
            "cm": 40
        },
        {
            "cod": "011043",
            "arc": 8,
            "nm": "LOPEZ (MICAY)(CAU)",
            "cd": 11,
            "cm": 43
        },
        {
            "cod": "011046",
            "arc": 8,
            "nm": "MERCADERES(CAU)",
            "cd": 11,
            "cm": 46
        },
        {
            "cod": "011049",
            "arc": 8,
            "nm": "MIRANDA(CAU)",
            "cd": 11,
            "cm": 49
        },
        {
            "cod": "011052",
            "arc": 8,
            "nm": "MORALES(CAU)",
            "cd": 11,
            "cm": 52
        },
        {
            "cod": "011053",
            "arc": 8,
            "nm": "PADILLA(CAU)",
            "cd": 11,
            "cm": 53
        },
        {
            "cod": "011055",
            "arc": 8,
            "nm": "PAEZ (BELALCAZAR)(CAU)",
            "cd": 11,
            "cm": 55
        },
        {
            "cod": "011058",
            "arc": 8,
            "nm": "PATIA (EL BORDO)(CAU)",
            "cd": 11,
            "cm": 58
        },
        {
            "cod": "011060",
            "arc": 8,
            "nm": "PIAMONTE(CAU)",
            "cd": 11,
            "cm": 60
        },
        {
            "cod": "011061",
            "arc": 8,
            "nm": "PIENDAMO(CAU)",
            "cd": 11,
            "cm": 61
        },
        {
            "cod": "011064",
            "arc": 8,
            "nm": "PUERTO TEJADA(CAU)",
            "cd": 11,
            "cm": 64
        },
        {
            "cod": "011067",
            "arc": 8,
            "nm": "PURACE (COCONUCO)(CAU)",
            "cd": 11,
            "cm": 67
        },
        {
            "cod": "011070",
            "arc": 8,
            "nm": "ROSAS(CAU)",
            "cd": 11,
            "cm": 70
        },
        {
            "cod": "011073",
            "arc": 8,
            "nm": "SAN SEBASTIAN(CAU)",
            "cd": 11,
            "cm": 73
        },
        {
            "cod": "011076",
            "arc": 8,
            "nm": "SANTANDER DE QUILICHAO(CAU)",
            "cd": 11,
            "cm": 76
        },
        {
            "cod": "011079",
            "arc": 8,
            "nm": "SANTA ROSA(CAU)",
            "cd": 11,
            "cm": 79
        },
        {
            "cod": "011082",
            "arc": 8,
            "nm": "SILVIA(CAU)",
            "cd": 11,
            "cm": 82
        },
        {
            "cod": "011085",
            "arc": 8,
            "nm": "SOTARA (PAISPAMBA)(CAU)",
            "cd": 11,
            "cm": 85
        },
        {
            "cod": "011086",
            "arc": 8,
            "nm": "SUCRE(CAU)",
            "cd": 11,
            "cm": 86
        },
        {
            "cod": "011087",
            "arc": 8,
            "nm": "SUAREZ(CAU)",
            "cd": 11,
            "cm": 87
        },
        {
            "cod": "011088",
            "arc": 8,
            "nm": "TIMBIO(CAU)",
            "cd": 11,
            "cm": 88
        },
        {
            "cod": "011091",
            "arc": 8,
            "nm": "TIMBIQUI(CAU)",
            "cd": 11,
            "cm": 91
        },
        {
            "cod": "011094",
            "arc": 8,
            "nm": "TORIBIO(CAU)",
            "cd": 11,
            "cm": 94
        },
        {
            "cod": "011097",
            "arc": 8,
            "nm": "TOTORO(CAU)",
            "cd": 11,
            "cm": 97
        },
        {
            "cod": "011098",
            "arc": 8,
            "nm": "VILLA RICA(CAU)",
            "cd": 11,
            "cm": 98
        },
        {
            "cod": "012001",
            "arc": 8,
            "nm": "VALLEDUPAR(CES)",
            "cd": 12,
            "cm": 1
        },
        {
            "cod": "012075",
            "arc": 8,
            "nm": "AGUACHICA(CES)",
            "cd": 12,
            "cm": 75
        },
        {
            "cod": "012150",
            "arc": 8,
            "nm": "AGUSTIN CODAZZI(CES)",
            "cd": 12,
            "cm": 150
        },
        {
            "cod": "012170",
            "arc": 8,
            "nm": "ASTREA(CES)",
            "cd": 12,
            "cm": 170
        },
        {
            "cod": "012180",
            "arc": 8,
            "nm": "BECERRIL(CES)",
            "cd": 12,
            "cm": 180
        },
        {
            "cod": "012200",
            "arc": 8,
            "nm": "BOSCONIA(CES)",
            "cd": 12,
            "cm": 200
        },
        {
            "cod": "012225",
            "arc": 8,
            "nm": "CURUMANI(CES)",
            "cd": 12,
            "cm": 225
        },
        {
            "cod": "012300",
            "arc": 8,
            "nm": "CHIMICHAGUA(CES)",
            "cd": 12,
            "cm": 300
        },
        {
            "cod": "012375",
            "arc": 8,
            "nm": "CHIRIGUANA(CES)",
            "cd": 12,
            "cm": 375
        },
        {
            "cod": "012410",
            "arc": 8,
            "nm": "EL COPEY(CES)",
            "cd": 12,
            "cm": 410
        },
        {
            "cod": "012415",
            "arc": 8,
            "nm": "EL PASO(CES)",
            "cd": 12,
            "cm": 415
        },
        {
            "cod": "012450",
            "arc": 8,
            "nm": "GAMARRA(CES)",
            "cd": 12,
            "cm": 450
        },
        {
            "cod": "012525",
            "arc": 8,
            "nm": "GONZALEZ(CES)",
            "cd": 12,
            "cm": 525
        },
        {
            "cod": "012600",
            "arc": 8,
            "nm": "LA GLORIA(CES)",
            "cd": 12,
            "cm": 600
        },
        {
            "cod": "012608",
            "arc": 9,
            "nm": "LA JAGUA DE IBIRICO(CES)",
            "cd": 12,
            "cm": 608
        },
        {
            "cod": "012625",
            "arc": 9,
            "nm": "MANAURE BALCON DEL CESAR (MANA(CES)",
            "cd": 12,
            "cm": 625
        },
        {
            "cod": "012650",
            "arc": 9,
            "nm": "PAILITAS(CES)",
            "cd": 12,
            "cm": 650
        },
        {
            "cod": "012700",
            "arc": 9,
            "nm": "PELAYA(CES)",
            "cd": 12,
            "cm": 700
        },
        {
            "cod": "012720",
            "arc": 9,
            "nm": "PUEBLO BELLO(CES)",
            "cd": 12,
            "cm": 720
        },
        {
            "cod": "012750",
            "arc": 9,
            "nm": "RIO DE ORO(CES)",
            "cd": 12,
            "cm": 750
        },
        {
            "cod": "012800",
            "arc": 9,
            "nm": "SAN ALBERTO(CES)",
            "cd": 12,
            "cm": 800
        },
        {
            "cod": "012825",
            "arc": 9,
            "nm": "LA PAZ(CES)",
            "cd": 12,
            "cm": 825
        },
        {
            "cod": "012850",
            "arc": 9,
            "nm": "SAN DIEGO(CES)",
            "cd": 12,
            "cm": 850
        },
        {
            "cod": "012875",
            "arc": 9,
            "nm": "SAN MARTIN(CES)",
            "cd": 12,
            "cm": 875
        },
        {
            "cod": "012900",
            "arc": 9,
            "nm": "TAMALAMEQUE(CES)",
            "cd": 12,
            "cm": 900
        },
        {
            "cod": "013001",
            "arc": 9,
            "nm": "MONTERIA(COR)",
            "cd": 13,
            "cm": 1
        },
        {
            "cod": "013004",
            "arc": 9,
            "nm": "AYAPEL(COR)",
            "cd": 13,
            "cm": 4
        },
        {
            "cod": "013007",
            "arc": 9,
            "nm": "BUENAVISTA(COR)",
            "cd": 13,
            "cm": 7
        },
        {
            "cod": "013009",
            "arc": 9,
            "nm": "CANALETE(COR)",
            "cd": 13,
            "cm": 9
        },
        {
            "cod": "013010",
            "arc": 9,
            "nm": "CERETE(COR)",
            "cd": 13,
            "cm": 10
        },
        {
            "cod": "013013",
            "arc": 9,
            "nm": "CIENAGA DE ORO(COR)",
            "cd": 13,
            "cm": 13
        },
        {
            "cod": "013014",
            "arc": 9,
            "nm": "COTORRA (BONGO)(COR)",
            "cd": 13,
            "cm": 14
        },
        {
            "cod": "013016",
            "arc": 9,
            "nm": "CHIMA(COR)",
            "cd": 13,
            "cm": 16
        },
        {
            "cod": "013019",
            "arc": 9,
            "nm": "CHINU(COR)",
            "cd": 13,
            "cm": 19
        },
        {
            "cod": "013020",
            "arc": 9,
            "nm": "LA APARTADA (FRONTERA)(COR)",
            "cd": 13,
            "cm": 20
        },
        {
            "cod": "013022",
            "arc": 9,
            "nm": "LORICA(COR)",
            "cd": 13,
            "cm": 22
        },
        {
            "cod": "013023",
            "arc": 9,
            "nm": "LOS CORDOBAS(COR)",
            "cd": 13,
            "cm": 23
        },
        {
            "cod": "013024",
            "arc": 9,
            "nm": "MOMIL(COR)",
            "cd": 13,
            "cm": 24
        },
        {
            "cod": "013025",
            "arc": 9,
            "nm": "MONTELIBANO(COR)",
            "cd": 13,
            "cm": 25
        },
        {
            "cod": "013027",
            "arc": 9,
            "nm": "MOÑITOS(COR)",
            "cd": 13,
            "cm": 27
        },
        {
            "cod": "013028",
            "arc": 9,
            "nm": "PLANETA RICA(COR)",
            "cd": 13,
            "cm": 28
        },
        {
            "cod": "013031",
            "arc": 9,
            "nm": "PUEBLO NUEVO(COR)",
            "cd": 13,
            "cm": 31
        },
        {
            "cod": "013032",
            "arc": 9,
            "nm": "PUERTO LIBERTADOR(COR)",
            "cd": 13,
            "cm": 32
        },
        {
            "cod": "013033",
            "arc": 9,
            "nm": "PUERTO ESCONDIDO(COR)",
            "cd": 13,
            "cm": 33
        },
        {
            "cod": "013034",
            "arc": 9,
            "nm": "PURISIMA(COR)",
            "cd": 13,
            "cm": 34
        },
        {
            "cod": "013037",
            "arc": 9,
            "nm": "SAHAGUN(COR)",
            "cd": 13,
            "cm": 37
        },
        {
            "cod": "013040",
            "arc": 9,
            "nm": "SAN ANDRES DE SOTAVENTO(COR)",
            "cd": 13,
            "cm": 40
        },
        {
            "cod": "013043",
            "arc": 9,
            "nm": "SAN ANTERO(COR)",
            "cd": 13,
            "cm": 43
        },
        {
            "cod": "013046",
            "arc": 9,
            "nm": "SAN BERNARDO DEL VIENTO(COR)",
            "cd": 13,
            "cm": 46
        },
        {
            "cod": "013049",
            "arc": 9,
            "nm": "SAN CARLOS(COR)",
            "cd": 13,
            "cm": 49
        },
        {
            "cod": "013052",
            "arc": 9,
            "nm": "SAN JOSE DE URE(COR)",
            "cd": 13,
            "cm": 52
        },
        {
            "cod": "013055",
            "arc": 9,
            "nm": "SAN PELAYO(COR)",
            "cd": 13,
            "cm": 55
        },
        {
            "cod": "013058",
            "arc": 9,
            "nm": "TIERRALTA(COR)",
            "cd": 13,
            "cm": 58
        },
        {
            "cod": "013060",
            "arc": 9,
            "nm": "TUCHIN(COR)",
            "cd": 13,
            "cm": 60
        },
        {
            "cod": "013061",
            "arc": 9,
            "nm": "VALENCIA(COR)",
            "cd": 13,
            "cm": 61
        },
        {
            "cod": "015004",
            "arc": 9,
            "nm": "AGUA DE DIOS(CUN)",
            "cd": 15,
            "cm": 4
        },
        {
            "cod": "015007",
            "arc": 9,
            "nm": "ALBAN(CUN)",
            "cd": 15,
            "cm": 7
        },
        {
            "cod": "015010",
            "arc": 9,
            "nm": "ANAPOIMA(CUN)",
            "cd": 15,
            "cm": 10
        },
        {
            "cod": "015013",
            "arc": 9,
            "nm": "ANOLAIMA(CUN)",
            "cd": 15,
            "cm": 13
        },
        {
            "cod": "015016",
            "arc": 9,
            "nm": "ARBELAEZ(CUN)",
            "cd": 15,
            "cm": 16
        },
        {
            "cod": "015019",
            "arc": 9,
            "nm": "BELTRAN(CUN)",
            "cd": 15,
            "cm": 19
        },
        {
            "cod": "015022",
            "arc": 9,
            "nm": "BITUIMA(CUN)",
            "cd": 15,
            "cm": 22
        },
        {
            "cod": "015025",
            "arc": 9,
            "nm": "BOJACA(CUN)",
            "cd": 15,
            "cm": 25
        },
        {
            "cod": "015029",
            "arc": 9,
            "nm": "CABRERA(CUN)",
            "cd": 15,
            "cm": 29
        },
        {
            "cod": "015030",
            "arc": 10,
            "nm": "CACHIPAY(CUN)",
            "cd": 15,
            "cm": 30
        },
        {
            "cod": "015031",
            "arc": 10,
            "nm": "CAJICA(CUN)",
            "cd": 15,
            "cm": 31
        },
        {
            "cod": "015034",
            "arc": 10,
            "nm": "CAPARRAPI(CUN)",
            "cd": 15,
            "cm": 34
        },
        {
            "cod": "015037",
            "arc": 10,
            "nm": "CAQUEZA(CUN)",
            "cd": 15,
            "cm": 37
        },
        {
            "cod": "015040",
            "arc": 10,
            "nm": "CARMEN DE CARUPA(CUN)",
            "cd": 15,
            "cm": 40
        },
        {
            "cod": "015043",
            "arc": 10,
            "nm": "COGUA(CUN)",
            "cd": 15,
            "cm": 43
        },
        {
            "cod": "015046",
            "arc": 10,
            "nm": "COTA(CUN)",
            "cd": 15,
            "cm": 46
        },
        {
            "cod": "015049",
            "arc": 10,
            "nm": "CUCUNUBA(CUN)",
            "cd": 15,
            "cm": 49
        },
        {
            "cod": "015052",
            "arc": 10,
            "nm": "CHAGUANI(CUN)",
            "cd": 15,
            "cm": 52
        },
        {
            "cod": "015055",
            "arc": 10,
            "nm": "CHIA(CUN)",
            "cd": 15,
            "cm": 55
        },
        {
            "cod": "015058",
            "arc": 10,
            "nm": "CHIPAQUE(CUN)",
            "cd": 15,
            "cm": 58
        },
        {
            "cod": "015061",
            "arc": 10,
            "nm": "CHOACHI(CUN)",
            "cd": 15,
            "cm": 61
        },
        {
            "cod": "015064",
            "arc": 10,
            "nm": "CHOCONTA(CUN)",
            "cd": 15,
            "cm": 64
        },
        {
            "cod": "015067",
            "arc": 10,
            "nm": "EL COLEGIO(CUN)",
            "cd": 15,
            "cm": 67
        },
        {
            "cod": "015070",
            "arc": 10,
            "nm": "EL PEÑON(CUN)",
            "cd": 15,
            "cm": 70
        },
        {
            "cod": "015072",
            "arc": 10,
            "nm": "EL ROSAL(CUN)",
            "cd": 15,
            "cm": 72
        },
        {
            "cod": "015076",
            "arc": 10,
            "nm": "FACATATIVA(CUN)",
            "cd": 15,
            "cm": 76
        },
        {
            "cod": "015079",
            "arc": 10,
            "nm": "FOMEQUE(CUN)",
            "cd": 15,
            "cm": 79
        },
        {
            "cod": "015085",
            "arc": 10,
            "nm": "FOSCA(CUN)",
            "cd": 15,
            "cm": 85
        },
        {
            "cod": "015088",
            "arc": 10,
            "nm": "FUNZA(CUN)",
            "cd": 15,
            "cm": 88
        },
        {
            "cod": "015091",
            "arc": 10,
            "nm": "FUQUENE(CUN)",
            "cd": 15,
            "cm": 91
        },
        {
            "cod": "015094",
            "arc": 10,
            "nm": "FUSAGASUGA(CUN)",
            "cd": 15,
            "cm": 94
        },
        {
            "cod": "015097",
            "arc": 10,
            "nm": "GACHALA(CUN)",
            "cd": 15,
            "cm": 97
        },
        {
            "cod": "015100",
            "arc": 10,
            "nm": "GACHANCIPA(CUN)",
            "cd": 15,
            "cm": 100
        },
        {
            "cod": "015103",
            "arc": 10,
            "nm": "GACHETA(CUN)",
            "cd": 15,
            "cm": 103
        },
        {
            "cod": "015106",
            "arc": 10,
            "nm": "GAMA(CUN)",
            "cd": 15,
            "cm": 106
        },
        {
            "cod": "015109",
            "arc": 10,
            "nm": "GIRARDOT(CUN)",
            "cd": 15,
            "cm": 109
        },
        {
            "cod": "015112",
            "arc": 10,
            "nm": "GUACHETA(CUN)",
            "cd": 15,
            "cm": 112
        },
        {
            "cod": "015115",
            "arc": 10,
            "nm": "GUADUAS(CUN)",
            "cd": 15,
            "cm": 115
        },
        {
            "cod": "015118",
            "arc": 10,
            "nm": "GUASCA(CUN)",
            "cd": 15,
            "cm": 118
        },
        {
            "cod": "015121",
            "arc": 10,
            "nm": "GUATAQUI(CUN)",
            "cd": 15,
            "cm": 121
        },
        {
            "cod": "015124",
            "arc": 10,
            "nm": "GUATAVITA(CUN)",
            "cd": 15,
            "cm": 124
        },
        {
            "cod": "015127",
            "arc": 10,
            "nm": "GUAYABAL DE SIQUIMA(CUN)",
            "cd": 15,
            "cm": 127
        },
        {
            "cod": "015128",
            "arc": 10,
            "nm": "GUAYABETAL(CUN)",
            "cd": 15,
            "cm": 128
        },
        {
            "cod": "015130",
            "arc": 10,
            "nm": "GUTIERREZ(CUN)",
            "cd": 15,
            "cm": 130
        },
        {
            "cod": "015132",
            "arc": 10,
            "nm": "GRANADA(CUN)",
            "cd": 15,
            "cm": 132
        },
        {
            "cod": "015133",
            "arc": 10,
            "nm": "JERUSALEN(CUN)",
            "cd": 15,
            "cm": 133
        },
        {
            "cod": "015136",
            "arc": 10,
            "nm": "JUNIN(CUN)",
            "cd": 15,
            "cm": 136
        },
        {
            "cod": "015139",
            "arc": 10,
            "nm": "LA CALERA(CUN)",
            "cd": 15,
            "cm": 139
        },
        {
            "cod": "015142",
            "arc": 10,
            "nm": "LA MESA(CUN)",
            "cd": 15,
            "cm": 142
        },
        {
            "cod": "015145",
            "arc": 10,
            "nm": "LA PALMA(CUN)",
            "cd": 15,
            "cm": 145
        },
        {
            "cod": "015148",
            "arc": 10,
            "nm": "LA PEÑA(CUN)",
            "cd": 15,
            "cm": 148
        },
        {
            "cod": "015151",
            "arc": 10,
            "nm": "LA VEGA(CUN)",
            "cd": 15,
            "cm": 151
        },
        {
            "cod": "015154",
            "arc": 10,
            "nm": "LENGUAZAQUE(CUN)",
            "cd": 15,
            "cm": 154
        },
        {
            "cod": "015157",
            "arc": 10,
            "nm": "MACHETA(CUN)",
            "cd": 15,
            "cm": 157
        },
        {
            "cod": "015160",
            "arc": 10,
            "nm": "MADRID(CUN)",
            "cd": 15,
            "cm": 160
        },
        {
            "cod": "015163",
            "arc": 10,
            "nm": "MANTA(CUN)",
            "cd": 15,
            "cm": 163
        },
        {
            "cod": "015166",
            "arc": 10,
            "nm": "MEDINA(CUN)",
            "cd": 15,
            "cm": 166
        },
        {
            "cod": "015169",
            "arc": 10,
            "nm": "MOSQUERA(CUN)",
            "cd": 15,
            "cm": 169
        },
        {
            "cod": "015172",
            "arc": 10,
            "nm": "NARIÑO(CUN)",
            "cd": 15,
            "cm": 172
        },
        {
            "cod": "015175",
            "arc": 11,
            "nm": "NEMOCON(CUN)",
            "cd": 15,
            "cm": 175
        },
        {
            "cod": "015178",
            "arc": 11,
            "nm": "NILO(CUN)",
            "cd": 15,
            "cm": 178
        },
        {
            "cod": "015181",
            "arc": 11,
            "nm": "NIMAIMA(CUN)",
            "cd": 15,
            "cm": 181
        },
        {
            "cod": "015184",
            "arc": 11,
            "nm": "NOCAIMA(CUN)",
            "cd": 15,
            "cm": 184
        },
        {
            "cod": "015190",
            "arc": 11,
            "nm": "PACHO(CUN)",
            "cd": 15,
            "cm": 190
        },
        {
            "cod": "015193",
            "arc": 11,
            "nm": "PAIME(CUN)",
            "cd": 15,
            "cm": 193
        },
        {
            "cod": "015196",
            "arc": 11,
            "nm": "PANDI(CUN)",
            "cd": 15,
            "cm": 196
        },
        {
            "cod": "015198",
            "arc": 11,
            "nm": "PARATEBUENO (LA NAGUAYA)(CUN)",
            "cd": 15,
            "cm": 198
        },
        {
            "cod": "015199",
            "arc": 11,
            "nm": "PASCA(CUN)",
            "cd": 15,
            "cm": 199
        },
        {
            "cod": "015202",
            "arc": 11,
            "nm": "PUERTO SALGAR(CUN)",
            "cd": 15,
            "cm": 202
        },
        {
            "cod": "015205",
            "arc": 11,
            "nm": "PULI(CUN)",
            "cd": 15,
            "cm": 205
        },
        {
            "cod": "015208",
            "arc": 11,
            "nm": "QUEBRADANEGRA(CUN)",
            "cd": 15,
            "cm": 208
        },
        {
            "cod": "015211",
            "arc": 11,
            "nm": "QUETAME(CUN)",
            "cd": 15,
            "cm": 211
        },
        {
            "cod": "015214",
            "arc": 11,
            "nm": "QUIPILE(CUN)",
            "cd": 15,
            "cm": 214
        },
        {
            "cod": "015217",
            "arc": 11,
            "nm": "APULO(CUN)",
            "cd": 15,
            "cm": 217
        },
        {
            "cod": "015218",
            "arc": 11,
            "nm": "RICAURTE(CUN)",
            "cd": 15,
            "cm": 218
        },
        {
            "cod": "015220",
            "arc": 11,
            "nm": "SAN ANTONIO DEL TEQUENDAMA(CUN)",
            "cd": 15,
            "cm": 220
        },
        {
            "cod": "015223",
            "arc": 11,
            "nm": "SAN BERNARDO(CUN)",
            "cd": 15,
            "cm": 223
        },
        {
            "cod": "015226",
            "arc": 11,
            "nm": "SAN CAYETANO(CUN)",
            "cd": 15,
            "cm": 226
        },
        {
            "cod": "015229",
            "arc": 11,
            "nm": "SAN FRANCISCO(CUN)",
            "cd": 15,
            "cm": 229
        },
        {
            "cod": "015232",
            "arc": 11,
            "nm": "SAN JUAN DE RIOSECO(CUN)",
            "cd": 15,
            "cm": 232
        },
        {
            "cod": "015235",
            "arc": 11,
            "nm": "SASAIMA(CUN)",
            "cd": 15,
            "cm": 235
        },
        {
            "cod": "015238",
            "arc": 11,
            "nm": "SESQUILE(CUN)",
            "cd": 15,
            "cm": 238
        },
        {
            "cod": "015239",
            "arc": 11,
            "nm": "SIBATE(CUN)",
            "cd": 15,
            "cm": 239
        },
        {
            "cod": "015241",
            "arc": 11,
            "nm": "SILVANIA(CUN)",
            "cd": 15,
            "cm": 241
        },
        {
            "cod": "015244",
            "arc": 11,
            "nm": "SIMIJACA(CUN)",
            "cd": 15,
            "cm": 244
        },
        {
            "cod": "015247",
            "arc": 11,
            "nm": "SOACHA(CUN)",
            "cd": 15,
            "cm": 247
        },
        {
            "cod": "015250",
            "arc": 11,
            "nm": "SOPO(CUN)",
            "cd": 15,
            "cm": 250
        },
        {
            "cod": "015256",
            "arc": 11,
            "nm": "SUBACHOQUE(CUN)",
            "cd": 15,
            "cm": 256
        },
        {
            "cod": "015259",
            "arc": 11,
            "nm": "SUESCA(CUN)",
            "cd": 15,
            "cm": 259
        },
        {
            "cod": "015262",
            "arc": 11,
            "nm": "SUPATA(CUN)",
            "cd": 15,
            "cm": 262
        },
        {
            "cod": "015265",
            "arc": 11,
            "nm": "SUSA(CUN)",
            "cd": 15,
            "cm": 265
        },
        {
            "cod": "015268",
            "arc": 11,
            "nm": "SUTATAUSA(CUN)",
            "cd": 15,
            "cm": 268
        },
        {
            "cod": "015271",
            "arc": 11,
            "nm": "TABIO(CUN)",
            "cd": 15,
            "cm": 271
        },
        {
            "cod": "015274",
            "arc": 11,
            "nm": "TAUSA(CUN)",
            "cd": 15,
            "cm": 274
        },
        {
            "cod": "015277",
            "arc": 11,
            "nm": "TENA(CUN)",
            "cd": 15,
            "cm": 277
        },
        {
            "cod": "015280",
            "arc": 11,
            "nm": "TENJO(CUN)",
            "cd": 15,
            "cm": 280
        },
        {
            "cod": "015283",
            "arc": 11,
            "nm": "TIBACUY(CUN)",
            "cd": 15,
            "cm": 283
        },
        {
            "cod": "015286",
            "arc": 11,
            "nm": "TIBIRITA(CUN)",
            "cd": 15,
            "cm": 286
        },
        {
            "cod": "015289",
            "arc": 11,
            "nm": "TOCAIMA(CUN)",
            "cd": 15,
            "cm": 289
        },
        {
            "cod": "015292",
            "arc": 11,
            "nm": "TOCANCIPA(CUN)",
            "cd": 15,
            "cm": 292
        },
        {
            "cod": "015295",
            "arc": 11,
            "nm": "TOPAIPI(CUN)",
            "cd": 15,
            "cm": 295
        },
        {
            "cod": "015298",
            "arc": 11,
            "nm": "UBALA(CUN)",
            "cd": 15,
            "cm": 298
        },
        {
            "cod": "015301",
            "arc": 11,
            "nm": "UBAQUE(CUN)",
            "cd": 15,
            "cm": 301
        },
        {
            "cod": "015304",
            "arc": 11,
            "nm": "UBATE(CUN)",
            "cd": 15,
            "cm": 304
        },
        {
            "cod": "015307",
            "arc": 11,
            "nm": "UNE(CUN)",
            "cd": 15,
            "cm": 307
        },
        {
            "cod": "015316",
            "arc": 11,
            "nm": "UTICA(CUN)",
            "cd": 15,
            "cm": 316
        },
        {
            "cod": "015318",
            "arc": 11,
            "nm": "VENECIA(CUN)",
            "cd": 15,
            "cm": 318
        },
        {
            "cod": "015319",
            "arc": 11,
            "nm": "VERGARA(CUN)",
            "cd": 15,
            "cm": 319
        },
        {
            "cod": "015322",
            "arc": 11,
            "nm": "VIANI(CUN)",
            "cd": 15,
            "cm": 322
        },
        {
            "cod": "015323",
            "arc": 12,
            "nm": "VILLAGOMEZ(CUN)",
            "cd": 15,
            "cm": 323
        },
        {
            "cod": "015325",
            "arc": 12,
            "nm": "VILLAPINZON(CUN)",
            "cd": 15,
            "cm": 325
        },
        {
            "cod": "015328",
            "arc": 12,
            "nm": "VILLETA(CUN)",
            "cd": 15,
            "cm": 328
        },
        {
            "cod": "015331",
            "arc": 12,
            "nm": "VIOTA(CUN)",
            "cd": 15,
            "cm": 331
        },
        {
            "cod": "015334",
            "arc": 12,
            "nm": "YACOPI(CUN)",
            "cd": 15,
            "cm": 334
        },
        {
            "cod": "015337",
            "arc": 12,
            "nm": "ZIPACON(CUN)",
            "cd": 15,
            "cm": 337
        },
        {
            "cod": "015340",
            "arc": 12,
            "nm": "ZIPAQUIRA(CUN)",
            "cd": 15,
            "cm": 340
        },
        {
            "cod": "016001",
            "arc": 12,
            "nm": "BOGOTA. D.C.(BOG)",
            "cd": 16,
            "cm": 1
        },
        {
            "cod": "017001",
            "arc": 12,
            "nm": "QUIBDO(CHO)",
            "cd": 17,
            "cm": 1
        },
        {
            "cod": "017002",
            "arc": 12,
            "nm": "ATRATO (YUTO)(CHO)",
            "cd": 17,
            "cm": 2
        },
        {
            "cod": "017004",
            "arc": 12,
            "nm": "ACANDI(CHO)",
            "cd": 17,
            "cm": 4
        },
        {
            "cod": "017006",
            "arc": 12,
            "nm": "ALTO BAUDO (PIE DE PATO)(CHO)",
            "cd": 17,
            "cm": 6
        },
        {
            "cod": "017007",
            "arc": 12,
            "nm": "BAGADO(CHO)",
            "cd": 17,
            "cm": 7
        },
        {
            "cod": "017008",
            "arc": 12,
            "nm": "BAHIA SOLANO (MUTIS)(CHO)",
            "cd": 17,
            "cm": 8
        },
        {
            "cod": "017010",
            "arc": 12,
            "nm": "BAJO BAUDO (PIZARRO)(CHO)",
            "cd": 17,
            "cm": 10
        },
        {
            "cod": "017011",
            "arc": 12,
            "nm": "BOJAYA (BELLAVISTA)(CHO)",
            "cd": 17,
            "cm": 11
        },
        {
            "cod": "017012",
            "arc": 12,
            "nm": "MEDIO ATRATO (BETE)(CHO)",
            "cd": 17,
            "cm": 12
        },
        {
            "cod": "017013",
            "arc": 12,
            "nm": "CONDOTO(CHO)",
            "cd": 17,
            "cm": 13
        },
        {
            "cod": "017014",
            "arc": 12,
            "nm": "CERTEGUI(CHO)",
            "cd": 17,
            "cm": 14
        },
        {
            "cod": "017015",
            "arc": 12,
            "nm": "CARMEN DEL DARIEN(CHO)",
            "cd": 17,
            "cm": 15
        },
        {
            "cod": "017016",
            "arc": 12,
            "nm": "EL CARMEN(CHO)",
            "cd": 17,
            "cm": 16
        },
        {
            "cod": "017017",
            "arc": 12,
            "nm": "EL CANTON DEL SAN PABLO (MAN.(CHO)",
            "cd": 17,
            "cm": 17
        },
        {
            "cod": "017019",
            "arc": 12,
            "nm": "ISTMINA(CHO)",
            "cd": 17,
            "cm": 19
        },
        {
            "cod": "017022",
            "arc": 12,
            "nm": "JURADO(CHO)",
            "cd": 17,
            "cm": 22
        },
        {
            "cod": "017025",
            "arc": 12,
            "nm": "LLORO(CHO)",
            "cd": 17,
            "cm": 25
        },
        {
            "cod": "017026",
            "arc": 12,
            "nm": "MEDIO BAUDO (PUERTO MELUK)(CHO)",
            "cd": 17,
            "cm": 26
        },
        {
            "cod": "017027",
            "arc": 12,
            "nm": "MEDIO SAN JUAN(CHO)",
            "cd": 17,
            "cm": 27
        },
        {
            "cod": "017028",
            "arc": 12,
            "nm": "NOVITA(CHO)",
            "cd": 17,
            "cm": 28
        },
        {
            "cod": "017031",
            "arc": 12,
            "nm": "NUQUI(CHO)",
            "cd": 17,
            "cm": 31
        },
        {
            "cod": "017032",
            "arc": 12,
            "nm": "RIO IRO(CHO)",
            "cd": 17,
            "cm": 32
        },
        {
            "cod": "017034",
            "arc": 12,
            "nm": "RIOSUCIO(CHO)",
            "cd": 17,
            "cm": 34
        },
        {
            "cod": "017035",
            "arc": 12,
            "nm": "RIO QUITO (PAIMADO)(CHO)",
            "cd": 17,
            "cm": 35
        },
        {
            "cod": "017037",
            "arc": 12,
            "nm": "SAN JOSE DEL PALMAR(CHO)",
            "cd": 17,
            "cm": 37
        },
        {
            "cod": "017038",
            "arc": 12,
            "nm": "EL LITORAL DEL SAN JUAN(CHO)",
            "cd": 17,
            "cm": 38
        },
        {
            "cod": "017040",
            "arc": 12,
            "nm": "SIPI(CHO)",
            "cd": 17,
            "cm": 40
        },
        {
            "cod": "017043",
            "arc": 12,
            "nm": "TADO(CHO)",
            "cd": 17,
            "cm": 43
        },
        {
            "cod": "017048",
            "arc": 12,
            "nm": "UNGUIA(CHO)",
            "cd": 17,
            "cm": 48
        },
        {
            "cod": "017060",
            "arc": 12,
            "nm": "UNION PANAMERICANA (LAS ANIMAS(CHO)",
            "cd": 17,
            "cm": 60
        },
        {
            "cod": "019001",
            "arc": 12,
            "nm": "NEIVA(HUI)",
            "cd": 19,
            "cm": 1
        },
        {
            "cod": "019004",
            "arc": 12,
            "nm": "ACEVEDO(HUI)",
            "cd": 19,
            "cm": 4
        },
        {
            "cod": "019007",
            "arc": 12,
            "nm": "AGRADO(HUI)",
            "cd": 19,
            "cm": 7
        },
        {
            "cod": "019010",
            "arc": 12,
            "nm": "AIPE(HUI)",
            "cd": 19,
            "cm": 10
        },
        {
            "cod": "019013",
            "arc": 12,
            "nm": "ALGECIRAS(HUI)",
            "cd": 19,
            "cm": 13
        },
        {
            "cod": "019016",
            "arc": 12,
            "nm": "ALTAMIRA(HUI)",
            "cd": 19,
            "cm": 16
        },
        {
            "cod": "019019",
            "arc": 12,
            "nm": "BARAYA(HUI)",
            "cd": 19,
            "cm": 19
        },
        {
            "cod": "019022",
            "arc": 12,
            "nm": "CAMPOALEGRE(HUI)",
            "cd": 19,
            "cm": 22
        },
        {
            "cod": "019025",
            "arc": 12,
            "nm": "TESALIA (CARNICERIAS)(HUI)",
            "cd": 19,
            "cm": 25
        },
        {
            "cod": "019028",
            "arc": 12,
            "nm": "COLOMBIA(HUI)",
            "cd": 19,
            "cm": 28
        },
        {
            "cod": "019031",
            "arc": 12,
            "nm": "ELIAS(HUI)",
            "cd": 19,
            "cm": 31
        },
        {
            "cod": "019034",
            "arc": 12,
            "nm": "GARZON(HUI)",
            "cd": 19,
            "cm": 34
        },
        {
            "cod": "019037",
            "arc": 13,
            "nm": "GIGANTE(HUI)",
            "cd": 19,
            "cm": 37
        },
        {
            "cod": "019040",
            "arc": 13,
            "nm": "GUADALUPE(HUI)",
            "cd": 19,
            "cm": 40
        },
        {
            "cod": "019043",
            "arc": 13,
            "nm": "HOBO(HUI)",
            "cd": 19,
            "cm": 43
        },
        {
            "cod": "019044",
            "arc": 13,
            "nm": "ISNOS(HUI)",
            "cd": 19,
            "cm": 44
        },
        {
            "cod": "019046",
            "arc": 13,
            "nm": "IQUIRA(HUI)",
            "cd": 19,
            "cm": 46
        },
        {
            "cod": "019047",
            "arc": 13,
            "nm": "LA ARGENTINA (PLATA VIEJA)(HUI)",
            "cd": 19,
            "cm": 47
        },
        {
            "cod": "019049",
            "arc": 13,
            "nm": "LA PLATA(HUI)",
            "cd": 19,
            "cm": 49
        },
        {
            "cod": "019050",
            "arc": 13,
            "nm": "NATAGA(HUI)",
            "cd": 19,
            "cm": 50
        },
        {
            "cod": "019051",
            "arc": 13,
            "nm": "OPORAPA(HUI)",
            "cd": 19,
            "cm": 51
        },
        {
            "cod": "019052",
            "arc": 13,
            "nm": "PAICOL(HUI)",
            "cd": 19,
            "cm": 52
        },
        {
            "cod": "019055",
            "arc": 13,
            "nm": "PALERMO(HUI)",
            "cd": 19,
            "cm": 55
        },
        {
            "cod": "019056",
            "arc": 13,
            "nm": "PALESTINA(HUI)",
            "cd": 19,
            "cm": 56
        },
        {
            "cod": "019058",
            "arc": 13,
            "nm": "PITAL(HUI)",
            "cd": 19,
            "cm": 58
        },
        {
            "cod": "019061",
            "arc": 13,
            "nm": "PITALITO(HUI)",
            "cd": 19,
            "cm": 61
        },
        {
            "cod": "019064",
            "arc": 13,
            "nm": "RIVERA(HUI)",
            "cd": 19,
            "cm": 64
        },
        {
            "cod": "019067",
            "arc": 13,
            "nm": "SALADOBLANCO(HUI)",
            "cd": 19,
            "cm": 67
        },
        {
            "cod": "019070",
            "arc": 13,
            "nm": "SAN AGUSTIN(HUI)",
            "cd": 19,
            "cm": 70
        },
        {
            "cod": "019074",
            "arc": 13,
            "nm": "SANTA MARIA(HUI)",
            "cd": 19,
            "cm": 74
        },
        {
            "cod": "019076",
            "arc": 13,
            "nm": "SUAZA(HUI)",
            "cd": 19,
            "cm": 76
        },
        {
            "cod": "019079",
            "arc": 13,
            "nm": "TARQUI(HUI)",
            "cd": 19,
            "cm": 79
        },
        {
            "cod": "019082",
            "arc": 13,
            "nm": "TELLO(HUI)",
            "cd": 19,
            "cm": 82
        },
        {
            "cod": "019085",
            "arc": 13,
            "nm": "TERUEL(HUI)",
            "cd": 19,
            "cm": 85
        },
        {
            "cod": "019088",
            "arc": 13,
            "nm": "TIMANA(HUI)",
            "cd": 19,
            "cm": 88
        },
        {
            "cod": "019091",
            "arc": 13,
            "nm": "VILLAVIEJA(HUI)",
            "cd": 19,
            "cm": 91
        },
        {
            "cod": "019094",
            "arc": 13,
            "nm": "YAGUARA(HUI)",
            "cd": 19,
            "cm": 94
        },
        {
            "cod": "021001",
            "arc": 13,
            "nm": "SANTA MARTA(MAG)",
            "cd": 21,
            "cm": 1
        },
        {
            "cod": "021008",
            "arc": 13,
            "nm": "ALGARROBO(MAG)",
            "cd": 21,
            "cm": 8
        },
        {
            "cod": "021010",
            "arc": 13,
            "nm": "ARACATACA(MAG)",
            "cd": 21,
            "cm": 10
        },
        {
            "cod": "021012",
            "arc": 13,
            "nm": "ARIGUANI (EL DIFICIL)(MAG)",
            "cd": 21,
            "cm": 12
        },
        {
            "cod": "021013",
            "arc": 13,
            "nm": "CERRO DE SAN ANTONIO(MAG)",
            "cd": 21,
            "cm": 13
        },
        {
            "cod": "021015",
            "arc": 13,
            "nm": "CHIVOLO(MAG)",
            "cd": 21,
            "cm": 15
        },
        {
            "cod": "021016",
            "arc": 13,
            "nm": "CIENAGA(MAG)",
            "cd": 21,
            "cm": 16
        },
        {
            "cod": "021020",
            "arc": 13,
            "nm": "CONCORDIA(MAG)",
            "cd": 21,
            "cm": 20
        },
        {
            "cod": "021025",
            "arc": 13,
            "nm": "EL BANCO(MAG)",
            "cd": 21,
            "cm": 25
        },
        {
            "cod": "021028",
            "arc": 13,
            "nm": "EL PIÑON(MAG)",
            "cd": 21,
            "cm": 28
        },
        {
            "cod": "021030",
            "arc": 13,
            "nm": "EL RETEN(MAG)",
            "cd": 21,
            "cm": 30
        },
        {
            "cod": "021031",
            "arc": 13,
            "nm": "FUNDACION(MAG)",
            "cd": 21,
            "cm": 31
        },
        {
            "cod": "021040",
            "arc": 13,
            "nm": "GUAMAL(MAG)",
            "cd": 21,
            "cm": 40
        },
        {
            "cod": "021042",
            "arc": 13,
            "nm": "NUEVA GRANADA(MAG)",
            "cd": 21,
            "cm": 42
        },
        {
            "cod": "021046",
            "arc": 13,
            "nm": "PEDRAZA(MAG)",
            "cd": 21,
            "cm": 46
        },
        {
            "cod": "021048",
            "arc": 13,
            "nm": "PIJIÑO DEL CARMEN(MAG)",
            "cd": 21,
            "cm": 48
        },
        {
            "cod": "021049",
            "arc": 13,
            "nm": "PIVIJAY(MAG)",
            "cd": 21,
            "cm": 49
        },
        {
            "cod": "021052",
            "arc": 13,
            "nm": "PLATO(MAG)",
            "cd": 21,
            "cm": 52
        },
        {
            "cod": "021055",
            "arc": 13,
            "nm": "PUEBLOVIEJO(MAG)",
            "cd": 21,
            "cm": 55
        },
        {
            "cod": "021058",
            "arc": 13,
            "nm": "REMOLINO(MAG)",
            "cd": 21,
            "cm": 58
        },
        {
            "cod": "021060",
            "arc": 13,
            "nm": "SABANAS DE SAN ANGEL(MAG)",
            "cd": 21,
            "cm": 60
        },
        {
            "cod": "021067",
            "arc": 13,
            "nm": "SALAMINA(MAG)",
            "cd": 21,
            "cm": 67
        },
        {
            "cod": "021070",
            "arc": 13,
            "nm": "SAN SEBASTIAN DE BUENAVISTA(MAG)",
            "cd": 21,
            "cm": 70
        },
        {
            "cod": "021073",
            "arc": 13,
            "nm": "SAN ZENON(MAG)",
            "cd": 21,
            "cm": 73
        },
        {
            "cod": "021076",
            "arc": 13,
            "nm": "SANTA ANA(MAG)",
            "cd": 21,
            "cm": 76
        },
        {
            "cod": "021078",
            "arc": 14,
            "nm": "SANTA BARBARA DE PINTO(MAG)",
            "cd": 21,
            "cm": 78
        },
        {
            "cod": "021079",
            "arc": 14,
            "nm": "SITIONUEVO(MAG)",
            "cd": 21,
            "cm": 79
        },
        {
            "cod": "021085",
            "arc": 14,
            "nm": "TENERIFE(MAG)",
            "cd": 21,
            "cm": 85
        },
        {
            "cod": "021090",
            "arc": 14,
            "nm": "ZAPAYAN(MAG)",
            "cd": 21,
            "cm": 90
        },
        {
            "cod": "021095",
            "arc": 14,
            "nm": "ZONA BANANERA (SEVILLA)(MAG)",
            "cd": 21,
            "cm": 95
        },
        {
            "cod": "023001",
            "arc": 14,
            "nm": "PASTO(NAR)",
            "cd": 23,
            "cm": 1
        },
        {
            "cod": "023004",
            "arc": 14,
            "nm": "ALBAN (SAN JOSE)(NAR)",
            "cd": 23,
            "cm": 4
        },
        {
            "cod": "023007",
            "arc": 14,
            "nm": "ALDANA(NAR)",
            "cd": 23,
            "cm": 7
        },
        {
            "cod": "023010",
            "arc": 14,
            "nm": "ANCUYA(NAR)",
            "cd": 23,
            "cm": 10
        },
        {
            "cod": "023013",
            "arc": 14,
            "nm": "ARBOLEDA (BERRUECOS)(NAR)",
            "cd": 23,
            "cm": 13
        },
        {
            "cod": "023016",
            "arc": 14,
            "nm": "BARBACOAS(NAR)",
            "cd": 23,
            "cm": 16
        },
        {
            "cod": "023017",
            "arc": 14,
            "nm": "BELEN(NAR)",
            "cd": 23,
            "cm": 17
        },
        {
            "cod": "023019",
            "arc": 14,
            "nm": "BUESACO(NAR)",
            "cd": 23,
            "cm": 19
        },
        {
            "cod": "023022",
            "arc": 14,
            "nm": "COLON (GENOVA)(NAR)",
            "cd": 23,
            "cm": 22
        },
        {
            "cod": "023025",
            "arc": 14,
            "nm": "CONSACA(NAR)",
            "cd": 23,
            "cm": 25
        },
        {
            "cod": "023028",
            "arc": 14,
            "nm": "CONTADERO(NAR)",
            "cd": 23,
            "cm": 28
        },
        {
            "cod": "023031",
            "arc": 14,
            "nm": "CORDOBA(NAR)",
            "cd": 23,
            "cm": 31
        },
        {
            "cod": "023034",
            "arc": 14,
            "nm": "CUASPUD (CARLOSAMA)(NAR)",
            "cd": 23,
            "cm": 34
        },
        {
            "cod": "023037",
            "arc": 14,
            "nm": "CUMBAL(NAR)",
            "cd": 23,
            "cm": 37
        },
        {
            "cod": "023038",
            "arc": 14,
            "nm": "CHACHAGUI(NAR)",
            "cd": 23,
            "cm": 38
        },
        {
            "cod": "023039",
            "arc": 14,
            "nm": "CUMBITARA(NAR)",
            "cd": 23,
            "cm": 39
        },
        {
            "cod": "023040",
            "arc": 14,
            "nm": "EL ROSARIO(NAR)",
            "cd": 23,
            "cm": 40
        },
        {
            "cod": "023041",
            "arc": 14,
            "nm": "EL CHARCO(NAR)",
            "cd": 23,
            "cm": 41
        },
        {
            "cod": "023043",
            "arc": 14,
            "nm": "EL TABLON(NAR)",
            "cd": 23,
            "cm": 43
        },
        {
            "cod": "023044",
            "arc": 14,
            "nm": "EL PEÑOL(NAR)",
            "cd": 23,
            "cm": 44
        },
        {
            "cod": "023046",
            "arc": 14,
            "nm": "EL TAMBO(NAR)",
            "cd": 23,
            "cm": 46
        },
        {
            "cod": "023047",
            "arc": 14,
            "nm": "FRANCISCO PIZARRO (SALAHONDA)(NAR)",
            "cd": 23,
            "cm": 47
        },
        {
            "cod": "023049",
            "arc": 14,
            "nm": "FUNES(NAR)",
            "cd": 23,
            "cm": 49
        },
        {
            "cod": "023052",
            "arc": 14,
            "nm": "GUACHUCAL(NAR)",
            "cd": 23,
            "cm": 52
        },
        {
            "cod": "023055",
            "arc": 14,
            "nm": "GUAITARILLA(NAR)",
            "cd": 23,
            "cm": 55
        },
        {
            "cod": "023058",
            "arc": 14,
            "nm": "GUALMATAN(NAR)",
            "cd": 23,
            "cm": 58
        },
        {
            "cod": "023061",
            "arc": 14,
            "nm": "ILES(NAR)",
            "cd": 23,
            "cm": 61
        },
        {
            "cod": "023064",
            "arc": 14,
            "nm": "IMUES(NAR)",
            "cd": 23,
            "cm": 64
        },
        {
            "cod": "023067",
            "arc": 14,
            "nm": "IPIALES(NAR)",
            "cd": 23,
            "cm": 67
        },
        {
            "cod": "023073",
            "arc": 14,
            "nm": "LA CRUZ(NAR)",
            "cd": 23,
            "cm": 73
        },
        {
            "cod": "023076",
            "arc": 14,
            "nm": "LA FLORIDA(NAR)",
            "cd": 23,
            "cm": 76
        },
        {
            "cod": "023077",
            "arc": 14,
            "nm": "LA LLANADA(NAR)",
            "cd": 23,
            "cm": 77
        },
        {
            "cod": "023078",
            "arc": 14,
            "nm": "LA TOLA(NAR)",
            "cd": 23,
            "cm": 78
        },
        {
            "cod": "023079",
            "arc": 14,
            "nm": "LA UNION(NAR)",
            "cd": 23,
            "cm": 79
        },
        {
            "cod": "023080",
            "arc": 14,
            "nm": "LEIVA(NAR)",
            "cd": 23,
            "cm": 80
        },
        {
            "cod": "023082",
            "arc": 14,
            "nm": "LINARES(NAR)",
            "cd": 23,
            "cm": 82
        },
        {
            "cod": "023085",
            "arc": 14,
            "nm": "LOS ANDES (SOTOMAYOR)(NAR)",
            "cd": 23,
            "cm": 85
        },
        {
            "cod": "023088",
            "arc": 14,
            "nm": "MAGUI (PAYAN)(NAR)",
            "cd": 23,
            "cm": 88
        },
        {
            "cod": "023091",
            "arc": 14,
            "nm": "MALLAMA (PIEDRANCHA)(NAR)",
            "cd": 23,
            "cm": 91
        },
        {
            "cod": "023094",
            "arc": 14,
            "nm": "MOSQUERA(NAR)",
            "cd": 23,
            "cm": 94
        },
        {
            "cod": "023095",
            "arc": 14,
            "nm": "OLAYA HERRERA(NAR)",
            "cd": 23,
            "cm": 95
        },
        {
            "cod": "023096",
            "arc": 14,
            "nm": "NARIÑO(NAR)",
            "cd": 23,
            "cm": 96
        },
        {
            "cod": "023097",
            "arc": 14,
            "nm": "OSPINA(NAR)",
            "cd": 23,
            "cm": 97
        },
        {
            "cod": "023098",
            "arc": 14,
            "nm": "POLICARPA(NAR)",
            "cd": 23,
            "cm": 98
        },
        {
            "cod": "023100",
            "arc": 14,
            "nm": "POTOSI(NAR)",
            "cd": 23,
            "cm": 100
        },
        {
            "cod": "023101",
            "arc": 15,
            "nm": "PROVIDENCIA(NAR)",
            "cd": 23,
            "cm": 101
        },
        {
            "cod": "023103",
            "arc": 15,
            "nm": "PUERRES(NAR)",
            "cd": 23,
            "cm": 103
        },
        {
            "cod": "023106",
            "arc": 15,
            "nm": "PUPIALES(NAR)",
            "cd": 23,
            "cm": 106
        },
        {
            "cod": "023109",
            "arc": 15,
            "nm": "RICAURTE(NAR)",
            "cd": 23,
            "cm": 109
        },
        {
            "cod": "023112",
            "arc": 15,
            "nm": "ROBERTO PAYAN (SAN JOSE)(NAR)",
            "cd": 23,
            "cm": 112
        },
        {
            "cod": "023115",
            "arc": 15,
            "nm": "SAMANIEGO(NAR)",
            "cd": 23,
            "cm": 115
        },
        {
            "cod": "023118",
            "arc": 15,
            "nm": "SANDONA(NAR)",
            "cd": 23,
            "cm": 118
        },
        {
            "cod": "023120",
            "arc": 15,
            "nm": "SAN BERNARDO(NAR)",
            "cd": 23,
            "cm": 120
        },
        {
            "cod": "023121",
            "arc": 15,
            "nm": "SAN LORENZO(NAR)",
            "cd": 23,
            "cm": 121
        },
        {
            "cod": "023123",
            "arc": 15,
            "nm": "SAN PEDRO DE CARTAGO(NAR)",
            "cd": 23,
            "cm": 123
        },
        {
            "cod": "023124",
            "arc": 15,
            "nm": "SAN PABLO(NAR)",
            "cd": 23,
            "cm": 124
        },
        {
            "cod": "023125",
            "arc": 15,
            "nm": "SANTA BARBARA (ISCUANDE)(NAR)",
            "cd": 23,
            "cm": 125
        },
        {
            "cod": "023127",
            "arc": 15,
            "nm": "SANTACRUZ (GUACHAVES)(NAR)",
            "cd": 23,
            "cm": 127
        },
        {
            "cod": "023130",
            "arc": 15,
            "nm": "SAPUYES(NAR)",
            "cd": 23,
            "cm": 130
        },
        {
            "cod": "023133",
            "arc": 15,
            "nm": "TAMINANGO(NAR)",
            "cd": 23,
            "cm": 133
        },
        {
            "cod": "023136",
            "arc": 15,
            "nm": "TANGUA(NAR)",
            "cd": 23,
            "cm": 136
        },
        {
            "cod": "023139",
            "arc": 15,
            "nm": "TUMACO(NAR)",
            "cd": 23,
            "cm": 139
        },
        {
            "cod": "023142",
            "arc": 15,
            "nm": "TUQUERRES(NAR)",
            "cd": 23,
            "cm": 142
        },
        {
            "cod": "023145",
            "arc": 15,
            "nm": "YACUANQUER(NAR)",
            "cd": 23,
            "cm": 145
        },
        {
            "cod": "024001",
            "arc": 15,
            "nm": "PEREIRA(RIS)",
            "cd": 24,
            "cm": 1
        },
        {
            "cod": "024008",
            "arc": 15,
            "nm": "APIA(RIS)",
            "cd": 24,
            "cm": 8
        },
        {
            "cod": "024013",
            "arc": 15,
            "nm": "BALBOA(RIS)",
            "cd": 24,
            "cm": 13
        },
        {
            "cod": "024021",
            "arc": 15,
            "nm": "BELEN DE UMBRIA(RIS)",
            "cd": 24,
            "cm": 21
        },
        {
            "cod": "024025",
            "arc": 15,
            "nm": "DOSQUEBRADAS(RIS)",
            "cd": 24,
            "cm": 25
        },
        {
            "cod": "024029",
            "arc": 15,
            "nm": "GUATICA(RIS)",
            "cd": 24,
            "cm": 29
        },
        {
            "cod": "024038",
            "arc": 15,
            "nm": "LA CELIA(RIS)",
            "cd": 24,
            "cm": 38
        },
        {
            "cod": "024046",
            "arc": 15,
            "nm": "LA VIRGINIA(RIS)",
            "cd": 24,
            "cm": 46
        },
        {
            "cod": "024054",
            "arc": 15,
            "nm": "MARSELLA(RIS)",
            "cd": 24,
            "cm": 54
        },
        {
            "cod": "024062",
            "arc": 15,
            "nm": "MISTRATO(RIS)",
            "cd": 24,
            "cm": 62
        },
        {
            "cod": "024070",
            "arc": 15,
            "nm": "PUEBLO RICO(RIS)",
            "cd": 24,
            "cm": 70
        },
        {
            "cod": "024078",
            "arc": 15,
            "nm": "QUINCHIA(RIS)",
            "cd": 24,
            "cm": 78
        },
        {
            "cod": "024086",
            "arc": 15,
            "nm": "SANTA ROSA DE CABAL(RIS)",
            "cd": 24,
            "cm": 86
        },
        {
            "cod": "024094",
            "arc": 15,
            "nm": "SANTUARIO(RIS)",
            "cd": 24,
            "cm": 94
        },
        {
            "cod": "025001",
            "arc": 15,
            "nm": "CUCUTA(NOR)",
            "cd": 25,
            "cm": 1
        },
        {
            "cod": "025004",
            "arc": 15,
            "nm": "ABREGO(NOR)",
            "cd": 25,
            "cm": 4
        },
        {
            "cod": "025007",
            "arc": 15,
            "nm": "ARBOLEDAS(NOR)",
            "cd": 25,
            "cm": 7
        },
        {
            "cod": "025010",
            "arc": 15,
            "nm": "BOCHALEMA(NOR)",
            "cd": 25,
            "cm": 10
        },
        {
            "cod": "025013",
            "arc": 15,
            "nm": "BUCARASICA(NOR)",
            "cd": 25,
            "cm": 13
        },
        {
            "cod": "025016",
            "arc": 15,
            "nm": "CACOTA(NOR)",
            "cd": 25,
            "cm": 16
        },
        {
            "cod": "025019",
            "arc": 15,
            "nm": "CACHIRA(NOR)",
            "cd": 25,
            "cm": 19
        },
        {
            "cod": "025022",
            "arc": 15,
            "nm": "CONVENCION(NOR)",
            "cd": 25,
            "cm": 22
        },
        {
            "cod": "025025",
            "arc": 15,
            "nm": "CUCUTILLA(NOR)",
            "cd": 25,
            "cm": 25
        },
        {
            "cod": "025028",
            "arc": 15,
            "nm": "CHINACOTA(NOR)",
            "cd": 25,
            "cm": 28
        },
        {
            "cod": "025031",
            "arc": 15,
            "nm": "CHITAGA(NOR)",
            "cd": 25,
            "cm": 31
        },
        {
            "cod": "025034",
            "arc": 15,
            "nm": "DURANIA(NOR)",
            "cd": 25,
            "cm": 34
        },
        {
            "cod": "025036",
            "arc": 15,
            "nm": "EL TARRA(NOR)",
            "cd": 25,
            "cm": 36
        },
        {
            "cod": "025037",
            "arc": 15,
            "nm": "EL CARMEN(NOR)",
            "cd": 25,
            "cm": 37
        },
        {
            "cod": "025038",
            "arc": 15,
            "nm": "EL ZULIA(NOR)",
            "cd": 25,
            "cm": 38
        },
        {
            "cod": "025040",
            "arc": 15,
            "nm": "GRAMALOTE(NOR)",
            "cd": 25,
            "cm": 40
        },
        {
            "cod": "025043",
            "arc": 15,
            "nm": "HACARI(NOR)",
            "cd": 25,
            "cm": 43
        },
        {
            "cod": "025046",
            "arc": 16,
            "nm": "HERRAN(NOR)",
            "cd": 25,
            "cm": 46
        },
        {
            "cod": "025049",
            "arc": 16,
            "nm": "LABATECA(NOR)",
            "cd": 25,
            "cm": 49
        },
        {
            "cod": "025051",
            "arc": 16,
            "nm": "LA ESPERANZA(NOR)",
            "cd": 25,
            "cm": 51
        },
        {
            "cod": "025052",
            "arc": 16,
            "nm": "LA PLAYA(NOR)",
            "cd": 25,
            "cm": 52
        },
        {
            "cod": "025054",
            "arc": 16,
            "nm": "LOS PATIOS(NOR)",
            "cd": 25,
            "cm": 54
        },
        {
            "cod": "025055",
            "arc": 16,
            "nm": "LOURDES(NOR)",
            "cd": 25,
            "cm": 55
        },
        {
            "cod": "025058",
            "arc": 16,
            "nm": "MUTISCUA(NOR)",
            "cd": 25,
            "cm": 58
        },
        {
            "cod": "025061",
            "arc": 16,
            "nm": "OCAÑA(NOR)",
            "cd": 25,
            "cm": 61
        },
        {
            "cod": "025064",
            "arc": 16,
            "nm": "PAMPLONA(NOR)",
            "cd": 25,
            "cm": 64
        },
        {
            "cod": "025067",
            "arc": 16,
            "nm": "PAMPLONITA(NOR)",
            "cd": 25,
            "cm": 67
        },
        {
            "cod": "025069",
            "arc": 16,
            "nm": "PUERTO SANTANDER(NOR)",
            "cd": 25,
            "cm": 69
        },
        {
            "cod": "025070",
            "arc": 16,
            "nm": "RAGONVALIA(NOR)",
            "cd": 25,
            "cm": 70
        },
        {
            "cod": "025073",
            "arc": 16,
            "nm": "SALAZAR(NOR)",
            "cd": 25,
            "cm": 73
        },
        {
            "cod": "025076",
            "arc": 16,
            "nm": "SAN CALIXTO(NOR)",
            "cd": 25,
            "cm": 76
        },
        {
            "cod": "025079",
            "arc": 16,
            "nm": "SAN CAYETANO(NOR)",
            "cd": 25,
            "cm": 79
        },
        {
            "cod": "025082",
            "arc": 16,
            "nm": "SANTIAGO(NOR)",
            "cd": 25,
            "cm": 82
        },
        {
            "cod": "025085",
            "arc": 16,
            "nm": "SARDINATA(NOR)",
            "cd": 25,
            "cm": 85
        },
        {
            "cod": "025088",
            "arc": 16,
            "nm": "SILOS(NOR)",
            "cd": 25,
            "cm": 88
        },
        {
            "cod": "025091",
            "arc": 16,
            "nm": "TEORAMA(NOR)",
            "cd": 25,
            "cm": 91
        },
        {
            "cod": "025093",
            "arc": 16,
            "nm": "TIBU(NOR)",
            "cd": 25,
            "cm": 93
        },
        {
            "cod": "025094",
            "arc": 16,
            "nm": "TOLEDO(NOR)",
            "cd": 25,
            "cm": 94
        },
        {
            "cod": "025097",
            "arc": 16,
            "nm": "VILLA CARO(NOR)",
            "cd": 25,
            "cm": 97
        },
        {
            "cod": "025100",
            "arc": 16,
            "nm": "VILLA DEL ROSARIO(NOR)",
            "cd": 25,
            "cm": 100
        },
        {
            "cod": "026001",
            "arc": 16,
            "nm": "ARMENIA(QUI)",
            "cd": 26,
            "cm": 1
        },
        {
            "cod": "026005",
            "arc": 16,
            "nm": "BUENAVISTA(QUI)",
            "cd": 26,
            "cm": 5
        },
        {
            "cod": "026010",
            "arc": 16,
            "nm": "CALARCA(QUI)",
            "cd": 26,
            "cm": 10
        },
        {
            "cod": "026020",
            "arc": 16,
            "nm": "CIRCASIA(QUI)",
            "cd": 26,
            "cm": 20
        },
        {
            "cod": "026025",
            "arc": 16,
            "nm": "CORDOBA(QUI)",
            "cd": 26,
            "cm": 25
        },
        {
            "cod": "026030",
            "arc": 16,
            "nm": "FILANDIA(QUI)",
            "cd": 26,
            "cm": 30
        },
        {
            "cod": "026040",
            "arc": 16,
            "nm": "GENOVA(QUI)",
            "cd": 26,
            "cm": 40
        },
        {
            "cod": "026050",
            "arc": 16,
            "nm": "LA TEBAIDA(QUI)",
            "cd": 26,
            "cm": 50
        },
        {
            "cod": "026060",
            "arc": 16,
            "nm": "MONTENEGRO(QUI)",
            "cd": 26,
            "cm": 60
        },
        {
            "cod": "026070",
            "arc": 16,
            "nm": "PIJAO(QUI)",
            "cd": 26,
            "cm": 70
        },
        {
            "cod": "026080",
            "arc": 16,
            "nm": "QUIMBAYA(QUI)",
            "cd": 26,
            "cm": 80
        },
        {
            "cod": "026090",
            "arc": 16,
            "nm": "SALENTO(QUI)",
            "cd": 26,
            "cm": 90
        },
        {
            "cod": "027001",
            "arc": 16,
            "nm": "BUCARAMANGA(SAN)",
            "cd": 27,
            "cm": 1
        },
        {
            "cod": "027004",
            "arc": 16,
            "nm": "AGUADA(SAN)",
            "cd": 27,
            "cm": 4
        },
        {
            "cod": "027007",
            "arc": 16,
            "nm": "ALBANIA(SAN)",
            "cd": 27,
            "cm": 7
        },
        {
            "cod": "027010",
            "arc": 16,
            "nm": "ARATOCA(SAN)",
            "cd": 27,
            "cm": 10
        },
        {
            "cod": "027013",
            "arc": 16,
            "nm": "BARBOSA(SAN)",
            "cd": 27,
            "cm": 13
        },
        {
            "cod": "027016",
            "arc": 16,
            "nm": "BARICHARA(SAN)",
            "cd": 27,
            "cm": 16
        },
        {
            "cod": "027019",
            "arc": 16,
            "nm": "BARRANCABERMEJA(SAN)",
            "cd": 27,
            "cm": 19
        },
        {
            "cod": "027022",
            "arc": 16,
            "nm": "BETULIA(SAN)",
            "cd": 27,
            "cm": 22
        },
        {
            "cod": "027025",
            "arc": 16,
            "nm": "BOLIVAR(SAN)",
            "cd": 27,
            "cm": 25
        },
        {
            "cod": "027028",
            "arc": 16,
            "nm": "CABRERA(SAN)",
            "cd": 27,
            "cm": 28
        },
        {
            "cod": "027031",
            "arc": 16,
            "nm": "CALIFORNIA(SAN)",
            "cd": 27,
            "cm": 31
        },
        {
            "cod": "027034",
            "arc": 16,
            "nm": "CAPITANEJO(SAN)",
            "cd": 27,
            "cm": 34
        },
        {
            "cod": "027037",
            "arc": 16,
            "nm": "CARCASI(SAN)",
            "cd": 27,
            "cm": 37
        },
        {
            "cod": "027040",
            "arc": 16,
            "nm": "CEPITA(SAN)",
            "cd": 27,
            "cm": 40
        },
        {
            "cod": "027043",
            "arc": 16,
            "nm": "CERRITO(SAN)",
            "cd": 27,
            "cm": 43
        },
        {
            "cod": "027045",
            "arc": 17,
            "nm": "CIMITARRA(SAN)",
            "cd": 27,
            "cm": 45
        },
        {
            "cod": "027046",
            "arc": 17,
            "nm": "CONCEPCION(SAN)",
            "cd": 27,
            "cm": 46
        },
        {
            "cod": "027049",
            "arc": 17,
            "nm": "CONFINES(SAN)",
            "cd": 27,
            "cm": 49
        },
        {
            "cod": "027052",
            "arc": 17,
            "nm": "CONTRATACION(SAN)",
            "cd": 27,
            "cm": 52
        },
        {
            "cod": "027055",
            "arc": 17,
            "nm": "COROMORO(SAN)",
            "cd": 27,
            "cm": 55
        },
        {
            "cod": "027058",
            "arc": 17,
            "nm": "CURITI(SAN)",
            "cd": 27,
            "cm": 58
        },
        {
            "cod": "027061",
            "arc": 17,
            "nm": "CHARALA(SAN)",
            "cd": 27,
            "cm": 61
        },
        {
            "cod": "027064",
            "arc": 17,
            "nm": "CHARTA(SAN)",
            "cd": 27,
            "cm": 64
        },
        {
            "cod": "027067",
            "arc": 17,
            "nm": "CHIMA(SAN)",
            "cd": 27,
            "cm": 67
        },
        {
            "cod": "027070",
            "arc": 17,
            "nm": "CHIPATA(SAN)",
            "cd": 27,
            "cm": 70
        },
        {
            "cod": "027071",
            "arc": 17,
            "nm": "EL CARMEN(SAN)",
            "cd": 27,
            "cm": 71
        },
        {
            "cod": "027073",
            "arc": 17,
            "nm": "EL GUACAMAYO(SAN)",
            "cd": 27,
            "cm": 73
        },
        {
            "cod": "027074",
            "arc": 17,
            "nm": "EL PLAYON(SAN)",
            "cd": 27,
            "cm": 74
        },
        {
            "cod": "027075",
            "arc": 17,
            "nm": "EL PEÑON(SAN)",
            "cd": 27,
            "cm": 75
        },
        {
            "cod": "027076",
            "arc": 17,
            "nm": "ENCINO(SAN)",
            "cd": 27,
            "cm": 76
        },
        {
            "cod": "027079",
            "arc": 17,
            "nm": "ENCISO(SAN)",
            "cd": 27,
            "cm": 79
        },
        {
            "cod": "027080",
            "arc": 17,
            "nm": "FLORIAN(SAN)",
            "cd": 27,
            "cm": 80
        },
        {
            "cod": "027082",
            "arc": 17,
            "nm": "FLORIDABLANCA(SAN)",
            "cd": 27,
            "cm": 82
        },
        {
            "cod": "027085",
            "arc": 17,
            "nm": "GALAN(SAN)",
            "cd": 27,
            "cm": 85
        },
        {
            "cod": "027088",
            "arc": 17,
            "nm": "GAMBITA(SAN)",
            "cd": 27,
            "cm": 88
        },
        {
            "cod": "027091",
            "arc": 17,
            "nm": "GIRON(SAN)",
            "cd": 27,
            "cm": 91
        },
        {
            "cod": "027094",
            "arc": 17,
            "nm": "GUACA(SAN)",
            "cd": 27,
            "cm": 94
        },
        {
            "cod": "027097",
            "arc": 17,
            "nm": "GUADALUPE(SAN)",
            "cd": 27,
            "cm": 97
        },
        {
            "cod": "027100",
            "arc": 17,
            "nm": "GUAPOTA(SAN)",
            "cd": 27,
            "cm": 100
        },
        {
            "cod": "027103",
            "arc": 17,
            "nm": "GUAVATA(SAN)",
            "cd": 27,
            "cm": 103
        },
        {
            "cod": "027106",
            "arc": 17,
            "nm": "GUEPSA(SAN)",
            "cd": 27,
            "cm": 106
        },
        {
            "cod": "027109",
            "arc": 17,
            "nm": "HATO(SAN)",
            "cd": 27,
            "cm": 109
        },
        {
            "cod": "027112",
            "arc": 17,
            "nm": "JESUS MARIA(SAN)",
            "cd": 27,
            "cm": 112
        },
        {
            "cod": "027115",
            "arc": 17,
            "nm": "JORDAN(SAN)",
            "cd": 27,
            "cm": 115
        },
        {
            "cod": "027118",
            "arc": 17,
            "nm": "LA PAZ(SAN)",
            "cd": 27,
            "cm": 118
        },
        {
            "cod": "027119",
            "arc": 17,
            "nm": "LA BELLEZA(SAN)",
            "cd": 27,
            "cm": 119
        },
        {
            "cod": "027120",
            "arc": 17,
            "nm": "LANDAZURI(SAN)",
            "cd": 27,
            "cm": 120
        },
        {
            "cod": "027121",
            "arc": 17,
            "nm": "LEBRIJA(SAN)",
            "cd": 27,
            "cm": 121
        },
        {
            "cod": "027124",
            "arc": 17,
            "nm": "LOS SANTOS(SAN)",
            "cd": 27,
            "cm": 124
        },
        {
            "cod": "027127",
            "arc": 17,
            "nm": "MACARAVITA(SAN)",
            "cd": 27,
            "cm": 127
        },
        {
            "cod": "027130",
            "arc": 17,
            "nm": "MALAGA(SAN)",
            "cd": 27,
            "cm": 130
        },
        {
            "cod": "027133",
            "arc": 17,
            "nm": "MATANZA(SAN)",
            "cd": 27,
            "cm": 133
        },
        {
            "cod": "027136",
            "arc": 17,
            "nm": "MOGOTES(SAN)",
            "cd": 27,
            "cm": 136
        },
        {
            "cod": "027139",
            "arc": 17,
            "nm": "MOLAGAVITA(SAN)",
            "cd": 27,
            "cm": 139
        },
        {
            "cod": "027142",
            "arc": 17,
            "nm": "OCAMONTE(SAN)",
            "cd": 27,
            "cm": 142
        },
        {
            "cod": "027145",
            "arc": 17,
            "nm": "OIBA(SAN)",
            "cd": 27,
            "cm": 145
        },
        {
            "cod": "027148",
            "arc": 17,
            "nm": "ONZAGA(SAN)",
            "cd": 27,
            "cm": 148
        },
        {
            "cod": "027151",
            "arc": 17,
            "nm": "PALMAR(SAN)",
            "cd": 27,
            "cm": 151
        },
        {
            "cod": "027154",
            "arc": 17,
            "nm": "PALMAS DEL SOCORRO(SAN)",
            "cd": 27,
            "cm": 154
        },
        {
            "cod": "027157",
            "arc": 17,
            "nm": "PARAMO(SAN)",
            "cd": 27,
            "cm": 157
        },
        {
            "cod": "027160",
            "arc": 17,
            "nm": "PIEDECUESTA(SAN)",
            "cd": 27,
            "cm": 160
        },
        {
            "cod": "027163",
            "arc": 17,
            "nm": "PINCHOTE(SAN)",
            "cd": 27,
            "cm": 163
        },
        {
            "cod": "027166",
            "arc": 17,
            "nm": "PUENTE NACIONAL(SAN)",
            "cd": 27,
            "cm": 166
        },
        {
            "cod": "027167",
            "arc": 17,
            "nm": "PUERTO PARRA(SAN)",
            "cd": 27,
            "cm": 167
        },
        {
            "cod": "027169",
            "arc": 17,
            "nm": "PUERTO WILCHES(SAN)",
            "cd": 27,
            "cm": 169
        },
        {
            "cod": "027172",
            "arc": 18,
            "nm": "RIONEGRO(SAN)",
            "cd": 27,
            "cm": 172
        },
        {
            "cod": "027174",
            "arc": 18,
            "nm": "SABANA DE TORRES(SAN)",
            "cd": 27,
            "cm": 174
        },
        {
            "cod": "027175",
            "arc": 18,
            "nm": "SAN ANDRES(SAN)",
            "cd": 27,
            "cm": 175
        },
        {
            "cod": "027178",
            "arc": 18,
            "nm": "SAN BENITO(SAN)",
            "cd": 27,
            "cm": 178
        },
        {
            "cod": "027181",
            "arc": 18,
            "nm": "SAN GIL(SAN)",
            "cd": 27,
            "cm": 181
        },
        {
            "cod": "027184",
            "arc": 18,
            "nm": "SAN JOAQUIN(SAN)",
            "cd": 27,
            "cm": 184
        },
        {
            "cod": "027187",
            "arc": 18,
            "nm": "SAN JOSE DE MIRANDA(SAN)",
            "cd": 27,
            "cm": 187
        },
        {
            "cod": "027190",
            "arc": 18,
            "nm": "SAN MIGUEL(SAN)",
            "cd": 27,
            "cm": 190
        },
        {
            "cod": "027193",
            "arc": 18,
            "nm": "SAN VICENTE DE CHUCURI(SAN)",
            "cd": 27,
            "cm": 193
        },
        {
            "cod": "027194",
            "arc": 18,
            "nm": "SANTA HELENA DEL OPON(SAN)",
            "cd": 27,
            "cm": 194
        },
        {
            "cod": "027195",
            "arc": 18,
            "nm": "SANTA BARBARA(SAN)",
            "cd": 27,
            "cm": 195
        },
        {
            "cod": "027196",
            "arc": 18,
            "nm": "SIMACOTA(SAN)",
            "cd": 27,
            "cm": 196
        },
        {
            "cod": "027199",
            "arc": 18,
            "nm": "SOCORRO(SAN)",
            "cd": 27,
            "cm": 199
        },
        {
            "cod": "027202",
            "arc": 18,
            "nm": "SUAITA(SAN)",
            "cd": 27,
            "cm": 202
        },
        {
            "cod": "027205",
            "arc": 18,
            "nm": "SUCRE(SAN)",
            "cd": 27,
            "cm": 205
        },
        {
            "cod": "027208",
            "arc": 18,
            "nm": "SURATA(SAN)",
            "cd": 27,
            "cm": 208
        },
        {
            "cod": "027211",
            "arc": 18,
            "nm": "TONA(SAN)",
            "cd": 27,
            "cm": 211
        },
        {
            "cod": "027217",
            "arc": 18,
            "nm": "VALLE DE SAN JOSE(SAN)",
            "cd": 27,
            "cm": 217
        },
        {
            "cod": "027219",
            "arc": 18,
            "nm": "VETAS(SAN)",
            "cd": 27,
            "cm": 219
        },
        {
            "cod": "027220",
            "arc": 18,
            "nm": "VELEZ(SAN)",
            "cd": 27,
            "cm": 220
        },
        {
            "cod": "027221",
            "arc": 18,
            "nm": "VILLANUEVA(SAN)",
            "cd": 27,
            "cm": 221
        },
        {
            "cod": "027223",
            "arc": 18,
            "nm": "ZAPATOCA(SAN)",
            "cd": 27,
            "cm": 223
        },
        {
            "cod": "028001",
            "arc": 18,
            "nm": "SINCELEJO(SUC)",
            "cd": 28,
            "cm": 1
        },
        {
            "cod": "028010",
            "arc": 18,
            "nm": "BUENAVISTA(SUC)",
            "cd": 28,
            "cm": 10
        },
        {
            "cod": "028020",
            "arc": 18,
            "nm": "CAIMITO(SUC)",
            "cd": 28,
            "cm": 20
        },
        {
            "cod": "028030",
            "arc": 18,
            "nm": "COLOSO (RICAURTE)(SUC)",
            "cd": 28,
            "cm": 30
        },
        {
            "cod": "028040",
            "arc": 18,
            "nm": "COROZAL(SUC)",
            "cd": 28,
            "cm": 40
        },
        {
            "cod": "028041",
            "arc": 18,
            "nm": "COVEÑAS(SUC)",
            "cd": 28,
            "cm": 41
        },
        {
            "cod": "028042",
            "arc": 18,
            "nm": "EL ROBLE(SUC)",
            "cd": 28,
            "cm": 42
        },
        {
            "cod": "028045",
            "arc": 18,
            "nm": "CHALAN(SUC)",
            "cd": 28,
            "cm": 45
        },
        {
            "cod": "028048",
            "arc": 18,
            "nm": "GALERAS (NUEVA GRANADA)(SUC)",
            "cd": 28,
            "cm": 48
        },
        {
            "cod": "028049",
            "arc": 18,
            "nm": "GUARANDA(SUC)",
            "cd": 28,
            "cm": 49
        },
        {
            "cod": "028050",
            "arc": 18,
            "nm": "LA UNION(SUC)",
            "cd": 28,
            "cm": 50
        },
        {
            "cod": "028055",
            "arc": 18,
            "nm": "LOS PALMITOS(SUC)",
            "cd": 28,
            "cm": 55
        },
        {
            "cod": "028060",
            "arc": 18,
            "nm": "MAJAGUAL(SUC)",
            "cd": 28,
            "cm": 60
        },
        {
            "cod": "028080",
            "arc": 18,
            "nm": "MORROA(SUC)",
            "cd": 28,
            "cm": 80
        },
        {
            "cod": "028100",
            "arc": 18,
            "nm": "OVEJAS(SUC)",
            "cd": 28,
            "cm": 100
        },
        {
            "cod": "028120",
            "arc": 18,
            "nm": "PALMITO(SUC)",
            "cd": 28,
            "cm": 120
        },
        {
            "cod": "028160",
            "arc": 18,
            "nm": "SAMPUES(SUC)",
            "cd": 28,
            "cm": 160
        },
        {
            "cod": "028180",
            "arc": 18,
            "nm": "SAN BENITO ABAD(SUC)",
            "cd": 28,
            "cm": 180
        },
        {
            "cod": "028190",
            "arc": 18,
            "nm": "SAN JUAN DE BETULIA (BETULIA)(SUC)",
            "cd": 28,
            "cm": 190
        },
        {
            "cod": "028200",
            "arc": 18,
            "nm": "SAN MARCOS(SUC)",
            "cd": 28,
            "cm": 200
        },
        {
            "cod": "028220",
            "arc": 18,
            "nm": "SAN ONOFRE(SUC)",
            "cd": 28,
            "cm": 220
        },
        {
            "cod": "028240",
            "arc": 18,
            "nm": "SAN PEDRO(SUC)",
            "cd": 28,
            "cm": 240
        },
        {
            "cod": "028260",
            "arc": 18,
            "nm": "SINCE(SUC)",
            "cd": 28,
            "cm": 260
        },
        {
            "cod": "028280",
            "arc": 18,
            "nm": "SUCRE(SUC)",
            "cd": 28,
            "cm": 280
        },
        {
            "cod": "028300",
            "arc": 18,
            "nm": "TOLU(SUC)",
            "cd": 28,
            "cm": 300
        },
        {
            "cod": "028320",
            "arc": 18,
            "nm": "TOLUVIEJO(SUC)",
            "cd": 28,
            "cm": 320
        },
        {
            "cod": "029001",
            "arc": 18,
            "nm": "IBAGUE(TOL)",
            "cd": 29,
            "cm": 1
        },
        {
            "cod": "029004",
            "arc": 18,
            "nm": "ALPUJARRA(TOL)",
            "cd": 29,
            "cm": 4
        },
        {
            "cod": "029007",
            "arc": 19,
            "nm": "ALVARADO(TOL)",
            "cd": 29,
            "cm": 7
        },
        {
            "cod": "029010",
            "arc": 19,
            "nm": "AMBALEMA(TOL)",
            "cd": 29,
            "cm": 10
        },
        {
            "cod": "029013",
            "arc": 19,
            "nm": "ANZOATEGUI(TOL)",
            "cd": 29,
            "cm": 13
        },
        {
            "cod": "029016",
            "arc": 19,
            "nm": "ARMERO (GUAYABAL)(TOL)",
            "cd": 29,
            "cm": 16
        },
        {
            "cod": "029019",
            "arc": 19,
            "nm": "ATACO(TOL)",
            "cd": 29,
            "cm": 19
        },
        {
            "cod": "029022",
            "arc": 19,
            "nm": "CAJAMARCA(TOL)",
            "cd": 29,
            "cm": 22
        },
        {
            "cod": "029025",
            "arc": 19,
            "nm": "CARMEN DE APICALA(TOL)",
            "cd": 29,
            "cm": 25
        },
        {
            "cod": "029028",
            "arc": 19,
            "nm": "CASABIANCA(TOL)",
            "cd": 29,
            "cm": 28
        },
        {
            "cod": "029031",
            "arc": 19,
            "nm": "COELLO(TOL)",
            "cd": 29,
            "cm": 31
        },
        {
            "cod": "029034",
            "arc": 19,
            "nm": "COYAIMA(TOL)",
            "cd": 29,
            "cm": 34
        },
        {
            "cod": "029037",
            "arc": 19,
            "nm": "CUNDAY(TOL)",
            "cd": 29,
            "cm": 37
        },
        {
            "cod": "029040",
            "arc": 19,
            "nm": "CHAPARRAL(TOL)",
            "cd": 29,
            "cm": 40
        },
        {
            "cod": "029043",
            "arc": 19,
            "nm": "DOLORES(TOL)",
            "cd": 29,
            "cm": 43
        },
        {
            "cod": "029046",
            "arc": 19,
            "nm": "ESPINAL(TOL)",
            "cd": 29,
            "cm": 46
        },
        {
            "cod": "029049",
            "arc": 19,
            "nm": "FALAN(TOL)",
            "cd": 29,
            "cm": 49
        },
        {
            "cod": "029052",
            "arc": 19,
            "nm": "FLANDES(TOL)",
            "cd": 29,
            "cm": 52
        },
        {
            "cod": "029055",
            "arc": 19,
            "nm": "FRESNO(TOL)",
            "cd": 29,
            "cm": 55
        },
        {
            "cod": "029058",
            "arc": 19,
            "nm": "GUAMO(TOL)",
            "cd": 29,
            "cm": 58
        },
        {
            "cod": "029061",
            "arc": 19,
            "nm": "HERVEO(TOL)",
            "cd": 29,
            "cm": 61
        },
        {
            "cod": "029064",
            "arc": 19,
            "nm": "HONDA(TOL)",
            "cd": 29,
            "cm": 64
        },
        {
            "cod": "029067",
            "arc": 19,
            "nm": "ICONONZO(TOL)",
            "cd": 29,
            "cm": 67
        },
        {
            "cod": "029070",
            "arc": 19,
            "nm": "LERIDA(TOL)",
            "cd": 29,
            "cm": 70
        },
        {
            "cod": "029073",
            "arc": 19,
            "nm": "LIBANO(TOL)",
            "cd": 29,
            "cm": 73
        },
        {
            "cod": "029076",
            "arc": 19,
            "nm": "MARIQUITA(TOL)",
            "cd": 29,
            "cm": 76
        },
        {
            "cod": "029079",
            "arc": 19,
            "nm": "MELGAR(TOL)",
            "cd": 29,
            "cm": 79
        },
        {
            "cod": "029080",
            "arc": 19,
            "nm": "MURILLO(TOL)",
            "cd": 29,
            "cm": 80
        },
        {
            "cod": "029082",
            "arc": 19,
            "nm": "NATAGAIMA(TOL)",
            "cd": 29,
            "cm": 82
        },
        {
            "cod": "029085",
            "arc": 19,
            "nm": "ORTEGA(TOL)",
            "cd": 29,
            "cm": 85
        },
        {
            "cod": "029087",
            "arc": 19,
            "nm": "PALOCABILDO(TOL)",
            "cd": 29,
            "cm": 87
        },
        {
            "cod": "029088",
            "arc": 19,
            "nm": "PIEDRAS(TOL)",
            "cd": 29,
            "cm": 88
        },
        {
            "cod": "029089",
            "arc": 19,
            "nm": "PLANADAS(TOL)",
            "cd": 29,
            "cm": 89
        },
        {
            "cod": "029091",
            "arc": 19,
            "nm": "PRADO(TOL)",
            "cd": 29,
            "cm": 91
        },
        {
            "cod": "029094",
            "arc": 19,
            "nm": "PURIFICACION(TOL)",
            "cd": 29,
            "cm": 94
        },
        {
            "cod": "029097",
            "arc": 19,
            "nm": "RIOBLANCO(TOL)",
            "cd": 29,
            "cm": 97
        },
        {
            "cod": "029100",
            "arc": 19,
            "nm": "RONCESVALLES(TOL)",
            "cd": 29,
            "cm": 100
        },
        {
            "cod": "029103",
            "arc": 19,
            "nm": "ROVIRA(TOL)",
            "cd": 29,
            "cm": 103
        },
        {
            "cod": "029105",
            "arc": 19,
            "nm": "SALDAÑA(TOL)",
            "cd": 29,
            "cm": 105
        },
        {
            "cod": "029106",
            "arc": 19,
            "nm": "SAN ANTONIO(TOL)",
            "cd": 29,
            "cm": 106
        },
        {
            "cod": "029109",
            "arc": 19,
            "nm": "SAN LUIS(TOL)",
            "cd": 29,
            "cm": 109
        },
        {
            "cod": "029112",
            "arc": 19,
            "nm": "SANTA ISABEL(TOL)",
            "cd": 29,
            "cm": 112
        },
        {
            "cod": "029115",
            "arc": 19,
            "nm": "SUAREZ(TOL)",
            "cd": 29,
            "cm": 115
        },
        {
            "cod": "029118",
            "arc": 19,
            "nm": "VALLE DE SAN JUAN(TOL)",
            "cd": 29,
            "cm": 118
        },
        {
            "cod": "029121",
            "arc": 19,
            "nm": "VENADILLO(TOL)",
            "cd": 29,
            "cm": 121
        },
        {
            "cod": "029124",
            "arc": 19,
            "nm": "VILLAHERMOSA(TOL)",
            "cd": 29,
            "cm": 124
        },
        {
            "cod": "029127",
            "arc": 19,
            "nm": "VILLARRICA(TOL)",
            "cd": 29,
            "cm": 127
        },
        {
            "cod": "031001",
            "arc": 19,
            "nm": "CALI(VAL)",
            "cd": 31,
            "cm": 1
        },
        {
            "cod": "031004",
            "arc": 19,
            "nm": "ALCALA(VAL)",
            "cd": 31,
            "cm": 4
        },
        {
            "cod": "031007",
            "arc": 19,
            "nm": "ANDALUCIA(VAL)",
            "cd": 31,
            "cm": 7
        },
        {
            "cod": "031010",
            "arc": 19,
            "nm": "ANSERMANUEVO(VAL)",
            "cd": 31,
            "cm": 10
        },
        {
            "cod": "031013",
            "arc": 19,
            "nm": "ARGELIA(VAL)",
            "cd": 31,
            "cm": 13
        },
        {
            "cod": "031016",
            "arc": 20,
            "nm": "BOLIVAR(VAL)",
            "cd": 31,
            "cm": 16
        },
        {
            "cod": "031019",
            "arc": 20,
            "nm": "BUENAVENTURA(VAL)",
            "cd": 31,
            "cm": 19
        },
        {
            "cod": "031022",
            "arc": 20,
            "nm": "BUGA(VAL)",
            "cd": 31,
            "cm": 22
        },
        {
            "cod": "031025",
            "arc": 20,
            "nm": "BUGALAGRANDE(VAL)",
            "cd": 31,
            "cm": 25
        },
        {
            "cod": "031028",
            "arc": 20,
            "nm": "CAICEDONIA(VAL)",
            "cd": 31,
            "cm": 28
        },
        {
            "cod": "031031",
            "arc": 20,
            "nm": "CANDELARIA(VAL)",
            "cd": 31,
            "cm": 31
        },
        {
            "cod": "031034",
            "arc": 20,
            "nm": "CARTAGO(VAL)",
            "cd": 31,
            "cm": 34
        },
        {
            "cod": "031037",
            "arc": 20,
            "nm": "DAGUA(VAL)",
            "cd": 31,
            "cm": 37
        },
        {
            "cod": "031040",
            "arc": 20,
            "nm": "CALIMA (DARIEN)(VAL)",
            "cd": 31,
            "cm": 40
        },
        {
            "cod": "031043",
            "arc": 20,
            "nm": "EL AGUILA(VAL)",
            "cd": 31,
            "cm": 43
        },
        {
            "cod": "031046",
            "arc": 20,
            "nm": "EL CAIRO(VAL)",
            "cd": 31,
            "cm": 46
        },
        {
            "cod": "031049",
            "arc": 20,
            "nm": "EL CERRITO(VAL)",
            "cd": 31,
            "cm": 49
        },
        {
            "cod": "031052",
            "arc": 20,
            "nm": "EL DOVIO(VAL)",
            "cd": 31,
            "cm": 52
        },
        {
            "cod": "031055",
            "arc": 20,
            "nm": "FLORIDA(VAL)",
            "cd": 31,
            "cm": 55
        },
        {
            "cod": "031058",
            "arc": 20,
            "nm": "GINEBRA(VAL)",
            "cd": 31,
            "cm": 58
        },
        {
            "cod": "031061",
            "arc": 20,
            "nm": "GUACARI(VAL)",
            "cd": 31,
            "cm": 61
        },
        {
            "cod": "031064",
            "arc": 20,
            "nm": "JAMUNDI(VAL)",
            "cd": 31,
            "cm": 64
        },
        {
            "cod": "031067",
            "arc": 20,
            "nm": "LA CUMBRE(VAL)",
            "cd": 31,
            "cm": 67
        },
        {
            "cod": "031070",
            "arc": 20,
            "nm": "LA UNION(VAL)",
            "cd": 31,
            "cm": 70
        },
        {
            "cod": "031073",
            "arc": 20,
            "nm": "LA VICTORIA(VAL)",
            "cd": 31,
            "cm": 73
        },
        {
            "cod": "031076",
            "arc": 20,
            "nm": "OBANDO(VAL)",
            "cd": 31,
            "cm": 76
        },
        {
            "cod": "031079",
            "arc": 20,
            "nm": "PALMIRA(VAL)",
            "cd": 31,
            "cm": 79
        },
        {
            "cod": "031082",
            "arc": 20,
            "nm": "PRADERA(VAL)",
            "cd": 31,
            "cm": 82
        },
        {
            "cod": "031085",
            "arc": 20,
            "nm": "RESTREPO(VAL)",
            "cd": 31,
            "cm": 85
        },
        {
            "cod": "031088",
            "arc": 20,
            "nm": "RIOFRIO(VAL)",
            "cd": 31,
            "cm": 88
        },
        {
            "cod": "031091",
            "arc": 20,
            "nm": "ROLDANILLO(VAL)",
            "cd": 31,
            "cm": 91
        },
        {
            "cod": "031094",
            "arc": 20,
            "nm": "SAN PEDRO(VAL)",
            "cd": 31,
            "cm": 94
        },
        {
            "cod": "031097",
            "arc": 20,
            "nm": "SEVILLA(VAL)",
            "cd": 31,
            "cm": 97
        },
        {
            "cod": "031100",
            "arc": 20,
            "nm": "TORO(VAL)",
            "cd": 31,
            "cm": 100
        },
        {
            "cod": "031103",
            "arc": 20,
            "nm": "TRUJILLO(VAL)",
            "cd": 31,
            "cm": 103
        },
        {
            "cod": "031106",
            "arc": 20,
            "nm": "TULUA(VAL)",
            "cd": 31,
            "cm": 106
        },
        {
            "cod": "031109",
            "arc": 20,
            "nm": "ULLOA(VAL)",
            "cd": 31,
            "cm": 109
        },
        {
            "cod": "031112",
            "arc": 20,
            "nm": "VERSALLES(VAL)",
            "cd": 31,
            "cm": 112
        },
        {
            "cod": "031115",
            "arc": 20,
            "nm": "VIJES(VAL)",
            "cd": 31,
            "cm": 115
        },
        {
            "cod": "031118",
            "arc": 20,
            "nm": "YOTOCO(VAL)",
            "cd": 31,
            "cm": 118
        },
        {
            "cod": "031121",
            "arc": 20,
            "nm": "YUMBO(VAL)",
            "cd": 31,
            "cm": 121
        },
        {
            "cod": "031124",
            "arc": 20,
            "nm": "ZARZAL(VAL)",
            "cd": 31,
            "cm": 124
        },
        {
            "cod": "040001",
            "arc": 20,
            "nm": "ARAUCA(ARA)",
            "cd": 40,
            "cm": 1
        },
        {
            "cod": "040005",
            "arc": 20,
            "nm": "TAME(ARA)",
            "cd": 40,
            "cm": 5
        },
        {
            "cod": "040010",
            "arc": 20,
            "nm": "ARAUQUITA(ARA)",
            "cd": 40,
            "cm": 10
        },
        {
            "cod": "040015",
            "arc": 20,
            "nm": "CRAVO NORTE(ARA)",
            "cd": 40,
            "cm": 15
        },
        {
            "cod": "040017",
            "arc": 20,
            "nm": "FORTUL(ARA)",
            "cd": 40,
            "cm": 17
        },
        {
            "cod": "040020",
            "arc": 20,
            "nm": "PUERTO RONDON(ARA)",
            "cd": 40,
            "cm": 20
        },
        {
            "cod": "040025",
            "arc": 20,
            "nm": "SARAVENA(ARA)",
            "cd": 40,
            "cm": 25
        },
        {
            "cod": "044001",
            "arc": 20,
            "nm": "FLORENCIA(CAQ)",
            "cd": 44,
            "cm": 1
        },
        {
            "cod": "044002",
            "arc": 20,
            "nm": "ALBANIA(CAQ)",
            "cd": 44,
            "cm": 2
        },
        {
            "cod": "044003",
            "arc": 20,
            "nm": "CARTAGENA DEL CHAIRA(CAQ)",
            "cd": 44,
            "cm": 3
        },
        {
            "cod": "044004",
            "arc": 20,
            "nm": "BELEN DE LOS ANDAQUIES(CAQ)",
            "cd": 44,
            "cm": 4
        },
        {
            "cod": "044005",
            "arc": 20,
            "nm": "EL DONCELLO(CAQ)",
            "cd": 44,
            "cm": 5
        },
        {
            "cod": "044006",
            "arc": 20,
            "nm": "EL PAUJIL(CAQ)",
            "cd": 44,
            "cm": 6
        }
    ]

    
    if (busquedadorMunicipios.length >= 4) {
        for (let i = 0; i < listaMunicipios.length; i++) {
            const municipio = listaMunicipios[i];
            if (municipio.nm.toLowerCase().includes(busquedadorMunicipios.toLowerCase())) {
                municipiosFiltrados.push(municipio);
            }
        }
    }

    return (
        <>
            <input 
                type="text"
                value={busquedadorMunicipios}
                onChange={(e) => setBusquedadadorMUnicipios(e.target.value)}
                placeholder="Buscar municipio..."
            />
             <div>
                {busquedadorMunicipios.length >= 4 && (
                    municipiosFiltrados.length > 0 ? (
                        <ul>
                            {municipiosFiltrados.map((municipio, index) => (
                                <li onClick={() => navigate(`/detalle/${municipio.cd}/${municipio.cod}`)} key={municipio.cod}>
                                    <strong>{municipio.nm}</strong>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No se encontraron resultados.</p>
                    )
                )}
            </div>
        </>
    );
}

export default BuscadorMunicipios;
