export default function handler(req, res) {
  if(req.method === 'GET' && req.body != ''){
    res.status(200).json('Nice Dude')
  }

  res.status(400).json('Fuck off')
}