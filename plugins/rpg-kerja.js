
let handler = async (m, {conn, command, args, usedPrefix}) => {
let type = (args[0] || '').toLowerCase()
let users = global.db.data.users[m.sender]
let time = global.db.data.users[m.sender].lastkerja + 300000
let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
   let _timers = (0 - __timers)
    let timers = clockString(_timers) 
    //JANGAN DI OTAK ATIK
//PEMBATAS
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
//Uang
let uangm = Math.floor(Math.random() * 10) + 4000
let duit = Math.floor(Math.random() * 20) + 2500
let duitm = Math.floor(Math.random() * 50) + 9500
let duitd = Math.floor(Math.random() * 62) + 5200
let duitr = Math.floor(Math.random() * 20) + 4200
let duitk = Math.floor(Math.random() * 70) + 7800
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
            let pecat = (_pecat * 1)
            let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
            let dpecat = (_dpecat * 1)
            let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
//GAK RAPIH G GANTENG
const sections = [
    {
	title: 'List Kerjaan',
	rows: [
{title: "🛵 Ojek", rowId: usedPrefix + command + ' ojek'},
{title: "🥗 Pedagang", rowId: usedPrefix + command + ' pedagang'},
{title: "🏥 ️Dokter", rowId: usedPrefix + command + ' dokter'},
{title: "🌾 Petani", rowId: usedPrefix + command + ' petani'},
{title: "🏯 Montir", rowId: usedPrefix + command + ' montir'},
{title: "⚒️ Kuli", rowId: usedPrefix + command + ' kuli'}
	]
    }
]

const listMessage = {
  text: `Silakan Pilih Kerjaan Di Bawah Dasar Pengangguran`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `Pilih Disini️`,
  sections
}
//PEMBATAS\\
if (/kerjadulu|kerja|work/i.test(command)) {
switch(type) {
	case 'ojek':
	if (global.db.data.users[m.sender].ojek == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama ${clockString(time - new Date())}`
	global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Sudah Mengantarkan Dan Mengewe *${penumpang}* 🚗\nKamu Mendapatkan Uang Senilai *Rp ${uangm} 💹* Dan Nomor Wa Penumpang 🗿`)
break
     case 'pedagang':
     if (global.db.data.users[m.sender].pedagang == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama\n ${clockString(time - new Date())}`
	global.db.data.users[m.sender].atm += duit
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Ada Pembeli Yg Membeli *${dagangan}* 🛒\nDan Mendapatkan Uang Senilai *Rp ${duit} 💹*`)
	if (pecat > 1 ) {
                   global.db.data.users[m.sender].pedagang -= pecat * 1
                   m.reply(ppecat)
            }
break
      case 'dokter':
 if (global.db.data.users[m.sender].dokter == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama\n ${clockString(time - new Date())}`
	global.db.data.users[m.sender].atm += duitm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Menyembuhkan Pasien *${pasien}* 💉\nDan Mendapatkan Uang Senilai *Rp ${duitm}* 💹`)
break
       case 'petani':
if (global.db.data.users[m.sender].petani == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama\n ${clockString(time - new Date())}`
	global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`${panen} Sudah Panen !🌽 Dan Menjualnya 🧺\nDan Mendapatkan Uang Senilai Rp *${duitd} 💹*`)
break
     case 'montir':
 if (global.db.data.users[m.sender].montir == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama\n ${clockString(time - new Date())}`
	global.db.data.users[m.sender].atm += duitr
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru saja Mendapatkan Pelanggan Dan Memperbaiki *${bengkel} 🔧*\nDan Kamu Mendapatkan Uang Senilai *Rp ${duitr}* 💹`)
break
      case 'kuli':
 if (global.db.data.users[m.sender].kuli == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama\n ${clockString(time - new Date())}`
	global.db.data.users[m.sender].atm += duitk
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru Saja Selesai ${rumah} 🔨\nDan mendapatkan Uang Senilai *Rp ${duitk} 💹*`)
break
default:
                        return conn.sendMessage(m.chat, listMessage, {quoted: null})
                }
                }
                
                }
///AKSJDDJ
handler.help = ['kerja','work']
handler.tags = ['rpg']
handler.command = /^kerja$/i 

export default handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
