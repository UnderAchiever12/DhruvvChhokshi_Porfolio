
-- Update your profile to make yourself an admin
-- Replace 'your-email@example.com' with your actual email address
UPDATE public.profiles 
SET is_admin = true 
WHERE email = 'your-email@example.com';
