const navbar = document.querySelector('#navbar');

const createNavHome = () => {
    navbar.innerHTML = `<div class="w-full h-16 mx-auto flex items-center px-4 justify-between">
      <p class="font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">TodoApp</p>

      <!-- version mobile -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:hidden text-zinc-300 hover:text-purple-400 hover:bg-zinc-900 cursor-pointer p-2 rounded-xl transition-colors">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div class="bg-zinc-950/95 backdrop-blur-md fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-5 hidden border-t border-zinc-900">
        <a href="/login" class="text-zinc-300 font-semibold hover:text-white transition-colors py-2.5 px-5 rounded-xl">Login</a>
        <a href="/signup" class="text-white font-bold bg-purple-600 hover:bg-purple-500 py-2.5 px-5 rounded-xl shadow-lg shadow-purple-600/20 transition-all">Registro</a>
      </div>
                                
      <!-- version de escritorio -->
      <div class="hidden md:flex flex-row items-center gap-2">
        <a href="/login/" class="text-zinc-300 text-sm font-semibold hover:text-white transition-colors py-2 px-4 rounded-xl">Login</a>
        <a href="/signup/" class="text-white text-sm font-bold bg-purple-600 hover:bg-purple-500 py-2 px-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all">Registro</a>
      </div>
    </div>`;
};

const createNavSignunp = () => {
    navbar.innerHTML = `<div class="w-full h-16 mx-auto flex items-center px-4 justify-between">
      <p class="font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">TodoApp</p>

      <!-- version mobile -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:hidden text-zinc-300 hover:text-purple-400 hover:bg-zinc-900 cursor-pointer p-2 rounded-xl transition-colors">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div class="bg-zinc-950/95 backdrop-blur-md fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-5 hidden border-t border-zinc-900">
        <a href="/login" class="text-white font-bold bg-purple-600 hover:bg-purple-500 py-2.5 px-5 rounded-xl shadow-lg shadow-purple-600/20 transition-all">Login</a>
      </div>
                                
      <!-- version de escritorio -->
      <div class="hidden md:flex flex-row items-center gap-2">
        <a href="/login/" class="text-white text-sm font-bold bg-purple-600 hover:bg-purple-500 py-2 px-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all">Login</a>
      </div>
    </div>`;
};

const createNavLogin = () => {
    navbar.innerHTML = `<div class="w-full h-16 mx-auto flex items-center px-4 justify-between">
                            <p class="font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">TodoApp</p>

                            <!-- version mobile -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:hidden text-zinc-300 hover:text-purple-400 hover:bg-zinc-900 cursor-pointer p-2 rounded-xl transition-colors">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <div class="bg-zinc-950/95 backdrop-blur-md fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-5 hidden border-t border-zinc-900">
                                <a href="/signup" class="text-white font-bold bg-purple-600 hover:bg-purple-500 py-2.5 px-5 rounded-xl shadow-lg shadow-purple-600/20 transition-all">Registro</a>
                            </div>
                                
                            <!-- version de escritorio -->
                            <div class="hidden md:flex flex-row items-center gap-2">
                                <a href="/signup/" class="text-white text-sm font-bold bg-purple-600 hover:bg-purple-500 py-2 px-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all">Registro</a>
                            </div>
                        </div>`;
};

const createNavTodos = () => {
    navbar.innerHTML = `<div class="w-full h-16 mx-auto flex items-center px-4 justify-between">
                            <p class="font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">TodoApp</p>

                            <!-- version mobile -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:hidden text-zinc-300 hover:text-purple-400 hover:bg-zinc-900 cursor-pointer p-2 rounded-xl transition-colors">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <div class="bg-zinc-950/95 backdrop-blur-md fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-5 hidden border-t border-zinc-900">
                                <button id="close-btn" class="text-white font-bold bg-red-600/80 hover:bg-red-600 py-2.5 px-5 rounded-xl transition-all cursor-pointer">Cerrar Sesion</button>
                            </div>
                                
                            <!-- version de escritorio -->
                            <div class="hidden md:flex flex-row items-center gap-2">
                                <button id="close-btn" class="text-white text-sm font-bold bg-red-600/80 hover:bg-red-600 py-2 px-4 rounded-xl transition-all cursor-pointer">Cerrar Sesion</button>
                            </div>
                        </div>`;
};

if(window.location.pathname === '/') {
    createNavHome();
} else if (window.location.pathname === '/signup/') {
    createNavSignunp()
} else if (window.location.pathname === '/login/') {
    createNavLogin();
} else if (window.location.pathname === '/todos/') {
    createNavTodos();
}

const navBtn = navbar.children[0].children[1];

navBtn.addEventListener('click', e => {
    const menuMobile = navbar.children[0].children[2];
    
    if (!navBtn.classList.contains('active')) {
        navBtn.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />`
        navBtn.classList.add('active');
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');
    } else {
        navBtn.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />`;
        navBtn.classList.remove('active');
        menuMobile.classList.add('hidden');
        menuMobile.classList.remove('flex');
    }
})

const closeBtnDescktop = navbar.children[0].children[3].children[0];
const closeBtnMobile = navbar.children[0].children[2].children[0];

closeBtnDescktop.addEventListener('click', async e => {
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/login';
    } catch (error) {
        console.log(error);
    }
})
closeBtnMobile.addEventListener('click', async e => {
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/login';
    } catch (error) {
        console.log(error);
    }
})