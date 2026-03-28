// MovieRank - Прототип кинематографической социальной сети

// Цитаты режиссёров
const directorQuotes = [
    { text: "Кино — это жизнь, из которой вырезали скучные моменты.", author: "Альфред Хичкок" },
    { text: "Кино — это искусство времени.", author: "Андрей Тарковский" },
    { text: "Каждый фильм — это путешествие в неизвестность.", author: "Кристофер Нолан" },
    { text: "Хорошее кино заставляет забыть о времени.", author: "Стивен Спилберг" }
];

// База фильмов с реальными постерами TMDB
const moviesDatabase = [
    {
        id: 1,
        title: "Начало",
        year: 2010,
        genre: "scifi",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        description: "Вор, который крадёт секреты через сны, получает задание внедрить идею в разум человека.",
        director: "Кристофер Нолан",
        actors: ["Леонардо ДиКаприо", "Джозеф Гордон-Левитт"],
        duration: "148 мин"
    },
    {
        id: 2,
        title: "Тёмный рыцарь",
        year: 2008,
        genre: "action",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hoewpvr0IZOIzuD5jWQ9vFuQLwP.jpg",
        description: "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Гордона и прокурора Дента.",
        director: "Кристофер Нолан",
        actors: ["Кристиан Бэйл", "Хит Леджер"],
        duration: "152 мин"
    },
    {
        id: 3,
        title: "Интерстеллар",
        year: 2014,
        genre: "scifi",
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6E86tC9z1PaVwpf475M.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
        description: "Команда исследователей отправляется через червоточину в космосе.",
        director: "Кристофер Нолан",
        actors: ["Мэттью Макконахи", "Энн Хэтэуэй"],
        duration: "169 мин"
    },
    {
        id: 4,
        title: "Форрест Гамп",
        year: 1994,
        genre: "drama",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/3h1JZGDhZ8nzxdgVnHWPN0SJUEND.jpg",
        description: "История жизни человека с добрым сердцем, ставшего свидетелем ключевых событий XX века.",
        director: "Роберт Земекис",
        actors: ["Том Хэнкс", "Робин Райт"],
        duration: "142 мин"
    },
    {
        id: 5,
        title: "Матрица",
        year: 1999,
        genre: "scifi",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/ncEsesfO05vWFUEGLpTQO1z4W7S.jpg",
        description: "Хакер узнаёт, что его мир — виртуальная реальность, созданная машинами.",
        director: "Вачовски",
        actors: ["Киану Ривз", "Кэрри-Энн Мосс"],
        duration: "136 мин"
    },
    {
        id: 6,
        title: "Побег из Шоушенка",
        year: 1994,
        genre: "drama",
        rating: 9.3,
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/kXfqH0LNrGm1E4q8f0fNvRr5m3K.jpg",
        description: "Банковский служащий находит надежду и дружбу в тюрьме Шоушенк.",
        director: "Фрэнк Дарабонт",
        actors: ["Тим Роббинс", "Морган Фриман"],
        duration: "142 мин"
    },
    {
        id: 7,
        title: "Криминальное чтиво",
        year: 1994,
        genre: "thriller",
        rating: 8.9,
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2sN5jvctXV78TG.jpg",
        description: "Переплетение криминальных историй в Лос-Анджелесе.",
        director: "Квентин Тарантино",
        actors: ["Джон Траволта", "Сэмюэл Л. Джексон"],
        duration: "154 мин"
    },
    {
        id: 8,
        title: "Бойцовский клуб",
        year: 1999,
        genre: "drama",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
        description: "Офисный работник создаёт подпольный бойцовский клуб.",
        director: "Дэвид Финчер",
        actors: ["Брэд Питт", "Эдвард Нортон"],
        duration: "139 мин"
    },
    {
        id: 9,
        title: "Властелин колец",
        year: 2003,
        genre: "action",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/2u7zbn8Jz8L9dFK5Uz9GG8YRNBT.jpg",
        description: "Финальная битва за Средиземье.",
        director: "Питер Джексон",
        actors: ["Элайджа Вуд", "Вигго Мортенсен"],
        duration: "201 мин"
    },
    {
        id: 10,
        title: "Гладиатор",
        year: 2000,
        genre: "action",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/rotQFyaeSMgSWWlR9elTkPLv3Bi.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hND7xAaxxBgaIspp9iMsaEXOSTz.jpg",
        description: "Генерал, ставший рабом, поднимается по ступеням славы на арене.",
        director: "Ридли Скотт",
        actors: ["Рассел Кроу", "Хоакин Феникс"],
        duration: "155 мин"
    },
    {
        id: 11,
        title: "Джокер",
        year: 2019,
        genre: "thriller",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YFGnoDL.jpg",
        description: "История происхождения Джокера.",
        director: "Тодд Филлипс",
        actors: ["Хоакин Феникс", "Роберт Де Ниро"],
        duration: "122 мин"
    },
    {
        id: 12,
        title: "Оппенгеймер",
        year: 2023,
        genre: "drama",
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        description: "История создания атомной бомбы.",
        director: "Кристофер Нолан",
        actors: ["Киллиан Мёрфи", "Эмили Блант"],
        duration: "180 мин"
    }
];

// Пользователи
const sampleUsers = [
    { id: 1, name: "Алексей К.", avatar: "https://i.pravatar.cc/150?img=11", status: "online" },
    { id: 2, name: "Мария С.", avatar: "https://i.pravatar.cc/150?img=5", status: "online" },
    { id: 3, name: "Дмитрий В.", avatar: "https://i.pravatar.cc/150?img=3", status: "away" }
];

// Состояние
let state = {
    user: null,
    ratings: {},
    lists: { watched: [], favorites: [], towatch: [] },
    friends: [1, 2],
    currentQuote: 0
};

let currentMovie = null;
let currentRating = 0;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initApp();
});

function loadState() {
    const saved = localStorage.getItem('movierank_state');
    if (saved) state = { ...state, ...JSON.parse(saved) };
}

function saveState() {
    localStorage.setItem('movierank_state', JSON.stringify(state));
}

function initApp() {
    // Показываем загрузку
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1500);
    
    // Ротация цитат
    rotateQuotes();
    setInterval(rotateQuotes, 4000);
    
    // Обновляем UI пользователя
    updateUserUI();
}

function rotateQuotes() {
    const quote = directorQuotes[state.currentQuote % directorQuotes.length];
    const textEl = document.getElementById('quoteText');
    const authorEl = document.getElementById('quoteAuthor');
    
    textEl.style.opacity = '0';
    authorEl.style.opacity = '0';
    
    setTimeout(() => {
        textEl.textContent = quote.text;
        authorEl.textContent = `— ${quote.author}`;
        textEl.style.opacity = '1';
        authorEl.style.opacity = '1';
    }, 200);
    
    state.currentQuote++;
}

function enterApp() {
    document.getElementById('heroSection').classList.add('hidden');
    document.getElementById('appContainer').style.display = 'flex';
    renderMovies();
    renderFeed();
}

// Навигация
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function showPage(pageId, element) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    // Убираем active со всех пунктов меню
    document.querySelectorAll('.nav-menu li').forEach(i => {
        i.classList.remove('active');
        i.style.background = '';
        i.style.color = '';
    });
    
    // Добавляем active на текущий элемент
    if (element) {
        element.classList.add('active');
    } else {
        // Если элемент не передан, найти по pageId
        const menuItems = document.querySelectorAll('.nav-menu li');
        const indexMap = { 'feed': 0, 'movies': 1, 'ratings': 2, 'lists': 3, 'friends': 4, 'top': 5 };
        const idx = indexMap[pageId];
        if (idx !== undefined && menuItems[idx]) {
            menuItems[idx].classList.add('active');
        }
    }
    
    if (window.innerWidth <= 1024) toggleSidebar();
    
    switch(pageId) {
        case 'feed': renderFeed(); break;
        case 'movies': renderMovies(); break;
        case 'ratings': renderRatings(); break;
        case 'lists': renderLists(); break;
        case 'friends': renderFriends(); break;
        case 'top': renderTop(); break;
    }
}

// Рендер фильмов
function renderMovies() {
    const carousel = document.getElementById('nowPlayingCarousel');
    const featured = moviesDatabase.slice(0, 4);
    
    carousel.innerHTML = featured.map(m => `
        <div class="carousel-item" onclick="showMovieDetail(${m.id})">
            <img src="${m.backdrop}" alt="${m.title}" loading="lazy">
            <div class="carousel-overlay">
                <h3>${m.title}</h3>
                <p>${m.year} · ★ ${m.rating}</p>
            </div>
        </div>
    `).join('');
    
    const grid = document.getElementById('popularMoviesGrid');
    grid.innerHTML = moviesDatabase.map(m => createMovieCard(m)).join('');
}

function createMovieCard(movie) {
    const userRating = state.ratings[movie.id];
    return `
        <div class="movie-card" onclick="showMovieDetail(${movie.id})">
            <div class="movie-poster-wrapper">
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
                <span class="movie-rating-badge">★ ${movie.rating}</span>
                <div class="movie-overlay">
                    <button class="quick-action-btn" onclick="event.stopPropagation(); quickRate(${movie.id})">
                        <i class="fas fa-star"></i>
                    </button>
                    <button class="quick-action-btn" onclick="event.stopPropagation(); toggleFavorite(${movie.id})">
                        <i class="${state.lists.favorites.includes(movie.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <h4>${movie.title}</h4>
                <p>${movie.year} · ${getGenreName(movie.genre)}</p>
                ${userRating ? `<p class="user-rating">Ваша оценка: ★ ${userRating}</p>` : ''}
            </div>
        </div>
    `;
}

// Лента с рецензиями и отзывами
function renderFeed() {
    const feed = document.getElementById('feedContent');
    
    const feedItems = [
        { 
            id: 1,
            user: sampleUsers[0], 
            action: 'оценил', 
            movie: moviesDatabase[0], 
            rating: 10, 
            time: '15 мин назад',
            review: 'Шедевр! Нолан создал невероятный мир снов. ДиКаприо блестяще исполнил роль. Финал оставляет много вопросов...',
            likes: 24,
            comments: [
                { user: "Мария С.", avatar: "https://i.pravatar.cc/150?img=5", text: "Полностью согласна! Этот фильм пересматриваю каждый год", time: "10 мин назад" }
            ]
        },
        { 
            id: 2,
            user: sampleUsers[1], 
            action: 'написала рецензию', 
            movie: moviesDatabase[2], 
            time: '1ч назад',
            review: 'Космическая одиссея, которая заставляет задуматься о смысле жизни. Макконахи просто великолепен. Музыка Ханса Циммера - отдельное произведение искусства.',
            likes: 56,
            comments: [
                { user: "Иван П.", avatar: "https://i.pravatar.cc/150?img=8", text: "Сцена на планете Миллер до сих пор вызывает мурашки", time: "45 мин назад" },
                { user: "Ольга К.", avatar: "https://i.pravatar.cc/150?img=10", text: "Лучший фильм про космос", time: "30 мин назад" }
            ]
        },
        { 
            id: 3,
            user: { id: 4, name: "Иван П.", avatar: "https://i.pravatar.cc/150?img=8", status: "online" }, 
            action: 'оценил', 
            movie: moviesDatabase[1], 
            rating: 9, 
            time: '2ч назад',
            review: 'Леджер создал лучшего Джокера в истории кино. Темный, атмосферный, напряженный.',
            likes: 42,
            comments: []
        },
        { 
            id: 4,
            user: { id: 5, name: "Анна М.", avatar: "https://i.pravatar.cc/150?img=9", status: "online" }, 
            action: 'добавила в избранное', 
            movie: moviesDatabase[3], 
            time: '3ч назад',
            review: 'Форрест - пример того, как доброта и честность побеждают. Каждый раз плачу в конце.',
            likes: 31,
            comments: [
                { user: "Дмитрий В.", avatar: "https://i.pravatar.cc/150?img=3", text: "Том Хэнкс великолепен!", time: "2ч назад" }
            ]
        },
        { 
            id: 5,
            user: sampleUsers[2], 
            action: 'оценил', 
            movie: moviesDatabase[4], 
            rating: 8, 
            time: '4ч назад',
            review: 'Матрица изменила кино навсегда. Эффекты до сих пор выглядят круто. Философия фильма глубже, чем кажется на первый взгляд.',
            likes: 18,
            comments: []
        },
        { 
            id: 6,
            user: { id: 6, name: "Ольга К.", avatar: "https://i.pravatar.cc/150?img=10", status: "away" }, 
            action: 'написала развернутую рецензию', 
            movie: moviesDatabase[6], 
            time: '5ч назад',
            review: 'Тарантино в своем репертуаре. Нелинейное повествование, остроумные диалоги, культовые персонажи. Сцена в таверне - шедевр кинематографа.',
            likes: 67,
            comments: [
                { user: "Алексей К.", avatar: "https://i.pravatar.cc/150?img=11", text: "Согласен, диалоги просто огонь", time: "4ч назад" }
            ]
        },
        { 
            id: 7,
            user: sampleUsers[0], 
            action: 'пересмотрел', 
            movie: moviesDatabase[7], 
            rating: 9, 
            time: '6ч назад',
            review: 'Каждый раз нахожу новые детали. Финчер - гений. Твист в конце все еще дает мурашки.',
            likes: 29,
            comments: []
        },
        { 
            id: 8,
            user: { id: 7, name: "Павел С.", avatar: "https://i.pravatar.cc/150?img=13", status: "online" }, 
            action: 'оценил', 
            movie: moviesDatabase[10], 
            rating: 8, 
            time: '8ч назад',
            review: 'Феникс превзошел все ожидания. Тяжелый, депрессивный, но невероятно сильный фильм.',
            likes: 45,
            comments: [
                { user: "Мария С.", avatar: "https://i.pravatar.cc/150?img=5", text: "Этот фильм сложно пересматривать из-за эмоций", time: "6ч назад" }
            ]
        },
        // Профессиональные рецензии критиков
        {
            id: 9,
            user: { id: 10, name: "Антон Долин", avatar: "https://i.pravatar.cc/150?img=60", status: "online", isCritic: true },
            action: 'написал профессиональную рецензию',
            movie: moviesDatabase[11],
            rating: 9,
            time: 'вчера',
            isProfessionalReview: true,
            review: '«Оппенгеймер» — это не просто биография «отца атомной бомбы», это философское исследование вины, власти и последствий научного прогресса. Нолан создает напряжение не через спецэффекты, а через диалоги и внутренний мир персонажа. Мёрфи дарит карьерное выступление — его взгляд говорит больше, чем слова. Трюмэн Капоте сказал бы: это кино о том, как человек стал богом и заплатил за это душой. Абсолютный must-see года.',
            likes: 156,
            comments: [
                { user: "Киноман 2024", avatar: "https://i.pravatar.cc/150?img=20", text: "Согласен, лучший фильм Нолана", time: "5ч назад" },
                { user: "Ирина К.", avatar: "https://i.pravatar.cc/150?img=15", text: "Долин всегда точно попадает в суть", time: "3ч назад" }
            ]
        },
        {
            id: 10,
            user: { id: 11, name: "Егор Москвин", avatar: "https://i.pravatar.cc/150?img=61", status: "online", isCritic: true },
            action: 'опубликовал критический разбор',
            movie: moviesDatabase[5],
            rating: 10,
            time: '2 дня назад',
            isProfessionalReview: true,
            review: '«Побег из Шоушенка» — эталон кинематографического storytelling. Дарабонт адаптировал повесть Кинга без потери глубины, но при этом создал универсальную притчу о надежде. Фриман — голос поколения, его закадровый текст стал культурным феноменом. Фильм работает на всех уровнях: как тюремная драма, как история дружбы, как метафора человеческого духа. Тридцать лет спустя он по-прежнему не теряет актуальности. Это кино, которое можно смело ставить в один ряд с классикой мировой литературы.',
            likes: 203,
            comments: [
                { user: "Фильмофил", avatar: "https://i.pravatar.cc/150?img=25", text: "Лучший фильм по Кингу, безусловно", time: "1 день назад" },
                { user: "Сергей М.", avatar: "https://i.pravatar.cc/150?img=30", text: "Сцена в библиотеке — шедевр", time: "20ч назад" },
                { user: "Анна П.", avatar: "https://i.pravatar.cc/150?img=22", text: "Москвин — лучший критик современности", time: "12ч назад" }
            ]
        }
    ];
    
    feed.innerHTML = feedItems.map(item => `
        <div class="feed-item" id="feed-item-${item.id}">
            <div class="feed-header">
                <img src="${item.user.avatar}" class="feed-avatar">
                <div>
                    <h4>${item.user.name} ${item.user.isCritic ? '<span class="critic-badge">Критик</span>' : ''}</h4>
                    <span>${item.action} ${item.rating ? `★ ${item.rating}/10` : ''} · ${item.time}</span>
                </div>
            </div>
            <div class="feed-movie" onclick="showMovieDetail(${item.movie.id})">
                <img src="${item.movie.poster}" alt="">
                <div>
                    <h5>${item.movie.title}</h5>
                    <p>${item.movie.year} · ${getGenreName(item.movie.genre)}</p>
                </div>
            </div>
            ${item.review ? `
            <div class="feed-review ${item.isProfessionalReview ? 'professional-review' : ''}">
                ${item.isProfessionalReview ? '<div class="review-header"><i class="fas fa-award"></i> Профессиональная рецензия</div>' : ''}
                <p>${item.review}</p>
            </div>
            ` : ''}
            <div class="feed-actions">
                <button class="feed-action-btn" onclick="likeFeedItem(this)">
                    <i class="far fa-heart"></i> <span>${item.likes || 0}</span>
                </button>
                <button class="feed-action-btn" onclick="toggleComments(${item.id})">
                    <i class="far fa-comment"></i> ${item.comments?.length || 0} Комментариев
                </button>
                <button class="feed-action-btn">
                    <i class="far fa-share-square"></i> Поделиться
                </button>
            </div>
            <div class="comments-section hidden" id="comments-${item.id}">
                <div class="comments-list">
                    ${item.comments?.map(c => `
                        <div class="comment">
                            <img src="${c.avatar}" class="comment-avatar">
                            <div class="comment-content">
                                <div class="comment-header">
                                    <span class="comment-author">${c.user}</span>
                                    <span class="comment-time">${c.time}</span>
                                </div>
                                <p>${c.text}</p>
                            </div>
                        </div>
                    `).join('') || '<p class="no-comments">Нет комментариев. Будьте первым!</p>'}
                </div>
                <div class="comment-form">
                    <input type="text" placeholder="Написать комментарий..." id="comment-input-${item.id}">
                    <button onclick="addComment(${item.id})"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleComments(itemId) {
    const section = document.getElementById(`comments-${itemId}`);
    section.classList.toggle('hidden');
}

function addComment(itemId) {
    const input = document.getElementById(`comment-input-${itemId}`);
    const text = input.value.trim();
    if (!text) return;
    
    const commentsList = document.querySelector(`#comments-${itemId} .comments-list`);
    const noComments = commentsList.querySelector('.no-comments');
    if (noComments) noComments.remove();
    
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = `
        <img src="${state.user?.avatar || 'https://i.pravatar.cc/150?img=12'}" class="comment-avatar">
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${state.user?.name || 'Гость'}</span>
                <span class="comment-time">только что</span>
            </div>
            <p>${text}</p>
        </div>
    `;
    commentsList.appendChild(comment);
    input.value = '';
    showToast('Комментарий добавлен', 'success');
}

function likeFeedItem(btn) {
    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    let count = parseInt(span.textContent) || 0;
    
    if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        icon.style.color = '#e50914';
        span.textContent = count + 1;
    } else {
        icon.classList.replace('fas', 'far');
        icon.style.color = '';
        span.textContent = count - 1;
    }
}

