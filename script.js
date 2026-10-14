// Ganti "img" dengan alamat foto asli (mis. "foto/kelas-web.jpg"). Jika kosong, tampil ilustrasi emoji.
const items=[
 {e:"💻",tag:"Kelas Web",t:"Membangun Website Pertama dari Nol",d:"Peserta belajar HTML, CSS, dan JavaScript lewat praktik langsung. Dalam satu sesi, setiap orang sudah bisa menampilkan halaman web buatan sendiri dengan bimbingan mentor di samping mereka.",m:"Lihat kelas web",img:"images/kelas-web.jpg",x:{w:"Sabtu, 09.00-15.00",p:"Lab Komputer A",s:"20 orang per kelas",i:"Kelas ini ditujukan bagi pemula yang belum pernah menulis kode. Setiap peserta membawa pulang satu halaman web buatan sendiri yang bisa dipamerkan sebagai portofolio awal.",m:["Struktur halaman dengan HTML","Tampilan dan tata letak dengan CSS","Interaksi dasar dengan JavaScript","Mempublikasikan website ke internet"]}},
 {e:"🐍",tag:"Kelas Python",t:"Melatih Logika dengan Python",d:"Materi dimulai dari variabel dan perulangan, lalu naik ke fungsi dan pemecahan soal. Suasana kelas santai, sehingga peserta berani bertanya dan mencoba berulang kali sampai paham.",m:"Lihat kelas Python",img:"images/kelas-python.jpg",x:{w:"Minggu, 09.00-14.00",p:"Lab Komputer B",s:"15 orang per kelas",i:"Python dipilih karena sintaksnya ramah bagi pemula. Fokus kelas ini adalah melatih cara berpikir logis lewat soal-soal kecil yang disusun bertahap dari mudah ke menantang.",m:["Variabel, tipe data, dan input-output","Percabangan dan perulangan","Fungsi dan struktur data list serta dictionary","Mini proyek: kalkulator dan game tebak angka"]}},
 {e:"👥",tag:"Pair Programming",t:"Ngoding Berdua, Bug Lebih Cepat Ketemu",d:"Dua peserta mengerjakan satu proyek di satu layar, bergantian menulis kode dan meninjau. Cara ini melatih komunikasi, kerja tim, dan kebiasaan membaca kode orang lain.",m:"Lihat sesi pair",img:"images/pair-programming.jpg",x:{w:"Setiap Rabu, 13.00-16.00",p:"Ruang Kolaborasi",s:"Berpasangan, 24 orang",i:"Dalam sesi ini peserta bergantian berperan sebagai driver yang menulis kode dan navigator yang meninjau. Pasangan diacak tiap minggu agar peserta terbiasa bekerja dengan gaya yang berbeda.",m:["Peran driver dan navigator","Cara berdiskusi tentang kode dengan sopan","Teknik mencari bug bersama","Review kode sederhana"]}},
 {e:"🏆",tag:"Hackathon",t:"Hackathon Akhir Pekan 24 Jam",d:"Peserta dibagi menjadi tim kecil untuk membuat aplikasi dari ide sampai prototipe. Di akhir acara, tiap tim mempresentasikan karyanya di depan juri dan mendapat masukan langsung.",m:"Lihat hackathon",img:"images/hackathon.jpg",x:{w:"Sabtu pagi sampai Minggu pagi",p:"Aula Utama",s:"Tim 4-5 orang",i:"Hackathon diadakan setiap akhir angkatan sebagai ujian praktik. Konsumsi, mentor pendamping, dan ruang istirahat disediakan sehingga peserta bisa fokus mengembangkan ide.",m:["Brainstorming ide dan pembagian tugas","Membuat prototipe aplikasi","Presentasi 5 menit di depan juri","Penilaian dan hadiah untuk tim terbaik"]}},
 {e:"🎤",tag:"Seminar",t:"Sharing Santai Bersama Praktisi Industri",d:"Software engineer dari berbagai perusahaan berbagi cerita tentang pekerjaan sehari-hari, kesalahan yang pernah dibuat, dan tips mempersiapkan portofolio untuk melamar kerja.",m:"Lihat seminar",img:"images/seminar.jpg",x:{w:"Satu kali per bulan, 19.00-21.00",p:"Aula Utama dan Zoom",s:"Terbuka untuk 100 orang",i:"Seminar menghadirkan praktisi yang bekerja di dunia teknologi. Peserta bisa bertanya langsung tentang jalur karier, cara belajar yang efektif, dan apa yang dicari perusahaan saat merekrut.",m:["Kisah perjalanan karier praktisi","Tips menyusun portofolio dan CV","Gambaran kebutuhan industri","Sesi tanya jawab dan networking"]}},
 {e:"💬",tag:"Diskusi Tim",t:"Diskusi dan Kolaborasi Tim",d:"Peserta duduk melingkar bersama mentor untuk membahas proyek mereka sambil menikmati kopi. Setiap orang bergantian menyampaikan ide, menjelaskan kendala yang dihadapi, lalu mencari solusinya bersama dalam suasana yang santai dan terbuka.",m:"Lihat diskusi",img:"images/diskusi-tim.jpg",x:{w:"Setiap Jumat, 15.00-17.00",p:"Ruang Diskusi dan Kafe Belajar",s:"Tim 4-5 orang",i:"Sesi ini dibuat agar peserta terbiasa menyampaikan pendapat dan mendengarkan rekan satu tim. Suasananya santai, sehingga setiap orang nyaman bertanya, berdiskusi dengan sehat, dan menyepakati langkah berikutnya untuk proyek bersama.",m:["Menyampaikan ide dan kendala proyek","Membagi tugas antaranggota tim","Memberi dan menerima masukan dengan baik","Menyusun rencana kerja minggu berikutnya"]}}
];
// Ilustrasi tiap kegiatan (SVG). Foto asli bisa dipakai lewat isian img pada data items.
const sk=['#f2c9a0','#c68a5e','#8d5a3b','#e6b184'];
const svg=(bg,x)=>`<svg viewBox='0 0 320 190' preserveAspectRatio='xMidYMid slice' aria-hidden='true'><rect width='320' height='190' fill='${bg}'/>${x}</svg>`;
const person=(x,y,s,c,h)=>`<g transform='translate(${x} ${y})'><rect x='-14' y='22' width='28' height='34' rx='12' fill='${c}'/><circle cy='10' r='13' fill='${s}'/><path d='M-13 8a13 13 0 0 1 26 0c-6-5-18-5-26 0z' fill='${h}'/></g>`;
const lap=(x,y,c)=>`<g transform='translate(${x} ${y})'><rect width='64' height='40' rx='4' fill='#1a1240'/><rect x='5' y='5' width='54' height='30' rx='2' fill='${c}'/><rect x='10' y='10' width='24' height='3' fill='#fff' opacity='.7'/><rect x='10' y='17' width='36' height='3' fill='#fff' opacity='.5'/><rect x='10' y='24' width='18' height='3' fill='#fff' opacity='.7'/><rect x='-8' y='40' width='80' height='6' rx='3' fill='#cfc7f5'/></g>`;
const floor=`<rect y='150' width='320' height='40' fill='rgba(0,0,0,.25)'/><rect x='14' y='138' width='292' height='12' rx='4' fill='#f6f3ff'/>`;
const desk=(a,b,c1,c2)=>person(112,96,sk[0],c1,'#1a1240')+person(268,96,sk[1],c2,'#3a2f7a')+floor+lap(24,92,a)+lap(176,92,b);
const grad=(x,s)=>person(x,96,s,'#1a1240','#3a2f7a')+`<path d='M${x-22} 90l22-9 22 9-22 9z' fill='#10201b'/><rect x='${x+16}' y='90' width='2' height='10' fill='#ffd23f'/>`;
const SCENES={
'Kelas Web':svg('#7a52f4',`<rect x='60' y='10' width='200' height='76' rx='8' fill='#fff'/><rect x='60' y='10' width='200' height='14' rx='8' fill='#e9e4ff'/><circle cx='72' cy='17' r='3' fill='#ff6b57'/><circle cx='82' cy='17' r='3' fill='#ffd23f'/><circle cx='92' cy='17' r='3' fill='#27d9a5'/><rect x='76' y='34' width='90' height='9' rx='3' fill='#1a1240'/><rect x='76' y='48' width='64' height='5' rx='2' fill='#b9b0e8'/><rect x='76' y='62' width='40' height='12' rx='5' fill='#ff6b57'/><rect x='190' y='32' width='56' height='44' rx='6' fill='#27d9a5'/><text x='218' y='60' font-size='18' text-anchor='middle' font-family='monospace' font-weight='700' fill='#1a1240'>&lt;/&gt;</text>`+desk('#27d9a5','#ffd23f','#ff6b57','#27d9a5')),
'Kelas Python':svg('#2f6fb0',`<rect x='50' y='8' width='220' height='78' rx='8' fill='#10201b'/><g font-family='monospace' font-size='11'><text x='62' y='28' fill='#ff8fa3'>def <tspan fill='#ffd23f'>sapa</tspan><tspan fill='#fff'>(nama):</tspan></text><text x='74' y='46' fill='#fff'>print(<tspan fill='#27d9a5'>'Halo'</tspan>, nama)</text><text x='62' y='64' fill='#ff8fa3'>for <tspan fill='#fff'>i in range(3):</tspan></text><text x='74' y='80' fill='#27d9a5'>sapa('Sheva')</text></g>`+desk('#ffd23f','#27d9a5','#ffd23f','#27d9a5')),
'Pair Programming':svg('#8a5cc2',`<g font-family='sans-serif' font-weight='700' font-size='12'><rect x='40' y='14' width='84' height='32' rx='12' fill='#fff'/><path d='M96 46l8 10 4-10z' fill='#fff'/><text x='82' y='35' text-anchor='middle' fill='#1a1240'>Ada bug?</text><rect x='196' y='24' width='84' height='32' rx='12' fill='#ffd23f'/><path d='M214 56l-8 10 14-10z' fill='#ffd23f'/><text x='238' y='45' text-anchor='middle' fill='#1a1240'>Ketemu!</text></g>`+person(100,96,sk[2],'#ffd23f','#1a1240')+person(226,96,sk[3],'#27d9a5','#3a2f7a')+floor+`<g transform='translate(128 88) scale(1.1)'><rect width='64' height='40' rx='4' fill='#1a1240'/><rect x='5' y='5' width='54' height='30' rx='2' fill='#ff6b57'/><rect x='10' y='11' width='30' height='3' fill='#fff'/><rect x='10' y='19' width='40' height='3' fill='#fff' opacity='.6'/><rect x='-8' y='40' width='80' height='6' rx='3' fill='#cfc7f5'/></g>`),
'Hackathon':svg('#d98a0c',`<rect x='86' y='10' width='148' height='32' rx='8' fill='#1a1240'/><text x='160' y='32' font-size='17' font-weight='800' text-anchor='middle' font-family='sans-serif' fill='#ffd23f'>HACKATHON</text>`+[[30,20,'#fff'],[270,18,'#27d9a5'],[60,58,'#ff6b57'],[262,62,'#fff'],[120,60,'#27d9a5'],[210,58,'#ff6b57']].map(c=>`<circle cx='${c[0]}' cy='${c[1]}' r='4' fill='${c[2]}'/>`).join('')+`<path d='M146 56h28v12a14 14 0 0 1-28 0z' fill='#ffd23f'/><rect x='156' y='80' width='8' height='10' fill='#ffd23f'/><rect x='150' y='90' width='20' height='5' rx='2' fill='#ffd23f'/>`+desk('#ff6b57','#27d9a5','#27d9a5','#ff6b57')),
'Seminar':svg('#b83553',`<rect x='150' y='12' width='140' height='86' rx='8' fill='#fff'/><rect x='166' y='64' width='16' height='24' fill='#6a3df0'/><rect x='190' y='50' width='16' height='38' fill='#ff6b57'/><rect x='214' y='36' width='16' height='52' fill='#27d9a5'/><rect x='238' y='26' width='16' height='62' fill='#ffd23f'/><path d='M164 40l50-14' stroke='#1a1240' stroke-width='3' fill='none'/>`+person(70,60,sk[1],'#1a1240','#1a1240')+`<rect x='44' y='112' width='52' height='46' rx='5' fill='#6a3df0'/><rect y='156' width='320' height='34' fill='rgba(0,0,0,.3)'/>`+[30,90,150,210,270].map((x,k)=>`<ellipse cx='${x}' cy='190' rx='28' ry='20' fill='${k%2?'#2a0a14':'#3b0f1c'}'/><circle cx='${x}' cy='160' r='13' fill='${k%2?'#3b0f1c':'#2a0a14'}'/>`).join('')),
'Wisuda':svg('#2a8f8f',Array.from({length:8},(_,k)=>`<path d='M${k*40} 0h40l-20 20z' fill='${['#ffd23f','#ff6b57','#fff'][k%3]}'/>`).join('')+`<text x='160' y='62' font-size='18' font-weight='800' text-anchor='middle' font-family='sans-serif' fill='#fff'>SELAMAT!</text><path d='M34 50l16-6 16 6-16 6z' fill='#10201b' transform='rotate(-20 50 50)'/><path d='M270 44l16-6 16 6-16 6z' fill='#10201b' transform='rotate(18 286 44)'/><path d='M200 26l16-6 16 6-16 6z' fill='#10201b' transform='rotate(-8 216 26)'/><rect y='150' width='320' height='40' fill='rgba(0,0,0,.25)'/>`+grad(70,sk[0])+grad(160,sk[1])+grad(250,sk[2]))
};
const grid=document.getElementById('grid');
items.forEach(i=>{
  const c=document.createElement('article');c.className='card';c.tabIndex=0;
  c.innerHTML=`<div class="photo" role="img" aria-label="${i.t}"><div class="bg"></div>${i.img?`<img src="${i.img}" alt="${i.t}">`:`<span class="scene">${SCENES[i.tag]}</span>`}<span class="badge">${i.tag}</span></div>
  <div class="body"><h3>${i.t}</h3><p>${i.d}</p><button type="button" class="more">${i.m} &gt;&gt;</button></div>`;
  c.addEventListener('click',()=>openInfo(i));
  c.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target===c)openInfo(i)});
  grid.appendChild(c);
});

