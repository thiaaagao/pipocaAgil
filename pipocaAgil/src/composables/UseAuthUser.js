import { ref } from 'vue'
import useSupabase from 'boot/supabase'

const user = ref(null)

export default function useAuthUser() {
    const { supabase } = useSupabase()

    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        return user
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error

    }

    const isLoggedIn = async () => {
        return !!user.value
    }

    const register = async ({ email, password, ...meta }) => { // register
        const { user, error } = await supabase.auth.signUp(
            { email, password, options: { data: meta } }
        )
        if (error) throw error
        return user
    }

    const update = async (data) => {
        const { user, error } = await supabase.auth.update(data)
        if (error) throw error
        return user
    }

    const sendPasswordResetEmail = async (email) => {
        const { user, error } = await supabase.auth.resetPasswordForEmail(email)
        if (error) throw error
        return user
    }

    return {
        user,
        login,
        logout,
        isLoggedIn,
        register,
        update,
        sendPasswordResetEmail,
    }
}