// Детали фильма
function showMovieDetail(movieId) {
    const m = moviesDatabase.find(x => x.id === movieId);
    if (!m) return;
    
    currentMovie = m;
    document.getElementById('detailPosterImg').src = m.poster;
    document.getElementById('detailTitle').textContent = m.title;
    document.getElementById('detailMeta').innerHTML = `
        <span>${m.year}</span>
        <span>${getGenreName(m.genre)}</span>
        <span>${m.duration}</span>
        <span>★ ${m.rating}</span>
    `;
    document.getElementById('detailDescription').textContent = m.description;
    document.getElementById('detailCast').innerHTML = m.actors.map(a => `
        <div class="cast-member"><div class="cast-avatar">${a[0]}</div><span>${a}</span></div>
    `).join('');
    document.getElementById('movieDetailHero').style.backgroundImage = `url(${m.backdrop})`;
    
    openModal('movieDetailModal');
}

// Рейтинги
function renderRatings() {
    const ratingsList = Object.entries(state.ratings);
    document.getElementById('totalWatched').textContent = state.lists.watched.length;
    document.getElementById('totalFavorites').textContent = state.lists.favorites.length;
    
    const avg = ratingsList.length ? (ratingsList.reduce((a,b) => a + b[1], 0) / ratingsList.length).toFixed(1) : '0';
    document.getElementById('avgUserRating').textContent = avg;
    
    // График
    const dist = {};
    for (let i = 1; i <= 10; i++) dist[i] = 0;
    ratingsList.forEach(([_, r]) => dist[r]++);
    const max = Math.max(...Object.values(dist)) || 1;
    
    document.getElementById('ratingsChart').innerHTML = Object.entries(dist).map(([r, c]) => `
        <div class="chart-bar">
            <div class="bar-fill" style="height: ${(c/max*100)}%"></div>
            <span>${r}</span>
        </div>
    `).join('');
    
    // Список
    const rated = ratingsList
        .map(([id, r]) => ({ movie: moviesDatabase.find(m => m.id == id), rating: r }))
        .filter(x => x.movie)
        .sort((a, b) => b.rating - a.rating);
    
    document.getElementById('userRatingsList').innerHTML = rated.map(item => `
        <div class="rating-item" onclick="showMovieDetail(${item.movie.id})">
            <img src="${item.movie.poster}" alt="">
            <div><h4>${item.movie.title}</h4><p>${item.movie.year}</p></div>
            <div class="rating-score">★ ${item.rating}</div>
        </div>
    `).join('') || '<p class="empty">Нет оценок</p>';
}