// Mode terang / gelap
const root=document.documentElement,tb=document.getElementById('theme'),ic=document.getElementById('theme-ic');
const mq=matchMedia('(prefers-color-scheme:dark)');
let spin=0;
const current=()=>root.dataset.theme||(mq.matches?'dark':'light');
function paint(){const d=current()==='dark';ic.textContent=d?'☀️':'🌙';tb.setAttribute('aria-label',d?'Ganti ke mode terang':'Ganti ke mode gelap');tb.title=tb.getAttribute('aria-label')}
try{const s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
tb.addEventListener('click',()=>{
  root.dataset.theme=current()==='dark'?'light':'dark';
  try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}
  spin+=360;ic.style.transform='rotate('+spin+'deg)';paint();
});
mq.addEventListener('change',paint);paint();

// Dialog informasi galeri
const info=document.getElementById('info');
const cols=['var(--violet)','var(--coral)','var(--mint)'];
function openInfo(i){
  const g=id=>document.getElementById(id);
  g('i-head').style.background=cols[items.indexOf(i)%3];
  g('i-em').textContent=i.e;g('i-tag').textContent=i.tag;g('i-t').textContent=i.t;
  g('i-info').textContent=i.x.i;g('i-w').textContent=i.x.w;g('i-p').textContent=i.x.p;g('i-s').textContent=i.x.s;
  g('i-m').innerHTML='';
  i.x.m.forEach(t=>{const li=document.createElement('li');li.textContent=t;g('i-m').appendChild(li)});
  info.showModal();
}
document.getElementById('i-tutup').addEventListener('click',()=>info.close());
document.getElementById('i-daftar').addEventListener('click',()=>{info.close();show('register')});
info.addEventListener('click',e=>{if(e.target===info)info.close()});

