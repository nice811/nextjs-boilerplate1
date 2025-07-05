   export default (req, res) => {
     const { code, state } = req.query;
     if (!code) {
       res.status(400).send('Missing code');
       return;
     }
     res.status(200).send('授权成功，code=' + code + (state ? ', state=' + state : ''));
   };
