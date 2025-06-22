
-- Create a projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  github_url TEXT,
  demo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on projects table
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects table (public read, admin write)
CREATE POLICY "Anyone can view projects" 
  ON public.projects 
  FOR SELECT 
  TO public
  USING (true);

CREATE POLICY "Admins can manage projects" 
  ON public.projects 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );
