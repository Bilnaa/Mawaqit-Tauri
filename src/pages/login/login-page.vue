<script setup>

</script>
<template>
    <div class="flex flex-col items-center justify-center px-6 py-12 mx-auto md:h-[calc(100vh-136px)] lg:py-0">
    <div class="bg-white shadow-lg rounded-lg px-6 py-4">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong class="font-bold">Créez-vous bien des identifiants chez Mawaqit</strong>
                </div>
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Connexion à votre compte
            </h1>
            <form class="space-y-4 md:space-y-6" action="/login" method="get">
                <div>
                    <label for="email" class="block text-gray-800 font-semibold mb-2">Email</label>
                    <input type="email" name="email" id="email"
                           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                           placeholder="email@gmail.com" required>
                </div>
                <div>
                    <label for="email" class="block text-gray-800 font-semibold mb-2">Mot de passe</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                           required>
                </div>

                <div class="text-center">
                    <button @click="getToken"
                            class="bg-indigo-600 text-white hover:bg-indigo-900 font-bold py-3 px-6 rounded-full">
                        Connexion
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

</template>

<script>
import getToken from "../../scripts/getToken.js";
export default {
    data() {
        return {
            isLogin: localStorage.getItem('isLogin') || false,
            token : localStorage.getItem('token') || null,

        }
    },
    methods: {
    },
    async mounted() {
        // if the route has params, it means the user is coming from the login page
        // get them and use the getToken function (that doesn't exist yet)
        // to get the token and save it in localStorage
        if (location.href.includes('email') && location.href.includes('password')) {
            const email = location.href.split('?')[1].split('email=')[1].split('&')[0];
            const password = location.href.split('?')[1].split('password=')[1];
            // inside the inputs
            document.getElementById('email').value = decodeURIComponent(email);
            document.getElementById('password').value = decodeURIComponent(password);
            await getToken(email, password);
        } else if (this.isLogin && this.token != null && this.token != "") {
            // if the user is already logged in, redirect them to the home page
            this.$router.push('/')
        }
    }
}
</script>