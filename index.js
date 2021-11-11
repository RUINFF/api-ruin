<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta property="og:image" content="https://f.top4top.io/p_21403m17k0.jpg" /> 

<meta property="og:title" content="Ruin - APIs" /> <meta property="og:description" content="Made By Me Ruin"/> 

<link rel="shortcut icon" href="https://f.top4top.io/p_21403m17k0.jpg" type="image/x-icon" />

  <title>Ruin - Rest Api's</title>
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="css/ruang-admin.min.css" rel="stylesheet">
<audio autoplay="autoplay" hidden="hidden" src="https://f.top4top.io/m_214054nrs0.mp3"></audio>
</head>
<style>
  .bg-orange {
      background-color: #c3cf0f;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, #ffa426), to(#dda20a));
  background-image: linear-gradient(180deg, #dd7009 10%, #ee7708 100%);
  background-size: cover
}

.border-right-warning {
  border-right: .25rem solid #ffeb3b !important
}

.border-top-warning {
  border-top: .25rem solid #ffeb3b !important
}

.animated {
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: #FF0000;
	-webkit-animation: animatedBackground_c 2s infinite alternate;
}
@keyframes animatedBackground_c {
	0% {-webkit-text-stroke-color: #ff8b00}
	10% {-webkit-text-stroke-color: #e8ff00}
	20% {-webkit-text-stroke-color: #5dff00}
	30% {-webkit-text-stroke-color: #00ff2e}
	40% {-webkit-text-stroke-color: #00ffb9}
	50% {-webkit-text-stroke-color: #00b9ff}
	60% {-webkit-text-stroke-color: #002eff}
	70% {-webkit-text-stroke-color: #5d00ff}
	80% {-webkit-text-stroke-color: #e800ff}
	90% {-webkit-text-stroke-color: #ff008b}
	100% {-webkit-text-stroke-color: #ff0000}
}


.img-gg {
  width: 165px;
  height: 165px; 
 border: 3px solid #e3eaef}
  
  h7, .h7 {
  font-size: 0.7rem; }
  
  .font-gg {
  	font-size: 40px
  }

.rainbow {
  background: linear-gradient(
    to right, 
    #A6CE37, #ECE71C, #0FC6E6, #F95D44, #816271, #9F1958, #081B6A, #59D7EE);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 800px;
  background-position: center 0%;
  animation: background-slide 25s infinite linear;
}

@keyframes background-slide {
  100% {
    background-position: 8160px;
  }
}

.bg-gray-dark {
  background: #e3eaef; }
  
   




.container1 {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}

h11 {
  font-size: 5rem;
  margin-bottom: 0.5em;
}

h21 {
  margin-top: 1em;
  font-size: 2rem;
  margin-bottom: 0.5em;
}

.play-area {
	background-color: #e3eaef;
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: auto auto auto;
}

.block {
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  border: 3px solid black;
  transition: background 0.2s ease-in-out;
}

.block:hover {
  cursor: pointer;
  background: #0ff30f;
}

.occupied:hover {
  background: #ff3a3a;
}

.win {
  background: #0ff30f;
}

.win:hover {
  background: #0ff30f;
}

#block_0,
#block_1,
#block_2 {
  border-top: none;
}

#block_0,
#block_3,
#block_6 {
  border-left: none;
}

#block_6,
#block_7,
#block_8 {
  border-bottom: none;
}

#block_2,
#block_5,
#block_8 {
  border-right: none;
}

button1 {
  outline: none;
  border: 4px solid green;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: bold;
  background: none;
  transition: all 0.2s ease-in-out;
}

button1:hover {
  cursor: pointer;
  background: green;
  color: white;
}

.playerWin {
  color: blue;
}

.computerWin {
  color: red;
}

.draw {
  color: orangered;
}

@media only screen and (max-width: 600px) {

  h11 {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }

  h21 {
    margin-top: 1em;
    font-size: 1.3rem;
  }
}

</style>

<body id="page-top" onload="getvisitor();">
  <div id="wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-icon">
        	<img src="https://e.top4top.io/p_2010lz9211.jpg">
        </div>
        <div class="sidebar-brand-text mx-3">Ruin - Api</div>
      </a>
      <hr class="sidebar-divider my-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fas fa-fire"></i>
          <span>All Api's</span></a>
      </li>
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        API Features
      </div>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
          aria-expanded="true" aria-controls="collapseBootstrap">
          <i class="fas fa-download"></i>
          <span>Social Media</span>
        </a>
        <div id="collapseBootstrap" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Media Features</h6>
            <a class="collapse-item" href="api/yutub/video?url=https://youtu.be/v0ej6EJGqos&apikey=Ruin">YouTube Video</a>
            <a class="collapse-item" href="api/yutub/audio?url=https://youtu.be/v0ej6EJGqos&apikey=Ruin">YouTube Audio</a>
            <a class="collapse-item" href="api/yutub/search?video=Ustadz Abdul Somad&apikey=Ruin">YouTube Search</a>
            <a class="collapse-item" href="api/fbdown/?url=MASUKIN_URL&apikey=Ruin">Facebook</a>
            <a class="collapse-item" href="api/tiktod/?url=MASUKIN_URL&apikey=Ruin">Tiktok</a>
            <h6 class="collapse-header">Stalker Features</h6>
            <a class="collapse-item" href="api/tiktod/stalk/?username=MASUKIN_USERNAME&apikey=Ruin">Tiktok Stalk</a>
            <a class="collapse-item" href="api/ig/stalk?username=Ruinofc&apikey=Ruin">Instagram Stalk</a>
            <a class="collapse-item" href="api/github/stalk?username=Ruinofc&apikey=Ruin">Github Stalk</a>
            <a class="collapse-item" href="api/repository/stalk?username=api-Ruinofc&apikey=Ruin">Repository Stalk</a>
            </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseIslamic" aria-expanded="true"
          aria-controls="collapseIslamic">
          <i class="fas fa-star-and-crescent"></i>
          <span>Islamic</span>
        </a>
        <div id="collapseIslamic" class="collapse" aria-labelledby="headingIslamic" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Islamic Features</h6>
            <a class="collapse-item" href="api/hadits?kitab=bukhari&nomor=52&apikey=Ruin">Hadits Shahih</a>
            <a class="collapse-item" href="api/quran?surah=1&ayat=2&apikey=Ruin">Al Qur'an</a>
            <a class="collapse-item" href="api/muslim/tahlil?apikey=Ruin">Doa Tahlil</a>
            <a class="collapse-item" href="api/muslim/wirid?apikey=Ruin">Doa Wirid</a>
            <a class="collapse-item" href="api/muslim/asmaulhusna?apikey=Ruin">Asmaul Husna</a>
            <a class="collapse-item" href="api/muslim/doaharian?apikey=Ruin">Doa Harian</a>
            <a class="collapse-item" href="api/muslim/ayatkursi?apikey=Ruin">Ayat Kursi</a>
            <a class="collapse-item" href="api/kisahnabi?nabi=muhammad&apikey=Ruin">Kisah Nabi</a>
            <a class="collapse-item" href="api/muslim/niatshalat?apikey=Ruin">Niat Shalat</a>
            <a class="collapse-item" href="api/muslim/bacaanshalat?apikey=Ruin">Bacaan Shalat</a>
           <!-- <a class="collapse-item" href="api/jadwalshalat?kota=jakartautara&apikey=Ruin">Jadwal Shalat</a> -->
          </div>
        </div>
      </li>
       <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseKodepos" aria-expanded="true"
          aria-controls="collapseKodepos">
          <i class="fas fa-images"></i>
          <span>Images</span>
        </a>
        <div id="collapseKodepos" class="collapse" aria-labelledby="headingKodepos" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Images Features</h6>
            <a class="collapse-item" href="api/wallpaper/teknologi?apikey=Ruin">Wallpaper Teknologi</a>
            <a class="collapse-item" href="api/wallpaper/programming?apikey=Ruin">Wallpaper Programming</a>
            <a class="collapse-item" href="api/wallpaper/cyberspace?apikey=Ruin">Wallpaper CyberSpace</a>
            <a class="collapse-item" href="api/wallpaper/muslim?apikey=Ruin">Wallpaper Muslim</a>
            <a class="collapse-item" href="api/wallpaper/pegunungan?apikey=Ruin">Wallpaper Mountain View</a>
            </div>
            </div>
            </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGithub"
          aria-expanded="true" aria-controls="collapseGithub">
          <i class="fas fa-random"></i>
          <span>Random</span>
        </a>
        <div id="collapseGithub" class="collapse" aria-labelledby="headingGithub" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Random Features</h6>
            <a class="collapse-item" href="api/randomquote?apikey=Ruin">Quotes</a>
            <a class="collapse-item" href="api/randomquote/muslim?apikey=Ruin">Quotes Islami</a>
            <a class="collapse-item" href="api/quotes/kanye?apikey=Ruin">Quotes Kanye</a>
            <a class="collapse-item" href="api/random/asmaulhusna?apikey=Ruin">Asmaul Husna</a>
            <a class="collapse-item" href="api/random/meme?apikey=Ruin">Meme</a>
            <a class="collapse-item" href="api/random/wallpaper?apikey=Ruin">Wallpaper</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMaker"
          aria-expanded="true" aria-controls="collapseMaker">
          <i class="fas fa-images"></i>
          <span>Text Maker 2D</span>
        </a>
        <div id="collapseMaker" class="collapse" aria-labelledby="headingMaker" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">TextMaker2D Features</h6>
            <a class="collapse-item" href="api/maker?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 1</a>
            <a class="collapse-item" href="api/maker2?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 2</a>
            <a class="collapse-item" href="api/maker3?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 3</a>
            <a class="collapse-item" href="api/maker4?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 4</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMaker3D"
          aria-expanded="true" aria-controls="collapseMaker3D">
          <i class="fas fa-images"></i>
          <span>Text Maker 3D</span>
        </a>
        <div id="collapseMaker3D" class="collapse" aria-labelledby="headingMaker3D" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">TextMaker3D Features</h6>
            <a class="collapse-item" href="api/maker3d?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 1</a>
            <a class="collapse-item" href="api/maker3d/no2?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 2</a>
            <a class="collapse-item" href="api/maker3d/no3?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 3</a>
            <a class="collapse-item" href="api/maker3d/no4?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 4</a>
            <a class="collapse-item" href="api/maker3d/no5?text=Ya Allah Kabulkan DoaKu&apikey=Ruin">Maker 5</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMakerOther"
          aria-expanded="true" aria-controls="collapseMakerOther">
          <i class="fas fa-images"></i>
          <span>Text Maker Others</span>
        </a>
        <div id="collapseMakerOther" class="collapse" aria-labelledby="headingMakerOther" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">TextMaker Others Features</h6>
            <a class="collapse-item" href="api/maker/special/transformer?text=Transformer&apikey=Ruin">Transformer</a>
            <a class="collapse-item" href="api/maker/special/epep?text=Ruin&apikey=Ruin">Sertifikat Epep</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseText" aria-expanded="true"
          aria-controls="collapseText">
          <i class="fas fa-images"></i>
          <span>Photooxy</span>
        </a>
        <div id="collapseText" class="collapse" aria-labelledby="headingText" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Photooxy Features</h6>
            <a class="collapse-item" href="api/textmaker?text=halo&text2=hai&theme=glitch&apikey=Ruin">Glitch</a>
            <a class="collapse-item" href="api/textmaker?text=halo&text2=hai&text3=gwganteng&theme=google-suggestion&apikey=Ruin">Google Suggestion</a>
            <a class="collapse-item" href="api/textmaker/game?text=halo&text2=hai&theme=pubg&apikey=Ruin">PUBG</a>
            <a class="collapse-item" href="api/textmaker/game?text=halo&text2=hai&theme=battlefield&apikey=Ruin">BattleField</a>
            <a class="collapse-item" href="api/textmaker/senja?text=Ruin&theme=coffee-cup&apikey=Ruin">Coffee Cup</a>
            <a class="collapse-item" href="api/textmaker/senja?text=Ruin&theme=coffee-cup2&apikey=Ruin">Coffee Cup 2</a>
            <a class="collapse-item" href="api/textmaker/metallic?text=Ruin&theme=neon&apikey=Ruin">Neon</a>
            <a class="collapse-item" href="api/textmaker/metallic?text=Ruin&theme=glow&apikey=Ruin">Glow</a>
            <a class="collapse-item" href="api/textmaker/alam?text=Ruin&theme=summer&apikey=Ruin">Summer</a>
            <a class="collapse-item" href="api/textmaker/alam?text=Ruin&theme=flower&apikey=Ruin">Flower</a>
            <a class="collapse-item" href="api/textmaker/random?text=Ruin&theme=text-burn&apikey=Ruin">Text Burn</a>
            <a class="collapse-item" href="api/textmaker/random?text=Ruin&theme=art-quote&apikey=Ruin">Art Quote</a>
            <a class="collapse-item" href="api/textmaker/roses?text=Ruin&theme=wooden-boarch&apikey=Ruin">Wooden Boarch</a>
            <a class="collapse-item" href="api/textmaker/roses?text=Ruin&theme=golden&apikey=Ruin">Golden Roses</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAnime" aria-expanded="true"
          aria-controls="collapseAnime">
          <i class="fas fa-tv"></i>
          <span>Anime</span>
        </a>
        <div id="collapseAnime" class="collapse" aria-labelledby="headingAnime" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Anime/Manga Features</h6>
            <a class="collapse-item" href="api/anime/kusonime?search=planetarian&apikey=Ruin">Kusonime</a>
            <a class="collapse-item" href="api/manga?search=kimetsu no yaiba&apikey=Ruin">Manga</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAnime3" aria-expanded="true"
          aria-controls="collapseAnime3">
          <i class="fas fa-mug-hot"></i>
          <span>Asupan Timeline</span>
        </a>
        <div id="collapseAnime3" class="collapse" aria-labelledby="headingAnime" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Asupan Timeline Features</h6>
            <a class="collapse-item" href="api/asupan/tiktok?apikey=Ruin">Tiktok Random Video</a>
            <a class="collapse-item" href="api/asupan?apikey=Ruin">Asupan</a>
		<a class="collapse-item" href="api/asupan/cecan?apikey=Ruin">Asupan Cecan</a>

            <a class="collapse-item" href="api/asupan/hijaber?apikey=Ruin">Asupan Hijaber</a>
            <a class="collapse-item" href="api/asupan/santuy?apikey=Ruin">Asupan Santuy</a>
            <a class="collapse-item" href="api/asupan/ukty?apikey=Ruin">Asupan Ukhty</a>
            <a class="collapse-item" href="api/asupan/bocil?apikey=Ruin">Asupan Bocil</a>
            <a class="collapse-item" href="api/asupan/ghea?apikey=Ruin">Asupan Ghea</a>
            <a class="collapse-item" href="api/asupan/rikagusriani?apikey=Ruin">Asupan Rika</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAnime2" aria-expanded="true"
          aria-controls="collapseAnime2">
          <i class="fas fa-exclamation-triangle"></i>
          <span>NSFW</span>
        </a>
        <div id="collapseAnime2" class="collapse" aria-labelledby="headingAnime" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">NSFW Features</h6>
            <a class="collapse-item" href="api/nsfw/ass?apikey=Ruin">Ass</a>
            <a class="collapse-item" href="api/nsfw/ahegao?apikey=Ruin">Ahegao</a>
            <a class="collapse-item" href="api/nsfw/bdsm?apikey=Ruin">Bdsm</a>
            <a class="collapse-item" href="api/nsfw/blowjob?apikey=Ruin">Blowjob</a>
            <a class="collapse-item" href="api/nsfw/cuckold?apikey=Ruin">Cuckold</a>
            <a class="collapse-item" href="api/nsfw/cum?apikey=Ruin">Cum</a>
            <a class="collapse-item" href="api/nsfw/ero?apikey=Ruin">Ero</a>
            <a class="collapse-item" href="api/nsfw/femdom?apikey=Ruin">Femdom</a>
            <a class="collapse-item" href="api/nsfw/foot?apikey=Ruin">Foot</a>
            <a class="collapse-item" href="api/nsfw/gangbang?apikey=Ruin">Gangbang</a>
            <a class="collapse-item" href="api/nsfw/glasses?apikey=Ruin">Glasses</a>
            <a class="collapse-item" href="api/nsfw/hentai?apikey=Ruin">Hentai</a>
            <a class="collapse-item" href="api/nsfw/hentaigif?apikey=Ruin">Hentai (GIF)</a>
            <a class="collapse-item" href="api/nsfw/jahy?apikey=Ruin">Jahy</a>
            <a class="collapse-item" href="api/nsfw/masturbation?apikey=Ruin">Masturbation</a>
            <a class="collapse-item" href="api/nsfw/nsfwNeko?apikey=Ruin">Neko</a>
            <a class="collapse-item" href="api/nsfw/orgy?apikey=Ruin">Orgy</a>
            <a class="collapse-item" href="api/nsfw/panties?apikey=Ruin">Panties</a>
            <a class="collapse-item" href="api/nsfw/pussy?apikey=Ruin">Pussy</a>
            <a class="collapse-item" href="api/nsfw/thighs?apikey=Ruin">Thighs</a>
            <a class="collapse-item" href="api/nsfw/yuri?apikey=Ruin">Yuri</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGames" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fas fa-gamepad"></i>
                    <span>Games</span>
                </a>
                <div id="collapseGames" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Games Features</h6>
            <a class="collapse-item" href="/api/kuis/caklontong?apikey=Ruin">Cak Lontong</a>
            <a class="collapse-item" href="/api/kuis/tebakgambar?apikey=Ruin">Tebak Gambar</a>
            <a class="collapse-item" href="/api/kuis/family100?apikey=Ruin">Family 100</a>
            </div>
            </div>
        </li>
        <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGachaCewe" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fas fa-fire"></i>
                    <span>Gacha Cewe</span>
                </a>
                <div id="collapseGachaCewe" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Cecan Features</h6>
            <a class="collapse-item" href="/api/cewe/vietnam?apikey=Ruin">Cecan Vietnam</a>
            <a class="collapse-item" href="/api/cewe/malaysia?apikey=Ruin">Cecan Malaysia</a>
            <a class="collapse-item" href="/api/cewe/korea?apikey=Ruin">Cecan Korea</a>
            <a class="collapse-item" href="/api/cewe/indonesia?apikey=Ruin">Cecan Indonesia</a>
            <a class="collapse-item" href="/api/cewe/japan?apikey=Ruin">Cecan Japan</a>
            <a class="collapse-item" href="/api/cewe/thailand?apikey=Ruin">Cecan Thailand</a>
            <a class="collapse-item" href="/api/cewe/china?apikey=Ruin">Cecan China</a>
            </div>
            </div>
        </li>
        <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFilmApik" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fas fa-film"></i>
                    <span>FilmApik</span>
                </a>
                <div id="collapseFilmApik" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">FilmApik Features</h6>
            <a class="collapse-item" href="/api/filmapik/search?film=avenger&apikey=Ruin">Cari Film</a>
            <a class="collapse-item" href="/api/filmapik/kategori?film=action&apikey=Ruin">Cari Kategori Film</a>
            <a class="collapse-item" href="/api/filmapik/terbaru?apikey=Ruin">Film Terbaru</a>
            <a class="collapse-item" href="/api/filmapik/play?id=142455&apikey=Ruin">Play Film</a>
            </div>
            </div>
        </li>
        <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLk21" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fas fa-film"></i>
                    <span>Lk21</span>
                </a>
                <div id="collapseLk21" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Lk21 Features</h6>
            <a class="collapse-item" href="/api/lk21/search?film=avenger&apikey=Ruin">Cari Film</a>
            <a class="collapse-item" href="/api/lk21/terbaru?apikey=Ruin">Film Terbaru</a>
            <a class="collapse-item" href="/api/lk21/comingsoon?apikey=Ruin">Film Yg Akan Datang</a>
            <a class="collapse-item" href="/api/lk21/tvseries?apikey=Ruin">Series TV</a>
            <a class="collapse-item" href="/api/lk21/year?tahun=2021&apikey=Ruin">Berdasarkan Tahun</a>
            <a class="collapse-item" href="/api/lk21/country?negara=indonesia&apikey=Ruin">Berdasarkan Negara</a>
            <a class="collapse-item" href="/api/lk21/genre?tipe=action&apikey=Ruin">Berdasarkan Genre</a>
            </div>
            </div>
        </li>
        <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseNews" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fas fa-compass"></i>
                    <span>News</span>
                </a>
                <div id="collapseNews" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">News Features</h6>
            <a class="collapse-item" href="api/news">Jenis Berita</a>
            <a class="collapse-item" href="api/news/cnn?type=JENIS_BERITA&apikey=Ruin">Cnn News</a>
            <a class="collapse-item" href="api/news/cnbc?type=JENIS_BERITA&apikey=Ruin">CnBc News</a>
            <a class="collapse-item" href="api/news/republika?type=JENIS_BERITA&apikey=Ruin">Republika News</a>
            <a class="collapse-item" href="api/news/tempo?type=JENIS_BERITA&apikey=Ruin">Tempo News</a>
            <a class="collapse-item" href="api/news/antara?type=JENIS_BERITA&apikey=Ruin">Antara News</a>
            <a class="collapse-item" href="api/news/kumparan?type=JENIS_BERITA&apikey=Ruin">Kumparan News</a>
            </div>
            </div>
        </li>
	    <li class="nav-item">

                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGames1" aria-expanded="true" aria-controls="collapseForm">

                    <i class="fas fa-lock"></i>

                    <span>Encode & Decode</span>

                </a>

                <div id="collapseGames1" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">

                    <div class="py-2 collapse-inner rounded">

                        <h6 class="collapse-header">Encode & Decode Features</h6>

            <a class="collapse-item" href="api/base?apikey=Ruin&type=base64&encode=RuinGanteng">Encode Base64</a>

            <a class="collapse-item" href="api/base?apikey=Ruin&type=base64&decode=Q2hlZW1zR2FudGVuZw==">Decode Base64</a>

            <a class="collapse-item" href="api/base?apikey=Ruin&type=base32&encode=RuinGanteng">Encode Base32</a>

            <a class="collapse-item" href="api/base?apikey=Ruin&type=base32&decode=INUGKZLNONDWC3TUMVXGO===">Decode Base32</a>

            </div>

            </div>

        </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseother" aria-expanded="true"
          aria-controls="collapseother">
          <i class="fas fa-folder-open"></i>
          <span>Others</span>
        </a>
        <div id="collapseother" class="collapse" aria-labelledby="headingother" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Other Menu</h6>
            <a class="collapse-item" href="api/nulis?text=Ruin&apikey=Ruin">Nulis Buku</a>
            <a class="collapse-item" href="api/infonpm?query=Zhirrr-api&hostname=Zhirrr&apikey=Ruin">Info NPM</a>
            <a class="collapse-item" href="api/infogempa?apikey=Ruin">Info Gempa Terkini</a>
            <a class="collapse-item" href="api/infocuaca?provinsi=jakarta&apikey=Ruin">Info Cuaca Indonesia</a>
            <a class="collapse-item" href="api/infocuaca/dunia?apikey=Ruin">Info Cuaca Dunia</a>
            <a class="collapse-item" href="api/infocuaca/bandara?apikey=Ruin">Info Cuaca Bandara</a>
            <a class="collapse-item" href="api/infotsunami?apikey=Ruin">Info Tsunami</a>
            <a class="collapse-item" href="api/covidindo?apikey=Ruin">Covid Indo</a>
            <a class="collapse-item" href="api/covidworld?apikey=Ruin">Covid World</a>
            <a class="collapse-item" href="api/short/tiny?url=google.com&apikey=Ruin">Short Link</a>
            <a class="collapse-item" href="api/wikipedia?search=jembatan&apikey=Ruin">Wikipedia</a>
            <a class="collapse-item" href="api/drakorasia?search=tale&apikey=Ruin">Drakor Asia</a>
            <a class="collapse-item" href="api/fakedata?country=en&apikey=Ruin">Fake Data</a>
            <a class="collapse-item" href="api/hilih?kata=aku kan ganteng banget&apikey=Ruin">Kata Hilih</a>
            <a class="collapse-item" href="api/liriklagu?lagu=sayang&apikey=Ruin">Lirik Lagu</a>
            <a class="collapse-item" href="api/chordlagu?lagu=sayang&apikey=Ruin">Chord Lagu</a>
            <a class="collapse-item" href="api/kbbi?kata=pohon&apikey=Ruin">KBBI</a>
            <a class="collapse-item" href="api/kodepos?kota=jakarta&apikey=Ruin">Kode Pos</a>
            <a class="collapse-item" href="api/translate?kata=hi&apikey=Ruin">Translate</a>
            <a class="collapse-item" href="api/gabut?apikey=Ruin">Gabut</a>
          </div>
        </div>
      </li>
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
<div class="version"><b>Contact me</b></div>
      </div>
      <li class="nav-item">
          
            <a class="nav-link collapsed" href="api/about">
            <i class="fas fa-fw fa-info"></i>
                    <span>About This Web</span>
            </a>
      </li>
      <li class="nav-item">
          
            <a class="nav-link collapsed" href="https://wa.me/6285855159230">
            <i class="fab fa-fw fa-whatsapp"></i>
                    <span>WhatsApp</span>
            </a>
      </li>
    
      <li class="nav-item">
            <a class="nav-link collapsed" href="https://instagram.com/ardiwj13/">
            <i class="fab fa-fw fa-instagram"></i>
                    <span>Instagram</span>
            </a>
      </li>
       <li class="nav-item">
            <a class="nav-link collapsed" href="https://m.youtube.com/channel/UCqkpkST3ElnoHNAwEcuRX3g">
            <i class="fab fa-fw fa-youtube"></i>
                    <span>YouTube</span>
            </a>
      </li>
      <li class="nav-item">
            <a class="nav-link collapsed" href="https://github.com/RUINFF">
            <i class="fab fa-fw fa-github"></i>
                    <span>Github</span>
            </a>
      </li>
       <li class="nav-item">
            <a class="nav-link collapsed" href="https://apriza09.github.io/covid-id/">
            <i class="fas fa-biohazard"></i>
                    <span>Info Covid</span>
            </a>
      </li>
      <hr class="sidebar-divider">
      <div class="version"><b>Made With ♥️ By Ruin</b></div>
    </ul>
    <!-- Sidebar -->
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!-- TopBar -->

        <nav class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
          <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown">
                <form class="navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-1 small" placeholder="What do you want to look for?"
                      aria-label="Search" aria-describedby="basic-addon2" style="border-color: #3f51b5;">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">3+</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Notificacion
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-bell text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">March 12, 2021</div>
                    <span class="font-weight-bold">This rest api was made!</span>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">March 29, 2021</div>
                    This website has some problems!!!
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">May 2, 2021</div>
                    This website is back on as usual ✨
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-envelope fa-fw"></i>
                <span class="badge badge-warning badge-counter">2</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">
                  Message 
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://f.top4top.io/p_21403m17k0.jpg" style="max-width: 60px" alt="">
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">Beib❣️ Main Yuk ！！！.
                     </div>
                    <div class="small text-gray-500">Ruin · 2s</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://f.top4top.io/p_21403m17k0.jpg" style="max-width: 60px" alt="">
                    <div class="status-indicator bg-default"></div>
                  </div>
                  <div>
                    <div class="text-truncate">Tunggu bentar beib❣️ Hp ku low...
                    </div>
                    <div class="small text-gray-500">Tifany · 1s</div>
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-tasks fa-fw"></i>
                <span class="badge badge-success badge-counter">3</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">
                  Information
                </h6>
                <a class="dropdown-item align-items-center" href="#">
                  <div class="mb-3">
                    <div class="small text-gray-500">Want to add features 
                      <div class="small float-right"><b>50%</b></div>
                    </div>
                    <div class="progress" style="height: 12px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item align-items-center" href="#">
                  <div class="mb-3">
                    <div class="small text-gray-500">Lazy to add features
                      <div class="small float-right"><b>50%</b></div>
                    </div>
                    <div class="progress" style="height: 12px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item align-items-center" href="#">
                  <div class="mb-3">
                    <div class="small text-gray-500">I'm a beginner
                      <div class="small float-right"><b>100%</b></div>
                    </div>
                    <div class="progress" style="height: 12px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="https://www.instagram.com/Ruinofc">View All Information</a>
              </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img class="img-profile rounded-circle" src="img/logo.jpg" style="max-width: 60px">
                <span class="ml-2 d-none d-lg-inline text-white small"> ᴹᴿ᭄Ruinㄙ </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="https://wa.me/message/JBGU4J2DVYEDK1">
                  <i class="fab fa-fw fa-whatsapp"></i>
                  Whatsapp
                </a>
                <a class="dropdown-item" href="https://t.me/Ruinofc">
                  <i class="fab fa-fw fa-telegram"></i>
                  Telegram
                </a>
                <a class="dropdown-item" href="https://www.instagram.com/Ruinofc">
                  <i class="fab fa-fw fa-instagram"></i>
                  Instagram
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="https://api-Ruin.herokuapp.com/">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- Topbar -->  

      <!-- Container Fluid-->
        <div class="container-fluid" id="container-wrapper">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Beranda</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Beranda</li>
            </ol>
          </div>
<div class="col-xl-3 col-md-6 mb-4">
<div class="card h-100">
<div class="card-body">
<div class="row no-gutters align-items-center">
<div class="col mr-2">
<div class="text-xs font-weight-bold text-uppercase mb-1">Your IP</div>
<div class="h5 mb-0 font-weight-bold text-gray-800">
<div id="findipwidget"></div><div class="findiplink" id="findipurl">Source : <a href="http://www.find-ip.net/" target="_blank">Dari Sini</a></div><script defer src="https://api.find-ip.net/widget.js?width=240&bg=%23ffffff&border=white&textcol=grey&flag=0&"></script>
</div>
<div class="mt-2 mb-0 text-muted text-xs"> 
</span>
<span>Your IP Information</span>
</div>
</div>
<div class="col-auto">
</div>
</div>
</div>
</div>
</div>
		    
          <div class="col-xl-3 col-md-6 mb-4">
<div class="card h-100">
<div class="card-body">
<div class="row align-items-center">
<div class="col mr-2">
<div class="text-xs font-weight-bold text-uppercase mb-1">Api Total</div>
<div class="h5 mb-0 font-weight-bold text-gray-800">Cek Sendiri</div>
<div class="mt-2 mb-0 text-muted text-xs">
<span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 98.2%</span>
<span>Since last month</span>
</div>
</div>
<div class="col-auto">
<i class="fas fa-fire fa-2x text-primary"></i>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-md-6 mb-4">

<div class="card h-100">

<div class="card-body">

<div class="row no-gutters align-items-center">

<div class="col mr-2">

<div class="text-xs font-weight-bold text-uppercase mb-1">Time</div>

<div class="h5 mb-0 font-weight-bold text-gray-800">

<div class="jam" id="jam">00:00:00</div>

</div>

<div class="mt-2 mb-0 text-muted text-xs">

</span>

<span>Waktu Indonesia Barat</span>

</div>

</div>

<div class="col-auto">

<i class="far fa-clock fa-2x text-primary"></i>

</div>

</div>

</div>

</div>

</div>
<!--<div class="col-xl-3 col-md-6 mb-4">  
	<div class="card h-100">   
		<div class="card-body">  
			<div class="row align-items-center">   
				<div class="col mr-2">  
					<div class="text-xs font-weight-bold text-uppercase mb-1">Info</div>  
					<div class="h5 mb-0 font-weight-bold text-gray-800">Time</div>  
					<span class="text-success mr-2"><i class="fa fa-arrow-up"></i>  
						<b id="jam">00:00:00 </b><br></span> 
					<div class="mt-2 mb-0 text-muted text-xs">  
					</div>  
				</div>  
				<div class="col-auto">  
				</div>  
			</div>  
		</div> 
	</div> 
		</div>		

<div class="col-xl-3 col-md-6 mb-4">
  <div class="card h-100">
  <div class="card-body">
  <div class="row align-items-center">
  <div class="col mr-2">
  <div class="text-xs font-weight-bold text-uppercase mb-1">Info</div>
  <div class="h5 mb-0 font-weight-bold text-gray-800">Menuju Idul Fitri</div>
  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 
  <b id="time">3Hari  6Jam 59Menit 6Detik </b><br></span>
  <div class="mt-2 mb-0 text-muted text-xs">
  </div>
  </div>
  <div class="col-auto">
  </div>
  </div>
  </div>
  </div>
  </div>-->
<div class="col-xl-3 col-md-6 mb-4">

<div class="card h-100">

<div class="card-body">

<div class="row no-gutters align-items-center">

<div class="col mr-2">

<div class="text-xs font-weight-bold text-uppercase mb-1">Countdown</div>

<div class="h5 mb-0 font-weight-bold text-gray-800">

<div class="time" id="time">1Hari 1Jam 2Menit 20Detik</div>

</div>

<div class="mt-2 mb-0 text-muted text-xs">

</span>

<span>Menuju Tahun baru</span>

</div>

</div>

<div class="col-auto">

<i class="fas fa-star-and-crescent fa-2x text-primary"></i>

</div>

</div>

</div>

</div>

</div>

<div class="col-xl-3 col-md-6 mb-4">
<div class="card h-100">
<div class="card-body">
<div class="row no-gutters align-items-center">
<div class="col mr-2">
<div class="text-xs font-weight-bold text-uppercase mb-1">Visitor</div>
<div class="h5 mb-0 font-weight-bold text-gray-800">
<div class="visitor" id="visitor">00</div>
</div>
<div class="mt-2 mb-0 text-muted text-xs">

</span>
<span>This web visitor</span>
</div>
</div>
<div class="col-auto">
<i class="fas fa-eye fa-2x text-primary"></i>
</div>
</div>
</div>
</div>
</div>

          <!-- Batassss -->
 <div class="col-xl-4 col-lg-5">
              <div class="card mb-4">
              	<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              	<h6 class="m-0 font-weight-bold text-primary">A little information</h6>
                  <div class="dropdown no-arrow">
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink">
                      <div class="dropdown-header">Select Periode</div>
                      <a class="dropdown-item" href="#">Today</a>
                      <a class="dropdown-item" href="#">Week</a>
                      <a class="dropdown-item" href="#">This Year</a>
                    </div>
                  </div>
                </div>
		      <div class="card-body">

		<img src="https://f.top4top.io/p_21403m17k0.jpg" alt="My Life" width="100%" >

			<br><br><p><b>

						API KEY :<br>🤠 [ Free ] <a href="https://m.youtube.com/channel/UCqkpkST3ElnoHNAwEcuRX3g"><strong> APIKEY</strong></a> <br> <br>BOT WHATSAPP<br>1. SELF-PUBLIC BOT <a href="https://youtu.be/f82B8KxrZ0A"><strong>KLIK DISINI</strong></a><br>2. PUBLIC BOT <a href="https://youtu.be/f82B8KxrZ0A"><strong>KLIK DISINI</strong></a><br><br>

					<p>
					</b>
					</p>
				</div>
			</div>
		</div>
            <!-- Message From Customer-->
<div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h4 class="card-title text-center">TicTacToe</h4>
                    <h6 class="card-title text-center">Menangkan Untuk Mendapatkan Apikey</h6>
                    <hr>
          <div class="container1">
        <div class="play-area">
        </div>
        <h21 class="text-center" id="winner"></h21>
        <button1 onclick="reset_board()">REPEAT</button1>
    </div>
    </div>
    </div>
    </div>
<!-- Pie Chart -->
            
<!--Row-->

<!--<div class="card-body">
                  <div class="mb-3">
                    <div class="small text-gray-500">Hai Mastah Welcome
                      <div class="small float-right"><b>09-05-2021</b></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="small text-gray-500">Pemula Stah Jangan Di bully:(
                      <div class="small float-right"><b>09-05-2021</b></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="small text-gray-500">Update NSFW&ASUPAN!!!
                      <div class="small float-right"><b>11-05-2021</b></div>
                    </div>
                  </div>
                  <div class="mb-3">
                  </div>
                  <div class="mb-3">
                  </div>
                </div>
                <div class="card-footer text-center">
                </div>
              </div>
            </div>
            
          <!--Row-->

          <div class="row">
            <div class="col-lg-12 text-center">
              <p>Nemu Bug? Harap Lapor Ya!!! : <a href="https://wa.me/6285855159230"
                  class="btn btn-primary btn-sm" target="_blank"><i class="fas fa-bug"></i>&nbsp;Bug</a></p>
            </div>
          </div>

        </div>
        <!---Container Fluid-->
      </div>
      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; 2021 -
              <b><a href="https://www.instagram.com/ardiwj13/" target="_blank">Ruin</a> .Allright reserved</b>
            </span>
          </div>
        </div>
      </footer>
      <!-- Footer -->
    </div>
  </div>

  <!-- Scroll to top -->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

   <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/ruang-admin.js"></script>
  <script src="vendor/chart.js/Chart.min.js"></script>
  <script src="js/demo/chart-area-demo.js"></script>  
</body>
<script>
  function getvisitor(){
              var xhr = new XMLHttpRequest();
              var url = 'https://api.countapi.xyz/hit/api-Ruin.herokuapp.com/visits';
              xhr.onloadend = function(){
             data = JSON.parse(this.responseText);
  document.getElementById("visitor").textContent = data.value
              };
              xhr.open("GET", url, true);
              xhr.send();
  }
  
</script>
<script type="text/javascript">
// 1 detik = 1000
window.setTimeout("waktu()",1000);  
function waktu() {   
var tanggal = new Date();  
setTimeout("waktu()",1000);  
document.getElementById("jam").innerHTML = tanggal.getHours()+":"+tanggal.getMinutes()+":"+tanggal.getSeconds();
}
</script>
<script>
				// Akhir Hitungan Mundur
				var countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

				// Update Hitungan Mundur Setiap 1 Detik
				var x = setInterval(function() {

					// Mengambil Tanggal Dan Waktu
					var now = new Date().getTime();

					// Find the distance between now and the count down date
					var distance = countDownDate - now;

					// Kalkulator Waktu Hari, Jam, Menit, Detik 
					var days = Math.floor(distance / (1000 * 60 * 60 * 24));
					var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);

					// Menampilkan Hasil Di Dalam element Menggunakan id="time"
					document.getElementById("time").innerHTML = days + "Hari  " + hours + "Jam " + minutes + "Menit " + seconds + "Detik ";

					// Ketika countdown timer sudah berakhir Maka Tulisan Berakhir
					if (distance < 0) {
						clearInterval(x);
						document.getElementById("time").innerHTML = "Berakhir";
					}
				}, 1000);
			</script>
<script>
	const player = "O";
const computer = "X";

let board_full = false;
let play_board = ["", "", "", "", "", "", "", "", ""];

const board_container = document.querySelector(".play-area");

const winner_statement = document.getElementById("winner");

check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != player && element != computer) {
      flag = false;
    }
  });
  board_full = flag;
};


const check_line = (a, b, c) => {
  return (
    play_board[a] == play_board[b] &&
    play_board[b] == play_board[c] &&
    (play_board[a] == player || play_board[a] == computer)
  );
};

const check_match = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 1}`).classList.add("win");
      document.querySelector(`#block_${i + 2}`).classList.add("win");
      return play_board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 3}`).classList.add("win");
      document.querySelector(`#block_${i + 6}`).classList.add("win");
      return play_board[i];
    }
  }
  if (check_line(0, 4, 8)) {
    document.querySelector("#block_0").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_8").classList.add("win");
    return play_board[0];
  }
  if (check_line(2, 4, 6)) {
    document.querySelector("#block_2").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_6").classList.add("win");
    return play_board[2];
  }
  return "";
};

const check_for_winner = () => {
  let res = check_match()
  if (res == player) {
    winner.innerText = "You Win Apikey: Ruin";
    winner.classList.add("playerWin");
    board_full = true
  } else if (res == computer) {
    winner.innerText = "Awokawok Kalah Ama Komputer:v";
    winner.classList.add("computerWin");
    board_full = true
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
};


const render_board = () => {
  board_container.innerHTML = ""
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`
    if (e == player || e == computer) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

const game_loop = () => {
  render_board();
  check_board_complete();
  check_for_winner();
}

const addPlayerMove = e => {
  if (!board_full && play_board[e] == "") {
    play_board[e] = player;
    game_loop();
    addComputerMove();
  }
};

const addComputerMove = () => {
  if (!board_full) {
    do {
      selected = Math.floor(Math.random() * 9);
    } while (play_board[selected] != "");
    play_board[selected] = computer;
    game_loop();
  }
};

const reset_board = () => {
  play_board = ["", "", "", "", "", "", "", "", ""];
  board_full = false;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  render_board();
};

//initial render
render_board();
</script>

</html>