// Списки
function renderLists() {
    const lists = [
        { id: 'watched', name: 'Просмотренные', icon: 'fa-eye', count: state.lists.watched.length },
        { id: 'favorites', name: 'Избранное', icon: 'fa-heart', count: state.lists.favorites.length },
        { id: 'towatch', name: 'К просмотру', icon: 'fa-bookmark', count: state.lists.towatch.length }
    ];
    
    document.getElementById('userLists').innerHTML = lists.map(l => `
        <div class="list-card" onclick="showList('${l.id}')">
            <i class="fas ${l.icon}"></i>
            <h4>${l.name}</h4>
            <p>${l.count} фильмов</p>
        </div>
    `).join('') + `
        <div class="list-card create" onclick="showToast('Создание списка', 'info')">
            <i class="fas fa-plus"></i>
            <h4>Создать список</h4>
        </div>
    `;
}

// Друзья
function renderFriends() {
    const friends = state.friends.map(id => sampleUsers.find(u => u.id === id)).filter(Boolean);
    document.getElementById('friendsListContainer').innerHTML = friends.map(f => `
        <div class="friend-item">
            <img src="${f.avatar}" alt="">
            <div><h4>${f.name}</h4><p>${Math.floor(Math.random()*50)} оценок</p></div>
            <button onclick="removeFriend(${f.id})"><i class="fas fa-user-minus"></i></button>
        </div>
    `).join('');
}

