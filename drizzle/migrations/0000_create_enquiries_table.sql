CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL DEFAULT 'contact',
  name varchar(120) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(30),
  subject varchar(200),
  company varchar(200),
  country varchar(100),
  quantity varchar(100),
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
