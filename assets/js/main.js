/* 
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
*/

const post = [
  {
    id: 1,
    description: "La via del saggio è agire, ma non competere. <br> Quando sei contento di essere semplicemente te stesso e non fai confronti e non competi, tutti ti rispetteranno.",
    image:
      "https://www.revistaesfinge.com/wp-content/uploads/2016/01/ae4bbf432d7a347a7d7b6f051b071f94.jpg",
    avatar:
      "https://frasisocial.com/wp-content/uploads/2019/03/lao-tze-626x400.jpg",
    author: "Lao Tzu",
    numberlikes: 80,
    publication: "02/22/2022",
  },

  {
    id: 2,
    description: "“La morte è l’unica saggia consigliera che abbiamo. Ogni volta che senti, come fai sempre, che tutto va male e stai per essere annientato, rivolgiti alla tua morte e chiedile se è proprio così. Lei ti dirà che stai sbagliando, che in realtà niente conta al di fuori del suo tocco. La morte ti dirà “non ti ho ancora toccato”.",
    image:
      "https://www.coachingmagnetico.it/wp-content/uploads/2017/10/37036a882618b60477afb2969f8289b5-d5oaglj.jpg",
    avatar:
      "https://biropress.files.wordpress.com/2017/01/strade-possibili.jpg",
    numberlikes: 180,
    author: "Don Juan Matus",
    publication: "02/02/2022",
  },

  {
    id: 3,
    description:
      "Movimenti e Danze Sacre di Gurdjieff per lo sviluppo armonico dell’Uomo. <br> I Movimenti e le Danze Sacre sono un’antica disciplina tramandata per aiutare l’essere umano a contattare ed esplorare il proprio mondo interiore. Sono un insieme di movimenti differenti: figure geometriche, preghiere, danze femminili e rituali maschili provenienti dalla tradizione derviscia. La musica, creata da Gurdjieff è ricca di armonia, melodia e ritmo. Questi movimenti producono un cambiamento nel corpo, nella circolazione del sangue, nel ritmo respiratorio, portando uno stato di lucidità e di presenza cosciente.",
    image:
      "https://www.supernaturalcafe.it/wp-content/uploads/2016/01/gurdjieff1.jpg",
    avatar: "https://qcgonv.files.wordpress.com/2015/10/gurdjieff.jpeg",
    numberlikes: 180,
    author: "George Ivanovitch Gurdjieff",
    publication: "02/20/2022",
  },
];

/* 
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html,
stampiamo i post del nostro feed.
*/

const card = document.querySelector(".container");

post.forEach(singlePost => {
  const description = singlePost.description;
  const image = singlePost.image;
  const avatar = singlePost.avatar;
  const likes = singlePost.numberlikes;
  const author = singlePost.author;
  const publication = singlePost.publication;

  card.innerHTML += `
     <div class="card">
        <div class="profile">
            <div class="avatar">
                <img src="${avatar}" alt="">
            </div>
            <div class="profile-name">
                <h3>${author}</h3>
                <div class="publication-date">
                    ${publication}
                </div>
            </div>

        </div>
        <div class="post">
            <div class="description">${description}</div>
            <div class="img-post">
                <img src="${image}" alt="">
            </div>
        </div>
        <div class="interaction">
            <button class="like"><i class="fa-solid fa-thumbs-up"></i><strong> Mi Piace</strong> </button>
            <div class="like-numbers">Piace a <strong>${likes}</strong> persone</div>
        </div>
     </div>

    `;
})

/* 
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo 
il counter dei likes relativo. Salviamo in un secondo array gli id 
dei post ai quali abbiamo messo il like.
*/