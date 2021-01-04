<template>
<section>
    
<!-- sidebar -->
  <div class="bg-transparent hidden md:block 
  max-h-screen md:max-h-full overflow-scroll  m-3 pr-24 leading-5 scrollbar ">
      <div>
        <div v-for="link in links" :key="link.name" 
        class="hover:bg-red-100 m-0.5 p-3">
          <div v-if="link.head" class="font-semibold">{{ link.name }}</div>
          <NuxtLink v-if="!link.head" :to="link.ref"> {{ link.name }}</NuxtLink>
        </div>
      </div>
  </div>

<!-- mobil menu -->
<section class=" md:hidden" >
    <div>
      <svg  v-on:click="showmenu=!showmenu" class="m-3 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <div v-if="showmenu" v-on:click="showmenu=!showmenu"  class="absolute  h-screen overscroll-contain
     w-screen overflow-scroll bg-gray-200 bg-opacity-70 pb-20">
        <div v-for="link in links" :key="link.name" 
        class=" bg-pink-200 border-l-2 border-red-600 w-2/3 p-3 shadow-lg">
          <div v-if="link.head" class="font-semibold">{{ link.name }}</div>
          <NuxtLink v-if="!link.head" :to="link.ref"> {{ link.name }}</NuxtLink>
        </div>
    </div>
</section>

</section>
</template>

<script>
export default {
     data: function() {
    return {
      showmenu: false,
      links: [
        {
          name: 'A gitár',
          ref: '/',
          head: true
        },
        {
          name: 'A gitár',
          ref: '/gitar/agitar',
          head: false
        },
        {
          name: 'Gitárfajták',
          ref: '/gitar/gitarfajtak',
          head: false
        },
        {
          name: 'Húrok',
          ref: '/gitar/hurok',
          head: false
        },
        {
          name: 'Milyen gitárt vegyek?',
          ref: '/gitar/milyen-gitart-vegyek',
          head: false
        },
        {
          name: 'Az elektromos gitár',
          ref: '/',
          head: true
        },        {
          name: 'Történelem',
          ref: '/elektromosgitar/tortenelem',
          head: false
        },
        {
          name: 'A hangszedő',
          ref: '/elektromosgitar/hangszedo',
          head: false
        },
        {
          name: 'Kezelőszervek',
          ref: '/elektromosgitar/kezeloszervek',
          head: false
        },
        {
          name: 'Erősítő',
          ref: '/elektromosgitar/erosito',
          head: false
        },
        {
          name: 'Az erősítő kezelőszervei',
          ref: '/elektromosgitar/erosito-kezeloszervei',
          head: false
        },
        {
          name: 'Effektek',
          ref: '/elektromosgitar/effektek',
          head: false
        },       
        {
          name: 'Erősítő és effekt modellező szoftver',
          ref: '/elektromosgitar/erosito-es-effekt-modellezo-szoftver',
          head: false
        },
        {
          name: 'A nagy kérdések',
          ref: '/elektromosgitar/nagy-kerdesek',
          head: false
        },
        {
          name: 'Zeneelmélet',
          ref: '/',
          head: true
        },
        {
          name: 'Amit tudni kell',
          ref: '/zeneelmelet/amit-tudni-kell',
          head: false
        },
        {
          name: 'Az akkord',
          ref: '/zeneelmelet/akkord',
          head: false
        },
        {
          name: 'Jelölések',
          ref: '/zeneelmelet/jelolesek',
          head: false
        },        {
          name: 'A tabulatúra',
          ref: '/zeneelmelet/tabulatura',
          head: false
        },
        {
          name: 'Akkordjelölések',
          ref: '/zeneelmelet/akkordjeloles',
          head: false
        },
        {
          name: 'Mielőtt nekikezdünk',
          ref: '/',
          head: true
        },
        {
          name: 'Mire lesz szükségem?',
          ref: '/mielott-nekikezdunk/mire-lesz-szuksegem',
          head: false
        },
        {
          name: 'Mennyi idő?',
          ref: '/mielott-nekikezdunk/mennyi-ido',
          head: false
        },
        {
          name: 'Gyakorlás',
          ref: '/mielott-nekikezdunk/gyakorlas',
          head: false
        },        {
          name: 'A gitár tartása',
          ref: '/mielott-nekikezdunk/gitartartas',
          head: false
        },
        {
          name: 'A hangok lefogása',
          ref: '/mielott-nekikezdunk/hangok-lefogasa',
          head: false
        },
        {
          name: 'Hangolás',
          ref: '/mielott-nekikezdunk/hangolas',
          head: false
        },
        {
          name: 'Ritmusgitár 1.',
          ref: '/',
          head: true
        },
        {
          name: 'Akkordtanulás',
          ref: '/ritmusgitar1/akkordtanulas',
          head: false
        },
        {
          name: 'Akkordtanulás - hibák',
          ref: '/ritmusgitar1/akkordtanulas-hibak',
          head: false
        },        {
          name: 'A lehúzás',
          ref: '/ritmusgitar1/lehuzas',
          head: false
        },
        {
          name: 'Akkordváltás',
          ref: '/ritmusgitar1/akkordvaltas',
          head: false
        },
        {
          name: 'E-moll',
          ref: '/ritmusgitar1/e-moll',
          head: false
        },
        {
          name: 'A-moll',
          ref: '/ritmusgitar1/am',
          head: false
        },
        {
          name: 'A-dúr, D-dúr, E-dúr',
          ref: '/ritmusgitar1/a-d-e',
          head: false
        },
        {
          name: 'Akkordkíséret 1.',
          ref: '/ritmusgitar1/akkordkiseret1',
          head: false
        },        
        {
          name: 'Üres akkord',
          ref: '/ritmusgitar1/ures-akkord',
          head: false
        },
        {
          name: 'C-dúr, G-dúr',
          ref: '/ritmusgitar1/c-g',
          head: false
        },
        {
          name: 'Ritmusgitár 2.',
          ref: '/',
          head: true
        },
        {
          name: 'Akkordkíséret 2.',
          ref: '/ritmusgitar2/akkordkiseret2',
          head: false
        },
        {
          name: 'Pengető',
          ref: '/ritmusgitar2/pengeto',
          head: false
        },
        {
          name: 'D-moll, B7',
          ref: '/ritmusgitar2/d-moll-b-7',
          head: false
        },
        {name: 'Akkordkíséret 3.',
          ref: '/ritmusgitar2/akkordkiseret3',
          head: false
        },
        {name: 'B-moll (H-moll), F-dúr 1.',
          ref: '/ritmusgitar2/b-moll-d-dur-1',
          head: false
        },
        {name: 'B-moll, könnyített',
          ref: '/ritmusgitar2/b-moll-konnyitett',
          head: false
        },
        {name: 'F-dúr, könnyített',
          ref: '/ritmusgitar2/f-dur-konnyitett',
          head: false
        },
        {name: 'F-dúr, teljes',
          ref: '/ritmusgitar2/f-dur-teljes',
          head: false
        },
        {name: 'B-moll, teljes',
          ref: '/ritmusgitar2/b-moll-teljes',
          head: false
        },
        {name: 'Hetes akkordok',
          ref: '/ritmusgitar2/hetes-akkordok',
          head: false
        },
        {name: 'Mobil akkordok',
          ref: '/',
          head: true
        },
        {name: 'Barrés akkord',
          ref: '/mobil-akkordok/barres-akkord',
          head: false
        },
        {name: 'Formák',
          ref: '/mobil-akkordok/formak',
          head: false
        },
        {name: 'Kvintes akkord (power chord)',
          ref: '/mobil-akkordok/power-chord',
          head: false
        },
        {name: 'Melyik fajtat hasznaljam?',
          ref: '/mobil-akkordok/melyik-akkordfajtat-hasznaljam',
          head: false
        },
        {name: 'Hangzatfelbontás',
          ref: '/',
          head: true
        },
        {name: 'Hangzatfelbontás',
          ref: '/hangzatfelbontas/hangzatfelbontas',
          head: false
        },
        {name: 'Általános bontás',
          ref: '/hangzatfelbontas/altalanos-bontas',
          head: false
        },
        {name: 'Riffek',
          ref: '/',
          head: true
        },
        {name: 'Mi az a riff?',
          ref: '/riffek/riff',
          head: false
        },
        {name: 'Technikák',
          ref: '/riffek/technikak',
          head: false
        },
        {name: 'Reff gyakorlás',
          ref: '/riffek/riff-gyakorlas',
          head: false
        },
        {
          name: 'Alaphanggggggg utoso',
          ref: '/',
          head: false
        },
      ]
    }
  }

}
</script>

<style>
.nuxt-link-exact-active{
  color:blueviolet;
}
</style>