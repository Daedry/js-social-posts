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
    description: "La via del saggio è agire, ma non competere.",
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
    description: "Io e il mio amico del cuore Kurama ",
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
      "Movimenti e Danze Sacre di Gurdjieff per lo sviluppo armonico dell’Uomo",
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

// for (let i = 0; i < post.length; i++) {
post.forEach(singlePost => {
//   const singlePost = post[i];
//   const id = singlePost.id;
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
            <div class="like"><i class="fa-solid fa-thumbs-up"></i><strong> Mi Piace</strong> </div>
            <div class="like-numbers">Piace a <strong>${likes}</strong>  persone</div>
        </div>
      </div>

    `;
})


