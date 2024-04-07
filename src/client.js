
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kluvbwymndzezmxeochf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdXZid3ltbmR6ZXpteGVvY2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNjcyOTMsImV4cCI6MjAyNzk0MzI5M30.vAgVEWcIaNNC4hkw-H_67eypwDRzRLJeKFPIXLs_R0Y"
export const supabase = createClient(supabaseUrl, supabaseKey)