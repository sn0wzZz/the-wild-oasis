import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://nzfyjwgtjmtqsyyqokor.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56Znlqd2d0am10cXN5eXFva29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyNTkwNTksImV4cCI6MjAwOTgzNTA1OX0.16GSgBwsWjuEJ7wECLv_6uwWUAD9uDIvGR5QKIeCR9o'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase