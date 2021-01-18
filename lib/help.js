const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('./lib/database/setting.json'))


function help() {
    return `
╭──「 *INFORMATION* 」───
│────────────────────────
│> HNZM BOT
│> CREATOR : Nabil
│> wa.me/6281281524356
│> PREFIX : ${prefix}
│> HNZM TELEGRAM : t.me/HNZMBOTOFFCIIAL
│────────────────────────
│──「 *LIST MENU* 」────
│────────────────────────
│> *${prefix}ownermenu*
│> *${prefix}adminmenu*
│> *${prefix}groupmenu*
│> *${prefix}praymenu*
│> *${prefix}nsfwmenu*
│> *${prefix}funmenu*
│> *${prefix}funadmmenu* _*[JUST BOT ADMIN]*_
│> *${prefix}mediamenu*
│> *${prefix}animemenu*
│> *${prefix}kerangmenu*
│> *${prefix}downloadmenu*
│> *${prefix}othermenu*
│────────────────────────
│──「 *INFO* 」────
│────────────────────────
│> *cekprefix*
│> *${prefix}runtime*
│> *${prefix}bugreport [teks]*
│> *${prefix}listblock*
│> *${prefix}listbanned*
│> *${prefix}listgroup*
│> *${prefix}iklan*
│> *${prefix}info*
│> *${prefix}limit*
│> *${prefix}snk*
│> *${prefix}readme*
│> *${prefix}donate*
│> *${prefix}ping*
│> *${prefix}HNZMgroup*
│> *${prefix}HNZMadmin*
│> *${prefix}owner*
│────────────────────────
│──「 *RULES* 」────
│
│>*🖋 Pengen Sewa Bot ? Chat Owner!!!*
│>*🖋 SPAM/VC = BLOCK!!!*
│>*🖋 Sewaktu-Waktu Bot OFF = OWNER SIBUK*
│>*🖋 PENGEN FITUR PREMIUM ?? Ketik #iklan*
│>*🖋 Ada Bug?? KETIK #bugreport [Teks]*
│>*🖋 Mau Request FItur ?? Chat Owner!!!*
│>*🖋 BOT INI MEMILIKI FITUR ANTI SPAM!!!*
│────────────────────────
│   *「 HNZM BOT 」*
╰───────────────────── `
}
exports.help = help()
function ownercmd() {
    return `
╭──「 *OWNER MENU* 」─────
│────────────────────────
│> *${prefix}block 62858xxxxx*
│> *${prefix}unblock 62858xxxxx*
│> *${prefix}addadmin @tagmember*
│> *${prefix}deladmin @tagmember*
│> *${prefix}restart*
│> *${prefix}ekickall*
│> *${prefix}banchat*
│> *${prefix}unbanchat*
│> *${prefix}eval [kode JavaScript]*
│────────────────────────
│   *「 HNZM BOT 」*
╰────────────────────── `
}
exports.ownercmd = ownercmd()
function admincmd() {
    return `
╭──「 *ADMIN MENU* 」─────
│────────────────────────
│> *${prefix}mute*
│> *${prefix}unmute*
│> *${prefix}ban @tagmember*
│> *${prefix}unban @tagmember*
│> *${prefix}daftarulang @tagmember umur*
│> *${prefix}spamcall [81273xxxx]*
│> *${prefix}addbadword [text]*
│> *${prefix}delbadword [text]*
│> *${prefix}listbadword [text]*
│> *${prefix}resetsticker @tagmember*
│> *${prefix}resetbadword @tagmember*
│> *${prefix}kickall*
│> *${prefix}oleave*
│> *${prefix}opromote*
│> *${prefix}odemote*
│> *${prefix}odelete*
│> *${prefix}oadd 62813xxxxx*
│> *${prefix}okickall*
│> *${prefix}otagall*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.admincmd = admincmd()
function nsfwcmd() {
    return `
╭──「 *NSFW MENU* 」─────
│────────────────────────
│> *${prefix}randombokep
│> *${prefix}randomhentai*
│> *${prefix}randomnsfwneko*
│> *${prefix}randomtrapnime*
│> *${prefix}nhentai [kode]*
│> *${prefix}nhder [kode]*
│> *${prefix}xnxx [linkXnxx]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.nsfwcmd = nsfwcmd()
function praycmd() {
    return `
╭──「 *PRAY MENU* 」─────
│────────────────────────
│> *${prefix}quran [urutan surah]*
│> *${prefix}infosurah [nama surah]*
│> *${prefix}tafsir [nama surah] [ayat]*
│> *${prefix}jadwalsholat [daerah]*
│> *${prefix}listsurah*
│> *${prefix}listdaerah*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.praycmd = praycmd()
function kerangcmd() {
    return `
╭──「 *KERANG MENU* 」─────
│────────────────────────
│> *${prefix}apakah [optional]*
│> *${prefix}rate* [optional]*
│> *${prefix}bisakah* [optional]*
│> *${prefix}kapankah* [optional]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.kerangcmd = kerangcmd()
function funcmd() {
    return `
╭──「 *FUN MENU* 」─────
│────────────────────────
│> *${prefix}caklontong*
│> *${prefix}family100*
│> *${prefix}tebakgambar*
│> *${prefix}cerpen*
│> *${prefix}puisi1*
│> *${prefix}puisi2*
│> *${prefix}puisi3*
│> *${prefix}silktext [teks]*
│> *${prefix}neon [teks1|teks2|teks3]*
│> *${prefix}wolf [teks1|teks2]*
│> *${prefix}epep [teks1|teks2]*
│> *${prefix}glitch [teks1|teks2]*
│> *${prefix}anjay1 [teks1|teks2]*
│> *${prefix}anjay2 [teks1|teks2]*
│> *${prefix}thunder [teks]*
│> *${prefix}blackpink [teks]*
│> *${prefix}sarah [teks]*
│> *${prefix}pornhub [|teks1|teks2]*
│> *${prefix}lovemessage [teks]*
│> *${prefix}romance [teks]*
│> *${prefix}party [teks]*
│> *${prefix}lovemaker [teks]*
│> *${prefix}magernulis1 --[Nama Kamu]--[Kelas Kamu]--[Teks]*
│> *${prefix}ramalpasangan [kamu|pasangan]*
│> *${prefix}zodiak* [zodiak kamu]
│> *${prefix}artinama [nama]*
│> *${prefix}artinama [nama]*
│> *${prefix}artimimpi [mimpi]*
│> *${prefix}heroml [nama hero]*
│> *${prefix}nulis [teks]*
│> *${prefix}sandwriting [teks]*
│> *${prefix}quotemaker [|teks|author|theme]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.funcmd = funcmd()
function mediacmd() {
    return `
╭──「 *MEDIA MENU* 」────
│────────────────────────
│> *${prefix}covid [negara]*
│> *${prefix}jadwalTv [channel]*
│> *${prefix}cuaca [tempat]*
│> *${prefix}resepmasakan [optional]*
│> *${prefix}tts [kode bhs] [teks]*
│> *${prefix}igstalk [@username]*
│> *${prefix}tiktokstalk [@username]*
│> *${prefix}smulestalk [@username]*
│> *${prefix}kbbi [query]*
│> *${prefix}wiki [query]*
│> *${prefix}google [query]*
│> *${prefix}pinterest [query]*
│> *${prefix}googleimage [query]*
│> *${prefix}brainlysearch [query]*
│> *${prefix}ytsearch [query]*
│> *${prefix}translate [bahasa] [teks]*
│> *${prefix}brainly [pertanyaan] [.jumlah]*
│> *${prefix}lirik [optional]*
│> *${prefix}chord [optional]*
│> *${prefix}qrcode [optional]*
│> *${prefix}maps [optional]*
│> *${prefix}textmaker [teks1|teks2]*
│> *${prefix}checkip [ipaddress]*
│> *${prefix}ssweb [linkWeb]*
│> *${prefix}shorturl [linkWeb]*
│> *${prefix}infoalamat [alamat sekitar]*
│> *${prefix}infomobil [menentukan info mobil]*
│> *${prefix}infomotor [menentukan info motor]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.mediacmd = mediacmd()
function animecmd() {
    return `
╭──「 *ANIME MENU* 」─────
│────────────────────────
│> *${prefix}loli*
│> *${prefix}shota*
│> *${prefix}waifu*
│> *${prefix}husbu*
│> *${prefix}randomNekoNime*
│> *${prefix}randomTrapNime*
│> *${prefix}randomAnime*
│> *${prefix}quotesnime*
│> *${prefix}wait*
│> *${prefix}koin*
│> *${prefix}malanime [optional]*
│> *${prefix}malcharacter [optional]*
│> *${prefix}kusonime [optional]*
│> *${prefix}otakudesu [optional]*
│> *${prefix}dewabatch [optional]*
│> *${prefix}komiku [optional]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.animecmd = animecmd()
function othercmd() {
    return `
╭──「 *OTHER MENU* 」─────
│────────────────────────
│> *${prefix}bahasa*
│> *${prefix}sticker*
│> *${prefix}stickergif*
│> *${prefix}sfire*
│> *${prefix}slightning*
│> *${prefix}ttp [teks]*
│> *${prefix}stickertoimg*
│> *${prefix}neko*
│> *${prefix}pokemon*
│> *${prefix}inu*
│> *${prefix}infoGempa*
│> *${prefix}quotes*
│> *${prefix}ptl*
│> *${prefix}dadu*
│> *${prefix}koin*
│> *${prefix}quoterandom*
│> *${prefix}wa.me*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.othercmd = othercmd()
function downloadcmd() {
    return `
╭──「 *DOWNLOADER MENU* 」────
│────────────────────────
│> *${prefix}play [lagu]*
│> *${prefix}ytmp3 [linkYt]*
│> *${prefix}ytmp4 [linkYt]*
│> *${prefix}ig [linkIg]*
│> *${prefix}fb [linkFb]*
│> *${prefix}twitter [linkTwitter]*
│> *${prefix}smule [linkSmule]*
│> *${prefix}tiktok [linkTiktok]*
│> *${prefix}starmaker [linkStarmaker]*
│> *${prefix}xnxx [linkXnxx]*
│> *${prefix}nhder [kodeNuclear]*
│> *${prefix}joox [lagu]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.downloadcmd = downloadcmd()
function premiumcmd() {
    return `
╭──「 *FUN ADMIN MENU* 」─────
│────────────────────────
│> *${prefix}music [lagu]*
│> *${prefix}getmusic [IdDownload]*
│> *${prefix}video [video]*
│> *${prefix}getvideo [IdDownload]*
│> *${prefix}brainlysearch [query]*
│> *${prefix}playstore [query]*
│> *${prefix}shopee [query]*
│> *${prefix}nhentai [kode]*
│> *${prefix}getnhentai [kode]*
│> *${prefix}animesearch [query]*
│> *${prefix}ytseacrh [query]*
│> *${prefix}jurnalotaku [query]*
│> *${prefix}xxx [query]*
│> *${prefix}getxxx [angka]*
│> *${prefix}xvideos [query]*
│> *${prefix}getxvideos [angka]*
│────────────────────────
│   *「 HNZM BOT 」*
╰─────────────────────── `
}
exports.premiumcmd = premiumcmd()
function intro() {
    return `*INTRO NEW MEMBER*
_1. Name:_
_2. Age:_
_3. Status:_
_4. Gender:_
_5. Hometown:_
_6. City Now:_
_7. Favorit Anime:_
    -
    -
    -
_8. Favorite Game:_
    -
    -
    -
_9. Reasons for Entering the Group:_

*• Don't forget to read the description first.*
*• Thank you for joining, and hope you feel at home.*
`
}
exports.intro = intro()
function groupcmd() {
    return `
╭──「 *GROUP MENU* 」─────
│
│> *${prefix}snk*
│> *${prefix}wame*
│> *${prefix}groupinfo*
│> *${prefix}add 62858xxxxx*
│> *${prefix}kick @tagmember*
│> *${prefix}promote @tagmember*
│> *${prefix}demote @tagadmin*
│> *${prefix}tagall*
│> *${prefix}adminList*
│> *${prefix}ownerGroup*
│> *${prefix}leave*
│> *${prefix}delete [replyChatBot]*
│> *${prefix}kickAll*
│> *${prefix}group [open|close]*
│> *${prefix}NSFW [enable|disable]*
│> *${prefix}left [enable|disable]*
│> *${prefix}welcome [enable|disable]*
│> *${prefix}simi [enable|disable]*
│> *${prefix}antisticker [enable|disable]*
│> *${prefix}antilink [enable|disable]*
│> *${prefix}antibadword [enable|disable]*
│
│   *「 HNZM BOT 」*
╰──────────────────────── `
}
exports.groupcmd = groupcmd()
function readme() {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @nblhnzm354_*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @nblhnzm354_*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @nblhnzm354_*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme()
function info() {
    return `
╭──「 *INFORMATION* 」────
│───────────────────────
│> *BOT TYPE : NODEJS V14*
│> *NAME : HNZM BOT*
│> *VERSION : 3.0*
│> *GITHUB : github.com/TobyG74*
│> *TEAM : @TEAMINSIDE*
│> *THANKS TO : *Allah Swt,Orang Tua,Tobz,Veza,Mhankbarbar,MRHRTZ,Murzeme,MrG3P5,Dll.*
│───────────────────────
│   *「 HNZM BOT 」*
╰───────────────────────
`
}

exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *HNZM*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function sewa() {
    return `
╭──「 *IKLAN* 」────
│───────────────────────────
│ *BERIKUT INI IKLAN HNZM*
│───────────────────────────
│> *DAFTAR SEWA & BUAT BOT :*
│> *SEWA : 10K/GRUP (BULAN)*
│> *BUAT : 100K (BISA JADI OWNER)*
│> *PREMIUM ADMIN : 15K/BULAN (COMMAND PREMI)*
│> *PEMBAYARAN BISA MELALUI :*
│> *OVO, GOPAY, DANA, PULSA +5K*
│───────────────────────────
│> *KEUNTUNGAN SEWA BOT :*
│> *1. BISA MENJADI ADMIN HNZM*
│> *2. BISA MENDAPATKAN COMMAND ADMIN*
│> *KEUNTUNGAN PREMIUM ADM BOT :*
│> *1. BISA MENDAPATKAN COMMAND ADMIN PREMI*
│> *2. LIMIT UNLIMITED KHUSUS PREMI ADMIN*
│> *KEUNTUNGAN BUAT BOT :*
│> *1. BISA MENJADI OWNER BOT SENDIRI*
│> *2. BISA MENGGANTI NAMA BOT SENDIRI*
│> *3. BISA MEMBAWA BOT KE GROUP*
│> *4. BISA MENGGUNAKAN COMMAND OWNER*
│> *5. BISA MENYEWAKAN BOT KEMBALI*
│───────────────────────────
│> *JIKA MINAT IKLAN DIATAS*
│> *HARAP HUBUNGI NOMOR DIBAWAH :*
│> *wa.me/6281281524356*
││───────────────────────────
│   *「 HNZM BOT 」*
╰───────────────────────
`
}
exports.sewa = sewa()
function sumbang() {
    return `
╭──「 *DONATE* 」────
│───────────────────────────
│> *DONASI BISA MELALUI :*
│> *DANA/PULSA/OVO/GOPAY : 081295037142*
│> *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
│───────────────────────────
│   *「 HNZM BOT 」*
╰──────────────────────── 
`
}
exports.sumbang = sumbang()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist()