// Топ
function renderTop() {
    const sorted = [...moviesDatabase].sort((a, b) => b.rating - a.rating);
    document.getElementById('topMoviesList').innerHTML = sorted.map((m, i) => `
        <div class="top-item" onclick="showMovieDetail(${m.id})">
            <div class="top-rank ${i < 3 ? 'top-'+(i+1) : ''}">${i+1}</div>
            <img src="${m.poster}" alt="">
            <div><h4>${m.title}</h4><p>${m.year}</p></div>
            <div>★ ${m.rating}</div>
        </div>
    `).join('');
}

// Действия
function quickRate(id) {
    currentMovie = moviesDatabase.find(m => m.id === id);
    openModal('rateModal');
}

function showRateModal() {
    currentRating = 0;
    document.querySelectorAll('#rateStars i').forEach(s => {
        s.classList.remove('active');
        s.classList.replace('fas', 'far');
    });
    document.getElementById('rateValue').textContent = 'Нажмите на звезду';
    openModal('rateModal');
}

function submitRating() {
    if (!currentRating) return showToast('Выберите оценку', 'error');
    
    state.ratings[currentMovie.id] = currentRating;
    if (!state.lists.watched.includes(currentMovie.id)) {
        state.lists.watched.push(currentMovie.id);
    }
    saveState();
    closeModal('rateModal');
    closeModal('movieDetailModal');
    showToast(`Оценка ${currentRating}/10 сохранена`, 'success');
    renderMovies();
    renderRatings();
}

function toggleFavorite(id) {
    const idx = state.lists.favorites.indexOf(id);
    if (idx > -1) {
        state.lists.favorites.splice(idx, 1);
        showToast('Удалено из избранного', 'info');
    } else {
        state.lists.favorites.push(id);
        showToast('Добавлено в избранное', 'success');
    }
    saveState();
    renderMovies();
}