// Efek mengetik di hero
const lines=[
 [['k','const '],['','akademi = '],['s','"Coding Academy Sheva"'],['','; ']],
 [['k','function '],['f','sapa'],['','(nama) {\n  '],['k','return '],['s','`Halo, ${nama}!`'],['','; \n}']],
 [['f','sapa'],['','('],['s','"calon programmer"'],['',');']]
];
const typed=document.getElementById('typed');
const flat=lines.map(l=>l.map(p=>p[1]).join('')).join('\n\n');
const html=lines.map(l=>l.map(p=>p[0]?`<span class="${p[0]}">${p[1].replace(/</g,'&lt;')}</span>`:p[1]).join('')).join('\n\n');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){typed.innerHTML=html}
else{
  // ketik per karakter pada teks polos, lalu ganti dengan versi berwarna
  let n=0;const t=setInterval(()=>{
    typed.textContent=flat.slice(0,++n);typed.insertAdjacentHTML('beforeend','<span class="caret"></span>');
    if(n>=flat.length){clearInterval(t);typed.innerHTML=html+'<span class="caret"></span>'}
  },38);
}

// Navigasi 2 tampilan
const views={gallery:document.getElementById('gallery'),register:document.getElementById('register')};
const navBtns=document.querySelectorAll('nav button');
function show(v){
  Object.entries(views).forEach(([k,el])=>el.hidden=k!==v);
  navBtns.forEach(b=>b.dataset.view===v?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current'));
  window.scrollTo(0,0);
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));

