import ProjectData from '@/data/ProjectData.ts';

export default [
  new ProjectData(
    'project-2',
    'PROTOTYPE',
    'img/prototype.jpg',
    `
    <div class="paragraph">
        <strong>PROTOTYPE</strong> 
       
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/km_gteMoyns?si=j1VhqfattE6dk4oa" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
   
    </div>

    <div class="paragraph center">
  

    <img class="pc-screenshot" src="/img/prototype.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="/img/prototype2.jpg" alt="Singing Addict Screenshot" />
    </div>
    `,
    '#5a78af',
  ),
  new ProjectData(
    'project-3',
    'FIGHT GAME',
    '/img/fight1.jpg',
    `
    <div class="paragraph">
        <strong>FIGHT GAME</strong> 
       
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ut9lYyIpvio?si=lkyGUuIvZCdWoCdJ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    

    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/fight1.jpg" alt="game fight Screenshot" />
        <img class="pc-screenshot" src="/img/fight2.jpg" alt="game fight Screenshot" />
        <img class="pc-screenshot" src="/img/fight3.jpg" alt="game fight Screenshot" />
        <img class="pc-screenshot" src="/img/fight4.jpg" alt="game fight Screenshot" />
    </div>
    `,
    '#383838',
  ),
  new ProjectData(
    'project-4',
    'PHYSICS CHAOS',
    'img/projects/project-4-icon.png',
    `
    <div class="paragraph">
    <strong>PHYSICS CHAOS</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `,
    '#e80fb7',
  ),
];
