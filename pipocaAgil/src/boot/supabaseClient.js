/* import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qwusbwharkbkddrjrgar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dXNid2hhcmtia2RkcmpyZ2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNzA4MTcsImV4cCI6MjAxMDc0NjgxN30.qdOLzrB12sdXDDASDN-4KWHT_Ym4m5So6DegRJY17WA')

console.log('init', supabase)
 */
import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://qwusbwharkbkddrjrgar.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dXNid2hhcmtia2RkcmpyZ2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNzA4MTcsImV4cCI6MjAxMDc0NjgxN30.qdOLzrB12sdXDDASDN-4KWHT_Ym4m5So6DegRJY17WA'
const supabase = createClient(supabaseUrl, supabaseKey)

// state session
/* supabase.auth.onAuthStateChange((event, session) => {
    const { user } = useAuthUser()
    // console.log(session)
    // console.log(event)
    //user.value = session?.user || null
})
 */
console.log('init', supabase)
export default function useSupabase() {
    return { supabase }
}
