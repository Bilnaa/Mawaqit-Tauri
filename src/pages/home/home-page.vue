<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "../../components/Greet.vue";
</script>

<template>
<div class="container mx-auto p-4">
        <div class="top flex justify-between items-center mb-4">
            <router-link to="/login" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Connexion
            </router-link>
            <h1 class="text-3xl font-semibold">Horaires de Prières</h1>
        </div>

        
        
        <div v-if="isLogin" class="bg-white rounded shadow p-4">
            <h2 class="text-xl font-semibold mb-2">Aujourd'hui</h2>
            <ul>
                <li class="flex justify-between items-center border-b py-2">
                    <span>Fajr (Aube)</span>
                    <span>5:30 AM</span>
                </li>
                <li class="flex justify-between items-center border-b py-2">
                    <span>Dhuhr (Midi)</span>
                    <span>12:30 PM</span>
                </li>
                <li class="flex justify-between items-center border-b py-2">
                    <span>Asr (Après-midi)</span>
                    <span>4:00 PM</span>
                </li>
                <li class="flex justify-between items-center border-b py-2">
                    <span>Maghrib (Coucher du soleil)</span>
                    <span>7:30 PM</span>
                </li>
                <li class="flex justify-between items-center py-2">
                    <span>Isha (Nuit)</span>
                    <span>9:00 PM</span>
                </li>
            </ul>
        </div>
        <div class="bg-white rounded shadow p-4" v-else>
            <h2 class="text-xl font-semibold mb-2">Aujourd'hui</h2>
            <p class="text-gray-500">Vous devez vous connecter pour voir les horaires de prières.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: localStorage.getItem('isLogin') || false,
        }
    }
}
</script>