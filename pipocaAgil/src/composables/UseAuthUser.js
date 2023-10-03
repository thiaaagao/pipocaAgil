import { ref } from 'vue'
import supabaseClient from '../boot/supabaseClient'

const user = ref(null)

export default function useAuthUser() {
    const { supabase } = supabaseClient

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

    const register = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signIn(
            { email, password }
        )
        if (error) throw error
        return user
    }

    const updateUser = async (data) => {
        const { user, error } = await supabase.auth.update(data)
        if (error) throw error
        return user
    }

    return {
        user,
        login,
        logout,
        isLoggedIn,
        register,
        updateUser
    }
}