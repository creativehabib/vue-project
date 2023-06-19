import { ref, reactive } from "vue";
import {useRouter} from "vue-router";
import { UserStore } from "@/stores/UserStore";
import axios from "axios";
import Constants from "@/Constants";
let user = reactive({
    name: '',
    email: '',
})
export default function useAuth(){
    const processing = ref(false)
    const validationErrors = ref({})
    const router = useRouter()
    const store = UserStore()

    const loginForm = reactive({
        email: '',
        password: '',
        remember: false
    })

    const registerForm = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const submitLogin = async () => {
        if (processing.value) return

        processing.value = true
        validationErrors.value = {}

        await axios.post(`${Constants.BASE_URL}/login`, loginForm)
            .then(async response => {
                //console.log(response)
                store.setToken(response.data.token)
                await router.push({ name: 'Dashboard' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => processing.value = false)
    }

    const logout = async () => {
        if (processing.value) return

        processing.value = true

        axios.post(`${Constants.BASE_URL}/logout`)
            .then(response =>{
                user.name = ''
                user.email = ''
                store.removeToken()
                router.push({ name: 'Login' })
                //window.location.reload()
            })
            .catch(error => {
                // swal({
                //     icon: 'error',
                //     title: error.response.status,
                //     text: error.response.statusText
                // })
            })
            .finally(() => {
                processing.value = false
                // Cookies.remove('loggedIn')
            })
    }
    const getUser = async () =>{


    }

    return {
        window:axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`,
        loginForm,
        registerForm,
        validationErrors,
        processing,
        submitLogin,
        logout,
    }
}