function toggleWatchlist() {
    if (!currentMovie) return;
    const idx = state.lists.towatch.indexOf(currentMovie.id);
    if (idx > -1) {
        state.lists.towatch.splice(idx, 1);
        showToast('Удалено из списка', 'info');
    } else {
        state.lists.towatch.push(currentMovie.id);
        showToast('Добавлено в список', 'success');
    }
    saveState();
}

// Модальные окна
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// UI
function showAuthModal() { 
    openModal('authModal'); 
}

function showAuthFromLanding(tab) {
    switchAuthTab(tab);
    openModal('authModal');
}

function switchAuthTab(tab) {
    document.getElementById('loginTab').classList.toggle('active', tab === 'login');
    document.getElementById('registerTab').classList.toggle('active', tab === 'register');
    document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
    document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    state.user = { name: email.split('@')[0] || 'Киноман', email: email, avatar: 'https://i.pravatar.cc/150?img=12' };
    saveState();
    updateUserUI();
    closeModal('authModal');
    showToast('Добро пожаловать!', 'success');
    
    // Сбросить форму
    document.getElementById('loginForm').reset();
    
    // Автоматически входим в приложение
    enterApp();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    
    if (password !== passwordConfirm) {
        showToast('Пароли не совпадают', 'error');
        return;
    }
    
    state.user = { name: name, email: email, avatar: 'https://i.pravatar.cc/150?img=12' };
    saveState();
    updateUserUI();
    closeModal('authModal');
    showToast('Регистрация успешна! Добро пожаловать!', 'success');
    
    // Сбросить форму
    document.getElementById('registerForm').reset();
    
    // Автоматически входим в приложение
    enterApp();
}

function updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (state.user) {
        document.getElementById('userName').textContent = state.user.name;
        document.getElementById('userAvatarImg').src = state.user.avatar;
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
    } else {
        document.getElementById('userName').textContent = 'Гость';
        document.getElementById('userAvatarImg').src = 'https://i.pravatar.cc/150?img=12';
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
    }
}

function logout() {
    state.user = null;
    state.ratings = {};
    state.lists = { watched: [], favorites: [], towatch: [] };
    state.friends = [];
    saveState();
    showToast('Вы вышли из аккаунта', 'info');
    updateUserUI();
    renderMovies();
    renderRatings();
    renderLists();
    
    // Возвращаемся на landing page
    document.getElementById('heroSection').classList.remove('hidden');
    document.getElementById('appContainer').style.display = 'none';
    
    // Сброс активной вкладки
    document.querySelectorAll('.nav-menu li').forEach(i => i.classList.remove('active'));
    document.querySelector('.nav-menu li').classList.add('active');
}

function removeFriend(id) {
    state.friends = state.friends.filter(fid => fid !== id);
    saveState();
    renderFriends();
}

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function getGenreName(g) {
    const genres = { action: 'Боевик', comedy: 'Комедия', drama: 'Драма', horror: 'Ужасы', scifi: 'Фантастика', thriller: 'Триллер', romance: 'Мелодрама', animation: 'Мультфильм' };
    return genres[g] || g;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#rateStars i').forEach((star, idx) => {
        star.addEventListener('click', () => {
            currentRating = idx + 1;
            document.getElementById('rateValue').textContent = `Ваша оценка: ${currentRating}/10`;
            document.querySelectorAll('#rateStars i').forEach((s, i) => {
                if (i < currentRating) {
                    s.classList.add('active');
                    s.classList.replace('far', 'fas');
                } else {
                    s.classList.remove('active');
                    s.classList.replace('fas', 'far');
                }
            });
        });
    });
    
    document.querySelectorAll('.modal').forEach(m => {
        m.addEventListener('click', e => { if (e.target === m) m.classList.remove('active'); });
    });
});

// Глобальные функции
window.enterApp = enterApp;
window.toggleSidebar = toggleSidebar;
window.showPage = showPage;
window.showMovieDetail = showMovieDetail;
window.showRateModal = showRateModal;
window.submitRating = submitRating;
window.quickRate = quickRate;
window.toggleFavorite = toggleFavorite;
window.toggleWatchlist = toggleWatchlist;
window.showAuthModal = showAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.closeModal = closeModal;
window.logout = logout;
window.removeFriend = removeFriend;
window.showAuthFromLanding = showAuthFromLanding;
window.likeFeedItem = likeFeedItem;
window.toggleComments = toggleComments;
window.addComment = addComment;