// Form
const $=id=>document.getElementById(id);
const form=$('form'),dlg=$('dlg'),result=$('result');
let data=null;
function validate(){
  const v={nik:$('nik').value.trim(),nama:$('nama').value.trim(),hp:$('hp').value.trim(),
    alamat:$('alamat').value.trim(),bahasa:$('bahasa').value,
    jk:(form.querySelector('input[name=jk]:checked')||{}).value||''};
  const e={
    nik:/^\d{16}$/.test(v.nik)?'':'NIK harus 16 digit angka.',
    nama:v.nama.length>=3?'':'Nama lengkap minimal 3 karakter.',
    jk:v.jk?'':'Pilih jenis kelamin.',
    hp:/^(\+62|62|0)8\d{7,11}$/.test(v.hp.replace(/[\s-]/g,''))?'':'Masukkan nomor HP yang valid, contoh 081234567890.',
    alamat:v.alamat.length>=5?'':'Alamat belum diisi.',
    bahasa:v.bahasa?'':'Pilih satu bahasa pemrograman.'
  };
  Object.keys(e).forEach(k=>$('e-'+k).textContent=e[k]);
  return Object.values(e).every(x=>!x)?v:null;
}
$('nik').addEventListener('input',e=>e.target.value=e.target.value.replace(/\D/g,''));
form.addEventListener('submit',ev=>{ev.preventDefault();data=validate();if(data)dlg.showModal();});
$('no').addEventListener('click',()=>dlg.close());
$('yes').addEventListener('click',()=>{
  dlg.close();
  const rows=[['NIK',data.nik],['Nama lengkap',data.nama],['Jenis kelamin',data.jk],['No. HP',data.hp],['Alamat',data.alamat],['Bahasa pemrograman',data.bahasa]];
  const dl=$('dl');dl.innerHTML='';
  rows.forEach(([k,val])=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=k;dd.textContent=val;dl.append(dt,dd);});
  form.hidden=true;result.hidden=false;
});
$('again').addEventListener('click',()=>{form.reset();form.hidden=false;result.hidden=true;});
form.addEventListener('reset',()=>document.querySelectorAll('.err').forEach(e=>e.textContent=''));
